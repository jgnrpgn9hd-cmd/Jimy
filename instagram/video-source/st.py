S=[ # img, bg, box(x,y,w,h), fit, kicker, title, sub, textcolor
 ('n_eco.jpg','#D5D1D1',(-420,620,1600,1043),'cover',"Huile d'olive vierge extra","Arbequina.","Fruitée et vive, avec des notes d'herbe fraîche."),
 ('n_arbequina.jpg','#E6D5BE',(90,540,900,1200),'cover',"Arbequina","Première récolte.","Pomme verte, amande, un léger piquant."),
 ('n_coupage.jpg','#FFFFFF',(-60,560,1200,1123),'cover',"Picual & Arbequina","Coupage.","Ronde et équilibrée, pour tous les jours."),
 ('n_trio.jpg','#FCF3F3',(140,590,800,992),'cover2',"Hojiblanca · Arbosana · Picual","Le coffret.","Trois huiles à goûter côte à côte."),
 ('n_tins.jpg','#ECE8D8',(230,600,620,964),'card',"Arbequina · Pressée à froid","Le grand format.","Le litre, pour la cuisine de tous les jours."),
]
h='''<!doctype html><html lang="fr"><head><meta charset="utf-8"><link href="fonts/fonts.css" rel="stylesheet"><style>
*{margin:0;padding:0;box-sizing:border-box}html,body{width:%dpx;height:1920px;overflow:hidden}
body{font-family:"Instrument Sans",sans-serif;color:#1F241C}
.s{position:absolute;top:0;width:1080px;height:1920px;overflow:hidden}
.T{font-family:"Instrument Serif",serif;font-weight:400;letter-spacing:-.02em;line-height:.95;font-size:150px}
.k{font-size:24px;letter-spacing:8px;text-transform:uppercase;font-weight:500;color:#A88B57}
.cta{position:absolute;left:50%%;transform:translateX(-50%%);top:1650px;display:flex;align-items:center;gap:16px;padding:26px 56px;border-radius:999px;background:#1B2619;color:#F6F1E7;font-size:34px;font-weight:500;letter-spacing:1px;white-space:nowrap;box-shadow:0 24px 50px rgba(27,38,25,.3)}
.cta span{color:#C9AE7C}
</style></head><body>'''%(1080*len(S))
for i,(img,bg,b,fit,k,t,sub) in enumerate(S):
    x,y,w,hh=b
    if fit=='card': ist=f'left:{x}px;top:{y}px;width:{w}px;height:{hh}px;object-fit:cover;border-radius:30px;box-shadow:0 40px 90px rgba(31,36,28,.25)'
    elif fit=='cover2': ist=f'left:{x}px;top:{y}px;width:{w}px;height:{hh}px;object-fit:cover;-webkit-mask-image:linear-gradient(to bottom,transparent 0,#000 10%,#000 97%,transparent 100%)'
    else: ist=f'left:{x}px;top:{y}px;width:{w}px;height:{hh}px;object-fit:cover;-webkit-mask-image:radial-gradient(ellipse 50% 50% at 50% 50%,#000 72%,transparent 100%)'
    h+=f'''<div class="s" style="left:{i*1080}px;background:{bg}">
 <img src="hq/{img}" style="position:absolute;{ist}">
 <img src="img/logo_ink.png" style="position:absolute;left:50%;transform:translateX(-50%);top:150px;width:170px;opacity:.85">
 <div style="position:absolute;left:0;right:0;top:300px;text-align:center"><div class="k">{k}</div><div class="T" style="margin-top:26px">{t}</div>
 <div style="margin-top:28px;font-size:36px;color:#4B523C">{sub}</div></div>
 <div class="cta">Découvrir <span>↓</span></div></div>'''
open('stories.html','w').write(h+'</body></html>')
