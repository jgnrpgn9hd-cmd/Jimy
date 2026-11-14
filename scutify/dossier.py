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
        pistes="Kit barre · bandes en tissu · bandes de traction · barre de traction de porte · corde à sauter · roue abdominale · sangles de chevilles · support téléphone magnétique · ceinture · gourde.",
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
       "https://www.alibaba.com/product-detail/custom-eco-100-natural-latex-resistance_62078479442.html", 10.59, 6, 39.90, OUI6,
       "On n'arrive pas à faire de tractions et on stagne.",
       "Je veux permettre à ceux qui n'arrivent pas encore à faire de tractions d'y arriver pas à pas, avec 5 niveaux d'aide et un programme.",
       "OUI : remplace plusieurs machines de musculation.", "Défi « ta première traction en 30 jours ».",
       "[PRIX EN FRANCE À VÉRIFIER]", "Lot de 5 bandes longues + poignées + ancrage de porte : 6,59 à 10,59 $ (dès 50), en stock.",
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
 fiche("Sangles de chevilles (paire)", "Paire de sangles de chevilles rembourrées pour poulie (fessiers, jambes)", "muscler ses fessiers à la poulie",
       "https://www.alibaba.com/product-detail/Professional-Kickback-Ankle-Strap-Glute-Workouts_1601112137291.html", 3.36, 9, 24.90, OUI6,
       "Sans sangle, impossible de faire les exercices fessiers à la poulie (kickbacks) : la salle n'en a pas toujours, ou elles sont sales et abîmées.",
       "Je veux permettre à celles et ceux qui travaillent leurs fessiers à la salle d'avoir leurs propres sangles, confortables et propres, pour tous les exercices à la poulie.",
       "OUI : plus besoin d'attendre ou d'utiliser le matériel abîmé de la salle.", "Kickbacks à la poulie filmés de profil, format star des vidéos fitness.",
       "Sangles de chevilles en France : 12,99 € (Sveltus) à 26,98 € (Prozis) la paire.", "3,36 $ le lot (100 à 999), 5,95 $ de 10 à 99 ; en stock (Ready to Ship).",
       "Tester la solidité de l'anneau et de la couture ; produit tendance sur Amazon (sources américaines)."),
 fiche("Barre de traction de porte VAURE", "Barre de traction de porte réglable, sans vis ni perçage", "faire des tractions chez soi",
       "https://www.alibaba.com/product-detail/Pull-Up-Bars-Total-Upper-Body_1600346042225.html", 3.99, 4, 34.90, OUI6,
       "Pas de barre de traction à la maison : impossible de travailler le dos et les bras sans aller à la salle, et on ne veut pas percer les murs.",
       "Je veux permettre à ceux qui s'entraînent chez eux de faire des tractions dans n'importe quelle porte, sans vis ni perçage, avec un programme pour progresser.",
       "OUI : l'exercice roi du dos sans abonnement de salle.", "Installation dans la porte en 30 secondes, première traction filmée.",
       "Decathlon : barres sans vis Corength à 29,99 € (70 cm) et 34,99 € (100 cm).", "3,99 $ (10 à 499).",
       "Vérifier la charge maximale et la largeur des portes compatibles ; préciser « pas de placo ni de bois tendre » comme Decathlon ; colis long et lourd (environ 1,5 à 2 kg, à vérifier).", poids="Colis long et plus lourd que le reste de la gamme : livraison plus chère."),
 fiche("Gourde isotherme VAURE", "Gourde isotherme en inox 500 ml, noire mate, gravée VAURE (prénom en option)", "boire frais à l'entraînement",
       "https://www.alibaba.com/product-detail/Custom-Logo-Soft-Touch-500ml-Stainless_1600995797320.html", 3.90, 7, 24.90, OUI6,
       "L'eau devient tiède pendant la séance, et les gourdes se perdent à la salle.",
       "Je veux permettre à ceux qui s'entraînent d'avoir une eau fraîche toute la séance, dans une gourde à leur nom qu'on ne perd plus.",
       "OUI : plus de bouteilles achetées à la salle.", "Gravure laser du prénom.",
       "Decathlon 12,99 € (0,5 L) ; LAKEN 23,90 €.", "3,90 $ (2 à 99), logo dès 200.",
       "Coût de la gravure à chiffrer ; certificat de contact alimentaire."),
 fiche("Support téléphone magnétique de salle", "Support téléphone magnétique pour machines de salle, à pince et aimant, rotatif", "se filmer et suivre son programme à la salle",
       "https://www.alibaba.com/product-detail/Duty-Magnetic-Gym-Desk-Phone-Holder_1601611499238.html", 1.60, 9, 24.90, OUI6,
       "Impossible de se filmer ou de lire son programme pendant la séance : le téléphone traîne par terre ou tombe des machines.",
       "Je veux permettre à ceux qui s'entraînent de fixer leur téléphone sur n'importe quelle machine pour se filmer, suivre leur programme ou regarder leur vidéo.",
       "OUI : remplace un trépied, et évite l'écran cassé.", "Le téléphone qui se colle d'un coup sur la barre de la machine.",
       "Supports magnétiques basiques à moins de 10 € ; support vélo magnétique Shapeheart 24,96 à 27 €.", "Aluminium, double aimant, rotation 360° : 1,60 $ (50 à 499), logo dès 1 000.",
       "Vérifier la tenue de l'aimant sur les machines qui vibrent ; les supports basiques sont très bon marché : la marque et le contenu font la différence."),
 fiche("Ceinture de musculation VAURE", "Ceinture de musculation 10 cm en néoprène, fermeture à verrouillage rapide", "protéger son dos sur les charges lourdes",
       "https://www.alibaba.com/product-detail/Custom-Wholesale-OEM-Custom-4-Inch_11000030802889.html", 6.90, 8, 34.90, OUI6,
       "Le bas du dos tire sur les squats et les soulevés de terre quand les charges montent, et on a peur de se blesser.",
       "Je veux permettre à ceux qui soulèvent lourd de sécuriser leur dos et de progresser en confiance, avec une ceinture qui se ferme en une seconde.",
       "OUI : moins de risque de blessure, donc moins de séances perdues et de soins.", "Fermeture rapide filmée avant une grosse série de squats.",
       "[PRIX EN FRANCE À VÉRIFIER]", "6,90 $ (5 à 99), logo et emballage dès 10 pièces.",
       "Aucune promesse médicale (« soutient » et non « soigne ») ; prévoir un guide des tailles."),
]
for _f in FICHES:
    _f["cout"] = round(_f["usd"] * 0.86, 2)
    _f["marge"] = round(_f["revente"] - _f["cout"], 2)

SOURCES = list(_p.SOURCES) + [
 ("Decathlon Pro, lot de 3 bandes Domyos", "https://www.decathlonpro.fr/art-bande-elastique-10kg-id-2871089.html"),
 ("Sacs avec compartiment chaussures (Decathlon Pro)", "https://www.decathlonpro.fr/sac-sport-75l-hardcase-noir-id-8495884.html"),
 ("Sac Erima Six Wings (11teamsports)", "https://www.11teamsports.com/fr-fr/p/erima-six-wings-gr-m-sac-gris-c7232309"),
 ("Sveltus, sangles de chevilles (FitnessBoutique)", "https://www.fitnessboutique.fr/products/sveltus-sangle-cheville-musculation-x2-prod-sve5660"),
 ("Prozis, sangles de chevilles", "https://www.prozis.com/lu/fr/prozis/sangle-de-cheville-paire-2-noir"),
 ("Shapeheart, support magnétique (Le Cyclo)", "https://www.lecyclo.com/fr-ca/products/support-velo-aimante-pour-smartphone-shapeheart"),
 ("Fastmoss, meilleures ventes TikTok Shop 2026 (États-Unis)", "https://www.fastmoss.com/blog/best-selling-products-by-category/"),
 ("Dropified, guide fitness TikTok Shop 2026", "https://www.dropified.com/blog/the-complete-2026-guide-to-selling-fitness-workout-products-on-tiktok-shop-from-activewear-to-supplements/"),
 ("Decathlon, barres de traction sans vis Corength", "https://www.decathlonpro.fr/barre-de-traction-verrouillable-100-cm-id-8588491.html"),
]
