import numpy as np, wave, sys
SR=44100
rng=np.random.default_rng(7)
def ks(freq,dur,bright=0.5,decay=0.996):
    N=int(SR/freq); n=int(SR*dur)
    buf=rng.uniform(-1,1,N)
    # pluck position filter -> softer nylon tone
    buf=np.convolve(buf,np.ones(3)/3,'same')*(0.6+0.4*bright)
    out=np.zeros(n); b=buf.copy(); idx=0
    for i in range(n):
        v=b[idx]; nxt=b[(idx+1)%N]
        b[idx]=decay*0.5*(v+nxt); out[i]=v; idx=(idx+1)%N
    env=np.minimum(1,np.arange(n)/(0.004*SR))
    return out*env
def add(mix,s,x):
    if s<0 or s>=len(mix): return
    e=min(len(mix),s+len(x)); mix[s:e]+=x[:e-s]
def note(m): return 440*2**((m-69)/12)
def lp(x,fc):
    from scipy.signal import butter,sosfiltfilt
    return sosfiltfilt(butter(4,fc,fs=SR,output='sos'),x)
def reverb(x,t=1.8,mix=0.25):
    L=int(SR*t); ir=lp(rng.normal(0,1,L),3500)*np.exp(-np.linspace(0,7,L)); ir[0]=0
    from numpy.fft import rfft,irfft
    n=len(x)+L; nf=1<<(n-1).bit_length()
    w=irfft(rfft(x,nf)*rfft(ir,nf),nf)[:len(x)]
    w/=np.max(np.abs(w))+1e-9
    return x*(1-mix)+w*mix*np.max(np.abs(x))
def song(total, bpm=92, seed=7, variant=0):
    global rng; rng=np.random.default_rng(seed)
    beat=60/bpm; bar=4*beat
    # Andalusian cadence (Am G F E) / variant: Dm C Bb A
    prog=[[57,64,69,72,76],[55,62,67,71,74],[53,60,65,69,72],[52,59,64,68,71]]
    if variant==1: prog=[[50,57,62,65,69],[48,55,60,64,67],[46,53,58,62,65],[45,52,57,61,64]]
    if variant==2: prog=[[57,64,69,72,76],[53,60,65,69,72],[48,55,60,64,67],[52,59,64,68,71]]
    n=int(SR*(total+3)); mix=np.zeros(n)
    pattern=[0,3,2,4,1,3,2,4]  # fingerpicking indexes on 8ths
    t=0.0; b=0
    while t<total:
        ch=prog[b%4] if t<total-bar*0.9 else prog[0]
        # bass on 1 and 3
        for k,off in enumerate([0,2*beat]):
            s=int((t+off)*SR); x=ks(note(ch[0]-12),2.4,0.3,0.997)*0.55
            add(mix,s,x)
        for j,pi in enumerate(pattern):
            s=int((t+j*beat/2+rng.normal(0,0.006))*SR)
            x=ks(note(ch[pi]),1.8,0.6,0.9955)*(0.32 if j%2 else 0.4)*rng.uniform(.85,1.05)
            add(mix,s,x)
        # soft shaker 16ths
        for j in range(16):
            s=int((t+j*beat/4)*SR); L=int(0.05*SR)
            nz=rng.normal(0,1,L)*np.exp(-np.linspace(0,9,L)); nz=np.diff(nz,prepend=0)
            add(mix,s,nz*(0.022 if j%4==2 else 0.01))
        # cajon-like low thump on 1 and 3
        for off in [0,2*beat]:
            s=int((t+off)*SR); L=int(0.25*SR); tt=np.arange(L)/SR
            th=np.sin(2*np.pi*(90-40*tt/0.25)*tt)*np.exp(-tt*18)
            add(mix,s,th*0.35)
        L=int(bar*SR); tt=np.arange(L)/SR; pad=sum(np.sin(2*np.pi*note(m)*tt)*0.5+np.sin(2*np.pi*note(m)*1.003*tt)*0.5 for m in ch[1:4])
        env=np.minimum(1,tt/0.6)*np.minimum(1,(bar-tt)/0.6)
        add(mix,int(t*SR),pad*env*0.035)
        t+=bar; b+=1
    # final ring
    s=int(t*SR) if t*SR<n else n-1
    mix=reverb(mix,2.2,0.28)
    mix=mix[:int(SR*total)]
    fi=int(0.25*SR); fo=int(1.6*SR)
    mix[:fi]*=np.linspace(0,1,fi); mix[-fo:]*=np.linspace(1,0,fo)**1.5
    # gentle warm lowpass
    mix=lp(mix,7000)
    mix=np.tanh(mix/np.max(np.abs(mix))*1.4)/np.tanh(1.4)*0.6
    return mix
def write(fn,x):
    st=np.stack([x,np.roll(x,int(0.012*SR))*0.96],1)
    d=(np.clip(st,-1,1)*32767).astype(np.int16)
    w=wave.open(fn,'wb'); w.setnchannels(2); w.setsampwidth(2); w.setframerate(SR); w.writeframes(d.tobytes()); w.close()
for name,dur,bpm,seed,var in [('m1',12.9,96,3,0),('m2',12.9,88,5,2),('m3',12.5,92,9,1)]:
    write(name+'.wav',song(dur,bpm,seed,var)); print(name)
