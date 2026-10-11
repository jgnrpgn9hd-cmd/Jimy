E=[("La garder à côté des plaques.","La chaleur l'abîme. Range-la dans un placard, au frais."),
("La choisir en bouteille transparente.","La lumière l'oxyde. Prends du verre foncé ou un bidon."),
("Croire qu'on ne peut pas cuisiner avec.","Une vierge extra supporte très bien une cuisson douce. Garde la plus fruitée pour le cru."),
("Laisser la bouteille ouverte.","L'air l'oxyde aussi. Bouchon bien fermé après chaque utilisation."),
("Croire qu'elles ont toutes le même goût.","Arbequina douce, Picual piquante : chaque olive a son caractère.")]
css='''<!doctype html><html lang="fr"><head><meta charset="utf-8"><link href="fonts/fonts.css" rel="stylesheet"><style>
*{margin:0;padding:0;box-sizing:border-box}body{font-family:"Instrument Sans",sans-serif;color:#1F241C}
.s{position:absolute;top:0;width:1080px;height:1350px;overflow:hidden}
.B{font-weight:700;letter-spacing:-.045em;line-height:.92;text-transform:uppercase}
.k{font-size:22px;letter-spacing:6px;text-transform:uppercase;font-weight:600}
.T{font-family:"Instrument Serif",serif;font-weight:400;letter-spacing:-.02em}
</style></head><body>'''
# carousel 7 slides
h=css.replace('<body>','<body style="width:7560px;height:1350px">')
h+='''<div class="s" style="left:0;background:#F6F1E7">
<div class="k" style="position:absolute;left:80px;top:80px;color:#A88B57">Jimenez · le guide</div>
<div class="B" style="position:absolute;left:72px;top:170px;font-size:168px;color:#1F241C">5 erreurs<br>qu'on fait<br><span style="color:#4B523C">tous avec</span><br><span style="color:#4B523C">l'huile</span><br><span style="color:#A88B57">d'olive.</span></div>
<img src="cut/n_coupage.png" style="position:absolute;right:-40px;bottom:120px;height:430px">
<div style="position:absolute;left:80px;bottom:80px;font-size:34px;font-weight:600">(la n°3 surtout) →</div></div>'''
cols=[('#4B523C','#F6F1E7','#C9AE7C'),('#F6F1E7','#1F241C','#A88B57'),('#A88B57','#1F241C','#F6F1E7'),('#1F241C','#F6F1E7','#C9AE7C'),('#48A99A','#F6F1E7','#1F241C')]
for i,((t,d),(bg,fg,ac)) in enumerate(zip(E,cols)):
    h+=f'''<div class="s" style="left:{(i+1)*1080}px;background:{bg};color:{fg}">
<div class="k" style="position:absolute;left:80px;top:80px;color:{ac}">Erreur</div>
<div class="B" style="position:absolute;left:62px;top:110px;font-size:420px;color:{ac}">0{i+1}</div>
<div class="B" style="position:absolute;left:80px;right:80px;top:590px;font-size:104px;line-height:1.06">{t}</div>
<div style="position:absolute;left:80px;right:120px;bottom:120px;font-size:42px;line-height:1.3;font-weight:500">{d}</div>
<div class="k" style="position:absolute;right:80px;top:80px;color:{ac}">{i+2}/7</div></div>'''
h+='''<div class="s" style="left:6480px;background:#F6F1E7">
<div class="B" style="position:absolute;left:80px;top:130px;font-size:120px;color:#1F241C">La nôtre<br><span style="color:#4B523C">coche tout.</span></div>
<div style="position:absolute;left:80px;top:410px;font-size:38px;line-height:1.35;font-weight:500;color:#4B523C">Vierge extra, pressée à froid,<br>directement d'Andalousie.</div>
<img src="cut/n_trio.png" style="position:absolute;left:300px;bottom:170px;height:640px">
<img src="cut/n_eco.png" style="position:absolute;left:-60px;bottom:170px;height:330px">
<img src="cut/n_ceramic.png" style="position:absolute;right:30px;bottom:170px;height:420px">
<div style="position:absolute;left:0;right:0;bottom:0;height:130px;background:#1F241C;color:#F6F1E7;display:flex;align-items:center;justify-content:space-between;padding:0 80px">
<span style="font-size:36px;font-weight:600">Enregistre ce post</span><span class="k" style="color:#C9AE7C">jimenez-shop.com</span></div></div>'''
open('j1_car.html','w').write(h+'</body></html>')
# tweet-style post
t=css.replace('<body>','<body style="width:1080px;height:1350px">')+'''<div class="s" style="left:0;background:#4B523C">
<div style="position:absolute;left:80px;right:80px;top:300px;background:#F6F1E7;border-radius:36px;padding:60px 64px">
<div style="display:flex;align-items:center;gap:26px"><div style="width:110px;height:110px;border-radius:50%;background:#1F241C;display:flex;align-items:center;justify-content:center"><img src="img/logo_cream.png" style="width:86px"></div>
<div><div style="font-size:40px;font-weight:700">Jimenez</div><div style="font-size:32px;color:#6B6F64">@jimenez_shop_fr</div></div></div>
<div style="font-size:58px;line-height:1.28;margin-top:50px;font-weight:500;letter-spacing:-.5px">Du pain grillé, une tomate râpée, un filet d'huile d'olive et une pincée de sel.<br><br>En Andalousie, on appelle ça le petit-déjeuner. Ici, on appelle ça la meilleure découverte de l'année.</div>
<div style="font-size:30px;color:#6B6F64;margin-top:50px">9:41 · Andalousie</div></div></div>'''
open('j1_tweet.html','w').write(t+'</body></html>')
# story question
st=css.replace('<body>','<body style="width:1080px;height:1920px">')+'''<div class="s" style="left:0;height:1920px;background:#F6F1E7">
<img src="img/logo_ink.png" style="position:absolute;left:50%;transform:translateX(-50%);top:170px;width:170px">
<div class="k" style="position:absolute;left:0;right:0;top:330px;text-align:center;color:#A88B57">Question du jour</div>
<div class="B" style="position:absolute;left:60px;right:60px;top:400px;text-align:center;font-size:150px">L'huile<br>d'olive,<br><span style="color:#4B523C">tu la mets<br>sur quoi ?</span></div>
<div style="position:absolute;left:90px;right:90px;top:1180px;display:flex;flex-direction:column;gap:26px">
<div style="background:#4B523C;color:#F6F1E7;border-radius:999px;padding:34px;text-align:center;font-size:44px;font-weight:600">Pain grillé</div>
<div style="background:#A88B57;color:#1F241C;border-radius:999px;padding:34px;text-align:center;font-size:44px;font-weight:600">Salade</div>
<div style="background:#48A99A;color:#F6F1E7;border-radius:999px;padding:34px;text-align:center;font-size:44px;font-weight:600">Absolument tout</div></div>
<div style="position:absolute;left:0;right:0;top:1640px;text-align:center;font-size:34px;color:#4B523C">Réponds-nous en message</div></div>'''
open('j1_story.html','w').write(st+'</body></html>')
