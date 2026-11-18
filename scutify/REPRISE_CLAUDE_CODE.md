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

## Ligne 3 : pommeau remplacé par un lot de 3 chaussettes de Pilates antidérapantes à logo brodé.

## ✅ VERSION FINALE (validée par Jairo : « c'est top »)
Marque sport et Pilates. Fichier à rendre : « Support Scutify S01_Tableau recherche 10 idées de business.xlsx » (modèle non modifié, colonnes B à L).
| N° | Produit | Coût | Revente | Marge | Note |
|---|---|---|---|---|---|
| 1 | T-shirt de sport mixte anti-odeur (ions d'argent) | 6,24 | 29,90 | 23,66 | 9,5 |
| 2 | Kit Pilates barre + élastiques | 6,49 | 29,90 | 23,41 | 8,5 |
| 3 | Chaussettes de Pilates antidérapantes (lot de 3, logo brodé) | 4,59 | 24,90 | 20,31 | 8,5 |
| 4 | Brassière de sport dos nu | 6,39 | 26,90 | 20,51 | 8,5 |
| 5 | Bandes élastiques en tissu (lot de 3) | 2,14 | 22,90 | 20,76 | 8,5 |
| 6 | Legging sans couture push-up | 8,08 | 34,90 | 26,82 | 8,5 |
| 7 | Poids en silicone chevilles et poignets | 5,03 | 25,90 | 20,87 | 8,5 |
| 8 | Tapis de Pilates PU premium | 11,17 | 49,90 | 38,73 | 8,5 |
| 9 | Mini pistolet de massage | 6,87 | 29,90 | 23,03 | 8,5 |
| 10 | Lunettes de sport polarisées | 4,12 | 29,90 | 25,78 | 8,5 |
2e produits : Pack Pilates complet 49,90 € · Mini reformer pliable 69,90 € · Ensemble brassière + legging 54,90 €.
À faire par Jairo : vérifier les 10 liens sur téléphone ; demander au sourcing Scutify la version ions d'argent du t-shirt (+ certificat), le MOQ des lunettes (300) et des chaussettes (50), la gravure des lignes sur le tapis ; échantillons legging, brassière et t-shirt.

## Vérification des liens (recherche web) : seul le mini pistolet (1601094578732) est indexé — 5,99-7,99 $, MOQ 20, coût mis à jour à 6,87 €. Les 9 autres fiches n'apparaissent pas dans les moteurs de recherche : à vérifier sur téléphone.

## Fichier à rendre refait à partir du modèle envoyé par Jairo (identique au modèle vierge) avec remplir_modele_exact.py : seul le XML des cellules B-L (lignes 6-15) et les valeurs calculées M-U changent ; tout le reste est identique à l'octet près. Valeurs vérifiées avec LibreOffice.

## Liens Alibaba visibles en entier : colonne C élargie (50), retour à la ligne, lignes 6-15 à 54 de haut (seules modifications de mise en forme).

## 10/11/2026 — liens revérifiés par recherche web : 6 fiches retrouvées (chaussettes, brassière, bandes, legging, poids, pistolet). 4 remplacées par des fiches retrouvées : t-shirt 1600464054100, kit Pilates 1600138273887 (6,79 €), tapis 1601380668532 (9,98 €), lunettes 1600996492614 (2,53 €).

## 11/11/2026 — Nouvelle méthode de vérification (verifier_liens.py) : page publique alibaba.com/product-introduction/... (sans captcha). Page complète = fiche active ; 404 = supprimée ; page courte = douteuse (cas du t-shirt signalé indisponible par Jairo).
9 fiches sur 10 ont une page complète. Seuls les poids en silicone (11000024198018) ont une page courte : à vérifier sur téléphone.
Fournisseurs changés : t-shirt 62425576986 (séchage rapide, anti-odeur en option), kit Pilates 1600918081475, chaussettes 1601283200184, brassière SHINBENE 1601296353804, bandes LADYGLOW 60826233712, legging Aogu 1600792608872, tapis 1600710516169, lunettes Twinshield 1600520112418.

## 13/11/2026 — Montée en gamme : t-shirt 100 % à ton design (dinsungo 1600179459632, 6,87 €) ; legging SHINBENE Classic 3.0 (1600198277985, 5,15 €), même fabricant que la brassière ; ensemble brassière + legging mis à jour (marge 43,74 €).

## 13/11/2026 — Jairo : tout marche sauf les lunettes (Twinshield) ; t-shirt jugé démodé. T-shirt → oversize acid wash « pump cover » (EASTBAY SPORTS 10000024543437, 8,17 €, revente 32,90 €). Lunettes → YUEDIO YD01 (1601036363271, 4,30 €). NB : la vérif « page complète » n'est pas fiable à 100 % (Twinshield complète mais indisponible ; poids page courte mais OK).

## Lunettes : modèle iRun choisi par Jairo (1601430271723), 7,48 $ dès 500 pièces → 6,43 €.

## T-shirt : style « technique ajusté » choisi par Jairo → t-shirt running à bandes réfléchissantes (1601429490635), 5,05 €, revente 29,90 €.

## T-shirt : modèle d'inspiration Myprotein (photo de Jairo) → t-shirt d'entraînement ajusté stretch (1600996990256), 3,44 €, revente 24,90 €.

## T-shirt : modèle choisi par Jairo (1601857690130, sans couture dry fit), 8,57 $ → 7,37 €, revente 29,90 €.

## 13/11/2026 — Remplacés (demande de Jairo) : kit Pilates → short 2 en 1 (1600202475864), bandes → gobelet isotherme 1,2 L (1601725774684), poids → sac de sport compartiment chaussures (60496480489, min. 300), pistolet → casquette running (1600612754499). Pack Pilates remplacé par Pack running 69,90 € en 2e produit.

## 13/11/2026 — Cap homme / mixte, inspiré d'ACT Running et de Fitt Insider (Pilates mixte). Brassière → veste coupe-vent (1600626499514), legging → haut running demi-zip (1600132015048). Ensemble brassière + legging retiré des 2e produits.

## 13/11/2026 — Cible validée par Jairo : HOMME TRAINING / RUNNING. Liste : t-shirt sans couture, short 2 en 1, mini pistolet (récupération, lien qui marchait), veste coupe-vent, gobelet, haut demi-zip, sac, gilet d'hydratation (1601644236868, min. 500), casquette, lunettes iRun. Tapis et chaussettes Pilates retirés ; mini reformer retiré des 2e produits (reste : Pack running 69,90 €).

## Veste (1601972754417, 7,31 €) et ensemble demi-zip haut + pantalon (1600669525223, 12,90 €, revente 49,90 €, note 7,5) choisis par Jairo.

## 13/11/2026 — NOUVELLE NICHE choisie par Jairo : ACCESSOIRES DE BUREAU (inspiration Neymo Gaming). Liste précédente (homme running) gardée dans produits_running.py / upsells_running.py.
1 Station 3 en 1 · 2 Sous-main XXL cuir · 3 Barre lumineuse RGB · 4 Support PC alu · 5 Repose-poignets · 6 Tapis de souris XXL personnalisé · 7 Organiseur bambou chargeur · 8 Plateau range-câbles · 9 Chauffe-tasse · 10 Masseur cervical. 2e produits : Pack setup parfait 69,90 €, Pack bureau sans câbles 74,90 €.

## 13/11/2026 — « Il faut que ça réponde à une problématique » : niche resserrée sur BUREAU SANS DOULEUR. 1 Souris verticale · 2 Support PC · 3 Repose-poignets · 4 Coussin lombaire · 5 Coussin coccyx · 6 Repose-pieds · 7 Barre lumineuse · 8 Lunettes anti-lumière bleue · 9 Masseur cervical · 10 Luminothérapie. 2e produits : Pack dos et nuque 64,90 €, Pack poignets et yeux 69,90 €. Version précédente : produits_bureau_v1.py.

## 13/11/2026 — Focus AMÉLIORATION DES SETUPS (choix de Jairo). 1 Station 3 en 1 · 2 Tapis XXL personnalisé · 3 Barre lumineuse · 4 Bande LED rétroéclairage (1601252593551) · 5 Range-câbles · 6 Support casque alu (1600507508110) · 7 Support PC · 8 Repose-poignets · 9 Tiroir caché (1601321690382) · 10 Souris verticale. 2e produits : Pack setup clean 69,90 €, Pack ambiance et yeux 54,90 €. Version « bureau sans douleur » gardée : produits_bureau_sans_douleur.py.

## 13/11/2026 — Focus RANGEMENT DU SETUP « zéro câble, zéro bazar ». 1 Tiroir caché · 2 Pegboard à pince (1600980196791) · 3 Range-câbles · 4 Cache-multiprise (1600399341648) · 5 Réhausseur bambou tiroir (62506404476) · 6 Support casque · 7 Support vertical PC (1601366620287) · 8 Gaine (1601004477467) · 9 Organiseur bambou chargeur · 10 Station 3 en 1. Packs : zéro câble 54,90 €, bureau rangé 74,90 €. Version précédente : produits_setup_v1.py.

## 14/11/2026 — Angle Instagram ajouté pour chaque produit (onglet Validation) + style de marque noir mat + bois clair.

## 14/11/2026 — RENDU FINAL (Jairo : « Ok go ») : le meilleur produit de chacune des 10 niches étudiées, pour comparer avec les notes puis choisir avec la coach.
1 Kit Pilates · 2 Pommeau filtrant · 3 Lunettes iRun · 4 T-shirt sans couture · 5 Tapis XXL personnalisé · 6 Pegboard · 7 Souris verticale · 8 Gobelet isotherme · 9 Lampe photo personnalisée · 10 Brosse vapeur. 2e produits : mini reformer, Pack running, Pack bureau rangé. Listes complètes par niche gardées dans produits_*.py.

## 14/11/2026 — Lignes 6 à 10 remplacées : brosse soufflante (cheveux), hydropulseur (gencives), diffuseur flamme (air sec), tapis d'acupression (stress), blender portable (alimentation).

## Lignes 6-10 remplacées : un produit par niche donnée par Jairo
6 Rasoir de sûreté zéro déchet (éco-responsable) · 7 Bouillotte rechargeable velours (maison/confort) ·
8 Baguette lumière rouge visage (lumière rouge) · 9 Paille filtrante randonnée (outdoor) · 10 Kit gua sha quartz rose (bien-être).
Lignes 1-5 inchangées. À faire confirmer : minimum 500 pièces pour la baguette, 100 pour le rasoir.

## « S'adapter à la demande »
Chaque produit des lignes 6-10 part maintenant d'une pratique réelle des Français (ligne « DEMANDE » dans l'argument).
Ligne 7 : bouillotte remplacée par le coussin lombaire pour le télétravail (22 % des salariés, DARES 2024).
Rando : 30 millions de randonneurs en 2025 (FFRandonnée).

## « Pas de produits qui font chinois »
Ligne 6 : rasoir Haward laiton noir mat (1600349040668). Ligne 7 : coussin lombaire housse velours WM-08211 (60747546667).
Ligne 9 : gourde filtrante inox 304 (1601125828345) à la place de la paille plastique. Lignes 8 et 10 gardées (pas de version alu < 15 € trouvée pour la baguette ; gua sha déjà en coffret luxe).

## Concept marque Run Club (inspiré de Hustle Wear)
produits_marque_run.py + CONCEPT_MARQUE_RUN_CLUB.md + « Concept marque Run Club - tableau Scutify.xlsx ». Le tableau principal ne change pas.
remplir_modele_exact.py accepte maintenant PRODUITS=module et SORTIE=nom de fichier.

## Tableau principal = marque Run Club
produits.py = Run Club (copie de produits_marque_run). Ancienne version 5 niches premium sauvegardée dans produits_5niches_premium.py / upsells_5niches_premium.py.

## 10 idées = 10 niches différentes
1 Run Club t-shirt à message, 2 Pilates, 3 douche filtrante, 4 tapis souris, 5 rasoir laiton, 6 coussin lombaire, 7 baguette lumière rouge, 8 gourde filtrante inox, 9 gua sha, 10 mini pistolet de massage (récupération). 2e produits : mini reformer, pack running, pack Run Club.

## Lignes 4, 5, 9 remplacées
4 brosse vapeur chat (1601205365476), 5 sachets silicone (1600486657839), 9 masseur cuir chevelu GX-608 (1600955718968).

## Version « parfaite » : 10 idées passées dans la méthode Scutify (14/11/2026)
Source unique des données : dossier.py (fiches complètes : niche, observation, cible, problème, pistes, idée de business,
critères, 4 questions, demande chiffrée avec source, boutique modèle, prix France, fournisseur, points à vérifier).
construire_tableau.py génère produits.py, upsells.py et RECHERCHE_IDEES_METHODE_SCUTIFY.md, et vérifie les règles.
remplir_modele.py : l'onglet « Validation Scutify » est remplacé par « Fiches méthode Scutify » (une fiche par idée) ; mise en page PDF sur 1 page de large.
Inspirations : SmartWorkout (exemple du support), Hearble (2e boutique de Baptiste : appareils auditifs 249 $ au lieu de 3 000-5 000 $), Hustle Wear.
Les 10 : Pilates, blanchiment dentaire PAP, t-shirt Run Club, bracelet acier gravé, pommeau filtrant, gourde filtrante inox (filtre céramique),
coussin lombaire, baguette lumière rouge, micro sans fil, mini pistolet de massage. 2e produits : pack running, pack Run Club, pack télétravail
(le mini reformer est retiré : fiche Alibaba supprimée).
Ordre de travail : python3 construire_tableau.py && python3 remplir_modele_exact.py "$F" && python3 remplir_modele.py

## Marque de bijoux anti-oxydation (14/11/2026)
Demande de Jairo : une marque de vêtements « à problème » est compliquée, faire plutôt une marque de bijoux qui répond à l'oxydation.
Ligne 4 du tableau : « Créoles dorées waterproof » (acier inoxydable doré PVD, 1601031342027, 3,35 $ → 2,88 €, revente 29,90 €, note 8,5)
à la place du bracelet gravé à message. 2e produit ajouté : coffret trio waterproof 59,90 € (créoles + collier cœur 1600374590245
+ jonc 1601828784456 + écrin 1601632875678). Concept complet : CONCEPT_MARQUE_BIJOUX.md (gamme femme + ligne homme, règles DGCCRF/REACH,
« plaqué or » interdit sous 3 microns, pas de « sans nickel » pour le 316L, lancement visé : Saint-Valentin).
Le t-shirt Run Club reste en ligne 3 (idée la plus faible, 7/10).

## Corrections (14/11/2026)
Ligne 3 : t-shirt Run Club → lunch box chauffante (1601609058033, 9,50 $, 34,90 €). Ligne 7 : coussin lombaire → barre lumineuse d'écran
(1601885292435, 10,37 $, 39,90 €, face à BenQ ~139 €). 2e produits : pack running et pack Run Club retirés, pack télétravail → pack bureau du soir
(barre + support portable 1600556043196). Pages de vente 03 et 07 refaites (maquettes_sites).
Écartés après vérification : spray à huile (4 à 15 € en France, pas de marge), brosse électrique (prix > 15 € ou minimum 500), tapis diatomite (5 à 18 € en France).

## Version « critères stricts » (prompt sourcing Scutify) — 14/11/2026
dossier.py = 10 fiches (5 reprises de dossier_precedent.py + 5 nouvelles) : Pilates, créoles, coffret 3 bijoux, chaîne homme,
sac cabine 40×30×20, cubes de compression, gourde isotherme, gourde filtrante, pommeau, lunettes Y2K.
Retirés (électronique ou cosmétique) : blanchiment, lunch box chauffante, barre lumineuse, baguette LED, pistolet de massage.
2e produits : pack voyage 59,90 €, pack famille 3 gourdes gravées 69,90 €. Pages de vente refaites (maquettes_sites, 2 en thème sombre).
Notes : sac cabine 7,25 (pas d'effet waouw, marge < 3 × coût), lunettes 6 (pas de problème réel, saisonnier).

## Gamme cohérente VAURE (14/11/2026)
Demande : cohérence entre tous les produits. dossier.py = 10 produits sport VAURE (kit, bandes tissu, bandes traction, corde, roue abdo,
planche à pompes, bandes de poignets, gourde, sac, serviette). Version 10 niches gardée dans dossier_v3_criteres_stricts.py.
Packs : Home Gym 89,90 €, Salle 79,90 €. Page d'accueil VAURE mise à jour (plus de chaîne).

## Serviette et bandes de poignets remplacées
Ligne 7 : barre de traction de porte (1600346042225, 3,99 $, 34,90 €). Ligne 10 : ceinture de musculation (11000030802889, 6,90 $, 34,90 €). Packs : Home Gym, Salle (sac + gourde + ceinture), Traction (barre + bandes).

## Produits tendance 2026
Planche à pompes → sangles de chevilles (1601651362272) ; sac de sport → support téléphone magnétique (1601358956127). Packs mis à jour.

## Fiches non disponibles en France (3, 6, 9) remplacées
3 : 62078479442 ; 6 : 1601112137291 ; 9 : 1601611499238.

## Test question 4 (30 000 €) appliqué
4 kits OUI (Full Body, Fessiers, Première Traction, Dos & Récup) en lignes 1-4 ; 6 accessoires NON gardés en lignes 5-10 comme compléments. Version précédente : dossier_v4_vaure_accessoires.py.

## 14/11/2026 — Nouvelle analyse USA toutes niches
ANALYSE_10_PRODUITS_USA_GENERAL.md : 1 GO (plaid photo animal 39,90 €, gain 22,74 €), 1 à tester (collier cuir gravé), 8 NON.

## 14/11/2026 — Carte NFC (inspiration ZYKO) passée n° 1
Fournisseur 62022555600 (0,15-0,35 $, min 100). Vendue 29,99 €, gain ~23 €. Correcteur de posture retiré du tableau.

## 14/11/2026 — Suite recherche : plaque NFC avis Google (GO, 1601208042548), médaille NFC animal (à tester, 1600053434071), plaque Spotify (NON)

## 14/11/2026 — Tableau final USA : carte NFC n° 1 + produits d avant (7 verts, traction à tester, kit dos NON). Ancienne version : ANALYSE_USA_GENERAL_v1_animaux_nfc.md

## 14/11/2026 — ANALYSE_PRODUITS_INNOVANTS.md : 10 produits hors du commun ; recommandation kit pochettes verrouillables 39,90 € (gain 22,90 €)

## 14/11/2026 — Coach : pas de produits NFC (trop complexe). Retirés carte, plaque avis, médaille. Kit pochettes = n° 1 partout. Ajoutés bouchons d oreilles (à tester) et protège pare-brise (NON).

## 14/11/2026 — ANALYSE_OBJETS_REINVENTES.md : objets du quotidien réinventés sans appli. GO : pochettes (reco), kit WC lavant 49,90 € (gain 30,60 €).

## 14/11/2026 — ANALYSE_OBJETS_REINVENTES.md version tout vert (10/10). v1 gardée.

## 14/11/2026 — Kit Soirée sans écran amélioré (+ jeu de 150 questions) 49,90 €, gain 31,95 €. Section rétro : écouteurs chromés et argentique 🟡, journal 5 ans NON.

## 14/11/2026 — Nouvelle direction cocooning (ANALYSE_COCOONING.md) : 5 premiers produits, 2 GO, 3 jaunes. En attente de validation de la direction.

## 14/11/2026 — ANALYSE_COCOONING.md : 10 verts toute l annee (bracelets lestés reco). v1 gardée.

## 14/11/2026 — ANALYSE_PINTEREST.md : 10 verts inspirés des tendances Pinterest (cachet de cire, carnet cuir, kits créatifs, Pilates).

## 14/11/2026 — NICHES_PINTEREST.md : 3 niches viables, reco Pilates maison.

## 14/11/2026 — Produit principal changé : Kit Pilates Plus 39,90 € (gain 26,13 €) au lieu des bracelets.

## 14/11/2026 — Tableau Scutify refait : 10 produits Pilates à la maison cohérents (dossier.py). Ancien VAURE : dossier_v5_vaure_kits.py, produits_v10_vaure.py, upsells_v5_vaure.py.

## 14/11/2026 — Tableau Scutify refait : niche Organisation élégante (10 objets, hors sport). Pilates gardé : dossier_v6_pilates.py, upsells_v6_pilates.py, construire_tableau_v6_pilates.py.

## 14/11/2026 — Tableau final : Organisation élégante + sacoche en cuir homme (remplace le coffret entrée).

## 14/11/2026 — Trousse à câbles remplacée par la pochette ordinateur portable (4,20 $, 34,90 €, gain 23,35 €). Pack Voyage -> Pack Nomade.

## 15/11/2026 — 100_IDEES_EFFET_WAOUH.md : 100 idées (non vérifiées), top 15.

## 15/11/2026 — Tableau Scutify : niche Maison (effet waouh). Organisation gardée : dossier_v7_organisation.py, upsells_v7_organisation.py, construire_tableau_v7_organisation.py.

## 15/11/2026 — Tableau Scutify : niche RUNNING (10 équipements, lunettes incluses). Maison gardée : dossier_v8_maison.py, upsells_v8_maison.py, construire_tableau_v8_maison.py.

## 15/11/2026 — Running : ceinture remplacée par le pommeau de douche filtrant en ligne 1 (demande de Jairo).

## 15/11/2026 — Pommeau filtrant : nouveau fournisseur Shenzhen Calux (1601697241736, lien envoyé par Jairo), 7,85 $ → 6,75 €, gain ~25,06 € à 39,90 €.

## 15/11/2026 — Lignes 3-10 revues : bracelets lestés, Kit Pilates Plus, gilet, chaussettes, Kit Fessiers, Kit Pilates Studio, gourde 2 L, pack première course. Niche « Sport et récupération ». Running précédent : dossier_v9_running.py.

## 15/11/2026 — Lignes 3-10 : 8 produits de 8 univers différents (WC lavant, cache-multiprise, étagère invisible, égouttoir doré, sacoche cuir, cachet de cire, classeur budget, punch needle). Version sport : dossier_v10_sport_recup.py.

## 15/11/2026 — Lignes 3-10 « coup de cœur » : lampe dorée sans fil, lampe de chevet induction, applique aimantée, lampe photo, kit WC, sacoche, brosse soufflante, cache-multiprise. Version 8 univers : dossier_v11_8univers.py.

## 15/11/2026 — Lignes 3-10 : accessoires beauté sans cosmétique (bigoudis, brosse soufflante, lisseur sans fil, brosse sonique, taie soie, miroir LED, ponceuse ongles, coffret nuit). Version coup de cœur : dossier_v12_coupdecoeur.py.

## 15/11/2026 — Lignes 3-10 : produits phares des grandes marques e-commerce (Brick NFC, Ridge, Tushy, Stanley, Loop, Theragun, Bala, Bellroy). Version beauté : dossier_v13_beaute.py.

## 15/11/2026 — Lunettes : lien de Jairo (1601961719548, 0,87 $, MOQ 2, fournisseur non vérifié) ; iRun gardé en secours.

## 15/11/2026 — T-shirt type Fincut : 95% coton 5% élasthanne coupe ajustée (1600439850340, 6 $ de 50 à 299, 4,70 $ dès 300) ; 250 g 100% coton (1600928907355, 6,75 $ de 50 à 99, logo dès 50). Fincut : 28 € l unité, packs 25 et 22,25 €/u.

## Étape — 6 produits validés (liens de Jairo)
Validés : pommeau filtrant (1601697241736), t-shirt 250 g (1600928907355), lunettes UV400 (1601961719548).
Nouveaux liens de Jairo, à mettre EN HAUT du tableau :
- Porte-cartes pop-up automatique cuir, TILONSTAR (Guangzhou Taitan, vérifié) 1600929091140 — 4,90 $ (MOQ 1) → 39,90 €, lettre 250 g, gain ≈ 29,70 €
- Sweat à capuche épais 3D relief oversize (Jiangxi Yi Lingzhi, vérifié) 1600347472870 — 9,89 $ (MOQ 50) → 49,90 €, 1 kg, gain ≈ 31,00 €
- T-shirt oversize 240 g (Quanzhou Haixin, NON vérifié) 1601269043057 — 4,46 $ (MOQ 30) → 34,90 €, 500 g, gain ≈ 23,12 €
Refusés : boxers, chaussettes invisibles, polo, sweat 400 g Fuzhou, ceinture sans trous, portefeuille métal, sacoche, casquette.
Reste : 4 produits à trouver.

## Étape — Marque de vêtements « TENUE » (proposition)
Collection : t-shirt 250 g (1600928907355), t-shirt oversize 240 g (1601269043057), sweat épais 3D (1600347472870),
jogging 400 g assorti (1601293233463, 15,80 $ MOQ 50 → 49,90 €, gain ≈ 26,22 €),
chemise Oxford 100 % coton (60597365401, 8,50 $ MOQ 50 → 44,90 €, gain ≈ 29,35 €),
accessoires : porte-cartes pop-up (1600929091140), lunettes UV400. Hors marque : pommeau filtrant.
Packs : ensemble sweat + jogging 89,90 € ; 3 t-shirts 69,90 €. Manque 2 produits (pistes : surchemise, sweat demi-zip).
Photos alicdn bloquées par le réseau (non téléchargées).

## Étape — Marque VAURE, style oversize
Porte-cartes retiré. Chemise Oxford retirée (coupe pas oversize).
Collection : t-shirt oversize 240 g (1601269043057), t-shirt 250 g (1600928907355, coupe droite), sweat à capuche 3D (1600347472870),
sweat zippé boxy (1601590727563, 12,46 $ MOQ 50 → 49,90 €, gain ≈ 29,09 €), sweat col rond 450 g oversize (1600274136737, 11,90 $ MOQ 100 → 44,90 €, gain ≈ 24,73 €),
jogging 400 g jambe large (1601293233463). + pommeau, lunettes = 8. Manque 2 (pistes : t-shirt manches longues oversize, surchemise oversize).

## Étape — VAURE : look net, pas délavé
Règle de Jairo : pas « clochard », pas délavé (pas de vintage wash, acid wash, distressed, bords bruts).
Retirés : sweat zippé 1601590727563 (« Vintage Wash Finish »), jogging 1601293233463 (« Distress », jaune).
Remplacés par : sweat zippé uni 100 % coton oversize 1600947092413 (14,37 $ MOQ 20 → 49,90 €, gain ≈ 27,45 €),
jogging molleton uni coupe ample 1601254248379 (12,35 $ MOQ 50 → 49,90 €, gain ≈ 29,19 €).
Sweat 3D 1600347472870 : « vintage » seulement dans le titre, modèle uni → couleurs unies à commander.

## Étape — VAURE calquée sur la gamme Fear of God Essentials (référence de style et de prix, sans copier nom/logo/design)
Prix France Essentials (Breuninger) : sweat à capuche 139,99 €, t-shirt 71,99 €, manches longues 79,99 €, jogging 119,99 €.
Ajout : t-shirt manches longues col boutonné (henley) 60795328307, 10,50 $ MOQ 100 → 39,90 €, 500 g, gain ≈ 22,78 €.
Écartés : manches longues col montant 11000028283617 (camouflage), manches longues 280 g (acid wash), t-shirt 280 g imprimé.
Total 9/10 (7 vêtements + lunettes + pommeau). 10e à choisir : short en molleton (saisonnier) ou casquette brodée.

## Étape — VAURE sur le modèle On (style sport-chic minimaliste, ensembles assortis)
Prix On France : Club-T 50 €, Club Hoodie 130 €, Focus Tech Hoodie 150 €, Core-T 60 €, Core Shorts 60 €, Trek Pants 140 € (BE), Performance Long-T 90 €.
10e produit : casquette légère (1600612754499, 2,98 $ MOQ 100 → 29,90 €, gain ≈ 21,65 €), équivalent de la casquette légère On.
Liste 10/10 : t-shirt oversize 240 g, t-shirt 250 g, manches longues henley, sweat à capuche, sweat zippé, sweat col rond 450 g, jogging, casquette, lunettes UV400, pommeau filtrant.

## Étape — Vêtements validés par la coach : tableau rempli avec VAURE
dossier.py = 10 fiches VAURE (ancien dossier sauvegardé dans dossier_v14_dtc.py, construire_tableau_v14_dtc.py).
Packs U : Ensemble VAURE 79,90 €, 3 t-shirts oversize 59,90 €, Pack Soleil 54,90 €. Fichiers xlsx régénérés.

## Étape — Lignes 5 à 10 : autres niches (hors VAURE)
1-4 : pommeau, lunettes, t-shirt oversize, t-shirt 250 g. 5-10 : lampe d'écran (1601885292435), planche titane (1601511136490),
moulins gravité ×2 (1600110095572), cubes de compression (1601401536287), fontaine chat inox (1600898536177), support voiture magnétique (1601468984648).
Packs : 3 t-shirts 59,90 €, Pack Cuisine 74,90 €, Pack Route 54,90 €. Version précédente : dossier_v15_vaure_complet.py.
Écartés : rouleau anti-poils et organiseur de coffre (plus chers que le marché), sac cabine (pas de lien et marge < 20 €).

## Étape — Dropshipping (Scutify source) : minimums de commande sans importance
Tableau : 1 pommeau, 2 lunettes, 3 t-shirt oversize, 4 t-shirt 250 g, 5 pot à réserve d'eau (60802490966), 6 cintres velours + cascade (1600222821866),
7 sacs sous vide + pompe (1600116022034), 8 sweat à capuche (1600347472870), 9 jogging (1601254248379), 10 sweat col rond 450 g (1600274136737).
Diffuseur retiré. Packs : 3 t-shirts 59,90 €, Ensemble VAURE 79,90 €, Pack Rangement 54,90 €. Version précédente : dossier_v16_autres_niches.py.

## Étape — Jogging remplacé par le tapis lavable de Jairo (11000039435438)
8,95 $/m² → 100 × 150 cm ≈ 13,43 $ (11,55 €), vendu 49,90 €, colis ~2 kg (10,49 €), gain estimé ≈ 26,36 €.

## Étape — Critères D à I notés honnêtement (tableau _CRIT en fin de dossier.py)
Notes /10 : pommeau, lunettes 6, t-shirt oversize 6,75, t-shirt 250 g 8,25, pot 8,25, cintres 5,25, sous vide 6,75, sweat capuche 4,5, tapis 7, sweat col rond 4,25.

## Étape — Pot : nouveau lien (le 60802490966 ne s'ouvrait pas chez Jairo) ; cintres remplacés
Pot : lot de 3 pots blancs à réserve 1600135015737 (7,99 $ → 39,90 €, ~1 kg, gain ≈ 22,94 €).
Cintres retirés (pas de vrai problème) → Kit 4 stylos pour joints + brosse 1600121068779 (≈1,62 $ → 29,90 €, gain ≈ 22,82 €), réf. Rubson 11,90 € le stylo.
Pack Rangement remplacé par Pack Salle de bain (pommeau + kit joints) 59,90 €.

## Étape — Pot retiré (Jairo : « nul ») → Kit anti-rayures meubles 26 pièces (1600133850172, ≈3,90 $ → 29,90 €, gain ≈ 20,86 €). Kit joints validé.

## Étape — « kit pilote » = Kit Pilates : ligne 5 = Kit Pilates « Reformer à la maison » (1600918081475 + disques 1601519504789, 4,28 $ → 39,90 €),
ligne 6 = coussin d'assise ergonomique (1600948399915, 5,50 $ → 34,90 €). Kits joints et anti-rayures retirés. Pack Bien-être 59,90 €.
Version précédente : dossier_v17_kits_maison.py.

## Étape — Ligne 10 : sweat col rond remplacé par Kit Pilates Studio (cercle 1600060372660 + chaussettes, 5,15 $ → 34,90 €).
Filtre de robinet tenté : 4 annonces Alibaba supprimées (404), abandonné.

## Étape — Ligne 10 : brosse autonettoyante chien et chat (1600880909407, 2,85 $ → 29,90 €, gain ≈ 21,76 €), réf. FURminator 25,99 à 49,99 €.

## Étape — Ligne 10 : filtre à eau pour robinet (1601126424492, kit 3 filtres ≈ 4,50 $ → 29,90 €), réf. Brita On Tap 34,47 à 59,90 €. Brosse animaux retirée.

## Étape — Road Map Scutify étapes 1 à 4 pour les lunettes (artifact https://claude.ai/artifact/9XuksXw1VdXq3LtRWXWdsZ, source lunettes/roadmap_lunettes.html)
Version conseillée : polarisée iRun 1601430271723 (7,48 $ → 34,90 €, gain ≈ 22,60 €). Offres : 1 paire 34,90 €, duo 59,90 €, paire + étui 39,90 €.

## Étape — Produit choisi avec la coach : Kit Pilates « Reformer à la maison ». Image de marque GALBE (pilates/galbe_marque.png).
Symbole = anneau de Pilates en forme de G ; couleurs rose poudré, prune, sauge, blanc lait, framboise. Nom à vérifier à l'INPI.

## Étape — Étude de marché GALBE (étape 02) : https://claude.ai/artifact/LpbZQNai5TDL3heZAQxvzc (source pilates/etude_marche_galbe.html)

## Étape — Couleurs GALBE changées (Jairo) : bleu ciel #BFE4F7, bleu nuit #0E2A3F, vert fluo #2EF27A, blanc, bleu brume #E8F5FC. Ancienne version rose : pilates/galbe_marque_v1_rose.*

## Étape — Marque du kit Pilates renommée VAURE (Jairo) : symbole « teaser » en V, couleurs bleu ciel / bleu nuit / vert fluo. pilates/vaure_pilates_marque.png. GALBE gardé en archive.

## Étape — Couleurs VAURE Pilates : bleu marine #0B1F3A, blanc, vert fluo #2EF27A (bleu ciel retiré). Version précédente : pilates/vaure_pilates_marque_v1_ciel.png

## Étape — Road Map 03 et 04 pour VAURE Pilates : https://claude.ai/artifact/BhcBayiTyHYAntR2kSDtmM (pilates/positionnement_shopify_vaure.html)
Offres : kit 39,90 € (≈26 €), kit + chaussettes 44,90 € (≈30 €), duo 69,90 € (≈50 €), chaussettes après achat 12,90 €.

## Étape — Fichier Scutify « Mes concurrents » rempli pour VAURE Pilates (pilates/Scutify_Mes_concurrents_VAURE_Pilates.xlsx) : 8 concurrents, onglet Votre marque, onglet ajouté SWOT et persona. Visiteurs SimilarWeb à relever par Jairo.

## Étape — Site Shopify : thème non publié « VAURE Pilates – brouillon » (gid 199730561406), copie de « VAURE – version 3 ». Page d'accueil = section sections/vaure-pilates-home.liquid (sans produit, liste d'attente via formulaire client, tag liste-attente-vaure-pilates). Copie locale : pilates/shopify/. theme_bash et theme_screenshot refusés (droits du connecteur) ; écriture via themeFilesUpsert.

## Étape — Brouillon Shopify : menus créés vaure-pilates (Le kit, Le défi 30 jours, FAQ, Liste d'attente → ancres /#vp-...) et vaure-pilates-aide ; header du brouillon = menu Pilates + annonces « Programme vidéo de 30 jours inclus » / « Retours sous 30 jours », pop-up bijoux retirée ; footer = menus Pilates + aide + maison. Choix A/B (bijoux) toujours en attente.

## Étape — Animations ajoutées à la page d'accueil Pilates (tracé du symbole, entrée du hero, apparition au défilement, survols, bouton qui pulse). Fichier envoyé et vérifié (md5 identique). Vidéo : scutify/pilates/shopify/apercu_animations.mp4

## Étape — Refonte complète du design de l'accueil Pilates (Jairo : « fait PowerPoint de 3e ») : hero éditorial + illustration animée, bandeau défilant vert fluo, constat en chiffres, kit en 3 cartes illustrées, frise du défi 30 jours, comparatif avec coches, FAQ en 2 colonnes, promesses, liste d'attente. md5 vérifié sur Shopify.

## Accueil « scrollytelling » (inspiré de la vidéo CLAIR)
- Nouvelle section `sections/vaure-pilates-scroll.liquid` placée en tête de l'accueil (templates/index.json) : silhouette VAURE qui passe d'assise voûtée à la posture du teaser (le V) au défilement, mot géant INACTIVE → ACTIVE, fond gris → bleu marine, 5 phrases, compteur Jour 01 → 30, bouton liste d'attente.
- Réglage `hide_old_hero` (coché) : masque l'ancien bandeau d'ouverture de la section accueil.
- Envoyé sur le thème brouillon 199730561406, sommes MD5 vérifiées (scroll 2ad6a3d0…, index d99e4390…). Rien de publié.
- Aperçus : shopify/apercu_scroll.html, apercu_scroll_telephone.mp4, apercu_scroll_ordinateur.png.

## Vitrine du kit (inspirée de la vidéo KERB)
- Nouvelle section `sections/vaure-pilates-vitrine.liquid` (id #vp-kit) juste après le scroll : le mot géant VAURE avec la barre, les disques et le téléphone glissés entre les lettres, qui flottent ; au toucher, l'élément s'agrandit et une carte « verre dépoli » s'ouvre (texte, 3 points, 39,90 €, liste d'attente), flèches précédent/suivant. Sur téléphone, le détail s'ouvre en plein écran.
- Réglage `hide_old_kit` (coché) : masque l'ancien bloc « Le kit ».
- Envoyé sur le brouillon 199730561406, MD5 vérifiés (vitrine 9f234e91…, index 4dcca8b2…). Aperçus : apercu_accueil_v2.html, apercu_vitrine_telephone.mp4, apercu_vitrine_ordinateur.png.

## Nouveau kit 8 pièces + palette B (crème, chocolat, vert fluo)
- Kit retenu : tapis, petit ballon, cercle, 3 bandes élastiques, brique, 2 sliders, rouleau (couleur chocolat, logo personnalisable) + programme vidéo. L'ancienne barre « Reformer » est abandonnée.
- Palette 60/30/10 : crème #F4ECE2, chocolat #552B1D (texte foncé #2B1710), vert fluo #2EF27A pour les boutons.
- Les 3 sections recolorées et réécrites ; la vitrine présente les 8 pièces (dessins chocolat), 3 dans le mot VAURE.
- Envoyé sur le brouillon 199730561406, MD5 vérifiés : home bc1c6ab8…, scroll c03b1c03…, vitrine 770629ba…, index 4dcca8b2….
- À faire : prix fournisseur du kit (marge), prix de vente 39,90 € à confirmer ; header/footer du thème encore aux anciennes couleurs.

## Accueil en 3D (remplace l'ouverture en silhouette et la vitrine dessinée)
- Retour du client : « pas ouf », cheap, pas assez d'effet waw, pas fluide. Cause : silhouette en bâtons et pièces dessinées.
- Nouvelle section `sections/vaure-pilates-3d.liquid` (three.js 0.160 chargé depuis cdn.jsdelivr.net, rendu WebGL) : les 8 pièces du kit modélisées (matières, reflets, ombres douces), éclatées puis réunies en composition au défilement, étiquettes sur les pièces, 3 messages, bouton liste d'attente. Défilement lissé, 320vh (300vh sur téléphone), blocage natif (sticky). Cadrage automatique : image décalée à droite (ordinateur) ou vers le bas (téléphone).
- Secours : sans WebGL ou avec « réduire les animations », version texte fixe.
- index.json : vaure_3d (hide_old) + vaure_pilates. Les sections scroll et vitrine restent dans le thème mais ne sont plus affichées.
- MD5 vérifiés : 3d 0f85d2c4…, index 13e69350…

## Le vrai logo partout
- `snippets/vaure-logo.liquid` : logo vectoriel (symbole du teaser + point vert fluo + logotype VΛURE dessiné), traits en currentColor.
- `blocks/_header-logo.liquid` (brouillon) : l'en-tête affiche ce logo au lieu de l'image de l'ancienne boutique (vaure-logo-noir.png).
- Section 3D : les textures (tapis, ballon, brique) utilisent les mêmes tracés que le logo.
- MD5 vérifiés : snippet b40b2207…, bloc 4c31d4fa…, 3d 7f754ac0….

## Site pro (en-tête, pied, produit, pages, SEO) + bijoux archivés
- 73 produits bijoux ARCHIVÉS (pas supprimés, réversible). Commande #1001 conservée.
- Brouillon : config/settings_data.json recoloré (6 schémas crème/chocolat/vert fluo, boutons vert fluo), titres en Outfit (outfit_n6). Copie d'origine : shopify/settings_data_origine.json.
- Produit « Kit Pilates VAURE – Le studio à la maison » (gid 16197494309246, handle kit-pilates-vaure) en BROUILLON, 39,90 € provisoire, SEO rempli, gabarit product.vaure → sections/vaure-pilates-produit.liquid.
- Pages réécrites pour le Pilates (en ligne, boutique entière) : Notre histoire, Livraison, Retours, Contact, Questions fréquentes, Utilisation et entretien (ex-Matières et entretien), CGV (mentions légales de l'entreprise conservées). SEO (title/description) posés sur 5 pages.
- Menus : « Journal » retiré de vaure-maison, « Utilisation et entretien » ajouté à vaure-pilates-aide.
- Favicon : shopify/vaure_favicon_512.png à téléverser dans l'éditeur (upload d'image impossible depuis la session).

## Photo du kit sur le site
- Photo retouchée (sans logo, fond crème) envoyée comme fichier du thème : assets/kit-vaure-creme.webp (800 px, MD5 39bf8289… vérifié). Envoi par BASE64 : le 1er essai en 1200 px est arrivé corrompu (MD5 différent), refait en 800 px.
- Fiche produit : la photo remplace le cadre « Photos du coffret très bientôt » tant que le produit n'a pas de média.
- Accueil : nouvelle section `sections/vaure-pilates-coffret.liquid` (photo + 8 pièces + bouton) entre la 3D et le reste ; elle accélère aussi les apparitions des blocs (0,6 s au lieu de 1 s). MD5 vérifiés : coffret 18b343cc…, produit 88a637e0…, index b00e8927….

## Retouches téléphone (section vaure-pilates-retouches, en dernier sur l'accueil)
- Comparatif : sur téléphone, seules les colonnes Studio et VAURE restent (le tableau débordait).
- Défi 30 jours : 2 colonnes compactes sur téléphone.
- Barre collante « Le kit VAURE · Me prévenir » sur téléphone : apparaît après la 3D, disparaît au formulaire de liste d'attente.
- MD5 vérifiés : retouches 9045cd6b…, index 707e0bb6….

## Style plus sportif (retour client : « trop classique »)
- Nouvelle section `sections/vaure-pilates-sport.liquid` (après le coffret) : bandeau vert fluo incliné qui défile, « −95 % » (calcul affiché : 52 × 30 € = 1 560 €/an vs prix du kit ; reste vrai jusqu'à un prix de kit de 78 €), compteurs animés 15 min / 30 jours / 8 pièces / 52 séances par an, barres de répartition du défi (7/30 = 23 %, 9/30 = 30 %).
- Elle passe aussi les titres de l'accueil en Barlow Condensed 800, capitales, accents en italique vert fluo.
- Aucune statistique inventée : uniquement des chiffres calculables.
- MD5 vérifiés : sport 979e233c…, index b32375f2….

## Page « Le défi 30 jours »
- Page /pages/le-defi-30-jours (gid 711051411838), gabarit page.defi → sections/vaure-pilates-defi.liquid : en-tête noir sportif, frise des 30 jours en 4 couleurs, 4 phases (n° en relief, texte, accessoires, 4 mouvements Pilates réels avec jours), bloc « Et après le jour 30 ? », note sécurité. SEO rempli.
- Menu principal : « Le défi 30 jours » pointe vers la page, « FAQ » vers /pages/questions-frequentes. Annonce du bandeau du haut → la page.
- MD5 vérifiés : defi 1a9f032b…, page.defi cd17293d….

## E-mails (étape 05 de la Road Map)
- scutify/pilates/emails/emails_vaure.md : 5 e-mails prêts à coller (bienvenue liste d'attente, J-3, lancement, séance de la semaine, demande d'avis J+14) + mise en place dans Shopify Email / application d'avis. Les automatisations ne se créent pas par l'API : à faire par le client.
- email_bienvenue.html + .png : maquette de l'e-mail de bienvenue aux couleurs VAURE (logo vectoriel, titre condensé, bloc chiffres, bouton fluo).

## Séances quotidiennes après le défi (demande client)
- Formulation partout : « le défi de 30 jours, puis une séance chaque jour, toute l'année » (1 an, jamais « à vie » ni « illimité »).
- Mis à jour : 3D (msg final), fiche produit (puce + FAQ), page défi (« Et après le jour 30 ? »), bande chiffres (52 → 365 séances du jour par an, bandeau « Une séance par jour »), description du produit, page FAQ, résumé de la page défi, e-mails (e-mail 4 devient le programme de la semaine, 1 seul e-mail le lundi avec 7 séances).
- MD5 vérifiés : 3d 36e2b19b…, produit de4e1c5e…, defi 60020687…, sport 495e296d….

## Prototype séance avec silhouette + kit
- scutify/pilates/demo_seance/seance_silhouette.html (+ .mp4 39 s, format téléphone 9:16) : écran de séance « Jour 15 · Bas du corps », silhouette VAURE (membres épais à bouts ronds, chignon vert fluo), 3 exercices avec le kit : pont fessier + bande, squat + bande, genoux à la poitrine sur sliders. Mouvements calculés (pieds posés, genoux dans le bon sens), consignes de respiration, compteur de répétitions, temps restant, barre de progression, étapes.
- Sert de base pour produire les séances du jour sans tournage (bibliothèque d'exercices + voix off).
- Version « femme illustrée » (inspirée des applis de fitness, sans copier leur design) : demo_seance/seance_illustree.html + .mp4. Peau, cheveux bruns avec queue de cheval et élastique vert fluo, brassière vert fluo, legging chocolat, chaussettes crème ; membres effilés ; flèche verte dans le sens du mouvement ; écran : barre segmentée en haut, compteur de répétitions géant dans un bloc chocolat incliné, temps restant, pause.

### Démo séance illustrée : étape « Prépare ton matériel » (18/11)
- `scutify/pilates/demo_seance/seance_illustree.html` + `.mp4` (60 s) + `_apercu.png`.
- Avant chaque exercice (7 s) : carte « Prépare ton matériel » avec le nom et l'icône de l'accessoire, 4 étapes de mise en place qui apparaissent une par une, l'accessoire qui s'allume sur l'illustration, un compte à rebours et le bouton « Je suis prête → ».
- Bouton « Minuteur | À ton rythme » : le minuteur lance l'exercice tout seul ; « à ton rythme » attend que la cliente appuie sur « Je suis prête ».
- Bande forte en marron foncé (#534032) pour la distinguer de la moyenne (taupe #997b63).
- Pas de validation par une prof (décision de Jairo) : on garde uniquement des mouvements classiques et sûrs, chacun avec une version plus facile, et la note de sécurité (avis d'un professionnel de santé en cas de grossesse, douleur ou problème de dos).

### Espace « Mes séances » : les 30 jours + onglet Musique (18/11)
- `scutify/pilates/espace_seances/index.html` : appli web (téléphone).
  - Onglet Séances : progression, séance du jour, grille 30 jours (couleur par phase), fiche du jour (matériel à sortir, plan, durée calculée ≈ 14-15 min).
  - Lecteur : 18 exercices animés (illustration), « Prépare ton matériel » avant chaque nouvel exercice avec version plus facile, rappel court entre les tours, vrai choix Minuteur / À ton rythme (bouton « Fini »), pause, passer, fin de séance qui coche le jour (mémorisé sur le téléphone).
  - Programme : échauffement respiration + mouvements de la phase (rappels des phases précédentes si besoin) + retour au calme sur le rouleau ; jour 30 = séance du jour 1.
  - Onglet Musique : on colle un lien Spotify, Deezer, Apple Music ou YouTube → lecteur intégré qui reste chargé pendant toute la séance (bouton « Musique » dans le lecteur). Sans compte connecté, certaines plateformes ne jouent que des extraits. Lecture réelle non testable ici (Spotify/Deezer bloqués dans l'environnement de travail).
  - Sliders : « au sol, hors du tapis, pour qu'ils glissent ».
- Page défi (brouillon 199730561406) alignée sur l'appli : MD5 da138be8… vérifié. Rien de publié.
- Plus tard : connexion Spotify par compte (nécessite une appli développeur Spotify + Premium), playlists VAURE à créer par Jairo, hébergement de l'espace derrière le compte client.

### « Ma silhouette » : chacune se reconnaît (18/11)
- Espace séances : au premier lancement, fiche « Elle te ressemble » ; ensuite bouton « Ma silhouette » en haut de l'accueil.
- Choix : 6 couleurs de peau, 6 coiffures (queue de cheval, chignon, afro, tresse, courts, foulard de sport), 5 couleurs de cheveux, 3 morphologies (fine, moyenne, ronde). Mémorisé sur le téléphone ; la silhouette choisie fait tous les exercices.
- Tenue VAURE identique pour toutes (brassière fluo, legging chocolat) : c'est la signature de la marque.
- Aperçus : apercu_silhouette_choix.png, apercu_silhouettes.png.
- Menu déroulant « Menu » (en haut à droite de l'accueil, avec la mini-silhouette) : Ma silhouette, Ma musique, Mode de séance (bascule Minuteur / À ton rythme), Recommencer le défi (avec confirmation), Le site VAURE. Aperçu : apercu_menu.png.
