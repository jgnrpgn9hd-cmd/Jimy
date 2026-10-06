P=[('n_coupage.jpg','52% 55%',1.25,'#4B523C','#F6F1E7','#C9AE7C','Picual & Arbequina','Coupage','Ronde et équilibrée.'),
 ('n_trio.jpg','50% 30%',1.0,'#48A99A','#F6F1E7','#1F241C','Hojiblanca · Arbosana · Picual','Le coffret','Trois huiles, côte à côte.'),
 ('n_eco.jpg','68% 50%',1.0,'#98A673','#1F241C','#F6F1E7','Écologique','Arbequina','Fruitée et vive.'),
 ('n_tins.jpg','50% 62%',1.0,'#4F5D5A','#F6F1E7','#C9AE7C','Arbequina · 1 L','Grand format','Pour tous les jours.'),
 ('n_ceramic.jpg','50% 40%',1.0,'#A88B57','#1F241C','#F6F1E7','Arbequina','La céramique','À offrir.')]
N=len(P)+2
h=f'''<!doctype html><html lang="fr"><head><meta charset="utf-8"><link href="fonts/fonts.css" rel="stylesheet"><style>
*{{margin:0;padding:0;box-sizing:border-box}}html,body{{width:{1080*N}px;height:1350px;overflow:hidden}}
body{{font-family:"Instrument Sans",sans-serif}}
.s{{position:absolute;top:0;width:1080px;height:1350px;overflow:hidden}}
.T{{font-family:"Instrument Serif",serif;font-weight:400;letter-spacing:-.02em;line-height:1}}
.k{{font-size:20px;letter-spacing:7px;text-transform:uppercase;font-weight:500}}
</style></head><body>'''
# cover: 3 columns
cols=['#48A99A','#98A673','#4F5D5A']
c='<div class="s" style="left:0">'+''.join(f'<div style="position:absolute;top:0;left:{i*360}px;width:360px;height:1350px;background:{col}"></div>' for i,col in enumerate(cols))
c+='''<div style="position:absolute;left:110px;right:110px;top:385px;height:580px;background:#F6F1E7;display:flex;flex-direction:column;align-items:center;justify-content:center;box-shadow:0 30px 80px rgba(0,0,0,.18)">
<img src="img/logo_ink.png" style="width:150px;margin-bottom:46px"><div class="T" style="font-size:112px;text-align:center;color:#1F241C">L'or vert<br>d'Andalousie.</div>
<div class="k" style="margin-top:40px;color:#A88B57">Huile d'olive vierge extra</div></div>
<div class="k" style="position:absolute;right:70px;bottom:60px;color:#F6F1E7">Glisse →</div>
<div class="k" style="position:absolute;left:70px;bottom:60px;color:#F6F1E7">01 / %02d</div></div>''' % N
h+=c
for i,(img,op,z,bg,fg,kc,k,t,d) in enumerate(P):
    x=(i+1)*1080
    h+=f'''<div class="s" style="left:{x}px;background:{bg}">
<div style="position:absolute;left:0;top:0;width:1080px;height:1000px;overflow:hidden"><img src="hq/{img}" style="width:100%;height:100%;object-fit:cover;object-position:{op};transform:scale({z});transform-origin:{op}"></div>
<div style="position:absolute;left:80px;right:80px;top:1060px;color:{fg};display:flex;justify-content:space-between;align-items:flex-end">
<div><div class="k" style="color:{kc}">{k}</div><div class="T" style="font-size:118px;margin-top:18px">{t}</div></div>
<div style="text-align:right"><div class="k" style="color:{kc}">{i+2:02d} / {N:02d}</div><div style="font-size:30px;margin-top:20px;opacity:.9">{d}</div></div></div></div>'''
x=(N-1)*1080
h+=f'<div class="s" style="left:{x}px;background:#F6F1E7">'+''.join(f'<div style="position:absolute;left:0;bottom:{i*60}px;width:1080px;height:60px;background:{col}"></div>' for i,col in enumerate(['#4F5D5A','#98A673','#48A99A']))
h+='''<div style="position:absolute;left:0;right:0;top:330px;display:flex;flex-direction:column;align-items:center;color:#1F241C">
<img src="img/logo_ink.png" style="width:420px"><div class="T" style="font-size:84px;margin-top:70px;text-align:center">Directement<br>du producteur.</div>
<div style="width:110px;height:2px;background:#A88B57;margin:54px 0 42px"></div>
<div style="font-size:50px;font-weight:600;letter-spacing:-1px">jimenez-shop.com</div>
<div class="k" style="margin-top:20px;color:#4B523C">Lien en bio · Livraison en France</div></div></div>'''
open('carD.html','w').write(h+'</body></html>')
