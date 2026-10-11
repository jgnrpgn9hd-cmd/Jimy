exec(open('cal4_base.py').read())
import json
PH.update({'bottle':('bottle.jpg','linear-gradient(#D6C7B2,#E3D4BE 55%,#ECE0CD)'),'bottle_white':('bottle_white.jpg','linear-gradient(#E0DDCC,#F3F0E1 60%,#FBF8EA)'),
 'mist':('mist.jpg','#555'),'aerial':('aerial.jpg','#111'),'open':('open.jpg','#DDD'),'bio':('bio.jpg','#D2CECD'),'box_bottle':('box_bottle.jpg','#FFFFFF'),'tins':('tins.jpg','#C9D3C2')})
B.update({'bottle':(150,330,780,1040,'50% 50%'),'bottle_white':(40,480,1000,740,'50% 56%'),'box_bottle':(240,360,600,841,'50% 50%')})
def quote(i,n,series,k,t,sig,dark=False):
    fg='#F5EFE4' if dark else '#1F241C'; ac='#D8C08F' if dark else '#A88B57'
    s=chrome(i,n,series,dark=dark)
    s+=f'<div class="T" style="position:absolute;left:70px;top:230px;font-size:260px;color:{ac};line-height:.8">“</div>'
    s+=f'<div class="T" style="position:absolute;left:80px;right:90px;top:430px;font-size:104px;color:{fg}">{t}</div>'
    s+=f'<div class="k" style="position:absolute;left:80px;top:1080px;color:{ac}">{sig}</div>'
    return ('background:'+('#4B523C' if dark else '#F5EFE4'),s)
def fact(i,n,series,k,big,unit,t,d,dark=True):
    fg='#F5EFE4' if dark else '#1F241C'; ac='#D8C08F' if dark else '#A88B57'; bc='#E6DDCE' if dark else '#4B523C'
    s=chrome(i,n,series,dark=dark)
    s+=f'<div class="k" style="position:absolute;left:80px;top:220px;color:{ac}">{k}</div>'
    s+=f'<div class="T" style="position:absolute;left:66px;top:270px;font-size:420px;color:{ac}">{big}<span style="font-size:120px;margin-left:20px">{unit}</span></div>'
    s+=f'<div class="T" style="position:absolute;left:78px;right:90px;top:720px;font-size:84px;color:{fg}">{t}</div>'
    s+=f'<div class="p" style="position:absolute;left:80px;right:170px;top:{720+84*(t.count("<br>")+1)+50}px;color:{bc}">{d}</div>'
    return ('background:'+('#1F241C' if dark else '#F5EFE4'),s)
def listing(i,n,series,k,title,rows,dark=False,lead=None):
    fg='#F5EFE4' if dark else '#1F241C'; ac='#D8C08F' if dark else '#A88B57'; bc='#E6DDCE' if dark else '#4B523C'; hc='rgba(245,239,228,.3)' if dark else 'rgba(31,36,28,.18)'
    s=chrome(i,n,series,dark=dark)+f'<div class="k" style="position:absolute;left:80px;top:220px;color:{ac}">{k}</div><div class="T" style="position:absolute;left:76px;right:80px;top:270px;font-size:110px;color:{fg}">{title}</div>'
    y0=270+110*(title.count('<br>')+1)+80; step=min(160,(1150-y0)//max(1,len(rows)))
    for q,(a,b) in enumerate(rows):
        y=y0+q*step
        s+=f'<div style="position:absolute;left:80px;right:80px;top:{y}px;height:1px;background:{hc}"></div>'
        if lead=='num': s+=f'<div class="T" style="position:absolute;left:80px;top:{y+26}px;font-size:70px;color:{ac}">{q+1}</div><div class="p" style="position:absolute;left:170px;right:80px;top:{y+34}px;font-size:34px;color:{fg}">{a}</div>'
        else: s+=f'<div class="T" style="position:absolute;left:80px;top:{y+30}px;font-size:58px;color:{fg}">{a}</div><div class="p" style="position:absolute;left:470px;right:80px;top:{y+44}px;font-size:31px;color:{bc}">{b}</div>'
    return ('background:'+('#4B523C' if dark else 'linear-gradient(#EFE1CD,#F4EADB)'),s)
def ask(i,n,series,k,t,opts):
    s=chrome(i,n,series)+f'<div class="k" style="position:absolute;left:80px;top:220px;color:#A88B57">{k}</div><div class="T" style="position:absolute;left:76px;right:80px;top:270px;font-size:110px">{t}</div>'
    y0=270+110*(t.count('<br>')+1)+70
    for q,o in enumerate(opts):
        y=y0+q*138
        s+=f'<div style="position:absolute;left:80px;right:80px;top:{y}px;height:108px;border:1.5px solid rgba(31,36,28,.25);border-radius:60px"></div><div class="T" style="position:absolute;left:120px;top:{y+20}px;font-size:60px;color:#A88B57">{"ABCD"[q]}</div><div class="p" style="position:absolute;left:200px;top:{y+30}px;font-size:36px">{o}</div>'
    return ('background:#F5EFE4',s)
S5='Le matin'; S6='La recette'; S7='Le savoir'; S8="L'Andalousie"
# ---------- LUNDI 12
page('L1_matin_oliviers',[photo_dark('mist',1,1,S8,'Bonjour','Le jour se lève<br>sur les oliviers.',op='50% 60%')])
T3=[('Tomate & fleur de sel','Le classique andalou : tomate râpée, sel, un filet généreux.'),('Avocat & citron','Écrasé à la fourchette, zeste de citron, huile en finition.'),('Fromage frais & herbes','Ciboulette, poivre, et l\'huile qui fait briller.')]
sl=[photo_dark('olives',1,5,S5,'3 tartines','Bien commencer<br>la journée.',op='50% 60%')]
for q,(a,b) in enumerate(T3): sl.append(typo(q+2,5,S5,f'Tartine n°{q+1}',a.replace(' & ','<br>& '),b,dark=q%2==1,num=f'0{q+1}'))
sl.append(P('arbequina',5,5,S5,'Arbequina · Première récolte','Le secret ?<br>Une vraie huile.',sub='Lien en bio · Livraison en France'))
page('L2_carrousel_tartines',sl)
page('L3_post_ceramique',[P('ceramic',1,1,S3,'Arbequina','Belle sur la table,<br>bonne dans l\'assiette.')])
# ---------- MARDI 13
page('M1_fact_olives',[fact(1,1,S7,'Le saviez-vous ?','5','kg','d\'olives pour<br>un litre d\'huile.','Environ 5 à 6 kg selon la variété et la récolte. Récoltées tôt, les olives donnent moins d\'huile, mais plus de goût.')])
page('M3_post_premiere',[P('bottle_white',1,1,S3,'Arbequina · Première récolte','Récoltée tôt.<br>Pressée à froid.')])
# ---------- MERCREDI 14
page('W1_matin_aerien',[photo_dark('aerial',1,1,S8,'Vu du ciel','Des milliers<br>d\'oliviers,<br>en rangs serrés.',op='50% 60%')])
VE=[('Rien que l\'olive','Extraite uniquement par des procédés mécaniques. Aucun solvant, aucun raffinage.'),('Moins de 0,8 % d\'acidité','Le seuil de la catégorie la plus exigeante.'),('Goûtée par un jury','Des dégustateurs vérifient le fruité et l\'absence de défaut.'),('Extraite à froid','Sous 27 °C, pour garder les arômes du fruit.')]
sl=[photo_dark('open',1,6,S7,'Décodage','« Vierge extra »,<br>ça veut dire quoi ?',op='50% 40%')]
for q,(a,b) in enumerate(VE): sl.append(typo(q+2,6,S7,f'Critère {q+1}',a.replace(' d\'',' <br>d\'') if 'acidité' in a else a,b,dark=q%2==1,num=f'0{q+1}'))
sl.append(P('coupage',6,6,S7,'Toutes nos huiles','Vierge extra.<br>Sans exception.',sub='Lien en bio · Livraison en France'))
page('W2_carrousel_vierge',sl)
page('W3_post_trio',[P('trio',1,1,S3,'Le coffret dégustation','Ronde. Fruitée.<br>Robuste.')])
page('W4_recette_legumes',[listing(1,1,S6,'Ce soir · 40 minutes','Les légumes<br>rôtis.',[('Couper courgettes, poivrons et oignon rouge en gros morceaux.',''),('Arroser généreusement d\'huile d\'olive, saler, poivrer.',''),('Four à 200 °C pendant 35 minutes.',''),('Un dernier filet d\'huile à cru avant de servir.','')],lead='num')])
# ---------- JEUDI 15
page('J1_citation_pain',[quote(1,1,S7,'','Une bonne huile,<br>ça se goûte<br>sur du pain.','Le conseil de la maison',dark=True)])
CU=[('Poêler','Feu moyen, l\'huile frémit sans fumer. Parfait pour légumes et poissons.'),('Rôtir','Au four, elle dore et caramélise sans brûler.'),('Mijoter','Dans les plats du soir, elle apporte rondeur et profondeur.'),('Finir à cru','Un trait au moment de servir : c\'est là que le goût explose.')]
sl=[P('coupage',1,6,S6,'4 façons','Oui, on cuisine<br>à l\'huile d\'olive.')]
for q,(a,b) in enumerate(CU): sl.append(typo(q+2,6,S6,f'Façon {q+1}',a+'.',b,dark=q%2==1,num=f'0{q+1}'))
sl.append(P('eco',6,6,S6,'Arbequina écologique · 1 L','Le grand format<br>pour cuisiner.',sub='Lien en bio · Livraison en France'))
page('J2_carrousel_cuisiner',sl)
page('J3_post_ouverture',[typo(1,1,S3,'Le premier geste','On ouvre,<br>et ça sent<br>l\'herbe coupée.','Le signe d\'une huile vraiment fraîche, récoltée tôt.',dark=True)])
page('J4_apero',[photo_dark('olives',1,1,S8,'L\'apéro andalou','Du pain,<br>des olives,<br>une bonne huile.',op='50% 60%')])
# ---------- VENDREDI 16
page('V1_matin_bottle',[P('bottle',1,1,S5,'Le premier geste du matin','Un filet<br>sur le pain grillé.')])
BU=[('La burrata','Sortie du frigo 20 minutes avant'),('Les tomates','Cerises, coupées en deux'),('L\'huile','Arbequina, fruitée et douce'),('La finition','Fleur de sel, poivre, basilic')]
STB=['Déposez la burrata au centre d\'une belle assiette.','Entourez-la de tomates cerises coupées en deux.','Arrosez généreusement d\'huile d\'olive.','Fleur de sel, poivre, quelques feuilles de basilic. Servez avec du pain.']
rec='<div style="position:absolute;inset:0;background:#4B523C"></div>'+chrome(3,4,S6,dark=True)+'<div class="k" style="position:absolute;left:80px;top:220px;color:#D8C08F">5 minutes</div><div class="T" style="position:absolute;left:76px;top:270px;font-size:120px;color:#F5EFE4">La recette.</div>'
for q,t in enumerate(STB):
    y=500+q*165
    rec+=f'<div class="T" style="position:absolute;left:80px;top:{y}px;font-size:84px;color:#D8C08F">{q+1}</div><div class="p" style="position:absolute;left:190px;right:90px;top:{y+14}px;font-size:36px;color:#F5EFE4">{t}</div>'
page('V2_carrousel_burrata',[P('ceramic',1,4,S6,'5 minutes · 4 ingrédients','La burrata<br>parfaite.'),listing(2,4,S6,'Pour 2 personnes','Les ingrédients.',BU),('',rec),P('bottle_white',4,4,S6,'Notre conseil','Avec l\'Arbequina<br>première récolte.',sub='Lien en bio')])
page('V3_question',[ask(1,1,'Et vous ?','Dites-nous en commentaire','Votre plat préféré<br>avec un filet d\'huile ?',['Une tartine au petit-déj','Une salade bien fraîche','Des légumes rôtis','Un poisson grillé'])])
page('V4_post_etui',[P('box_bottle',1,1,S3,'Coupage · Picual & Arbequina','Dans son étui,<br>prête à offrir.')])
# ---------- SAMEDI 17
page('S1_matin_marche',[typo(1,1,S5,'Le samedi','Marché,<br>bon pain,<br>bonne huile.','Le programme parfait pour un week-end gourmand.',dark=True)])
SA=[('Courge rôtie & feta','Courge en cubes rôtie, feta émiettée, graines de courge, huile en finition.'),('Lentilles & herbes','Lentilles tièdes, échalote, persil, un filet d\'huile et du citron.'),('Pomme & noix','Jeunes pousses, pomme en lamelles, noix, une vinaigrette à l\'huile d\'olive.')]
sl=[photo_dark('mist',1,5,S6,'3 idées de saison','Les salades<br>d\'automne.',op='50% 55%')]
for q,(a,b) in enumerate(SA): sl.append(typo(q+2,5,S6,f'Salade n°{q+1}',a.replace(' & ','<br>& '),b,dark=q%2==1,num=f'0{q+1}'))
sl.append(P('eco',5,5,S6,'Arbequina écologique','Fruitée, vive,<br>pour toutes vos salades.',sub='Lien en bio · Livraison en France'))
page('S2_carrousel_salades',sl)
page('S3_post_ceramique',[photo_dark('tins',1,1,S8,'Depuis l\'Andalousie','Directement<br>du producteur<br>à votre table.',op='50% 50%')])
page('S4_livraison',[typo(1,1,'Nouveau','Bonne nouvelle','La livraison<br>offerte<br>dès 80 €.','Expédiée directement d\'Andalousie en Chronopost, 7 à 10 jours ouvrés.',num=None)])
# ---------- DIMANCHE 18
page('D1_matin_dimanche',[photo_dark('aerial',1,1,S8,'Dimanche','Prendre<br>le temps.',op='30% 80%')])
PO=[('Le poulet','1 poulet fermier'),('Le citron','2 citrons, en quartiers'),('L\'ail & le thym','6 gousses, quelques branches'),('L\'huile','4 cuillères à soupe')]
STP=['Badigeonnez le poulet d\'huile d\'olive, salez, poivrez.','Glissez citron, ail et thym dans le plat tout autour.','Four à 200 °C pendant 1 h 15, en arrosant de temps en temps.','Servez avec le jus et un trait d\'huile à cru.']
rec='<div style="position:absolute;inset:0;background:#4B523C"></div>'+chrome(3,4,S6,dark=True)+'<div class="k" style="position:absolute;left:80px;top:220px;color:#D8C08F">1 h 30</div><div class="T" style="position:absolute;left:76px;top:270px;font-size:120px;color:#F5EFE4">La recette.</div>'
for q,t in enumerate(STP):
    y=500+q*165
    rec+=f'<div class="T" style="position:absolute;left:80px;top:{y}px;font-size:84px;color:#D8C08F">{q+1}</div><div class="p" style="position:absolute;left:190px;right:90px;top:{y+14}px;font-size:36px;color:#F5EFE4">{t}</div>'
page('D2_carrousel_poulet',[P('coupage',1,4,S6,'Le déjeuner du dimanche','Poulet rôti,<br>citron & huile.'),listing(2,4,S6,'Pour 4 personnes','Les ingrédients.',PO),('',rec),P('box_bottle',4,4,S6,'Notre conseil','Avec le Coupage,<br>rond et équilibré.',sub='Lien en bio')])
page('D3_post_bio',[photo_dark('bio',1,1,S3,'Arbequina · Écologique','Cultivée<br>dans le respect<br>de la terre.',op='50% 50%')])
page('D4_sondage',[ask(1,1,'Votre avis','Répondez en commentaire','Votre huile<br>de la semaine ?',['Arbequina première récolte','Le Coupage','Le coffret dégustation','L\'Arbequina écologique'])])
json.dump(M,open('cal4/manifest.json','w'))
print(len(M))
