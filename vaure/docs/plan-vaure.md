# VAURE — plan de lancement (méthode Scutify)

**VAURE vend des bijoux dorés qui ne noircissent pas** (acier inoxydable 316L et titane), plus des foulards satinés, des accessoires cheveux et des petits sacs. Domaine visé : **vaurestudio.com** (disponible le 25/10/2026, environ 16 $ la première année).

À vérifier avant le logo : le nom « VAURE » sur data.inpi.fr et euipo.europa.eu.

## 1. Pourquoi cette niche

| Critère | Bijoux VAURE |
| --- | --- |
| Achat sans réfléchir | Prix de 12,90 à 24,90 €, aucune taille à choisir |
| Problème réglé | « Mes bijoux noircissent, verdissent ou m'irritent » ; « Je n'ose pas me faire percer » |
| Effet wow en vidéo | Gros plan doré, test sous la douche, avant/après « sans trou » |
| Marge | Bonne avec les lots : parure, box, bijou assorti à −30 % |
| Logistique | Quelques grammes : environ 2 à 4 € de port vers la France |
| Urgence vraie | Noël (date limite de commande), Black Friday (vraie date de fin), fête des mères, Saint-Valentin |

## 2. Catalogue de départ : 21 produits

La référence CJ est connue pour un seul produit. Les autres sont à trouver avec les mots-clés de `../correspondance-cj.csv`.

**Règles CJ :**
- Seulement de l'**acier inoxydable 316L** (« stainless steel ») ou du **titane** (« titanium », idéalement « ASTM F136 » pour les piercings).
- Ligne d'expédition **« Jewel Shipping »** ou équivalente, **vers la France** : délai de 15 jours maximum.
- **Aucun logo ni motif de marque**, surtout pour les sacs et les foulards.
- **Foulards** : écrire « satiné », jamais « soie », sauf si la fiche dit « 100 % mulberry silk ».

| Gamme | Produits | Prix |
| --- | --- | --- |
| Colliers | Marguerite (héros), Serpent, Initiale | 19,90 à 24,90 € |
| Bracelets | Marguerite, Jonc fin, Trombone | 17,90 à 19,90 € |
| Boucles d'oreilles | Puces Marguerite, Créoles épaisses, Mini créoles | 14,90 à 19,90 € |
| Piercings | Anneau de nez titane, Hélix titane, Anneau de nez sans perçage, Ear cuff sans perçage | 12,90 à 14,90 € |
| Foulards et cheveux | Foulard satiné 70 cm, Foulard ruban, Pince dorée, Barrettes perles | 9,90 à 17,90 € |
| Sacs | Mini sac bandoulière, Pochette soir | 29,90 à 34,90 € |
| Cadeaux | Parure Marguerite, Parure Essentielle | 44,90 € |

## 3. Marge : l'exemple du collier Marguerite

**Le collier :**
- SKU CJ : CJLX171494501AZ, en acier titane plaqué or.
- Coût livré en France : **6,64 €**.

| Offre | Prix TTC | Coût livré | Frais de paiement (≈ 3 %) | Avant la pub, sans TVA | Avant la pub, avec TVA (÷ 1,2) |
| --- | --- | --- | --- | --- | --- |
| Collier seul | 24,90 € | 6,64 € | 0,75 € | **17,51 €** | 13,36 € |
| Collier + bracelet assorti (−30 %) | 38,80 € | ≈ 12 € [à confirmer] | 1,16 € | ≈ 25,60 € | ≈ 19,20 € |
| Parure Marguerite | 44,90 € | ≈ 16 € [à confirmer] | 1,35 € | ≈ 27,50 € | ≈ 20,10 € |
| Box 3 bijoux | 29,90 € | ≈ 12 à 15 € | 0,90 € | ≈ 14 à 17 € | ≈ 9 à 12 € |

**Règles de prix :**
- **Au moins 3,5 fois le coût livré** pour un bijou seul.
- **La pub ne pousse que le collier Marguerite et la parure.** Les autres produits servent à remplir le panier.
- **Objectif : panier moyen ≥ 35 €**, le seuil de la livraison offerte.

## 4. Urgence : seulement de la vraie

Tout se règle dans `CONFIG`, en haut de `site/app.js` :
- **Noël** : « commandez avant le 8 décembre », du 1er octobre jusqu'à cette date. Cale la date sur le délai réel de « Jewel Shipping », avec 3 jours de marge.
- **Black Friday** : −15 % sur les parures et les box, du 23 au 30 novembre 2026. Le message n'apparaît qu'entre ces dates.
- **Date de livraison estimée** sur chaque fiche.

**Interdit :** faux compte à rebours, faux stock, faux avis, prix barré jamais pratiqué, « or » sans préciser « plaqué ».

## 5. Pubs : partir du problème

Vidéos verticales de 10 à 20 s, filmées avec l'échantillon, en lumière du jour.

| Accroche (0 à 3 s) | Démonstration | Fin |
| --- | --- | --- |
| « Ton collier à 5 € t'a laissé une trace verte ? » | Cou marqué vert (photo d'illustration), puis le collier Marguerite qui brille | « Acier 316L, il ne noircit pas. 24,90 €. » |
| « J'ai gardé ce collier 7 jours sous la douche. » | Jour 1, jour 3, jour 7 : toujours doré | Uniquement si c'est vrai sur ton échantillon |
| « Tu n'oses pas te faire percer le nez ? » | Clip de l'anneau sans perçage en 2 secondes | « Sans trou, sans douleur. 12,90 €. » |
| « Le cadeau qui fait toujours plaisir, sous 50 €. » | Ouverture de l'écrin de la Parure Marguerite | Date limite de Noël |

**Test :**
- **Budget** : 3 vidéos × 10 €/jour pendant 3 à 4 jours, femmes de 18 à 45 ans en France.
- **On garde** une vidéo qui atteint : taux de clic > 1,5 %, coût par clic < 0,60 €, ajouts au panier > 8 %, coût par achat < 15 €.
- **On coupe** une vidéo sans ajout au panier après 25 €.

## 6. Vendre dans le monde, étape par étape

1. **France, Belgique, Suisse** (même langue) jusqu'à ce que la pub soit rentable.
2. **Europe** : Shopify Markets (traduction, euros), et TVA européenne via le guichet OSS.
3. **Royaume-Uni, États-Unis et Canada** : un marché par pays, avec la devise locale et des pubs en anglais.

Le nom VAURE, sans accent, et le .com servent partout.

## 7. Mise en place sur Shopify

1. **Créer une nouvelle boutique « VAURE »**, séparée de Jiménez. Acheter **vaurestudio.com** dans Shopify et cocher la redirection.
2. **Thème** : Dawn (gratuit). Reprendre l'ordre de la page d'accueil du site de démonstration :
   - bannière ;
   - garanties ;
   - best-sellers ;
   - promesse 316L ;
   - parure ;
   - box ;
   - sans perçage ;
   - univers ;
   - avis ;
   - newsletter.
3. **Applications** :
   - CJdropshipping, pour les commandes automatiques.
   - Judge.me, pour les avis vérifiés avec photos.
   - Une application de lots, par exemple **Kaching Bundles**, pour le bijou assorti à −30 % et les parures.
   - Une application « Compose ta box » (bundle builder).
   - ParcelPanel, pour le suivi.
   - Klaviyo ou Shopify Email : bienvenue −10 %, relance de panier.
   - Le pixel Meta et TikTok.
4. **Paiements** : Shopify Payments, PayPal, Apple Pay et Google Pay.
5. **Pages légales** : compléter les crochets, et ajouter l'exception d'hygiène pour les piercings.

## 8. À faire maintenant

- [ ] Vérifier VAURE à l'INPI et à l'EUIPO, puis réserver vaurestudio.com.
- [ ] Sur CJ, trouver le bracelet et les puces Marguerite assortis, puis les autres produits du CSV. Noter le coût livré en France et le délai.
- [ ] Commander les échantillons : collier Marguerite, anneau sans perçage, créoles. Les porter sous la douche pendant 7 jours.
- [ ] Filmer les 4 pubs.
- [ ] Créer la boutique Shopify (section 7). Je peux ensuite y créer les produits depuis ici.
