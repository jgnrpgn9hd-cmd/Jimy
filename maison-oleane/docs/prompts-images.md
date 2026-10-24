# Prompts images — Maison Oléane

Version complète et à jour : https://claude.ai/artifact/AHSUpFfFzoaipq3GowDoa5

## Règle d'or

- **Images d'ambiance** (accueil, pièces, univers, Noël) : générées avec ChatGPT, dans une seule conversation pour garder le même appartement.
- **Photos produit** : toujours à partir de la vraie photo CJ (ou de tes échantillons). On garde l'objet identique, on change seulement le décor. Pas d'image produit inventée.

## Style commun (premier message dans ChatGPT)

```text
Tu vas créer les photos de la boutique de décoration Maison Oléane. Respecte ce style pour toutes les images de cette conversation :
- Une vraie photo prise par une personne dans un appartement habité, avec un appareil photo et un objectif 35 mm. Pas un rendu 3D, pas une image de catalogue trop parfaite.
- Lumière naturelle de jour, balance des blancs neutre, blancs vraiment blancs. Fenêtre légèrement surexposée, comme en vrai.
- Petites imperfections de la vie réelle : un plaid un peu froissé, un livre ouvert, une tasse à moitié bue, un coussin pas parfaitement aligné, quelques traces d'usure sur le bois.
- Composition légèrement asymétrique, cadrage naturel, comme une photo prise debout dans la pièce.
- Léger grain photo, contraste doux, couleurs un peu désaturées. Pas d'effet brillant, pas de rayons de lumière dramatiques, pas de flou d'arrière-plan exagéré.
- Palette : blanc, beige, bois clair, terre cuite, vert sauge, touches de laiton. Pas de couleurs vives.
- Aucun texte, aucun logo, aucune marque, aucune personne visible.
Réponds seulement « Prêt » pour ce message.
```

## Série haussmannienne

Validées et intégrées : accueil (salon avec cheminée), salon, chambre, cuisine, salle de bain.
Ingrédients communs : même appartement haussmannien, lampes allumées, extérieur bleuté du soir, bouclette, velours sauge, travertin, laiton, lin, parquet en point de Hongrie.

Restent à générer (remplacent les découpes floues du collage dans `site/images/`) :

| Image | Fichier à remplacer | Prompt |
| --- | --- | --- |
| Entrée | entree.jpg | Photo verticale 3:4 de l'entrée du même appartement haussmannien : console fine en bois clair avec un vide-poche en céramique, des clés et une petite lampe allumée, grand miroir arrondi au cadre doré au-dessus. Patères en laiton avec un manteau en laine camel. Panier en osier au sol, parquet en point de Hongrie, moulures, porte d'entrée haussmannienne. Même lumière que les autres pièces, objectif 35 mm, léger grain, couleurs naturelles. |
| Bureau | bureau.jpg | Photo verticale 3:4 d'un coin bureau dans le même appartement, devant une grande fenêtre : bureau en chêne clair, sous-main en cuir cognac, lampe de bureau en laiton allumée, carnet ouvert, tasse en céramique, petite plante. Chaise en bois et cannage. Extérieur bleuté du soir, objectif 35 mm, léger grain. |
| Balcon | balcon.jpg | Photo verticale 3:4 du petit balcon haussmannien de l'appartement, à la tombée du jour : garde-corps en fer forgé, guirlande lumineuse allumée, lanterne avec une bougie, jardinière d'herbes aromatiques, chaise bistrot, plaid sur la chaise. Toits de Paris en arrière-plan, ciel bleu du soir. Objectif 35 mm, léger grain. |
| Univers bohème | boheme.jpg | Photo verticale 3:4 d'un coin du même appartement en version bohème chic : fauteuil en rotin avec un coussin en lin, grand vase en terre cuite avec herbe de pampa, tapis berbère crème, panier en osier, lampe allumée. Lumière du soir, objectif 35 mm, léger grain. |
| Univers scandinave | scandi.jpg | Photo verticale 3:4 d'un coin du même appartement en version scandinave : banc en chêne blond, vase en céramique blanche avec une branche, lampe champignon allumée, plaid gris clair, lin naturel, lignes simples. Lumière du soir, objectif 35 mm, léger grain. |
| Univers industriel | indus.jpg | Photo verticale 3:4 d'un coin du même appartement en version industrielle douce : fauteuil en cuir cognac, lampe en métal noir allumée, étagère en métal et bois avec quelques livres, verre fumé, plante verte. Lumière du soir, objectif 35 mm, léger grain. |
| Univers chic classique | chic.jpg | Photo verticale 3:4 d'un coin du même appartement en version chic classique : cheminée en marbre blanc, grand miroir arrondi doré, bougeoirs en laiton allumés, fauteuil en velours vert sauge, vase en verre avec des branches. Lumière du soir, objectif 35 mm, léger grain. |
| Édition de Noël | noel.jpg | Photo paysage 3:2 de la salle à manger du même appartement haussmannien dressée pour Noël : grande table en bois, nappe en lin, assiettes en céramique, verres côtelés, bougies longues dans des bougeoirs en laiton, branches de sapin posées sur la table, petit sapin discret avec lumières chaudes au fond. Extérieur bleuté du soir, objectif 35 mm, léger grain, pas de décoration rouge vif. |

## Photos produit (à partir de la photo CJ)

```text
Voici la photo d'origine du produit « [NOM] ». Garde ce produit strictement identique : même forme, mêmes proportions, même couleur, même matière, mêmes détails. Ne le redessine pas et ne l'embellis pas. Change uniquement le décor autour : place-le [DÉCOR], dans le style Maison Oléane défini au début. Format portrait 4:5, produit bien visible au centre.
```

```text
Voici la photo d'origine du produit « [NOM] ». Garde ce produit strictement identique. Place-le seul sur un fond uni blanc lin (#F6F3EE), centré, avec une ombre douce au sol et une lumière de studio diffuse. Format carré 1:1, aucun accessoire, aucun texte.
```

Le décor de chacun des 62 produits est dans la version en ligne du document.
