# Consignes de traduction — Jiménez (jimenez-shop.com)

Boutique en ligne d'huiles d'olive vierge extra d'Andalousie, expédiées depuis Paris. Ton : chaleureux, gourmand, simple, phrases courtes. Pas de traduction mot à mot : un texte naturel, comme écrit par un natif.

## Fichier source
`source.json` : liste d'éléments `{id, rid, key, digest, fr, ref_es?, note?}`. Traduire `fr` vers la langue cible.
Quand `ref_es` existe (textes du thème), le français est parfois obsolète sur la livraison : suivre le sens de `ref_es` (version validée) et adapter au pays du marché.

## Sortie
Un fichier JSON `{ "<id>": "<traduction>" }` avec TOUS les ids (sauf exceptions indiquées dans la tâche). Aucune clé vide.

## Règles absolues
- Garder exactement la structure HTML : mêmes balises, même ordre, mêmes attributs `href`, `src`, `width`. On peut traduire les `alt` d'images.
- Ne jamais modifier les balises Liquid `{{ ... }}` et `{% ... %}` (ni leur contenu).
- Ne pas traduire : Jiménez / Jimenez, Arbequina, Arbosana, Hojiblanca, Picual, Coupage, Chronopost, Chronopost Classic Europe, adresses e-mail, @jimenez_shop_fr, SIRET, adresse postale (seul le nom du pays « France » se traduit), « culinary consulting solution ».
- Dire « écologique », JAMAIS « bio » ni « biologique » : es « ecológico », pt « ecológico », it « ecologico », nl « ecologisch ». « certificado ecológico » (mention espagnole d'origine sur l'étiquette) reste tel quel.
- Ne jamais parler de Noël ni d'anniversaire. « à offrir » = idée cadeau.
- Ne pas inventer d'information. Ne pas ajouter de prix produits.
- Le coffret contient Hojiblanca, Arbosana et Picual (pas Arbequina).

## Faits livraison (à respecter quand un texte parle de livraison)
- Tout part de Paris, en un seul colis.
- France : Chronopost, livré en 3 jours, à partir de 9,01 €, offerte dès 80 €.
- Belgique : Chronopost Classic, 2 à 3 jours ouvrés, à partir de 18 €.
- Espagne, Italie, Portugal : Chronopost Classic, 2 à 3 jours ouvrés, à partir de 21 €. Canaries, Ceuta et Melilla non desservies.
- Pas de livraison offerte hors de France.
Les descriptions des modes de livraison (rid DeliveryMethodDefinition) se traduisent fidèlement, sans adaptation.
Les textes du thème qui parlent du pays de livraison (ex. bandeau fiche produit, bloc « Livraison », FAQ de la collection) s'adaptent au marché de la langue :
- es → Espagne (España peninsular y Baleares) ; pt-PT → Portugal ; it → Italie ; nl → Belgique.

## Registre
- es : tutoiement (« tú », « escríbenos ») pour les textes du thème ; pages et fiches produit : tutoiement aussi, cohérent.
- pt-PT : portugais d'Europe (pas brésilien), forme polie à la 3e personne (« Escreva-nos », « a sua encomenda »).
- it : tutoiement (« scrivici », « il tuo ordine »).
- nl : néerlandais de Belgique (Vlaams standaard), vouvoiement « u » (« Schrijf ons », « uw bestelling »).
