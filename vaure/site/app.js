/* VAURE — site de démonstration (aucun paiement réel).
   Tout ce qui dépend du fournisseur ou de la date est dans CONFIG. */

const CONFIG = {
  livraisonOfferteDes: 35,
  fraisLivraison: 3.9,
  delai: { prepa: [1, 3], transport: [7, 12] }, // jours ouvrés — « Jewel Shipping » CJ vers la France, à confirmer
  noelLimite: "2026-12-08",
  promo: { debut: "2026-11-23T00:00:00", fin: "2026-11-30T23:59:59", code: "BLACKFRIDAY", taux: 0.15, texte: "−15 % sur les parures et les box" },
  bienvenue: { code: "BIENVENUE10", taux: 0.10 },
  duoRemise: 0.30, // bijou assorti ajouté depuis la fiche : −30 %
  box: { 3: 29.9, 5: 44.9, plafond: 19.9 }, // bijoux éligibles jusqu'à 19,90 €
  email: "contact@vaurestudio.com"
};

/* ---------- catalogue ----------
   cj : référence CJ connue ; les autres sont à trouver (voir docs/plan-vaure.md). */
const CATS = {
  bijoux: { nom: "Bijoux", sous: ["Colliers", "Bracelets", "Boucles d'oreilles"], intro: "Acier inoxydable 316L et titane, dorés. Ils se portent sous la douche, à la mer et au sport, sans noircir." },
  piercings: { nom: "Piercings", sous: ["Titane", "Sans perçage"], intro: "Des piercings en titane pour les peaux sensibles, et des bijoux « effet piercing » qui se clipsent, sans trou." },
  foulards: { nom: "Foulards et cheveux", sous: ["Foulards", "Cheveux"], intro: "Des foulards satinés fins et des accessoires cheveux dorés, pour finir une tenue en un geste." },
  sacs: { nom: "Sacs", sous: ["Mini sacs", "Pochettes"], intro: "Des petits sacs sans logo, à porter le jour comme le soir." },
  cadeaux: { nom: "Idées cadeaux", sous: ["Parures", "Moins de 20 €"], intro: "Des parures prêtes à offrir et des petits prix pour les cadeaux de dernière minute." }
};
const METAUX = [{ id: "or", nom: "Doré", hex: "#C9A35E" }, { id: "argent", nom: "Argenté", hex: "#BFC1C2" }];

const P = {
  "collier-marguerite": { nom: "Collier Marguerite", cat: "bijoux", sub: "Colliers", prix: 24.9, ill: "collier-fleur", metaux: ["or"], tag: "Best-seller",
    mat: "Acier titane plaqué or", cj: "CJLX171494501AZ", duo: "bracelet-marguerite",
    desc: "Une chaîne fine semée de petites marguerites dorées. Discret le jour, il illumine un décolleté le soir." },
  "bracelet-marguerite": { nom: "Bracelet Marguerite", cat: "bijoux", sub: "Bracelets", prix: 19.9, ill: "bracelet-fleur", metaux: ["or"],
    mat: "Acier titane plaqué or", duo: "collier-marguerite", desc: "Le bracelet assorti au collier Marguerite, réglable de 16 à 21 cm." },
  "puces-marguerite": { nom: "Puces Marguerite", cat: "bijoux", sub: "Boucles d'oreilles", prix: 16.9, ill: "puces-fleur", metaux: ["or"],
    mat: "Acier inoxydable 316L plaqué or", duo: "collier-marguerite", desc: "De petites fleurs dorées qui suivent la parure Marguerite. Tige en acier 316L." },
  "chaine-serpent": { nom: "Chaîne Serpent", cat: "bijoux", sub: "Colliers", prix: 19.9, ill: "collier-serpent", metaux: ["or", "argent"],
    mat: "Acier inoxydable 316L", duo: "jonc-fin", desc: "Une chaîne plate et liquide qui attrape la lumière. Elle se porte seule ou avec d'autres colliers." },
  "collier-initiale": { nom: "Collier Initiale", cat: "bijoux", sub: "Colliers", prix: 24.9, ill: "collier-initiale", metaux: ["or", "argent"], tag: "À offrir",
    mat: "Acier inoxydable 316L", duo: "bracelet-trombone", desc: "Une lettre dorée sur une chaîne fine. Le cadeau personnel qui ne se trompe pas." },
  "jonc-fin": { nom: "Jonc Fin", cat: "bijoux", sub: "Bracelets", prix: 19.9, ill: "jonc", metaux: ["or", "argent"],
    mat: "Acier inoxydable 316L", duo: "chaine-serpent", desc: "Un jonc ouvert, fin et lisse, qui s'empile avec vos autres bracelets." },
  "bracelet-trombone": { nom: "Bracelet Trombone", cat: "bijoux", sub: "Bracelets", prix: 17.9, ill: "bracelet-maille", metaux: ["or", "argent"],
    mat: "Acier inoxydable 316L", duo: "collier-initiale", desc: "Une maille trombone tendance, ni trop fine ni trop épaisse." },
  "creoles-epaisses": { nom: "Créoles Épaisses", cat: "bijoux", sub: "Boucles d'oreilles", prix: 19.9, ill: "creoles", metaux: ["or", "argent"], tag: "Best-seller",
    mat: "Acier inoxydable 316L", duo: "chaine-serpent", desc: "Des créoles bombées et légères : l'effet bijou en or, sans le poids." },
  "creoles-fines": { nom: "Mini Créoles", cat: "bijoux", sub: "Boucles d'oreilles", prix: 14.9, ill: "creoles-fines", metaux: ["or", "argent"],
    mat: "Acier inoxydable 316L", duo: "jonc-fin", desc: "De petites créoles qu'on ne quitte plus, même pour dormir." },
  "anneau-nez-titane": { nom: "Anneau de nez Titane", cat: "piercings", sub: "Titane", prix: 14.9, ill: "anneau-nez", metaux: ["or", "argent"],
    mat: "Titane ASTM F136", piercing: true, duo: "helix-titane", desc: "Un anneau fin à clic, en titane, le métal le mieux toléré par les peaux sensibles." },
  "helix-titane": { nom: "Piercing Hélix Titane", cat: "piercings", sub: "Titane", prix: 14.9, ill: "helix", metaux: ["or", "argent"],
    mat: "Titane ASTM F136", piercing: true, duo: "anneau-nez-titane", desc: "Une petite pierre claire sur une tige en titane, pour l'hélix ou le lobe." },
  "faux-anneau-nez": { nom: "Anneau de nez sans perçage", cat: "piercings", sub: "Sans perçage", prix: 12.9, ill: "anneau-nez", metaux: ["or", "argent"], tag: "Sans trou",
    mat: "Acier inoxydable 316L", duo: "ear-cuff", desc: "L'effet piercing, sans trou et sans douleur : il se clipse sur la narine et tient toute la journée." },
  "ear-cuff": { nom: "Ear cuff sans perçage", cat: "piercings", sub: "Sans perçage", prix: 14.9, ill: "ear-cuff", metaux: ["or", "argent"], tag: "Sans trou",
    mat: "Acier inoxydable 316L", duo: "faux-anneau-nez", desc: "Une bague d'oreille qui se glisse sur le cartilage. Le look piercing, sans passer chez le perceur." },
  "foulard-satin": { nom: "Foulard Satiné 70 cm", cat: "foulards", sub: "Foulards", prix: 17.9, ill: "foulard", coloris: ["Crème", "Noir", "Caramel"],
    mat: "Polyester satiné, toucher soyeux", duo: "pince-doree", desc: "Au cou, dans les cheveux ou noué sur un sac : un carré satiné qui habille tout." },
  "foulard-fin": { nom: "Foulard Ruban", cat: "foulards", sub: "Foulards", prix: 12.9, ill: "ruban", coloris: ["Crème", "Noir", "Caramel"],
    mat: "Polyester satiné", duo: "pince-doree", desc: "Un foulard long et étroit, à nouer en serre-tête, au poignet ou à l'anse d'un sac." },
  "pince-doree": { nom: "Pince à cheveux Dorée", cat: "foulards", sub: "Cheveux", prix: 12.9, ill: "pince",
    mat: "Métal doré", duo: "foulard-fin", desc: "Une pince géométrique qui tient un chignon flou toute la journée." },
  "barrettes-perles": { nom: "Barrettes Perles, lot de 2", cat: "foulards", sub: "Cheveux", prix: 9.9, ill: "barrette",
    mat: "Métal doré, perles d'imitation", duo: "pince-doree", desc: "Deux barrettes ornées de perles d'imitation, pour une coiffure soignée en dix secondes." },
  "mini-sac": { nom: "Mini Sac Bandoulière", cat: "sacs", sub: "Mini sacs", prix: 34.9, ill: "mini-sac", coloris: ["Crème", "Noir", "Caramel"], tag: "Nouveau",
    mat: "Similicuir, chaîne dorée", duo: "foulard-fin", desc: "Juste la place pour le téléphone, les clés et un rouge à lèvres. Bandoulière chaîne amovible." },
  "pochette": { nom: "Pochette Soir", cat: "sacs", sub: "Pochettes", prix: 29.9, ill: "pochette", coloris: ["Crème", "Noir"],
    mat: "Similicuir, fermoir doré", duo: "creoles-epaisses", desc: "Une pochette souple qui se tient à la main ou à l'épaule, pour les dîners et les fêtes." },
  "parure-marguerite": { nom: "Parure Marguerite", cat: "cadeaux", sub: "Parures", prix: 44.9, ill: "parure", metaux: ["or"], tag: "Prête à offrir",
    mat: "Acier titane et 316L plaqué or", parure: ["collier-marguerite", "bracelet-marguerite", "puces-marguerite"],
    desc: "Le collier, le bracelet et les puces Marguerite, dans un écrin. Le cadeau complet, au lieu de trois achats." },
  "parure-essentielle": { nom: "Parure Essentielle", cat: "cadeaux", sub: "Parures", prix: 44.9, ill: "parure2", metaux: ["or", "argent"],
    mat: "Acier inoxydable 316L", parure: ["chaine-serpent", "jonc-fin", "creoles-epaisses"],
    desc: "Chaîne Serpent, Jonc Fin et Créoles Épaisses : les trois basiques qui vont avec tout." }
};
const prixDuo = id => Math.floor(P[id].prix * (1 - CONFIG.duoRemise)) + 0.9; // −30 % environ, arrondi en ,90
const prixSepares = id => P[id].parure.reduce((s, x) => s + P[x].prix, 0);
const eligibleBox = id => (P[id].cat === "bijoux" || P[id].cat === "piercings") && P[id].prix <= CONFIG.box.plafond;

/* ---------- illustrations (à remplacer par les photos CJ et des échantillons) ---------- */
function ill(type, hex = "#C9A35E", bg = "#EDE5D8") {
  const g = hex, dark = "rgba(0,0,0,.18)";
  const fleur = (x, y, r = 7) => `<g transform="translate(${x} ${y})">${[0, 72, 144, 216, 288].map(a => `<ellipse rx="${r * .55}" ry="${r}" transform="rotate(${a}) translate(0 ${-r * .9})" fill="${g}"/>`).join("")}<circle r="${r * .45}" fill="#E8D49B"/></g>`;
  const chaine = (y0, sag) => `<path d="M60 ${y0} Q200 ${y0 + sag} 340 ${y0}" stroke="${g}" stroke-width="2" fill="none"/>`;
  const S = {
    "collier-fleur": chaine(90, 230) + [[110, 190], [155, 232], [200, 246], [245, 232], [290, 190]].map(([x, y]) => fleur(x, y)).join(""),
    "collier-serpent": `<path d="M60 90 Q200 330 340 90" stroke="${g}" stroke-width="7" fill="none" stroke-linecap="round"/><path d="M60 90 Q200 330 340 90" stroke="${dark}" stroke-width="1" fill="none" stroke-dasharray="2 3"/>`,
    "collier-initiale": chaine(90, 230) + `<text x="200" y="262" text-anchor="middle" font-family="Bodoni Moda,serif" font-size="44" fill="${g}">L</text>`,
    "bracelet-fleur": `<ellipse cx="200" cy="200" rx="120" ry="70" fill="none" stroke="${g}" stroke-width="2.5"/>` + [[95, 175], [140, 255], [200, 270], [262, 255], [305, 175]].map(([x, y]) => fleur(x, y, 8)).join(""),
    "jonc": `<path d="M95 220 A110 70 0 1 1 305 220" fill="none" stroke="${g}" stroke-width="9" stroke-linecap="round"/>`,
    "bracelet-maille": Array.from({ length: 9 }, (_, i) => { const a = Math.PI * (0.15 + i * 0.0875) * 2; return `<rect x="${200 + 120 * Math.cos(a) - 14}" y="${200 + 70 * Math.sin(a) - 7}" width="28" height="14" rx="7" fill="none" stroke="${g}" stroke-width="3" transform="rotate(${a * 57.3} ${200 + 120 * Math.cos(a)} ${200 + 70 * Math.sin(a)})"/>`; }).join(""),
    "puces-fleur": fleur(150, 200, 22) + fleur(255, 200, 22),
    "creoles": `<circle cx="140" cy="210" r="62" fill="none" stroke="${g}" stroke-width="18"/><circle cx="265" cy="210" r="62" fill="none" stroke="${g}" stroke-width="18"/><circle cx="140" cy="210" r="62" fill="none" stroke="${dark}" stroke-width="1"/>`,
    "creoles-fines": `<circle cx="150" cy="210" r="42" fill="none" stroke="${g}" stroke-width="6"/><circle cx="250" cy="210" r="42" fill="none" stroke="${g}" stroke-width="6"/>`,
    "anneau-nez": `<path d="M200 130 a70 70 0 1 0 50 20" fill="none" stroke="${g}" stroke-width="7" stroke-linecap="round"/>`,
    "helix": `<path d="M200 140 v120" stroke="${g}" stroke-width="5"/><circle cx="200" cy="140" r="18" fill="#F4F1EA" stroke="${g}" stroke-width="5"/><circle cx="200" cy="265" r="8" fill="${g}"/>`,
    "ear-cuff": `<path d="M150 140 C120 220 170 290 240 270" fill="none" stroke="${g}" stroke-width="9" stroke-linecap="round"/><path d="M170 150 C145 220 185 270 240 255" fill="none" stroke="${g}" stroke-width="4" stroke-linecap="round"/>`,
    "foulard": `<rect x="95" y="95" width="210" height="210" transform="rotate(12 200 200)" fill="${hex}"/><rect x="115" y="115" width="170" height="170" transform="rotate(12 200 200)" fill="none" stroke="#C9A35E" stroke-width="3"/>`,
    "ruban": `<path d="M60 230 C140 140 260 300 340 190" stroke="${hex}" stroke-width="34" fill="none" stroke-linecap="round"/>`,
    "pince": `<path d="M120 170 h160 l-30 70 h-100z" fill="${g}"/><path d="M140 170 v-20 h120 v20" fill="none" stroke="${g}" stroke-width="6"/>`,
    "barrette": `<rect x="90" y="185" width="220" height="12" rx="6" fill="${g}"/>${[0, 1, 2, 3, 4, 5].map(i => `<circle cx="${115 + i * 34}" cy="191" r="13" fill="#F6F2EA" stroke="#D9CFBF"/>`).join("")}`,
    "mini-sac": `<path d="M130 150 Q200 40 270 150" fill="none" stroke="#C9A35E" stroke-width="4"/><rect x="110" y="150" width="180" height="130" rx="14" fill="${hex}"/><rect x="185" y="190" width="30" height="12" rx="3" fill="#C9A35E"/>`,
    "pochette": `<rect x="90" y="150" width="220" height="120" rx="20" fill="${hex}"/><path d="M90 175 Q200 240 310 175" fill="none" stroke="${dark}"/><rect x="185" y="196" width="30" height="10" rx="3" fill="#C9A35E"/>`,
    "parure": `<g transform="translate(-10 -40) scale(.75) translate(66 66)">${chaine(90, 230)}${[[110, 190], [155, 232], [200, 246], [245, 232], [290, 190]].map(([x, y]) => fleur(x, y)).join("")}</g>` + fleur(120, 320, 12) + fleur(160, 320, 12) + `<ellipse cx="270" cy="315" rx="60" ry="30" fill="none" stroke="${g}" stroke-width="2"/>` + fleur(270, 345, 6),
    "parure2": `<path d="M80 70 Q200 260 320 70" stroke="${g}" stroke-width="6" fill="none"/><path d="M110 330 A70 40 0 1 1 250 330" fill="none" stroke="${g}" stroke-width="7"/><circle cx="300" cy="300" r="30" fill="none" stroke="${g}" stroke-width="10"/>`,
    "box": `<rect x="100" y="170" width="200" height="140" fill="#151412"/><rect x="90" y="140" width="220" height="40" fill="#2A2724"/><rect x="190" y="140" width="20" height="170" fill="#C9A35E"/><text x="200" y="260" text-anchor="middle" font-family="Bodoni Moda,serif" font-size="18" letter-spacing="5" fill="#C9A35E">VAURE</text>`
  };
  return `<svg viewBox="0 0 400 400" preserveAspectRatio="xMidYMid slice" role="img" aria-label="${esc(type)}"><rect width="400" height="400" fill="${bg}"/>${S[type] || ""}</svg>`;
}
const FOND = { "Crème": "#EDE3D2", "Noir": "#1D1B19", "Caramel": "#A8743F" };
function illP(id, opt) {
  const p = P[id];
  const metal = METAUX.find(m => m.id === opt) || METAUX[0];
  const tissu = p.coloris ? FOND[opt] || FOND[p.coloris[0]] : null;
  return ill(p.ill, tissu || metal.hex);
}

/* ---------- utilitaires ---------- */
const $ = s => document.querySelector(s);
const eur = n => n.toFixed(2).replace(".", ",") + " €";
const esc = s => String(s).replace(/[&<>"]/g, c => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[c]));
function store(k, v) {
  try { if (v === undefined) return JSON.parse(localStorage.getItem(k)); localStorage.setItem(k, JSON.stringify(v)); }
  catch (e) { return null; }
}
function toast(t) { const el = $("#toast"); el.textContent = t; el.classList.add("show"); clearTimeout(toast.t); toast.t = setTimeout(() => el.classList.remove("show"), 2600); }
function ajoutJoursOuvres(d, n) { const r = new Date(d); while (n > 0) { r.setDate(r.getDate() + 1); if (r.getDay() % 6) n--; } return r; }
const fmtJour = d => d.toLocaleDateString("fr-FR", { weekday: "short", day: "numeric", month: "short" });
function fenetreLivraison(now = new Date()) {
  const { prepa, transport } = CONFIG.delai;
  return [ajoutJoursOuvres(now, prepa[0] + transport[0]), ajoutJoursOuvres(now, prepa[1] + transport[1])];
}
function promoActive(now = new Date()) { const p = CONFIG.promo; return now >= new Date(p.debut) && now <= new Date(p.fin) ? p : null; }
function noelActif(now = new Date()) { const lim = new Date(CONFIG.noelLimite + "T23:59:59"); return now.getMonth() >= 9 && now <= lim ? lim : null; }
const fmtLong = d => d.toLocaleDateString("fr-FR", { day: "numeric", month: "long" });

/* ---------- panier ---------- */
let cart = store("vaure-cart") || [];
const saveCart = () => { store("vaure-cart", cart); renderCount(); };
function addLine(line, silent) {
  const same = cart.find(l => l.key === line.key);
  if (same) same.q += line.q; else cart.push(line);
  saveCart(); if (!silent) openCart();
}
const sousTotal = () => cart.reduce((s, l) => s + l.prix * l.q, 0);
function renderCount() { const n = cart.reduce((s, l) => s + l.q, 0), c = $("#count"); c.textContent = n; c.hidden = !n; }
function openCart() { renderCart(); $("#cart").hidden = $("#cartBg").hidden = false; document.body.style.overflow = "hidden"; }
function closeDrawers() { ["#cart", "#cartBg", "#menuM", "#menuBg"].forEach(s => $(s).hidden = true); document.body.style.overflow = ""; }
function suggestion() {
  const dans = new Set(cart.map(l => l.id));
  for (const l of cart) { const d = P[l.id]?.duo; if (d && !dans.has(d)) return d; }
  return ["foulard-fin", "creoles-fines", "pince-doree"].find(id => !dans.has(id));
}
function renderCart() {
  const body = $("#cartBody");
  if (!cart.length) {
    body.innerHTML = `<p class="muted">Votre panier est vide.</p><a class="btn" href="#/collection/bijoux" data-closecart>Voir les bijoux</a>`;
    $("#cart .cart-ft")?.remove(); return;
  }
  const st = sousTotal(), reste = CONFIG.livraisonOfferteDes - st, pct = Math.min(100, st / CONFIG.livraisonOfferteDes * 100);
  const sug = suggestion();
  body.innerHTML = `
    <div class="ship-bar">${reste > 0 ? `Plus que <b>${eur(reste)}</b> pour la livraison offerte` : `<b>Livraison offerte</b> ✓`}<div class="bar"><i style="width:${pct}%"></i></div></div>
    ${cart.map((l, i) => `<div class="line"><div class="th">${l.ill}</div>
      <div><p>${esc(l.nom)}</p><small>${esc(l.opt || "")}</small>
      <div class="qty"><button data-q="${i}" data-d="-1" aria-label="Retirer un">−</button><span style="padding:3px 8px">${l.q}</span><button data-q="${i}" data-d="1" aria-label="Ajouter un">+</button></div></div>
      <b>${eur(l.prix * l.q)}</b></div>`).join("")}
    ${sug ? `<div class="upsell"><div class="th">${illP(sug)}</div><div><b>${P[sug].nom}</b><br><span class="muted">${P[sug].mat}</span></div><button data-add="${sug}">+ ${eur(P[sug].prix)}</button></div>` : ""}`;
  let ft = $("#cart .cart-ft");
  if (!ft) { ft = document.createElement("div"); ft.className = "cart-ft"; $("#cart").appendChild(ft); }
  ft.innerHTML = `<div class="tot"><span>Sous-total</span><span>${eur(st)}</span></div>
    <p class="small muted">${reste > 0 ? `Livraison suivie : ${eur(CONFIG.fraisLivraison)}` : "Livraison suivie offerte"} · Paiement en 3 fois dès 50 €</p>
    <a class="btn block" href="#/commande" data-closecart>Commander</a>
    <p class="small muted center">🔒 Paiement sécurisé · Retours 30 jours</p>`;
}
function addProduit(id, opt, prix, silent) {
  const p = P[id];
  const optNom = METAUX.find(m => m.id === opt)?.nom || opt || "";
  addLine({ key: `${id}-${opt || ""}-${prix}`, id, nom: p.nom, opt: optNom + (prix < p.prix ? " · prix duo" : ""), prix: prix ?? p.prix, q: 1, ill: illP(id, opt) }, silent);
}

/* ---------- blocs communs ---------- */
const ICON = {
  truck: `<svg viewBox="0 0 24 24"><path d="M3 6h11v10H3zM14 9h4l3 3v4h-7"/><circle cx="7" cy="17.5" r="1.8"/><circle cx="17" cy="17.5" r="1.8"/></svg>`,
  drop: `<svg viewBox="0 0 24 24"><path d="M12 3c4 5 6 8 6 11a6 6 0 0 1-12 0c0-3 2-6 6-11z"/></svg>`,
  back: `<svg viewBox="0 0 24 24"><path d="M9 14L4 9l5-5"/><path d="M4 9h10a6 6 0 0 1 0 12h-3"/></svg>`,
  chat: `<svg viewBox="0 0 24 24"><path d="M4 5h16v11H9l-5 4z"/></svg>`
};
const GARANTIES = [
  ["drop", "Résiste à l'eau", "Acier 316L et titane : douche, mer, sport"],
  ["truck", "Livraison suivie", `Offerte dès ${CONFIG.livraisonOfferteDes} €`],
  ["back", "Retours 30 jours", "Sauf piercings ouverts, par hygiène"],
  ["chat", "Réponse sous 24 h", "Une vraie personne vous répond"]
];
const trustbar = () => `<div class="trustbar"><div class="wrap">${GARANTIES.map(([i, t, s]) => `<div>${ICON[i]}<span><b>${t}</b>${s}</span></div>`).join("")}</div></div>`;
function announce() {
  const p = promoActive(), noel = noelActif();
  $("#announce").innerHTML = p
    ? `<b>Black Friday</b> : ${p.texte} avec le code <b>${p.code}</b>, jusqu'au ${new Date(p.fin).toLocaleDateString("fr-FR", { weekday: "long", day: "numeric", month: "long" })} minuit`
    : noel ? `<b>Noël</b> : commandez avant le ${fmtLong(noel)} pour être livrée à temps · Livraison offerte dès ${CONFIG.livraisonOfferteDes} €`
    : `Livraison offerte dès ${CONFIG.livraisonOfferteDes} € · Retours 30 jours · Bijoux qui ne noircissent pas`;
}
function carte(id) {
  const p = P[id];
  const opt = p.metaux ? p.metaux[0] : p.coloris?.[0];
  return `<a class="prod" href="#/produit/${id}"><div class="pic">${illP(id, opt)}${p.tag ? `<span class="tag">${p.tag}</span>` : ""}</div>
    <h3>${p.nom}</h3><span class="mat">${p.mat}</span>
    <span class="pr">${eur(p.prix)}${p.parure ? `<s>${eur(prixSepares(id))}</s>` : ""}</span></a>`;
}

/* ---------- pages ---------- */
function viewHome() {
  const noel = noelActif();
  const best = ["collier-marguerite", "creoles-epaisses", "faux-anneau-nez", "chaine-serpent"];
  return `
  <section class="hero-v" style="padding:0">
    <div class="art">${ill("collier-fleur", "#C9A35E", "#E9E1D4")}</div>
    <div class="txt">
      <p class="eyebrow">Acier 316L et titane · doré</p>
      <h1>Des bijoux qui ne noircissent pas.</h1>
      <p class="lead">Douche, mer, sport : nos bijoux dorés en acier inoxydable et en titane se gardent toute la journée, et conviennent aux peaux sensibles.</p>
      <a class="btn" href="#/collection/bijoux">Découvrir les bijoux</a>
    </div>
  </section>
  ${trustbar()}

  <section><div class="wrap center">
    <p class="eyebrow">Les plus aimés</p>
    <h2>Best-sellers</h2>
    <div class="grid">${best.map(carte).join("")}</div>
  </div></section>

  <section class="alt"><div class="wrap">
    <div class="center"><p class="eyebrow">La promesse VAURE</p><h2>Fini le bijou qui verdit.</h2>
    <p class="lead" style="margin:14px auto 0">Un bijou fantaisie classique est souvent en laiton : il noircit, laisse une trace verte et irrite. Nous ne vendons que de l'acier inoxydable 316L et du titane.</p></div>
    <div class="promise">
      <div><div class="ic">316L</div><h3>Il ne noircit pas</h3><p class="muted">L'acier inoxydable ne rouille pas et garde sa couleur, même mouillé.</p></div>
      <div><div class="ic">Ti</div><h3>Peaux sensibles</h3><p class="muted">Le titane et l'acier 316L sont parmi les métaux les mieux tolérés. Nos piercings sont en titane.</p></div>
      <div><div class="ic">∞</div><h3>Il se garde tout le temps</h3><p class="muted">Douche, piscine, sport, nuit : pas besoin de l'enlever.</p></div>
    </div>
  </div></section>

  <section><div class="wrap split">
    <div class="pic">${ill("parure", "#C9A35E")}</div>
    <div>
      <p class="eyebrow">${noel ? "Cadeau de Noël" : "Prête à offrir"}</p>
      <h2>La Parure Marguerite</h2>
      <p class="lead" style="margin:14px 0 20px">Collier, bracelet et puces assortis, dans un écrin. ${eur(P["parure-marguerite"].prix)} au lieu de ${eur(prixSepares("parure-marguerite"))} achetés séparément.</p>
      ${noel ? `<p class="urgent">🎄 Pour l'avoir avant Noël, commandez avant le <b>${fmtLong(noel)}</b>.</p>` : ""}
      <a class="btn" href="#/produit/parure-marguerite">Voir la parure</a>
    </div>
  </div></section>

  <section class="alt"><div class="wrap split">
    <div>
      <p class="eyebrow">Compose ta box</p>
      <h2>3 bijoux, 29,90 €.</h2>
      <p class="lead" style="margin:14px 0 20px">Choisissez 3 bijoux jusqu'à 19,90 € pour 29,90 €, ou 5 pour 44,90 €. Pour vous, ou à partager entre copines.</p>
      <a class="btn" href="#/box">Composer ma box</a>
    </div>
    <div class="pic">${ill("box")}</div>
  </div></section>

  <section><div class="wrap center">
    <p class="eyebrow">L'effet piercing, sans trou</p>
    <h2>Vous n'osez pas percer ?</h2>
    <p class="lead" style="margin:14px auto 0">Nos anneaux de nez et ear cuffs se clipsent : le look piercing, sans douleur, et on l'enlève quand on veut.</p>
    <div class="grid" style="grid-template-columns:repeat(auto-fit,minmax(160px,240px));justify-content:center">${["faux-anneau-nez", "ear-cuff"].map(carte).join("")}</div>
  </div></section>

  <section class="alt"><div class="wrap center">
    <p class="eyebrow">L'univers VAURE</p>
    <h2>Pour finir la tenue</h2>
    <div class="cats">${[["bijoux", "creoles"], ["piercings", "ear-cuff"], ["foulards", "foulard"], ["sacs", "mini-sac"]].map(([c, i]) => `<a href="#/collection/${c}">${ill(i, i === "foulard" || i === "mini-sac" ? "#EDE3D2" : "#C9A35E", "#E6DDCF")}<span>${CATS[c].nom}</span></a>`).join("")}</div>
  </div></section>

  <section><div class="wrap center">
    <p class="eyebrow">Avis clientes</p>
    <h2>Vos avis, vérifiés.</h2>
    <div class="reviews-empty"><p>Nous publions uniquement les avis de vraies clientes, recueillis après livraison. Les premiers arrivent avec les premières commandes.</p>
    <p class="small muted" style="margin-top:10px">Pas de faux avis, pas de note inventée.</p></div>
  </div></section>

  <section style="padding-top:0"><div class="wrap">
    <div class="news">
      <h2>−10 % sur votre première commande</h2>
      <p class="lead" style="margin:12px auto 0">Recevez le code, les nouveautés et les idées cadeaux. Un e-mail par semaine au plus.</p>
      <form data-news><label for="nl" style="position:absolute;left:-9999px">E-mail</label><input id="nl" type="email" required placeholder="Votre e-mail"><button class="btn">Recevoir le code</button></form>
    </div>
  </div></section>`;
}

function viewCollection(cat, sub) {
  const c = CATS[cat] || CATS.bijoux;
  let ids = Object.keys(P).filter(id => cat === "cadeaux" ? (P[id].cat === "cadeaux" || P[id].prix < 20) : P[id].cat === cat);
  if (sub) ids = ids.filter(id => cat === "cadeaux" ? (sub === "Parures" ? P[id].parure : P[id].prix < 20 && !P[id].parure) : P[id].sub === sub);
  return `<section><div class="wrap">
    <p class="crumbs" style="padding-top:0"><a href="#/">Accueil</a> / ${c.nom}</p>
    <h1 class="center">${c.nom}</h1>
    <p class="lead center" style="margin-top:12px">${c.intro}</p>
    ${cat === "piercings" ? `<p class="mat-box center" style="max-width:720px;margin:20px auto 0">Piercings en titane ASTM F136, livrés sous emballage scellé. Pour des raisons d'hygiène, un piercing ouvert ne peut pas être retourné. Pour un premier perçage, passez par un perceur professionnel.</p>` : ""}
    <div class="filters">${["", ...c.sous].map(s => `<a class="${(sub || "") === s ? "on" : ""}" href="#/collection/${cat}${s ? "/" + encodeURIComponent(s) : ""}">${s || "Tout"}</a>`).join("")}</div>
    <div class="grid">${ids.map(carte).join("")}</div>
  </div></section>`;
}

let sel = {};
function viewProduit(id) {
  const p = P[id]; if (!p) return viewHome();
  const s = sel[id] ||= { opt: p.metaux ? p.metaux[0] : p.coloris?.[0] };
  const [d1, d2] = fenetreLivraison(), noel = noelActif();
  const duo = p.duo && P[p.duo];
  const opts = p.metaux ? p.metaux.map(m => METAUX.find(x => x.id === m)) : (p.coloris || []).map(c => ({ id: c, nom: c, hex: FOND[c] }));
  return `
  <div class="wrap"><p class="crumbs"><a href="#/">Accueil</a> / <a href="#/collection/${p.cat}">${CATS[p.cat].nom}</a> / ${p.nom}</p></div>
  <div class="wrap pdp">
    <div class="gallery">
      <div class="main-pic">${illP(id, s.opt)}</div>
      <p class="todo">Illustration provisoire : à remplacer par les photos CJ, puis par les photos des échantillons portés.</p>
    </div>
    <div class="buy">
      ${p.tag ? `<p class="eyebrow">${p.tag}</p>` : ""}
      <h1>${p.nom}</h1>
      <p class="stars-note">${p.mat}</p>
      <div class="price">${eur(p.prix)}${p.parure ? `<small><s>${eur(prixSepares(id))}</s> · vous économisez ${eur(prixSepares(id) - p.prix)}</small>` : ""}</div>
      ${p.prix >= 50 ? `<p class="small muted">ou 3 × ${eur(p.prix / 3)} sans frais</p>` : ""}
      <p style="margin:16px 0" class="muted">${p.desc}</p>
      ${p.parure ? `<ul class="benefits">${p.parure.map(x => `<li>${P[x].nom} <span class="muted">(${eur(P[x].prix)} seul)</span></li>`).join("")}<li>Écrin cadeau VAURE</li></ul>` : ""}
      ${opts.length > 1 ? `<div class="opt"><div class="opt-h"><span>${p.metaux ? "Finition" : "Coloris"} : <b>${opts.find(o => o.id === s.opt)?.nom}</b></span></div>
        <div class="opt-pills">${opts.map(o => `<button class="${o.id === s.opt ? "on" : ""}" data-opt="${esc(o.id)}">${o.nom}</button>`).join("")}</div></div>` : ""}
      <button class="btn block" data-buy="${id}">Ajouter au panier · ${eur(p.prix)}</button>
      ${duo && !p.parure ? `<div class="duo"><div class="th">${illP(p.duo, s.opt)}</div><div><b>${duo.nom}</b> assorti<br><span class="muted small">${eur(prixDuo(p.duo))} au lieu de ${eur(duo.prix)} avec ce bijou</span></div><button data-duo="${id}">Ajouter les 2</button></div>` : ""}
      <div class="deliv">📦 Commandé aujourd'hui, livré entre le <b>${fmtJour(d1)}</b> et le <b>${fmtJour(d2)}</b>, avec suivi.</div>
      ${noel ? `<div class="urgent">🎄 Pour être livrée avant Noël, commandez avant le <b>${fmtLong(noel)}</b>.</div>` : ""}
      <div class="guar">${GARANTIES.map(([i, t, sub]) => `<div>${ICON[i]}<span><b>${t}</b><br><span class="muted">${sub}</span></span></div>`).join("")}</div>
      <div class="acc">
        <details open><summary>Matière</summary><div>${p.mat}. ${p.piercing ? "Titane implantable ASTM F136, sans nickel ajouté. Livré sous emballage scellé ; un piercing ouvert ne peut pas être retourné." : p.cat === "bijoux" || p.cat === "cadeaux" ? "L'acier inoxydable 316L ne rouille pas et garde sa couleur à l'eau. Le plaqué or reste un plaquage : évitez parfum et produits ménagers pour qu'il dure. <span class=\"ph\">[Tenue à l'eau à vérifier sur l'échantillon avant de l'affirmer]</span>" : "Fabriqué par notre fournisseur partenaire et contrôlé avant expédition."}</div></details>
        <details><summary>Livraison et retours</summary><div>Livraison suivie offerte dès ${CONFIG.livraisonOfferteDes} €, sinon ${eur(CONFIG.fraisLivraison)}. Retours sous 30 jours${p.piercing ? ", sauf piercing ouvert (hygiène)" : ""} : <a class="link" href="#/page/retours">conditions</a>.</div></details>
        <details><summary>Entretien</summary><div>Rincez à l'eau claire, séchez avec un chiffon doux. Rangez chaque bijou séparément pour éviter les rayures. <a class="link" href="#/page/entretien">Tous nos conseils</a></div></details>
      </div>
    </div>
  </div>
  <section class="alt"><div class="wrap center"><h2>Vous aimerez aussi</h2>
    <div class="grid">${Object.keys(P).filter(x => x !== id && P[x].cat === p.cat).slice(0, 4).map(carte).join("")}</div></div></section>
  <div class="sticky-buy" id="stickyBuy"><div><b>${eur(p.prix)}</b><br><small class="muted">${p.nom}</small></div><button class="btn" data-buy="${id}">Ajouter</button></div>`;
}

/* compose ta box */
let box = { n: 3, items: [] };
function viewBox() {
  const ids = Object.keys(P).filter(eligibleBox);
  const prix = CONFIG.box[box.n];
  const sep = box.items.reduce((s, id) => s + P[id].prix, 0);
  return `<section><div class="wrap">
    <p class="eyebrow center">Compose ta box</p>
    <h1 class="center">Vos bijoux, votre écrin.</h1>
    <p class="lead center" style="margin-top:12px">Choisissez ${box.n} bijoux jusqu'à ${eur(CONFIG.box.plafond)} : la box est à ${eur(prix)}, écrin compris.</p>
    <div class="box-wrap" style="margin-top:32px">
      <div class="grid" style="margin-top:0">${ids.map(id => `<div class="prod"><a href="#/produit/${id}" class="pic" style="display:block">${illP(id)}</a><h3>${P[id].nom}</h3><span class="mat">${P[id].mat}</span><span class="pr">${eur(P[id].prix)}</span>
        <button class="add-box ${box.items.includes(id) ? "on" : ""}" data-box="${id}">${box.items.includes(id) ? "Dans la box ✓" : "Ajouter à la box"}</button></div>`).join("")}</div>
      <aside class="box-pick">
        <h3>Ma box</h3>
        <div class="box-size">${[3, 5].map(n => `<button class="${n === box.n ? "on" : ""}" data-boxn="${n}">${n} bijoux · ${eur(CONFIG.box[n])}</button>`).join("")}</div>
        <div class="box-slots">${Array.from({ length: box.n }, (_, i) => `<i>${box.items[i] ? illP(box.items[i]) : i + 1}</i>`).join("")}</div>
        <p class="small muted">${box.items.length}/${box.n} choisis${box.items.length === box.n && sep > prix ? ` · vous économisez <b>${eur(sep - prix)}</b>` : ""}</p>
        <button class="btn block" style="margin-top:14px${box.items.length === box.n ? "" : ";opacity:.4"}" data-boxadd ${box.items.length === box.n ? "" : "disabled"}>Ajouter la box · ${eur(prix)}</button>
      </aside>
    </div>
  </div></section>`;
}

const FAQ = [
  ["Est-ce que les bijoux noircissent ?", "Nos bijoux sont en acier inoxydable 316L ou en titane, des métaux qui ne rouillent pas et ne verdissent pas la peau. Le plaqué or reste un plaquage : il dure plus longtemps si on évite parfum, crème et produits ménagers."],
  ["Je peux les garder sous la douche ?", "Oui, l'acier et le titane supportent l'eau. Rincez à l'eau claire après la mer ou la piscine. [À confirmer sur nos échantillons avant la mise en ligne.]"],
  ["J'ai la peau sensible, ça va aller ?", "Le titane et l'acier 316L font partie des métaux les mieux tolérés, c'est pour ça que nous les avons choisis. Aucun métal ne convient à 100 % des peaux : en cas de réaction, retirez le bijou et écrivez-nous."],
  ["Comment marche le sans perçage ?", "L'anneau de nez se clipse sur la narine et l'ear cuff se glisse sur le cartilage de l'oreille. Pas de trou, pas de douleur, et on l'enlève quand on veut."],
  ["Quand vais-je recevoir ma commande ?", `Préparation en ${CONFIG.delai.prepa.join(" à ")} jours ouvrés, puis ${CONFIG.delai.transport.join(" à ")} jours ouvrés de transport, avec suivi. La date estimée s'affiche sur chaque fiche.`],
  ["D'où viennent vos bijoux ?", "Ils sont fabriqués par des fournisseurs partenaires et expédiés depuis leur entrepôt. Nous testons les échantillons avant de les proposer. Ils ne sont pas fabriqués en France, et ce ne sont pas des bijoux en or massif."],
  ["Puis-je retourner un bijou ?", "Oui, sous 30 jours, non porté et dans son emballage. Pour des raisons d'hygiène, un piercing dont l'emballage scellé a été ouvert ne peut pas être retourné."],
  ["Le paiement est-il sécurisé ?", "Oui, par Shopify Payments ou PayPal ; nous ne voyons jamais votre numéro de carte."]
];
const faqItem = ([q, a]) => `<details><summary>${q}</summary><p>${a}</p></details>`;
const PAGES = {
  histoire: ["Notre histoire", `<p>VAURE est né d'une frustration : des bijoux dorés achetés pour quelques euros, qui noircissaient en deux semaines et laissaient une trace verte sur la peau.</p>
    <p>Nous avons cherché des bijoux qu'on peut garder sous la douche, à la mer et au quotidien, sans se ruiner. Notre règle : uniquement de l'acier inoxydable 316L et du titane, des formes simples, et des prix doux.</p>
    <h2>Ce que nous promettons</h2><ul><li>Des matières honnêtes, écrites sur chaque fiche.</li><li>Des produits testés sur nos échantillons avant d'être en ligne.</li><li>Pas de faux avis, pas de fausse promotion, pas de faux compte à rebours.</li><li>Une vraie personne qui répond sous 24 h ouvrées.</li></ul>
    <p class="ph">[Ajoutez votre prénom et une photo : c'est ce qui crée la confiance.]</p>`],
  livraison: ["Livraison", `<p>Nous livrons en France, en Belgique et en Suisse <span class="ph">[à élargir à l'Europe ensuite]</span>.</p>
    <h2>Délais</h2><p>Préparation : ${CONFIG.delai.prepa.join(" à ")} jours ouvrés. Transport : ${CONFIG.delai.transport.join(" à ")} jours ouvrés, avec suivi.</p>
    <h2>Frais</h2><p>Offerte dès ${CONFIG.livraisonOfferteDes} €, sinon ${eur(CONFIG.fraisLivraison)}.</p>
    <h2>Noël</h2><p>Pour être livrée avant Noël, commandez avant le ${fmtLong(new Date(CONFIG.noelLimite))}.</p>`],
  retours: ["Retours et remboursements", `<p>Vous avez <b>30 jours</b> après réception pour changer d'avis (la loi en impose 14).</p>
    <h2>Comment faire</h2><ol><li>Écrivez à ${CONFIG.email} avec votre numéro de commande.</li><li>Nous vous envoyons l'adresse de retour.</li><li>Renvoyez le bijou non porté, dans son emballage.</li></ol>
    <h2>Piercings</h2><p>Pour des raisons d'hygiène, un piercing dont l'emballage scellé a été ouvert ne peut pas être retourné (article L221-28 du Code de la consommation). Les bijoux sans perçage se retournent normalement.</p>
    <h2>Remboursement</h2><p>Sous 14 jours après réception du retour. Frais de retour <span class="ph">[à votre charge / offerts — à décider]</span>.</p>`],
  entretien: ["Matières et entretien", `<h2>Acier inoxydable 316L</h2><p>Il ne rouille pas et garde sa couleur à l'eau. C'est l'acier utilisé en horlogerie.</p>
    <h2>Titane ASTM F136</h2><p>Léger et très bien toléré, c'est le métal des piercings de qualité.</p>
    <h2>Plaqué or</h2><p>Une fine couche dorée sur l'acier. Pour qu'elle dure : mettez parfum et crème avant le bijou, évitez les produits ménagers, rangez-le à l'abri.</p>
    <h2>Foulards satinés</h2><p>Polyester satiné : lavage à la main à froid, repassage doux. Ce n'est pas de la soie.</p>`],
  faq: ["Questions fréquentes", `<div class="faq" style="margin-top:0">${FAQ.map(faqItem).join("")}</div>`],
  contact: ["Contact", `<p>Une question sur un bijou, une commande ou un retour ? Réponse sous 24 h ouvrées.</p><p>E-mail : <a class="link" href="mailto:${CONFIG.email}">${CONFIG.email}</a></p>
    <form data-contact><input required placeholder="Votre nom" aria-label="Votre nom"><input required type="email" placeholder="Votre e-mail" aria-label="Votre e-mail"><input placeholder="Numéro de commande (si vous en avez un)" aria-label="Numéro de commande"><textarea required rows="5" placeholder="Votre message" aria-label="Message"></textarea><button class="btn">Envoyer</button></form>`],
  suivi: ["Suivre ma commande", `<p>Entrez le numéro reçu par e-mail. <span class="ph">[Sur Shopify : application de suivi, par exemple ParcelPanel.]</span></p>
    <form data-suivi><input required placeholder="Numéro de suivi ou de commande" aria-label="Numéro de suivi"><button class="btn">Suivre</button></form>`],
  cgv: ["Conditions générales de vente", `<p class="ph">[À compléter et à faire relire : vendeur (nom, SIREN, adresse), prix TTC, commande, paiement, livraison, rétractation 14 jours (nous offrons 30), exception hygiène des piercings, garanties légales, médiateur de la consommation, données personnelles.]</p>`],
  mentions: ["Mentions légales", `<p class="ph">[Éditeur : nom, statut, SIREN, adresse, e-mail. Hébergeur : Shopify Inc., 151 O'Connor Street, Ground floor, Ottawa, ON K2P 2L8, Canada.]</p>`],
  confidentialite: ["Confidentialité", `<p class="ph">[Données collectées, finalités, durées, destinataires (Shopify, transporteur, outil d'e-mail), droits RGPD, cookies et bandeau de consentement.]</p>`]
};
const viewPage = id => PAGES[id] ? `<div class="wrap"><div class="page"><h1>${PAGES[id][0]}</h1>${PAGES[id][1]}</div></div>` : viewHome();

function viewCommande() {
  if (!cart.length) return `<div class="wrap"><div class="page"><h1>Commande</h1><p>Votre panier est vide.</p><a class="btn" href="#/collection/bijoux">Voir les bijoux</a></div></div>`;
  const st = sousTotal(), port = st >= CONFIG.livraisonOfferteDes ? 0 : CONFIG.fraisLivraison;
  const code = store("vaure-code"), p = promoActive();
  let remise = 0;
  if (code === CONFIG.bienvenue.code) remise = st * CONFIG.bienvenue.taux;
  if (p && code === p.code) remise = cart.filter(l => l.lot).reduce((s, l) => s + l.prix * l.q, 0) * p.taux;
  const [d1, d2] = fenetreLivraison();
  return `<div class="wrap checkout">
    <div class="box">
      <h2>Livraison</h2>
      <label for="ce">E-mail</label><input id="ce" type="email" autocomplete="email">
      <div class="row"><div><label for="cp">Prénom</label><input id="cp" autocomplete="given-name"></div><div><label for="cn">Nom</label><input id="cn" autocomplete="family-name"></div></div>
      <label for="ca">Adresse</label><input id="ca" autocomplete="street-address">
      <div class="row"><div><label for="cz">Code postal</label><input id="cz" autocomplete="postal-code" inputmode="numeric"></div><div><label for="cv">Ville</label><input id="cv" autocomplete="address-level2"></div></div>
      <p class="small muted" style="margin-top:14px">Livraison estimée entre le ${fmtJour(d1)} et le ${fmtJour(d2)}.</p>
      <button class="btn block" style="margin-top:18px" data-pay>Continuer vers le paiement</button>
      <p class="small muted center" style="margin-top:10px">🔒 Paiement sécurisé · Démo : aucun paiement</p>
    </div>
    <div class="box">
      <h2>Récapitulatif</h2>
      ${cart.map(l => `<div class="sum-line"><span>${l.q} × ${esc(l.nom)}<br><small class="muted">${esc(l.opt || "")}</small></span><span>${eur(l.prix * l.q)}</span></div>`).join("")}
      <form data-code style="display:flex;gap:8px;margin:14px 0"><input placeholder="Code promo" aria-label="Code promo" value="${esc(code || "")}" style="flex:1"><button class="btn ghost" style="padding:10px 16px">OK</button></form>
      <div class="sum-line"><span>Sous-total</span><span>${eur(st)}</span></div>
      ${remise ? `<div class="sum-line"><span>Code ${esc(code)}</span><span>−${eur(remise)}</span></div>` : ""}
      <div class="sum-line"><span>Livraison suivie</span><span>${port ? eur(port) : "Offerte"}</span></div>
      <div class="sum-line tot"><span>Total TTC</span><span>${eur(st - remise + port)}</span></div>
    </div>
  </div>`;
}

/* ---------- routeur ---------- */
function route() {
  const [a, b, c] = location.hash.replace(/^#\/?/, "").split("/").map(decodeURIComponent);
  const html = a === "collection" ? viewCollection(b, c) : a === "produit" ? viewProduit(b) : a === "box" ? viewBox()
    : a === "page" ? viewPage(b) : a === "commande" ? viewCommande() : viewHome();
  $("#main").innerHTML = html;
  document.querySelectorAll("nav.main a").forEach(x => x.classList.toggle("on", location.hash.startsWith(x.getAttribute("href"))));
  closeDrawers(); scrollTo(0, 0); stickyWatch();
}
const rerender = () => { const y = scrollY; route(); scrollTo(0, y); };
function stickyWatch() {
  const bar = $("#stickyBuy"), btn = document.querySelector(".buy [data-buy]");
  if (!bar || !btn) return;
  new IntersectionObserver(([e]) => bar.classList.toggle("show", !e.isIntersecting && e.boundingClientRect.top < 0)).observe(btn);
}

/* ---------- événements ---------- */
document.addEventListener("click", e => {
  const t = e.target.closest("button,a"); if (!t) return;
  const d = t.dataset;
  const pid = () => location.hash.split("/")[2];
  if (d.cart !== undefined) { e.preventDefault(); openCart(); }
  else if (d.close !== undefined || d.closecart !== undefined) closeDrawers();
  else if (d.menu !== undefined) { $("#menuM nav").innerHTML = $("#nav").innerHTML; $("#menuM").hidden = $("#menuBg").hidden = false; }
  else if (d.opt) { sel[pid()].opt = d.opt; rerender(); }
  else if (d.buy) { const p = P[d.buy]; addLine({ key: d.buy + (sel[d.buy]?.opt || ""), id: d.buy, lot: !!p.parure, nom: p.nom, opt: METAUX.find(m => m.id === sel[d.buy]?.opt)?.nom || sel[d.buy]?.opt || "", prix: p.prix, q: 1, ill: illP(d.buy, sel[d.buy]?.opt) }); }
  else if (d.duo) {
    const id = d.duo, o = sel[id]?.opt, dp = P[id].duo;
    addProduit(id, o, P[id].prix, true);
    addProduit(dp, P[dp].metaux?.includes(o) ? o : P[dp].metaux?.[0] || P[dp].coloris?.[0], prixDuo(dp));
  }
  else if (d.add) { addProduit(d.add, P[d.add].metaux?.[0] || P[d.add].coloris?.[0]); toast(`${P[d.add].nom} ajouté`); }
  else if (d.boxn) { box.n = +d.boxn; box.items = box.items.slice(0, box.n); rerender(); }
  else if (d.box) {
    const i = box.items.indexOf(d.box);
    if (i >= 0) box.items.splice(i, 1);
    else if (box.items.length < box.n) box.items.push(d.box);
    else toast(`Votre box est pleine (${box.n} bijoux)`);
    rerender();
  }
  else if (d.boxadd !== undefined) {
    if (box.items.length !== box.n) return;
    addLine({ key: "box-" + box.items.join("-"), id: "box", lot: true, nom: `Box ${box.n} bijoux`, opt: box.items.map(x => P[x].nom).join(", "), prix: CONFIG.box[box.n], q: 1, ill: ill("box") });
    box.items = []; rerender(); openCart();
  }
  else if (d.q !== undefined) { const l = cart[+d.q]; l.q += +d.d; if (l.q <= 0) cart.splice(+d.q, 1); saveCart(); renderCart(); }
  else if (d.pay !== undefined) toast("Démo : ici, Shopify ouvre son paiement sécurisé.");
});
$("#menuBg").addEventListener("click", closeDrawers);
$("#cartBg").addEventListener("click", closeDrawers);
document.addEventListener("keydown", e => { if (e.key === "Escape") closeDrawers(); });
document.addEventListener("submit", e => {
  const f = e.target; e.preventDefault();
  if (f.dataset.news !== undefined) { toast(`Merci ! Votre code : ${CONFIG.bienvenue.code}`); f.reset(); }
  else if (f.dataset.contact !== undefined) { toast("Message envoyé (démo). Réponse sous 24 h ouvrées."); f.reset(); }
  else if (f.dataset.suivi !== undefined) toast("Démo : le suivi s'affichera ici sur la vraie boutique.");
  else if (f.dataset.code !== undefined) {
    const v = f.querySelector("input").value.trim().toUpperCase(), p = promoActive();
    const ok = v === CONFIG.bienvenue.code || (p && v === p.code);
    store("vaure-code", ok ? v : null); toast(ok ? "Code appliqué" : "Ce code n'est pas valable");
    $("#main").innerHTML = viewCommande();
  }
});

$("#footTrust").innerHTML = GARANTIES.map(([, t, s]) => `<div><b>${t}</b><span class="muted">${s}</span></div>`).join("");
$("#year").textContent = new Date().getFullYear();
announce(); renderCount();
addEventListener("hashchange", route);
route();
