// Génère import-produits.json : un produit par entrée, au format de l'outil Shopify « create-product » (statut brouillon).
// node generer-import.js
const fs = require("fs"), path = require("path"), vm = require("vm");
const ctx = {};
vm.runInNewContext(fs.readFileSync(path.join(__dirname, "../site/data.js"), "utf8") + ";this.CATS=CATS;this.METAUX=METAUX;this.P=P;", ctx);
const { CATS, METAUX, P } = ctx;
const TYPE = { bijoux: "Bijoux", piercings: "Piercings", foulards: "Foulards et cheveux", sacs: "Sacs", cadeaux: "Parures" };
let n = 0;
const produits = Object.entries(P).map(([id, p]) => {
  n++;
  const sku = "VA-" + String(n).padStart(3, "0");
  const vals = p.metaux ? p.metaux.map(m => METAUX.find(x => x.id === m).nom) : p.coloris || null;
  const opt = p.metaux ? "Finition" : "Coloris";
  return {
    handle: id,
    title: p.nom,
    descriptionHtml: `<p>${p.desc}</p><p><strong>Matière :</strong> ${p.mat}.</p>`
      + (p.parure ? `<p><strong>Dans l'écrin :</strong> ${p.parure.map(x => P[x].nom).join(", ")}.</p>` : "")
      + (p.piercing ? "<p>Livré sous emballage scellé. Pour des raisons d'hygiène, un piercing ouvert ne peut pas être retourné.</p>" : ""),
    vendor: "VAURE",
    productType: TYPE[p.cat],
    tags: [CATS[p.cat].nom, p.sub, p.tag, p.prix <= 19.9 && (p.cat === "bijoux" || p.cat === "piercings") ? "Coffret" : null].filter(Boolean),
    status: "DRAFT",
    options: vals && vals.length > 1 ? [opt] : ["Title"],
    variants: vals && vals.length > 1
      ? vals.map((v, k) => ({ price: p.prix.toFixed(2), sku: `${sku}-${k + 1}`, optionValues: [{ optionName: opt, name: v }] }))
      : [{ price: p.prix.toFixed(2), sku, optionValues: [{ optionName: "Title", name: "Default Title" }] }]
  };
});
const collections = [
  ["Bijoux", "Bijoux"], ["Colliers", "Colliers"], ["Bracelets", "Bracelets"], ["Boucles d'oreilles", "Boucles d'oreilles"],
  ["Piercings", "Piercings"], ["Foulards et cheveux", "Foulards et cheveux"], ["Sacs", "Sacs"], ["Parures", "Parures"],
  ["Les incontournables", "Incontournable"], ["Sans perçage", "Sans perçage"], ["Coffret", "Coffret"]
].map(([title, tag]) => ({ title, ruleSet: { appliedDisjunctively: false, rules: [{ column: "TAG", relation: "EQUALS", condition: tag }] } }));
fs.writeFileSync(path.join(__dirname, "import-produits.json"), JSON.stringify({ produits, collections }, null, 2));
console.log(produits.length, "produits,", collections.length, "collections");
