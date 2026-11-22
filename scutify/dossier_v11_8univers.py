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

import dossier_v8_maison as _mai, dossier_v7_organisation as _org
_M = {f["court"]: dict(f) for f in _mai.FICHES}
_O = {f["court"]: dict(f) for f in _org.FICHES}
def _prendre(src, nom, univers):
    f = dict(src[nom]); f["niche"] = univers + " · " + f["niche"].split(" · ", 1)[1]; return f
FICHES[0]["niche"] = "Salle de bain · " + FICHES[0]["niche"].split(" · ", 1)[1]
FICHES[1]["niche"] = "Sport · " + FICHES[1]["niche"].split(" · ", 1)[1]
FICHES += [
 _prendre(_M, "Kit WC lavant sans électricité", "Salle de bain"),
 _prendre(_M, "Boîte cache-multiprise", "Salon"),
 _prendre(_M, "Étagère invisible pour livres (lot de 3)", "Déco"),
 _prendre(_M, "Égouttoir enroulable doré", "Cuisine"),
 _prendre(_O, "Sacoche en cuir homme", "Mode homme"),
 _prendre(_O, "Coffret cachet de cire", "Papeterie"),
 _prendre(_M, "Classeur budget à enveloppes", "Budget"),
 fiche("Kit punch needle", "Kit de broderie en relief : tambour, aiguille punch, laine, toile avec un motif mignon, vidéo en français", "créer un bel objet fait main",
       "https://www.alibaba.com/product-detail/Punch-Needle-Embroidery-Beginner-Kit-DIY_1600444432316.html", 3.60, 9, 34.90,
       "Le soir, on passe des heures sur son téléphone sans vraiment se détendre.",
       "Je veux permettre à ceux qui veulent décrocher des écrans de créer un bel objet de déco en une soirée, avec un kit simple et une vidéo.",
       "OUI : une activité qui dure plusieurs soirées, moins chère qu'un atelier (40 à 60 €).", "La laine qui forme des boucles en relief à chaque coup d'aiguille : très satisfaisant en vidéo.",
       "Nature & Découvertes 11,99 € (basique) ; kits premium KnitPro 49,85 €, Modern Crafter 65 €.", "3,60 $ (10 à 99), 3,30 $ dès 100.",
       "Soigner les motifs et la boîte pour se démarquer des kits d'entrée de gamme ; tourner la vidéo en français.",
       "OUI : tendance Pinterest « loisirs manuels contre les écrans », achat cadeau toute l'année."),
]
for _f in FICHES[-1:]:
    _f["niche"] = "Loisirs créatifs · " + _f["niche"].split(" · ", 1)[1]
    _f.update(
        demande="Pinterest, rapport Loisirs 2026 : les gens échangent du temps d'écran contre des loisirs manuels ; kits premium vendus 50 à 65 €.",
        modele="The Woobles et We Are Knitters : des kits créatifs vendus avec de belles vidéos et une communauté.",
        observation="Sur Pinterest et Instagram, les loisirs créatifs « cosy » explosent ; beaucoup veulent décrocher des écrans le soir.",
        cible="Femmes et hommes de 20 à 45 ans qui cherchent une activité calme et créative le soir ou à offrir.",
        question="Comment décrocher des écrans le soir avec une activité simple et gratifiante ?",
        pistes="Punch needle · broderie · macramé · crochet · feutrage.",
        c_passion="OUI : la déco, le fait main, la détente.",
        c_unique="Motifs exclusifs, belle boîte, vidéo pas à pas en français.",
        q3="Oui : vidéos de création en accéléré, avant / après, motifs du mois.",
        angle_pub="La toile vierge, puis le coussin fini en accéléré, en 15 secondes.",
        vigilance="Soigner les motifs et la boîte pour se démarquer des kits d'entrée de gamme ; tourner la vidéo en français.")
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
SOURCES += [s for s in _mai.SOURCES + _org.SOURCES if s[1] not in _vus and not _vus.add(s[1])]
SOURCES += [("LoveCrafts, kit punch needle KnitPro", "https://www.lovecrafts.com/fr-fr/p/knitpro-punch-needle-the-earthy-kit")]
