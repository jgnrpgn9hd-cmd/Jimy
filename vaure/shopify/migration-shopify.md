# Passer VAURE sur Shopify

Le site de démonstration (`../site/`) sert de maquette. Ce fichier dit, élément par élément, comment le reproduire sur Shopify.

## 1. Créer la boutique

1. **Nouvelle boutique** « VAURE », séparée de Jiménez.
2. **Domaine** : acheter **vaurestudio.com** dans Shopify (Paramètres → Domaines), le mettre en domaine principal et cocher la redirection.
3. **Paramètres → Général** :
   - devise EUR ;
   - fuseau Europe/Paris ;
   - e-mail : contact@vaurestudio.com.
4. **Paramètres → Expédition** :
   - zone **France, Belgique, Suisse** ;
   - tarif « Livraison suivie » à **3,90 €** ;
   - tarif **offert à partir de 35 €**.
5. **Paramètres → Paiements** :
   - Shopify Payments (carte, Apple Pay, Google Pay) ;
   - PayPal ;
   - paiement en 3 fois avec Alma ou PayPal 4X, si tu le souhaites.

## 2. Importer les produits

1. **Produits → Importer** → `produits-shopify.csv`.
   - Les 21 produits arrivent **en brouillon**, avec leurs variantes (Doré / Argenté, ou les coloris), leurs étiquettes et leur référencement Google.
2. **Relier chaque produit à CJ** avec l'application **CJdropshipping** (« Connecter » sur la fiche CJ). Le collier Marguerite a déjà sa référence : CJLX171494501AZ.
3. **Ajouter les photos** : celles de CJ d'abord, puis les photos des échantillons.
4. **Corriger les prix** si le coût livré CJ réel l'impose : au moins 3,5 fois le coût livré.
5. **Passer en « Actif »** seulement les produits reliés à CJ, avec photo.

Si le catalogue change dans `../site/data.js`, regénère le fichier : `node generer-csv.js`.

## 3. Collections

Toutes les collections sont **automatiques**, avec la condition « Étiquette = … » :

| Collection | Condition |
| --- | --- |
| Bijoux | Étiquette = Bijoux |
| Colliers / Bracelets / Boucles d'oreilles | Étiquette = Colliers / Bracelets / Boucles d'oreilles |
| Piercings (Titane, Sans perçage) | Étiquette = Piercings, puis Titane / Sans perçage |
| Foulards et cheveux | Étiquette = Foulards et cheveux |
| Sacs | Étiquette = Sacs |
| Idées cadeaux | Étiquette = Idées cadeaux, ou prix < 20 € |
| Coffret | Étiquette = Coffret (les bijoux jusqu'à 19,90 €) |

## 4. Thème

Thème **Dawn** (gratuit), réglé avec l'identité VAURE :
- **Couleurs** : fond #F8F5F0, fond alterné #EFE9E0, texte #151412, accent #B08D57, boutons noirs #151412 à angles droits.
- **Polices** : titres **Bodoni Moda**, texte **Manrope**. Elles sont dans la bibliothèque de polices Shopify ; sinon, prendre les plus proches.
- **Logo** : `../logo/logo-noir.png`, sur une largeur d'environ 140 px.

**Page d'accueil**, dans l'ordre de la maquette :

| Bloc de la maquette | Section Dawn |
| --- | --- |
| Bandeau « Livraison offerte… / Noël » | Barre d'annonces |
| Grande bannière « Des bijoux qui ne noircissent pas » | Bannière avec image |
| Garanties (eau, livraison, retours, 24 h) | Texte multicolonne avec icônes |
| Les incontournables | Collection en vedette (étiquette Incontournable) |
| Un éclat qui dure (316L, titane) | Texte multicolonne |
| La Parure Marguerite | Image avec texte |
| Créez votre coffret | Image avec texte, lien vers la page Coffret |
| Sans perçage | Collection en vedette (Sans perçage) |
| Pour finir la tenue | Liste de collections |
| Avis | Section de l'application d'avis |
| Journal | Articles de blog |
| Portés par vous | Section Instagram de l'application choisie |
| La lettre VAURE | Inscription à la newsletter |

**Fiche produit** :
- un bloc « Livraison estimée » (application de date de livraison, ou texte) ;
- le bloc « Garanties » ;
- des onglets Matière, Livraison et retours, Entretien ;
- « Vous aimerez aussi » et « Récemment consultés » : recommandations de produits Dawn.

## 5. Applications

| Besoin (maquette) | Application |
| --- | --- |
| Commandes automatiques chez le fournisseur | CJdropshipping |
| « À porter avec » et parures | Kaching Bundles ou Shopify Bundles, **sans badge de pourcentage** |
| Coffret à composer (3 ou 5 pièces) | Un « bundle builder » (Kaching, Bundler) |
| Avis vérifiés avec photo | Judge.me |
| Suivre ma commande | ParcelPanel |
| Lettre VAURE, panier abandonné | Shopify Email ou Klaviyo |
| Bandeau cookies | Gestion de la confidentialité Shopify (gratuite) |
| Pixel Meta et TikTok | Canaux de vente Facebook & Instagram et TikTok |
| Message cadeau | Notes de commande Dawn (option du panier) |

## 6. Pages, menus et textes

**Pages à copier depuis la maquette** :
- Notre histoire ;
- Livraison ;
- Retours et remboursements ;
- Matières et entretien ;
- Questions fréquentes ;
- Contact ;
- Coffret.

**Politiques** (Paramètres → Politiques) : copier CGV, mentions légales, confidentialité et cookies, **après avoir rempli les crochets** (SIREN, adresse, médiateur), puis les faire relire.

**Blog « Journal »** : les 3 articles de la maquette.

**Menus** :
- principal : Bijoux, Piercings, Foulards, Sacs, Coffrets, Cadeaux ;
- pied de page : Boutique / Aide / Maison, comme sur la maquette.

**Ton** : le tableau « on n'écrit pas / on écrit » (`../docs/plan-vaure.md`, section 4 bis) s'applique à tous les textes.

## 7. Avant d'ouvrir

- [ ] Commande test complète (puis remboursement).
- [ ] Vérifier l'e-mail de confirmation et la livraison offerte dès 35 €.
- [ ] Désactiver le mot de passe de la boutique.
- [ ] Vérifier le site sur téléphone.
