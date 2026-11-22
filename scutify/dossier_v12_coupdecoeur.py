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
_DESIGN = dict(
    demande="Les lampes design sans fil et les objets « beaux et utiles » font partie des contenus les plus enregistrés sur Pinterest et TikTok ; la maison est la catégorie n° 1 des pubs Meta en 2026 (TrendTrack).",
    modele="Marques de design accessible : on vend un objet qu'on a envie de montrer, qui règle un vrai problème du quotidien.",
    observation="On veut un intérieur d'hôtel ou de restaurant chic, mais sans électricien, sans fils et sans gros budget.",
    cible="Femmes et hommes de 25 à 45 ans, souvent en appartement ou locataires, qui soignent leur intérieur et achètent sur coup de cœur.",
    pistes="Lampe de table sans fil · lampe de chevet à induction · applique aimantée · lampe photo · brosse soufflante · kit WC lavant · sacoche en cuir · cache-multiprise.",
    c_passion="OUI : la déco, le design, prendre soin de soi et de son intérieur.",
    c_unique="Design premium (métal doré, bois, verre), belle boîte, marque soignée.",
    q3="Oui : vidéos « avant / après » d'une pièce, ambiance du soir, déballage.",
    angle_pub="La pièce triste et froide, puis l'objet qui change tout en un geste, en 10 secondes.")
def _design(court, nom, usage, univers, lien, usd, liv, revente, probleme, idee, eco, wow, prix, fourn, vig, q4, poids):
    f = fiche(court, nom, usage, lien, usd, liv, revente, probleme, idee, eco, wow, prix, fourn, vig, q4, poids=poids)
    f.update(_DESIGN); f["vigilance"] = vig; f["niche"] = univers + " · " + usage; return f
_A = "https://www.alibaba.com/product-detail/"
FICHES += [
 _design("Lampe de table dorée sans fil", "Lampe de table rechargeable en métal doré, lumière chaude réglable au toucher", "éclairer sa table sans prise", "Lumière design",
   _A + "decorative-rechargeable-LED-table-night-lights_1600626990642.html", 5.98, 7, 39.90,
   "On dîne sous la lumière froide du plafonnier, il n'y a pas de prise au milieu de la table, et les bougies coulent et sont dangereuses avec les enfants.",
   "Je veux permettre à chacun d'avoir l'ambiance d'un restaurant chic à la maison, avec une lampe sans fil qu'on pose où on veut.",
   "OUI : remplace les bougies et une lampe à brancher.", "La table qui passe de la lumière froide à l'ambiance restaurant, d'un toucher.",
   "NegoLuz environ 47,94 € ; lampes sans fil de marque 50 à 150 €.", "5,98 $ (5 à 99), 5,65 $ dès 100.",
   "Produit électrique rechargeable : marquage CE, notice en français, inscription au recyclage des appareils (DEEE).",
   "OUI : objet coup de cœur très partagé sur Pinterest, achat cadeau.", "Colis d'environ 750 g."),
 _design("Lampe de chevet à induction", "Lampe de chevet tactile façon hôtel de luxe, socle qui recharge le téléphone sans fil", "recharger son téléphone et lire au lit", "Lumière design",
   _A + "Touch-Rechargeable-portable-modern-hotel-luxury_62380394938.html", 12.42, 7, 44.90,
   "La table de nuit est pleine de câbles, et le téléphone traîne à plat au réveil.",
   "Je veux permettre à chacun d'avoir une table de nuit d'hôtel de luxe : une seule lampe qui éclaire et recharge le téléphone, sans fil.",
   "OUI : lampe + chargeur en un seul objet.", "On pose le téléphone, il charge, et la lampe s'allume d'un toucher.",
   "47,99 à 69,98 € en France.", "12,42 $ (1 à 99), 11,27 $ dès 100.",
   "Produit électrique avec chargeur à induction : marquage CE, compatibilité des téléphones, DEEE.",
   "OUI : deux problèmes réglés d'un coup, look premium.", "Colis d'environ 1 kg."),
 _design("Applique murale aimantée sans fil", "Applique rechargeable qui se clipse sur une plaque aimantée, tourne à 360° et s'allume au toucher", "éclairer sans électricien", "Lumière design",
   _A + "Rechargeable-Touch-Magnetic-LED-Light-360_11000013900976.html", 6.66, 8, 34.90,
   "Couloir, coin lecture ou tête de lit dans le noir, pas de prise, et interdit de percer quand on est locataire.",
   "Je veux permettre aux locataires et à ceux qui n'ont pas de prise d'avoir une applique d'hôtel en 10 secondes, sans électricien ni perçage.",
   "OUI : pas d'électricien, pas de travaux.", "On colle la plaque, on clipse la lampe, elle tourne et s'allume.",
   "19,90 à 34,90 € en France.", "6,30 à 6,66 $ (2 minimum).",
   "Produit électrique rechargeable : marquage CE, DEEE ; vérifier la tenue de l'adhésif.",
   "OUI : énorme cible de locataires, effet waouh immédiat.", "Colis d'environ 500 g."),
 _design("Lampe photo personnalisée", "Plaque transparente gravée avec la photo du client, qui s'illumine sur un socle en bois", "offrir un cadeau qui fait pleurer", "Cadeau personnalisé",
   _A + "Personalized-custom-creative-made-engraved-luminous_1600684887832.html", 2.68, 8, 34.90,
   "On ne sait jamais quoi offrir (fête des mères, Saint-Valentin, anniversaire) et on finit avec un cadeau sans émotion.",
   "Je veux permettre à ceux qui cherchent un cadeau de faire pleurer de joie, avec leur photo gravée en lumière.",
   "OUI : un cadeau unique pour moins de 35 €.", "Éteinte, une plaque vide ; allumée, la photo apparaît. Les gens pleurent en vidéo.",
   "Holograbme 34,90 €, Celekado 44,90 €.", "2,68 $ (10 à 199), gravure faite par le fournisseur.",
   "Chaque commande demande d'envoyer la photo au fournisseur : prévoir un formulaire simple ; produit électrique (DEEE).",
   "OUI : émotion maximale, ventes toute l'année (fêtes, anniversaires).", "Colis d'environ 500 g."),
 _prendre(_M, "Kit WC lavant sans électricité", "Salle de bain"),
 _prendre(_O, "Sacoche en cuir homme", "Mode homme"),
 _design("Brosse soufflante", "Brosse soufflante 3 en 1 : sèche, lisse et donne du volume en une seule étape", "faire un brushing de salon chez soi", "Beauté cheveux",
   _A + "Hot-Styling-Tools-one-step-volumizer_1600089481377.html", 8.98, 7, 39.90,
   "Un brushing chez le coiffeur coûte 25 à 40 €, et à la maison il faut 45 minutes avec sèche-cheveux, brosse et lisseur.",
   "Je veux permettre aux femmes qui manquent de temps d'avoir un brushing de salon en 10 minutes, avec un seul appareil.",
   "OUI : remplace des brushings à 25-40 €.", "Cheveux mouillés, puis brushing de salon en 10 minutes, d'une seule main.",
   "BaByliss, Remington, Rowenta : 27,78 à 41,10 €.", "8,98 $ (2 à 999).",
   "Appareil chauffant : marquage CE obligatoire, prise européenne, notice en français, DEEE ; ne pas copier le design d'une marque.",
   "OUI : achat coup de cœur très fort, cible énorme.", "Colis d'environ 750 g."),
 _prendre(_M, "Boîte cache-multiprise", "Salon"),
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
_vus = {u for _, u in SOURCES}
SOURCES += [s for s in _mai.SOURCES + _org.SOURCES if s[1] not in _vus and not _vus.add(s[1])]

