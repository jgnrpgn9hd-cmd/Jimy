# VAURE – État du lancement (29 octobre 2026)

Le thème Rebel (VAURE) est le thème publié sur jimenez-shop.com.

## En ligne
- 32 fiches VAURE actives et publiées (Sac Besace, 4 couleurs, en brouillon : stock 0).
- Collections publiées : Bijoux, Colliers, Bracelets, Boucles d'oreilles, Bagues, Sacs, Ceintures, Idées cadeaux, Les incontournables, Coffret.
- Pages publiées : Notre histoire, Livraison, Suivre ma commande, Retours, Matières et entretien, Questions fréquentes, Contact (formulaire seul, pas d'adresse e-mail), Confidentialité, Cookies.
- Journal : 8 articles publiés. Non publiés : piercings, foulard, bijoux sans perçage (produits non vendus).
- Délais affichés partout : 11 à 21 jours ; livraison 3,90 €, offerte dès 35 €.
- Photos avec texte du fournisseur retirées ou nettoyées (Bague Ovales argentée refaite).

## Retiré
- Lien « Créez votre coffret » (aucun produit coffret).
- Liens CGV et Mentions légales VAURE du pied de page, en attente des informations du vendeur.

## À faire (propriétaire)
1. Activer Shopify Payments.
2. Donner nom, statut, SIREN, adresse et médiateur de la consommation → publier CGV et Mentions légales, remettre les liens.
3. Renommer la boutique « Jimenez » en VAURE (pied de page, titre des pages, e-mails, paiement).
4. Relier dans CJ les fiches couleur (Collier Serpent Plat – Argenté, Fleurs Ajourées Blanche et Dorée…).
5. Décider du sort des produits Jiménez (encore trouvables par la recherche).
6. Le thème publié ne peut plus être modifié par l'API : dupliquer le thème pour toute évolution du code.

## Mise à jour – fiches séparées
- « Bague Ajustable » (9 modèles) séparée en 9 fiches, une par modèle et par couleur, avec pastilles doré/argenté :
  Chevalière Ovale (dorée, argentée), Vague Fine (dorée, argentée), Double Vague (dorée, argentée), Torsade (dorée, argentée), Anneaux (dorée).
  L'ancienne adresse /products/bague-ajustable redirige vers la Chevalière Ovale dorée.
- « Fleur de Nacre » séparée en Collier, Bracelet, Puces et Parure (Duo ou 3 pièces). L'ancienne adresse redirige vers la Parure.
- À faire dans CJ : relier les 8 nouvelles bagues et les 3 nouvelles fiches Fleur de Nacre à leur produit CJ.
- Photos : cotes et textes du fournisseur retirés (bagues, colliers Superposé, Trio de Créoles argenté).
- Séparés aussi : Bracelets à Empiler (Jonc Strié, Perles Dorées, Chaîne à Zircons), Collier Superposé (Vague Zircons, Lariat Zircons, Pendentif Navette), Torsade Plate (collier, bracelet), Bracelet Tennis (Ovales, Navette), Duo et Parure Fleur de Nacre.
- 50 fiches en ligne. Une seule a plusieurs choix : Bague Maillons (tailles).
- À relier dans CJ : 18 nouvelles fiches au total (8 bagues, 3 Fleur de Nacre, Duo Fleur de Nacre, Bracelet Perles Dorées, Bracelet Chaîne à Zircons, Collier Lariat Zircons, Collier Pendentif Navette, Bracelet Torsade Plate, Bracelet Tennis Navette).

## Mise à jour du 31/10 – pages et site

- 113 photos : texte alternatif lisible (Google Images, accessibilité) au lieu des codes fournisseur.
- « Plaqué or » remplacé par « doré » dans 10 fiches et leurs textes Google.
- Collections Colliers, Boucles d'oreilles, Parures, Nouveautés, Idées cadeaux : textes et SEO corrigés.
- Première photo différente pour Céleste, Ondine, Perla et Léa (plus de doublons dans les grilles).
- CGV et mentions légales (non publiées) : délai 11–21 jours, plus de nom de domaine ni d'e-mail inventés, TVA non applicable (art. 293 B). Reste à remplir : nom, SIREN, adresse, e-mail, médiateur.
- Coût par article dans Shopify converti de USD en EUR (× 0,8985 × 1,02, comme l'Excel) pour 56 variantes.
- Emails automatiques semaine 7 rédigés : `emails-semaine-7.md`.
- Plan Meta Ads semaine 8 rédigé : `meta-ads-semaine-8.md` (aucun compte VAURE connecté à PlugKit pour l'instant, seulement Instagram Jiménez).
- Audit complet v2 (ordinateur + mobile) : bandeau « Retours sous 30 jours » (plus de « gratuits »), offre duo dans le bandeau, garantie « Livraison offerte dès 35 € », délai 11–21 jours sur les fiches, lettre VAURE avec la promesse −10 %, « propulsé par Shopify » retiré, comparatif du panier sans « 316L », sous-titres dans les suggestions du panier, image Sacs = Sac Sola (plus la Besace en brouillon), Idées cadeaux en tri manuel sans doublon avec l'accueil.
- 01/11 – Ajouts v2 (`snippets/vaure-extras.liquid`, `vaure-theme-init.liquid`) : mode sombre (bouton + réglage du téléphone), retour en haut, contact flottant, barre de lecture (pages et articles), apparition douce des sections, effets au survol, copier le lien (fiches et articles), version imprimable, afficher le mot de passe, suivi UTM dans les attributs du panier, messages formulaire envoyé / erreur en français, confirmation avant de retirer un article, date de mise à jour (métachamp `vaure.mise_a_jour` sur 9 pages), FAQ dépliable. Déjà dans le thème : bandeau cookies, recherche, menu mobile, en-tête fixe, lien « passer au contenu », transitions de page.
- 01/11 – Suivi de commande : application CWILL (ex-Parcel Panel) installée, page `/apps/parcelpanel` reliée au menu Aide, aux pages Suivre ma commande et Livraison, à la FAQ et à l'email Merci.
- 01/11 – Section « Collage VAURE » (sections/vaure-collage.liquid) ajoutée à l'accueil après Nouveautés : grande image colliers superposés + Romy/Perla/Elsa + Collier Ondine + Bracelet Stella + Idées cadeaux. Réglable dans l'éditeur de thème.
- 01/11 – Visuels fiches : « Guide bague ajustable » ajouté en fin de galerie sur 11 bagues, « VAURE ou bijou fantaisie » sur 42 bijoux (fichiers dans `vaure/visuels/`).
- 01/11 – Identité de marque : charte (`charte-de-marque.md`), monogramme V (favicon v2), cartes merci + notice entretien A6 (`vaure/marque/vaure-cartes-colis.pdf`). vaure.fr et vaurebijoux.com disponibles.
- 01/11 – Expérience client : ligne de garanties + logos de paiement dans le pied de page (v2). Le bloc logos est VIDE : aucun moyen de paiement activé sur la boutique → Shopify Payments à activer. Vitesse mobile mesurée : LCP 0,9 à 1,9 s.
- 01/11 – Nettoyage (accord explicite de la propriétaire) : 106 produits supprimés (80 Jiménez : huiles, coffrets, charcuterie, exemples Shopify, anciens imports CJ refusés ; 26 brouillons VAURE : ancien catalogue + doublons). Gardés : 50 VAURE actifs, 4 Sac Besace (brouillon).
- 5 nouveaux imports CJ arrivés ACTIFS avec le vendeur « Jimenez » → passés en brouillon. Refusés et supprimés : bracelet en fer, puces « matière : other ». À transformer en fiches VAURE (acier inoxydable) : colliers géométriques zircons (5 modèles), colliers/bracelets perles « sweater chain » (6 modèles), bagues acier doré (5 modèles, tailles 6/7/8).
- 01/11 – 16 nouvelles fiches VAURE créées en brouillon (5 colliers géométriques, 3 bracelets + 3 colliers perles, 5 bagues), photos nettoyées, prix ,90, marges ≥ 13 € dans le pire cas, livraison VAURE, publiées sur la boutique en ligne (visibles dès passage en Actif). Liaison CJ à faire : `liaison-cj.md`.
- 01/11 – Fonds uniformes : 65 produits ont maintenant une photo détourée sur fond crème #F8F5F0 en 1re position (`vaure/visuels/fond-creme/`), anciens packshots détachés, photos portées gardées en 2e (effet survol). Exception : Créoles Tess Doré (photo portée en 1re). Les 16 nouvelles fiches sont passées ACTIVES.
- 01/11 – Publication du thème v2 impossible par l'API (bloquée) : à faire à la main (Boutique en ligne → Thèmes → Publier).
- 01/11 – Pubs Instagram : 5 visuels dans `vaure/pubs/` (Rivière, Bagues, Colliers, Nouveautés, Cadeau) + guide `lancer-les-pubs-instagram.md`.
- 01/11 – ANNULÉ à la demande de la propriétaire : fonds crème détourés (bijoux coupés, rendu pas beau). Les 70 produits ont retrouvé exactement leurs photos et leur ordre d'avant (vérifié). Pubs bagues/cadeau/nouveautés supprimées (elles utilisaient ces détourages). Règle : ne plus détourer les photos produits.
- 01/11 – Domaine **vaure.fr** acheté. À faire : le définir comme domaine principal (jimenez-shop.com redirigera vers lui).
- 01/11 – Code promo **CRUSH20** : −20 % sur tout le site, du 01/11 au 08/11 23h59 (Paris), non cumulable avec le −10 % dès 2 articles, cumulable avec la livraison offerte. Marge pire cas ≈ 8 € (bague à 23,90).
- 01/11 – Nettoyage Jiménez : pages À propos, FAQ, Mentions légales (ancienne), Contact (ancienne), Huiles d'olives dépubliées + redirections vers les pages VAURE ; 3 brouillons CJ passés au vendeur VAURE. Restent publiées (dépublication bloquée par l'API) : collections vides « Huiles d'olive » et « Exemples de produits Bijoux ». Nom de boutique « Jimenez » à changer par la propriétaire.
- 01/11 – CGV et Mentions légales VAURE publiées (adresse provisoire : 5 rue du Docteur Schapira, Neuilly-sur-Marne, à remplacer par la domiciliation). Liens ajoutés au menu « VAURE – Maison », /pages/mentions-legales redirigé. Manque : médiateur de la consommation, nom de l'entrepreneur (directeur de publication). Politiques Shopify (Contact, CGU) non modifiables par l'API.
- 01/11 – E-mail personnel retiré des CGV et Mentions légales (remplacé par le formulaire de contact). À prévoir : contact@vaure.fr (transfert d'e-mail Shopify) à ajouter.
- 01/11 – Accueil v2 : haut de page remplacé par la photo de colliers superposés floutée (vaure-hero-flou.jpg / -mobile.jpg), texte en clair (scheme-6). Image d'aperçu des liens floutée dans Fichiers : vaure-apercu-lien-flou.jpg (à choisir dans Préférences).
- 01/11 – « noircir » remplacé par « fait(e)s pour durer » partout : 58 fiches produits (texte + SEO), 5 collections, pages Notre histoire / Matières / FAQ, 3 articles du Journal, thème v2 (accueil, comparatif panier et fiche, titre SEO, impression), 6 pubs et image de lien.
- 01/11 – Marché « Francophonie » créé (Monaco, Canada, DOM-TOM, Maroc, Tunisie, Sénégal, Côte d'Ivoire, Cameroun) ; marchés Belgique et Suisse déjà actifs. Profil de livraison VAURE : Luxembourg/Monaco 3,90 € (offerte ≥35), Outre-mer 5,90 € (≥50), Canada 6,90 € (≥50), Afrique francophone 7,90 € (≥60). Pages Livraison et CGV mises à jour. À vérifier : vrais frais CJ vers ces pays.
- 02/11 – Jeu concours « Gagne la Parure Flore » : règlement publié (/pages/reglement-jeu-concours), visuels post + story dans vaure/pubs/jeu-concours/. Du 03/11 18 h au 09/11 23 h 59, tirage le 10/11.
