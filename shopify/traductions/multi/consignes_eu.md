# Consignes de traduction — Jiménez (jimenez-shop.com), version Europe

Boutique en ligne d'huiles d'olive vierge extra d'Andalousie, expédiées depuis Paris (entrepôt en région parisienne). Ton : chaleureux, gourmand, simple, phrases courtes. Texte naturel comme écrit par un natif, pas du mot à mot.

## Fichier source
`source.json` : liste `{id, rid, key, digest, fr, ref_es?, note?}`, ids 0 à 169. Traduire `fr`.
Quand `ref_es` existe (textes du thème), le français peut être obsolète sur la livraison : suivre le sens de `ref_es` (version espagnole validée) et adapter au(x) pays de la langue cible (voir tableau plus bas).

## Sortie
Un fichier JSON `{ "<id>": "<traduction>" }`. Aucune valeur vide.

## Règles absolues
- Garder exactement la structure HTML : mêmes balises, même ordre, mêmes `href`, `src`, `width`, `class`, `data-*`. On peut traduire les `alt`.
- Ne jamais modifier les balises Liquid `{{ ... }}` et `{% ... %}`.
- Ne pas traduire : Jiménez / Jimenez, Arbequina, Arbosana, Hojiblanca, Picual, Coupage, Chronopost, Chronopost Classic, Chronopost Classic Europe, Chronopost Express, Chronopost Express International, adresses e-mail, @jimenez_shop_fr, SIRET, adresse postale (seul le nom du pays « France » se traduit), « culinary consulting solution », « La Matilla ».
- Dire « écologique », JAMAIS « bio » ou « biologique » (ni leurs équivalents : Bio, organic, ekologiczny ≠ bio…) : utiliser l'équivalent de « écologique » (de « ökologisch », en « ecological », pl « ekologiczny », sv « ekologisk », da « økologisk », fi « ekologinen », cs « ekologický », el « οικολογικό », hu « ökológiai », ro « ecologic », hr « ekološki », sk « ekologický », sl « ekološki », bg « екологичен », lt « ekologiškas »). « certificado ecológico » (mention espagnole d'origine sur l'étiquette) reste tel quel.
- Ne jamais parler de Noël ni d'anniversaire. « À offrir » = idée cadeau.
- Ne pas inventer d'information, ne pas ajouter de prix produits.
- Le coffret contient Hojiblanca, Arbosana et Picual (pas Arbequina).
- Les montants en euros restent identiques (9,01 €, 80 €, 21,60 €, 25,20 €, 31,20 €, 56,40 €) ; adapter seulement le format local (« € 21,60 » en nl, « €21.60 » en en, etc.).

## Faits livraison (départ Paris, un seul colis)
- France : Chronopost, 3 jours, dès 9,01 €, offerte dès 80 €.
- Belgique, Allemagne, Luxembourg, Pays-Bas : Chronopost Classic, 2 à 3 jours ouvrés, dès 21,60 €.
- Espagne, Portugal, Italie, Autriche, Danemark, Finlande, Grèce, Irlande, Suède : Chronopost Classic, 2 à 3 jours ouvrés, dès 25,20 €.
- Pologne, Tchéquie, Slovaquie, Hongrie, Roumanie, Bulgarie, Croatie, Slovénie, Estonie, Lettonie, Lituanie, Malte, Chypre : Chronopost Classic, 3 à 5 jours ouvrés, dès 31,20 €.
- Suisse : Chronopost Express, 1 à 3 jours ouvrés, dès 56,40 €, droits de douane et TVA suisse à la charge du destinataire.
- Pas de livraison offerte hors de France. Canaries, Ceuta, Melilla non desservies.
Les descriptions des modes de livraison (rid DeliveryMethodDefinition) se traduisent fidèlement, sans adaptation.

## Adaptation des textes du thème (ids avec ref_es qui parlent du pays ou du délai de livraison)
| Langue | Pays visés | Formulation pour le bandeau fiche produit / bloc Livraison / FAQ collection / accueil |
|---|---|---|
| en | Irlande, Malte, Chypre, Estonie, Lettonie + visiteurs européens | « across Europe », 2 to 5 working days |
| de | Allemagne, Autriche, Luxembourg, Suisse | « nach Deutschland, Österreich, Luxemburg und in die Schweiz », 2 bis 3 Werktage (Schweiz: Express, 1 bis 3 Werktage) |
| pl | Pologne | Pologne, 3 à 5 jours ouvrés |
| sv | Suède (et Finlande suédophone) | Suède, 2 à 3 jours ouvrés |
| da | Danemark | Danemark, 2 à 3 jours ouvrés |
| fi | Finlande | Finlande, 2 à 3 jours ouvrés |
| cs | Tchéquie | Tchéquie, 3 à 5 jours ouvrés |
| el | Grèce, Chypre | Grèce 2 à 3 jours, Chypre 3 à 5 jours ouvrés |
| hu | Hongrie | Hongrie, 3 à 5 jours ouvrés |
| ro | Roumanie | Roumanie, 3 à 5 jours ouvrés |
| hr | Croatie | Croatie, 3 à 5 jours ouvrés |
| sk | Slovaquie | Slovaquie, 3 à 5 jours ouvrés |
| sl | Slovénie | Slovénie, 3 à 5 jours ouvrés |
| bg | Bulgarie | Bulgarie, 3 à 5 jours ouvrés |
| lt | Lituanie | Lituanie, 3 à 5 jours ouvrés |
Pages FAQ (id 5) et « À offrir » (id 9) : traduction fidèle, sans adaptation (elles listent tous les pays).

## Registre
Vouvoiement poli dans les langues qui le distinguent (de « Sie », fr-like formal for pl « Państwo », cs/sk « Vy », hu « Ön », ro « dumneavoastră », hr/sl/bg/lt forme polie, el plural polite), sauf sv, da, fi, en où le ton direct et chaleureux standard s'impose (du/du/sinä/you).
