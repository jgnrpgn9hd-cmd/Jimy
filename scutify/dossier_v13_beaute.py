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

FICHES[0]["niche"] = "Beauté · " + FICHES[0]["niche"].split(" · ", 1)[1]
FICHES[1]["niche"] = "Sport · " + FICHES[1]["niche"].split(" · ", 1)[1]
_BEAUTE = dict(
    demande="La beauté est la catégorie qui vend le plus sur TikTok Shop (FastMoss) ; les bigoudis sans chaleur sont régulièrement en rupture après une vidéo virale (CJ Dropshipping).",
    modele="Kitsch, Foreo, Slip : des accessoires beauté vendus 30 à 300 € avec des vidéos avant / après.",
    observation="Sur TikTok et Instagram, les routines beauté « à la maison » remplacent le salon : on veut le résultat du coiffeur ou de l'esthéticienne, sans le prix ni le temps.",
    cible="Femmes de 18 à 45 ans qui prennent soin de leurs cheveux et de leur peau, actives sur Instagram et TikTok.",
    pistes="Bigoudis sans chaleur · brosse soufflante · lisseur sans fil · brosse visage sonique · taie en soie · miroir lumineux · ponceuse à ongles · coffret beauté.",
    c_passion="OUI : la beauté, prendre soin de soi, se sentir belle.",
    c_unique="Design premium (satin, blanc nacré, doré), belle boîte, tutoriels vidéo en français.",
    q3="Oui : avant / après en vidéo, routines du soir et du matin, déballage.",
    angle_pub="Le résultat du salon obtenu à la maison, montré en avant / après en 10 secondes.")
def _beaute(court, nom, usage, lien, usd, liv, revente, probleme, idee, eco, wow, prix, fourn, vig, q4, poids):
    f = fiche(court, nom, usage, lien, usd, liv, revente, probleme, idee, eco, wow, prix, fourn, vig, q4, poids=poids)
    f.update(_BEAUTE); f["vigilance"] = vig; f["niche"] = "Beauté · " + usage; return f
_A = "https://www.alibaba.com/product-detail/"
_ELEC = "Appareil électrique : marquage CE, notice en français, inscription au recyclage des appareils (DEEE) ; aucune promesse médicale."
FICHES += [
 _beaute("Bigoudis sans chaleur en satin", "Kit bigoudi souple en satin + pince griffe, à mettre le soir pour des boucles au réveil", "avoir des boucles sans abîmer ses cheveux",
   _A + "TikTok-Hot-Selling-Curling-Rods-100_1600398034810.html", 1.04, 9, 29.90,
   "Le fer à friser abîme et casse les cheveux, et faire ses boucles le matin prend du temps.",
   "Je veux permettre aux femmes aux cheveux longs d'avoir des boucles parfaites au réveil, sans chaleur et sans abîmer leurs cheveux.",
   "OUI : remplace le fer et les rendez-vous chez le coiffeur.", "Le bigoudi qu'on déroule le matin : des boucles parfaites apparaissent.",
   "Kitsch 26,95 à 32,95 € ; modèles basiques 9 à 19 €.", "1,04 $ (200 minimum), logo personnalisé.",
   "Tutoriel vidéo indispensable (comment l'enrouler) ; soigner la boîte.",
   "OUI : produit viral en rupture de stock aux États-Unis, très gros marché.", "Petit colis en lettre (250 g)."),
 _beaute("Brosse soufflante", "Brosse soufflante 3 en 1 : sèche, lisse et donne du volume en une seule étape", "faire un brushing de salon chez soi",
   _A + "Hot-Styling-Tools-one-step-volumizer_1600089481377.html", 8.98, 7, 39.90,
   "Un brushing chez le coiffeur coûte 25 à 40 €, et à la maison il faut 45 minutes avec sèche-cheveux, brosse et lisseur.",
   "Je veux permettre aux femmes qui manquent de temps d'avoir un brushing de salon en 10 minutes, avec un seul appareil.",
   "OUI : remplace des brushings à 25-40 €.", "Cheveux mouillés, puis brushing de salon en 10 minutes, d'une seule main.",
   "BaByliss, Remington, Rowenta : 27,78 à 41,10 €.", "8,98 $ (2 à 999).",
   "Appareil chauffant : " + _ELEC + " Ne pas copier le design d'une marque.",
   "OUI : achat coup de cœur très fort, cible énorme.", "Colis d'environ 750 g."),
 _beaute("Lisseur sans fil", "Lisseur mini rechargeable sans fil, à glisser dans le sac", "se recoiffer partout",
   _A + "Cordless-Flat-Irons-Factory-Custom-Logo_1601367502059.html", 9.00, 8, 39.90,
   "Les cheveux frisent avec la pluie ou la transpiration, et on ne peut pas se recoiffer hors de chez soi.",
   "Je veux permettre aux femmes de se recoiffer en 2 minutes au bureau, en soirée ou en voyage, avec un lisseur sans fil.",
   "OUI : moins cher que les marques (45,90 à 63,38 €, Dyson 581 €).", "Sortir le lisseur du sac, sans prise, et des cheveux parfaits en 2 minutes.",
   "Postquam 45,90 €, MEDION 63,38 €, Dyson Corrale 581,90 €.", "9 $ (2 minimum), logo personnalisé.",
   "Appareil chauffant avec batterie : " + _ELEC,
   "OUI : achat impulsif, idée cadeau.", "Colis d'environ 500 g."),
 _beaute("Brosse visage sonique", "Brosse nettoyante en silicone à vibrations, étanche, rechargeable", "nettoyer sa peau en profondeur",
   _A + "Electric-Silicone-Facial-Brush-for-Cleaning_1601405783636.html", 2.75, 9, 34.90,
   "Les mains et les cotons ne nettoient pas les pores en profondeur ; la peau reste terne.",
   "Je veux permettre à chacune d'avoir une peau nette et lumineuse avec un nettoyage de 1 minute par jour.",
   "OUI : bien moins chère que Foreo (59 à 315 €).", "La mousse qui se forme sur le visage, la peau qui brille après.",
   "Foreo Luna de 59,70 à 315 € selon le modèle.", "2,75 $ (20 à 99), 2,65 $ dès 100.",
   _ELEC, "OUI : produit beauté star, très visuel, marge forte.", "Petit colis en lettre (250 g)."),
 _beaute("Taie d'oreiller en soie", "Taie d'oreiller 100 % soie de mûrier 22 momme, belle boîte", "garder ses cheveux et sa peau la nuit",
   _A + "22-momme-100-Custom-Package-100_1601168614658.html", 12.99, 8, 39.90,
   "Le coton frotte : cheveux cassés et emmêlés, marques sur le visage au réveil.",
   "Je veux permettre aux femmes de se réveiller avec des cheveux lisses et sans marques, grâce à une taie en soie.",
   "OUI : moitié prix des taies en soie vendues en France.", "Les cheveux lisses au réveil, la soie qui brille.",
   "Maison de la Soie 59,92 € ; Nature & Découvertes 74 à 129 €.", "12,99 $ (2 à 499), 9,89 $ dès 500, logo +0,50 $.",
   "Positionner sur la beauté des cheveux et de la peau (pas le sommeil, niche de NOXYA) ; vérifier la certification OEKO-TEX.",
   "OUI : cadeau beauté très demandé, marque de luxe à moitié prix.", "Colis d'environ 500 g."),
 _beaute("Miroir lumineux de voyage", "Miroir pliable rechargeable avec 3 lumières (chaude, naturelle, froide), tactile", "se maquiller avec une bonne lumière partout",
   _A + "Custom-Logo-Touch-Switch-Folding-Rechargeable_1600658723083.html", 5.13, 8, 32.90,
   "Mauvaise lumière dans la salle de bain ou à l'hôtel : maquillage raté, qu'on découvre dehors.",
   "Je veux permettre aux femmes de se maquiller avec une lumière parfaite partout, avec un miroir qui tient dans le sac.",
   "OUI : évite les maquillages ratés.", "Le visage éclairé comme en studio, en un toucher.",
   "UNIQ 19,99 € ; StylPro Go and Glow 32,95 € ; modèles haut de gamme 78 à 104 €.", "5,13 $ (300 minimum), logo personnalisé.",
   _ELEC, "OUI : achat facile, idée cadeau.", "Colis d'environ 500 g."),
 _beaute("Ponceuse à ongles électrique", "Kit manucure électrique rechargeable avec 6 embouts", "faire une manucure de salon chez soi",
   _A + "Electric-Nail-Drills-for-Acrylic-Nails_1600084555339.html", 9.25, 8, 39.90,
   "Une manucure en institut coûte 30 à 60 € et il faut y retourner toutes les 3 semaines.",
   "Je veux permettre aux femmes de faire une manucure propre chez elles, avec un appareil simple et des tutoriels.",
   "OUI : amorti dès la première manucure évitée.", "L'ongle limé et poli en accéléré, résultat de salon.",
   "Beurer MP 64 39 €, Beurer MP62 80,64 € ; modèles pro 77 à 110 €.", "9,25 $ (1 à 4 999).",
   _ELEC, "OUI : gros marché des ongles, vidéos très partagées.", "Colis d'environ 500 g."),
 _beaute("Coffret nuit beauté", "Coffret cadeau : taie d'oreiller en soie + bigoudis sans chaleur en satin", "offrir une routine beauté du soir",
   _A + "22-momme-100-Custom-Package-100_1601168614658.html", 14.03, 8, 49.90,
   "On ne sait pas quoi offrir à une femme qui prend soin d'elle.",
   "Je veux permettre à ceux qui cherchent un cadeau d'offrir une vraie routine beauté du soir, dans un beau coffret.",
   "OUI : deux produits premium pour le prix d'une taie en soie de marque.", "Le déballage, puis les boucles et les cheveux lisses au réveil.",
   "Taie en soie 59,92 € + Kitsch 32,95 € achetés séparément.", "Taie 12,99 $ (lien) + bigoudis 1,04 $.",
   "Belle boîte indispensable ; même positionnement beauté que la taie.",
   "OUI : cadeau toute l'année (anniversaires, fête des mères, Noël).", "Colis d'environ 500 g."),
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
 ("FastMoss, meilleures ventes TikTok Shop par catégorie", "https://www.fastmoss.com/blog/best-selling-products-by-category/"),
 ("CJ Dropshipping, produits viraux 2026", "https://cjdropshipping.com/blogs/winning-products/TikTok-Viral-products-2026"),
 ("Kitsch, bigoudis sans chaleur", "https://www.mykitsch.com/fr/products/heatless-satin-curling-set-black-satin-sleep-bonnet-bundle-sunset-tie-dye"),
 ("Kaufland, lisseur sans fil", "https://www.kaufland.fr/product/513441332/"),
 ("Sephora, Foreo Luna", "https://www.sephora.fr/p/luna-4-P10044624.html"),
 ("Maison de la Soie, taie 22 momme", "https://www.maisondelasoie.com/en/products/oxford-silk-pillowcase-with-22-mommes"),
 ("Lookfantastic, miroir StylPro", "https://lookfantastic.fr/p/stylpro-go-and-glow-mirror/13168270"),
 ("Meilleurtest, ponceuses à ongles", "https://meilleurtest.fr/comparatif/ponceuse-a-ongle/"),
]
