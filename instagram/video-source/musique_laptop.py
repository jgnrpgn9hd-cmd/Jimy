# Nappe d'ambiance douce et chaude (9 s) pour le reel « écran portable ».
import numpy as np, scipy.io.wavfile as wf
SR=44100; D=9.0; t=np.arange(int(SR*D))/SR
def note(f): return 440*2**((f-69)/12)
def pad(midis,start,dur,amp=.12):
    out=np.zeros_like(t); m=(t>=start)&(t<start+dur); tt=t[m]-start
    env=np.minimum(1,tt/1.2)*np.minimum(1,(dur-tt)/1.5)
    for k,mi in enumerate(midis):
        f=note(mi)
        for det in (-0.12,0,0.12):
            ff=f*2**(det/12/8)
            out[m]+=amp*env*(np.sin(2*np.pi*ff*tt+k)+.35*np.sin(4*np.pi*ff*tt)+.12*np.sin(6*np.pi*ff*tt))/3
    return out
mix=np.zeros_like(t)
mix+=pad([53,60,64,69],0,4.8)      # Fmaj7
mix+=pad([57,60,64,67],4.2,4.8)    # Am7
# basse ronde
for st,mi in [(0,41),(4.2,45)]:
    m=(t>=st)&(t<st+4.8); tt=t[m]-st
    mix[m]+=.16*np.sin(2*np.pi*note(mi)*tt)*np.minimum(1,tt/.6)*np.minimum(1,(4.8-tt)/1.2)
# petites notes cristallines (cloche) sur l'apparition de la bouteille et du texte
for st,mi in [(0.5,84),(1.05,88),(1.6,91),(3.2,88),(5.0,84),(5.6,88),(6.3,93),(7.4,91)]:
    m=(t>=st); tt=t[m]-st
    mix[m]+=.07*np.exp(-tt*2.2)*(np.sin(2*np.pi*note(mi)*tt)+.4*np.sin(2*np.pi*note(mi)*2.01*tt))
# souffle léger
rng=np.random.default_rng(3); n=rng.standard_normal(len(t))
n=np.convolve(n,np.ones(60)/60,'same'); mix+=.015*n
# réverb simple
rev=np.zeros_like(mix)
for d,g in [(0.031,.45),(0.067,.35),(0.113,.28),(0.171,.2),(0.239,.14)]:
    k=int(d*SR); rev[k:]+=g*mix[:-k]
mix=mix+.6*rev
mix*=np.minimum(1,t/.4)*np.minimum(1,(D-t)/1.0)
mix/=np.abs(mix).max()*1.12
st=np.stack([mix,np.roll(mix,180)],1)
wf.write('../reels-v5/musiques/m_laptop.wav',SR,(st*32767).astype(np.int16))
print('ok')
