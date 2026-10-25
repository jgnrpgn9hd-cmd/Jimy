# VAURE

Bijoux dorés qui ne noircissent pas (acier 316L et titane), foulards satinés, accessoires cheveux et petits sacs. Dropshipping CJ, méthode Scutify.

- `site/` : maquette complète du site (HTML, CSS, JS sans framework). Catalogue et réglages dans `data.js`, interface dans `app.js`. Pages : accueil, collections avec tri, fiches produit, coffret, recherche, panier, commande en 3 étapes et confirmation, compte, journal, pages d'aide et légales, cookies, 404.
- `shopify/` : `produits-shopify.csv` (import Shopify, 21 produits en brouillon, généré par `generer-csv.js`) et `migration-shopify.md` (passer la maquette sur Shopify, étape par étape).
- `presentation/` : présentation PowerPoint du projet.
- `logo/` : logo en PNG (noir, ivoire, or).
- `docs/plan-vaure.md` : niche, catalogue, marges, urgence, pubs, international, mise en place Shopify.
- `correspondance-cj.csv` : produits, mots-clés CJ, prix, coûts à remplir.

```bash
cd site && python3 -m http.server 8000   # puis http://localhost:8000
```

Règles : ton de maison de bijoux, jamais de vocabulaire « Temu » (voir plan, section 4 bis) ; pas de faux avis, faux stock ni faux compte à rebours ; « plaqué or », jamais « or » seul ; « satiné », jamais « soie » sans preuve ; aucun logo ni motif de marque ; illustrations à remplacer par les photos CJ et des échantillons.
