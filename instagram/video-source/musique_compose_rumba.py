import numpy as np, wave
from scipy.signal import butter, sosfiltfilt, sosfilt
SR=44100
rng=np.random.default_rng(1)
def bp(x,lo,hi): return sosfilt(butter(2,[lo,hi],btype='band',fs=SR,output='sos'),x)
def lp(x,fc): return sosfiltfilt(butter(4,fc,fs=SR,output='sos'),x)
def hp(x,fc): return sosfiltfilt(butter(2,fc,btype='high',fs=SR,output='sos'),x)
def ks(freq,dur,bright=0.7,decay=0.996,mute=False):
    N=max(2,int(SR/freq)); n=int(SR*dur)
    buf=rng.uniform(-1,1,N); 
    if bright<1: buf=np.convolve(buf,np.ones(2)/2,'same')
    out=np.zeros(n); b=buf.copy(); idx=0; d=0.93 if mute else decay
    for i in range(n):
        v=b[idx]; b[idx]=d*0.5*(v+b[(idx+1)%N]); out[i]=v; idx=(idx+1)%N
    return out
def note(m): return 440*2**((m-69)/12)
def add(mix,s,x,g=1.0):
    if s<0 or s>=len(mix): return
    e=min(len(mix),s+len(x)); mix[s:e]+=x[:e-s]*g
def strum(mix,t,chord,up=False,g=0.25,mute=False,dur=0.9):
    ns=chord[::-1] if up else chord
    for k,m in enumerate(ns):
        add(mix,int((t+k*0.009+rng.normal(0,.002))*SR),ks(note(m),dur,0.9,0.9965,mute),g*(0.8 if up else 1))
def clap(mix,t,g=0.35):
    L=int(0.12*SR); x=np.zeros(L)
    for o in [0,0.008,0.017]:
        s=int(o*SR); m=int(0.1*SR); add(x,s,rng.normal(0,1,m)*np.exp(-np.linspace(0,12,m)))
    add(mix,int(t*SR),bp(x,900,3500),g)
def kick(mix,t,g=0.8):
    L=int(0.3*SR); tt=np.arange(L)/SR
    add(mix,int(t*SR),np.sin(2*np.pi*(55+70*np.exp(-tt*30))*tt)*np.exp(-tt*11),g)
def slap(mix,t,g=0.4):
    L=int(0.18*SR); tt=np.arange(L)/SR
    x=bp(rng.normal(0,1,L),300,2500)*np.exp(-tt*28)+np.sin(2*np.pi*190*tt)*np.exp(-tt*25)*0.6
    add(mix,int(t*SR),x,g)
def shaker(mix,t,g=0.06):
    L=int(0.06*SR); add(mix,int(t*SR),hp(rng.normal(0,1,L),5000)*np.exp(-np.linspace(0,8,L)),g)
def reverb(x,t=1.2,mix=0.18):
    L=int(SR*t); ir=lp(rng.normal(0,1,L),4000)*np.exp(-np.linspace(0,8,L)); ir[0]=0
    from numpy.fft import rfft,irfft
    nf=1<<(len(x)+L-1).bit_length(); w=irfft(rfft(x,nf)*rfft(ir,nf),nf)[:len(x)]
    return x+w/np.max(np.abs(w))*np.max(np.abs(x))*mix
PROG={0:[[45,52,57,60,64],[43,50,55,59,62],[41,48,53,57,60],[40,47,52,56,59]],
      1:[[50,57,62,65,69],[48,55,60,64,67],[46,53,58,62,65],[45,52,57,61,64]],
      2:[[45,52,57,60,64],[41,48,53,57,60],[43,50,55,59,62],[40,47,52,56,59]]}
# lead riffs (relative to chord root, phrygian-ish), 8th positions
RIFF=[[(0,12),(1,15),(2,17),(3,15),(4,12)],[(0,14),(1,12),(2,10),(4,12)],[(0,12),(2,10),(3,9),(4,7)],[(0,8),(1,10),(2,11),(4,12)]]
def song(total,bpm,var,seed):
    global rng; rng=np.random.default_rng(seed)
    beat=60/bpm; bar=4*beat; e=beat/2; n=int(SR*(total+2)); mix=np.zeros(n); lead=np.zeros(n)
    P=PROG[var]; t=0; b=0
    while t<total-0.2:
        last= t+bar>total-0.3
        ch=P[0] if last else P[b%4]; gui=ch[1:]
        # rumba strum: D . D U . U D U  (8ths)
        pat=[(0,'D'),(2,'D'),(3,'U'),(5,'U'),(6,'D'),(7,'U')]
        for pos,dr in pat:
            strum(mix,t+pos*e,gui,up=dr=='U',g=0.16 if pos in (0,4) else 0.12)
        for pos in (2,6): strum(mix,t+pos*e,gui,g=0.05,mute=True,dur=0.12)  # chasquido
        # bass
        for pos,iv in [(0,0),(3,7),(4,0),(7,12)]:
            add(mix,int((t+pos*e)*SR),lp(ks(note(ch[0]-12+iv),0.5,0.5,0.997),900),0.55)
        # drums
        kick(mix,t); kick(mix,t+3*e,0.55); kick(mix,t+4*e,0.7)
        slap(mix,t+2*e); slap(mix,t+6*e)
        clap(mix,t+2*e); clap(mix,t+6*e); clap(mix,t+5*e,0.12); clap(mix,t+7*e,0.15)
        for j in range(16): shaker(mix,t+j*e/2,0.05 if j%2 else 0.025)
        # lead riff from bar 2 on, every bar
        if b>=1 and not last:
            for pos,iv in RIFF[b%4]:
                add(lead,int((t+pos*e+0.002)*SR),ks(note(ch[0]+12+iv),0.7,1,0.9975),0.28)
        if last:
            strum(mix,t,gui,g=0.2,dur=2.0); kick(mix,t)
        t+=bar; b+=1
    mix=mix+reverb(lead,1.4,0.35)
    mix=reverb(mix,1.0,0.12)
    mix=lp(hp(mix,40),9000)[:int(SR*total)]
    fi=int(0.05*SR); fo=int(1.0*SR); mix[:fi]*=np.linspace(0,1,fi); mix[-fo:]*=np.linspace(1,0,fo)
    mix=np.tanh(mix/np.max(np.abs(mix))*2.0)/np.tanh(2.0)*0.85
    return mix
def write(fn,x):
    st=np.stack([x,np.roll(x,int(0.01*SR))*0.97],1)
    w=wave.open(fn,'wb'); w.setnchannels(2); w.setsampwidth(2); w.setframerate(SR); w.writeframes((np.clip(st,-1,1)*32767).astype(np.int16).tobytes()); w.close()
for name,dur,bpm,var,seed in [('m1',12.9,116,0,3),('m2',12.9,108,2,5),('m3',12.5,112,1,9)]:
    write(name+'.wav',song(dur,bpm,var,seed)); print(name)
