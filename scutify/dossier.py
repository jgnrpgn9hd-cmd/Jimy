# Dossier VAURE : 10 produits COHÉRENTS pour une seule marque et une seule cible (stratégie Kosso).
# Marque : VAURE — slogan « Rien n'est offert. » — l'équipement de ceux qui s'entraînent, à la maison et à la salle.
# Méthode du support Scutify (niche → observation → cible → problème → pistes → idée → critères → 4 questions).
# Liens Alibaba et prix vérifiés le 14/11/2026. Coût = $ × 0,86. Ancienne version (10 niches) : dossier_v3_criteres_stricts.py.
import dossier_precedent as _p

DEMANDE = "18 millions de Français pratiquent le fitness au sens large (Observatoire Forme & Fitness 2026, Union Sport & Cycle)."
MODELE = "Kosso : une seule cible (le sportif), plusieurs produits sous des marques qui se répondent ; Hustle Wear pour les packs."
CIBLE = "Hommes et femmes de 18 à 35 ans qui s'entraînent à la maison ou à la salle et veulent progresser."
DECATHLON = "Concurrence : Decathlon vend les accessoires de base pas cher ; VAURE se démarque par la marque, le programme vidéo et les packs."


def fiche(court, nom, usage, lien, usd, liv, revente, criteres, probleme, idee, eco, wow, prix_france, fournisseur, vigilance, poids="Léger, petit colis."):
    return dict(
        court=court, nom=nom, niche=f"VAURE · {usage}", lien=lien, usd=usd, liv=liv, revente=revente, criteres=criteres,
        modele=MODELE, demande=DEMANDE,
        observation="On veut s'entraîner partout (maison, salle, voyage) avec du matériel simple ; les accessoires vendus partout n'ont ni marque ni programme.",
        cible=CIBLE, probleme=probleme,
        question=f"Comment {usage.lower()} sans matériel compliqué ni abonnement cher ?",
        pistes="Kit barre · bandes en tissu · bandes de traction · corde à sauter · roue abdominale · planche à pompes · bandes de poignets · gourde · sac · serviette.",
        idee=idee,
        c_probleme="OUI : " + probleme[0].lower() + probleme[1:],
        c_economique=eco, c_passion="OUI : le sport, le physique, la discipline.", c_wow=wow,
        c_unique="Logo VAURE, couleurs noir et doré, programme vidéo et défis du VAURE Club.",
        c_poids=poids,
        q1="Bien : besoin réel, passion forte.",
        q2="Oui : on comprend l'usage en voyant le produit.",
        q3="Oui : vidéos de séances, défis du mois, packs VAURE.",
        q4="Oui pour la gamme complète (un client achète plusieurs produits) ; seul, ce produit a beaucoup de concurrence.",
        prix_france=prix_france, angle_pub="Séance filmée à 6 h du matin, slogan « Rien n'est offert », défi du mois.",
        fournisseur=fournisseur, vigilance=vigilance + " " + DECATHLON)


OUI6 = ("OUI", "OUI", "OUI", "OUI", "OUI", "NON")
FICHES = [
 fiche("Kit barre + élastiques VAURE", "Kit d'entraînement : barre démontable + élastiques + programme vidéo 30 jours", "s'entraîner partout",
       "https://www.alibaba.com/product-detail/Pilates-Bar-Kit-with-Resistance-Bands_1600918081475.html", 2.50, 7, 29.90, OUI6,
       "Pas le temps ou pas l'envie d'aller à la salle, et une séance de coaching coûte cher.",
       "Je veux permettre à ceux qui s'entraînent de faire une vraie séance complète partout, chez eux ou en voyage, avec un seul kit et un programme.",
       "OUI : 29,90 € une fois, au lieu d'un abonnement ou de cours.", "Séance complète dans un salon ou une chambre d'hôtel.",
       "Kits barre + élastiques : environ 18 à 63 € ; SmartWorkout 99,90 €.", "2,50 $ (1 à 499), logo et emballage dès 100.",
       "Tester la solidité des élastiques ; tourner le programme vidéo."),
 fiche("Bandes élastiques en tissu (lot de 3)", "Lot de 3 bandes élastiques en tissu antidérapant (3 résistances) pour fessiers et jambes", "travailler fessiers et jambes",
       "https://www.alibaba.com/product-detail/Zakerda-Non-Slip-latex-fabric-polyester_1601045479697.html", 3.15, 9, 24.90, OUI6,
       "Les élastiques en latex roulent sur les cuisses, pincent et cassent.",
       "Je veux permettre à ceux qui travaillent leurs jambes et leurs fessiers d'avoir des bandes qui ne roulent pas et durent, avec les exercices en vidéo.",
       "OUI : un lot pour remplacer des machines de salle.", "Bandes qui restent en place pendant les squats.",
       "Decathlon Pro : lot de 3 bandes à 19,49 € (prix pro).", "3,15 $ le lot (1 à 39), logo dès 300.",
       "Prix d'appel face à Decathlon : le programme et le pack font la différence."),
 fiche("Bandes de traction (lot de 5)", "Lot de 5 bandes élastiques longues en latex pour tractions assistées et musculation", "réussir ses tractions",
       "https://www.alibaba.com/product-detail/Custom-Logo-100-Latex-Loop-Set_1601034567228.html", 9.90, 6, 39.90, OUI6,
       "On n'arrive pas à faire de tractions et on stagne.",
       "Je veux permettre à ceux qui n'arrivent pas encore à faire de tractions d'y arriver pas à pas, avec 5 niveaux d'aide et un programme.",
       "OUI : remplace plusieurs machines de musculation.", "Défi « ta première traction en 30 jours ».",
       "[PRIX EN FRANCE À VÉRIFIER]", "9,90 $ le lot (dès 1), logo à demander.",
       "Latex : prévenir les personnes allergiques ; vérifier les longueurs.", poids="Environ 4 kg le lot complet selon la fiche : colis lourd, à vérifier."),
 fiche("Corde à sauter roulements VAURE", "Corde à sauter rapide à roulements, poignées aluminium, réglable", "faire du cardio partout",
       "https://www.alibaba.com/product-detail/Adjustable-Cross-Training-Ball-Bearing-Aluminium_1600879114903.html", 3.60, 9, 24.90, ("OUI", "OUI", "OUI", "OUI", "OUI", "NON"),
       "Le cardio en salle est ennuyeux et la course dehors dépend de la météo.",
       "Je veux permettre à ceux qui s'entraînent de faire un cardio intense en 10 minutes, partout, avec une corde rapide et solide.",
       "OUI : du cardio sans abonnement.", "Double sauts au ralenti, son de la corde.",
       "[PRIX EN FRANCE À VÉRIFIER]", "3,60 $ (100 à 499), logo dès 200.",
       "Minimum 100 pièces ; vérifier la qualité des roulements."),
 fiche("Roue abdominale à rebond", "Roue abdominale à retour automatique, avec tapis pour les genoux", "renforcer ses abdos",
       "https://www.alibaba.com/product-detail/2023-Automatic-Rebound-Assistance-Exercise-Equipment_1600982083887.html", 5.00, 7, 29.90, OUI6,
       "Les abdos sont durs à travailler seul, et la roue classique fait mal au dos des débutants.",
       "Je veux permettre aux débutants de travailler leurs abdos en sécurité, grâce à une roue qui aide au retour.",
       "OUI : un exercice de salle à la maison.", "Le retour automatique filmé de côté.",
       "[PRIX EN FRANCE À VÉRIFIER]", "5 $ (2 à 99), logo dès 20.",
       "Pas de promesse « ventre plat » ; donner les consignes de posture."),
 fiche("Planche à pompes pliable", "Planche à pompes pliable multifonction avec poignées (pectoraux, épaules, triceps)", "réussir ses pompes",
       "https://www.alibaba.com/product-detail/Fitness-Equipment-Push-Up-Training-Board_1601280410343.html", 1.95, 6, 24.90, OUI6,
       "On fait toujours les mêmes pompes et on ne sait pas quels muscles on travaille.",
       "Je veux permettre à ceux qui s'entraînent chez eux de varier leurs pompes et de cibler chaque muscle, avec une planche à code couleur.",
       "OUI : remplace des machines pectoraux et épaules.", "Changement de position des poignées en une seconde.",
       "[PRIX EN FRANCE À VÉRIFIER]", "1,95 $ (10 à 99), logo à demander.",
       "Vérifier la solidité des poignées ; colis un peu long.", poids="Pliable, environ 1 kg."),
 fiche("Bandes de poignets VAURE", "Bandes de maintien des poignets pour la musculation (paire)", "protéger ses poignets à la salle",
       "https://www.alibaba.com/product-detail/Custom-Logo-Neoprene-Gym-Wrist-Strap_1601271673226.html", 2.20, 9, 24.90, ("NON", "OUI", "OUI", "NON", "OUI", "NON"),
       "Les poignets plient et font mal sur les charges lourdes (développé couché, épaules).",
       "Je veux permettre à ceux qui soulèvent lourd de protéger leurs poignets avec des bandes solides aux couleurs VAURE.",
       "NON : accessoire de confort, pas d'économie.", "Peu spectaculaire : à vendre en pack.",
       "[PRIX EN FRANCE À VÉRIFIER]", "2,20 $ la paire (100 à 499).",
       "Aucune promesse médicale ; minimum 100 paires."),
 fiche("Gourde isotherme VAURE", "Gourde isotherme en inox 500 ml, noire mate, gravée VAURE (prénom en option)", "boire frais à l'entraînement",
       "https://www.alibaba.com/product-detail/Custom-Logo-Soft-Touch-500ml-Stainless_1600995797320.html", 3.90, 7, 24.90, OUI6,
       "L'eau devient tiède pendant la séance, et les gourdes se perdent à la salle.",
       "Je veux permettre à ceux qui s'entraînent d'avoir une eau fraîche toute la séance, dans une gourde à leur nom qu'on ne perd plus.",
       "OUI : plus de bouteilles achetées à la salle.", "Gravure laser du prénom.",
       "Decathlon 12,99 € (0,5 L) ; LAKEN 23,90 €.", "3,90 $ (2 à 99), logo dès 200.",
       "Coût de la gravure à chiffrer ; certificat de contact alimentaire."),
 fiche("Sac de sport VAURE", "Sac de sport avec compartiment chaussures séparé", "transporter ses affaires de sport",
       "https://www.alibaba.com/product-detail/custom-portable-duffle-gym-sports-sneaker_60496480489.html", 7.54, 5, 39.90, ("NON", "OUI", "OUI", "OUI", "OUI", "NON"),
       "Les chaussures sales et les affaires mouillées se mélangent aux vêtements propres.",
       "Je veux permettre à ceux qui vont à la salle de séparer chaussures et affaires propres, dans un sac qui porte leur discipline.",
       "NON : pas d'économie par rapport à un sac classique.", "Le compartiment chaussures qui s'ouvre de côté.",
       "Sacs avec compartiment chaussures : 7,99 à 30,41 € (Decathlon Pro, 11teamsports).", "7,54 $ (300 à 999).",
       "Minimum 300 pièces (environ 1 950 €) ; concurrence forte à petit prix.", poids="Environ 700 g, colis moyen."),
 fiche("Serviette microfibre VAURE", "Serviette de sport en microfibre, séchage rapide, logo VAURE", "rester propre à la salle",
       "https://www.alibaba.com/product-detail/Wholesale-Custom-Digital-Printed-Quick-Dry_1600644861034.html", 1.25, 9, 24.90, ("NON", "OUI", "OUI", "NON", "OUI", "NON"),
       "La serviette en coton est lourde, met des heures à sécher et sent mauvais dans le sac.",
       "Je veux permettre à ceux qui s'entraînent d'avoir une serviette légère qui sèche vite, aux couleurs VAURE.",
       "NON : produit de confort.", "Peu spectaculaire : à vendre en pack.",
       "[PRIX EN FRANCE À VÉRIFIER]", "1,25 $ (50 à 499), impression du logo (Digital printed).",
       "Prix seul difficile à justifier : surtout en pack."),
]
for _f in FICHES:
    _f["cout"] = round(_f["usd"] * 0.86, 2)
    _f["marge"] = round(_f["revente"] - _f["cout"], 2)

SOURCES = list(_p.SOURCES) + [
 ("Decathlon Pro, lot de 3 bandes Domyos", "https://www.decathlonpro.fr/art-bande-elastique-10kg-id-2871089.html"),
 ("Sacs avec compartiment chaussures (Decathlon Pro)", "https://www.decathlonpro.fr/sac-sport-75l-hardcase-noir-id-8495884.html"),
 ("Sac Erima Six Wings (11teamsports)", "https://www.11teamsports.com/fr-fr/p/erima-six-wings-gr-m-sac-gris-c7232309"),
]
