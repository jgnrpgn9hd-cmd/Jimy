# Dossier VAURE : marque homme sport-chic oversize (modèle : On et Fear of God Essentials), vêtements validés par la coach.
# Méthode du support Scutify (niche → observation → cible → problème → pistes → idée → critères → 4 questions).
# Liens Alibaba et prix vérifiés le 15/11/2026. Coût = $ × 0,86. Version précédente : dossier_v14_dtc.py.

DEMANDE = "Les marques sport-chic (On, Fear of God Essentials) vendent leurs basiques épais et oversize 50 à 170 € en France, et le style « clean » oversize est partout sur Instagram et TikTok."
MODELE = "On et Fear of God Essentials : une gamme courte de basiques unis, épais, petit logo, ensembles assortis ; VAURE fait pareil, avec son propre nom et ses propres modèles, 3 fois moins cher."
CIBLE = "Hommes de 18 à 35 ans qui aiment le look sport-chic propre (oversize, couleurs unies) mais trouvent les grandes marques trop chères."
OBS = "Sur Instagram et TikTok, les hommes montrent des tenues oversize unies (sweat + jogging assortis) ; ils veulent le style On ou Essentials sans payer 130 € le sweat."
PISTES = "T-shirt oversize · t-shirt épais · manches longues · sweat à capuche · sweat zippé · sweat col rond · jogging · casquette · lunettes de soleil · pommeau filtrant."
CONC = "Concurrence : Zara, Uniqlo et les marques Instagram ; VAURE se démarque par l'épaisseur du tissu, le look net (jamais délavé), les ensembles et le prix face à On."
A = "https://www.alibaba.com/product-detail/"


def fiche(court, nom, niche, lien, usd, liv, revente, probleme, idee, eco, wow, prix_france, fournisseur, vigilance, q4,
          poids="Léger, petit colis.", passion="OUI : la mode homme sport-chic, le style, l'image de soi."):
    return dict(
        court=court, nom=nom, niche=niche, lien=lien, usd=usd, liv=liv, revente=revente,
        criteres=("OUI", "OUI", "OUI", "OUI", "OUI", "NON"), modele=MODELE, demande=DEMANDE,
        observation=OBS, cible=CIBLE, probleme=probleme,
        question=f"Comment {niche.split(' · ', 1)[1]}, avec une belle pièce à petit prix ?",
        pistes=PISTES, idee=idee,
        c_probleme="OUI : " + probleme[0].lower() + probleme[1:],
        c_economique=eco, c_passion=passion, c_wow=wow,
        c_unique="Marque VAURE : look net et uni, tissus épais, petit logo ton sur ton, ensembles assortis, 3 fois moins cher que On.",
        c_poids=poids,
        q1="Bien : basique porté toute l'année, sans effet de mode passagère.",
        q2="Oui : on voit tout de suite l'épaisseur, la coupe et la différence de prix.",
        q3="Oui : essayages en vidéo, comparaison avec un t-shirt fin, ensembles du mois, packs.",
        q4=q4, prix_france=prix_france,
        angle_pub="Le vêtement fin et déformé à côté de la pièce VAURE épaisse, puis la tenue complète, en 10 secondes.",
        fournisseur=fournisseur, vigilance=vigilance + " " + CONC)


FICHES = [
 fiche("T-shirt oversize 240 g", "T-shirt oversize 240 g 100 % coton, coupe large épaules tombantes, uni, petit logo VAURE",
       "Mode homme · avoir un t-shirt oversize qui tombe bien",
       A + "Custom-Logo-240g-Cotton-T-Shirt_1601269043057.html", 4.46, 8, 34.90,
       "Les t-shirts larges premier prix sont fins : ils tombent mal, se déforment et font « trop grand » au lieu de faire oversize.",
       "Je veux permettre aux hommes qui aiment le style oversize d'avoir un t-shirt épais qui garde sa forme, au prix d'un t-shirt de grande surface.",
       "OUI : 34,90 € contre 50 à 72 € chez On et Essentials.", "On le pose à côté d'un t-shirt fin : la différence d'épaisseur se voit tout de suite.",
       "On Club-T 50 € ; Essentials 71,99 € (Breuninger).",
       "Quanzhou Haixin Garment Technology (7 ans, NON vérifié) : 4,46 $ (30 à 199), 3,93 $ dès 1 000 ; lien choisi par Jairo.",
       "Fournisseur non vérifié : commander des échantillons ou trouver le même modèle chez un fournisseur vérifié ; choisir des couleurs unies, pas de délavé.",
       "OUI : produit d'appel de la marque, se vend en pack de 3.", poids="Colis de 500 g."),
 fiche("T-shirt épais 250 g", "T-shirt 250 g 100 % coton, col qui ne gondole pas, coupe droite (prendre une taille au-dessus pour l'effet oversize)",
       "Mode homme · avoir un t-shirt qui ne se déforme pas",
       A + "Heavyweight-Tshirt_1600928907355.html", 6.75, 8, 34.90,
       "Les t-shirts classiques deviennent transparents, se déforment et le col gondole après quelques lavages.",
       "Je veux permettre aux hommes de porter un t-shirt épais qui reste net lavage après lavage.",
       "OUI : moitié prix de On.", "Le col reste droit et le tissu ne laisse pas passer la lumière, même blanc.",
       "On Core-T 60 € ; Fincut 28 €.",
       "Fuzhou Xinglan : 6,75 $ (50 à 99), 6,30 $ dès 100, logo dès 50 ; lien choisi par Jairo.",
       "Vérifier la tenue au lavage sur échantillon ; couleurs unies.",
       "OUI : basique qu'on rachète, idéal en pack.", poids="Colis de 500 g."),
 fiche("T-shirt manches longues", "T-shirt manches longues à col boutonné (henley), coton, uni",
       "Mode homme · être habillé sans être en chemise",
       A + "Custom-Long-Sleeve-T-Shirt-Men_60795328307.html", 10.50, 8, 39.90,
       "Entre le t-shirt trop simple et la chemise trop habillée, on ne sait pas quoi mettre en mi-saison.",
       "Je veux permettre aux hommes d'avoir une pièce entre-deux, plus habillée qu'un t-shirt et plus confortable qu'une chemise.",
       "OUI : moitié prix des manches longues de marque.", "Le col boutonné donne un look soigné sans effort.",
       "On Performance Long-T environ 90 € (57,90 € en promotion chez un revendeur) ; Essentials manches longues 79,99 €.",
       "10,50 $ (100 à 499), 8,50 $ dès 500, logo dès 100.",
       "Minimum 100 pièces : commencer avec 2 couleurs ; vérifier le grammage sur échantillon.",
       "OUI : complète la gamme pour l'automne et le printemps.", poids="Colis de 500 g."),
 fiche("Sweat à capuche épais", "Sweat à capuche épais oversize 100 % coton, logo en relief ton sur ton",
       "Mode homme · avoir un sweat qui ne bouloche pas",
       A + "Premium-3d-Puff-Print-Hoodie_1600347472870.html", 9.89, 7, 49.90,
       "Les sweats fins boulochent, se déforment et perdent leur tenue après quelques lavages.",
       "Je veux permettre aux hommes d'avoir un sweat épais et structuré, au look des grandes marques, sans payer 130 €.",
       "OUI : 49,90 € contre 130 à 140 € chez On et Essentials.", "Le logo en relief et l'épaisseur du tissu : on sent la qualité en le prenant en main.",
       "On Club Hoodie 130 € ; Essentials sweat à capuche 139,99 € (Breuninger).",
       "Jiangxi Yi Lingzhi Clothing (7 ans, vérifié) : 9,89 $ (50 à 99), 9,35 $ dès 100 ; lien choisi par Jairo.",
       "Le titre de l'annonce dit « vintage » : commander uniquement en couleurs unies, sans effet délavé.",
       "OUI : pièce phare, se vend en ensemble avec le jogging.", poids="Colis de 750 g à 1 kg."),
 fiche("Sweat zippé uni", "Sweat zippé oversize 100 % coton, uni, petit logo brodé",
       "Mode homme · avoir une veste de tous les jours",
       A + "LOW-MOQ-High-Quality-Blank-Plain_1600947092413.html", 14.37, 7, 49.90,
       "Trop chaud pour un manteau, trop froid en t-shirt : on n'a rien de pratique et de beau à enfiler par-dessus.",
       "Je veux permettre aux hommes d'avoir une veste zippée simple et nette qui va avec tout.",
       "OUI : environ 3 fois moins cher que On.", "La tenue complète zippé + jogging de la même couleur.",
       "On Focus Tech Zip Hoodie 170 € (site belge).",
       "Guangzhou Yanlu Industrial (8 ans) : 14,37 $ (20 à 99), 12,15 $ dès 100.",
       "Coût proche de la limite de 15 € : négocier 12 $ ; vérifier le grammage (320 g annoncé).",
       "OUI : complète l'ensemble, bon panier moyen.", poids="Colis de 750 g."),
 fiche("Sweat col rond 450 g", "Sweat col rond 450 g 100 % coton, coupe oversize, uni",
       "Mode homme · avoir un pull de tous les jours qui garde sa forme",
       A + "2021-100-cotton-heavyweight-450-gsm_1600274136737.html", 11.90, 7, 44.90,
       "Les pulls et sweats bon marché se détendent, rétrécissent ou perdent leur forme.",
       "Je veux permettre aux hommes d'avoir un sweat très épais qui reste structuré, à porter au travail comme le week-end.",
       "OUI : nettement moins cher que les marques sport-chic.", "450 g : un tissu si épais que le sweat tient presque debout.",
       "Sweats col rond On et Essentials vendus plus de 100 € (Breuninger).",
       "11,90 $ (100 à 499), 10,60 $ dès 500, logo personnalisé.",
       "Minimum 100 pièces : commencer avec 2 couleurs ; aucune mention délavée.",
       "OUI : pièce plus habillée que le sweat à capuche.", poids="Colis de 750 g."),
 fiche("Jogging uni coupe ample", "Jogging molleton 100 % coton, coupe ample, uni, bas ourlé propre",
       "Mode homme · porter un jogging qui ne fait pas négligé",
       A + "Custom-french-terry-sweatpants-high-quality_1601254248379.html", 12.35, 7, 49.90,
       "Le jogging fait vite négligé : tissu fin, poches aux genoux, bas qui se déforment.",
       "Je veux permettre aux hommes de porter un jogging confortable qui fait tenue, pas pyjama.",
       "OUI : 49,90 € contre 120 à 140 € chez Essentials et On.", "L'ensemble sweat + jogging de la même couleur : la tenue est faite en 2 pièces.",
       "Essentials jogging 119,99 € (Breuninger) ; On Trek Pants environ 140 € (site belge).",
       "12,35 $ (50 à 499), 10,64 $ dès 500.",
       "Vérifier l'épaisseur et la coupe sur échantillon ; pas de bords bruts ni de délavé.",
       "OUI : moitié de l'ensemble, le produit le plus rentable en pack.", poids="Colis de 750 g."),
 fiche("Casquette légère", "Casquette légère respirante à séchage rapide, logo VAURE brodé ton sur ton",
       "Accessoires homme · se protéger du soleil avec style",
       A + "Custom-Logo-Quick-Dry-Running-Cap_1600612754499.html", 2.98, 9, 29.90,
       "Les casquettes en coton épais tiennent chaud et marquent la sueur.",
       "Je veux permettre aux hommes de porter une casquette légère qui reste nette, en ville comme au sport.",
       "OUI : petit prix d'achat, complément facile.", "Ultra légère : on l'oublie sur la tête.",
       "Casquettes Ciele et On vendues bien plus cher en magasin de sport ; Decathlon dès quelques euros.",
       "Kimtex : 2,98 $ (100 à 499), 2,28 $ dès 500, broderie possible.",
       "Minimum 100 pièces ; choisir une couleur unie qui va avec la gamme.",
       "OUI : complément de panier pour atteindre la livraison offerte."),
 fiche("Lunettes de soleil UV400", "Lunettes de soleil enveloppantes, verres miroir vert, protection UV400, logo VAURE sur la branche",
       "Accessoires homme · ne plus être ébloui",
       "https://www.alibaba.com/product-detail/Sunglasses_1601961719548.html", 0.87, 9, 34.90,
       "Le soleil et les reflets éblouissent en voiture, en ville et au sport.",
       "Je veux permettre aux hommes de voir clair au soleil avec des lunettes au look sport-chic.",
       "OUI : meilleure marge de la gamme, moins chères que les marques.", "Les verres miroir verts et le logo VAURE gravé : un vrai look de marque.",
       "Decathlon 29,99 € (44,99 € photochromiques) ; Cébé 59,76 €.",
       "Lien choisi par Jairo : 0,87 $ (2 minimum, en stock) ; fournisseur de secours iRun polarisé : 7,48 $ (500 minimum, logo dès 100) (" + A + "IRun-Custom-Cricket-Running-Sunglasses-Glasses_1601430271723.html).",
       "Fournisseur jeune et non vérifié : commander 2 échantillons ; exiger le marquage CE et la norme EN ISO 12312-1 avant de vendre ; demander une version polarisée.",
       "OUI : premier produit à lancer (petit stock, pas de tailles, très léger).",
       passion="OUI : le style, la conduite, le sport."),
 fiche("Pommeau de douche filtrant", "Pommeau de douche à 15 étages de filtration, design premium, haute pression",
       "Salle de bain · avoir une eau plus douce sous la douche",
       "https://www.alibaba.com/product-detail/Shower-Filter_1601697241736.html", 7.85, 8, 39.90,
       "L'eau calcaire et chlorée fait tirer la peau et ternit les cheveux.",
       "Je veux permettre à ceux qui ont une eau calcaire de prendre une douche plus douce pour la peau et les cheveux, sans travaux.",
       "OUI : moitié prix des marques qui font de la pub (69,95 à 81,95 €).", "Le filtre neuf blanc puis tout jauni après un mois : la preuve en vidéo.",
       "StoneStream 69,95 €, MineralStream 81,95 € ; pommeaux basiques dès 13,99 €.",
       "Shenzhen Calux Purification Technology (fabricant vérifié, 14 ans) : 7,85 à 20 $ selon le modèle, minimum 2 lots.",
       "Confirmer que le modèle à 7,85 $ est le pommeau complet ; demander un test de filtration (SGS). Aucune promesse médicale.",
       "OUI : énorme marché, preuve visuelle très forte, cartouches de rechange à revendre.",
       poids="Colis d'environ 500 g.", passion="OUI : le soin de soi, la routine du matin."),
]
FICHES.insert(0, FICHES.pop())  # pommeau en 1
FICHES.insert(1, FICHES.pop())  # lunettes en 2
FICHES[0]["modele"] = "Jolie (États-Unis) : le pommeau filtrant devenu une marque à succès."
FICHES[0]["c_unique"] = "Design premium, preuve en vidéo du filtre usé, cartouches de rechange en abonnement."
FICHES[0]["q1"] = "Bien : l'eau calcaire touche presque toute la France, le problème dure toute l'année."
FICHES[0]["angle_pub"] = "Le filtre neuf à côté du filtre jauni après un mois, en 10 secondes."

for _f in FICHES:
    _f["cout"] = round(_f["usd"] * 0.86, 2)
    _f["marge"] = round(_f["revente"] - _f["cout"], 2)

SOURCES = [
 ("On, vêtements homme (France)", "https://www.on.com/fr-fr/shop/mens/apparel"),
 ("On, running homme (Belgique)", "https://www.on.com/fr-be/shop/mens/apparel/running"),
 ("Breuninger, Fear of God Essentials", "https://www.breuninger.com/be/fr/marques/essentials-fear-of-god/"),
 ("Fincut, t-shirts et basiques homme", "https://fincutmen.com"),
 ("Decathlon, lunettes de sport", "https://www.decathlon.fr/boutiques/accessoires-decathlon-coach-course-a-pied-accessoires"),
 ("Snowleader, casquettes Ciele", "https://www.snowleader.com/gocapsc-field-capitalrc-light-grey-CIEL00274.html"),
 ("StoneStream, pommeau filtrant", "https://fr.stone-stream.com/products/pomme-de-douche-ecopower-noire-avec-kit-de-filtration-deau-dure"),
 ("MineralStream, kit de douche", "https://fr.mineralstream.co/products/mineralstream%E2%84%A2-noir-vitamine-c-kit-de-douche-complet"),
 ("La Poste, tarifs Colissimo 2026", "https://www.laposte.fr/professionnel/tarif-colissimo"),
]
