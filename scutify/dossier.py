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
FICHES += [
 fiche("Gilet d'hydratation", "Gilet léger ajustable avec flasque souple 500 ml à l'avant et poche pour le téléphone", "boire sur les longues sorties",
       A + "Trail-Running-Vest-Hydration-Vest-Adjustable_1601644236868.html", 9.99, 8, 44.90,
       "Soif et coup de fatigue sur les longues sorties ; mains prises par la bouteille.",
       "Je veux permettre aux coureurs qui préparent un semi ou un trail de boire sans s'arrêter, les mains libres.",
       "OUI : deux fois moins cher que Kiprun, cinq fois moins que Salomon.", "Boire en courant sans ralentir.",
       "Kiprun Race 900 59,99 à 60 € ; Salomon 149,99 à 179,99 €.", "5,49 à 9,99 $ (500 minimum).",
       "Minimum de 500 pièces ; vérifier le réglage pour toutes les morphologies.",
       "OUI : produit cher en magasin, très bonne marge, achat avant chaque course."),
 fiche("Pack première course", "Coffret : ceinture de running + 4 aimants pour dossard + flasque souple + plan d'entraînement 10 km", "préparer sa première course",
       A + "Custom-Logo-ABS-Race-Bibs-Clips_1601697619934.html", 9.49, 8, 49.90,
       "Avant sa première course, on ne sait pas quoi acheter ni comment s'entraîner, et les épingles trouent le t-shirt.",
       "Je veux permettre à ceux qui préparent leur premier 10 km d'avoir tout l'équipement et un plan, dans un seul coffret.",
       "OUI : un coffret au lieu de quatre achats séparés.", "L'ouverture du coffret la veille de la course.",
       "FlipBelt 28 à 40 € + aimants 10 à 13 € + flasque 20 à 28 € achetés séparément.", "Aimants 0,50 $ (lien) + ceinture 6,29 $ + flasque 1,20 $.",
       "Plan d'entraînement à faire écrire par un coach diplômé.",
       "OUI : idée cadeau toute l'année (inscriptions aux courses), panier moyen élevé."),
]

import dossier_v6_pilates as _pil
_P = {f["court"]: dict(f) for f in _pil.FICHES}
for _n in ["Bracelets lestés pastel", "Kit Pilates Plus « Reformer à la maison »", "Chaussettes antidérapantes (lot de 3)", "Kit Fessiers", "Kit Pilates Studio"]:
    _f = _P[_n]; _f["niche"] = _f["niche"].replace("Pilates à la maison", "Sport et récupération"); FICHES.append(_f)

_ordre = ["Pommeau de douche filtrant", "Lunettes de running polarisées", "Bracelets lestés pastel", "Kit Pilates Plus « Reformer à la maison »", "Gilet d'hydratation",
          "Chaussettes antidérapantes (lot de 3)", "Kit Fessiers", "Kit Pilates Studio", "Gourde 2 L pastel", "Pack première course"]
_f = _P["Gourde 2 L pastel"]; _f["niche"] = _f["niche"].replace("Pilates à la maison", "Sport et récupération"); FICHES.append(_f)
FICHES.sort(key=lambda f: _ordre.index(f["court"]))
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
_vus = {u for _, u in SOURCES}
SOURCES += [s for s in _pil.SOURCES if s[1] not in _vus]
