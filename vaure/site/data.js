/* VAURE — données de la boutique : réglages et catalogue.
   Ce fichier est la source du fichier d'import Shopify (../shopify/produits-shopify.csv). */

const CONFIG = {
  livraisonOfferteDes: 35,
  fraisLivraison: 3.9,
  delai: { prepa: [1, 3], transport: [7, 12] }, // jours ouvrés — « Jewel Shipping » CJ vers la France, à confirmer
  noelLimite: "2026-12-08",
  promo: null, // ex. { debut, fin, code, taux, texte } — une maison de bijoux fait peu de promotions ; à n'activer que pour une vraie vente privée
  bienvenue: { code: "BIENVENUE10", taux: 0.10 },
  duoRemise: 0.30, // prix « avec » pour la pièce assortie (jamais affiché en pourcentage)
  box: { 3: 29.9, 5: 44.9, plafond: 19.9 }, // bijoux éligibles jusqu'à 19,90 €
  email: "contact@vaurestudio.com",
  // blocs masqués tant qu'ils seraient vides : passer à true quand on peut les remplir
  afficher: {
    avis: false,      // avis clientes (accueil et fiches) : après les premières commandes
    instagram: false, // « Portés par vous » : quand le compte Instagram a des photos
    reseaux: false,   // liens Instagram, TikTok, Pinterest du pied de page : quand les comptes existent
    notes: false      // notes de travail entre crochets et mentions « illustration provisoire »
  }
};

/* ---------- catalogue ----------
   cj : référence CJ connue ; les autres sont à trouver (voir docs/plan-vaure.md). */
const CATS = {
  bijoux: { nom: "Bijoux", sous: ["Colliers", "Bracelets", "Boucles d'oreilles"], intro: "Acier inoxydable 316L et titane, dorés. Ils se portent sous la douche, à la mer et au sport, sans noircir." },
  piercings: { nom: "Piercings", sous: ["Titane", "Sans perçage"], intro: "Des piercings en titane pour les peaux sensibles, et des bijoux « effet piercing » qui se clipsent, sans trou." },
  foulards: { nom: "Foulards et cheveux", sous: ["Foulards", "Cheveux"], intro: "Des foulards satinés fins et des accessoires cheveux dorés, pour finir une tenue en un geste." },
  sacs: { nom: "Sacs", sous: ["Mini sacs", "Pochettes"], intro: "Des petits sacs sans logo, à porter le jour comme le soir." },
  cadeaux: { nom: "Idées cadeaux", sous: ["Parures", "Petites attentions"], intro: "Des parures prêtes à offrir et de petites attentions à offrir." }
};
const METAUX = [{ id: "or", nom: "Doré", hex: "#C9A35E" }, { id: "argent", nom: "Argenté", hex: "#BFC1C2" }];

const P = {
  "collier-marguerite": { nom: "Collier Marguerite", cat: "bijoux", sub: "Colliers", prix: 24.9, ill: "collier-fleur", metaux: ["or"], tag: "Incontournable",
    mat: "Acier titane plaqué or", cj: "CJLX171494501AZ", duo: "bracelet-marguerite",
    desc: "Une chaîne fine semée de petites marguerites dorées. Discret le jour, il illumine un décolleté le soir." },
  "bracelet-marguerite": { nom: "Bracelet Marguerite", cat: "bijoux", sub: "Bracelets", prix: 19.9, ill: "bracelet-fleur", metaux: ["or"],
    mat: "Acier titane plaqué or", duo: "collier-marguerite", desc: "Le bracelet assorti au collier Marguerite, réglable de 16 à 21 cm." },
  "puces-marguerite": { nom: "Puces Marguerite", cat: "bijoux", sub: "Boucles d'oreilles", prix: 16.9, ill: "puces-fleur", metaux: ["or"],
    mat: "Acier inoxydable 316L plaqué or", duo: "collier-marguerite", desc: "De petites fleurs dorées qui suivent la parure Marguerite. Tige en acier 316L." },
  "chaine-serpent": { nom: "Chaîne Serpent", cat: "bijoux", sub: "Colliers", prix: 19.9, ill: "collier-serpent", metaux: ["or", "argent"],
    mat: "Acier inoxydable 316L", duo: "jonc-fin", desc: "Une chaîne plate et liquide qui attrape la lumière. Elle se porte seule ou avec d'autres colliers." },
  "collier-initiale": { nom: "Collier Initiale", cat: "bijoux", sub: "Colliers", prix: 24.9, ill: "collier-initiale", metaux: ["or", "argent"], tag: "Idée cadeau",
    mat: "Acier inoxydable 316L", duo: "bracelet-trombone", desc: "Une lettre dorée sur une chaîne fine. Le cadeau personnel qui ne se trompe pas." },
  "jonc-fin": { nom: "Jonc Fin", cat: "bijoux", sub: "Bracelets", prix: 19.9, ill: "jonc", metaux: ["or", "argent"],
    mat: "Acier inoxydable 316L", duo: "chaine-serpent", desc: "Un jonc ouvert, fin et lisse, qui s'empile avec vos autres bracelets." },
  "bracelet-trombone": { nom: "Bracelet Trombone", cat: "bijoux", sub: "Bracelets", prix: 17.9, ill: "bracelet-maille", metaux: ["or", "argent"],
    mat: "Acier inoxydable 316L", duo: "collier-initiale", desc: "Une maille trombone tendance, ni trop fine ni trop épaisse." },
  "creoles-epaisses": { nom: "Créoles Épaisses", cat: "bijoux", sub: "Boucles d'oreilles", prix: 19.9, ill: "creoles", metaux: ["or", "argent"], tag: "Incontournable",
    mat: "Acier inoxydable 316L", duo: "chaine-serpent", desc: "Des créoles bombées et légères : l'effet bijou en or, sans le poids." },
  "creoles-fines": { nom: "Mini Créoles", cat: "bijoux", sub: "Boucles d'oreilles", prix: 14.9, ill: "creoles-fines", metaux: ["or", "argent"],
    mat: "Acier inoxydable 316L", duo: "jonc-fin", desc: "De petites créoles qu'on ne quitte plus, même pour dormir." },
  "anneau-nez-titane": { nom: "Anneau de nez Titane", cat: "piercings", sub: "Titane", prix: 14.9, ill: "anneau-nez", metaux: ["or", "argent"],
    mat: "Titane ASTM F136", piercing: true, duo: "helix-titane", desc: "Un anneau fin à clic, en titane, le métal le mieux toléré par les peaux sensibles." },
  "helix-titane": { nom: "Piercing Hélix Titane", cat: "piercings", sub: "Titane", prix: 14.9, ill: "helix", metaux: ["or", "argent"],
    mat: "Titane ASTM F136", piercing: true, duo: "anneau-nez-titane", desc: "Une petite pierre claire sur une tige en titane, pour l'hélix ou le lobe." },
  "faux-anneau-nez": { nom: "Anneau de nez sans perçage", cat: "piercings", sub: "Sans perçage", prix: 12.9, ill: "anneau-nez", metaux: ["or", "argent"], tag: "Sans perçage",
    mat: "Acier inoxydable 316L", duo: "ear-cuff", desc: "L'allure d'un piercing, sans perçage : il se pose sur la narine et tient toute la journée." },
  "ear-cuff": { nom: "Ear cuff sans perçage", cat: "piercings", sub: "Sans perçage", prix: 14.9, ill: "ear-cuff", metaux: ["or", "argent"], tag: "Sans perçage",
    mat: "Acier inoxydable 316L", duo: "faux-anneau-nez", desc: "Une bague d'oreille qui se glisse sur le cartilage. L'allure d'un piercing, sans perçage." },
  "foulard-satin": { nom: "Foulard Satiné 70 cm", cat: "foulards", sub: "Foulards", prix: 17.9, ill: "foulard", coloris: ["Crème", "Noir", "Caramel"],
    mat: "Polyester satiné, toucher soyeux", duo: "pince-doree", desc: "Au cou, dans les cheveux ou noué sur un sac : un carré satiné qui habille tout." },
  "foulard-fin": { nom: "Foulard Ruban", cat: "foulards", sub: "Foulards", prix: 12.9, ill: "ruban", coloris: ["Crème", "Noir", "Caramel"],
    mat: "Polyester satiné", duo: "pince-doree", desc: "Un foulard long et étroit, à nouer en serre-tête, au poignet ou à l'anse d'un sac." },
  "pince-doree": { nom: "Pince à cheveux Dorée", cat: "foulards", sub: "Cheveux", prix: 12.9, ill: "pince",
    mat: "Métal doré", duo: "foulard-fin", desc: "Une pince géométrique qui tient un chignon flou toute la journée." },
  "barrettes-perles": { nom: "Barrettes Perles, lot de 2", cat: "foulards", sub: "Cheveux", prix: 9.9, ill: "barrette",
    mat: "Métal doré, perles d'imitation", duo: "pince-doree", desc: "Deux barrettes ornées de perles d'imitation, pour une coiffure soignée en un geste." },
  "mini-sac": { nom: "Mini Sac Bandoulière", cat: "sacs", sub: "Mini sacs", prix: 34.9, ill: "mini-sac", coloris: ["Crème", "Noir", "Caramel"], tag: "Nouveauté",
    mat: "Similicuir, chaîne dorée", duo: "foulard-fin", desc: "Juste la place pour le téléphone, les clés et un rouge à lèvres. Bandoulière chaîne amovible." },
  "pochette": { nom: "Pochette Soir", cat: "sacs", sub: "Pochettes", prix: 29.9, ill: "pochette", coloris: ["Crème", "Noir"],
    mat: "Similicuir, fermoir doré", duo: "creoles-epaisses", desc: "Une pochette souple qui se tient à la main ou à l'épaule, pour les dîners et les fêtes." },
  "parure-marguerite": { nom: "Parure Marguerite", cat: "cadeaux", sub: "Parures", prix: 44.9, ill: "parure", metaux: ["or"], tag: "En écrin",
    mat: "Acier titane et 316L plaqué or", parure: ["collier-marguerite", "bracelet-marguerite", "puces-marguerite"],
    desc: "Le collier, le bracelet et les puces Marguerite, réunis dans un écrin." },
  "parure-essentielle": { nom: "Parure Essentielle", cat: "cadeaux", sub: "Parures", prix: 44.9, ill: "parure2", metaux: ["or", "argent"],
    mat: "Acier inoxydable 316L", parure: ["chaine-serpent", "jonc-fin", "creoles-epaisses"],
    desc: "Chaîne Serpent, Jonc Fin et Créoles Épaisses : les trois basiques qui vont avec tout." }
};
