import json
C={
'J1_carrousel_gout':"Herbe coupée, pomme verte, amande… et ce petit piquant en fin de bouche 🫒\n\nUne vraie huile d'olive, ça se sent avant même de la goûter. Glissez jusqu'au bout 👉\n\nEnregistrez ce post pour votre prochaine dégustation 🔖\nArbequina première récolte · lien en bio · Livraison en France\n\n#huiledolive #huiledolivevierge #arbequina #degustation #epiceriefine #andalousie #gastronomie",
'J1_post_arbequina':"Une tranche de pain encore tiède. Un filet doré. Et ce parfum de pomme verte et d'amande qui monte… 🍞🫒\n\nNotre Arbequina première récolte, pressée à froid en Andalousie.\nLien en bio · Livraison en France\n\n#arbequina #huiledolive #painmaison #andalousie #epiceriefine",
'J2_carrousel_plats':"Le pain encore tiède, la tomate bien mûre, la burrata qui fond… Il ne manquait qu'une chose 🫒\n\nGlissez, et dites-nous votre préféré en commentaire 👇\n\nNotre Coupage (Picual & Arbequina), lien en bio.\n\n#huiledolive #recettefacile #cuisinemaison #burrata #tomates #andalousie",
'J2_post_coffret':"Hojiblanca, ronde. Arbosana, fruitée et verte. Picual, robuste et piquante.\nTrois huiles, trois façons de tremper son pain 🍞\n\nLaquelle vous tente ? 👇\nLe coffret dégustation, lien en bio.\n\n#coffretcadeau #degustation #huiledolive #picual #idéecadeau",
'J3_carrousel_recette':"Croustillant, juteux, doré : le pan con tomate, c'est 2 minutes, 4 ingrédients… et un filet généreux d'huile d'olive 🍅🫒\n\nEnregistrez la recette pour demain matin 🔖\n\n#pancontomate #petitdejeuner #recettefacile #cuisineespagnole #huiledolive",
'J3_post_cadeau':"Le cadeau qu'on ouvre à table… et qu'on finit avec du bon pain 🎁\n\nNos huiles d'olive vierge extra d'Andalousie, à offrir (ou à garder).\nLien en bio · Livraison en France\n\n#idéecadeau #coffretcadeau #huiledolive #epiceriefine #cadeaugourmand",
'J4_carrousel_coffret':"Trois olives, trois goûts. On commence par laquelle ? 👇\n\nHojiblanca pour la rondeur, Arbosana pour la fraîcheur, Picual pour le caractère.\nLe coffret dégustation, lien en bio.\n\n#hojiblanca #arbosana #picual #degustation #huiledolive",
'J4_post_olive':"Avant l'huile, il y a l'olive 🫒\nCueillie en Andalousie, pressée à froid, pour garder tout son fruité.\n\nLien en bio · Livraison en France\n\n#olives #andalousie #huiledolive #terroir #arbequina",
'J5_carrousel_choisir':"Pour tous les jours, pour les connaisseurs, pour comparer ou pour offrir : il y a forcément une huile pour vous 🫒\n\nGlissez, et dites-nous laquelle 👇\nToute la collection, lien en bio.\n\n#huiledolive #epiceriefine #arbequina #coupage #idéecadeau",
'J5_post_ceramique':"Trop belle pour finir au placard ✨\n\nNotre Arbequina dans sa bouteille en céramique, à poser sur la table… et à verser sans compter.\nLien en bio.\n\n#arbequina #ceramique #decotable #huiledolive #idéecadeau",
'J6_carrousel_accords':"Burrata, salade croquante, légumes mijotés, viande grillée… chaque plat a son huile 🫒\n\nGlissez pour trouver la vôtre, et enregistrez pour votre prochain repas 🔖\nLe coffret dégustation, lien en bio.\n\n#huiledolive #accordsmets #cuisinemaison #burrata #epiceriefine",
'J6_post_eco':"Fruitée, vive, avec des notes d'herbe fraîche 🌿\n\nNotre Arbequina écologique, pour la salade du midi comme pour les légumes du soir.\nLien en bio.\n\n#arbequina #ecologique #huiledolive #salade #cuisinemaison",
'J7_carrousel_erreurs':"On l'a tous fait au moins une fois 🙈\n\nGlissez pour savoir comment garder votre huile d'olive au meilleur de son goût. Enregistrez ce post 🔖\nNos huiles d'Andalousie, lien en bio.\n\n#astucecuisine #huiledolive #conservation #cuisinemaison #epiceriefine",
'J7_post_coupage':"Le caractère de la Picual, la douceur de l'Arbequina : réunies dans une seule bouteille 🫒\n\nRonde, équilibrée, parfaite au quotidien.\nLien en bio.\n\n#coupage #picual #arbequina #huiledolive #andalousie",
}
M=json.load(open('cal3/manifest.json'))
import datetime
start=datetime.date(2026,10,7)
plan=[]
for name,n,H in M:
    d=int(name[1]); date=start+datetime.timedelta(days=d-1)
    kind='story' if '_story_' in name else ('carrousel' if '_carrousel_' in name else 'post')
    t={'story':'09:00','carrousel':'12:30','post':'19:00'}[kind]
    files=[f"{name}{'_'+str(i+1) if n>1 else ''}.jpg" for i in range(n)]
    plan.append({'name':name,'kind':kind,'when':f'{date}T{t}:00','files':files,'caption':C.get(name)})
json.dump(plan,open('/home/user/Jimy/instagram/calendrier-v3/plan.json','w'),ensure_ascii=False,indent=1)
md='# Calendrier Instagram v3 (heure de Paris)\n\nCollaborateurs sur chaque publication : @davico_jairo, @sylvain.davico\n\n'
for p in plan:
    md+=f"## {p['when'].replace('T',' à ')[:-3]} — {p['kind']} — {p['name']}\nImages : {', '.join(p['files'])}\n\n"+(('> '+p['caption'].replace('\n','\n> ')+'\n\n') if p['caption'] else '(story, sans légende)\n\n')
open('/home/user/Jimy/instagram/calendrier-v3/legendes.md','w').write(md)
print(len(plan))
