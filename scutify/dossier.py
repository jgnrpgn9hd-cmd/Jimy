# Dossier RUNNING : 10 équipements de course à pied, chacun règle un problème précis du coureur. Pas de vêtements à tailles.
# Méthode du support Scutify (niche → observation → cible → problème → pistes → idée → critères → 4 questions).
# Liens Alibaba et prix vérifiés le 15/11/2026. Coût = $ × 0,86. Versions précédentes : dossier_v8_maison.py, dossier_v7_organisation.py, dossier_v6_pilates.py.

DEMANDE = "Des millions de Français courent ; les courses officielles affichent complet ; les marques running (Salomon, Ciele, FlipBelt, Kiprun) vendent leurs accessoires 20 à 180 €."
MODELE = "Kosso et Hustle Wear (une cible, plusieurs produits qui se répondent, des packs) ; FlipBelt et Ciele prouvent qu'un simple accessoire running bien pensé se vend 30 à 45 €."
CIBLE = "Femmes et hommes de 20 à 45 ans qui s'entraînent plusieurs fois par semaine (course, Pilates, renforcement) et prennent soin de leur récupération."
CONC = "Concurrence : Decathlon (Kiprun) vend des versions basiques moins chères ; la marque se démarque par le design, la communauté (club, défis) et les packs."
PISTES = "Pommeau de douche filtrant · ceinture de running · lunettes · gilet d'hydratation · casquette · flasques · sac à compartiment chaussures · gobelet isotherme · mini pistolet de massage · kit récup · aimants pour dossard."


def fiche(court, nom, usage, lien, usd, liv, revente, probleme, idee, eco, wow, prix_france, fournisseur, vigilance, q4, poids="Léger, petit colis."):
    return dict(
        court=court, nom=nom, niche=f"Sport et récupération · {usage}", lien=lien, usd=usd, liv=liv, revente=revente,
        criteres=("OUI", "OUI", "OUI", "OUI", "OUI", "NON"), modele=MODELE, demande=DEMANDE,
        observation="Les coureurs partagent leurs sorties et leurs courses sur Instagram et Strava ; ils achètent volontiers l'accessoire qui règle le petit problème qui gâche leur sortie.",
        cible=CIBLE, probleme=probleme,
        question=f"Comment {usage.lower()} simplement, avec un bel objet ?",
        pistes=PISTES, idee=idee,
        c_probleme="OUI : " + probleme[0].lower() + probleme[1:],
        c_economique=eco, c_passion="OUI : la course à pied, les défis, la performance.", c_wow=wow,
        c_unique="Design sobre et premium aux couleurs de la marque, communauté de coureurs (défis, club), packs.",
        c_poids=poids,
        q1="Bien : vrai problème quotidien, produit léger, se garde toute l'année.",
        q2="Oui : on comprend l'usage en voyant un coureur l'utiliser.",
        q3="Oui : vidéos de sorties et de courses, défis du mois, packs avant une course.",
        q4=q4, prix_france=prix_france,
        angle_pub="Le petit problème en pleine course (téléphone qui saute, soif, soleil), puis la solution, en 10 secondes.",
        fournisseur=fournisseur, vigilance=vigilance + " " + CONC)


A = "https://www.alibaba.com/product-detail/"
FICHES = [
 fiche("Pommeau de douche filtrant", "Pommeau de douche à 15 étages de filtration, design premium, haute pression", "avoir une eau plus douce sous la douche",
       "https://www.alibaba.com/product-detail/Shower-Filter_1601697241736.html", 7.85, 8, 39.90,
       "Après chaque entraînement on se douche, mais l'eau calcaire et chlorée fait tirer la peau et ternit les cheveux.",
       "Je veux permettre aux sportifs qui se douchent souvent de prendre une douche plus douce pour la peau et les cheveux, sans travaux.",
       "OUI : moitié prix des marques qui font de la pub (69,95 à 81,95 €).", "Le filtre neuf blanc puis tout jauni après un mois : la preuve en vidéo.",
       "StoneStream 69,95 €, MineralStream 81,95 € ; pommeaux basiques dès 13,99 €.", "Shenzhen Calux Purification Technology (fabricant vérifié, 14 ans, spécialiste de la filtration) : 7,85 à 20 $ selon le modèle, minimum 2 lots ; ancien fournisseur de secours : 5,50 $ (" + A + "High-Pressure-Water-Filter-Shower-Head_1600995143105.html).",
       "Confirmer que le modèle à 7,85 $ est le pommeau complet (au-delà de 17 $ le coût dépasse 15 €) ; demander le prix avec logo pour 100 pièces, le prix des cartouches et un test de filtration (SGS). Aucune promesse médicale.",
       "OUI : énorme marché, preuve visuelle très forte, cartouches de rechange à revendre.", poids="Colis d'environ 500 g."),
 fiche("Lunettes de running polarisées", "Lunettes de sport enveloppantes, verres polarisés UV400, légères, qui ne glissent pas", "courir sans être ébloui",
       A + "IRun-Custom-Cricket-Running-Sunglasses-Glasses_1601430271723.html", 7.48, 9, 34.90,
       "Le soleil et les reflets éblouissent, et les lunettes classiques glissent avec la sueur.",
       "Je veux permettre aux coureurs de courir au soleil sans plisser les yeux, avec des lunettes légères qui tiennent.",
       "OUI : moins chères que les marques, mêmes usages.", "Le look « athlète » des photos de course.",
       "Decathlon 29,99 € (44,99 € photochromiques) ; Cébé 59,76 €.", "7,48 $ (500 minimum), logo dès 100.",
       "Minimum de 500 pièces : à négocier avec le sourcing Scutify ; vérifier la norme CE et la catégorie de filtre.",
       "OUI : accessoire très visible en photo, marge correcte."),
]

import dossier_v8_maison as _mai, dossier_v7_organisation as _org, dossier_v9_running as _run, dossier_v6_pilates as _pil
_M = {f["court"]: dict(f) for f in _mai.FICHES}
_O = {f["court"]: dict(f) for f in _org.FICHES}
_R = {f["court"]: dict(f) for f in _run.FICHES}
_P = {f["court"]: dict(f) for f in _pil.FICHES}
_DTC = dict(
    demande="Produit phare d'une des marques e-commerce qui vendent le plus au monde (classements Brandsearch, TrendTrack, Shopify 2026).",
    observation="Les marques en ligne qui réussissent le mieux vendent un seul produit phare qui règle un problème clair, avec une vidéo de démonstration.",
    cible="Femmes et hommes de 20 à 45 ans, actifs, qui achètent en ligne sur coup de cœur quand ils voient un problème réglé en vidéo.",
    pistes="Bloqueur d'applis NFC (Brick) · portefeuille métal (Ridge) · kit WC lavant (Tushy) · gobelet isotherme (Stanley) · bouchons d'oreilles (Loop) · mini pistolet de massage (Theragun) · bracelets lestés (Bala) · sacoche (Bellroy).",
    c_unique="Même usage que la marque phare, à moitié prix, avec ta marque, ton design et ta communauté.",
    q3="Oui : la vidéo de démonstration de la marque phare marche déjà, il suffit de la refaire à sa façon.",
    angle_pub="Le problème en 3 secondes, puis la démonstration du produit, comme les pubs de la marque phare.")
def _phare(f, univers, marque, prix_marque):
    f = dict(f); f.update(_DTC)
    f["niche"] = univers + " · " + f["niche"].split(" · ", 1)[1]
    f["modele"] = marque + " : la marque qui a fait de ce produit un succès mondial."
    f["prix_france"] = prix_marque + " " + f["prix_france"]
    return f
FICHES[0]["niche"] = "Salle de bain · " + FICHES[0]["niche"].split(" · ", 1)[1]
FICHES[0]["modele"] = "Jolie (États-Unis) : le pommeau filtrant devenu une marque à succès."
FICHES[1]["niche"] = "Sport · " + FICHES[1]["niche"].split(" · ", 1)[1]
FICHES[1]["modele"] = "Goodr : une marque qui vend presque uniquement des lunettes de sport à 25 $."
_A = "https://www.alibaba.com/product-detail/"
_brick = fiche("Bloqueur d'applis NFC", "Carte NFC noire mate à poser à la maison : on la touche avec son téléphone pour bloquer les applis qui font perdre du temps, on la retouche pour les débloquer", "décrocher de son téléphone",
   _A + "Black-pvc-card-nfc-NTAG-215_62022555600.html", 0.35, 9, 34.90,
   "On passe des heures sur les réseaux sociaux sans le vouloir ; les limites de temps dans le téléphone se contournent en un clic.",
   "Je veux permettre à ceux qui veulent reprendre le contrôle de leur temps de bloquer leurs applis d'un simple geste, avec un objet qui reste à la maison.",
   "OUI : moins cher que Brick (55 à 59 $), aucun abonnement.", "On touche la carte : Instagram et TikTok disparaissent. Pour les rouvrir, il faut se lever et retoucher la carte.",
   "Brick 55 à 59 $ (environ 15,9 millions de dollars de ventes par mois selon Brandsearch).", "Carte NFC noire mate NTAG215 : 0,15 à 0,35 $ (100 minimum), logo dès 100 ; prévoir environ 1 € d'étui.",
   "Fonctionne avec une appli gratuite (Foqos sur iPhone, Raccourcis) : vérifier et tester la mise en place sur iPhone et Android, et écrire un guide simple. Aucune plateforme à gérer.",
   "OUI : le produit phare qui grandit le plus vite au monde selon Brandsearch, problème énorme (addiction au téléphone).")
FICHES += [
 _phare(_brick, "Bien-être numérique", "Brick", ""),
 _phare(fiche("Portefeuille métal minimaliste", "Porte-cartes en aluminium anti-RFID avec pince à billets, ultra-fin", "avoir un portefeuille fin",
   _A + "Minimalist-Men-Wallet-Aluminum-Metal-Slim_1601391026836.html", 5.80, 9, 39.90,
   "Le portefeuille en cuir devient épais, déforme la poche, et les cartes sans contact peuvent être piratées.",
   "Je veux permettre aux hommes et aux femmes qui en ont assez d'un gros portefeuille de tout garder dans un porte-cartes fin et solide.",
   "OUI : un tiers du prix de Ridge.", "Le gros portefeuille à côté du porte-cartes de 8 mm ; les cartes qui sortent d'un geste.",
   "", "5,80 $ (50 à 499), logo personnalisé, 70 g.",
   "Vérifier la protection RFID avant de l'annoncer ; ne pas copier le design ni le nom de Ridge.",
   "OUI : Ridge est la plus grosse marque e-commerce de sa catégorie (16,9 millions de dollars par mois selon Brandsearch)."),
   "Accessoires homme", "Ridge", "Ridge 65 à 149 € en Europe."),
 _phare(_M["Kit WC lavant sans électricité"], "Salle de bain", "Tushy", "Tushy aux États-Unis ;"),
 _phare(_R["Gobelet isotherme 1,2 L"], "Cuisine", "Stanley", ""),
 _phare(fiche("Bouchons d'oreilles concert", "2 paires de bouchons d'oreilles en silicone qui baissent le volume sans couper le son, étui en métal", "protéger ses oreilles sans s'isoler",
   "https://www.alibaba.com/product-introduction/Custom-logo-2-Pairs-tapones-auditivos_1600979485174.html", 4.50, 9, 29.90,
   "Concerts, bars et open spaces trop bruyants : oreilles qui sifflent ou impossible de se concentrer.",
   "Je veux permettre à ceux qui sortent ou travaillent dans le bruit de protéger leurs oreilles avec des bouchons discrets et jolis.",
   "OUI : moins cher que Loop (39,95 €).", "Le bijou dans l'oreille, et le son du concert encore clair mais moins fort.",
   "Loop Engage 2 Plus 39,95 €.", "2 paires + étui : 4,50 $ (100 à 999), logo dès 500.",
   "Indiquer la réduction de bruit testée (norme EN 352) ; aucune promesse médicale.",
   "OUI : Loop est devenue une marque mondiale avec ce seul produit."),
   "Bien-être", "Loop", ""),
 _phare(_R["Mini pistolet de massage"], "Récupération", "Theragun", ""),
 _phare(_P["Bracelets lestés pastel"], "Bien-être", "Bala", ""),
 _phare(_O["Sacoche en cuir homme"], "Mode homme", "Bellroy", "Bellroy, sacoches 69 à 99 € ;"),
]

for _f in FICHES:
    _f["cout"] = round(_f["usd"] * 0.86, 2)
    _f["marge"] = round(_f["revente"] - _f["cout"], 2)

SOURCES = [
 ("i-run, FlipBelt", "https://www.i-run.fr/accessoires/Ceinture-porte-dossard_c1080/FlipBelt_m240/FlipBelt-FlipBelt_FlipBelt_fiche_36841.html"),
 ("i-run, aimants porte-dossard", "https://www.i-run.fr/accessoires/Ceinture-porte-dossard_c1080/i-run-fr_m114/i-run-fr-Aimants-Accroche-Dossards_i-run-fr_fiche_60664.html"),
 ("Decathlon, accessoires running et lunettes", "https://www.decathlon.fr/boutiques/accessoires-decathlon-coach-course-a-pied-accessoires"),
 ("Alltricks, flasque Salomon 500 ml", "https://www.alltricks.fr/F-11906-bidons/P-2932843-flasque_souple_salomon_soft_flask_500ml_ultra_42_bleu"),
 ("Alltricks, gilet Kiprun Race 900", "https://www.alltricks.fr/F-41498-bagagerie/P-3208797-gilet_d_hydratation_kiprun_race_900_3l_vert"),
 ("Sports Shoes, Salomon S/LAB Sense 6", "https://www.sportsshoes.com/fr-fr/product/sal7011/s/lab-sense-6-gilet-de-running-(avec-flasques)---ss26"),
 ("Snowleader, casquettes Ciele", "https://www.snowleader.com/gocapsc-field-capitalrc-light-grey-CIEL00274.html"),
 ("Pearl, balles de massage", "https://www.pearl.fr/article/NX8884/double-balle-de-massage-et-dexercice-o-8-cm"),
 ("StoneStream, pommeau filtrant", "https://fr.stone-stream.com/products/pomme-de-douche-ecopower-noire-avec-kit-de-filtration-deau-dure"),
 ("MineralStream, kit de douche", "https://fr.mineralstream.co/products/mineralstream%E2%84%A2-noir-vitamine-c-kit-de-douche-complet"),
 ("La Poste, tarifs Colissimo 2026", "https://www.laposte.fr/professionnel/tarif-colissimo"),
]
SOURCES += [
 ("Brandsearch, 25 Shopify les plus rentables 2026", "https://brandsearch.co/blog/top-shopify-stores-by-revenue"),
 ("Brandsearch, 25 marques DTC qui grandissent le plus vite", "https://brandsearch.co/blog/fastest-growing-dtc-brands"),
 ("Revue de Brick (bloqueur d'applis NFC)", "https://trailandkale.com/brick-app-blocker-review/"),
 ("Alternatives à Brick (appli gratuite Foqos)", "https://habitdoom.com/blog/brick-alternatives-iphone"),
 ("Ridge, boutique européenne", "https://eu.ridge.com/products/titanium-stonewashed"),
 ("Loop, Engage 2 Plus", "https://www.loopearplugs.com/fr-be/products/engage-plus"),
 ("Sitebuilderreport, boutiques à un seul produit", "https://www.sitebuilderreport.com/inspiration/one-product-shopify-stores"),
]
