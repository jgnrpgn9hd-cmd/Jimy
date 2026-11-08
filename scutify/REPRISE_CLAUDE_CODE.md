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

## Les 10 produits actuels — maison & bureau à image de marque (inspiré Warmly Decor, Oakywood, Bonsoirs)
| # | Niche | Produit | ID Alibaba | Coût € | Revente € | Marge € |
|---|---|---|---|---|---|---|
| 1 | salon et câbles | Boîte cache-multiprise en bois | 1600399341648 | 4,30 | 26,90 | 22,60 |
| 2 | déco et ambiance | Lampe de table sans fil | 1601698699353 | 5,68 | 29,90 | 24,22 |
| 3 | éclairage sans travaux | Applique murale sans fil | 11000013900976 | 6,36 | 29,90 | 23,54 |
| 4 | bureau, confort et protection | Sous-main en feutre | 1601004411759 | 1,54 | 24,90 | 23,36 |
| 5 | art de la table (linge de maison) | Serviettes de table en lin lavé (×4) | 1601235297580 | 8,60 | 34,90 | 26,30 |
| 6 | clés et poche | Organisateur de clés en métal | 1601587838571 | 3,95 | 24,90 | 20,95 |
| 7 | entrée et table de nuit | Station d'accueil en bois | 1601015112609 | 4,77 | 27,90 | 23,13 |
| 8 | télétravail, fatigue des yeux | Barre lumineuse d'écran | 1600751202201 | 8,25 | 34,90 | 26,65 |
| 9 | salon et chambre (linge de maison) | Plaid en gaze de coton | 1601074754482 | 4,55 | 39,90 | 35,35 |
| 10 | télétravail, posture et bureau rangé | Rehausseur d'écran en bambou | 62509087328 | 4,73 | 29,90 | 25,17 |

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
- Inspiration Bonsoirs (bonsoirs.com, linge de maison français) : plaid gaze de coton et serviettes de table lin lavé à la place du chauffe-tasse et du repose-pieds. Serviettes de bain gaufrées écartées (France 14-31 €). Oreiller/taies exclus (coach).
- Jairo veut des produits « image de marque » (type Oakywood, Orbitkey, Woodcessories). Kit Pilates et pommeau remplacés par sous-main feutre et organisateur de clés métal. Écartés : support casque bois (fournisseur 13-18 $), housse PC feutre (pas de prix fournisseur). Cache-multiprise mis en ligne 1 pour ne pas profiter de l'erreur de formule de la ligne 1.
- Jairo a demandé des produits télétravail en remplaçant seulement quelques lignes : organisateur de tiroir, pont de baignoire et boîte à pain remplacés par barre lumineuse d'écran, repose-pieds, rehausseur d'écran bambou. Écartés : support PC alu (fournisseur 14,50 $, France 16-25 €), tapis de bureau (pas de fiche avec prix).
- Jairo trouve que les produits « font Temu / chinois ». Il a choisi l'univers « maison design » (bois, céramique, verre, couleurs neutres). Lignes 7-10 remplacées (station d'accueil, organisateur tiroir, pont de baignoire, boîte à pain) ; minimums de commande élevés (200-500) car produits design. Testés sans succès : horloge bois (pas de fiche), panier à linge (France 14-25 €), plateau de lit (pas de fiche). Idées design validées en prix France mais sans fiche Alibaba trouvée : pot auto-arrosant céramique (34,90 €), porte-clés mural bois aimanté (20-37 €), applique murale en bois (30-75 €), moulins électriques effet bois (30-57 €), tapis de bain en pierre (15-25 €, lourd). Pont de baignoire bambou : MOQ 500.
- Boutiques aimées par Jairo : Warmly Decor (préférée), Sage & Sill, Articture, Triangl. Univers déco / maison. Pot auto-arrosant (France 34,90 €) : pas de fiche fournisseur trouvée. Lampe de croissance : France 10-30 €, marge trop faible.
- Jairo vérifie sur son téléphone les fiches des lignes 2, 3, 5, 6, 7, 8, 9, 10 (prix, stock, minimum). Ligne 7 : prix petite quantité inconnu, coût compté à 10 $.
- Lignes 8, 9, 10 (blender, brosse électrique, balance) : produits gagnants en dropshipping mais aussi vendus en magasin. À remplacer si Jairo trouve mieux ; pistes testées qui ne passent pas : posture, anti-ronflement, séchoir chaussures, nettoyeur ultrasons, planche titane, défroisseur, coussin gel (pas de fiche), sacs sous vide, purificateur fruits, thermomètre cuisson sans fil (pas de prix fournisseur fiable), nettoyeur vapeur à main (coût > 15 €). Piste possible : station de charge 3-en-1 pliable (France 25-40 €, fournisseur ~7,50 $) mais surtout pour Apple et fiche exacte non trouvée.
