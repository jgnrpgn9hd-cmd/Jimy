# Dossier VAURE : 10 produits COHÉRENTS pour une seule marque et une seule cible (stratégie Kosso).
# Marque : VAURE — slogan « Rien n'est offert. » — l'équipement de ceux qui s'entraînent, à la maison et à la salle.
# Méthode du support Scutify (niche → observation → cible → problème → pistes → idée → critères → 4 questions).
# Liens Alibaba et prix vérifiés le 14/11/2026. Coût = $ × 0,86. Ancienne version (10 niches) : dossier_v3_criteres_stricts.py.
import dossier_precedent as _p

DEMANDE = "18 millions de Français pratiquent le fitness au sens large (Observatoire Forme & Fitness 2026, Union Sport & Cycle)."
MODELE = "Kosso : une seule cible (le sportif), plusieurs produits sous des marques qui se répondent ; Hustle Wear pour les packs."
CIBLE = "Hommes et femmes de 18 à 35 ans qui s'entraînent à la maison ou à la salle et veulent progresser."
DECATHLON = "Concurrence : Decathlon vend les accessoires de base pas cher ; VAURE se démarque par la marque, le programme vidéo et les packs."


def fiche(court, nom, usage, lien, usd, liv, revente, criteres, probleme, idee, eco, wow, prix_france, fournisseur, vigilance, poids="Léger, petit colis.", q4=None):
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
        q4=q4 or "Oui pour la gamme complète ; seul, ce produit a beaucoup de concurrence.",
        prix_france=prix_france, angle_pub="Séance filmée à 6 h du matin, slogan « Rien n'est offert », défi du mois.",
        fournisseur=fournisseur, vigilance=vigilance + " " + DECATHLON)


OUI6 = ("OUI", "OUI", "OUI", "OUI", "OUI", "NON")
import dossier_v4_vaure_accessoires as _v4
_A = {f["court"]: f for f in _v4.FICHES}

def _q4(nom_court, texte, **maj):
    f = dict(_A[nom_court]); f.update(maj); f["q4"] = texte; return f

FICHES = [
 _q4("Kit barre + élastiques VAURE", "OUI : marché prouvé (SmartWorkout, l'exemple du support, vend un kit similaire 99,90 €), le programme vidéo rend le produit unique, léger, toute l'année.",
     court="Kit Full Body VAURE"),
 fiche("Kit Fessiers VAURE", "Kit fessiers : 3 bandes en tissu + 2 sangles de chevilles pour poulie + programme vidéo 30 jours", "muscler ses fessiers",
       "https://www.alibaba.com/product-detail/Zakerda-Non-Slip-latex-fabric-polyester_1601045479697.html", 6.51, 8, 34.90, OUI6,
       "On veut des fessiers plus toniques mais on ne sait pas quels exercices faire, les élastiques en latex roulent, et la salle n'a pas toujours de sangles.",
       "Je veux permettre à celles et ceux qui veulent des fessiers toniques de suivre un programme de 30 jours, à la maison et à la salle, avec tout le matériel dans une seule boîte.",
       "OUI : remplace les cours collectifs et un coach ; un kit au lieu de 2 achats séparés.", "Avant / après sur 30 jours, kickbacks à la poulie, bandes qui ne roulent pas.",
       "Bandes en tissu : lot de 3 Domyos 19,49 € (prix pro) ; sangles de chevilles 12,99 à 26,98 € la paire.", "Bandes 3,15 $ le lot (lien) + sangle de cheville 3,36 $ (https://www.alibaba.com/product-detail/Professional-Kickback-Ankle-Strap-Glute-Workouts_1601112137291.html).",
       "Le programme doit être sérieux (coach diplômé) ; pas de promesse de résultat chiffrée.",
       q4="OUI : l'entraînement des fessiers est une des plus grosses tendances fitness, la cible est passionnée, le kit + programme se distingue des bandes seules d'Amazon."),
 fiche("Kit Première Traction VAURE", "Kit traction : barre de porte sans vis + 5 bandes d'aide + défi « ta première traction en 30 jours »", "réussir sa première traction",
       "https://www.alibaba.com/product-detail/Pull-Up-Bars-Total-Upper-Body_1600346042225.html", 14.58, 4, 49.90, OUI6,
       "Faire une traction est un objectif que beaucoup n'atteignent jamais : pas de barre chez soi, et sans aide on stagne.",
       "Je veux permettre à ceux qui n'ont jamais réussi une traction d'y arriver en 30 jours chez eux, avec la barre, les bandes d'aide et le défi.",
       "OUI : un objectif atteint sans abonnement ni coach ; un kit au lieu de 2 achats.", "La première traction filmée au jour 30 : le format le plus partagé du fitness.",
       "Barre sans vis Decathlon 29,99 à 34,99 € seule ; bandes [À VÉRIFIER].", "Barre 3,99 $ (lien) + 5 bandes longues 10,59 $ (https://www.alibaba.com/product-detail/custom-eco-100-natural-latex-resistance_62078479442.html).",
       "Colis lourd et long : chiffrer la livraison ; préciser les portes compatibles (pas de placo ni de bois tendre). Marge juste sous 3 fois le coût.",
       poids="Colis long et lourd (barre + latex) : livraison plus chère.",
       q4="OUI : un objectif clair et émotionnel (« ma première traction »), un défi qui crée du contenu et une communauté, peu de marques le vendent comme ça."),
 fiche("Kit Dos & Récup VAURE", "Kit récupération : balle de massage double (cacahuète) + programme vidéo « dos libéré » de 10 minutes", "soulager son dos et récupérer",
       "https://www.alibaba.com/product-detail/nature-rubber-peanut-ball-massage-for_62410531730.html", 4.00, 9, 29.90, OUI6,
       "Dos et nuque tendus après le sport ou des heures assis ; une séance d'ostéopathe coûte 45 à 80 € et n'est pas remboursée.",
       "Je veux permettre aux sportifs et à ceux qui restent assis toute la journée de détendre leur dos en 10 minutes par jour, chez eux, avec une balle et un programme.",
       "OUI : 29,90 € au lieu d'une séance d'ostéo à 45-80 €.", "La balle qui roule le long de la colonne, soulagement visible sur le visage.",
       "[PRIX EN FRANCE À VÉRIFIER]", "Balle double en caoutchouc naturel : 4 $ (100 à 499), logo dès 100.",
       "Aucune promesse médicale (« détend », jamais « soigne ») ; conseiller un médecin si douleur forte.",
       q4="OUI : le mal de dos touche énormément de monde (sportifs et sédentaires), le produit est minuscule et pas cher, le programme fait la différence."),
 _q4("Roue abdominale à rebond", "NON : vendu partout pour quelques euros, rien ne le distingue durablement ; à garder en complément d'un kit."),
 _q4("Corde à sauter roulements VAURE", "NON : produit de base à petit prix chez Decathlon et Amazon, pas de raison d'acheter VAURE seule."),
 _q4("Ceinture de musculation VAURE", "NON : marché de passionnés mais très concurrencé ; utile en complément pour les pratiquants de force."),
 _q4("Gourde isotherme VAURE", "NON : Decathlon la vend 12,99 € ; seulement en goodies ou en pack."),
 _q4("Support téléphone magnétique de salle", "NON : des supports basiques coûtent moins de 1 € (Action) ; uniquement en complément."),
 _q4("Bandes de traction (lot de 5)", "NON seul (concurrence Amazon) ; OUI dans le Kit Première Traction, d'où sa présence dans le kit."),
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
