// Présentation VAURE — devoir « Dire la niche »
const path = require("path");
const pptxgen = require("pptxgenjs");
const { applyTheme } = require("/root/.claude/skills/synced/02482a84-12a4-4e3f-add0-42d448d2f581_aa6104c7-d457-47b7-b527-0f8849cb371a/pptx/scripts/apply_theme.js");

const OUT = process.argv[2] || "VAURE-presentation.pptx";
const A = f => path.join(__dirname, "assets", f);
const LOGO_R = 5.773; // largeur / hauteur des images du logo

const THEME = {
  name: "VAURE",
  headFontFace: "Cambria",
  bodyFontFace: "Calibri",
  colors: {
    dk1: "151412", lt1: "FFFFFF", dk2: "5A554E", lt2: "F6F2EB",
    accent1: "B08D57", accent2: "4E6B4F", accent3: "9A4A3C", accent4: "D9C7A3",
    accent5: "EDE5D8", accent6: "2E2B27", hlink: "B08D57", folHlink: "5A554E"
  }
};

const pres = new pptxgen();
pres.layout = "LAYOUT_WIDE"; // 13,33 × 7,5 in
pres.theme = { headFontFace: THEME.headFontFace, bodyFontFace: THEME.bodyFontFace };
pres.title = "VAURE — présentation du projet";
pres.author = "VAURE";
const C = pres.SchemeColor;
const M = 0.6, CW = 12.13;

/* ---------- mises en page ---------- */
pres.defineSlideMaster({
  title: "SOMBRE",
  background: { color: C.text1 },
  objects: [
    { placeholder: { options: { name: "kicker", type: "body", x: M, y: 1.55, w: CW, h: 0.5, fontSize: 14, color: C.accent1, bold: true, charSpacing: 4, align: "center" }, text: "" } },
    { placeholder: { options: { name: "title", type: "title", x: M, y: 2.15, w: CW, h: 2.3, fontSize: 44, color: C.background1, align: "center", fontFace: THEME.headFontFace }, text: "" } },
    { placeholder: { options: { name: "body", type: "body", x: 1.6, y: 4.7, w: 10.1, h: 1.3, fontSize: 20, color: C.accent4, align: "center" }, text: "" } }
  ]
});
pres.defineSlideMaster({
  title: "CONTENU",
  background: { color: C.background1 },
  margin: [0.5, 0.6, 0.6, 0.6],
  objects: [
    { placeholder: { options: { name: "kicker", type: "body", x: M, y: 0.35, w: 9, h: 0.4, fontSize: 12, color: C.accent1, bold: true, charSpacing: 3, margin: 0 }, text: "" } },
    { placeholder: { options: { name: "title", type: "title", x: M, y: 0.72, w: CW, h: 0.9, fontSize: 36, color: C.text1, fontFace: THEME.headFontFace, margin: 0, valign: "top", align: "left" }, text: "" } },
    { image: { x: M, y: 7.02, w: 0.2 * LOGO_R, h: 0.2, path: A("logo-noir.png") } }
  ],
  slideNumber: { x: 12.2, y: 6.98, w: 0.5, h: 0.3, fontSize: 10, color: C.text2, align: "right" }
});

/* ---------- aides ---------- */
const dark = (sec, kicker, title, body) => {
  const s = pres.addSlide({ masterName: "SOMBRE", sectionTitle: sec });
  if (kicker) s.addText(kicker, { placeholder: "kicker" });
  if (title) s.addText(title, { placeholder: "title" });
  if (body) s.addText(body, { placeholder: "body" });
  return s;
};
const content = (sec, kicker, title) => {
  const s = pres.addSlide({ masterName: "CONTENU", sectionTitle: sec });
  s.addText(kicker, { placeholder: "kicker" });
  s.addText(title, { placeholder: "title" });
  return s;
};
// le motif : un numéro doré en serif (à la place des cercles)
const num = (s, x, y, n, name, size = 30, w = 0.9) =>
  s.addText(n, { x, y, w, h: size / 60, fontSize: size, color: C.accent1, fontFace: THEME.headFontFace, margin: 0, valign: "top", isTextBox: true, objectName: name });
const carte = (s, x, y, w, h, name, fill = C.background2) =>
  s.addShape(pres.shapes.RECTANGLE, { x, y, w, h, fill: { color: fill }, line: { color: fill, width: 0 }, objectName: name });
const txt = (s, text, o) => s.addText(text, { margin: 0, isTextBox: true, valign: "top", color: C.text1, fontSize: 15, ...o });
const img = (s, file, x, y, w, h, name) => s.addImage({ path: A(file), x, y, w, h, altText: name, objectName: name });

/* ===== 1. Couverture ===== */
pres.addSection({ title: "Ouverture" });
{
  const s = dark("Ouverture", "PROJET DE BOUTIQUE EN LIGNE");
  img(s, "logo-ivoire.png", (13.333 - 7) / 2, 2.55, 7, 7 / LOGO_R, "Logo VAURE");
  s.addText("Des bijoux dorés qui ne noircissent pas.\nAcier inoxydable 316L et titane, pour les femmes qui veulent briller tous les jours.", { placeholder: "body" });
  s.addNotes("Présentation du projet VAURE. Le devoir demandé : dire la niche. La réponse est sur la diapositive suivante.");
}

/* ===== 2. Devoir : la niche ===== */
pres.addSection({ title: "La niche" });
{
  const s = content("La niche", "DEVOIR  ·  DIRE LA NICHE", "Ma niche en une phrase");
  carte(s, M, 1.85, CW, 1.75, "Encadré niche", C.text1);
  s.addText([
    { text: "Les bijoux dorés en acier inoxydable et en titane ", options: { color: C.background1 } },
    { text: "qui ne noircissent pas et conviennent aux peaux sensibles", options: { color: C.accent1, bold: true } },
    { text: ", pour les femmes de 18 à 45 ans qui achètent sur un coup de cœur ou pour offrir.", options: { color: C.background1 } }
  ], { x: M + 0.45, y: 1.95, w: CW - 0.9, h: 1.55, fontSize: 22, fontFace: THEME.headFontFace, valign: "middle", margin: 0, isTextBox: true, objectName: "Phrase niche" });
  [["01", "Marché", "Les accessoires de mode féminins"],
   ["02", "Catégorie", "Les bijoux fantaisie dorés"],
   ["03", "Niche", "Bijoux en acier 316L et titane qui ne noircissent pas, de 12,90 à 24,90 €"]
  ].forEach(([n, t, d], i) => {
    const x = M + i * 4.15;
    num(s, x, 4.05, n, "Niveau " + n, 36);
    txt(s, t, { x, y: 4.75, w: 3.8, h: 0.45, fontSize: 20, bold: true, fontFace: THEME.headFontFace, objectName: "Niveau titre " + n });
    txt(s, d, { x, y: 5.25, w: 3.8, h: 0.9, color: C.text2, objectName: "Niveau texte " + n });
  });
  txt(s, "Du plus large au plus précis : on ne parle pas à toutes les femmes, mais à celles dont les bijoux ont déjà noirci, verdi ou irrité.", { x: M, y: 6.3, w: CW, h: 0.45, italic: true, color: C.text2, objectName: "Conclusion niche" });
  s.addNotes("La niche se dit du plus large au plus précis : marché, catégorie, niche. Ce qui la rend précise : la matière (316L et titane) et le problème réglé (le bijou qui noircit, verdit ou irrite).");
}

/* ===== 3. La cliente ===== */
{
  const s = content("La niche", "LA CLIENTE", "À qui je vends");
  carte(s, M, 1.9, 5.3, 4.8, "Carte persona");
  img(s, "bijou-collier.png", M, 1.9, 5.3, 2.2, "Illustration collier");
  txt(s, "Léa, 28 ans", { x: M + 0.35, y: 4.3, w: 4.6, h: 0.5, fontSize: 24, bold: true, fontFace: THEME.headFontFace, objectName: "Persona nom" });
  s.addText([
    { text: "Active, en ville, sur Instagram et TikTok", options: { bullet: true, breakLine: true } },
    { text: "Aime les bijoux fins et dorés, au quotidien", options: { bullet: true, breakLine: true } },
    { text: "Budget « coup de cœur » : moins de 30 €", options: { bullet: true, breakLine: true } },
    { text: "Achète aussi pour offrir", options: { bullet: true } }
  ], { x: M + 0.35, y: 4.9, w: 4.6, h: 1.7, fontSize: 15, color: C.text1, paraSpaceAfter: 6, valign: "top", margin: 0, isTextBox: true, objectName: "Persona détails" });
  [["01", "Ses bijoux noircissent", "Le collier à 5 € perd sa couleur en deux semaines."],
   ["02", "Ils laissent une trace verte", "Ou ils irritent : oreilles, cou, nez."],
   ["03", "Elle n'ose pas se faire percer", "Elle aime le style piercing, pas le perçage."],
   ["04", "Elle cherche un cadeau", "Joli, sûr, livré à temps pour la date."]
  ].forEach(([n, t, d], i) => {
    const y = 1.95 + i * 1.18;
    num(s, 6.45, y - 0.02, n, "Problème " + n, 26, 0.7);
    txt(s, t, { x: 7.3, y, w: 5.4, h: 0.42, fontSize: 18, bold: true, objectName: "Problème titre " + n });
    txt(s, d, { x: 7.3, y: y + 0.45, w: 5.4, h: 0.45, color: C.text2, objectName: "Problème texte " + n });
  });
  s.addNotes("La cliente type et ses quatre problèmes. Chaque produit VAURE répond à l'un d'eux.");
}

/* ===== 4. La promesse ===== */
{
  const s = dark("La niche", "LA PROMESSE PRODUIT", "« Mon bijou aide ma cliente à briller tous les jours, sans qu'il noircisse ni l'irrite. »",
    "Mon produit aide ma cliente à ___, sans ___.");
  s.addNotes("La promesse en une phrase. Elle est en haut du site : « Des bijoux qui ne noircissent pas ».");
}

/* ===== 5. Les critères ===== */
pres.addSection({ title: "Pourquoi" });
{
  const s = content("Pourquoi", "POURQUOI CETTE NICHE", "Les 4 critères d'un bon produit");
  [["01", "Effet wow", "Gros plan doré en vidéo, test sous la douche, bijou sans perçage posé en un geste"],
   ["02", "Problème-solution", "Le bijou qui noircit, verdit ou irrite est une gêne connue de presque toutes les femmes"],
   ["03", "Marge", "Collier Marguerite : 6,64 € livré, vendu 24,90 €, soit 17,51 € avant la pub"],
   ["04", "Volume", "Achat coup de cœur sous 30 €, aucune taille, cadeau toute l'année"]
  ].forEach(([n, t, d], i) => {
    const x = M + (i % 2) * 6.17, y = 1.85 + Math.floor(i / 2) * 2.2;
    carte(s, x, y, 5.96, 2.0, "Critère " + n);
    num(s, x + 0.35, y + 0.3, n, "Critère numéro " + n, 30);
    txt(s, t, { x: x + 1.3, y: y + 0.32, w: 4.4, h: 0.5, fontSize: 20, bold: true, fontFace: THEME.headFontFace, objectName: "Critère titre " + n });
    txt(s, d, { x: x + 1.3, y: y + 0.88, w: 4.4, h: 0.95, color: C.text2, objectName: "Critère texte " + n });
  });
  txt(s, "4 critères sur 4. Un bon produit en remplit au moins 3.", { x: M, y: 6.35, w: CW, h: 0.4, italic: true, color: C.text2, objectName: "Verdict critères" });
  s.addNotes("Un produit est retenu s'il remplit au moins 3 critères sur 4. Le collier Marguerite les remplit tous.");
}

/* ===== 6. Identité : le logo ===== */
pres.addSection({ title: "La marque" });
{
  const s = content("La marque", "IDENTITÉ DE MARQUE", "Le logo");
  carte(s, M, 1.85, 5.95, 3.7, "Fond noir logo", C.text1);
  img(s, "logo-ivoire.png", M + 0.75, 1.85 + (3.7 - 4.45 / LOGO_R) / 2, 4.45, 4.45 / LOGO_R, "Logo ivoire sur noir");
  carte(s, M + 6.18, 1.85, 5.95, 3.7, "Fond clair logo", C.background2);
  img(s, "logo-noir.png", M + 6.93, 1.85 + (3.7 - 4.45 / LOGO_R) / 2, 4.45, 4.45 / LOGO_R, "Logo noir sur clair");
  txt(s, "Sur fond sombre : ivoire", { x: M, y: 5.7, w: 5.95, h: 0.4, color: C.text2, objectName: "Légende logo sombre" });
  txt(s, "Sur fond clair : noir encre", { x: M + 6.18, y: 5.7, w: 5.95, h: 0.4, color: C.text2, objectName: "Légende logo clair" });
  txt(s, "Le nom seul, en capitales espacées, dans la police Bodoni Moda : simple, lisible dans toutes les langues, et proche des codes de la joaillerie.", { x: M, y: 6.15, w: CW, h: 0.6, objectName: "Explication logo" });
  s.addNotes("Pas de symbole ni d'icône : le nom espacé suffit et reste lisible en petit (pied de page, emballage, Instagram).");
}

/* ===== 7. Identité : polices et couleurs ===== */
{
  const s = content("La marque", "IDENTITÉ DE MARQUE", "Polices et couleurs");
  carte(s, M, 1.85, 5.7, 4.9, "Carte polices");
  img(s, "font-bodoni.png", M + 0.4, 2.15, 1.9 * 1.998 * 0.75, 1.9 * 0.75, "Exemple Bodoni Moda");
  txt(s, "Bodoni Moda", { x: M + 3.45, y: 2.25, w: 2.1, h: 0.4, fontSize: 18, bold: true, objectName: "Police titres nom" });
  txt(s, "Logo et titres", { x: M + 3.45, y: 2.7, w: 2.1, h: 0.4, color: C.text2, objectName: "Police titres rôle" });
  img(s, "font-manrope.png", M + 0.4, 4.45, 4.9, 4.9 / 3.614, "Exemple Manrope");
  txt(s, "Manrope : textes, prix et boutons", { x: M + 0.4, y: 5.95, w: 4.9, h: 0.4, fontSize: 15, objectName: "Police textes" });

  const couleurs = [
    ["151412", "Noir encre", "Textes, fonds sombres, boutons"],
    ["B08D57", "Or", "Accents, petits titres"],
    ["C9A35E", "Or clair", "Bijoux, illustrations"],
    ["F8F5F0", "Ivoire", "Fond du site"],
    ["EFE9E0", "Sable", "Fonds alternés, cartes"],
    ["5A554E", "Gris chaud", "Textes secondaires"]
  ];
  couleurs.forEach(([hex, nom, role], i) => {
    const x = 6.75 + (i % 2) * 3.0, y = 1.85 + Math.floor(i / 2) * 1.68;
    s.addShape(pres.shapes.RECTANGLE, { x, y, w: 0.95, h: 1.35, fill: { color: hex }, line: { color: "D9D2C6", width: 0.75 }, objectName: "Pastille " + nom });
    txt(s, nom, { x: x + 1.1, y: y + 0.05, w: 1.85, h: 0.35, fontSize: 15, bold: true, objectName: "Couleur nom " + nom });
    txt(s, "#" + hex, { x: x + 1.1, y: y + 0.4, w: 1.85, h: 0.3, fontSize: 12, color: C.text2, fontFace: "Courier New", objectName: "Couleur code " + nom });
    txt(s, role, { x: x + 1.1, y: y + 0.72, w: 1.85, h: 0.6, fontSize: 12, color: C.text2, objectName: "Couleur rôle " + nom });
  });
  s.addNotes("Les deux polices sont des Google Fonts gratuites, utilisées sur le site. Cette présentation utilise Cambria et Calibri pour s'ouvrir correctement sur tous les ordinateurs.");
}

/* ===== 8. Le produit héros ===== */
pres.addSection({ title: "L'offre" });
{
  const s = content("L'offre", "LE PRODUIT HÉROS", "Le collier Marguerite");
  img(s, "bijou-collier.png", M, 1.85, 4.9, 4.9, "Illustration du collier Marguerite");
  [["6,64 €", "coût livré en France"], ["24,90 €", "prix de vente"], ["17,51 €", "reste avant la pub, sans TVA"]].forEach(([v, l], i) => {
    const x = 5.85 + i * 2.32, dk = i === 2;
    carte(s, x, 1.85, 2.18, 1.85, "Chiffre " + (i + 1), dk ? C.text1 : C.background2);
    s.addText(v, { x: x + 0.1, y: 2.0, w: 1.98, h: 0.85, fontSize: 30, bold: true, color: dk ? C.accent1 : C.text1, fontFace: THEME.headFontFace, align: "center", valign: "middle", margin: 0, isTextBox: true, objectName: "Chiffre valeur " + (i + 1) });
    s.addText(l, { x: x + 0.12, y: 2.9, w: 1.94, h: 0.65, fontSize: 13, color: dk ? C.accent4 : C.text2, align: "center", valign: "top", margin: 0, isTextBox: true, objectName: "Chiffre libellé " + (i + 1) });
  });
  s.addText([
    { text: "Acier titane plaqué or, chaîne fine semée de marguerites", options: { bullet: true, breakLine: true } },
    { text: "Fournisseur CJ, réf. CJLX171494501AZ, envoi « Jewel Shipping » suivi", options: { bullet: true, breakLine: true } },
    { text: "Prix fixé à environ 3,7 fois le coût livré (minimum conseillé : 3 fois)", options: { bullet: true, breakLine: true } },
    { text: "À vérifier : 7 jours sous la douche avec l'échantillon avant d'écrire « résiste à l'eau »", options: { bullet: true } }
  ], { x: 5.85, y: 4.05, w: 6.85, h: 2.7, fontSize: 15, color: C.text1, paraSpaceAfter: 8, valign: "top", margin: 0, isTextBox: true, objectName: "Détails héros" });
  s.addNotes("Calcul : 24,90 € moins 6,64 € de coût livré et environ 0,75 € de frais de paiement, soit 17,51 €. Avec la TVA, il reste 13,36 €. L'illustration sera remplacée par la photo de l'échantillon.");
}

/* ===== 9. La gamme ===== */
{
  const s = content("L'offre", "LA GAMME", "21 produits, un seul style");
  [["bijou-creoles.png", "Bijoux", "9 pièces", "Colliers, bracelets, boucles", "Produits héros"],
   ["bijou-anneau.png", "Piercings", "4 pièces", "Titane, ou sans perçage", "Produit d'appel"],
   ["bijou-foulard.png", "Foulards", "4 pièces", "Foulards satinés, pinces", "Complément"],
   ["bijou-sac.png", "Sacs", "2 pièces", "Mini sac, pochette", "Monter le panier"],
   ["bijou-parure.png", "Parures", "2 coffrets", "Trois pièces en écrin", "Le cadeau"]
  ].forEach(([f, t, n, d, r], i) => {
    const x = M + i * 2.46, w = 2.25;
    img(s, f, x, 1.85, w, w, "Illustration " + t);
    txt(s, t, { x, y: 4.25, w, h: 0.4, fontSize: 18, bold: true, fontFace: THEME.headFontFace, objectName: "Gamme titre " + t });
    txt(s, n, { x, y: 4.65, w, h: 0.3, fontSize: 13, color: C.accent1, bold: true, objectName: "Gamme nombre " + t });
    txt(s, d, { x, y: 4.98, w, h: 0.6, fontSize: 13, color: C.text2, objectName: "Gamme détail " + t });
    txt(s, r, { x, y: 5.6, w, h: 0.3, fontSize: 13, italic: true, objectName: "Gamme rôle " + t });
  });
  txt(s, "La cohérence vient du style (doré, ivoire, noir), pas du type de produit. Aucun logo de marque ; « plaqué or » et « satiné », jamais « or » ou « soie » sans preuve.", { x: M, y: 6.15, w: CW, h: 0.6, fontSize: 14, color: C.text2, objectName: "Règle gamme" });
  s.addNotes("Le catalogue de départ reste petit : on ajoutera ce qui se vend.");
}

/* ===== 10. Le panier moyen ===== */
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
  [["À porter avec", "La pièce assortie proposée sur la fiche, à un prix d'ensemble"],
   ["Parures en écrin", "Trois pièces réunies, prêtes à offrir"],
   ["Coffret à composer", "3 pièces à 29,90 €, 5 pièces à 44,90 €"],
   ["Livraison offerte", "À partir de 35 €"]
  ].forEach(([t, d], i) => {
    const y = 1.95 + i * 1.18;
    txt(s, t, { x: 8.2, y, w: 4.5, h: 0.42, fontSize: 18, bold: true, objectName: "Levier titre " + (i + 1) });
    txt(s, d, { x: 8.2, y: y + 0.42, w: 4.5, h: 0.6, color: C.text2, objectName: "Levier texte " + (i + 1) });
  });
  s.addNotes("Les chiffres de l'ensemble et de la parure sont des estimations : le coût du bracelet et des puces est à confirmer sur CJ. Objectif : un panier moyen d'au moins 35 €.");
}

/* ===== 11. Confiance ===== */
pres.addSection({ title: "Vendre" });
{
  const s = content("Vendre", "CONFIANCE", "Une urgence vraie, un ton de maison de bijoux");
  carte(s, M, 1.85, 5.95, 4.9, "Carte urgence");
  txt(s, "L'urgence, toujours vraie", { x: M + 0.4, y: 2.15, w: 5.2, h: 0.5, fontSize: 20, bold: true, fontFace: THEME.headFontFace, objectName: "Urgence titre" });
  s.addText([
    { text: "Noël : « commandez avant le 8 décembre », calculé sur le vrai délai de livraison", options: { bullet: true, breakLine: true } },
    { text: "Date de livraison estimée sur chaque fiche", options: { bullet: true, breakLine: true } },
    { text: "Fête des mères, Saint-Valentin : de vraies dates", options: { bullet: true, breakLine: true } },
    { text: "Jamais de faux compte à rebours, faux stock ni faux avis", options: { bullet: true } }
  ], { x: M + 0.4, y: 2.8, w: 5.2, h: 3.7, fontSize: 15, color: C.text1, paraSpaceAfter: 10, valign: "top", margin: 0, isTextBox: true, objectName: "Urgence liste" });
  const H = o => ({ text: o, options: { bold: true, color: C.background1, fill: { color: C.text1 } } });
  s.addTable([
    [H("On n'écrit pas"), H("On écrit")],
    ["Best-seller", "Les incontournables"],
    ["−30 %, vous économisez", "À porter avec"],
    ["Box, pack, lot", "Coffret, écrin, parure"],
    ["Dépêchez-vous !", "Pour Noël, commandez avant le…"],
    ["Émojis", "Aucun émoji"]
  ], { x: 6.78, y: 1.85, w: 5.95, colW: [2.65, 3.3], fontSize: 15, color: C.text1, border: { type: "solid", pt: 0.75, color: "E6DFD3" }, rowH: 0.7, valign: "middle", margin: 0.1, fill: { color: C.background1 }, objectName: "Tableau ton" });
  s.addNotes("La confiance compte autant que le produit : pas de vocabulaire de site discount, et une urgence qui correspond à une vraie date.");
}

/* ===== 12. Publicité ===== */
{
  const s = content("Vendre", "PUBLICITÉ", "Tester petit, décider sur les chiffres");
  [["01", "« Un bijou doré qui ne noircit pas. »", "Le collier porté, puis sous l'eau"],
   ["02", "« 7 jours sous la douche. »", "Jour 1, jour 3, jour 7 (si c'est vrai)"],
   ["03", "« L'allure d'un piercing, sans perçage. »", "L'anneau posé en un geste"]
  ].forEach(([n, t, d], i) => {
    const y = 1.95 + i * 1.45;
    num(s, M, y - 0.02, n, "Vidéo " + n, 30);
    txt(s, t, { x: M + 1.0, y, w: 5.5, h: 0.45, fontSize: 17, bold: true, objectName: "Vidéo titre " + n });
    txt(s, d, { x: M + 1.0, y: y + 0.47, w: 5.5, h: 0.45, color: C.text2, objectName: "Vidéo texte " + n });
  });
  carte(s, 7.3, 1.85, 5.43, 4.9, "Carte test", C.text1);
  txt(s, "Le test", { x: 7.7, y: 2.15, w: 4.7, h: 0.5, fontSize: 20, bold: true, color: C.accent1, fontFace: THEME.headFontFace, objectName: "Test titre" });
  s.addText([
    { text: "3 vidéos × 10 € par jour, pendant 3 à 4 jours", options: { bullet: true, breakLine: true } },
    { text: "Femmes de 18 à 45 ans, en France", options: { bullet: true, breakLine: true } },
    { text: "On garde : clic > 1,5 %, coût par clic < 0,60 €, coût par achat < 15 €", options: { bullet: true, breakLine: true } },
    { text: "On coupe une vidéo sans ajout au panier après 25 €", options: { bullet: true } }
  ], { x: 7.7, y: 2.8, w: 4.7, h: 3.7, fontSize: 15, color: C.background1, paraSpaceAfter: 10, valign: "top", margin: 0, isTextBox: true, objectName: "Test liste" });
  s.addNotes("Budget total du premier test : environ 150 €, plus environ 20 € d'échantillons.");
}

/* ===== 13. Prochaines étapes ===== */
{
  const s = content("Vendre", "PROCHAINES ÉTAPES", "Du site à la première vente");
  s.addShape(pres.shapes.LINE, { x: M, y: 2.85, w: CW, h: 0, line: { color: C.accent4, width: 1 }, objectName: "Frise" });
  [["01", "Nom et domaine", "Vérifier VAURE à l'INPI, réserver vaurestudio.com"],
   ["02", "Produits", "Bracelet et puces Marguerite, puis le reste du catalogue"],
   ["03", "Échantillons", "Collier, anneau sans perçage, créoles : test de 7 jours"],
   ["04", "Boutique Shopify", "Thème, applications, pages légales"],
   ["05", "Premières pubs", "3 vidéos, environ 150 €, décision sur les chiffres"]
  ].forEach(([n, t, d], i) => {
    const x = M + i * 2.46;
    num(s, x, 1.95, n, "Étape " + n, 40, 1.2);
    txt(s, t, { x, y: 3.15, w: 2.25, h: 0.45, fontSize: 17, bold: true, objectName: "Étape titre " + n });
    txt(s, d, { x, y: 3.65, w: 2.25, h: 1.4, fontSize: 14, color: C.text2, objectName: "Étape texte " + n });
  });
  carte(s, M, 5.5, CW, 1.2, "Encadré site");
  txt(s, "Le site de démonstration est prêt : accueil, collections, fiches produit, coffret, panier et pages d'aide, dans l'identité VAURE.", { x: M + 0.4, y: 5.5, w: CW - 0.8, h: 1.2, valign: "middle", objectName: "Site prêt" });
  s.addNotes("Le site de démonstration est dans le dossier vaure/site du dépôt GitHub.");
}

/* ===== 14. Clôture ===== */
pres.addSection({ title: "Clôture" });
{
  const s = dark("Clôture", "EN RÉSUMÉ", "Un éclat qui dure",
    "Une niche précise, un problème réel, un produit léger et rentable.\nProchaine étape : les échantillons et le premier test.");
  img(s, "logo-or.png", (13.333 - 2.6) / 2, 6.45, 2.6, 2.6 / LOGO_R, "Logo VAURE doré");
  s.addNotes("Résumé : niche, problème, produit héros, prochaine étape.");
}

(async () => {
  await pres.writeFile({ fileName: OUT });
  await applyTheme(OUT, THEME);
  console.log("écrit :", OUT);
})();
