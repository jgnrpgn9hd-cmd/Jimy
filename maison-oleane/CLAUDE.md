# Maison Oléane — contexte du projet

Boutique en ligne de décoration et d'objets pour la maison, rangée **pièce par pièce**, en dropshipping avec **CJ Dropshipping**. Lancement prévu sur **Shopify** (boutique séparée de la boutique Jimenez déjà connectée).

## Positionnement (décidé avec le porteur du projet)

- **Un seul thème** : la maison. Pas de boutique généraliste « bazar ».
- **Haut de gamme dans l'apparence, prix doux** : la plupart des objets entre 13 et 70 €.
- **Ne pas faire « Temu »** : peu de promos visibles, pas de gros pourcentages, pas de faux compte à rebours, pas de faux stock, pas de faux avis, pas de pop-ups en série.
- **Ne pas faire « IA »** : photos d'appartement habité, lumière naturelle, petites imperfections.
- **Confiance jusqu'au paiement** : garanties visibles à chaque étape (paiement sécurisé, livraison suivie, retours 30 jours, réponse sous 24 h), contact visible partout.
- Inspiration de structure : Maisons du Monde (menus par pièce, par type, par style) — sans reprendre leur marque, photos ou textes.
- Méthode de la formation **Scutify** : 8 produits héros (au moins 3 critères sur 4 : effet wow, problème-solution, marge ≥ 20 €, volume), 7 lots (« compositions ») pour la marge, angles publicitaires « partir d'un problème ».
- Honnêteté : ne jamais suggérer une fabrication artisanale ou française ; les produits viennent de fournisseurs partenaires (CJ). Pas d'image produit inventée : les photos produit partent de la vraie photo CJ ou des échantillons.

## Identité

- Nom : **Maison Oléane** — domaine visé maisonoleane.com (disponible le 23/10/2026, ~16 $/an), e-mail contact@maisonoleane.com (à créer).
- Couleurs : fond #F6F3EE, alterné #ECE6DD, texte #1E1C19, gris chaud #4A453F, filets #DDD6CB, olive #3F4A3C.
- Polices : Cormorant Garamond (titres), Jost (texte).
- Ton : calme, concret, phrases courtes ; chaque produit présenté par le problème qu'il règle.

## Contenu du dépôt

```
site/            Site de démonstration statique (HTML/CSS/JS, sans framework)
  index.html
  styles.css
  app.js         Données produits (P), lots (LOTS), héros (HERO), articles (ARTICLES), vues et panier
  images/        Photos d'ambiance (hero, salon, chambre, cuisine, sdb = HD validées ;
                 entree, bureau, balcon, boheme, scandi, indus, chic, noel = découpes basse définition à remplacer)
shopify/
  produits-shopify.csv     62 produits au format d'import Shopify, en brouillon, avec SEO, étiquettes (pièce, famille, univers, Lancement, Héros, Noël)
  correspondance-cj.csv    SKU, mot-clé CJ, prix conseillé, rôle Héros/Complément, colonnes de validation Scutify (à remplir)
docs/
  plan-du-site.md          Plan complet : niches, collections, menus, confiance, livraison, paiement, apps, Scutify, mise en place Shopify
  prompts-images.md        Prompts ChatGPT pour les images d'ambiance et produit
  site-demo-autonome.html  Ancienne version en un seul fichier (images intégrées)
```

## Lancer le site en local

```bash
cd site && python3 -m http.server 8000
# puis ouvrir http://localhost:8000
```

## Ce qui fonctionne dans la démo

Accueil court (photo, engagements, pièces, onglets Les essentiels / Compositions / Petits plaisirs, Noël, univers, newsletter) · menu Pièces en deux temps (pièce → familles + photo) · pages pièce avec bannière, filtres par famille, compositions de la pièce · fiches produit (pourquoi on l'aime, date de livraison, garanties, lot associé, barre d'achat fixe sur mobile, vus récemment) · 7 compositions avec économie réelle · panier en tiroir avec suggestions pour atteindre la livraison offerte (49 €) · page de commande en étapes (démo, aucun paiement) avec code BIENVENUE (−10 € dès 60 €) · recherche instantanée · journal (3 articles) · pages Notre histoire, FAQ, Livraison, Retours, Contact, CGV, Confidentialité, Mentions légales (brouillons légaux).

## À faire

1. Remplacer les 8 images basse définition (prompts dans docs/prompts-images.md), puis réactiver leurs bannières dans `colPic()` (app.js).
2. Commander les échantillons des produits héros ; remplacer les silhouettes `ill()` par de vraies photos produit.
3. Valider les héros avec Minea/Dropispy, TikTok, Google Trends (colonnes dans correspondance-cj.csv) ; ajuster les prix au coût CJ réel (viser ×2,5 à ×3).
4. Compléter les crochets des pages légales (SIREN, adresse, médiateur) et les faire relire.
5. Mettre en place la boutique Shopify (voir « Reproduire le site de démonstration sur Shopify » dans docs/plan-du-site.md).

## Règles pour les prochaines modifications

- Garder la page d'accueil courte : pas de section sans vrai contenu.
- Pas de dark pattern ni d'urgence artificielle (règles DGCCRF, prix de référence sur 30 jours).
- Tester sur mobile (390 px) et ordinateur (1440 px) : aucun débordement horizontal.
