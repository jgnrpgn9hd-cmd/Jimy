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

## Les 10 produits actuels — 10 niches, inspirés des boutiques dropshipping (Warmly Decor…), problème clair
| # | Niche | Produit | ID Alibaba | Coût € | Revente € | Marge € |
|---|---|---|---|---|---|---|
| 1 | sport à la maison | Kit barre Pilates 13 pièces + élastiques + programme | 1601484459815 | 6,49 | 34,90 | 28,41 |
| 2 | douleurs de nuque | Masseur cervical électrique sans fil, impulsions + chaleur, 10 modes | 1600806316694 | 8,17 | 34,90 | 26,73 |
| 3 | soin du visage | Aspirateur à points noirs rechargeable, plusieurs embouts | 1600456305985 | 7,65 | 32,90 | 25,25 |
| 4 | salle de bain | Pommeau de douche anticalcaire filtre vitamine C | 1600072015451 | 1,20 | 24,90 | 23,70 |
| 5 | sommeil | Machine à bruit blanc portable, veilleuse + minuterie (adultes et enfants) | 1600851553560 | 3,44 | 24,90 | 21,46 |
| 6 | hygiène dentaire | Hydropulseur sans fil rechargeable, étanche IPX7 | 1601060619298 | 8,16 | 32,90 | 24,74 |
| 7 | allergies | Aspirateur anti-acariens UV sans fil pour lit et canapé | 1601450111395 | 8,60 | 39,90 | 31,30 |
| 8 | cuisine | Blender portable rechargeable USB (smoothies, jus) | 1601242714165 | 5,42 | 26,90 | 21,48 |
| 9 | éclairage sans travaux | Applique murale LED sans fil rechargeable, aimantée, rotation 360° + télécommande | 11000013900976 | 6,36 | 29,90 | 23,54 |
| 10 | déco et ambiance | Lampe de table sans fil rechargeable, style champignon, tactile | 1601698699353 | 5,68 | 29,90 | 24,22 |

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
- Boutiques aimées par Jairo : Warmly Decor (préférée), Sage & Sill, Articture, Triangl. Univers déco / maison. Pot auto-arrosant (France 34,90 €) : pas de fiche fournisseur trouvée. Lampe de croissance : France 10-30 €, marge trop faible.
- Jairo vérifie sur son téléphone les fiches des lignes 2, 3, 5, 6, 7, 8, 9, 10 (prix, stock, minimum). Ligne 7 : prix petite quantité inconnu, coût compté à 10 $.
- Lignes 8, 9, 10 (blender, brosse électrique, balance) : produits gagnants en dropshipping mais aussi vendus en magasin. À remplacer si Jairo trouve mieux ; pistes testées qui ne passent pas : posture, anti-ronflement, séchoir chaussures, nettoyeur ultrasons, planche titane, défroisseur, coussin gel (pas de fiche), sacs sous vide, purificateur fruits, thermomètre cuisson sans fil (pas de prix fournisseur fiable), nettoyeur vapeur à main (coût > 15 €). Piste possible : station de charge 3-en-1 pliable (France 25-40 €, fournisseur ~7,50 $) mais surtout pour Apple et fiche exacte non trouvée.
