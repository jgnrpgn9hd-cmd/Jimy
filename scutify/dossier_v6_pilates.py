# Dossier PILATES À LA MAISON : 10 produits cohérents, une seule cible, inspirés des tendances Pinterest / Pilates.
# Chaque produit répond à un problème précis de la même cliente.
# Méthode du support Scutify (niche → observation → cible → problème → pistes → idée → critères → 4 questions).
# Liens Alibaba et prix vérifiés le 14/11/2026. Coût = $ × 0,86. Ancienne version (VAURE) : dossier_v5_vaure_kits.py.

DEMANDE = "Le Pilates est l'activité n° 1 sur ClassPass ; Pinterest le place parmi ses univers bien-être les plus suivis ; Bala vend ses bracelets lestés 49 à 85 $ aux États-Unis."
MODELE = "Kosso et Hustle Wear (une cible, plusieurs produits qui se répondent, des packs) ; SmartWorkout (kit + programme, exemple du support)."
CIBLE = "Femmes de 20 à 40 ans qui veulent se tonifier en douceur à la maison, sans abonnement cher, avec un univers pastel et cocooning."
CONC = "Concurrence : Decathlon et Amazon vendent des accessoires de base ; la marque se démarque par l'univers pastel, le programme vidéo en français et les packs."
PISTES = "Kit barre · bracelets lestés · chaussettes antidérapantes · cercle · bandes en tissu · disques de glisse · balle de massage · gourde · coffret cadeau."


def fiche(court, nom, usage, lien, usd, liv, revente, probleme, idee, eco, wow, prix_france, fournisseur, vigilance, q4, poids="Léger, petit colis."):
    return dict(
        court=court, nom=nom, niche=f"Pilates à la maison · {usage}", lien=lien, usd=usd, liv=liv, revente=revente,
        criteres=("OUI", "OUI", "OUI", "OUI", "OUI", "NON"), modele=MODELE, demande=DEMANDE,
        observation="Sur Pinterest et Instagram, le Pilates à la maison (tenue pastel, tapis, petits accessoires) est partout ; les cours en studio coûtent 15 à 40 € la séance.",
        cible=CIBLE, probleme=probleme,
        question=f"Comment {usage.lower()} chez soi, simplement, sans payer un studio ?",
        pistes=PISTES, idee=idee,
        c_probleme="OUI : " + probleme[0].lower() + probleme[1:],
        c_economique=eco, c_passion="OUI : le Pilates, le bien-être, prendre soin de soi.", c_wow=wow,
        c_unique="Univers pastel, belle boîte, programme vidéo en français, communauté Instagram.",
        c_poids=poids,
        q1="Bien : vrai problème, passion forte, produit léger.",
        q2="Oui : on comprend l'usage en voyant la vidéo.",
        q3="Oui : séances filmées, avant / après sur 30 jours, packs.",
        q4=q4, prix_france=prix_france,
        angle_pub="Séance de 15 minutes dans un salon lumineux, tenue pastel, résultat sur 30 jours.",
        fournisseur=fournisseur, vigilance=vigilance + " " + CONC)


A = "https://www.alibaba.com/product-detail/"
FICHES = [
 fiche("Kit Pilates Plus « Reformer à la maison »", "Barre de Pilates démontable avec élastiques + 2 disques de glisse + programme vidéo 30 jours + boîte pastel", "faire du Pilates Reformer",
       A + "Pilates-Bar-Kit-with-Resistance-Bands_1600918081475.html", 4.28, 7, 39.90,
       "Une séance de Pilates sur machine (Reformer) coûte cher en studio et une machine coûte des milliers d'euros.",
       "Je veux permettre aux femmes qui aiment le Pilates de faire les mouvements du Reformer chez elles, avec un kit léger et un programme de 30 jours.",
       "OUI : 39,90 € une fois, au lieu de séances à 30-40 €.", "Les mouvements du Reformer dans un salon, avec une simple barre.",
       "Kits de 26 à 59 € ; SmartWorkout 99,90 €.", "Barre 2,50 $ (lien) + disques de glisse 1,78 $ la paire (" + A + "High-Quality-Core-Sliders-for-Gym_1601519504789.html).",
       "Tester la solidité des élastiques ; programme filmé avec une coach diplômée.",
       "OUI : c'est le produit d'entrée de la marque, le problème est fort et le marché est prouvé (SmartWorkout).", poids="Colis d'environ 1 kg."),
 fiche("Bracelets lestés pastel", "Paire de bracelets lestés en silicone (poignets ou chevilles), couleurs pastel", "se renforcer en douceur",
       A + "Wholesale-Resistance-Custom-Logo-Silicone-Ankle_11000024198018.html", 5.85, 7, 39.90,
       "Les haltères sont encombrants et peu agréables ; on veut se renforcer en marchant ou pendant le Pilates.",
       "Je veux permettre aux femmes actives de se renforcer en douceur toute la journée, avec des bracelets jolis comme des bijoux.",
       "OUI : remplace des haltères.", "Un bijou qui muscle.",
       "Decathlon 42,99 € le lot ; Bala 49 à 85 $ aux États-Unis.", "5,85 $ la paire (1 à 499), logo dès 50.",
       "Bien indiquer le poids de chaque bracelet.",
       "OUI : la meilleure preuve de vente (Bala), très photogénique.", poids="Colis d'environ 1 kg."),
 fiche("Chaussettes antidérapantes (lot de 3)", "Lot de 3 paires de chaussettes antidérapantes pastel pour Pilates, yoga et parquet", "ne plus glisser",
       A + "Custom-Rubber-Grip-Yoga-Dance-Socks_1600795685359.html", 5.25, 9, 32.90,
       "On glisse sur le tapis ou le parquet, et les studios imposent des chaussettes antidérapantes.",
       "Je veux permettre aux pratiquantes de Pilates d'être stables et à l'aise, avec des chaussettes douces et jolies.",
       "OUI : 3 paires au prix de 2 en magasin.", "Le look « Pilates girl » complet.",
       "1 paire 11,99 à 19 € ; 2 paires 26,99 à 32,90 €.", "1,75 $ la paire, logo dès 300.",
       "Vérifier les tailles et le tenue des picots au lavage.",
       "OUI : achat répété (on use les chaussettes), parfait en 2e produit."),
 fiche("Kit Pilates Studio", "Cercle de Pilates + 1 paire de chaussettes antidérapantes + programme vidéo « cours collectif »", "suivre un cours de Pilates",
       A + "Custom-Logo-38cm-Fitness-Yoga-Pilates_1600060372660.html", 5.15, 8, 34.90,
       "Un cours collectif de Pilates coûte 15 à 30 € la séance et les horaires ne conviennent pas toujours.",
       "Je veux permettre aux femmes qui n'ont pas le temps ou le budget d'aller en studio de suivre un vrai cours chez elles.",
       "OUI : le prix de deux séances en studio.", "Le cercle qui sculpte bras et cuisses en vidéo.",
       "Kits Pilates complets chez Decathlon ; séances de 15 à 30 €.", "Cercle 3,40 $ (lien) + chaussettes 1,75 $.",
       "Programme filmé par une coach diplômée.",
       "OUI : complète le Kit Pilates Plus pour les débutantes.", poids="Colis d'environ 750 g."),
 fiche("Kit Fessiers", "3 bandes en tissu pastel + 2 sangles de chevilles + programme 30 jours", "tonifier fessiers et jambes",
       A + "Zakerda-Non-Slip-latex-fabric-polyester_1601045479697.html", 6.51, 8, 34.90,
       "Les élastiques en latex roulent sur les cuisses et on ne sait pas quels exercices faire.",
       "Je veux permettre aux femmes qui veulent des fessiers toniques de suivre un programme simple chez elles, avec des bandes qui ne roulent pas.",
       "OUI : un kit au lieu de deux achats séparés.", "Avant / après sur 30 jours.",
       "Bandes 19,49 € + sangles 12,99 à 26,98 € achetées séparément.", "Bandes 3,15 $ (lien) + sangles 3,36 $ (" + A + "Professional-Kickback-Ankle-Strap-Glute-Workouts_1601112137291.html).",
       "Aucune promesse de résultat chiffrée.",
       "OUI : énorme demande sur les réseaux, cible passionnée.", poids="Colis d'environ 500 g."),
 fiche("Kit Pilates Voyage", "Pochette avec 2 disques de glisse, 1 bande en tissu, 1 paire de chaussettes + programme 15 minutes « partout »", "garder sa routine en voyage",
       A + "High-Quality-Core-Sliders-for-Gym_1601519504789.html", 6.68, 9, 34.90,
       "En vacances ou en déplacement, on perd sa routine et le matériel ne rentre pas dans la valise.",
       "Je veux permettre aux femmes qui voyagent de garder leur séance de Pilates partout, avec une pochette qui tient dans un sac.",
       "OUI : pas de salle à payer en voyage.", "Toute une séance dans une petite pochette.",
       "Peu de kits voyage avec programme en France ; disques seuls à petit prix.", "Disques 1,78 $ (lien) + bande 3,15 $ + chaussettes 1,75 $.",
       "Pochette à faire imprimer au logo.",
       "OUI : idée simple et différenciante, parfaite en cadeau.", poids="Colis d'environ 500 g."),
 fiche("Kit Dos & Posture", "Balle de massage double + bande en tissu + programme « dos libéré » de 10 minutes", "soulager son dos",
       A + "nature-rubber-peanut-ball-massage-for_62410531730.html", 7.15, 8, 34.90,
       "Dos et nuque tendus après des heures assise ; une séance d'ostéopathe coûte 45 à 80 € et n'est pas remboursée.",
       "Je veux permettre aux femmes qui travaillent assises de détendre leur dos en 10 minutes par jour, avec le Pilates.",
       "OUI : 34,90 € une fois au lieu de séances à 45-80 €.", "La balle qui roule le long du dos, soulagement visible.",
       "Balles doubles seules 7 à 20 € ; peu de kits avec programme.", "Balle 4 $ (lien) + bande 3,15 $.",
       "Aucune promesse médicale (« détend », jamais « soigne »).",
       "OUI : le mal de dos touche énormément de monde, le programme fait la différence.", poids="Colis d'environ 500 g."),
 fiche("Kit Reprise après bébé", "Cercle de Pilates + bande en tissu + programme doux de reprise (après feu vert médical)", "reprendre le sport après bébé",
       A + "Custom-Logo-38cm-Fitness-Yoga-Pilates_1600060372660.html", 6.55, 8, 36.90,
       "Après une grossesse, on veut reprendre en douceur, mais on ne sait pas par où commencer et on a peu de temps.",
       "Je veux permettre aux jeunes mamans de reprendre une activité douce chez elles, avec un programme adapté et validé.",
       "OUI : pas de cours à payer ni de garde à trouver.", "Séance de 15 minutes pendant la sieste de bébé.",
       "Programmes post-natal en ligne payants ; peu de kits physiques.", "Cercle 3,40 $ (lien) + bande 3,15 $.",
       "Programme validé par une sage-femme ou un kiné ; toujours après feu vert médical.",
       "OUI : cible très engagée sur Instagram et Pinterest, besoin réel.", poids="Colis d'environ 750 g."),
 fiche("Gourde 2 L pastel", "Gourde 2 L avec repères d'heures et paille, couleurs pastel", "penser à boire",
       A + "motivational-water-bottle-2l-2-liter_1600264326049.html", 2.27, 8, 29.90,
       "On oublie de boire assez dans la journée, surtout quand on fait du sport.",
       "Je veux permettre aux femmes actives de boire assez, avec une gourde qu'elles ont envie de montrer.",
       "OUI : une gourde au lieu de bouteilles en plastique.", "Les repères d'heures qui motivent.",
       "Gourde 2 L inox 32,99 € (Breaking Limits).", "2,27 $, logo dès 100.",
       "Vérifier le plastique sans BPA.",
       "OUI : produit d'appel et de fidélité, parfait dans les packs.", poids="Colis d'environ 500 g."),
 fiche("Coffret cadeau Pilates", "Belle boîte : bracelets lestés pastel + 1 paire de chaussettes antidérapantes + carte du programme", "offrir un cadeau Pilates",
       A + "Wholesale-Resistance-Custom-Logo-Silicone-Ankle_11000024198018.html", 7.60, 6, 49.90,
       "On ne sait jamais quoi offrir à une amie qui aime le sport et le bien-être.",
       "Je veux permettre à ceux qui cherchent un cadeau de faire plaisir à une passionnée de Pilates avec un coffret beau et utile.",
       "OUI : un cadeau complet en une commande.", "Le déballage du coffret pastel.",
       "Coffrets bien-être de 30 à 60 € en France.", "Bracelets 5,85 $ (lien) + chaussettes 1,75 $.",
       "Prévoir une belle boîte : c'est elle qui fait le prix.",
       "OUI : toute l'année (anniversaires, fêtes, fête des mères).", poids="Colis d'environ 1,25 kg (tarif jusqu'à 2 kg)."),
]
for _f in FICHES:
    _f["cout"] = round(_f["usd"] * 0.86, 2)
    _f["marge"] = round(_f["revente"] - _f["cout"], 2)

SOURCES = [
 ("Pinterest Predicts 2026", "https://newsroom.pinterest.com/en-ca/news/pinterest-predicts-nonconformity-self-preservation-and-escapism-drive-21-trends-for-2026/"),
 ("Pinterest, rapport Loisirs 2026", "https://newsroom.pinterest.com/news/2026-pinterest-hobbies-trend-report/"),
 ("ClassPass, bilan 2025 (Pilates n° 1)", "https://classpass.com/blog/2025-classpass-look-back-report/"),
 ("Bala chez Goop", "https://goop.com/bala-bangles-weighted-wrist-bangles/p/"),
 ("Decathlon, lestés chevilles", "https://www.decathlon.be/fr/vc/lestes-chevilles"),
 ("Decathlon, chaussettes antidérapantes", "https://www.decathlon.fr/vc/chaussettes-antiderapantes-femmes"),
 ("Decathlon, kit complet Pilates", "https://www.decathlon.fr/p/mp/kit-complet-pilates-fitness-avec-anneau-bandes-disques-balle-et-chaussettes/50e9ffcc-42ac-44e2-bba9-2e7b4c14e663/novar"),
 ("ManoMano, kit barre Pilates", "https://www.manomano.fr/p/lot-de-barre-pilates-elastique-multifonction-pour-maison-corde-de-traction-yoga-equipement-fitness-228599183"),
 ("Decathlon Pro, lot de 3 bandes", "https://www.decathlonpro.fr/art-bande-elastique-10kg-id-2871089.html"),
 ("Sveltus, sangles de chevilles", "https://www.fitnessboutique.fr/products/sveltus-sangle-cheville-musculation-x2-prod-sve5660"),
 ("Pearl, balles de massage", "https://www.pearl.fr/article/NX8884/double-balle-de-massage-et-dexercice-o-8-cm"),
 ("La Poste, tarifs Colissimo 2026", "https://www.laposte.fr/professionnel/tarif-colissimo"),
]
