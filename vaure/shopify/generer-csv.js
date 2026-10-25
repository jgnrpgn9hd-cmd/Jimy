// Génère produits-shopify.csv (format d'import Shopify) à partir de ../site/data.js.
// node generer-csv.js
const fs = require("fs"), path = require("path"), vm = require("vm");
const ctx = {};
vm.runInNewContext(fs.readFileSync(path.join(__dirname, "../site/data.js"), "utf8") + ";this.CATS=CATS;this.METAUX=METAUX;this.P=P;", ctx);
const { CATS, METAUX, P } = ctx;

const GRAMMES = { bijoux: 15, piercings: 5, foulards: 60, sacs: 350, cadeaux: 60 };
const TYPE = { bijoux: "Bijoux", piercings: "Piercings", foulards: "Foulards et cheveux", sacs: "Sacs", cadeaux: "Parures" };
const cols = ["Handle", "Title", "Body (HTML)", "Vendor", "Product Category", "Type", "Tags", "Published",
  "Option1 Name", "Option1 Value", "Variant SKU", "Variant Grams", "Variant Inventory Tracker", "Variant Inventory Policy",
  "Variant Fulfillment Service", "Variant Price", "Variant Compare At Price", "Variant Requires Shipping", "Variant Taxable",
  "Image Src", "Image Alt Text", "SEO Title", "SEO Description", "Status"];
const q = v => { const t = String(v ?? ""); return /[",\n]/.test(t) ? `"${t.replace(/"/g, '""')}"` : t; };
const lignes = [cols.join(",")];
let n = 0;
for (const [id, p] of Object.entries(P)) {
  n++;
  const sku = "VA-" + String(n).padStart(3, "0");
  const opts = p.metaux ? p.metaux.map(m => METAUX.find(x => x.id === m).nom) : p.coloris || ["Unique"];
  const optNom = p.metaux ? "Finition" : p.coloris ? "Coloris" : "Title";
  const corps = `<p>${p.desc}</p><p><strong>Matière :</strong> ${p.mat}.</p>`
    + (p.parure ? `<p><strong>Dans l'écrin :</strong> ${p.parure.map(x => P[x].nom).join(", ")}.</p>` : "")
    + (p.piercing ? "<p>Livré sous emballage scellé. Pour des raisons d'hygiène, un piercing ouvert ne peut pas être retourné.</p>" : "");
  const tags = [CATS[p.cat].nom, p.sub, p.tag, p.metaux ? "Acier ou titane" : null, p.prix <= 19.9 && (p.cat === "bijoux" || p.cat === "piercings") ? "Coffret" : null].filter(Boolean).join(", ");
  opts.forEach((o, k) => {
    const first = k === 0;
    lignes.push([
      id, first ? p.nom : "", first ? corps : "", first ? "VAURE" : "", first ? "Apparel & Accessories > Jewelry" : "", first ? TYPE[p.cat] : "", first ? tags : "", first ? "FALSE" : "",
      optNom, o === "Unique" ? "Default Title" : o, `${sku}${opts.length > 1 ? "-" + (k + 1) : ""}`, GRAMMES[p.cat], "", "deny",
      "manual", p.prix.toFixed(2), "", "TRUE", "TRUE",
      "", "", first ? `${p.nom} — VAURE` : "", first ? `${p.desc.slice(0, 150)}` : "", first ? "draft" : ""
    ].map(q).join(","));
  });
}
fs.writeFileSync(path.join(__dirname, "produits-shopify.csv"), "﻿" + lignes.join("\n") + "\n");
console.log(`${n} produits, ${lignes.length - 1} lignes`);
