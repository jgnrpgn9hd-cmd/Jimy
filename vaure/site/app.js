/* VAURE — site de démonstration (aucun paiement réel).
   Réglages et catalogue : data.js. */

const prixDuo = id => Math.floor(P[id].prix * (1 - CONFIG.duoRemise)) + 0.9; // arrondi en ,90
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
function promoActive(now = new Date()) { const p = CONFIG.promo; return p && now >= new Date(p.debut) && now <= new Date(p.fin) ? p : null; }
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
    <div class="ship-bar">${reste > 0 ? `Livraison offerte à partir de ${eur(CONFIG.livraisonOfferteDes)}` : `La livraison vous est offerte`}<div class="bar"><i style="width:${pct}%"></i></div></div>
    ${cart.map((l, i) => `<div class="line"><div class="th">${l.ill}</div>
      <div><p>${esc(l.nom)}</p><small>${esc(l.opt || "")}</small>
      <div class="qty"><button data-q="${i}" data-d="-1" aria-label="Retirer un">−</button><span style="padding:3px 8px">${l.q}</span><button data-q="${i}" data-d="1" aria-label="Ajouter un">+</button></div></div>
      <b>${eur(l.prix * l.q)}</b></div>`).join("")}
    ${sug ? `<div class="upsell"><div class="th">${illP(sug)}</div><div><b>${P[sug].nom}</b><br><span class="muted">${P[sug].mat}</span></div><button data-add="${sug}">Ajouter · ${eur(P[sug].prix)}</button></div>` : ""}`;
  let ft = $("#cart .cart-ft");
  if (!ft) { ft = document.createElement("div"); ft.className = "cart-ft"; $("#cart").appendChild(ft); }
  ft.innerHTML = `<div class="tot"><span>Sous-total</span><span>${eur(st)}</span></div>
    <p class="small muted">${reste > 0 ? `Livraison suivie : ${eur(CONFIG.fraisLivraison)}` : "Livraison suivie offerte"} · Paiement en 3 fois dès 50 €</p>
    <a class="btn block" href="#/commande" data-closecart>Commander</a>
    <p class="small muted center">Paiement sécurisé · Retours sous 30 jours</p>`;
  typo($("#cart"));
}
function addProduit(id, opt, prix, silent) {
  const p = P[id];
  const optNom = METAUX.find(m => m.id === opt)?.nom || opt || "";
  addLine({ key: `${id}-${opt || ""}-${prix}`, id, nom: p.nom, opt: optNom + (prix < p.prix ? " · avec sa pièce assortie" : ""), prix: prix ?? p.prix, q: 1, ill: illP(id, opt) }, silent);
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
    : noel ? `Pour Noël, commandez avant le ${fmtLong(noel)} · Livraison offerte à partir de ${CONFIG.livraisonOfferteDes} €`
    : `Livraison offerte à partir de ${CONFIG.livraisonOfferteDes} € · Retours sous 30 jours`;
}
function carte(id) {
  const p = P[id];
  const opt = p.metaux ? p.metaux[0] : p.coloris?.[0];
  return `<a class="prod" href="#/produit/${id}"><div class="pic">${illP(id, opt)}${p.tag ? `<span class="tag">${p.tag}</span>` : ""}</div>
    <h3>${p.nom}</h3><span class="mat">${p.mat}</span>
    <span class="pr">${eur(p.prix)}</span></a>`;
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
    <p class="eyebrow">La sélection</p>
    <h2>Les incontournables</h2>
    <div class="grid">${best.map(carte).join("")}</div>
  </div></section>

  <section class="alt"><div class="wrap">
    <div class="center"><p class="eyebrow">La promesse VAURE</p><h2>Un éclat qui dure.</h2>
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
      <p class="eyebrow">${noel ? "Pour Noël" : "En écrin"}</p>
      <h2>La Parure Marguerite</h2>
      <p class="lead" style="margin:14px 0 20px">Collier, bracelet et puces assortis, réunis dans un écrin. ${eur(P["parure-marguerite"].prix)}.</p>
      ${noel ? `<p class="urgent">Pour une livraison avant Noël, nous vous invitons à commander avant le <b>${fmtLong(noel)}</b>.</p>` : ""}
      <a class="btn" href="#/produit/parure-marguerite">Voir la parure</a>
    </div>
  </div></section>

  <section class="alt"><div class="wrap split">
    <div>
      <p class="eyebrow">Le coffret</p>
      <h2>Créez votre coffret.</h2>
      <p class="lead" style="margin:14px 0 20px">Réunissez trois ou cinq pièces de votre choix dans un écrin VAURE. Coffret de trois pièces : 29,90 €. Coffret de cinq pièces : 44,90 €.</p>
      <a class="btn" href="#/box">Créer mon coffret</a>
    </div>
    <div class="pic">${ill("box")}</div>
  </div></section>

  <section><div class="wrap center">
    <p class="eyebrow">L'effet piercing, sans trou</p>
    <h2>Sans perçage.</h2>
    <p class="lead" style="margin:14px auto 0">Nos anneaux de nez et ear cuffs se posent en un geste et se retirent quand vous le souhaitez.</p>
    <div class="grid" style="grid-template-columns:repeat(auto-fit,minmax(160px,240px));justify-content:center">${["faux-anneau-nez", "ear-cuff"].map(carte).join("")}</div>
  </div></section>

  <section class="alt"><div class="wrap center">
    <p class="eyebrow">L'univers VAURE</p>
    <h2>Pour finir la tenue</h2>
    <div class="cats">${[["bijoux", "creoles"], ["piercings", "ear-cuff"], ["foulards", "foulard"], ["sacs", "mini-sac"]].map(([c, i]) => `<a href="#/collection/${c}">${ill(i, i === "foulard" ? "#EDE3D2" : i === "mini-sac" ? "#1D1B19" : "#C9A35E", "#E6DDCF")}<span>${CATS[c].nom}</span></a>`).join("")}</div>
  </div></section>

  <section><div class="wrap center">
    <p class="eyebrow">Avis clientes</p>
    <h2>Vos avis, vérifiés.</h2>
    <div class="reviews-empty"><p>Nous publions uniquement les avis de vraies clientes, recueillis après livraison. Les premiers arrivent avec les premières commandes.</p>
    <p class="small muted" style="margin-top:10px">Pas de faux avis, pas de note inventée.</p></div>
  </div></section>

  <section class="alt"><div class="wrap center">
    <p class="eyebrow">Journal</p><h2>Conseils et inspirations</h2>
    <div class="grid j-grid">${ARTICLES.map(cartArt).join("")}</div>
    <p style="margin-top:24px"><a class="link" href="#/journal">Tous les articles</a></p>
  </div></section>

  <section><div class="wrap center">
    <p class="eyebrow">@vaure.studio</p><h2>Portés par vous</h2>
    <p class="lead" style="margin:12px auto 0">Partagez vos bijoux VAURE avec #vaurestudio : nous republions nos préférées, avec votre accord.</p>
    <div class="insta">${["collier-fleur", "creoles", "ear-cuff", "jonc", "puces-fleur", "foulard"].map(t => `<div>${ill(t, t === "foulard" ? "#EDE3D2" : "#C9A35E", "#E6DDCF")}</div>`).join("")}</div>
    <p class="todo" style="margin-top:12px">Emplacements provisoires : vos photos Instagram et celles de vos clientes.</p>
  </div></section>

  <section style="padding-top:0"><div class="wrap">
    <div class="news">
      <h2>La lettre VAURE</h2>
      <p class="lead" style="margin:12px auto 0">Nouveautés, conseils d'entretien et une attention de bienvenue sur votre première commande.</p>
      <form data-news><label for="nl" style="position:absolute;left:-9999px">E-mail</label><input id="nl" type="email" required placeholder="Votre e-mail"><button class="btn">S'inscrire</button></form>
    </div>
  </div></section>`;
}

let tri = "pertinence";
const TRIS = [["pertinence", "Sélection"], ["prix-asc", "Prix croissant"], ["prix-desc", "Prix décroissant"], ["nom", "Nom"]];
function trier(ids) {
  const a = [...ids];
  if (tri === "prix-asc") a.sort((x, y) => P[x].prix - P[y].prix);
  if (tri === "prix-desc") a.sort((x, y) => P[y].prix - P[x].prix);
  if (tri === "nom") a.sort((x, y) => P[x].nom.localeCompare(P[y].nom, "fr"));
  return a;
}
function viewCollection(cat, sub) {
  if (!CATS[cat]) return view404();
  const c = CATS[cat];
  let ids = Object.keys(P).filter(id => cat === "cadeaux" ? (P[id].cat === "cadeaux" || P[id].prix < 20) : P[id].cat === cat);
  if (sub) ids = ids.filter(id => cat === "cadeaux" ? (sub === "Parures" ? P[id].parure : P[id].prix < 20 && !P[id].parure) : P[id].sub === sub);
  return `<section><div class="wrap">
    <p class="crumbs" style="padding-top:0"><a href="#/">Accueil</a> / ${c.nom}</p>
    <h1 class="center">${c.nom}</h1>
    <p class="lead center" style="margin-top:12px">${c.intro}</p>
    ${cat === "piercings" ? `<p class="mat-box center" style="max-width:720px;margin:20px auto 0">Piercings en titane ASTM F136, livrés sous emballage scellé. Pour des raisons d'hygiène, un piercing ouvert ne peut pas être retourné. Pour un premier perçage, passez par un perceur professionnel.</p>` : ""}
    <div class="filters">${["", ...c.sous].map(s => `<a class="${(sub || "") === s ? "on" : ""}" href="#/collection/${cat}${s ? "/" + encodeURIComponent(s) : ""}">${s || "Tout"}</a>`).join("")}</div>
    <div class="coll-bar"><span class="muted small">${ids.length} pièce${ids.length > 1 ? "s" : ""}</span>
      <label class="small">Trier par <select data-tri>${TRIS.map(([k, v]) => `<option value="${k}" ${k === tri ? "selected" : ""}>${v}</option>`).join("")}</select></label></div>
    <div class="grid" style="margin-top:16px">${trier(ids).map(carte).join("")}</div>
  </div></section>`;
}

let sel = {};
let vus = store("vaure-vus") || [];
// vue 0 : le bijou ; vue 1 : sur fond nuit ; vue 2 : dans son écrin
function vue(id, opt, v) {
  const p = P[id];
  if (v === 1) { const m = METAUX.find(x => x.id === opt) || METAUX[0]; return ill(p.ill, p.coloris ? FOND[opt] || FOND[p.coloris[0]] : m.hex, "#1E1C1A"); }
  if (v === 2) return ill("box");
  return illP(id, opt);
}
function viewProduit(id) {
  const p = P[id]; if (!p) return view404();
  const s = sel[id] ||= { opt: p.metaux ? p.metaux[0] : p.coloris?.[0], v: 0 };
  vus = [id, ...vus.filter(x => x !== id)].slice(0, 8); store("vaure-vus", vus);
  const [d1, d2] = fenetreLivraison(), noel = noelActif();
  const duo = p.duo && P[p.duo];
  const opts = p.metaux ? p.metaux.map(m => METAUX.find(x => x.id === m)) : (p.coloris || []).map(c => ({ id: c, nom: c, hex: FOND[c] }));
  return `
  <div class="wrap"><p class="crumbs"><a href="#/">Accueil</a> / <a href="#/collection/${p.cat}">${CATS[p.cat].nom}</a> / ${p.nom}</p></div>
  <div class="wrap pdp">
    <div class="gallery">
      <div class="main-pic">${vue(id, s.opt, s.v || 0)}</div>
      <div class="thumbs">${[0, 1, 2].map(v => `<button class="${(s.v || 0) === v ? "on" : ""}" data-vue="${v}" aria-label="Vue ${v + 1}">${vue(id, s.opt, v)}</button>`).join("")}</div>
      <p class="todo">Illustrations provisoires : à remplacer par les photos CJ, puis par les photos des échantillons portés.</p>
    </div>
    <div class="buy">
      ${p.tag ? `<p class="eyebrow">${p.tag}</p>` : ""}
      <h1>${p.nom}</h1>
      <p class="stars-note">${p.mat}</p>
      <div class="price">${eur(p.prix)}${p.parure ? `<small>trois pièces réunies</small>` : ""}</div>
      ${p.prix >= 50 ? `<p class="small muted">ou 3 × ${eur(p.prix / 3)} sans frais</p>` : ""}
      <p style="margin:16px 0" class="muted">${p.desc}</p>
      ${p.parure ? `<ul class="benefits">${p.parure.map(x => `<li>${P[x].nom}</li>`).join("")}<li>Écrin cadeau VAURE</li></ul>` : ""}
      ${opts.length > 1 ? `<div class="opt"><div class="opt-h"><span>${p.metaux ? "Finition" : "Coloris"} : <b>${opts.find(o => o.id === s.opt)?.nom}</b></span></div>
        <div class="opt-pills">${opts.map(o => `<button class="${o.id === s.opt ? "on" : ""}" data-opt="${esc(o.id)}">${o.nom}</button>`).join("")}</div></div>` : ""}
      <button class="btn block" data-buy="${id}">Ajouter au panier · ${eur(p.prix)}</button>
      ${duo && !p.parure ? `<div class="duo"><div class="th">${illP(p.duo, s.opt)}</div><div><span class="small muted">À porter avec</span><br><b>${duo.nom}</b><br><span class="muted small">${eur(prixDuo(p.duo))} avec cette pièce</span></div><button data-duo="${id}">Ajouter l'ensemble</button></div>` : ""}
      <div class="deliv">Livraison estimée entre le <b>${fmtJour(d1)}</b> et le <b>${fmtJour(d2)}</b>, avec suivi.</div>
      ${noel ? `<div class="urgent">Pour une livraison avant Noël, commandez avant le <b>${fmtLong(noel)}</b>.</div>` : ""}
      <div class="guar">${GARANTIES.map(([i, t, sub]) => `<div>${ICON[i]}<span><b>${t}</b><br><span class="muted">${sub}</span></span></div>`).join("")}</div>
      <div class="acc">
        <details open><summary>Matière</summary><div>${p.mat}. ${p.piercing ? "Titane implantable ASTM F136, sans nickel ajouté. Livré sous emballage scellé ; un piercing ouvert ne peut pas être retourné." : p.cat === "bijoux" || p.cat === "cadeaux" ? "L'acier inoxydable 316L ne rouille pas et garde sa couleur à l'eau. Le plaqué or reste un plaquage : évitez parfum et produits ménagers pour qu'il dure. <span class=\"ph\">[Tenue à l'eau à vérifier sur l'échantillon avant de l'affirmer]</span>" : "Fabriqué par notre fournisseur partenaire et contrôlé avant expédition."}</div></details>
        <details><summary>Livraison et retours</summary><div>Livraison suivie offerte dès ${CONFIG.livraisonOfferteDes} €, sinon ${eur(CONFIG.fraisLivraison)}. Retours sous 30 jours${p.piercing ? ", sauf piercing ouvert (hygiène)" : ""} : <a class="link" href="#/page/retours">conditions</a>.</div></details>
        <details><summary>Entretien</summary><div>Rincez à l'eau claire, séchez avec un chiffon doux. Rangez chaque bijou séparément pour éviter les rayures. <a class="link" href="#/page/entretien">Tous nos conseils</a></div></details>
      </div>
    </div>
  </div>
  <section><div class="wrap"><div class="avis">
    <div><p class="eyebrow">Avis clientes</p><h2>Ce qu'elles en pensent</h2></div>
    <div><p>Les avis de ce bijou s'afficheront ici, uniquement ceux de clientes ayant reçu leur commande. Ils sont recueillis par e-mail après la livraison, avec photo si elles le souhaitent.</p>
    <p class="small muted" style="margin-top:8px">Pas de faux avis ni de note inventée.</p></div>
  </div></div></section>
  <section class="alt"><div class="wrap center"><h2>Vous aimerez aussi</h2>
    <div class="grid">${Object.keys(P).filter(x => x !== id && P[x].cat === p.cat).slice(0, 4).map(carte).join("")}</div></div></section>
  ${vus.filter(x => x !== id && P[x]).length ? `<section><div class="wrap center"><h2>Récemment consultés</h2>
    <div class="grid">${vus.filter(x => x !== id && P[x]).slice(0, 4).map(carte).join("")}</div></div></section>` : ""}
  <div class="sticky-buy" id="stickyBuy"><div><b>${eur(p.prix)}</b><br><small class="muted">${p.nom}</small></div><button class="btn" data-buy="${id}">Ajouter</button></div>`;
}

/* coffret à composer */
let box = { n: 3, items: [] };
function viewBox() {
  const ids = Object.keys(P).filter(eligibleBox);
  const prix = CONFIG.box[box.n];
  const sep = box.items.reduce((s, id) => s + P[id].prix, 0);
  return `<section><div class="wrap">
    <p class="eyebrow center">Le coffret</p>
    <h1 class="center">Créez votre coffret.</h1>
    <p class="lead center" style="margin-top:12px">Choisissez ${box.n} pièces parmi la sélection ci-dessous. Coffret de ${box.n} pièces, écrin compris : ${eur(prix)}.</p>
    <div class="box-wrap" style="margin-top:32px">
      <div class="grid" style="margin-top:0">${ids.map(id => `<div class="prod"><a href="#/produit/${id}" class="pic" style="display:block">${illP(id)}</a><h3>${P[id].nom}</h3><span class="mat">${P[id].mat}</span><span class="pr">${eur(P[id].prix)}</span>
        <button class="add-box ${box.items.includes(id) ? "on" : ""}" data-box="${id}">${box.items.includes(id) ? "Dans le coffret" : "Choisir"}</button></div>`).join("")}</div>
      <aside class="box-pick">
        <h3>Mon coffret</h3>
        <div class="box-size">${[3, 5].map(n => `<button class="${n === box.n ? "on" : ""}" data-boxn="${n}">${n} pièces · ${eur(CONFIG.box[n])}</button>`).join("")}</div>
        <div class="box-slots">${Array.from({ length: box.n }, (_, i) => `<i>${box.items[i] ? illP(box.items[i]) : i + 1}</i>`).join("")}</div>
        <p class="small muted">${box.items.length} sur ${box.n} pièces choisies</p>
        <button class="btn block" style="margin-top:14px${box.items.length === box.n ? "" : ";opacity:.4"}" data-boxadd ${box.items.length === box.n ? "" : "disabled"}>Ajouter le coffret · ${eur(prix)}</button>
      </aside>
    </div>
  </div></section>`;
}

const FAQ = [
  ["Est-ce que les bijoux noircissent ?", "Nos bijoux sont en acier inoxydable 316L ou en titane, des métaux qui ne rouillent pas et ne verdissent pas la peau. Le plaqué or reste un plaquage : il dure plus longtemps si on évite parfum, crème et produits ménagers."],
  ["Je peux les garder sous la douche ?", "Oui, l'acier et le titane supportent l'eau. Rincez à l'eau claire après la mer ou la piscine. [À confirmer sur nos échantillons avant la mise en ligne.]"],
  ["J'ai la peau sensible, ça va aller ?", "Le titane et l'acier 316L font partie des métaux les mieux tolérés, c'est pour ça que nous les avons choisis. Aucun métal ne convient à 100 % des peaux : en cas de réaction, retirez le bijou et écrivez-nous."],
  ["Comment se porte un bijou sans perçage ?", "L'anneau de nez se clipse sur la narine et l'ear cuff se glisse sur le cartilage de l'oreille. Sans perçage, et il se retire quand vous le souhaitez."],
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
  cgv: ["Conditions générales de vente", `<p class="ph">Brouillon à faire relire. Les éléments entre crochets sont à compléter.</p>
    <h2>1. Vendeur</h2><p>Les présentes conditions régissent les ventes du site vaurestudio.com, édité par [Prénom Nom], [statut : micro-entreprise], SIREN [numéro], [adresse], e-mail ${CONFIG.email}.</p>
    <h2>2. Produits</h2><p>Les bijoux et accessoires sont décrits le plus fidèlement possible : matière, dimensions, finition. Les photos peuvent présenter de légères différences de couleur selon l'écran. Les bijoux dorés sont en acier inoxydable ou en titane plaqué or ; ce ne sont pas des bijoux en or massif.</p>
    <h2>3. Prix</h2><p>Les prix sont indiqués en euros, toutes taxes comprises [ou : TVA non applicable, article 293 B du CGI]. Les frais de livraison sont indiqués avant la validation de la commande.</p>
    <h2>4. Commande et paiement</h2><p>La commande est ferme après paiement. Le paiement est effectué par carte bancaire, PayPal, Apple Pay ou Google Pay via des prestataires sécurisés ; le vendeur n'a jamais accès aux numéros de carte.</p>
    <h2>5. Livraison</h2><p>Les commandes sont préparées sous ${CONFIG.delai.prepa.join(" à ")} jours ouvrés et livrées sous ${CONFIG.delai.transport.join(" à ")} jours ouvrés environ, avec suivi, en France, en Belgique et en Suisse.</p>
    <h2>6. Droit de rétractation</h2><p>Vous disposez de 14 jours à compter de la réception pour vous rétracter sans motif (article L221-18 du Code de la consommation) ; VAURE prolonge ce délai à 30 jours. Le bijou doit être retourné non porté, dans son emballage d'origine. Exception : les piercings dont l'emballage scellé a été ouvert ne peuvent pas être retournés pour des raisons d'hygiène (article L221-28, 5°).</p>
    <h2>7. Garanties légales</h2><p>Les produits bénéficient de la garantie légale de conformité (articles L217-3 et suivants du Code de la consommation) et de la garantie des vices cachés (articles 1641 et suivants du Code civil).</p>
    <h2>8. Médiation</h2><p>En cas de litige non résolu, vous pouvez recourir gratuitement au médiateur de la consommation : [nom du médiateur, site internet].</p>
    <h2>9. Données personnelles</h2><p>Voir la <a class="link" href="#/page/confidentialite">politique de confidentialité</a>.</p>`],
  mentions: ["Mentions légales", `<h2>Éditeur</h2><p>[Prénom Nom], [statut], SIREN [numéro], [adresse]. Contact : ${CONFIG.email}. Directeur de la publication : [Prénom Nom].</p>
    <h2>Hébergeur</h2><p>Shopify Inc., 151 O'Connor Street, Ground floor, Ottawa, ON K2P 2L8, Canada.</p>
    <h2>Propriété intellectuelle</h2><p>Le nom VAURE, le logo, les textes et les visuels du site sont protégés. Toute reproduction sans autorisation est interdite.</p>`],
  confidentialite: ["Confidentialité", `<p>Nous collectons uniquement les données utiles à votre commande et, avec votre accord, à nos e-mails.</p>
    <h2>Données collectées</h2><ul><li>Commande : nom, adresse, e-mail, téléphone éventuel, produits achetés.</li><li>Lettre VAURE : e-mail, si vous vous inscrivez.</li><li>Navigation : cookies, selon vos choix.</li></ul>
    <h2>Destinataires</h2><p>Shopify (boutique et paiement), le transporteur, notre fournisseur pour l'expédition, notre outil d'e-mails. Aucune donnée n'est vendue.</p>
    <h2>Durée</h2><p>Données de commande : durée légale de conservation comptable. Lettre VAURE : jusqu'à votre désinscription.</p>
    <h2>Vos droits</h2><p>Accès, rectification, effacement, opposition et portabilité : écrivez à ${CONFIG.email}. Vous pouvez aussi saisir la CNIL.</p>`],
  cookies: ["Cookies", `<p>Certains cookies sont nécessaires au fonctionnement du site (panier, sécurité). Les autres (mesure d'audience, publicité) ne sont déposés qu'avec votre accord.</p>
    <p>Vous pouvez changer d'avis à tout moment : <a class="link" href="#" data-cookie="reset">modifier mes choix</a>.</p>`]
};
const viewPage = id => PAGES[id] ? `<div class="wrap"><div class="page"><h1>${PAGES[id][0]}</h1>${PAGES[id][1]}</div></div>` : viewHome();

let cmd = store("vaure-cmd") || { etape: 1, info: {}, livraison: "suivie", cadeau: "" };
const saveCmd = () => store("vaure-cmd", cmd);
const LIVRAISONS = { suivie: { nom: "Livraison suivie", prix: st => st >= CONFIG.livraisonOfferteDes ? 0 : CONFIG.fraisLivraison, delai: CONFIG.delai } };
function totaux() {
  const st = sousTotal(), code = store("vaure-code"), p = promoActive();
  let remise = 0;
  if (code === CONFIG.bienvenue.code) remise = st * CONFIG.bienvenue.taux;
  if (p && code === p.code) remise = cart.filter(l => l.lot).reduce((s, l) => s + l.prix * l.q, 0) * p.taux;
  const port = LIVRAISONS[cmd.livraison].prix(st);
  return { st, code, remise, port, total: st - remise + port };
}
function viewCommande() {
  if (!cart.length) return `<div class="wrap"><div class="page"><h1>Commande</h1><p>Votre panier est vide.</p><a class="btn" href="#/collection/bijoux">Voir les bijoux</a></div></div>`;
  const t = totaux(), [d1, d2] = fenetreLivraison(), i = cmd.info;
  const etapes = ["Informations", "Livraison", "Paiement"];
  const champ = (id, label, ac, type = "text", req = true) => `<div><label for="c-${id}">${label}</label><input id="c-${id}" name="${id}" type="${type}" autocomplete="${ac}" value="${esc(i[id] || "")}" ${req ? "required" : ""}></div>`;
  let corps;
  if (cmd.etape === 1) corps = `<form data-etape="1">
      <h2>Vos informations</h2>
      ${champ("email", "E-mail", "email", "email")}
      <div class="row">${champ("prenom", "Prénom", "given-name")}${champ("nom", "Nom", "family-name")}</div>
      ${champ("adresse", "Adresse", "street-address")}
      ${champ("complement", "Complément (facultatif)", "address-line2", "text", false)}
      <div class="row">${champ("cp", "Code postal", "postal-code")}${champ("ville", "Ville", "address-level2")}</div>
      <div><label for="c-pays">Pays</label><select id="c-pays" name="pays">${["France", "Belgique", "Suisse"].map(x => `<option ${i.pays === x ? "selected" : ""}>${x}</option>`).join("")}</select></div>
      <button class="btn block" style="margin-top:20px">Continuer vers la livraison</button></form>`;
  else if (cmd.etape === 2) corps = `<form data-etape="2">
      <h2>Livraison</h2>
      <p class="small muted">${esc(i.prenom)} ${esc(i.nom)}, ${esc(i.adresse)}, ${esc(i.cp)} ${esc(i.ville)}, ${esc(i.pays || "France")} · <a href="#" class="link" data-etapego="1">modifier</a></p>
      <label class="ship-opt on"><input type="radio" name="livraison" value="suivie" checked><span><b>Livraison suivie</b><br><span class="muted small">Entre le ${fmtJour(d1)} et le ${fmtJour(d2)}</span></span><b>${t.port ? eur(t.port) : "Offerte"}</b></label>
      <div class="gift"><label for="c-cadeau"><b>Un message pour accompagner le bijou ?</b> <span class="muted small">(facultatif, glissé dans l'écrin)</span></label>
      <textarea id="c-cadeau" name="cadeau" rows="3" maxlength="200" placeholder="Joyeux anniversaire, avec tout mon amour…">${esc(cmd.cadeau)}</textarea></div>
      <p class="small muted">Chaque commande est expédiée dans un écrin VAURE.</p>
      <button class="btn block" style="margin-top:16px">Continuer vers le paiement</button></form>`;
  else corps = `<form data-etape="3">
      <h2>Paiement</h2>
      <p class="small muted">Toutes les transactions sont chiffrées. Sur la boutique, cette étape est le paiement sécurisé de Shopify.</p>
      <div class="pay-opts">${["Carte bancaire", "PayPal", "Apple Pay", "Google Pay"].map((x, k) => `<label class="ship-opt ${k ? "" : "on"}"><input type="radio" name="moyen" ${k ? "" : "checked"}><span><b>${x}</b></span></label>`).join("")}</div>
      <div class="demo-card"><div class="row"><div><label>Numéro de carte</label><input disabled placeholder="Démo : aucun paiement"></div><div><label>Expiration</label><input disabled placeholder="MM / AA"></div></div></div>
      <label class="check"><input type="checkbox" required> J'accepte les <a class="link" href="#/page/cgv">conditions générales de vente</a>.</label>
      <button class="btn block" style="margin-top:16px">Valider la commande · ${eur(t.total)}</button>
      <p class="small muted center" style="margin-top:10px">Démo : aucun paiement ne sera effectué.</p></form>`;
  return `<div class="wrap">
    <ol class="steps">${etapes.map((e, k) => `<li class="${k + 1 === cmd.etape ? "on" : k + 1 < cmd.etape ? "done" : ""}">${k + 1 < cmd.etape ? `<a href="#" data-etapego="${k + 1}">${e}</a>` : e}</li>`).join("")}</ol>
    <div class="checkout" style="padding-top:20px">
    <div class="box">${corps}</div>
    <div class="box">
      <h2>Récapitulatif</h2>
      ${cart.map(l => `<div class="sum-line"><span>${l.q} × ${esc(l.nom)}<br><small class="muted">${esc(l.opt || "")}</small></span><span>${eur(l.prix * l.q)}</span></div>`).join("")}
      <form data-code style="display:flex;gap:8px;margin:14px 0"><input placeholder="Code de réduction" aria-label="Code de réduction" value="${esc(t.code || "")}" style="flex:1"><button class="btn ghost" style="padding:10px 16px">OK</button></form>
      <div class="sum-line"><span>Sous-total</span><span>${eur(t.st)}</span></div>
      ${t.remise ? `<div class="sum-line"><span>Code ${esc(t.code)}</span><span>−${eur(t.remise)}</span></div>` : ""}
      <div class="sum-line"><span>Livraison suivie</span><span>${t.port ? eur(t.port) : "Offerte"}</span></div>
      <div class="sum-line tot"><span>Total TTC</span><span>${eur(t.total)}</span></div>
    </div>
  </div></div>`;
}
function viewMerci() {
  const c = store("vaure-derniere");
  if (!c) return view404();
  const [d1, d2] = fenetreLivraison(new Date(c.date));
  return `<div class="wrap"><div class="page center">
    <p class="eyebrow">Commande confirmée</p><h1>Merci, ${esc(c.prenom)}.</h1>
    <p>Votre commande <b>${c.num}</b> est enregistrée. Un e-mail de confirmation vient de partir à <b>${esc(c.email)}</b>.</p>
    <p>Livraison estimée entre le <b>${fmtJour(d1)}</b> et le <b>${fmtJour(d2)}</b>. Vous recevrez le numéro de suivi dès l'expédition.</p>
    ${c.cadeau ? `<p class="mat-box">Votre message sera glissé dans l'écrin : « ${esc(c.cadeau)} »</p>` : ""}
    <p class="small muted">Démo : aucune commande réelle n'a été passée.</p>
    <a class="btn" href="#/" style="margin-top:20px">Retour à l'accueil</a>
  </div></div>`;
}

/* espace client (démo : sur Shopify, ce sont les comptes clients) */
function viewCompte() {
  return `<div class="wrap"><div class="compte">
    <form data-login class="box"><h2>Se connecter</h2>
      <label for="l-mail">E-mail</label><input id="l-mail" type="email" required autocomplete="email">
      <label for="l-mdp">Mot de passe</label><input id="l-mdp" type="password" required autocomplete="current-password">
      <button class="btn block" style="margin-top:18px">Se connecter</button>
      <p class="small muted" style="margin-top:10px"><a class="link" href="#/page/contact">Mot de passe oublié ?</a></p></form>
    <form data-signup class="box"><h2>Créer un compte</h2>
      <p class="small muted">Suivez vos commandes et retrouvez vos adresses. Facultatif : vous pouvez aussi commander sans compte.</p>
      <label for="s-prenom">Prénom</label><input id="s-prenom" required autocomplete="given-name">
      <label for="s-mail">E-mail</label><input id="s-mail" type="email" required autocomplete="email">
      <label for="s-mdp">Mot de passe</label><input id="s-mdp" type="password" required minlength="8" autocomplete="new-password">
      <button class="btn block ghost" style="margin-top:18px">Créer mon compte</button></form>
  </div></div>`;
}

/* journal : articles de conseils (référencement Google) */
const ARTICLES = [
  { id: "bijou-qui-noircit", titre: "Pourquoi certains bijoux noircissent, et comment l'éviter", ill: "collier-fleur", date: "2026-10-20",
    chapo: "Le bijou qui noircit ou verdit n'est pas une fatalité : tout se joue dans le métal.",
    corps: `<p>Un bijou fantaisie classique est le plus souvent en laiton ou en alliage de cuivre, recouvert d'une fine couche dorée. Au contact de la transpiration, de l'eau ou du parfum, le cuivre s'oxyde : le bijou fonce, et la peau peut garder une trace verte.</p>
      <h2>Les métaux qui tiennent</h2><p>L'acier inoxydable 316L contient du chrome qui le protège de la rouille ; c'est l'acier de l'horlogerie. Le titane est encore plus léger et très bien toléré. Ce sont les deux seuls métaux que nous utilisons.</p>
      <h2>Faire durer le doré</h2><ul><li>Mettez parfum et crème avant le bijou.</li><li>Évitez les produits ménagers et le chlore des piscines.</li><li>Rincez à l'eau claire, séchez avec un chiffon doux.</li><li>Rangez chaque bijou à part, à l'abri de l'air.</li></ul>` },
  { id: "choisir-ses-creoles", titre: "Créoles : comment choisir la bonne taille", ill: "creoles", date: "2026-10-12",
    chapo: "Mini, moyennes ou épaisses : la bonne créole dépend du visage, de la coiffure et du moment.",
    corps: `<p>Les mini créoles se portent tous les jours, même pour dormir. Les créoles moyennes encadrent le visage sans le durcir. Les créoles épaisses font l'effet d'un bijou en or, à réserver aux tenues simples.</p>
      <h2>Le visage</h2><p>Un visage rond s'allonge avec une créole plus grande que large ; un visage fin supporte des créoles épaisses.</p>
      <h2>La coiffure</h2><p>Cheveux attachés : osez plus grand. Cheveux lâchés : une créole moyenne reste visible sans se perdre.</p>` },
  { id: "idees-cadeaux", titre: "Idées de cadeaux bijoux, de 15 à 45 €", ill: "parure", date: "2026-10-05",
    chapo: "Un bijou réussi se garde des années : voici nos idées selon la personne et le budget.",
    corps: `<h2>Moins de 20 €</h2><p>Les mini créoles, le jonc fin ou l'anneau de nez sans perçage : de petites attentions qui font plaisir sans risque de taille.</p>
      <h2>Autour de 25 €</h2><p>Le collier Initiale, pour un cadeau personnel, ou le collier Marguerite, notre incontournable.</p>
      <h2>Pour marquer le coup</h2><p>La Parure Marguerite ou la Parure Essentielle, trois pièces réunies dans leur écrin, prêtes à offrir.</p>` }
];
const fmtDate = d => new Date(d + "T12:00:00").toLocaleDateString("fr-FR", { day: "numeric", month: "long", year: "numeric" });
function viewJournal(id) {
  const a = ARTICLES.find(x => x.id === id);
  if (id && !a) return view404();
  if (a) return `<article class="wrap article">
    <p class="crumbs"><a href="#/">Accueil</a> / <a href="#/journal">Journal</a></p>
    <p class="eyebrow">${fmtDate(a.date)}</p><h1>${a.titre}</h1><p class="lead" style="margin:16px 0 28px">${a.chapo}</p>
    <div class="art-pic">${ill(a.ill)}</div><div class="page" style="padding-top:24px">${a.corps}</div></article>`;
  return `<section><div class="wrap"><p class="eyebrow center">Journal</p><h1 class="center">Conseils et inspirations</h1>
    <div class="grid j-grid">${ARTICLES.map(cartArt).join("")}</div></div></section>`;
}
const cartArt = a => `<a class="prod" href="#/journal/${a.id}"><div class="pic" style="aspect-ratio:4/3">${ill(a.ill)}</div><span class="mat">${fmtDate(a.date)}</span><h3>${a.titre}</h3></a>`;

function view404() {
  return `<div class="wrap"><div class="page center"><p class="eyebrow">Page introuvable</p><h1>Cette page n'existe pas.</h1>
    <p>Le lien est peut-être ancien, ou le bijou n'est plus disponible.</p><a class="btn" href="#/" style="margin-top:16px">Retour à l'accueil</a></div></div>`;
}

/* recherche instantanée */
function openSearch() { $("#search").hidden = false; $("#q").value = ""; renderSearch(); setTimeout(() => $("#q").focus(), 30); }
function renderSearch() {
  const q = $("#q").value.trim().toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "");
  const norm = t => t.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "");
  const ids = q.length < 2 ? ["collier-marguerite", "creoles-epaisses", "faux-anneau-nez", "parure-marguerite"]
    : Object.keys(P).filter(id => norm(`${P[id].nom} ${P[id].mat} ${P[id].sub} ${CATS[P[id].cat].nom}`).includes(q));
  $("#qRes").innerHTML = (q.length < 2 ? `<p class="small muted">Suggestions</p>` : `<p class="small muted">${ids.length} résultat${ids.length > 1 ? "s" : ""}</p>`)
    + (ids.length ? `<div class="grid">${ids.slice(0, 8).map(carte).join("")}</div>` : `<p>Aucun bijou ne correspond. Essayez « collier », « créoles » ou « titane ».</p>`);
  typo($("#qRes"));
}

/* bandeau cookies (RGPD) : le choix est gardé, rien n'est chargé sans accord */
function cookies() {
  if (store("vaure-cookies")) return;
  const el = document.createElement("div");
  el.className = "cookies"; el.setAttribute("role", "dialog"); el.setAttribute("aria-label", "Cookies");
  el.innerHTML = `<p>Nous utilisons des cookies pour faire fonctionner le panier et, avec votre accord, mesurer l'audience et la publicité. <a class="link" href="#/page/cookies">En savoir plus</a></p>
    <div><button class="btn ghost" data-cookie="refus">Refuser</button><button class="btn" data-cookie="ok">Accepter</button></div>`;
  document.body.appendChild(el);
}

const TITRES = { collection: c => CATS[c]?.nom, produit: id => P[id]?.nom, box: () => "Créez votre coffret", page: id => PAGES[id]?.[0], commande: () => "Commande", merci: () => "Merci", compte: () => "Mon compte", journal: id => ARTICLES.find(x => x.id === id)?.titre || "Journal" };

/* typographie française sur le texte affiché : apostrophe courbe, espace insécable avant : ; ! ? € % et après « */
function typo(root) {
  const w = document.createTreeWalker(root, NodeFilter.SHOW_TEXT, { acceptNode: n => n.parentElement.closest("script,style,textarea,input,svg") ? NodeFilter.FILTER_REJECT : NodeFilter.FILTER_ACCEPT });
  for (let n; (n = w.nextNode());) {
    const t = n.nodeValue.replace(/(\p{L})'(\p{L})/gu, "$1\u2019$2").replace(/ ([:;!?»€%])/g, "\u00A0$1").replace(/« /g, "«\u00A0").replace(/(\d) (?=[\p{L}€%])/gu, "$1\u00A0");
    if (t !== n.nodeValue) n.nodeValue = t;
  }
}

/* ---------- routeur ---------- */
function route() {
  const [a, b, c] = location.hash.replace(/^#\/?/, "").split("/").map(decodeURIComponent);
  const vues = { collection: () => viewCollection(b, c), produit: () => viewProduit(b), box: viewBox, page: () => PAGES[b] ? viewPage(b) : view404(),
    commande: viewCommande, merci: viewMerci, compte: viewCompte, journal: () => viewJournal(b) };
  const html = !a ? viewHome() : vues[a] ? vues[a]() : view404();
  $("#main").innerHTML = html;
  typo($("#main"));
  const titre = a && TITRES[a] ? TITRES[a](b) : null;
  document.title = (titre ? `${titre} — VAURE` : "VAURE — Bijoux dorés qui ne noircissent pas").replace(/'/g, "\u2019");
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
    else toast(`Votre coffret contient déjà ${box.n} pièces`);
    rerender();
  }
  else if (d.boxadd !== undefined) {
    if (box.items.length !== box.n) return;
    addLine({ key: "box-" + box.items.join("-"), id: "box", lot: true, nom: `Coffret ${box.n} pièces`, opt: box.items.map(x => P[x].nom).join(", "), prix: CONFIG.box[box.n], q: 1, ill: ill("box") });
    box.items = []; rerender(); openCart();
  }
  else if (d.q !== undefined) { const l = cart[+d.q]; l.q += +d.d; if (l.q <= 0) cart.splice(+d.q, 1); saveCart(); renderCart(); }
  else if (d.vue !== undefined) { sel[pid()].v = +d.vue; rerender(); }
  else if (d.search !== undefined) { e.preventDefault(); openSearch(); }
  else if (d.closesearch !== undefined) $("#search").hidden = true;
  else if (d.etapego) { e.preventDefault(); cmd.etape = +d.etapego; saveCmd(); rerender(); }
  else if (d.cookie) {
    e.preventDefault();
    if (d.cookie === "reset") { try { localStorage.removeItem("vaure-cookies"); } catch (err) {} cookies(); return; }
    store("vaure-cookies", d.cookie); document.querySelector(".cookies")?.remove();
  }
});
document.addEventListener("change", e => { if (e.target.matches("[data-tri]")) { tri = e.target.value; rerender(); } });
document.addEventListener("input", e => { if (e.target.id === "q") renderSearch(); });
$("#menuBg").addEventListener("click", closeDrawers);
$("#cartBg").addEventListener("click", closeDrawers);
document.addEventListener("keydown", e => { if (e.key === "Escape") { closeDrawers(); $("#search").hidden = true; } });
document.addEventListener("submit", e => {
  const f = e.target; e.preventDefault();
  if (f.dataset.news !== undefined) { toast("Merci, votre attention de bienvenue arrive par e-mail."); f.reset(); }
  else if (f.dataset.etape) {
    const fd = Object.fromEntries(new FormData(f));
    if (f.dataset.etape === "1") { cmd.info = { ...cmd.info, ...fd }; cmd.etape = 2; }
    else if (f.dataset.etape === "2") { cmd.cadeau = fd.cadeau || ""; cmd.etape = 3; }
    else {
      const num = "VA-" + String(Date.now()).slice(-6);
      store("vaure-derniere", { num, prenom: cmd.info.prenom, email: cmd.info.email, cadeau: cmd.cadeau, date: new Date().toISOString() });
      cart = []; saveCart(); cmd = { etape: 1, info: cmd.info, livraison: "suivie", cadeau: "" }; saveCmd();
      location.hash = "#/merci"; return;
    }
    saveCmd(); route();
  }
  else if (f.dataset.login !== undefined || f.dataset.signup !== undefined) toast("Démo : sur la boutique, ce sont les comptes clients Shopify.");
  else if (f.dataset.contact !== undefined) { toast("Message envoyé (démo). Réponse sous 24 h ouvrées."); f.reset(); }
  else if (f.dataset.suivi !== undefined) toast("Démo : le suivi s'affichera ici sur la vraie boutique.");
  else if (f.dataset.code !== undefined) {
    const v = f.querySelector("input").value.trim().toUpperCase(), p = promoActive();
    const ok = v === CONFIG.bienvenue.code || (p && v === p.code);
    store("vaure-code", ok ? v : null); toast(ok ? "Code appliqué" : "Ce code n'est pas valable");
    rerender();
  }
});

$("#footTrust").innerHTML = GARANTIES.map(([, t, s]) => `<div><b>${t}</b><span class="muted">${s}</span></div>`).join("");
$("#year").textContent = new Date().getFullYear();
announce(); renderCount(); cookies(); typo(document.querySelector("footer.site")); typo($("#announce"));
addEventListener("hashchange", route);
route();
