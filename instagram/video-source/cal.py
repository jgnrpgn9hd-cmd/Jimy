import json
CUT={'coupage':('n_coupage',926,924),'trio':('n_trio',997,1481),'eco':('n_eco',832,585),'tins':('n_tins',462,802),'ceramic':('n_ceramic',1080,1278)}
CSS='''<!doctype html><html lang="fr"><head><meta charset="utf-8"><link href="../fonts/fonts.css" rel="stylesheet"><style>
*{margin:0;padding:0;box-sizing:border-box}body{font-family:"Instrument Sans",sans-serif;color:#1F241C;background:#000}
.s{position:absolute;top:0;width:1080px;overflow:hidden}
.T{font-family:"Instrument Serif",serif;font-weight:400;letter-spacing:-.022em;line-height:.98}
.k{font-size:20px;letter-spacing:6px;text-transform:uppercase;font-weight:600}
.bar{position:absolute;left:80px;right:80px;display:flex;justify-content:space-between;align-items:center}
.hair{position:absolute;left:80px;right:80px;height:1px}
.p{font-size:36px;line-height:1.38;font-weight:400}
.sh{position:absolute;height:46px;border-radius:50%;background:radial-gradient(ellipse at center,rgba(70,50,30,.32),rgba(70,50,30,0) 70%)}
.beige{background:linear-gradient(#EAD8C0 0%,#EFE0CB 55%,#F4E9DA 72%,#F2E5D3 100%)}
.cream{background:#F5EFE4}
</style></head><body>'''
def cut(name,h,cx,base):
    f,w,hh=CUT[name]; dw=w*h/hh
    return f'<div class="sh" style="left:{cx-dw*.55}px;top:{base-23}px;width:{dw*1.1}px"></div><img src="../cut/{f}.png" style="position:absolute;left:{cx-dw/2}px;top:{base-h}px;width:{dw}px;height:{h}px">'
def chrome(i,n,series,dark=False,H=1350):
    c='#F5EFE4' if dark else '#1F241C'; a='#C9AE7C' if dark else '#A88B57'; logo='logo_cream' if dark else 'logo_ink'
    hc='rgba(245,239,228,.3)' if dark else 'rgba(31,36,28,.2)'
    s=f'<div class="bar" style="top:64px"><img src="../img/{logo}.png" style="width:128px"><span class="k" style="color:{a}">{series}</span></div><div class="hair" style="top:132px;background:{hc}"></div>'
    s+=f'<div class="hair" style="top:{H-118}px;background:{hc}"></div><div class="bar" style="top:{H-92}px"><span class="k" style="color:{c};opacity:.75">jimenez-shop.com</span><span class="k" style="color:{a}">{i:02d} / {n:02d}</span></div>' if n>1 else f'<div class="hair" style="top:{H-118}px;background:{hc}"></div><div class="bar" style="top:{H-92}px"><span class="k" style="color:{c};opacity:.75">jimenez-shop.com</span><span class="k" style="color:{a}">Huile d\'olive vierge extra</span></div>'
    return s
def page(name,slides,H=1350):
    n=len(slides); h=CSS.replace('<body>',f'<body style="width:{1080*n}px;height:{H}px">')
    for i,s in enumerate(slides): h+=f'<div class="s" style="left:{i*1080}px;height:{H}px;{s[0]}">{s[1]}</div>'
    open(f'cal/{name}.html','w').write(h+'</body></html>'); M.append([name,n,H])
M=[]
# ---------- J1 P1 : 5 erreurs
E=[("La garder près des plaques.","La chaleur l'abîme vite. Sa place : un placard, au frais et au sec."),
("La choisir en bouteille transparente.","La lumière l'oxyde. Préférez le verre foncé, la céramique ou le bidon."),
("Croire qu'on ne cuisine pas avec.","Une vierge extra supporte très bien une cuisson douce. Gardez la plus fruitée pour le cru."),
("Laisser la bouteille ouverte.","L'air l'oxyde aussi. Refermez-la après chaque usage."),
("Penser qu'elles ont toutes le même goût.","Arbequina douce, Picual plus piquante : chaque olive a son caractère.")]
sl=[('','')]
sl=[('background:#F5EFE4',chrome(1,7,'Le guide')+'''<div class="k" style="position:absolute;left:80px;top:250px;color:#A88B57">Cinq erreurs</div>
<div class="T" style="position:absolute;left:76px;top:300px;font-size:150px">Ce qu'on fait<br>tous de travers<br><span style="color:#4B523C">avec l'huile<br>d'olive.</span></div>
'''+cut('coupage',360,820,1150)+'<div class="p" style="position:absolute;left:80px;top:1010px;font-size:30px;color:#4B523C">Glissez →</div>')]
for i,(t,d) in enumerate(E):
    sl.append(('background:#F5EFE4' if i%2==0 else 'background:#4B523C',chrome(i+2,7,'Le guide',dark=i%2==1)+f'''<div class="T" style="position:absolute;left:72px;top:190px;font-size:300px;color:{'#A88B57' if i%2==0 else '#C9AE7C'}">0{i+1}</div>
<div class="T" style="position:absolute;left:80px;right:80px;top:560px;font-size:112px;color:{'#1F241C' if i%2==0 else '#F5EFE4'}">{t}</div>
<div class="p" style="position:absolute;left:80px;right:180px;top:{870 if len(t)<34 else 960}px;color:{'#4B523C' if i%2==0 else '#E6DDCE'}">{d}</div>'''))
sl.append(('',f'<div class="beige" style="position:absolute;inset:0"></div>'+chrome(7,7,'Le guide')+'''<div class="T" style="position:absolute;left:0;right:0;top:220px;text-align:center;font-size:118px">La nôtre<br><span style="color:#4B523C">coche tout.</span></div>
<div class="k" style="position:absolute;left:0;right:0;top:500px;text-align:center;color:#A88B57">Vierge extra · Pressée à froid · Andalousie</div>'''+cut('eco',290,250,1140)+cut('trio',560,560,1150)+cut('ceramic',380,850,1140)))
page('J1_carrousel_erreurs',sl)
# ---------- J1 P2 : citation petit-déjeuner
page('J1_post_citation',[('',f'<div class="beige" style="position:absolute;inset:0"></div>'+chrome(1,1,'Le mot')+'''<div class="T" style="position:absolute;left:80px;right:80px;top:230px;font-size:96px;color:#A88B57">«</div>
<div class="T" style="position:absolute;left:80px;right:80px;top:300px;font-size:92px">En Andalousie,<br>le petit-déjeuner, c'est<br>du pain grillé, de la tomate<br><span style="color:#4B523C">et un filet d'huile d'olive.</span></div>
<div class="k" style="position:absolute;left:80px;top:760px;color:#A88B57">Pan con tomate</div>'''+cut('ceramic',400,820,1180))])
# ---------- J1 Story : question
page('J1_story_question',[('',f'<div class="beige" style="position:absolute;inset:0"></div>'+'''<img src="../img/logo_ink.png" style="position:absolute;left:50%;transform:translateX(-50%);top:200px;width:150px">
<div class="k" style="position:absolute;left:0;right:0;top:330px;text-align:center;color:#A88B57">La question du jour</div>
<div class="T" style="position:absolute;left:60px;right:60px;top:400px;text-align:center;font-size:136px">L'huile d'olive,<br><span style="color:#4B523C">vous la mettez<br>sur quoi ?</span></div>
<div style="position:absolute;left:150px;right:150px;top:1010px;display:flex;flex-direction:column;gap:22px;font-size:40px">
<div style="border:1.5px solid #1F241C;border-radius:999px;padding:30px;text-align:center">Le pain grillé</div>
<div style="border:1.5px solid #1F241C;border-radius:999px;padding:30px;text-align:center">La salade</div>
<div style="background:#1F241C;color:#F5EFE4;border-radius:999px;padding:30px;text-align:center">Absolument tout</div></div>
<div class="k" style="position:absolute;left:0;right:0;top:1560px;text-align:center;color:#4B523C">Répondez-nous en message</div>''')],H=1920)

def num_slide(i,n,series,num,t,d,dark):
    fg='#F5EFE4' if dark else '#1F241C'; ac='#C9AE7C' if dark else '#A88B57'; bc='#E6DDCE' if dark else '#4B523C'
    return ('background:'+('#4B523C' if dark else '#F5EFE4'),chrome(i,n,series,dark=dark)+f"""<div class="T" style="position:absolute;left:72px;top:190px;font-size:300px;color:{ac}">{num}</div>
<div class="T" style="position:absolute;left:80px;right:80px;top:560px;font-size:108px;color:{fg}">{t}</div>
<div class="p" style="position:absolute;left:80px;right:170px;top:{860 if len(t)<30 else 960}px;color:{bc}">{d}</div>""")
def cover(n,series,kick,title,extra=''):
    return ('background:#F5EFE4',chrome(1,n,series)+f"""<div class="k" style="position:absolute;left:80px;top:250px;color:#A88B57">{kick}</div>
<div class="T" style="position:absolute;left:76px;top:300px;font-size:146px">{title}</div>"""+extra+'<div class="p" style="position:absolute;left:80px;top:1130px;font-size:30px;color:#4B523C">Glissez →</div>')
def endprod(i,n,series,t,k,prods):
    return ('',f'<div class="beige" style="position:absolute;inset:0"></div>'+chrome(i,n,series)+f"""<div class="T" style="position:absolute;left:0;right:0;top:220px;text-align:center;font-size:112px">{t}</div>
<div class="k" style="position:absolute;left:0;right:0;top:500px;text-align:center;color:#A88B57">{k}</div>"""+prods)
def prodslide(i,n,series,k,t,d,pr):
    return ('',f'<div class="beige" style="position:absolute;inset:0"></div>'+chrome(i,n,series)+f"""<div class="k" style="position:absolute;left:0;right:0;top:200px;text-align:center;color:#A88B57">{k}</div>
<div class="T" style="position:absolute;left:0;right:0;top:250px;text-align:center;font-size:118px">{t}</div>
<div class="p" style="position:absolute;left:0;right:0;top:1120px;text-align:center;font-size:32px;color:#4B523C">{d}</div>"""+pr)
def photo_single(img,op,series,k,t,dark=True,grad='to top'):
    return ('',f"""<img src="../hq/{img}" style="position:absolute;inset:0;width:100%;height:100%;object-fit:cover;object-position:{op}">
<div style="position:absolute;inset:0;background:linear-gradient({grad},rgba(16,20,14,.82) 0%,rgba(16,20,14,.35) 45%,rgba(16,20,14,.15) 70%,rgba(16,20,14,.45) 100%)"></div>"""+chrome(1,1,series,dark=True)+f"""<div class="k" style="position:absolute;left:80px;top:{870}px;color:#C9AE7C">{k}</div>
<div class="T" style="position:absolute;left:76px;right:80px;top:920px;font-size:104px;color:#F5EFE4">{t}</div>""")
def story_prod(k,t,d,pr):
    return ('',f'<div class="beige" style="position:absolute;inset:0"></div>'+f"""<img src="../img/logo_ink.png" style="position:absolute;left:50%;transform:translateX(-50%);top:200px;width:150px">
<div class="k" style="position:absolute;left:0;right:0;top:340px;text-align:center;color:#A88B57">{k}</div>
<div class="T" style="position:absolute;left:0;right:0;top:395px;text-align:center;font-size:140px">{t}</div>
<div class="p" style="position:absolute;left:0;right:0;top:580px;text-align:center;font-size:34px;color:#4B523C">{d}</div>"""+pr+"""<div style="position:absolute;left:50%;transform:translateX(-50%);top:1600px;padding:26px 54px;border-radius:999px;background:#1F241C;color:#F5EFE4;font-size:32px;white-space:nowrap">Lien en bio · jimenez-shop.com</div>""")
def story_text(k,t,d):
    return ('',f'<div class="beige" style="position:absolute;inset:0"></div>'+f"""<img src="../img/logo_ink.png" style="position:absolute;left:50%;transform:translateX(-50%);top:200px;width:150px">
<div class="k" style="position:absolute;left:0;right:0;top:560px;text-align:center;color:#A88B57">{k}</div>
<div class="T" style="position:absolute;left:70px;right:70px;top:620px;text-align:center;font-size:120px">{t}</div>
<div class="p" style="position:absolute;left:120px;right:120px;top:1180px;text-align:center;font-size:38px;color:#4B523C">{d}</div>""")
# ===== J2
n=7
page('J2_carrousel_laquelle',[cover(n,'Les huiles','Le bon choix','Quelle huile<br>pour <span style="color:#4B523C">vous ?</span>',cut('trio',520,800,1150)),
 prodslide(2,n,'Les huiles','Pour tous les jours','Arbequina','Écologique, fruitée et vive.',cut('eco',520,540,1060)),
 prodslide(3,n,'Les huiles','Pour un goût équilibré','Coupage','Picual et Arbequina, rond et équilibré.',cut('coupage',620,540,1060)),
 prodslide(4,n,'Les huiles','Pour comparer','Le coffret','Hojiblanca, Arbosana, Picual.',cut('trio',680,540,1070)),
 prodslide(5,n,'Les huiles','Pour cuisiner sans compter','Le grand format','Arbequina, en bidon d\'un litre.',cut('tins',640,540,1070)),
 prodslide(6,n,'Les huiles','Pour offrir','La céramique','Arbequina, dans sa bouteille en céramique.',cut('ceramic',640,540,1070)),
 ('background:#4B523C',chrome(7,n,'Les huiles',dark=True)+"""<div style="position:absolute;inset:0;display:flex;flex-direction:column;align-items:center;justify-content:center;color:#F5EFE4"><img src="../img/logo_cream.png" style="width:380px"><div class="T" style="font-size:90px;margin-top:60px;text-align:center">Toutes nos huiles<br>sur le site.</div><div class="k" style="margin-top:40px;color:#C9AE7C">Lien en bio · Livraison en France</div></div>""")])
page('J2_post_andalousie',[photo_single('aerial.jpg','50% 40%',"L'Andalousie",'Notre origine',"D'Andalousie,<br>directement<br>du producteur.")])
page('J2_story_coupage',[story_prod('Picual & Arbequina','Coupage.','Rond et équilibré.',cut('coupage',720,540,1420))],H=1920)
# ===== J3
n=6
st=[("Faites griller le pain.","Une belle tranche de pain de campagne, bien dorée."),("Râpez une tomate mûre.","Directement sur le pain, ou dans un bol à part."),("Un filet d'huile d'olive.","Généreux. C'est elle qui fait tout le goût."),("Une pincée de sel.","Et c'est prêt. Rien de plus.")]
page('J3_carrousel_recette',[cover(n,'À table','La recette en 4 étapes','Le pan<br>con tomate,<br><span style="color:#4B523C">comme en<br>Andalousie.</span>',cut('ceramic',380,830,1150))]+[num_slide(i+2,n,'À table',f'0{i+1}',t,d,i%2==1) for i,(t,d) in enumerate(st)]+[endprod(6,n,'À table','Avec notre<br><span style="color:#4B523C">Arbequina.</span>','Fruitée et douce',cut('eco',300,330,1140)+cut('ceramic',460,760,1150))])
page('J3_post_varietes',[('',f'<div class="beige" style="position:absolute;inset:0"></div>'+chrome(1,1,'Le coffret')+"""<div class="k" style="position:absolute;left:80px;top:250px;color:#A88B57">Hojiblanca · Arbosana · Picual</div>
<div class="T" style="position:absolute;left:76px;top:300px;font-size:128px">Trois variétés.<br><span style="color:#4B523C">Trois caractères.</span></div>"""+cut('trio',600,540,1185))])
page('J3_story_savoir',[story_text('Le saviez-vous ?','« Vierge extra »<br><span style="color:#4B523C">est la catégorie<br>la plus haute.</span>',"C'est la seule qui garantit une huile sans défaut, obtenue uniquement par des procédés mécaniques.")],H=1920)
# ===== J4
n=6
vx=[("Extraite mécaniquement.","Uniquement par des procédés physiques, sans solvant ni raffinage."),("Une acidité très basse.","0,8 % au maximum. Plus elle est basse, plus l'olive était saine."),("Aucun défaut de goût.","Elle doit être jugée fruitée et sans défaut par un panel de dégustateurs."),("« Extraite à froid ».","La mention veut dire que la pâte d'olive n'a pas dépassé 27 °C.")]
page('J4_carrousel_vierge_extra',[cover(n,'Le guide','Ce que dit l\'étiquette','« Vierge extra »,<br><span style="color:#4B523C">ça veut dire<br>quoi ?</span>',cut('coupage',360,830,1150))]+[num_slide(i+2,n,'Le guide',f'0{i+1}',t,d,i%2==1) for i,(t,d) in enumerate(vx)]+[endprod(6,n,'Le guide','Toutes nos huiles<br><span style="color:#4B523C">sont vierge extra.</span>','Directement d\'Andalousie',cut('coupage',420,300,1150)+cut('trio',560,760,1150))])
page('J4_post_ecologique',[('',f'<div class="beige" style="position:absolute;inset:0"></div>'+chrome(1,1,'Les huiles')+"""<div class="k" style="position:absolute;left:0;right:0;top:220px;text-align:center;color:#A88B57">Arbequina</div>
<div class="T" style="position:absolute;left:0;right:0;top:270px;text-align:center;font-size:150px">L'or <span style="color:#4B523C">vert.</span></div>
<div class="p" style="position:absolute;left:0;right:0;top:450px;text-align:center;font-size:34px;color:#4B523C">Notre Arbequina écologique.</div>"""+cut('eco',560,540,1150))])
page('J4_story_sondage',[('',f'<div class="beige" style="position:absolute;inset:0"></div>'+"""<img src="../img/logo_ink.png" style="position:absolute;left:50%;transform:translateX(-50%);top:200px;width:150px">
<div class="k" style="position:absolute;left:0;right:0;top:360px;text-align:center;color:#A88B57">Votre avis</div>
<div class="T" style="position:absolute;left:0;right:0;top:420px;text-align:center;font-size:140px">Plutôt douce<br><span style="color:#4B523C">ou piquante ?</span></div>
<div style="position:absolute;left:110px;right:110px;top:900px;display:flex;gap:24px">
<div style="flex:1;border-radius:28px;background:#F5EFE4;padding:50px 30px;text-align:center"><div class="T" style="font-size:70px">Douce</div><div class="p" style="font-size:28px;color:#4B523C;margin-top:14px">Arbequina</div></div>
<div style="flex:1;border-radius:28px;background:#4B523C;color:#F5EFE4;padding:50px 30px;text-align:center"><div class="T" style="font-size:70px">Piquante</div><div class="p" style="font-size:28px;color:#E6DDCE;margin-top:14px">Picual</div></div></div>
<div class="k" style="position:absolute;left:0;right:0;top:1300px;text-align:center;color:#4B523C">Répondez-nous en message</div>""")],H=1920)
# ===== J5
n=7
dg=[("Versez un peu d'huile dans un petit verre.","Une cuillère à soupe suffit."),("Réchauffez le verre dans la main.","Les arômes se libèrent avec la chaleur."),("Sentez.","Herbe coupée, pomme verte, amande, tomate…"),("Goûtez en aspirant un peu d'air.","L'huile se répand partout en bouche."),("Ça pique en gorge ?","C'est bon signe : une huile fraîche et vivante.")]
page('J5_carrousel_degustation',[cover(n,'Le guide','En 5 étapes','Déguster<br>une huile<br><span style="color:#4B523C">comme<br>un pro.</span>',cut('trio',500,820,1150))]+[num_slide(i+2,n,'Le guide',f'0{i+1}',t,d,i%2==1) for i,(t,d) in enumerate(dg)]+[endprod(7,n,'Le guide','Pour s\'entraîner :<br><span style="color:#4B523C">le coffret.</span>','Hojiblanca · Arbosana · Picual',cut('trio',600,540,1150))])
page('J5_post_recolte',[photo_single('mist.jpg','50% 50%',"L'Andalousie",'Récolte précoce','Récoltée tôt,<br>pour garder<br>la fraîcheur du fruit.')])
page('J5_story_coffret',[story_prod('Hojiblanca · Arbosana · Picual','Le coffret.','Trois huiles à comparer.',cut('trio',820,540,1460))],H=1920)
# ===== J6
n=7
fc=[("Sur du pain grillé.","Avec une tomate râpée et une pincée de sel."),("Sur des tomates de saison.","Tranchées, salées, poivrées. L'huile fait le reste."),("Sur un poisson grillé.","Un filet à cru, au moment de servir."),("Sur des légumes rôtis.","À la sortie du four, pour réveiller les saveurs."),("Toute seule.","Sur un morceau de pain, pour goûter le fruit.")]
page('J6_carrousel_5facons',[cover(n,'À table','Cinq idées simples','Cinq façons<br>de la <span style="color:#4B523C">goûter.</span>',cut('eco',300,800,1150))]+[num_slide(i+2,n,'À table',f'0{i+1}',t,d,i%2==1) for i,(t,d) in enumerate(fc)]+[endprod(7,n,'À table','Toujours à cru,<br><span style="color:#4B523C">pour le goût.</span>','Huile d\'olive vierge extra',cut('coupage',420,320,1150)+cut('ceramic',460,780,1150))])
page('J6_post_grand_format',[('',f'<div class="beige" style="position:absolute;inset:0"></div>'+chrome(1,1,'Les huiles')+"""<div class="k" style="position:absolute;left:80px;top:250px;color:#A88B57">Arbequina · 1 L</div>
<div class="T" style="position:absolute;left:76px;top:300px;font-size:118px">Le litre,<br><span style="color:#4B523C">pour cuisiner<br>sans compter.</span></div>"""+cut('tins',520,840,1180))])
page('J6_story_grand_format',[story_prod('Arbequina · 1 L','Le grand format.','Pour la cuisine de tous les jours.',cut('tins',820,540,1460))],H=1920)
# ===== J7
n=7
VA=[('Arbequina','Douce et fruitée','La plus douce. Parfaite à cru, au quotidien.','#98A673'),('Hojiblanca','Ronde','Une légère amertume, beaucoup d\'équilibre.','#48A99A'),('Arbosana','Fruitée et verte','Des notes vertes et vives.','#7E8C5E'),('Picual','Robuste','Du caractère et du piquant en fin de bouche.','#4F5D5A'),('Coupage','Équilibré','L\'assemblage de Picual et d\'Arbequina.','#A88B57')]
vs=[cover(n,'Le guide','Les variétés','Une olive,<br><span style="color:#4B523C">un goût.</span>',cut('trio',520,800,1150))]
for i,(nm,k,d,col) in enumerate(VA):
    vs.append(('background:#F5EFE4',chrome(i+2,n,'Le guide')+f"""<div style="position:absolute;left:80px;top:240px;width:150px;height:200px;border-radius:50%;background:{col};transform:rotate(18deg)"></div>
<div class="k" style="position:absolute;left:80px;top:560px;color:#A88B57">{k}</div><div class="T" style="position:absolute;left:76px;top:610px;font-size:170px">{nm}</div>
<div class="p" style="position:absolute;left:80px;right:170px;top:840px;color:#4B523C">{d}</div>"""))
vs.append(endprod(7,n,'Le guide','Toutes à goûter<br><span style="color:#4B523C">sur le site.</span>','Lien en bio',cut('coupage',400,280,1150)+cut('trio',560,760,1150)))
page('J7_carrousel_varietes',vs)
page('J7_post_olive',[photo_single('tin_olives.jpg','50% 50%',"L'Andalousie",'Notre Arbequina','Tout commence<br>par l\'olive.')])
page('J7_story_arbequina',[story_prod('Écologique','Arbequina.','Fruitée et vive.',cut('eco',600,540,1420))],H=1920)
json.dump(M,open('cal/manifest.json','w'))
