# Reprise — Tableau Scutify « MES 10 IDÉES DE BUSINESS »

Colle ce fichier dans Claude Code (ou dépose-le dans le dossier du projet) pour reprendre là où on s'est arrêtés.

## Contexte
- Jairo remplit le modèle Scutify « MES 10 IDÉES DE BUSINESS » (formation Scutify Club, chapitre 1 : recherche de produits).
- Fichier actuel : `Mes_10_idees_business_RECUPERATION.xlsx` (2 onglets : « Mes 10 idées », « Arguments coach »).
- Script qui le génère : `build19.py` (s'appuie sur `build16.py`, lignes dans `rows19.py`). Lancer : `python3 build19.py`.

## Règles à respecter (toutes données par Jairo)
- Exactement 10 produits, pas plus, dans 10 niches différentes, utiles à tout le monde (pas réservés aux propriétaires d'animaux, de voiture, etc.).
- Ne pas changer la structure du tableau, seulement le remplir. Note N = 10 partout.
- Marge (colonne M) écrite en valeur, pas en formule : sinon elle affiche 0 sur téléphone.
- Prix de revente < 50 € et **honnête** : aligné sur ce que les gens paient vraiment en France. Toujours vérifier sur des sites français (Decathlon, Kaufland, ManoMano, touslesprix…).
- Marge nette ≥ 20 €, prix fournisseur < 15 €. Coût € = prix $ × 0,86.
- Produits qui se vendent déjà (Amazon, TikTok Shop, Instagram) et qui **répondent à un vrai problème**.
- Liens Alibaba précis vers une fiche produit en stock (jamais une page de recherche). Vérifier chaque lien avant de le mettre.
- Pas de couteaux. « Pas de vêtements » au départ, mais il a ensuite donné l'ensemble de sport pastel comme exemple → gardé, à confirmer avec lui.
- S'inspirer de la boutique de sa coach (NOXYA — confirmé par Jairo : instagram.com/noxya.france ; site noxya.com : récupération, oreiller ergonomique, rituel oreiller + parfum + masque) **sans la copier** : pas d'oreiller, masque, parfum ni bouchons d'oreille.

## Les 10 produits actuels — sport à la maison + soulagement, produits vendeurs (meilleures ventes Amazon.fr / Decathlon / Tibo InShape)
| # | Niche | Produit | ID Alibaba | Coût € | Revente € | Marge € |
|---|---|---|---|---|---|---|
| 1 | sport à la maison, confort au sol | Tapis de sport épais 8 mm | 1601223812663 | 6,86 | 29,90 | 23,04 |
| 2 | sport à la maison, renforcement | Kit Pilates barre + élastiques | 1601484459815 | 6,49 | 34,90 | 28,41 |
| 3 | sport à la maison, tonification | Poids silicone chevilles et poignets | 11000024198018 | 5,03 | 27,90 | 22,87 |
| 4 | sport à la maison, musculation et tractions | Pack d'élastiques de musculation | 1601381417434 | 1,63 | 24,90 | 23,27 |
| 5 | sport à la maison, haut du corps | Barre de traction de porte | 1600576737770 | 4,26 | 34,90 | 30,64 |
| 6 | récupération, courbatures | Mini pistolet de massage | 1601094578732 | 5,71 | 32,90 | 27,19 |
| 7 | soulagement, nœuds musculaires | Ventouse électrique intelligente | 1601007245215 | 3,52 | 29,90 | 26,38 |
| 8 | soulagement, colonne et posture | Étireur de dos réglable | 62547110690 | 0,90 | 24,90 | 24,00 |
| 9 | soulagement, dos et lombaires | Coussin de massage shiatsu chauffant | 60707079707 | 8,60 | 34,90 | 26,30 |
| 10 | soulagement, genoux | Genouillère chauffante à vibration | 1600625080875 | 9,46 | 39,90 | 30,44 |

## Modèle officiel Scutify
- Modèle vierge : `modele_scutify_vierge.xlsx`. Rempli par `remplir_modele.py` → `Support Scutify S01_Tableau recherche 10 idées de business.xlsx` (formules gardées, recalculées par LibreOffice pour l'affichage téléphone). Produits dans `produits.py`.
- Notation du modèle : note max 9 (case J = 1 pt seulement si coût > 25 €). Il faut marge > 3 × coût (revente > 4 × coût) pour avoir le point de la dernière case.
- Ligne 1 du modèle : formules différentes (bug du modèle, livraison doit être > 6) → kit Pilates à 8,0, les 9 autres à 8,5. Formule non modifiée.
- Fournisseurs des lignes 2, 5, 6, 7, 8, 9, 10 trouvés via moteur de recherche (Alibaba renvoie un captcha depuis l'environnement) : prix, stock et minimum de commande à confirmer sur la fiche.

## Écartés (et pourquoi)
- Pas assez « pour tout le monde » (remplacés) : projecteur ciel étoilé, masseur cuir chevelu, ponceuse à griffes. Aspirateur voiture encore en ligne 9 faute de remplaçant.
- Testés pour tout le monde, marge < 20 € au prix français : veilleuses détecteur, rasoir anti-bouloches, mini humidificateur, lampe de bureau, tire-bouchon électrique, caméra WiFi. Lunch box chauffante : coût 10,66 € (règle ×4 ratée). Batterie magnétique : iPhone seulement + lithium. Montre connectée : pas de fiche fiable (modèles copiés de l'Apple Watch).
- Doublons de niche retirés : ensemble de sport, tapis TPE (sport), masseur nuque, tapis d'acupression (massage/récupération). Bébé tenté : mouche-bébé (dispositif médical, MOQ 20), chauffe-biberon (coût > 15 €).
- Ancien pistolet (1600835742970), réveil lumière (60603683987), ancien projecteur (1601082100275) : coût trop haut pour la règle « marge > 3 × coût » du modèle (note 7,5). Réveil aussi saisonnier (hiver). Tapis EMS pieds : marge < 20 € au prix français (15-25 €).
- Hors niche : nettoyeur de vitres, aspirateur voiture, brosse électrique, rouleau anti-poils, tire-bouchon, détecteurs de fuite, lampe lune.
- Lien mort / sans stock : ancien pommeau (62176709032), ancien coussin lombaire (1601512094085), détecteurs (lien mobile redirigé).
- Marge < 20 € à prix honnête : chaussettes antidérapantes, gourde motivation, rouleau de massage, fontaine à chat, bouchons d'oreille.

## En attente
- FICHIER À RENDRE (demande « tableau complet sans rien modifier ») : `Support Scutify S01_Tableau recherche 10 idées de business.xlsx`, généré par `remplir_modele_strict.py` : seules les cases B-L des lignes 6-15 sont remplies, formules (dont la marge M), mise en forme et onglet unique du modèle intacts, recalculé par LibreOffice. La version enrichie (Arguments coach, Validation Scutify, 2e produits) est dans `Support Scutify S01 - version avec analyses.xlsx` (remplir_modele.py).
- « Les produits doivent être vendeurs » : classement potentiel de vente ajouté (colonne Validation Scutify). Coussin d'équilibre (le plus faible, concurrents 13,73-19,88 €) remplacé par la genouillère chauffante.
- Règle ajoutée par Jairo : des produits à plus de 50 € sont acceptés en « 2e produit » (upsell). Onglet « 2e produits » (upsells.py) : mini reformer pliable (69,90 €, coût 17,10 €), sangles de suspension (54,90 €, coût 34,40 €). Les 10 idées principales restent sous 50 €.
- Inspiration Tibo InShape (tiboinshape.com, marque TeamShape : élastiques, élastiques à poignées, sangles de suspension, pack tapis/corde/élastique, rouleau). Ajoutés : pack d'élastiques, barre de traction (note 7,5, volumineuse). Retirés : bouillotte, masseur nuque-épaules. Écartées : sangles de suspension (Decathlon 59,99 €, pas de fiche < 15 €).
- Lignes 5, 6, 10 remplacées (demande de Jairo) : ventouse électrique, étireur de dos, coussin d'équilibre. Écartés : rouleau vibrant (France ≥ 89 €), hula hoop intelligent (France 41-46 € mais pas de fiche Alibaba avec prix).
- Bruit blanc remplacé par genouillère chauffante (Wenzhou Huifan 11 $ dès 100). Écartés : masseur de pieds 3-en-1 (Amazon dès 19,99 €), ceinture lombaire chauffante (fournisseur 18-22 $).
- Méthode demandée : reproduire les meilleures ventes Amazon.fr / Decathlon de la niche. Pages bloquées (captcha) → classements lus via moteur de recherche. Ajouts : coussin shiatsu (n°1 Amazon coussins de massage, Phenitech 10 $), masseur nuque-épaules chauffant. Écartés : mini reformer (75-90 € > 50 €), kit accessoires Pilates (pas de fiche avec prix). Colonne « Preuve que ça se vend » ajoutée dans Validation Scutify.
- Jairo choisit : « kit Pilates et sport à la maison, puis soulagement ». Nouvelle gamme de 10 (3 sport + 7 récupération/soulagement). Ajout poids silicone (Xiamen Quadra 5,85 $ la paire). Écartés : anneau Pilates (Amazon dès 11 €), élastiques tissu (Decathlon 9,99 €).
- Support Scutify 01 reçu (critères, 4 questions, idée de business = cible + problème, éviter lourd/volumineux). Ajout de l'onglet « Validation Scutify » (analyse.py). Rehausseur (volumineux) remplacé par le kit Pilates (même type que l'exemple du support). Top 3 recommandé : kit Pilates, pommeau filtrant, anti-acariens.
- DERNIÈRE DEMANDE (validée) : « vraie problématique importante + effet waw ». Liste de 10 reconstruite avec uniquement des fiches déjà vérifiées. Pistes luxe testées sans succès : sous-verres travertin (pas de fiche), carafe de chevet (marge), plateau travertin (fournisseur 17,40 $).
- Demande : « petits objets qui répondent à une problématique, thème cosy et moderne » (capture Bonsoirs). Barre lumineuse et organisateur de clés remplacés par chauffe-tasse et bouillotte noyaux de cerise. Pistes cosy sans fiche exploitable : lampe chauffe-bougie (France 25-60 €, fournisseurs 7-12 $ mais fiche avec prix = 11,96 $ MOQ 600 ; attention proche du parfum), plateau d'accoudoir bois (France 28-40 €). Bougies LED : France ~20 € le lot, marge trop faible. « 12h home » introuvable.
- Inspiration Bonsoirs (bonsoirs.com, linge de maison français) : plaid gaze de coton et serviettes de table lin lavé à la place du chauffe-tasse et du repose-pieds. Serviettes de bain gaufrées écartées (France 14-31 €). Oreiller/taies exclus (coach).
- Jairo veut des produits « image de marque » (type Oakywood, Orbitkey, Woodcessories). Kit Pilates et pommeau remplacés par sous-main feutre et organisateur de clés métal. Écartés : support casque bois (fournisseur 13-18 $), housse PC feutre (pas de prix fournisseur). Cache-multiprise mis en ligne 1 pour ne pas profiter de l'erreur de formule de la ligne 1.
- Jairo a demandé des produits télétravail en remplaçant seulement quelques lignes : organisateur de tiroir, pont de baignoire et boîte à pain remplacés par barre lumineuse d'écran, repose-pieds, rehausseur d'écran bambou. Écartés : support PC alu (fournisseur 14,50 $, France 16-25 €), tapis de bureau (pas de fiche avec prix).
- Jairo trouve que les produits « font Temu / chinois ». Il a choisi l'univers « maison design » (bois, céramique, verre, couleurs neutres). Lignes 7-10 remplacées (station d'accueil, organisateur tiroir, pont de baignoire, boîte à pain) ; minimums de commande élevés (200-500) car produits design. Testés sans succès : horloge bois (pas de fiche), panier à linge (France 14-25 €), plateau de lit (pas de fiche). Idées design validées en prix France mais sans fiche Alibaba trouvée : pot auto-arrosant céramique (34,90 €), porte-clés mural bois aimanté (20-37 €), applique murale en bois (30-75 €), moulins électriques effet bois (30-57 €), tapis de bain en pierre (15-25 €, lourd). Pont de baignoire bambou : MOQ 500.
- Boutiques aimées par Jairo : Warmly Decor (préférée), Sage & Sill, Articture, Triangl. Univers déco / maison. Pot auto-arrosant (France 34,90 €) : pas de fiche fournisseur trouvée. Lampe de croissance : France 10-30 €, marge trop faible.
- Jairo vérifie sur son téléphone les fiches des lignes 2, 3, 5, 6, 7, 8, 9, 10 (prix, stock, minimum). Ligne 7 : prix petite quantité inconnu, coût compté à 10 $.
- Lignes 8, 9, 10 (blender, brosse électrique, balance) : produits gagnants en dropshipping mais aussi vendus en magasin. À remplacer si Jairo trouve mieux ; pistes testées qui ne passent pas : posture, anti-ronflement, séchoir chaussures, nettoyeur ultrasons, planche titane, défroisseur, coussin gel (pas de fiche), sacs sous vide, purificateur fruits, thermomètre cuisson sans fil (pas de prix fournisseur fiable), nettoyeur vapeur à main (coût > 15 €). Piste possible : station de charge 3-en-1 pliable (France 25-40 €, fournisseur ~7,50 $) mais surtout pour Apple et fiche exacte non trouvée.


## Mise à jour : niche « Lumière d'ambiance sans fil » (choix de Jairo)
Chaque produit = un vrai problème + un effet waouw. Ancienne liste sport : produits_sport.py, upsells_sport.py.
| N° | Produit | Problème | Waouw | Coût | Revente | Marge |
|---|---|---|---|---|---|---|
| 1 | Lampe de chevet induction | câbles, téléphone à plat | on pose le tél : il charge + lumière | 10,68 | 44,90 | 34,22 |
| 2 | Applique aimantée 360° | noir, interdit de percer | applique d'hôtel en 10 s | 6,36 | 29,90 | 23,54 |
| 3 | Lampe champignon | plafonnier agressif le soir | ambiance restaurant partout | 5,68 | 29,90 | 24,22 |
| 4 | Lampe dorée de table | dîner sous plafonnier, bougies | lampe des restos chics | 5,14 | 39,90 | 34,76 |
| 5 | Lampe livre bois | lire sans réveiller l'autre | livre qui s'illumine à 360° | 8,90 | 35,90 | 27,00 |
| 6 | Lampe coucher de soleil | hiver sombre, photos ternes | golden hour sur le mur | 2,92 | 24,90 | 21,98 |
| 7 | Projecteur vagues | stress du soir | plafond océan | 4,39 | 29,90 | 25,51 |
| 8 | Projecteur ciel étoilé | peur du noir, insomnie | chambre galaxie | 7,73 | 34,90 | 27,17 |
| 9 | Lanterne solaire rotin | balcon sans prise | s'allume seule, ombres | 6,02 | 39,90 | 33,88 |
| 10 | Lampe photo personnalisée | quoi offrir ? | la photo apparaît allumée | 2,56 | 34,90 | 32,34 |
En attente : vérifier les liens Alibaba sur téléphone (captcha ici), surtout n°4 ; trouver des 2e produits > 50 €.

## Mise à jour : nouvelle liste (Jairo : « recommence », avec kit Pilates et pommeau filtrant)
10 niches différentes, chaque produit = problème + effet waouw. Listes précédentes gardées : produits_sport.py, produits_lumiere.py.
1 Aspirateur anti-acariens UV (allergies) · 2 Kit Pilates (Pilates maison) · 3 Pommeau filtrant (eau calcaire) · 4 Hydropulseur (gencives) ·
5 Ventouse électrique (récupération) · 6 Masseur cervical (télétravail) · 7 Projecteur ciel étoilé (sommeil) · 8 Lampe photo personnalisée (cadeau) ·
9 Applique aimantée (locataires) · 10 Lampe de chevet induction (chambre sans câbles). 2e produit : mini reformer pliable (avec le kit Pilates).

## Mise à jour : lignes 4 à 10 remplacées (demande de Jairo)
Gardés : 1 Aspirateur anti-acariens, 2 Kit Pilates, 3 Pommeau filtrant. Nouveaux : 4 Mini pistolet de massage, 5 Genouillère chauffante,
6 Coussin shiatsu chauffant, 7 Lampe livre en bois, 8 Projecteur vagues, 9 Lampe coucher de soleil, 10 Lampe champignon. Ancienne liste : produits_v3.py.

## Mise à jour : « des vrais trucs » → lignes 4 à 10 = vrais best-sellers 2026 (TikTok Shop, Amazon)
4 Épilateur IPL (49,90 €, note 7,5 car marge < 3× coût) · 5 Brosse soufflante une étape · 6 Masseur cuir chevelu étanche · 7 Appareil lifting microcourant ·
8 Détartreur dentaire ultrasons · 9 Brosse vapeur animaux · 10 Pistolet haute pression sans fil. Liste précédente : produits_v4.py.

## Contrôle avec le support PDF Scutify : pistolet haute pression retiré (trop lourd, le support dit d'éviter), remplacé par la lampe photo personnalisée (critère « Unique » + « Besoin / Passion »).

## Mise à jour : autres niches (sommeil, alimentation…) — liste précédente : produits_v5.py
1 Aspirateur anti-acariens · 2 Kit Pilates · 3 Pommeau filtrant · 4 Épilateur IPL · 5 Réveil lumière (sommeil) · 6 Boîte repas chauffante (repas au travail) ·
7 Blender portable (alimentation saine) · 8 Masseur cervical (télétravail) · 9 Brosse vapeur (animaux) · 10 Lampe photo personnalisée (cadeau).

## Mise à jour : « que des 10/10 » — 10/10 impossible avec les formules du modèle (max 8,5 en lignes 2-10, 9,5 en ligne 1 ; colonne O ne donne 1 point que si le coût > 25 €).
Tous les produits sont au maximum possible. IPL passé en 2e produit (59,90 €), boîte repas remplacée par l'applique aimantée, hydropulseur à la place de l'IPL, blender à 44,90 €. Liste précédente : produits_v6.py.

## Mise à jour : produits simples « dont tout le monde a besoin + quelque chose en plus » (logique de la coach, sans copier oreillers ni bouchons)
1 Brosse vapeur animaux · 2 Kit Pilates · 3 Pommeau filtrant · 4 Coussin d'assise coccyx · 5 Parapluie inversé · 6 Brosse à dents sonique ·
7 Bouillotte noyaux de cerise · 8 Chauffe-tasse · 9 Applique aimantée · 10 Aspirateur anti-acariens. Liste précédente : produits_v7.py.

## Mise à jour : 1 et 4-10 refaits, univers bien-être à la maison (comme Pilates et pommeau). Liste précédente : produits_v8.py
1 Hydropulseur · 2 Kit Pilates · 3 Pommeau · 4 Tapis d'acupression · 5 Diffuseur flamme · 6 Gourde motivante 2 L · 7 Lampe de luminothérapie · 8 Blender portable · 9 Masseur cervical · 10 Plaid gaze de coton.

## Mise à jour : marque sport et bien-être (accessoires running/Pilates/fitness + 1 legging). Liste précédente : produits_v9.py
1 Écouteurs oreilles libres · 2 Kit Pilates · 3 Pommeau · 4 Corde sans corde · 5 Bandes en tissu · 6 Legging push-up · 7 Poids silicone · 8 Tapis 8 mm · 9 Mini pistolet · 10 Gourde 2 L.

## Ligne 1 : écouteurs remplacés par un t-shirt de sport mixte anti-odeur (ions d'argent) — lien = t-shirt mixte séchage rapide, version argent à faire confirmer par le sourcing Scutify.

## Ligne 10 : gourde remplacée par des lunettes de sport polarisées enveloppantes (demande de Jairo, photo d'inspiration).

## Améliorations : corde à sauter → brassière dos nu (short 2 en 1 écarté : pas de fiche fournisseur), tapis 8 mm → tapis Pilates PU premium, Pack Pilates complet (59,90 €) ajouté en 2e produit.

## Prix de revente baissés (demande de Jairo) en gardant marge ≥ 20 € et > 3 × coût ; Pack Pilates à 49,90 €.
