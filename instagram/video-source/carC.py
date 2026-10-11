P=[('n_coupage',926,924,'Picual & Arbequina','Coupage','Ronde et équilibrée, pour tous les jours.',780),
 ('n_trio',997,1481,'Hojiblanca · Arbosana · Picual','Le coffret','Trois huiles à goûter côte à côte.',820),
 ('n_eco',832,585,'Écologique','Arbequina','Fruitée et vive, notes d\'herbe fraîche.',600),
 ('n_tins',462,802,'Arbequina · 1 L','Grand format','Le litre, pour la cuisine de tous les jours.',720),
 ('n_ceramic',1080,1278,'Arbequina','La céramique','La bouteille à offrir.',880)]
N=len(P)+2
h=f'''<!doctype html><html lang="fr"><head><meta charset="utf-8"><link href="fonts/fonts.css" rel="stylesheet"><style>
*{{margin:0;padding:0;box-sizing:border-box}}html,body{{width:{1080*N}px;height:1350px;overflow:hidden}}
body{{font-family:"Instrument Sans",sans-serif;color:#1F241C}}
.s{{position:absolute;top:0;width:1080px;height:1350px;overflow:hidden;background:linear-gradient(#E9D5BB 0%,#EEDDC6 55%,#F3E7D6 70%,#F1E3D0 100%)}}
.s:before{{content:"";position:absolute;inset:0;background:radial-gradient(ellipse 60% 40% at 30% 30%,rgba(255,250,240,.5),rgba(255,250,240,0) 70%)}}
.T{{font-family:"Instrument Serif",serif;font-weight:400;letter-spacing:-.02em;line-height:1}}
.k{{font-size:21px;letter-spacing:7px;text-transform:uppercase;font-weight:500;color:#A88B57}}
.num{{position:absolute;right:80px;top:84px;font-size:19px;letter-spacing:5px;color:#A88B57;font-weight:600}}
.logo{{position:absolute;left:80px;top:70px;width:140px}}
.sh{{position:absolute;height:50px;border-radius:50%;background:radial-gradient(ellipse at center,rgba(70,50,30,.35),rgba(70,50,30,0) 70%)}}
</style></head><body>'''
def prod(f,w,hh,dh,cx,base):
    dw=w*dh/hh
    return f'<div class="sh" style="left:{cx-dw*.55}px;top:{base-25}px;width:{dw*1.1}px"></div><img src="cut/{f}.png" style="position:absolute;left:{cx-dw/2}px;top:{base-dh}px;width:{dw}px;height:{dh}px">'
# cover
c='<div class="s" style="left:0"><img class="logo" src="img/logo_ink.png"><div class="num">01 / %02d</div>'%N
c+='<div style="position:absolute;left:0;right:0;top:210px;text-align:center"><div class="k">Huile d\'olive vierge extra · Andalousie</div><div class="T" style="font-size:150px;margin-top:22px">La collection.</div></div>'
c+=prod('n_tins',462,802,560,250,1170)+prod('n_trio',997,1481,620,560,1190)+prod('n_ceramic',1080,1278,470,850,1180)
c+='<div class="k" style="position:absolute;right:80px;bottom:60px;color:#4B523C">Glisse →</div></div>'
h+=c
for i,(f,w,hh,k,t,d,dh) in enumerate(P):
    x=(i+1)*1080
    s=f'<div class="s" style="left:{x}px"><img class="logo" src="img/logo_ink.png"><div class="num">{i+2:02d} / {N:02d}</div>'
    s+=f'<div style="position:absolute;left:0;right:0;top:190px;text-align:center"><div class="k">{k}</div><div class="T" style="font-size:132px;margin-top:20px">{t}</div></div>'
    s+=prod(f,w,hh,dh,540,1180)
    s+=f'<div style="position:absolute;left:0;right:0;bottom:80px;text-align:center;font-size:32px;color:#4B523C">{d}</div></div>'
    h+=s
x=(N-1)*1080
h+=f'''<div class="s" style="left:{x}px"><div class="num">{N:02d} / {N:02d}</div>
<div style="position:absolute;inset:0;display:flex;flex-direction:column;align-items:center;justify-content:center">
<img src="img/logo_ink.png" style="width:440px"><div class="T" style="font-size:84px;margin-top:70px;text-align:center">Directement<br>du producteur.</div>
<div style="width:110px;height:2px;background:#A88B57;margin:56px 0 44px"></div>
<div style="font-size:50px;font-weight:600;letter-spacing:-1px">jimenez-shop.com</div>
<div class="k" style="margin-top:20px;color:#4B523C">Lien en bio · Livraison en France</div></div></div>'''
open('carC.html','w').write(h+'</body></html>')
print(N)
