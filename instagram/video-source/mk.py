HEAD='''<!doctype html><html lang="fr"><head><meta charset="utf-8"><link href="fonts/fonts.css" rel="stylesheet"><style>
:root{--cream:#F6F1E7;--ink:#1F241C;--olive:#4B523C;--olive2:#3A4030;--gold:#A88B57;--gold2:#C9AE7C;--beige:#E6DDCE;--teal:#48A99A;--sage:#98A673}
*{margin:0;padding:0;box-sizing:border-box}html,body{width:WWWpx;height:1350px;overflow:hidden}
body{font-family:"Instrument Sans",sans-serif}
.s{position:absolute;top:0;width:1080px;height:1350px;overflow:hidden}
.H{font-weight:700;text-transform:uppercase;letter-spacing:-.025em;line-height:1.02}
.k{font-size:22px;letter-spacing:6px;text-transform:uppercase;font-weight:600}
.big{position:absolute;font-weight:700;letter-spacing:-.06em;line-height:.8}
.p{font-size:44px;line-height:1.3;font-weight:500;letter-spacing:-.5px}
.arch{position:absolute;overflow:hidden;border-radius:999px 999px 0 0}
.arch img,.rnd img{width:100%;height:100%;object-fit:cover;display:block}
.rnd{position:absolute;overflow:hidden;border-radius:36px}
.foot{position:absolute;left:80px;right:80px;bottom:70px;display:flex;justify-content:space-between;font-size:20px;letter-spacing:5px;text-transform:uppercase;font-weight:600}
.pill{position:absolute;display:flex;align-items:center;gap:16px;padding:20px 34px 20px 20px;border-radius:999px;font-size:36px;font-weight:600;letter-spacing:-.5px;box-shadow:0 18px 40px rgba(31,36,28,.18);white-space:nowrap}
.pill i{width:46px;height:46px;border-radius:50%;display:flex;align-items:center;justify-content:center;font-style:normal;font-size:26px;font-weight:700}
.cta{position:absolute;left:50%;transform:translateX(-50%);bottom:150px;display:flex;align-items:center;gap:18px;padding:30px 56px;border-radius:999px;background:var(--ink);color:var(--cream);font-size:46px;font-weight:600;letter-spacing:-1px;white-space:nowrap}
.cta span{color:var(--gold2)}
.logo{width:150px}
</style></head><body>'''
def foot(i,n,c,logo='cream'):
    return f'<div class="foot" style="color:{c}"><img class="logo" src="img/logo_{logo}.png"><span>{i:02d} / {n:02d}</span></div>'
def write(name,slides):
    n=len(slides);html=HEAD.replace("WWW",str(1080*n))
    for i,s in enumerate(slides):
        bg,body,fc,lg=s
        html+=f'<div class="s" style="left:{i*1080}px;background:{bg}">{body}{foot(i+1,n,fc,lg)}</div>\n'
    open(name,'w').write(html+'</body></html>')

# ---- Carrousel A : le guide
num=lambda t,c,extra='': f'<div class="big" style="right:60px;top:90px;font-size:420px;color:transparent;-webkit-text-stroke:3px {c};{extra}">{t}</div>'
A6END='<div style="position:absolute;inset:0;background:linear-gradient(#E1DECD,#EEEBD9 50%,#FBF8E9)"></div>\n  <img src="hq/bottle_white.jpg" style="position:absolute;left:0;top:230px;width:1080px;height:1000px;object-fit:contain;-webkit-mask-image:radial-gradient(ellipse 32% 46% at 50% 52%,#000 72%,transparent 100%)">\n  <div style="position:absolute;left:0;right:0;top:110px;text-align:center;color:var(--ink)"><div class="H" style="font-size:86px">La nôtre coche<br><span style="color:var(--gold)">toutes les cases.</span></div></div>\n  <div class="pill" style="left:60px;top:520px;background:var(--cream);color:var(--ink)"><i style="background:var(--gold);color:var(--cream)">✓</i>Vierge extra</div><div class="pill" style="right:50px;top:650px;background:var(--ink);color:var(--cream)"><i style="background:var(--gold2);color:var(--ink)">✓</i>Bouteille sombre</div><div class="pill" style="left:50px;top:820px;background:var(--teal);color:var(--cream)"><i style="background:var(--cream);color:var(--teal)">✓</i>Un peu de piquant</div><div class="pill" style="right:70px;top:950px;background:var(--gold);color:var(--ink)"><i style="background:var(--ink);color:var(--gold2)">✓</i>Bien protégée</div>\n  <div class="cta">jimenez-shop.com <span>→</span></div>'
B7END='<div style="position:absolute;inset:0;background:linear-gradient(#EEDCC4,#F2E1CD 50%,#EFE3D3)"></div>\n  <img src="hq/ceramic.jpg" style="position:absolute;left:0;top:300px;width:1080px;height:800px;object-fit:contain;-webkit-mask-image:radial-gradient(ellipse 32% 46% at 50% 52%,#000 72%,transparent 100%)">\n  <div style="position:absolute;left:0;right:0;top:110px;text-align:center;color:var(--ink)"><div class="H" style="font-size:86px">À cru, elle donne<br><span style="color:var(--gold)">tout son goût.</span></div></div>\n  <div class="pill" style="left:60px;top:520px;background:var(--teal);color:var(--cream)"><i style="background:var(--cream);color:var(--teal)">1</i>Pain grillé</div><div class="pill" style="right:60px;top:650px;background:var(--cream);color:var(--ink)"><i style="background:var(--gold);color:var(--cream)">2</i>Tomates</div><div class="pill" style="left:50px;top:820px;background:var(--olive);color:var(--cream)"><i style="background:var(--gold2);color:var(--olive)">3</i>Poisson</div><div class="pill" style="right:60px;top:950px;background:var(--gold);color:var(--ink)"><i style="background:var(--cream);color:var(--gold)">4</i>Légumes</div>\n  <div class="cta">jimenez-shop.com <span>→</span></div>'
A=[
 ('var(--cream)','''<div class="k" style="position:absolute;left:80px;top:90px;color:var(--gold)">Le guide · à enregistrer</div>
  <div class="H" style="position:absolute;left:80px;top:170px;font-size:104px;color:var(--ink)">Comment<br>reconnaître<br>une bonne<br><span style="color:var(--gold)">huile d'olive ?</span></div>
  <div class="arch" style="left:560px;top:690px;width:440px;height:580px;background:#EFE9DA"><img src="hq/bottle_white.jpg" style="object-position:50% 50%;transform:scale(1.5)"></div>
  <div style="position:absolute;left:80px;top:1050px;font-size:34px;font-weight:600;color:var(--olive)">4 points à vérifier →</div>''','var(--olive)','ink'),
 ('var(--ink)',num('01','#C9AE7C')+'''<div style="position:absolute;left:80px;bottom:230px;right:80px;color:var(--cream)">
  <div class="H" style="font-size:130px">Vierge<br><span style="color:var(--gold2)">extra.</span></div>
  <div class="p" style="margin-top:44px;color:var(--beige);max-width:860px">C'est la catégorie la plus haute. Elle doit être écrite noir sur blanc sur l'étiquette.</div></div>''','var(--gold2)','cream'),
 ('var(--olive)',num('02','#C9AE7C','opacity:.8')+'''<div class="arch" style="left:80px;top:150px;width:360px;height:470px"><img src="hq/open.jpg" style="object-position:50% 60%"></div>
  <div style="position:absolute;left:80px;bottom:200px;right:80px;color:var(--cream)">
  <div class="H" style="font-size:110px">Bouteille<br><span style="color:var(--gold2)">sombre.</span></div>
  <div class="p" style="margin-top:34px;color:var(--beige)">La lumière abîme l'huile.<br>Le verre foncé la protège.</div></div>''','var(--gold2)','cream'),
 ('var(--teal)',num('03','#F6F1E7','opacity:.9')+'''<div style="position:absolute;left:80px;bottom:230px;right:80px;color:var(--cream)">
  <div class="H" style="font-size:130px">Elle pique<br><span style="color:var(--ink)">un peu.</span></div>
  <div class="p" style="margin-top:44px;max-width:880px">Un peu d'amertume et de piquant en fin de bouche : ce sont des signes de fraîcheur.</div></div>''','var(--cream)','cream'),
 ('var(--gold)',num('04','#1F241C','opacity:.85')+'''<div style="position:absolute;left:80px;bottom:230px;right:80px;color:var(--ink)">
  <div class="H" style="font-size:130px">Bien<br><span style="color:var(--cream)">conservée.</span></div>
  <div class="p" style="margin-top:44px;max-width:880px">Bouchon fermé, loin de la chaleur et de la lumière. Pas à côté des plaques.</div></div>''','var(--ink)','ink'),
 ('#F3E7D6',A6END,'var(--olive)','ink'),
]
write('carA.html',A)

# ---- Carrousel B : 5 façons
def idea(n,bg,fg,acc,t1,t2,txt,lg):
    return (bg,f'''<div class="big" style="left:60px;top:80px;font-size:560px;color:{acc}">{n}</div>
  <div style="position:absolute;left:80px;bottom:220px;right:80px;color:{fg}">
  <div class="H" style="font-size:118px">{t1}<br><span style="color:{acc}">{t2}</span></div>
  <div class="p" style="margin-top:40px;max-width:880px">{txt}</div></div>''',fg,lg)
B=[
 ('var(--ink)','''<div class="rnd" style="left:520px;top:90px;width:480px;height:640px;border-radius:240px"><img src="hq/ceramic.jpg" style="object-position:50% 50%;transform:scale(1.25)"></div>
  <div class="k" style="position:absolute;left:80px;top:110px;color:var(--gold2)">Huile d'olive<br>vierge extra</div>
  <div class="H" style="position:absolute;left:80px;top:770px;font-size:140px;color:var(--cream);line-height:1.02">5 façons<br><span style="color:var(--gold2)">de la goûter.</span></div>''','var(--gold2)','cream'),
 idea('1','var(--teal)','var(--cream)','var(--ink)','Pain grillé,','tomate râpée.','Un filet d\'huile, une pincée de sel. Le petit-déjeuner andalou.','cream'),
 idea('2','var(--cream)','var(--ink)','var(--gold)','Tomates','de saison.','Coupées en tranches, sel, poivre. L\'huile fait tout le travail.','ink'),
 idea('3','var(--olive)','var(--cream)','var(--gold2)','Poisson','grillé.','Un filet à cru au moment de servir, comme un assaisonnement.','cream'),
 idea('4','var(--gold)','var(--ink)','var(--cream)','Légumes','grillés.','Courgettes, poivrons, aubergines : un trait d\'huile en sortant du four.','ink'),
 idea('5','var(--sage)','var(--ink)','var(--cream)','Toute','seule.','Sur un morceau de pain, pour sentir le fruit. C\'est là qu\'on voit la différence.','ink'),
 ('#ECE5D3',B7END,'var(--olive)','ink'),
]
write('carB.html',B)
