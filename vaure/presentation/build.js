// Présentation VAURE — devoir « Dire la niche »
const pptxgen = require("pptxgenjs");
const { applyTheme } = require("/root/.claude/skills/synced/02482a84-12a4-4e3f-add0-42d448d2f581_aa6104c7-d457-47b7-b527-0f8849cb371a/pptx/scripts/apply_theme.js");

const OUT = process.argv[2] || "VAURE-presentation.pptx";
const THEME = {
  name: "VAURE",
  headFontFace: "Cambria",
  bodyFontFace: "Calibri",
  colors: {
    dk1: "151412", lt1: "FFFFFF", dk2: "5A554E", lt2: "F6F2EB",
    accent1: "B08D57", accent2: "4E6B4F", accent3: "9A4A3C", accent4: "D9C7A3",
    accent5: "E6DFD3", accent6: "2E2B27", hlink: "B08D57", folHlink: "5A554E"
  }
};

const pres = new pptxgen();
pres.layout = "LAYOUT_WIDE"; // 13,33 × 7,5 in
pres.theme = { headFontFace: THEME.headFontFace, bodyFontFace: THEME.bodyFontFace };
pres.title = "VAURE — présentation du projet";
pres.author = "VAURE";
const C = pres.SchemeColor;
const W = 13.333, M = 0.6;

/* ---------- mises en page ---------- */
pres.defineSlideMaster({
  title: "SOMBRE",
  background: { color: C.text1 },
  objects: [
    { placeholder: { options: { name: "kicker", type: "body", x: M, y: 1.55, w: 12.1, h: 0.5, fontSize: 14, color: C.accent1, bold: true, charSpacing: 4, align: "center" }, text: "" } },
    { placeholder: { options: { name: "title", type: "title", x: M, y: 2.15, w: 12.1, h: 2.3, fontSize: 44, color: C.background1, align: "center", fontFace: THEME.headFontFace }, text: "" } },
    { placeholder: { options: { name: "body", type: "body", x: 1.6, y: 4.7, w: 10.1, h: 1.3, fontSize: 20, color: C.accent4, align: "center" }, text: "" } }
  ]
});
pres.defineSlideMaster({
  title: "CONTENU",
  background: { color: C.background1 },
  margin: [0.5, 0.6, 0.6, 0.6],
  objects: [
    { placeholder: { options: { name: "kicker", type: "body", x: M, y: 0.35, w: 9, h: 0.4, fontSize: 12, color: C.accent1, bold: true, charSpacing: 3, margin: 0 }, text: "" } },
    { placeholder: { options: { name: "title", type: "title", x: M, y: 0.72, w: 12.1, h: 0.9, fontSize: 36, color: C.text1, fontFace: THEME.headFontFace, margin: 0, valign: "top", align: "left" }, text: "" } },
    { text: { text: "V A U R E   ·   Projet de boutique", options: { x: M, y: 7.0, w: 8, h: 0.3, fontSize: 10, color: C.text2, margin: 0 } } }
  ],
  slideNumber: { x: 12.2, y: 7.0, w: 0.5, h: 0.3, fontSize: 10, color: C.text2, align: "right" }
});

/* ---------- aides ---------- */
const dark = (sec, kicker, title, body) => {
  const s = pres.addSlide({ masterName: "SOMBRE", sectionTitle: sec });
  s.addText(kicker, { placeholder: "kicker" });
  s.addText(title, { placeholder: "title" });
  if (body) s.addText(body, { placeholder: "body" });
  return s;
};
const content = (sec, kicker, title) => {
  const s = pres.addSlide({ masterName: "CONTENU", sectionTitle: sec });
  s.addText(kicker, { placeholder: "kicker" });
  s.addText(title, { placeholder: "title" });
  return s;
};
// pastille dorée cerclée (motif du site : cercle fin doré)
const pastille = (s, x, y, label, name, d = 0.75) => {
  s.addShape(pres.shapes.OVAL, { x, y, w: d, h: d, fill: { color: C.background1 }, line: { color: C.accent1, width: 1.25 }, objectName: name + " cercle" });
  s.addText(label, { x, y, w: d, h: d, align: "center", valign: "middle", fontSize: 16, bold: true, color: C.accent1, fontFace: THEME.headFontFace, margin: 0, isTextBox: true, objectName: name + " texte" });
};
const carte = (s, x, y, w, h, name, fill = C.background2) =>
  s.addShape(pres.shapes.RECTANGLE, { x, y, w, h, fill: { color: fill }, line: { color: fill, width: 0 }, objectName: name });

/* ===== 1. Ouverture ===== */
pres.addSection({ title: "Ouverture" });
{
  const s = dark("Ouverture", "PROJET DE BOUTIQUE EN LIGNE", [{ text: "V A U R E", options: { fontSize: 66 } }],
    "Des bijoux dorés qui ne noircissent pas.\nAcier inoxydable 316L et titane, pour les femmes qui veulent briller tous les jours.");
  s.addNotes("Présentation du projet VAURE. Le devoir demandé : dire la niche. La réponse est sur la diapositive suivante, puis j'explique pourquoi ce choix et comment on va vendre.");
}

/* ===== 2. Devoir : la niche ===== */
pres.addSection({ title: "La niche" });
{
  const s = content("La niche", "DEVOIR  ·  DIRE LA NICHE", "Ma niche en une phrase");
  carte(s, M, 1.85, 12.1, 1.75, "Encadré niche", C.text1);
  s.addText([
    { text: "Les bijoux dorés en acier inoxydable et en titane ", options: { color: C.background1 } },
    { text: "qui ne noircissent pas et conviennent aux peaux sensibles", options: { color: C.accent1, bold: true } },
    { text: ", pour les femmes de 18 à 45 ans qui achètent sur un coup de cœur ou pour offrir.", options: { color: C.background1 } }
  ], { x: M + 0.4, y: 1.95, w: 11.3, h: 1.55, fontSize: 22, fontFace: THEME.headFontFace, valign: "middle", margin: 0, isTextBox: true, objectName: "Phrase niche" });

  const niveaux = [
    ["1", "Marché", "Les accessoires de mode féminins"],
    ["2", "Catégorie", "Les bijoux fantaisie dorés"],
    ["3", "Niche", "Bijoux en acier 316L et titane qui ne noircissent pas, de 12,90 à 24,90 €"]
  ];
  niveaux.forEach(([n, t, d], i) => {
    const x = M + i * 4.1;
    pastille(s, x, 4.15, n, "Niveau " + n);
    s.addText(t, { x: x + 0.95, y: 4.1, w: 2.9, h: 0.45, fontSize: 20, bold: true, color: C.text1, fontFace: THEME.headFontFace, margin: 0, isTextBox: true, objectName: "Niveau titre " + n });
    s.addText(d, { x: x + 0.95, y: 4.55, w: 2.95, h: 1.3, fontSize: 15, color: C.text2, valign: "top", margin: 0, isTextBox: true, objectName: "Niveau texte " + n });
  });
  s.addText("Du plus large au plus précis : on ne parle pas à toutes les femmes, mais à celles dont les bijoux ont déjà noirci, verdi ou irrité.", { x: M, y: 6.1, w: 12.1, h: 0.6, fontSize: 15, italic: true, color: C.text2, margin: 0, isTextBox: true, objectName: "Conclusion niche" });
  s.addNotes("La niche se dit du plus large au plus précis : marché, catégorie, niche. Ce qui rend la niche précise, c'est la matière (316L et titane) et le problème réglé (le bijou qui noircit, verdit ou irrite).");
}

/* ===== 3. La cliente ===== */
{
  const s = content("La niche", "LA CLIENTE", "À qui je vends");
  carte(s, M, 1.9, 5.2, 4.8, "Carte persona");
  s.addText("Léa, 28 ans", { x: M + 0.35, y: 2.15, w: 4.5, h: 0.6, fontSize: 26, bold: true, color: C.text1, fontFace: THEME.headFontFace, margin: 0, isTextBox: true, objectName: "Persona nom" });
  s.addText([
    { text: "Active, en ville, sur Instagram et TikTok", options: { bullet: true, breakLine: true } },
    { text: "Aime les bijoux fins et dorés, portés tous les jours", options: { bullet: true, breakLine: true } },
    { text: "Budget « coup de cœur » : moins de 30 €", options: { bullet: true, breakLine: true } },
    { text: "Achète aussi pour offrir : amie, sœur, maman", options: { bullet: true } }
  ], { x: M + 0.35, y: 2.9, w: 4.5, h: 3.4, fontSize: 16, color: C.text1, paraSpaceAfter: 10, valign: "top", margin: 0, isTextBox: true, objectName: "Persona détails" });

  const pb = [
    ["1", "Ses bijoux noircissent", "Le collier à 5 € perd sa couleur en deux semaines."],
    ["2", "Ils laissent une trace verte", "Ou ils irritent : oreilles, cou, nez."],
    ["3", "Elle n'ose pas se faire percer", "Elle aime le style piercing, pas le trou."],
    ["4", "Elle cherche un cadeau", "Joli, sûr, livré à temps pour la date."]
  ];
  pb.forEach(([ic, t, d], i) => {
    const y = 1.9 + i * 1.2;
    pastille(s, 6.35, y + 0.05, ic, "Problème " + (i + 1), 0.65);
    s.addText(t, { x: 7.25, y, w: 5.4, h: 0.45, fontSize: 18, bold: true, color: C.text1, margin: 0, isTextBox: true, objectName: "Problème titre " + (i + 1) });
    s.addText(d, { x: 7.25, y: y + 0.45, w: 5.4, h: 0.45, fontSize: 15, color: C.text2, margin: 0, isTextBox: true, objectName: "Problème texte " + (i + 1) });
  });
  s.addNotes("La cliente type et ses quatre problèmes. Chaque produit VAURE répond à l'un d'eux.");
}

/* ===== 4. La promesse ===== */
{
  const s = dark("La niche", "LA PROMESSE PRODUIT", "« Mon bijou aide ma cliente à briller tous les jours, sans qu'il noircisse ni l'irrite. »",
    "Mon produit aide ma cliente à ___, sans ___.");
  s.addNotes("La promesse en une phrase, sur le modèle « mon produit aide ma cliente à ___, sans ___ ». Elle est en haut du site : « Des bijoux qui ne noircissent pas ».");
}

/* ===== 5. Pourquoi cette niche ===== */
pres.addSection({ title: "Pourquoi" });
{
  const s = content("Pourquoi", "POURQUOI CETTE NICHE", "Les 4 critères d'un bon produit");
  const crit = [
    ["Effet wow", "Gros plan doré en vidéo, test sous la douche, bijou sans perçage posé en un geste"],
    ["Problème-solution", "Le bijou qui noircit, verdit ou irrite est une gêne connue de presque toutes les femmes"],
    ["Marge", "Collier Marguerite : 6,64 € livré, vendu 24,90 €, soit 17,51 € avant la pub"],
    ["Volume", "Achat coup de cœur sous 30 €, aucune taille, cadeau toute l'année"]
  ];
  crit.forEach(([t, d], i) => {
    const x = M + (i % 2) * 6.15, y = 1.9 + Math.floor(i / 2) * 2.15;
    carte(s, x, y, 5.95, 1.95, "Critère " + (i + 1));
    pastille(s, x + 0.3, y + 0.3, "✓", "Critère coche " + (i + 1), 0.6);
    s.addText(t, { x: x + 1.1, y: y + 0.3, w: 4.6, h: 0.5, fontSize: 20, bold: true, color: C.text1, fontFace: THEME.headFontFace, margin: 0, isTextBox: true, objectName: "Critère titre " + (i + 1) });
    s.addText(d, { x: x + 1.1, y: y + 0.85, w: 4.6, h: 0.95, fontSize: 15, color: C.text2, valign: "top", margin: 0, isTextBox: true, objectName: "Critère texte " + (i + 1) });
  });
  s.addText("4 critères sur 4. Un bon produit en remplit au moins 3.", { x: M, y: 6.3, w: 12.1, h: 0.4, fontSize: 15, italic: true, color: C.text2, margin: 0, isTextBox: true, objectName: "Verdict critères" });
  s.addNotes("Un produit est retenu s'il remplit au moins 3 critères sur 4. Le collier Marguerite les remplit tous les quatre.");
}

/* ===== 6. Les idées écartées ===== */
{
  const s = content("Pourquoi", "COMMENT J'Y SUIS ARRIVÉ", "Trois idées testées, une seule retenue");
  const rows = [
    [{ text: "Idée", options: { bold: true, color: C.background1, fill: { color: C.text1 } } },
     { text: "Problème rencontré", options: { bold: true, color: C.background1, fill: { color: C.text1 } } },
     { text: "Verdict", options: { bold: true, color: C.background1, fill: { color: C.text1 } } }],
    ["Déco maison, 62 produits", "Trop large : on dirait un bazar, le client ne sait pas ce qu'on vend", { text: "Écartée", options: { color: C.accent3, bold: true } }],
    ["Rideaux thermiques", "Trop lourds : 52 à 61 € la paire livrée depuis la Chine, pour un prix de marché de 80 à 100 €", { text: "Écartée", options: { color: C.accent3, bold: true } }],
    ["Pyjamas de Noël famille", "Beaucoup de tailles, donc des retours, et seulement 6 semaines de saison", { text: "Écartée", options: { color: C.accent3, bold: true } }],
    ["Bijoux 316L et titane", "Quelques grammes, aucune taille, moins de 30 €, toute l'année", { text: "Retenue", options: { color: C.accent2, bold: true } }]
  ];
  s.addTable(rows, { x: M, y: 1.9, w: 12.1, colW: [3.2, 7.1, 1.8], fontSize: 15, color: C.text1, border: { type: "solid", pt: 0.75, color: "E6DFD3" }, rowH: 0.75, valign: "middle", margin: 0.1, fill: { color: C.background1 }, objectName: "Tableau idées" });
  s.addText("Leçon : un produit lourd ou cher ne s'achète pas sur un coup de cœur. Le bijou, si.", { x: M, y: 6.0, w: 12.1, h: 0.5, fontSize: 16, italic: true, color: C.text2, margin: 0, isTextBox: true, objectName: "Leçon" });
  s.addNotes("Les chiffres des rideaux viennent des captures CJ : 51,92 € et 60,91 € pour deux rideaux livrés en France.");
}

/* ===== 7. Le produit héros ===== */
pres.addSection({ title: "L'offre" });
{
  const s = content("L'offre", "LE PRODUIT HÉROS", "Le collier Marguerite");
  const stats = [["6,64 €", "coût livré en France (CJ)"], ["24,90 €", "prix de vente"], ["17,51 €", "reste avant la pub, sans TVA"]];
  stats.forEach(([v, l], i) => {
    const x = M + i * 4.1;
    carte(s, x, 1.95, 3.85, 2.3, "Chiffre " + (i + 1), i === 2 ? C.text1 : C.background2);
    s.addText(v, { x: x + 0.2, y: 2.15, w: 3.45, h: 1.1, fontSize: 48, bold: true, color: i === 2 ? C.accent1 : C.text1, fontFace: THEME.headFontFace, align: "center", margin: 0, isTextBox: true, objectName: "Chiffre valeur " + (i + 1) });
    s.addText(l, { x: x + 0.2, y: 3.3, w: 3.45, h: 0.6, fontSize: 15, color: i === 2 ? C.accent4 : C.text2, align: "center", margin: 0, isTextBox: true, objectName: "Chiffre libellé " + (i + 1) });
  });
  s.addText([
    { text: "Acier titane plaqué or, chaîne fine semée de marguerites", options: { bullet: true, breakLine: true } },
    { text: "Référence CJ : CJLX171494501AZ, ligne « Jewel Shipping » avec suivi", options: { bullet: true, breakLine: true } },
    { text: "Prix fixé à environ 3,7 fois le coût livré (minimum conseillé : 3 fois)", options: { bullet: true, breakLine: true } },
    { text: "À vérifier : 7 jours sous la douche avec l'échantillon avant d'écrire « résiste à l'eau »", options: { bullet: true } }
  ], { x: M, y: 4.6, w: 12.1, h: 2.1, fontSize: 16, color: C.text1, paraSpaceAfter: 8, valign: "top", margin: 0, isTextBox: true, objectName: "Détails héros" });
  s.addNotes("Calcul : 24,90 € moins 6,64 € de coût livré et environ 0,75 € de frais de paiement, soit 17,51 €. Avec la TVA, il reste 13,36 €.");
}

/* ===== 8. La gamme ===== */
{
  const s = content("L'offre", "LA GAMME", "21 produits, un seul style");
  const g = [
    ["Bijoux", "9", "Colliers, bracelets, boucles d'oreilles", "Produits héros, en pub"],
    ["Piercings", "4", "Titane, ou sans perçage", "Produit d'appel n°3"],
    ["Foulards et cheveux", "4", "Foulards satinés, pinces, barrettes", "Pour compléter le panier"],
    ["Sacs", "2", "Mini sac, pochette, sans logo", "Pour monter le panier"],
    ["Parures", "2", "Trois pièces en écrin", "Le cadeau"]
  ];
  g.forEach(([t, n, d, r], i) => {
    const y = 1.85 + i * 0.85;
    pastille(s, M, y + 0.05, n, "Gamme " + t, 0.7);
    s.addText(t, { x: M + 0.95, y, w: 3.6, h: 0.8, fontSize: 19, bold: true, color: C.text1, valign: "middle", margin: 0, isTextBox: true, objectName: "Gamme titre " + t });
    s.addText(d, { x: 4.9, y, w: 4.5, h: 0.8, fontSize: 15, color: C.text2, valign: "middle", margin: 0, isTextBox: true, objectName: "Gamme détail " + t });
    s.addText(r, { x: 9.5, y, w: 3.2, h: 0.8, fontSize: 15, italic: true, color: C.accent1, valign: "middle", margin: 0, isTextBox: true, objectName: "Gamme rôle " + t });
  });
  s.addText("Règle : la cohérence vient du style (doré, crème, noir), pas du type de produit. Aucun logo de marque, « plaqué or » et « satiné », jamais « or » ou « soie » sans preuve.", { x: M, y: 6.2, w: 12.1, h: 0.6, fontSize: 14, color: C.text2, margin: 0, isTextBox: true, objectName: "Règle gamme" });
  s.addNotes("Le catalogue de départ reste petit : on ajoutera ce qui se vend.");
}

/* ===== 9. Le panier moyen ===== */
{
  const s = content("L'offre", "LE PANIER MOYEN", "La marge vient des ensembles");
  s.addChart(pres.charts.BAR, [{ name: "Reste avant la pub (€)", labels: ["Collier seul (24,90 €)", "Collier + bracelet (38,80 €)", "Parure en écrin (44,90 €)"], values: [17.51, 25.6, 27.5] }], {
    x: M, y: 1.85, w: 7.2, h: 4.9, barDir: "bar",
    chartColors: [THEME.colors.accent1],
    showValue: true, dataLabelPosition: "outEnd", dataLabelFormatCode: "0.00\" €\"", dataLabelColor: C.text1, dataLabelFontSize: 14, dataLabelFontFace: "+mn-lt",
    catAxisLabelColor: C.text1, catAxisLabelFontSize: 14, catAxisLabelFontFace: "+mn-lt", catAxisOrientation: "maxMin",
    valAxisHidden: true, valGridLine: { style: "none" }, catGridLine: { style: "none" }, valAxisMinVal: 0, valAxisMaxVal: 34,
    showLegend: false, showTitle: true, title: "Ce qui reste par commande, avant la pub (sans TVA)", titleFontSize: 14, titleColor: C.text2, titleFontFace: "+mn-lt",
    objectName: "Graphique marges"
  });
  const leviers = [
    ["À porter avec", "La pièce assortie proposée sur la fiche, à un prix d'ensemble"],
    ["Parures en écrin", "Trois pièces réunies, prêtes à offrir"],
    ["Coffret à composer", "3 pièces à 29,90 €, 5 pièces à 44,90 €"],
    ["Livraison offerte", "À partir de 35 €"]
  ];
  leviers.forEach(([t, d], i) => {
    const y = 1.95 + i * 1.18;
    s.addText(t, { x: 8.2, y, w: 4.5, h: 0.42, fontSize: 18, bold: true, color: C.text1, margin: 0, isTextBox: true, objectName: "Levier titre " + (i + 1) });
    s.addText(d, { x: 8.2, y: y + 0.42, w: 4.5, h: 0.6, fontSize: 15, color: C.text2, valign: "top", margin: 0, isTextBox: true, objectName: "Levier texte " + (i + 1) });
  });
  s.addNotes("Les chiffres de l'ensemble et de la parure sont des estimations : le coût du bracelet et des puces est à confirmer sur CJ. Objectif : un panier moyen d'au moins 35 €.");
}

/* ===== 10. Urgence et ton ===== */
pres.addSection({ title: "Vendre" });
{
  const s = content("Vendre", "CONFIANCE", "Une urgence vraie, un ton de maison de bijoux");
  carte(s, M, 1.9, 5.95, 4.8, "Carte urgence");
  s.addText("L'urgence, toujours vraie", { x: M + 0.35, y: 2.1, w: 5.3, h: 0.5, fontSize: 20, bold: true, color: C.text1, fontFace: THEME.headFontFace, margin: 0, isTextBox: true, objectName: "Urgence titre" });
  s.addText([
    { text: "Noël : « commandez avant le 8 décembre », calculé sur le vrai délai de livraison", options: { bullet: true, breakLine: true } },
    { text: "Date de livraison estimée sur chaque fiche", options: { bullet: true, breakLine: true } },
    { text: "Fête des mères, Saint-Valentin : de vraies dates", options: { bullet: true, breakLine: true } },
    { text: "Jamais de faux compte à rebours, faux stock ni faux avis", options: { bullet: true } }
  ], { x: M + 0.35, y: 2.75, w: 5.3, h: 3.7, fontSize: 15, color: C.text1, paraSpaceAfter: 10, valign: "top", margin: 0, isTextBox: true, objectName: "Urgence liste" });

  const rows = [
    [{ text: "On n'écrit pas", options: { bold: true, color: C.background1, fill: { color: C.text1 } } }, { text: "On écrit", options: { bold: true, color: C.background1, fill: { color: C.text1 } } }],
    ["Best-seller", "Les incontournables"],
    ["−30 %, vous économisez", "À porter avec"],
    ["Box, pack, lot", "Coffret, écrin, parure"],
    ["Dépêchez-vous !", "Pour Noël, commandez avant le…"],
    ["Émojis", "Aucun émoji"]
  ];
  s.addTable(rows, { x: 6.95, y: 1.9, w: 5.75, colW: [2.6, 3.15], fontSize: 15, color: C.text1, border: { type: "solid", pt: 0.75, color: "E6DFD3" }, rowH: 0.68, valign: "middle", margin: 0.1, fill: { color: C.background1 }, objectName: "Tableau ton" });
  s.addNotes("La confiance compte autant que le produit : pas de vocabulaire de site discount, et une urgence qui correspond à une vraie date.");
}

/* ===== 11. Pub et test ===== */
{
  const s = content("Vendre", "PUBLICITÉ", "Tester petit, décider sur les chiffres");
  const hooks = [
    ["1", "« Un bijou doré qui ne noircit pas. »", "Le collier porté, puis sous l'eau"],
    ["2", "« 7 jours sous la douche. »", "Jour 1, jour 3, jour 7 (si c'est vrai)"],
    ["3", "« L'allure d'un piercing, sans perçage. »", "L'anneau posé en un geste"]
  ];
  hooks.forEach(([n, t, d], i) => {
    const y = 1.95 + i * 1.3;
    pastille(s, M, y, n, "Vidéo " + n, 0.65);
    s.addText(t, { x: M + 0.9, y: y - 0.05, w: 5.6, h: 0.45, fontSize: 17, bold: true, color: C.text1, margin: 0, isTextBox: true, objectName: "Vidéo titre " + n });
    s.addText(d, { x: M + 0.9, y: y + 0.42, w: 5.6, h: 0.45, fontSize: 15, color: C.text2, margin: 0, isTextBox: true, objectName: "Vidéo texte " + n });
  });
  carte(s, 7.3, 1.9, 5.4, 4.8, "Carte test", C.text1);
  s.addText("Le test", { x: 7.65, y: 2.1, w: 4.8, h: 0.5, fontSize: 20, bold: true, color: C.accent1, fontFace: THEME.headFontFace, margin: 0, isTextBox: true, objectName: "Test titre" });
  s.addText([
    { text: "3 vidéos × 10 € par jour, pendant 3 à 4 jours", options: { bullet: true, breakLine: true } },
    { text: "Femmes de 18 à 45 ans, en France", options: { bullet: true, breakLine: true } },
    { text: "On garde : clic > 1,5 %, coût par clic < 0,60 €, coût par achat < 15 €", options: { bullet: true, breakLine: true } },
    { text: "On coupe une vidéo sans ajout au panier après 25 €", options: { bullet: true } }
  ], { x: 7.65, y: 2.75, w: 4.8, h: 3.7, fontSize: 15, color: C.background1, paraSpaceAfter: 10, valign: "top", margin: 0, isTextBox: true, objectName: "Test liste" });
  s.addNotes("Budget total du premier test : environ 150 €, plus environ 20 € d'échantillons.");
}

/* ===== 12. Prochaines étapes ===== */
{
  const s = content("Vendre", "PROCHAINES ÉTAPES", "Du site à la première vente");
  const steps = [
    ["1", "Nom et domaine", "Vérifier VAURE à l'INPI, réserver vaurestudio.com"],
    ["2", "Produits CJ", "Bracelet et puces Marguerite, puis le reste du catalogue"],
    ["3", "Échantillons", "Collier, anneau sans perçage, créoles : test de 7 jours"],
    ["4", "Boutique Shopify", "Thème Dawn, applications, pages légales"],
    ["5", "Premières pubs", "3 vidéos, environ 150 €, décision sur les chiffres"]
  ];
  steps.forEach(([n, t, d], i) => {
    const x = M + i * 2.46;
    pastille(s, x + 0.75, 2.2, n, "Étape " + n, 0.8);
    if (i < steps.length - 1) s.addShape(pres.shapes.LINE, { x: x + 1.65, y: 2.6, w: 1.5, h: 0, line: { color: C.accent4, width: 1 }, objectName: "Liaison " + n });
    s.addText(t, { x, y: 3.25, w: 2.3, h: 0.5, fontSize: 17, bold: true, color: C.text1, align: "center", margin: 0, isTextBox: true, objectName: "Étape titre " + n });
    s.addText(d, { x, y: 3.8, w: 2.3, h: 1.4, fontSize: 14, color: C.text2, align: "center", valign: "top", margin: 0, isTextBox: true, objectName: "Étape texte " + n });
  });
  s.addText("Le site de démonstration est prêt : accueil, collections, fiches, coffret, panier et pages d'aide.", { x: M, y: 5.8, w: 12.1, h: 0.5, fontSize: 15, italic: true, color: C.text2, margin: 0, isTextBox: true, objectName: "Site prêt" });
  s.addNotes("Le site de démonstration est dans le dossier vaure/site du dépôt GitHub.");
}

/* ===== 13. Clôture ===== */
pres.addSection({ title: "Clôture" });
{
  const s = dark("Clôture", "EN RÉSUMÉ", "Un éclat qui dure",
    "Une niche précise, un problème réel, un produit léger et rentable.\nProchaine étape : les échantillons et le premier test.");
  s.addNotes("Résumé : niche, problème, produit héros, prochaine étape.");
}

(async () => {
  await pres.writeFile({ fileName: OUT });
  await applyTheme(OUT, THEME);
  console.log("écrit :", OUT);
})();
