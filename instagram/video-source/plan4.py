import json,os
from PIL import Image
Image.MAX_IMAGE_PIXELS=None
C={
'L1_matin_oliviers':"Bonjour depuis l'Andalousie ☀️\n\nC'est ici, entre ces collines, que poussent les olives de nos huiles. Belle semaine à vous 🫒\n\n#andalousie #oliviers #bonjour #huiledolive #terroir",
'L2_carrousel_tartines':"3 tartines pour bien commencer la journée 🍞\n\nTomate & fleur de sel, avocat & citron, fromage frais & herbes… avec un point commun : un filet généreux d'huile d'olive.\nEnregistrez pour demain matin 🔖\n\nArbequina première récolte · lien en bio\n\n#petitdejeuner #tartine #recettefacile #huiledolive #arbequina",
'L3_post_ceramique':"Trop belle pour rester au placard ✨\n\nNotre Arbequina dans sa bouteille en céramique : douce, fruitée, et toujours à portée de main sur la table.\nLien en bio.\n\n#arbequina #decotable #huiledolive #epiceriefine #artdelatable",
'M1_fact_olives':"Le saviez-vous ? 🫒\n\nIl faut environ 5 à 6 kg d'olives pour faire un seul litre d'huile. Et quand on les récolte tôt, elles donnent moins d'huile… mais beaucoup plus de goût.\n\nVous le saviez ? 👇\n\n#lesaviezvous #huiledolive #olives #andalousie #culturegourmande",
'M3_post_premiere':"Récoltée tôt, pressée à froid 🌿\n\nNotre Arbequina première récolte : pomme verte, amande, et ce petit piquant qui dit que l'huile est fraîche.\nLien en bio · Livraison en France\n\n#arbequina #premiererecolte #huiledolive #pressageafroid #epiceriefine",
'W1_matin_aerien':"Vu du ciel, l'Andalousie ressemble à ça 😍\n\nDes milliers d'oliviers en rangs serrés, à perte de vue. C'est de là que viennent nos huiles.\n\n#andalousie #oliveraie #vueduciel #huiledolive #espagne",
'W2_carrousel_vierge':"« Vierge extra », on le lit partout… mais ça veut dire quoi ? 🤔\n\nGlissez pour comprendre les 4 critères de la catégorie la plus exigeante. Enregistrez pour vos prochaines courses 🔖\n\nToutes nos huiles sont vierge extra · lien en bio\n\n#huiledolive #viergeextra #lesaviezvous #bienmanger #epiceriefine",
'W3_post_trio':"Hojiblanca, ronde. Arbosana, fruitée. Picual, robuste.\nTrois olives, trois caractères, un seul coffret 🫒\n\nVous commencez par laquelle ? 👇\nLe coffret dégustation · lien en bio\n\n#coffretdegustation #hojiblanca #arbosana #picual #idéecadeau",
'W4_recette_legumes':"Ce soir, on fait simple et bon 🥕\n\nDes légumes rôtis, une huile généreuse, 40 minutes de four… et un dernier filet à cru avant de servir : c'est là que tout se joue.\nEnregistrez la recette 🔖\n\n#legumesrotis #recettefacile #cuisinemaison #huiledolive #dinerdusoir",
'J1_citation_pain':"La plus simple des dégustations 🍞🫒\n\nUn bon pain, une bonne huile, et c'est tout. Vous êtes plutôt pain de campagne ou baguette ? 👇\n\n#huiledolive #painmaison #degustation #epiceriefine #andalousie",
'J2_carrousel_cuisiner':"Non, l'huile d'olive vierge extra ne se garde pas que pour la salade 🍳\n\nPoêler, rôtir, mijoter, finir à cru : glissez pour les 4 façons de l'utiliser au quotidien. Enregistrez 🔖\n\nNotre Arbequina écologique en 1 L · lien en bio\n\n#cuisinemaison #astucecuisine #huiledolive #arbequina #ecologique",
'J3_post_ouverture':"Le premier geste 🫒\n\nOn dévisse, on approche le nez… et ça sent l'herbe fraîchement coupée. Le signe d'une huile vraiment fraîche.\nLien en bio.\n\n#huiledolive #fraicheur #degustation #epiceriefine #andalousie",
'J4_apero':"L'apéro, version andalouse 🫒🍞\n\nDu pain, des olives, une bonne huile dans une coupelle. Pas besoin de plus pour passer une belle soirée.\nLien en bio.\n\n#apero #aperoandalou #olives #huiledolive #tapas",
'V1_matin_bottle':"Le premier geste du matin ☀️\n\nUn pain bien grillé, un filet d'Arbequina, une pincée de sel. Bonne journée !\nLien en bio.\n\n#petitdejeuner #arbequina #huiledolive #bonjour #painmaison",
'V2_carrousel_burrata':"La burrata parfaite, en 5 minutes chrono 🍅\n\nTomates cerises, basilic, fleur de sel… et une huile fruitée qui se fond dans la crème. Enregistrez pour ce week-end 🔖\n\nArbequina première récolte · lien en bio\n\n#burrata #recetteitalienne #recettefacile #huiledolive #apero",
'V3_question':"On veut savoir 👇\n\nVotre plat préféré avec un filet d'huile d'olive : A, B, C ou D ? Répondez en commentaire, on lit tout 🫒\n\n#huiledolive #cuisinemaison #gourmand #epiceriefine #andalousie",
'V4_post_etui':"Prête à offrir, sans papier cadeau 🎁\n\nNotre Coupage (Picual & Arbequina) dans son étui : rond, équilibré, et toujours apprécié.\nLien en bio · Livraison en France\n\n#idéecadeau #cadeaugourmand #coupage #huiledolive #epiceriefine",
'S1_matin_marche':"Le programme parfait du samedi 🧺\n\nUn tour au marché, du bon pain, une bonne huile. Et vous, c'est quoi votre rituel du week-end ? 👇\n\n#samedi #marche #weekend #huiledolive #bienmanger",
'S2_carrousel_salades':"3 salades d'automne, pleines de goût 🍂\n\nCourge rôtie & feta, lentilles & herbes, pomme & noix… et une huile fruitée pour tout réveiller. Enregistrez 🔖\n\nArbequina écologique · lien en bio\n\n#saladedautomne #recettedesaison #cuisinemaison #huiledolive #ecologique",
'S3_post_ceramique':"Directement du producteur à votre table 🫒\n\nNos huiles partent d'Andalousie, sans intermédiaire, pour arriver chez vous aussi fraîches que possible.\nLien en bio.\n\n#producteur #circuitcourt #andalousie #huiledolive #epiceriefine",
'S4_livraison':"Bonne nouvelle 📦\n\nLa livraison est désormais offerte dès 80 € d'achat, partout en France métropolitaine. Expédiée directement d'Andalousie en Chronopost.\nLien en bio.\n\n#livraisonofferte #huiledolive #epiceriefine #andalousie #bonplan",
'D1_matin_dimanche':"Dimanche, on prend le temps 🌿\n\nUn long petit-déjeuner, du bon pain, une bonne huile… Bon dimanche à vous.\n\n#dimanche #slowlife #andalousie #huiledolive #oliviers",
'D2_carrousel_poulet':"Le déjeuner du dimanche 🍋\n\nUn poulet rôti au citron, à l'ail et au thym, badigeonné d'huile d'olive. Simple, généreux, inratable. Enregistrez la recette 🔖\n\nNotre Coupage · lien en bio\n\n#pouletroti #dejeunerdudimanche #recettefamiliale #huiledolive #cuisinemaison",
'D3_post_bio':"Cultivée dans le respect de la terre 🌱\n\nNotre Arbequina écologique : fruitée, vive, avec des notes d'herbe fraîche. En grand format, pour cuisiner tous les jours.\nLien en bio.\n\n#ecologique #arbequina #huiledolive #cuisinesaine #andalousie",
'D4_sondage':"Votre huile de la semaine ? 🫒\n\nA, B, C ou D : dites-nous en commentaire laquelle vous tente le plus !\nToute la collection · lien en bio\n\n#huiledolive #sondage #epiceriefine #arbequina #coffretdegustation",
}
SL={'L':'2026-10-12','M':'2026-10-13','W':'2026-10-14','J':'2026-10-15','V':'2026-10-16','S':'2026-10-17','D':'2026-10-18'}
T={'1':'07:30','2':'11:30','3':'16:00','4':'20:00'}
M=json.load(open('cal4/manifest.json'))
D='/home/user/Jimy/instagram/calendrier-v4/'
plan=[]
for name,n,H in M:
    im=Image.open(f'cal4/{name}.png').convert('RGB'); files=[]
    for i in range(n):
        s=im.crop((i*2160,0,(i+1)*2160,H*2)).resize((1080,H),Image.LANCZOS)
        fn=f'{name}{"_"+str(i+1) if n>1 else ""}.jpg'; s.save(D+fn,'JPEG',quality=95,optimize=True); files.append(fn)
    plan.append({'name':name,'kind':'carrousel' if n>1 else 'post','when':f"{SL[name[0]]}T{T[name[1]]}:00",'files':files,'caption':C[name]})
R=[{'name':'J6_post_eco (v3, déplacé)','kind':'post','when':'2026-10-12T20:00:00','plugkit':'cmuwysfyo01jqpk01ys17rwhr','files':['../calendrier-v3/J6_post_eco.jpg']},
   {'name':'J7_carrousel_erreurs (v3, déplacé)','kind':'carrousel','when':'2026-10-13T11:30:00','plugkit':'cmuwytb1f01pkpk0105l7kefa','files':[f'../calendrier-v3/J7_carrousel_erreurs_{i}.jpg' for i in range(1,8)]},
   {'name':'J7_post_coupage (v3, déplacé)','kind':'post','when':'2026-10-13T20:00:00','plugkit':'cmuwytbsi01pupk01mplg3qhf','files':['../calendrier-v3/J7_post_coupage.jpg']}]
plan=sorted(plan+R,key=lambda p:p['when'])
json.dump(plan,open(D+'plan.json','w'),ensure_ascii=False,indent=1)
days={'2026-10-12':'Lundi 12','2026-10-13':'Mardi 13','2026-10-14':'Mercredi 14','2026-10-15':'Jeudi 15','2026-10-16':'Vendredi 16','2026-10-17':'Samedi 17','2026-10-18':'Dimanche 18'}
md='# Calendrier Instagram v4 — semaine du 12 au 18 octobre (heure de Paris)\n\n4 publications par jour : 7 h 30 · 11 h 30 · 16 h · 20 h. Collaborateurs : @davico_jairo, @sylvain.davico.\nLes stories de 9 h du 12 et du 13 (déjà programmées) restent en place.\n\n'
for p in plan:
    d,t=p['when'].split('T')
    md+=f"## {days[d]} · {t[:5].replace(':',' h ')} — {p['kind']} — {p['name']}\nImages : {', '.join(p['files'])}\n\n"+(('> '+p['caption'].replace('\n','\n> ')+'\n\n') if p.get('caption') else '(déjà validé, légende inchangée)\n\n')
open(D+'legendes.md','w').write(md)
# daily previews
from PIL import ImageDraw, ImageFont
font=ImageFont.truetype('/usr/share/fonts/truetype/dejavu/DejaVuSans.ttf',22)
for d,label in days.items():
    ps=[p for p in plan if p['when'].startswith(d)]
    rows=[]
    for p in ps:
        th=[]
        for f in p['files']:
            path=D+f if not f.startswith('..') else os.path.normpath(D+f)
            im=Image.open(path).convert('RGB'); im.thumbnail((240,300)); th.append(im)
        rows.append((p['when'][11:16]+' · '+p['kind'],th))
    W=max(len(t) for _,t in rows)*244+20; Hh=len(rows)*345+60
    c=Image.new('RGB',(W,Hh),'#F5EFE4'); dr=ImageDraw.Draw(c); dr.text((20,15),label+' octobre',fill='#1F241C',font=font)
    for r,(lab,th) in enumerate(rows):
        y=60+r*345; dr.text((20,y),lab,fill='#A88B57',font=font)
        for i,t in enumerate(th): c.paste(t,(20+i*244,y+32))
    c.save(D+f'apercu-{label.split()[0].lower()}.jpg',quality=88)
print(len(plan))
