import json
CSS='''<!doctype html><html lang="fr"><head><meta charset="utf-8"><link href="../fonts/fonts.css" rel="stylesheet"><style>
*{margin:0;padding:0;box-sizing:border-box}body{font-family:"Instrument Sans",sans-serif;color:#1F241C;background:#000}
.s{position:absolute;top:0;width:1080px;overflow:hidden}
.T{font-family:"Instrument Serif",serif;font-weight:400;letter-spacing:-.022em;line-height:1}
.k{font-size:20px;letter-spacing:6px;text-transform:uppercase;font-weight:600}
.bar{position:absolute;left:80px;right:80px;display:flex;justify-content:space-between;align-items:center}
.hair{position:absolute;left:80px;right:80px;height:1px}
.p{font-size:36px;line-height:1.4}
.ph{position:absolute;object-fit:cover}
</style></head><body>'''
M=[]
def chrome(i,n,series,dark=False,H=1350,bottom=True):
    c='#F5EFE4' if dark else '#1F241C'; a='#D8C08F' if dark else '#A88B57'; logo='logo_cream' if dark else 'logo_ink'
    hc='rgba(245,239,228,.35)' if dark else 'rgba(31,36,28,.18)'
    s=f'<div class="bar" style="top:64px"><img src="../img/{logo}.png" style="width:128px"><span class="k" style="color:{a}">{series}</span></div><div class="hair" style="top:132px;background:{hc}"></div>'
    if bottom:
        r=f'{i:02d} / {n:02d}' if n>1 else "Huile d'olive vierge extra"
        s+=f'<div class="hair" style="top:{H-118}px;background:{hc}"></div><div class="bar" style="top:{H-92}px"><span class="k" style="color:{c};opacity:.8">jimenez-shop.com</span><span class="k" style="color:{a}">{r}</span></div>'
    return s
def page(name,slides,H=1350):
    n=len(slides); h=CSS.replace('<body>',f'<body style="width:{1080*n}px;height:{H}px">')
    for i,s in enumerate(slides): h+=f'<div class="s" style="left:{i*1080}px;height:{H}px;{s[0]}">{s[1]}</div>'
    open(f'cal3/{name}.html','w').write(h+'</body></html>'); M.append([name,n,H])
# photo specs: bg, box(x,y,w,h), objpos, text zone
PH={
 'arbequina':('n_arbequina.jpg','linear-gradient(#D9C9B5,#E2D5C3 55%,#EADFCD)'),'ceramic':('n_ceramic.jpg','linear-gradient(#EEDFCB,#F1E5D3 55%,#EFE6D8)'),'coupage':('n_coupage.jpg','#FFFFFF'),
 'eco':('n_eco.jpg','linear-gradient(#D3CFCE,#CFCBCA 60%,#D8D3D6)'),'trio':('n_trio.jpg','#FCF3F3'),'giftbox':('giftbox.jpg','#23231F'),'olives':('tin_olives.jpg','#CDBFA8'),'close':('close.jpg','#DDDDDB')}
def img(key,x,y,w,h,op='50% 50%',fade=None):
    f,bg=PH[key]; m=''
    if fade=='top' and key=='trio': m='-webkit-mask-image:linear-gradient(to bottom,transparent 0,#000 22%);'
    elif fade=='top': m='-webkit-mask-image:radial-gradient(ellipse 50% 50% at 50% 50%,#000 78%,transparent 100%);'
    if fade=='bottom': m='-webkit-mask-image:linear-gradient(to top,transparent 0,#000 18%);'
    return f'<img class="ph" src="../hq/{f}" style="left:{x}px;top:{y}px;width:{w}px;height:{h}px;object-position:{op};{m}">'
def bg(key): return 'background:'+PH[key][1]
# ---- layouts
def photo_top_text(key,i,n,series,k,t,box,op='50% 50%',H=1350,fade='top',tc='#1F241C',kc='#A88B57',sub=None):
    # text at top on photo bg, photo below
    s=img(key,*box,op=op,fade=fade)+chrome(i,n,series,H=H)
    s+=f'<div class="k" style="position:absolute;left:80px;top:200px;color:{kc}">{k}</div><div class="T" style="position:absolute;left:76px;right:80px;top:248px;font-size:112px;color:{tc}">{t}</div>'
    if sub: s+=f'<div class="p" style="position:absolute;left:80px;right:300px;top:{248+112*t.count("<br>")+150}px;font-size:32px;color:#4B523C">{sub}</div>'
    return (bg(key),s)
def photo_dark(key,i,n,series,k,t,op='50% 50%',H=1350,sub=None):
    f,_=PH[key]
    s=f'<img class="ph" src="../hq/{f}" style="left:0;top:0;width:1080px;height:{H}px;object-position:{op}"><div style="position:absolute;inset:0;background:linear-gradient(to top,rgba(14,17,12,.88) 0%,rgba(14,17,12,.45) 38%,rgba(14,17,12,0) 60%,rgba(14,17,12,.35) 100%)"></div>'+chrome(i,n,series,dark=True,H=H)
    y=H-470-(70 if sub else 0)
    s+=f'<div class="k" style="position:absolute;left:80px;top:{y}px;color:#D8C08F">{k}</div><div class="T" style="position:absolute;left:76px;right:80px;top:{y+48}px;font-size:104px;color:#F5EFE4">{t}</div>'
    if sub: s+=f'<div class="p" style="position:absolute;left:80px;right:200px;top:{y+48+104*(t.count("<br>")+1)+24}px;font-size:32px;color:#E6DDCE">{sub}</div>'
    return ('background:#111',s)
def typo(i,n,series,k,t,d,dark=False,num=None):
    fg='#F5EFE4' if dark else '#1F241C'; ac='#D8C08F' if dark else '#A88B57'; bc='#E6DDCE' if dark else '#4B523C'
    s=chrome(i,n,series,dark=dark)
    if num: s+=f'<div class="T" style="position:absolute;left:72px;top:180px;font-size:280px;color:{ac}">{num}</div>'
    y=560 if num else 330
    s+=f'<div class="k" style="position:absolute;left:80px;top:{y-50}px;color:{ac}">{k}</div><div class="T" style="position:absolute;left:78px;right:90px;top:{y}px;font-size:100px;color:{fg}">{t}</div>'
    s+=f'<div class="p" style="position:absolute;left:80px;right:170px;top:{y+100*(t.count("<br>")+1)+160}px;color:{bc}">{d}</div>'
    return ('background:'+('#4B523C' if dark else '#F5EFE4'),s)
def story_photo(key,k,t,box,op='50% 50%',fade='top',tc='#1F241C'):
    s=img(key,*box,op=op,fade=fade)
    s+=f'<img src="../img/logo_ink.png" style="position:absolute;left:50%;transform:translateX(-50%);top:190px;width:150px">'
    s+=f'<div class="k" style="position:absolute;left:0;right:0;top:320px;text-align:center;color:#A88B57">{k}</div><div class="T" style="position:absolute;left:60px;right:60px;top:370px;text-align:center;font-size:118px;color:{tc}">{t}</div>'
    s+='<div style="position:absolute;left:50%;transform:translateX(-50%);top:1690px;padding:24px 50px;border-radius:999px;background:#1F241C;color:#F5EFE4;font-size:30px;white-space:nowrap">Lien en bio · jimenez-shop.com</div>'
    return (bg(key),s)
def story_dark(key,k,t,op='50% 50%'):
    f,_=PH[key]
    s=f'<img class="ph" src="../hq/{f}" style="left:0;top:0;width:1080px;height:1920px;object-position:{op}"><div style="position:absolute;inset:0;background:linear-gradient(to top,rgba(14,17,12,.9) 0%,rgba(14,17,12,.4) 40%,rgba(14,17,12,0) 62%,rgba(14,17,12,.4) 100%)"></div>'
    s+='<img src="../img/logo_cream.png" style="position:absolute;left:50%;transform:translateX(-50%);top:190px;width:150px">'
    s+=f'<div class="k" style="position:absolute;left:0;right:0;top:1180px;text-align:center;color:#D8C08F">{k}</div><div class="T" style="position:absolute;left:60px;right:60px;top:1230px;text-align:center;font-size:112px;color:#F5EFE4">{t}</div>'
    s+='<div style="position:absolute;left:50%;transform:translateX(-50%);top:1690px;padding:24px 50px;border-radius:999px;background:#F5EFE4;color:#1F241C;font-size:30px;white-space:nowrap">Lien en bio · jimenez-shop.com</div>'
    return ('background:#111',s)
# photo boxes (1080x1350)
B={'arbequina':(130,350,820,1093,'50% 50%'),'ceramic':(160,410,760,899,'50% 50%'),'coupage':(40,360,1000,936,'50% 50%'),
   'eco':(-110,390,1300,847,'50% 50%'),'trio':(250,500,580,719,'50% 50%')}
def P(key,i,n,series,k,t,sub=None): x,y,w,h,op=B[key]; return photo_top_text(key,i,n,series,k,t,(x,y,w,h),op=op,sub=sub)
SB={'arbequina':(40,600,1000,1333,'50% 50%'),'ceramic':(40,600,1000,1183,'50% 50%'),'coupage':(0,730,1080,1011,'50% 50%'),'eco':(-210,710,1500,978,'50% 50%'),'trio':(90,560,900,1116,'50% 50%')}
def SP(key,k,t): x,y,w,h,op=SB[key]; return story_photo(key,k,t,(x,y,w,h),op=op)
S1='Le goût'; S2='À table'; S3='Les huiles'; S4='Le guide'
# ===== J1
page('J1_carrousel_gout',[P('trio',1,7,S1,'En 5 sensations','Le goût d\'une<br>vraie huile d\'olive.'),
 typo(2,7,S1,'Le nez','L\'herbe<br>fraîchement coupée.','Avant même de goûter, ça sent le vert, le frais, le jardin.',num='01'),
 typo(3,7,S1,'En bouche','Pomme verte<br>et amande.','Un fruité net, qui reste longtemps.',dark=True,num='02'),
 typo(4,7,S1,'La texture','Douce,<br>presque ronde.','Elle enrobe une tomate, un pain chaud, un poisson.',num='03'),
 typo(5,7,S1,'La finale','Une pointe<br>d\'amertume.','Légère, élégante. C\'est le goût de l\'olive.',dark=True,num='04'),
 typo(6,7,S1,'En gorge','Un léger<br>piquant.','Le signe d\'une huile fraîche, récoltée tôt.',num='05'),
 P('arbequina',7,7,S1,'Arbequina · Première récolte','Tout ça,<br>dans une bouteille.',sub='Lien en bio · Livraison en France')])
page('J1_post_arbequina',[P('arbequina',1,1,S3,'Arbequina · Première récolte','Pomme verte,<br>amande,<br>un léger piquant.')])
page('J1_story_ceramique',[SP('ceramic','Arbequina','À offrir.<br><span style="color:#4B523C">Ou à garder.</span>')],H=1920)
# ===== J2
page('J2_carrousel_plats',[photo_dark('olives',1,7,S2,'Cinq idées','Ce qu\'un filet<br>d\'huile d\'olive<br>change à tout.',op='50% 60%'),
 typo(2,7,S2,'Le pain','Encore tiède,<br>croustillant.','Un filet doré, une pincée de sel. On n\'a besoin de rien d\'autre.',num='01'),
 typo(3,7,S2,'La tomate','Mûre,<br>en tranches.','Sel, poivre, et l\'huile qui fait briller l\'assiette.',dark=True,num='02'),
 typo(4,7,S2,'Le poisson','Juste<br>grillé.','Un trait d\'huile à cru au moment de servir, et le goût change tout.',num='03'),
 typo(5,7,S2,'Les légumes','Sortis<br>du four.','Courgettes, poivrons, aubergines, caramélisés et brillants.',dark=True,num='04'),
 typo(6,7,S2,'La burrata','Crémeuse,<br>fondante.','Un filet d\'huile fruitée et un tour de poivre. Le dessert des salés.',num='05'),
 P('coupage',7,7,S2,'Picual & Arbequina','Notre Coupage,<br>pour tout ça.',sub='Lien en bio')])
page('J2_post_coffret',[P('trio',1,1,S3,'Hojiblanca · Arbosana · Picual','Trois huiles.<br>Laquelle pour vous ?')])
page('J2_story_coupage',[SP('coupage','Picual & Arbequina','Ronde<br><span style="color:#4B523C">et équilibrée.</span>')],H=1920)
# ===== J3
page('J3_carrousel_recette',[P('ceramic',1,6,S2,'2 minutes · 4 ingrédients','Le pan<br>con tomate.'),
 typo(2,6,S2,'Étape 1','Le pain<br>bien doré.','Une belle tranche de pain de campagne, grillée jusqu\'à ce qu\'elle croustille.',num='01'),
 typo(3,6,S2,'Étape 2','La tomate<br>râpée.','Bien mûre, râpée directement dessus. Le jus imbibe la mie.',dark=True,num='02'),
 typo(4,6,S2,'Étape 3','Un filet<br>généreux.','D\'huile d\'olive vierge extra. C\'est elle qui fait tout le goût.',num='03'),
 typo(5,6,S2,'Étape 4','Une pincée<br>de sel.','Et c\'est prêt. Le petit-déjeuner de toute l\'Andalousie.',dark=True,num='04'),
 P('arbequina',6,6,S2,'Notre conseil','Avec l\'Arbequina<br>première récolte.',sub='Lien en bio')])
page('J3_post_cadeau',[photo_dark('giftbox',1,1,'À offrir','Le coffret','Le cadeau qu\'on<br>ouvre à table.',op='55% 50%')])
page('J3_story_eco',[SP('eco','Arbequina · Écologique','Fruitée<br><span style="color:#4B523C">et vive.</span>')],H=1920)
# ===== J4
VA=[('Hojiblanca','Ronde','Légèrement amère, tout en rondeur. Pour les légumes et les plats mijotés.','#48A99A'),
    ('Arbosana','Fruitée et verte','Des notes vertes et vives. Parfaite sur une salade.','#98A673'),
    ('Picual','Robuste','Du caractère et du piquant en fin de bouche. Pour les amateurs.','#4F5D5A')]
sl=[P('trio',1,5,S3,'Le coffret dégustation','Trois olives.<br>Trois goûts.')]
for j,(nm,k,d,col) in enumerate(VA):
    sl.append(('background:'+col,chrome(j+2,5,S3,dark=True)+f'<div class="k" style="position:absolute;left:80px;top:470px;color:#F5EFE4;opacity:.85">{k}</div><div class="T" style="position:absolute;left:76px;top:520px;font-size:190px;color:#F5EFE4">{nm}</div><div class="p" style="position:absolute;left:80px;right:170px;top:780px;color:#F5EFE4">{d}</div>'))
sl.append(photo_dark('giftbox',5,5,S3,'À goûter côte à côte','Le coffret,<br>sur le site.',op='55% 50%',sub='Lien en bio · Livraison en France'))
page('J4_carrousel_coffret',sl)
page('J4_post_olive',[photo_dark('olives',1,1,'L\'Andalousie','Notre Arbequina','Tout commence<br>par l\'olive.',op='50% 55%')])
page('J4_story_coffret',[SP('trio','Hojiblanca · Arbosana · Picual','Le coffret<br><span style="color:#4B523C">dégustation.</span>')],H=1920)
# ===== J5
CH=[('Pour tous les jours','Arbequina','Fruitée et vive, notes d\'herbe fraîche.'),('Pour un goût équilibré','Coupage','Picual et Arbequina, ronde et équilibrée.'),('Pour les connaisseurs','Première récolte','Pomme verte, amande, un léger piquant.'),('Pour comparer','Le coffret','Hojiblanca, Arbosana, Picual.'),('Pour offrir','La céramique','La bouteille qu\'on garde sur la table.')]
sl=[P('coupage',1,7,S3,'Le bon choix','Quelle huile<br>pour vous ?')]
for j,(k,t,d) in enumerate(CH): sl.append(typo(j+2,7,S3,k,t+'.',d,dark=j%2==1,num=f'0{j+1}'))
sl.append(P('ceramic',7,7,S3,'Toute la collection','Sur le site.',sub='Lien en bio · Livraison en France'))
page('J5_carrousel_choisir',sl)
page('J5_post_ceramique',[P('ceramic',1,1,S3,'Arbequina','La bouteille<br>qu\'on garde<br>sur la table.')])
page('J5_story_arbequina',[SP('arbequina','Arbequina · Première récolte','Pomme verte<br><span style="color:#4B523C">et amande.</span>')],H=1920)
# ===== J6
DG=[('Versez','Un fond<br>de verre.','Une cuillère à soupe, dans un petit verre.'),('Réchauffez','Dans<br>la main.','Quelques secondes. Les arômes se réveillent.'),('Sentez','Herbe,<br>pomme, amande.','Fermez les yeux. Tout est là.'),('Goûtez','Une petite<br>gorgée.','En aspirant un peu d\'air, pour qu\'elle s\'ouvre.'),('Ça pique ?','C\'est<br>bon signe.','Le piquant en gorge, c\'est la fraîcheur.')]
sl=[('background:#4B523C',chrome(1,7,S4,dark=True)+'<div class="k" style="position:absolute;left:80px;top:420px;color:#D8C08F">En 5 étapes</div><div class="T" style="position:absolute;left:76px;top:470px;font-size:170px;color:#F5EFE4">Déguster<br>comme<br><span style="color:#D8C08F">un pro.</span></div><div class="p" style="position:absolute;left:80px;top:1060px;font-size:30px;color:#E6DDCE">Glissez →</div>')]
for j,(k,t,d) in enumerate(DG): sl.append(typo(j+2,7,S4,k,t,d,dark=j%2==1,num=f'0{j+1}'))
sl.append(photo_dark('giftbox',7,7,S4,'Pour s\'entraîner','Nos coffrets,<br>sur le site.',op='55% 50%',sub='Lien en bio'))
page('J6_carrousel_degustation',sl)
page('J6_post_eco',[P('eco',1,1,S3,'Arbequina · Écologique','Fruitée, vive,<br>herbacée.')])
page('J6_story_cadeau',[story_dark('giftbox','À offrir','Le coffret<br>prestige.',op='55% 50%')],H=1920)
# ===== J7
ER=[('Près des plaques','La chaleur<br>l\'abîme.','Rangez-la dans un placard, au frais.'),('En bouteille claire','La lumière<br>l\'oxyde.','Verre foncé, céramique ou bidon.'),('Seulement à cru','Elle cuisine<br>très bien.','Une vierge extra supporte une cuisson douce.'),('Ouverte trop longtemps','L\'air<br>l\'éteint.','Bouchon fermé après chaque usage.'),('Toutes pareilles','Chaque olive<br>a son goût.','Arbequina douce, Picual piquante.')]
sl=[P('arbequina',1,7,S4,'Cinq erreurs','Ce qu\'on fait<br>tous de travers.')]
for j,(k,t,d) in enumerate(ER): sl.append(typo(j+2,7,S4,k,t,d,dark=j%2==1,num=f'0{j+1}'))
sl.append(photo_dark('olives',7,7,S4,'Directement d\'Andalousie','Nos huiles,<br>sur le site.',op='50% 55%',sub='Lien en bio · Livraison en France'))
page('J7_carrousel_erreurs',sl)
page('J7_post_coupage',[P('coupage',1,1,S3,'Coupage','Picual et Arbequina,<br>réunies.')])
page('J7_story_olive',[story_dark('olives','Notre Arbequina','Tout commence<br>par l\'olive.',op='50% 55%')],H=1920)
json.dump(M,open('cal3/manifest.json','w'))
