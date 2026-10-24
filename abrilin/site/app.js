/* Abrilin — site de démonstration (aucun paiement réel).
   Tout ce qui change selon le fournisseur ou la date est dans CONFIG. */

const CONFIG = {
  livraisonOfferteDes: 49,          // € ; en dessous, frais ci-dessous
  fraisLivraison: 5.9,
  delai: { prepa: [1, 2], transport: [5, 8] }, // jours ouvrés — à caler sur l'entrepôt CJ réel
  noelLimite: "2026-12-12",         // dernière date de commande pour être livré avant Noël (délai réel + 3 jours de marge)
  promo: {                           // affichée SEULEMENT entre debut et fin : vraie date de fin, pas de faux compte à rebours
    debut: "2026-11-23T00:00:00", fin: "2026-11-30T23:59:59",
    code: "BLACKFRIDAY", taux: 0.15, texte: "−15 % sur tous les packs fenêtre"
  },
  bienvenue: { code: "BIENVENUE10", taux: 0.10 },
  email: "contact@abrilin.com"
};

/* ---------- saisons : l'urgence vient de la vraie saison ---------- */
function saison(d = new Date()) {
  const m = d.getMonth() + 1;
  if (m >= 10 || m <= 2) return "hiver";
  if (m <= 4) return "lumiere";
  return "chaleur";
}
const SAISON = {
  hiver: {
    titre: "Le froid passe par vos fenêtres. Plus chez vous.",
    sous: "Un rideau thermique en trois couches, aspect lin, qui garde la chaleur dans la pièce et le froid dehors. Posé en deux minutes, sans travaux.",
    bandeau: "L'hiver commence : réglez le froid avant le pic de janvier",
    pains: [
      ["Le froid près de la fenêtre", "Le canapé ou le lit près de la vitre est glacé dès 18 h, même chauffage allumé."],
      ["La facture qui grimpe", "La chaleur part par les vitres : on monte le thermostat, et la facture avec."],
      ["Les courants d'air", "Les vieilles fenêtres laissent passer l'air froid ; changer les vitrages coûte des milliers d'euros."]
    ],
    complement: "boudin"
  },
  lumiere: {
    titre: "Le soleil se lève à 6 h. Vous, non.",
    sous: "Un rideau occultant aspect lin qui fait la nuit dans la chambre, même au printemps. Le sommeil ne s'arrête plus au lever du jour.",
    bandeau: "Les jours rallongent : retrouvez des nuits noires",
    pains: [
      ["Réveillé par le jour", "Dès avril, la lumière entre avant 6 h et coupe la fin de nuit."],
      ["Les enfants debout trop tôt", "Une chambre claire, et toute la maison est réveillée."],
      ["La sieste impossible", "Travail de nuit, sieste, migraine : impossible de faire le noir."]
    ],
    complement: "embrasses"
  },
  chaleur: {
    titre: "Gardez la chambre au frais, sans clim.",
    sous: "Fermé dans la journée, notre rideau thermique arrête une bonne partie de la chaleur du soleil sur la vitre. Le soir, la chambre reste vivable.",
    bandeau: "Canicule : protégez vos pièces de la chaleur",
    pains: [
      ["La chambre à 30 °C", "Le soleil tape sur la vitre toute la journée ; le soir, impossible de dormir."],
      ["Pas de clim", "Location, budget, bruit : la clim n'est pas une option pour tout le monde."],
      ["Fenêtre ouverte, moustiques", "On ouvre la nuit pour avoir de l'air, et les moustiques entrent."]
    ],
    complement: "moustiquaire"
  }
};

/* ---------- catalogue ---------- */
const COLORIS = [
  { id: "lin", nom: "Lin naturel", hex: "#D8CCB6" },
  { id: "sable", nom: "Sable", hex: "#C3AE8F" },
  { id: "perle", nom: "Gris perle", hex: "#B8B5AE" },
  { id: "olive", nom: "Olive", hex: "#7B7D62" },
  { id: "nuit", nom: "Bleu nuit", hex: "#34405A" }
];
const TAILLES = [
  { id: "140x180", nom: "140 × 180 cm", note: "Petite fenêtre", prix: 39.9 },
  { id: "140x220", nom: "140 × 220 cm", note: "Fenêtre standard", prix: 42.9 },
  { id: "140x240", nom: "140 × 240 cm", note: "Porte-fenêtre", prix: 44.9 },
  { id: "140x260", nom: "140 × 260 cm", note: "Grande hauteur", prix: 47.9 }
];
const PACKS = [
  { id: "1", nom: "1 rideau", note: "Pour une petite fenêtre", n: 1, remise: 0 },
  { id: "2", nom: "La paire", note: "Le plus choisi : une fenêtre complète", n: 2, remise: 9.9 },
  { id: "4", nom: "2 paires", note: "Deux fenêtres, ou salon + chambre", n: 4, remise: 29.7 }
];
const prixPack = (taille, pack) => +(taille.prix * pack.n - pack.remise).toFixed(2);

const P = {
  "rideau-thermique": {
    nom: "Rideau thermique occultant aspect lin",
    court: "Rideau thermique",
    tag: "Produit phare",
    desc: "Trois couches : une face aspect lin, une couche isolante, une doublure occultante. Il garde la chaleur l'hiver, arrête le soleil l'été et fait le noir toute l'année."
  },
  boudin: {
    nom: "Boudin de porte aspect lin", court: "Boudin de porte", prix: 24.9,
    desc: "Arrête le courant d'air froid sous la porte. 90 cm, aspect lin : posez-le au pied de la porte, c'est fait.", saison: "hiver"
  },
  embrasses: {
    nom: "Embrasses en lin, lot de 2", court: "Embrasses, lot de 2", prix: 12.9,
    desc: "Pour ouvrir le rideau proprement dans la journée et laisser entrer la lumière."
  },
  tringle: {
    nom: "Tringle extensible noire mat", court: "Tringle extensible", prix: 29.9,
    desc: "De 160 à 300 cm, avec supports et vis. Pour une fenêtre sans tringle."
  },
  moustiquaire: {
    nom: "Moustiquaire de fenêtre aimantée", court: "Moustiquaire aimantée", prix: 24.9,
    desc: "Fenêtre ouverte la nuit sans moustiques. Se pose avec des bandes adhésives, sans perçage.", saison: "chaleur"
  }
};

const LOTS = [
  { id: "fenetre", nom: "Pack fenêtre complète", pour: "Vous partez de zéro",
    items: [["rideau-thermique", "2"], ["tringle"], ["embrasses"]], prix: 109.9 },
  { id: "hiver", nom: "Pack hiver sans courant d'air", pour: "Froid par la fenêtre et sous la porte", saison: "hiver",
    items: [["rideau-thermique", "2"], ["boudin"], ["boudin"]], prix: 114.9 },
  { id: "chambre", nom: "Pack chambre noire", pour: "Dormir sans être réveillé par le jour",
    items: [["rideau-thermique", "4"], ["embrasses"], ["embrasses"]], prix: 164.9 },
  { id: "ete", nom: "Pack été au frais", pour: "Chaleur le jour, moustiques la nuit", saison: "chaleur",
    items: [["rideau-thermique", "2"], ["moustiquaire"]], prix: 99.9 }
];
const TAILLE_LOT = TAILLES[2]; // les packs sont calculés en 140 × 240 ; la taille se choisit ensuite
function prixSepares(lot) {
  return lot.items.reduce((s, [id, pack]) =>
    s + (id === "rideau-thermique" ? TAILLE_LOT.prix * PACKS.find(p => p.id === pack).n : P[id].prix), 0);
}

/* ---------- illustrations (à remplacer par les vraies photos des échantillons) ---------- */
function ill(type, hex = "#D8CCB6", opts = {}) {
  const sky = opts.nuit ? "#2A3346" : opts.soleil ? "#F2D9A6" : "#CFDCE6";
  const wall = "#EFE9DF";
  if (type === "fenetre") {
    const open = opts.ouvert;
    const w = open ? 70 : 150;
    return `<svg viewBox="0 0 400 500" role="img" aria-label="Fenêtre avec rideau ${open ? "ouvert" : "fermé"}" preserveAspectRatio="xMidYMid slice">
      <rect width="400" height="500" fill="${wall}"/>
      <rect x="90" y="70" width="220" height="300" fill="${sky}"/>
      ${opts.soleil ? `<circle cx="250" cy="140" r="34" fill="#F7C873"/>` : ""}
      ${opts.nuit ? `<circle cx="250" cy="130" r="16" fill="#E8E3D2"/><circle cx="150" cy="110" r="2" fill="#fff"/><circle cx="190" cy="170" r="1.5" fill="#fff"/>` : ""}
      <path d="M200 70v300M90 220h220" stroke="#fff" stroke-width="6"/>
      <rect x="84" y="64" width="232" height="312" fill="none" stroke="#fff" stroke-width="10"/>
      <rect x="40" y="40" width="320" height="6" rx="3" fill="#2A2724"/>
      ${curtain(40, w, hex)}${curtain(360 - w, w, hex, true)}
      <rect x="0" y="440" width="400" height="60" fill="#E2D8C8"/>
    </svg>`;
  }
  if (type === "couches") {
    return `<svg viewBox="0 0 400 400" role="img" aria-label="Les trois couches du rideau">
      <rect width="400" height="400" fill="${wall}"/>
      <g transform="translate(60 60)">
        <path d="M0 40 L180 0 L180 260 L0 300Z" fill="${hex}"/>
        <path d="M40 50 L220 10 L220 270 L40 310Z" fill="#E9E4DA" stroke="#CFC6B6"/>
        <path d="M80 60 L260 20 L260 280 L80 320Z" fill="#3B3F46"/>
      </g>
      <g font-family="DM Sans,sans-serif" font-size="14" fill="#1F1D1A">
        <text x="20" y="380">① aspect lin</text><text x="150" y="380">② isolant</text><text x="265" y="380">③ occultant</text>
      </g>
    </svg>`;
  }
  if (type === "tissu") {
    let lines = "";
    for (let i = 0; i < 400; i += 6) lines += `<path d="M${i} 0v400" stroke="rgba(0,0,0,.05)"/><path d="M0 ${i}h400" stroke="rgba(255,255,255,.08)"/>`;
    return `<svg viewBox="0 0 400 400" role="img" aria-label="Détail du tissu"><rect width="400" height="400" fill="${hex}"/>${lines}</svg>`;
  }
  if (type === "dim") {
    return `<svg viewBox="0 0 400 400" role="img" aria-label="Dimensions"><rect width="400" height="400" fill="${wall}"/>
      <rect x="120" y="60" width="160" height="280" fill="${hex}"/>
      ${[0,1,2,3,4,5,6,7].map(i => `<circle cx="${130 + i * 20}" cy="72" r="5" fill="none" stroke="#2A2724" stroke-width="2"/>`).join("")}
      <path d="M100 60v280M95 60h10M95 340h10M120 360h160M120 355v10M280 355v10" stroke="#1F1D1A"/>
      <text x="60" y="205" font-family="DM Sans" font-size="14">hauteur</text><text x="170" y="385" font-family="DM Sans" font-size="14">140 cm</text>
      <text x="292" y="80" font-family="DM Sans" font-size="12">8 œillets</text></svg>`;
  }
  // petits objets
  const shapes = {
    boudin: `<rect x="60" y="170" width="280" height="60" rx="30" fill="${hex}"/>`,
    embrasses: `<path d="M120 120c60 40 100 40 160 0M120 280c60-40 100-40 160 0" stroke="${hex}" stroke-width="16" fill="none" stroke-linecap="round"/>`,
    tringle: `<rect x="40" y="190" width="320" height="10" rx="5" fill="#2A2724"/><circle cx="40" cy="195" r="12" fill="#2A2724"/><circle cx="360" cy="195" r="12" fill="#2A2724"/>`,
    moustiquaire: `<rect x="110" y="70" width="180" height="260" fill="none" stroke="#2A2724" stroke-width="6"/><path d="M200 70v260" stroke="#2A2724" stroke-width="3"/>${Array.from({length:12},(_,i)=>`<path d="M110 ${90+i*20}h180" stroke="#9A958C" stroke-width=".8"/>`).join("")}`
  };
  return `<svg viewBox="0 0 400 400" role="img" aria-label="${P[type]?.court || ""}"><rect width="400" height="400" fill="${wall}"/>${shapes[type] || ""}</svg>`;
}
function curtain(x, w, hex, right) {
  const folds = Math.max(3, Math.round(w / 22));
  let s = `<rect x="${x}" y="46" width="${w}" height="400" fill="${hex}"/>`;
  for (let i = 1; i < folds; i++) {
    const fx = x + (w / folds) * i;
    s += `<path d="M${fx} 46v400" stroke="rgba(0,0,0,.09)" stroke-width="${right ? 3 : 4}"/>`;
  }
  return s;
}
const cplIll = id => ill(id, id === "boudin" || id === "embrasses" ? "#C3AE8F" : undefined);

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
function promoActive(now = new Date()) {
  const p = CONFIG.promo; return now >= new Date(p.debut) && now <= new Date(p.fin) ? p : null;
}
function noelActif(now = new Date()) {
  const lim = new Date(CONFIG.noelLimite + "T23:59:59");
  return now.getMonth() >= 10 && now <= lim ? lim : null;
}

/* ---------- panier ---------- */
let cart = store("abrilin-cart") || [];
const saveCart = () => { store("abrilin-cart", cart); renderCount(); };
function addLine(line) {
  const same = cart.find(l => l.key === line.key);
  if (same) same.q += line.q; else cart.push(line);
  saveCart(); openCart();
}
const sousTotal = () => cart.reduce((s, l) => s + l.prix * l.q, 0);
function renderCount() {
  const n = cart.reduce((s, l) => s + l.q, 0), c = $("#count");
  c.textContent = n; c.hidden = !n;
}
function openCart() { renderCart(); $("#cart").hidden = $("#cartBg").hidden = false; document.body.style.overflow = "hidden"; }
function closeDrawers() { ["#cart", "#cartBg", "#menuM", "#menuBg"].forEach(s => $(s).hidden = true); document.body.style.overflow = ""; }
function renderCart() {
  const body = $("#cartBody");
  if (!cart.length) {
    body.innerHTML = `<p class="muted">Votre panier est vide.</p><a class="btn" href="#/produit/rideau-thermique" data-closecart>Voir les rideaux thermiques</a>`;
    $("#cart .cart-ft")?.remove(); return;
  }
  const st = sousTotal(), reste = CONFIG.livraisonOfferteDes - st;
  const pct = Math.min(100, (st / CONFIG.livraisonOfferteDes) * 100);
  const sug = suggestion();
  body.innerHTML = `
    <div class="ship-bar">${reste > 0 ? `Plus que <b>${eur(reste)}</b> pour la livraison suivie offerte` : `<b>Livraison suivie offerte</b> ✓`}<div class="bar"><i style="width:${pct}%"></i></div></div>
    ${cart.map((l, i) => `<div class="line">
      <div class="th">${l.ill}</div>
      <div><p>${esc(l.nom)}</p><small>${esc(l.opt || "")}</small>
        <div class="qty"><button data-q="${i}" data-d="-1" aria-label="Retirer un">−</button><span style="padding:3px 8px">${l.q}</span><button data-q="${i}" data-d="1" aria-label="Ajouter un">+</button></div></div>
      <b>${eur(l.prix * l.q)}</b></div>`).join("")}
    ${sug ? `<div class="upsell"><div class="th">${cplIll(sug)}</div><div><b>${P[sug].court}</b><br><span class="muted">${esc(P[sug].desc.split(".")[0])}.</span></div><button data-add="${sug}">+ ${eur(P[sug].prix)}</button></div>` : ""}`;
  let ft = $("#cart .cart-ft");
  if (!ft) { ft = document.createElement("div"); ft.className = "cart-ft"; $("#cart").appendChild(ft); }
  ft.innerHTML = `<div class="tot"><span>Sous-total</span><span>${eur(st)}</span></div>
    <p class="small muted">${reste > 0 ? `Livraison suivie : ${eur(CONFIG.fraisLivraison)}` : "Livraison suivie offerte"} · Paiement en 3 fois sans frais dès 50 €</p>
    <a class="btn block" href="#/commande" data-closecart>Commander</a>
    <p class="small muted center">🔒 Paiement sécurisé · Retours 30 jours</p>`;
}
function suggestion() {
  const s = SAISON[saison()].complement;
  const dans = new Set(cart.map(l => l.id));
  return [s, "embrasses", "tringle"].find(id => !dans.has(id) && P[id]) || null;
}
function addSimple(id) {
  addLine({ key: id, id, nom: P[id].nom, prix: P[id].prix, q: 1, ill: cplIll(id) });
  toast(`${P[id].court} ajouté au panier`);
}

/* ---------- blocs communs ---------- */
const ICON = {
  truck: `<svg viewBox="0 0 24 24"><path d="M3 6h11v10H3zM14 9h4l3 3v4h-7"/><circle cx="7" cy="17.5" r="1.8"/><circle cx="17" cy="17.5" r="1.8"/></svg>`,
  back: `<svg viewBox="0 0 24 24"><path d="M9 14L4 9l5-5"/><path d="M4 9h10a6 6 0 0 1 0 12h-3"/></svg>`,
  card: `<svg viewBox="0 0 24 24"><rect x="3" y="5" width="18" height="14" rx="2"/><path d="M3 10h18M7 15h4"/></svg>`,
  chat: `<svg viewBox="0 0 24 24"><path d="M4 5h16v11H9l-5 4z"/></svg>`,
  lock: `<svg viewBox="0 0 24 24"><rect x="5" y="11" width="14" height="9" rx="2"/><path d="M8 11V8a4 4 0 0 1 8 0v3"/></svg>`
};
const GARANTIES = [
  ["truck", "Livraison suivie", `Offerte dès ${CONFIG.livraisonOfferteDes} €, numéro de suivi par e-mail`],
  ["back", "Retours 30 jours", "Le rideau ne convient pas ? On vous rembourse"],
  ["card", "Paiement en 3 fois", "Sans frais, par carte, PayPal ou Apple Pay"],
  ["chat", "Réponse sous 24 h", "Une vraie personne répond à vos questions"]
];
const trustbar = () => `<div class="trustbar"><div class="wrap">${GARANTIES.map(([i, t, s]) => `<div>${ICON[i]}<span><b>${t}</b>${s}</span></div>`).join("")}</div></div>`;

function announce() {
  const p = promoActive(), noel = noelActif(), s = SAISON[saison()];
  let msg;
  if (p) {
    const fin = new Date(p.fin);
    msg = `<b>Black Friday</b> : ${p.texte} avec le code <b>${p.code}</b>, jusqu'au ${fin.toLocaleDateString("fr-FR", { weekday: "long", day: "numeric", month: "long" })} minuit`;
  } else if (noel) {
    msg = `<b>Noël</b> : commandez avant le ${noel.toLocaleDateString("fr-FR", { day: "numeric", month: "long" })} pour être livré à temps`;
  } else {
    msg = `${s.bandeau} · Livraison suivie offerte dès ${CONFIG.livraisonOfferteDes} € · Retours 30 jours`;
  }
  $("#announce").innerHTML = msg;
}

/* ---------- pages ---------- */
function viewHome() {
  const s = SAISON[saison()], sz = saison();
  const heroOpts = sz === "hiver" ? { nuit: true } : sz === "chaleur" ? { soleil: true } : { soleil: true };
  const lots = LOTS.filter(l => !l.saison || l.saison === sz).slice(0, 3);
  return `
  <div class="wrap hero">
    <div>
      <p class="eyebrow">Rideaux thermiques et occultants · aspect lin</p>
      <h1>${s.titre}</h1>
      <p class="lead">${s.sous}</p>
      <div class="ctas"><a class="btn" href="#/produit/rideau-thermique">Choisir mon rideau</a><a class="btn ghost" href="#/tailles">Quelle taille ?</a></div>
      <div class="mini-trust"><span>Pose en 2 minutes</span><span>Sans perçage si vous avez une tringle</span><span>Retours 30 jours</span></div>
    </div>
    <div class="hero-ill">${ill("fenetre", COLORIS[0].hex, heroOpts)}</div>
  </div>
  ${trustbar()}

  <section><div class="wrap">
    <p class="eyebrow center">Le problème</p>
    <h2 class="center">Vous reconnaissez-vous ?</h2>
    <div class="pains">${s.pains.map(([t, d], i) => `<div class="pain"><div class="n">0${i + 1}</div><h3>${t}</h3><p class="muted">${d}</p></div>`).join("")}</div>
  </div></section>

  <section class="alt"><div class="wrap layers">
    <div>${ill("couches", COLORIS[0].hex)}</div>
    <div>
      <p class="eyebrow">La solution</p>
      <h2>Un rideau, trois couches.</h2>
      <p class="lead">Un rideau classique est un simple tissu. Le nôtre est un vrai écran entre la vitre et la pièce.</p>
      <ol>
        <li><i style="background:#B9A88A">1</i><div><b>Face aspect lin</b><br><span class="muted">Le côté que vous voyez : mat, texturé, dans 5 coloris doux.</span></div></li>
        <li><i style="background:#8E8676">2</i><div><b>Couche isolante</b><br><span class="muted">Freine le passage du froid l'hiver et de la chaleur l'été.</span></div></li>
        <li><i style="background:var(--night)">3</i><div><b>Doublure occultante</b><br><span class="muted">Arrête la lumière : la chambre reste noire au lever du jour.</span></div></li>
      </ol>
    </div>
  </div></section>

  <section><div class="wrap center">
    <p class="eyebrow">Avant / après</p>
    <h2>La même fenêtre, le même soir.</h2>
    <div class="ba">
      <figure>${ill("fenetre", "#EDEBE6", { nuit: true, ouvert: true })}<figcaption><b>Voilage classique</b>La vitre froide rayonne dans la pièce. <span class="todo">Photo réelle à faire avec l'échantillon</span></figcaption></figure>
      <figure>${ill("fenetre", COLORIS[1].hex, { nuit: true })}<figcaption><b>Rideau thermique Abrilin</b>La vitre est couverte, la chaleur reste dans la pièce. <span class="todo">Photo réelle à faire avec l'échantillon</span></figcaption></figure>
    </div>
  </div></section>

  <section class="alt"><div class="wrap">
    <p class="eyebrow center">Comparer</p>
    <h2 class="center">Pourquoi pas autre chose ?</h2>
    <div class="tbl-scroll"><table class="cmp">
      <thead><tr><th></th><th class="us">Rideau thermique Abrilin</th><th>Rideau classique</th><th>Nouvelles fenêtres</th></tr></thead>
      <tbody>
        <tr><td>Froid de la vitre</td><td class="us">Freiné par la couche isolante</td><td>Passe à travers le tissu</td><td>Très bien isolé</td></tr>
        <tr><td>Lumière du matin</td><td class="us">Bloquée (doublure occultante)</td><td>Passe en partie</td><td>Ne change rien</td></tr>
        <tr><td>Chaleur l'été</td><td class="us">Freinée, rideau fermé le jour</td><td>Peu d'effet</td><td>Selon le vitrage</td></tr>
        <tr><td>Prix</td><td class="us">À partir de ${eur(TAILLES[0].prix)}</td><td>20 à 40 €</td><td>Plusieurs milliers d'euros</td></tr>
        <tr><td>Pose</td><td class="us">2 minutes, sur votre tringle</td><td>2 minutes</td><td>Artisan, travaux</td></tr>
        <tr><td>En location</td><td class="us">Oui, on l'emporte en partant</td><td>Oui</td><td>Non</td></tr>
      </tbody>
    </table></div>
    <p class="small muted center" style="margin-top:12px">Un rideau ne remplace pas une bonne isolation : il réduit les pertes par la vitre, surtout le soir et la nuit.</p>
  </div></section>

  <section><div class="wrap">
    <p class="eyebrow center">Packs fenêtre</p>
    <h2 class="center">Tout ce qu'il faut, en une fois.</h2>
    <div class="cards">${lots.map(cardLot).join("")}</div>
    <p class="center" style="margin-top:28px"><a class="link" href="#/lots">Voir tous les packs</a></p>
  </div></section>

  <section class="alt"><div class="wrap center">
    <p class="eyebrow">Avis clients</p>
    <h2>Vos avis, vérifiés.</h2>
    <div class="reviews-empty">
      <p>Nous publions uniquement les avis de vrais clients, recueillis après livraison par un service d'avis vérifiés. Les premiers arrivent avec les premières commandes.</p>
      <p class="small muted" style="margin-top:10px">Pas de faux avis, pas de note inventée. C'est aussi pour ça que vous pouvez nous faire confiance.</p>
    </div>
  </div></section>

  <section><div class="wrap">
    <p class="eyebrow center">Questions fréquentes</p>
    <h2 class="center">Avant de commander</h2>
    <div class="faq">${FAQ.slice(0, 5).map(faqItem).join("")}</div>
    <p class="center" style="margin-top:20px"><a class="link" href="#/page/faq">Toutes les questions</a></p>
  </div></section>

  <section style="padding-top:0"><div class="wrap">
    <div class="news">
      <h2>−10 % sur votre première commande</h2>
      <p class="lead" style="margin:12px auto 0">Recevez le code et nos conseils pour garder la maison au chaud (ou au frais). Un e-mail par mois, pas plus.</p>
      <form data-news><label for="nl" style="position:absolute;left:-9999px">E-mail</label><input id="nl" type="email" required placeholder="Votre e-mail"><button class="btn">Recevoir le code</button></form>
    </div>
  </div></section>`;
}

function cardLot(l) {
  const sep = prixSepares(l), eco = sep - l.prix;
  return `<a class="card" href="#/lots" data-lot="${l.id}">
    <div class="pic">${ill("fenetre", COLORIS[l.id === "chambre" ? 4 : l.id === "ete" ? 0 : 1].hex, { nuit: l.id !== "ete", soleil: l.id === "ete" })}<span class="tag">${esc(l.pour)}</span></div>
    <div class="in"><h3>${l.nom}</h3><p class="muted small">${l.items.map(([id, pk]) => id === "rideau-thermique" ? PACKS.find(p => p.id === pk).nom.replace("La paire", "1 paire de rideaux").replace("2 paires", "2 paires de rideaux") : P[id].court).join(" + ")}</p>
    <p class="price">${eur(l.prix)}<s>${eur(sep)}</s></p><span class="save">Vous économisez ${eur(eco)}</span></div></a>`;
}

/* fiche produit */
let sel = store("abrilin-sel") || { c: "lin", t: "140x240", p: "2" };
function viewProduit() {
  const pr = P["rideau-thermique"];
  const c = COLORIS.find(x => x.id === sel.c), t = TAILLES.find(x => x.id === sel.t), pk = PACKS.find(x => x.id === sel.p);
  const prix = prixPack(t, pk), sep = t.prix * pk.n;
  const [d1, d2] = fenetreLivraison(), noel = noelActif(), sz = saison();
  const heroOpts = sz === "chaleur" ? { soleil: true } : { nuit: true };
  const vues = [["fenetre", heroOpts], ["fenetre", { ...heroOpts, ouvert: true }], ["couches", {}], ["tissu", {}], ["dim", {}]];
  const vue = sel.v || 0;
  return `
  <div class="wrap"><p class="crumbs"><a href="#/">Accueil</a> / Rideaux thermiques</p></div>
  <div class="wrap pdp">
    <div class="gallery">
      <div class="main-pic">${ill(vues[vue][0], c.hex, vues[vue][1])}</div>
      <div class="thumbs">${vues.slice(0, 4).map((v, i) => `<button class="${i === vue ? "on" : ""}" data-vue="${i}" aria-label="Vue ${i + 1}">${ill(v[0], c.hex, v[1])}</button>`).join("")}</div>
      <p class="todo">Illustrations provisoires : à remplacer par les photos des échantillons (fenêtre réelle, lumière naturelle).</p>
    </div>
    <div class="buy">
      <p class="eyebrow">${pr.tag}</p>
      <h1>${pr.nom}</h1>
      <p class="stars-note">Avis vérifiés affichés dès les premières livraisons</p>
      <div class="price">${eur(prix)}${pk.remise ? `<small><s>${eur(sep)}</s> · vous économisez ${eur(pk.remise)}</small>` : ""}</div>
      <p class="small muted">ou 3 × ${eur(prix / 3)} sans frais</p>
      <ul class="benefits">
        ${sz === "chaleur" ? `<li>Garde la pièce plus fraîche, fermé pendant la journée</li><li>Fait le noir complet pour dormir</li><li>Freine aussi le froid l'hiver : il sert toute l'année</li>`
          : sz === "lumiere" ? `<li>Fait le noir complet, même au lever du soleil</li><li>Freine la chaleur l'été et le froid l'hiver</li><li>Aspect lin, mat et doux, pas « plastique »</li>`
          : `<li>Freine le froid de la vitre : la pièce reste chaude plus longtemps</li><li>Fait le noir complet pour dormir</li><li>L'été, il garde la chaleur dehors : il sert toute l'année</li>`}
        <li>Pose en 2 minutes : 8 œillets, sur toutes les tringles jusqu'à 4 cm</li>
      </ul>

      <div class="opt"><div class="opt-h"><span>Coloris : <b>${c.nom}</b></span></div>
        <div class="swatches">${COLORIS.map(x => `<button style="background:${x.hex}" class="${x.id === c.id ? "on" : ""}" data-c="${x.id}" aria-label="${x.nom}" title="${x.nom}"></button>`).join("")}</div></div>

      <div class="opt"><div class="opt-h"><span>Taille (largeur × hauteur) : <b>${t.nom}</b></span><a class="link small" href="#/tailles">Quelle taille choisir ?</a></div>
        <div class="pills">${TAILLES.map(x => `<button class="${x.id === t.id ? "on" : ""}" data-t="${x.id}">${x.nom}<small>${x.note}</small></button>`).join("")}</div></div>

      <div class="opt"><div class="opt-h"><span>Quantité</span></div>
        <div class="packs">${PACKS.map(x => `<button class="${x.id === pk.id ? "on" : ""}" data-p="${x.id}"><i></i><span><b>${x.nom}</b>${x.remise ? `<span class="badge">−${eur(x.remise)}</span>` : ""}<small>${x.note}</small></span><b>${eur(prixPack(t, x))}</b></button>`).join("")}</div></div>

      <button class="btn block" data-buy>Ajouter au panier · ${eur(prix)}</button>

      <div class="deliv">📦 Commandé aujourd'hui, livré entre le <b>${fmtJour(d1)}</b> et le <b>${fmtJour(d2)}</b>, avec suivi.</div>
      ${noel ? `<div class="urgent">🎄 Pour être livré avant Noël, commandez avant le <b>${noel.toLocaleDateString("fr-FR", { day: "numeric", month: "long" })}</b>.</div>` : ""}

      <div class="guar">${GARANTIES.map(([i, tt, s]) => `<div>${ICON[i]}<span><b>${tt}</b><br><span class="muted">${s}</span></span></div>`).join("")}</div>

      <div class="acc">
        <details open><summary>Pourquoi il marche</summary><div>${pr.desc} Fermez-le en fin de journée l'hiver, et pendant les heures chaudes l'été.</div></details>
        <details><summary>Caractéristiques</summary><div><table>
          <tr><td>Composition</td><td>100 % polyester, aspect lin, 3 couches <span class="ph">[à vérifier sur la fiche CJ]</span></td></tr>
          <tr><td>Fixation</td><td>8 œillets métal noir mat, Ø 4 cm</td></tr>
          <tr><td>Largeur</td><td>140 cm par rideau ; une paire couvre une fenêtre jusqu'à 140 cm de large</td></tr>
          <tr><td>Entretien</td><td>Lavage 30 °C, cycle délicat, pas de sèche-linge <span class="ph">[à vérifier]</span></td></tr>
          <tr><td>Origine</td><td>Fabriqué par notre fournisseur partenaire, contrôlé avant expédition</td></tr>
        </table></div></details>
        <details><summary>Livraison et retours</summary><div>Livraison suivie offerte dès ${CONFIG.livraisonOfferteDes} €. Préparation en ${CONFIG.delai.prepa.join(" à ")} jours ouvrés, puis ${CONFIG.delai.transport.join(" à ")} jours ouvrés de transport. Vous avez 30 jours pour nous renvoyer un rideau non utilisé : <a class="link" href="#/page/retours">conditions</a>.</div></details>
        <details><summary>Une question ?</summary><div>Écrivez-nous à <a class="link" href="mailto:${CONFIG.email}">${CONFIG.email}</a> ou via la <a class="link" href="#/page/contact">page contact</a>. Réponse sous 24 h ouvrées, avec une photo de votre fenêtre si vous hésitez sur la taille.</div></details>
      </div>
    </div>
  </div>

  <section class="alt"><div class="wrap">
    <h2 class="center">Complétez votre fenêtre</h2>
    <div class="cards">${["tringle", "embrasses", SAISON[sz].complement].filter((v, i, a) => a.indexOf(v) === i).map(id => `
      <div class="card"><div class="pic">${cplIll(id)}</div><div class="in"><h3>${P[id].court}</h3><p class="muted small">${P[id].desc}</p><p class="price">${eur(P[id].prix)}</p><button class="btn ghost" data-add="${id}">Ajouter</button></div></div>`).join("")}</div>
  </div></section>

  <div class="sticky-buy" id="stickyBuy"><div><b>${eur(prix)}</b><br><small class="muted">${pk.nom} · ${t.nom}</small></div><button class="btn" data-buy>Ajouter au panier</button></div>`;
}

function viewLots() {
  const sz = saison();
  const tri = [...LOTS].sort((a, b) => (b.saison === sz) - (a.saison === sz));
  return `<section><div class="wrap">
    <p class="eyebrow center">Packs fenêtre</p>
    <h1 class="center">Tout ce qu'il faut, en une fois.</h1>
    <p class="lead center" style="margin-top:14px">Les packs sont calculés pour des rideaux 140 × 240 cm. Choisissez coloris et taille juste après l'ajout, ou écrivez-nous.</p>
    <div class="cards">${tri.map(l => cardLot(l).replace('href="#/lots"', `href="#/lots" data-addlot="${l.id}"`)).join("")}</div>
    <p class="small muted center" style="margin-top:20px">Cliquez sur un pack pour l'ajouter au panier.</p>
  </div></section>`;
}

function viewTailles() {
  return `<section><div class="wrap">
    <p class="eyebrow center">Guide des tailles</p>
    <h1 class="center">Quelle taille pour ma fenêtre ?</h1>
    <p class="lead center" style="margin-top:14px">Mesurez la largeur de la fenêtre (cadre compris) et la hauteur entre la tringle et le sol ou l'appui.</p>
    <div class="calc">
      <label for="lw">Largeur de la fenêtre (cm)</label><input id="lw" type="number" inputmode="numeric" min="40" max="600" placeholder="ex. 120">
      <label for="lh">Hauteur tringle → sol ou appui (cm)</label><input id="lh" type="number" inputmode="numeric" min="100" max="300" placeholder="ex. 235">
      <div class="res" id="calcRes">Entrez vos mesures, on vous dit quoi commander.</div>
    </div>
    <div class="faq">
      ${faqItem(["Pourquoi une paire pour une seule fenêtre ?", "Pour bien isoler, le rideau doit dépasser de 10 à 15 cm de chaque côté de la vitre et être froncé. Une paire de 2 × 140 cm couvre une fenêtre jusqu'à environ 140 cm de large."])}
      ${faqItem(["Trop long, c'est grave ?", "Un rideau qui touche le sol isole mieux qu'un rideau trop court. Au-delà de 5 cm de trop, prenez la taille en dessous ou faites un ourlet thermocollant."])}
    </div>
  </div></section>`;
}
function calcTaille() {
  const w = +$("#lw").value, h = +$("#lh").value, out = $("#calcRes");
  if (!w || !h) { out.textContent = "Entrez vos mesures, on vous dit quoi commander."; return; }
  const largeurUtile = w + 30;
  const n = Math.max(1, Math.ceil(largeurUtile / 110)); // 140 cm froncé ≈ 110 cm couverts
  const t = TAILLES.find(x => +x.id.split("x")[1] >= h - 2) || TAILLES[TAILLES.length - 1];
  const paires = Math.ceil(n / 2);
  out.innerHTML = `Pour couvrir <b>${largeurUtile} cm</b> (fenêtre + 15 cm de chaque côté), il vous faut <b>${n} rideau${n > 1 ? "x" : ""}</b> en <b>${t.nom}</b>${n >= 2 ? ` : prenez <b>${paires} paire${paires > 1 ? "s" : ""}</b>` : ""}.
    ${+t.id.split("x")[1] < h - 2 ? `<br><span class="muted">Votre hauteur dépasse nos tailles : écrivez-nous, on cherche une solution avec vous.</span>` : ""}
    <br><br><a class="btn" href="#/produit/rideau-thermique" data-preset="${t.id}|${n >= 4 ? "4" : n >= 2 ? "2" : "1"}">Choisir ce rideau</a>`;
}

/* pages de contenu */
const FAQ = [
  ["Est-ce que ça réchauffe vraiment la pièce ?", "Le rideau ne chauffe pas : il freine les pertes par la vitre, qui est la partie la plus froide d'une pièce. L'effet se sent surtout le soir et la nuit, rideau fermé, près de la fenêtre. Il ne remplace pas une isolation du logement."],
  ["Et l'été ?", "Fermé pendant les heures chaudes, il arrête une bonne partie du soleil qui frappe la vitre, et la pièce chauffe moins. C'est le même rideau toute l'année."],
  ["Il fait vraiment le noir ?", "Oui, la doublure occultante bloque la lumière directe. Un peu de lumière peut passer sur les côtés et en haut si le rideau ne dépasse pas assez de la fenêtre : voyez le guide des tailles."],
  ["Comment je le pose ?", "Il a 8 œillets : glissez-le sur votre tringle (jusqu'à 4 cm de diamètre). Pas de tringle ? Ajoutez notre tringle extensible, livrée avec supports et vis."],
  ["Quand vais-je le recevoir ?", `Préparation en ${CONFIG.delai.prepa.join(" à ")} jours ouvrés, puis ${CONFIG.delai.transport.join(" à ")} jours ouvrés de transport. Vous recevez un numéro de suivi par e-mail dès l'expédition.`],
  ["D'où viennent vos rideaux ?", "Ils sont fabriqués par un fournisseur partenaire spécialisé et expédiés depuis son entrepôt. Nous avons testé les échantillons chez nous avant de les proposer. Nous ne les fabriquons pas nous-mêmes et ils ne sont pas fabriqués en France."],
  ["Et s'il ne me plaît pas ?", "Vous avez 30 jours après réception pour nous le renvoyer, non utilisé et dans son emballage. Nous vous remboursons dès réception."],
  ["Le paiement est-il sécurisé ?", "Oui. Le paiement passe par Shopify Payments ou PayPal ; nous ne voyons jamais votre numéro de carte. Paiement en 3 fois sans frais dès 50 €."]
];
const faqItem = ([q, a]) => `<details><summary>${q}</summary><p>${a}</p></details>`;

const PAGES = {
  histoire: ["Notre histoire", `
    <p>Abrilin est né d'un hiver dans un appartement aux fenêtres anciennes : un salon où l'on gardait le pull, une chambre réveillée par le jour à 6 h, puis, l'été, une chambre à 30 °C.</p>
    <p>Changer les fenêtres coûtait des milliers d'euros. Un bon rideau, épais et bien posé, a changé la pièce pour une fraction du prix. Nous avons cherché celui qui faisait les trois à la fois, sans avoir l'air d'une bâche : un rideau thermique et occultant, avec un vrai aspect lin.</p>
    <h2>Ce que nous promettons</h2>
    <ul><li>Un seul métier : protéger vos fenêtres du froid, de la chaleur et de la lumière.</li>
    <li>Des produits testés chez nous avant d'être en ligne, fabriqués par des fournisseurs partenaires.</li>
    <li>Des prix clairs : pas de fausse promotion, pas de faux compte à rebours, pas de faux avis.</li>
    <li>Une vraie personne qui répond sous 24 h ouvrées.</li></ul>
    <p class="ph">[Ajoutez votre prénom et une photo de vous ou de votre fenêtre : c'est ce qui crée la confiance.]</p>`],
  livraison: ["Livraison", `
    <p>Nous livrons en France métropolitaine <span class="ph">[et Belgique, Suisse… à décider]</span>.</p>
    <h2>Délais</h2><p>Préparation : ${CONFIG.delai.prepa.join(" à ")} jours ouvrés. Transport : ${CONFIG.delai.transport.join(" à ")} jours ouvrés. La date estimée s'affiche sur chaque fiche produit.</p>
    <h2>Frais</h2><p>Livraison suivie offerte dès ${CONFIG.livraisonOfferteDes} €, sinon ${eur(CONFIG.fraisLivraison)}.</p>
    <h2>Suivi</h2><p>Un numéro de suivi vous est envoyé par e-mail dès l'expédition. Vous pouvez aussi le retrouver sur la page <a class="link" href="#/page/suivi">Suivre ma commande</a>.</p>
    <h2>Colis abîmé</h2><p>Écrivez-nous sous 48 h avec une photo : nous renvoyons le produit ou nous vous remboursons.</p>`],
  retours: ["Retours et remboursements", `
    <p>Vous avez <b>30 jours</b> après réception pour changer d'avis (la loi impose 14 jours, nous en donnons 30).</p>
    <h2>Comment faire</h2><ol><li>Écrivez à ${CONFIG.email} avec votre numéro de commande.</li><li>Nous vous envoyons l'adresse de retour.</li><li>Renvoyez le produit non utilisé, dans son emballage.</li></ol>
    <h2>Remboursement</h2><p>Sous 14 jours après réception du retour, sur le moyen de paiement utilisé. Les frais de retour sont <span class="ph">[à votre charge / offerts — à décider]</span>.</p>
    <h2>Produit défectueux ou erreur</h2><p>Retour gratuit et remboursement ou échange, au choix.</p>`],
  faq: ["Questions fréquentes", `<div class="faq" style="margin-top:0">${FAQ.map(faqItem).join("")}</div>`],
  contact: ["Contact", `
    <p>Une question sur une taille, une commande ou un retour ? Une vraie personne vous répond sous 24 h ouvrées.</p>
    <p>E-mail : <a class="link" href="mailto:${CONFIG.email}">${CONFIG.email}</a></p>
    <form data-contact><input required placeholder="Votre nom" aria-label="Votre nom"><input required type="email" placeholder="Votre e-mail" aria-label="Votre e-mail"><input placeholder="Numéro de commande (si vous en avez un)" aria-label="Numéro de commande"><textarea required rows="5" placeholder="Votre message (largeur et hauteur de la fenêtre si c'est pour une taille)" aria-label="Message"></textarea><button class="btn">Envoyer</button></form>`],
  suivi: ["Suivre ma commande", `
    <p>Entrez le numéro de suivi reçu par e-mail. <span class="ph">[Sur Shopify : application de suivi, par exemple ParcelPanel ou 17TRACK.]</span></p>
    <form data-suivi><input required placeholder="Numéro de suivi ou de commande" aria-label="Numéro de suivi"><input type="email" placeholder="Votre e-mail" aria-label="E-mail"><button class="btn">Suivre</button></form>`],
  cgv: ["Conditions générales de vente", `<p class="ph">[Brouillon à compléter et à faire relire : identité du vendeur (nom, SIREN, adresse), prix TTC, commande, paiement, livraison, droit de rétractation 14 jours (nous offrons 30), garanties légales de conformité et vices cachés, médiateur de la consommation, données personnelles.]</p>`],
  mentions: ["Mentions légales", `<p class="ph">[Éditeur : nom ou raison sociale, statut (micro-entreprise…), SIREN, adresse, e-mail, téléphone. Hébergeur : Shopify Inc., 151 O'Connor Street, Ground floor, Ottawa, ON K2P 2L8, Canada.]</p>`],
  confidentialite: ["Confidentialité", `<p class="ph">[Données collectées (commande, e-mail, navigation), finalités, durée, destinataires (Shopify, transporteur, outil d'e-mail), droits RGPD et contact, cookies et bandeau de consentement.]</p>`]
};
function viewPage(id) {
  const p = PAGES[id]; if (!p) return viewHome();
  return `<div class="wrap"><div class="page"><h1>${p[0]}</h1>${p[1]}</div></div>`;
}

function viewCommande() {
  if (!cart.length) return `<div class="wrap"><div class="page"><h1>Commande</h1><p>Votre panier est vide.</p><a class="btn" href="#/produit/rideau-thermique">Voir les rideaux</a></div></div>`;
  const st = sousTotal(), port = st >= CONFIG.livraisonOfferteDes ? 0 : CONFIG.fraisLivraison;
  const code = store("abrilin-code"), p = promoActive();
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
      <p class="small muted center" style="margin-top:10px">🔒 Paiement sécurisé · Démo : aucun paiement ne sera fait</p>
    </div>
    <div class="box">
      <h2>Récapitulatif</h2>
      ${cart.map(l => `<div class="sum-line"><span>${l.q} × ${esc(l.nom)}<br><small class="muted">${esc(l.opt || "")}</small></span><span>${eur(l.prix * l.q)}</span></div>`).join("")}
      <form data-code style="display:flex;gap:8px;margin:14px 0"><input placeholder="Code promo" aria-label="Code promo" value="${esc(code || "")}" style="flex:1"><button class="btn ghost" style="padding:10px 16px">Appliquer</button></form>
      <div class="sum-line"><span>Sous-total</span><span>${eur(st)}</span></div>
      ${remise ? `<div class="sum-line"><span>Code ${esc(code)}</span><span>−${eur(remise)}</span></div>` : ""}
      <div class="sum-line"><span>Livraison suivie</span><span>${port ? eur(port) : "Offerte"}</span></div>
      <div class="sum-line tot"><span>Total TTC</span><span>${eur(st - remise + port)}</span></div>
      <div class="guar" style="grid-template-columns:1fr">${GARANTIES.slice(0, 2).map(([i, tt, s]) => `<div>${ICON[i]}<span><b>${tt}</b> · <span class="muted">${s}</span></span></div>`).join("")}</div>
    </div>
  </div>`;
}

/* ---------- routeur ---------- */
function route() {
  const h = location.hash.replace(/^#\/?/, "");
  const [a, b] = h.split("/");
  let html;
  if (a === "produit") html = viewProduit();
  else if (a === "lots") html = viewLots();
  else if (a === "tailles") html = viewTailles();
  else if (a === "page") html = viewPage(b);
  else if (a === "commande") html = viewCommande();
  else html = viewHome();
  $("#main").innerHTML = html;
  document.querySelectorAll("nav.main a").forEach(x => x.classList.toggle("on", x.getAttribute("href") === "#/" + h));
  closeDrawers();
  window.scrollTo(0, 0);
  if (a === "tailles") ["#lw", "#lh"].forEach(s => $(s).addEventListener("input", calcTaille));
  stickyWatch();
}
function rerenderProduit() { const y = scrollY; $("#main").innerHTML = viewProduit(); scrollTo(0, y); store("abrilin-sel", sel); stickyWatch(); }
function stickyWatch() {
  const bar = $("#stickyBuy"), btn = document.querySelector(".buy [data-buy]");
  if (!bar || !btn) return;
  new IntersectionObserver(([e]) => bar.classList.toggle("show", !e.isIntersecting && e.boundingClientRect.top < 0)).observe(btn);
}

/* ---------- événements ---------- */
document.addEventListener("click", e => {
  const t = e.target.closest("button,a"); if (!t) return;
  const d = t.dataset;
  if (d.cart !== undefined) { e.preventDefault(); openCart(); }
  else if (d.close !== undefined) closeDrawers();
  else if (d.closecart !== undefined) closeDrawers();
  else if (d.menu !== undefined) {
    $("#menuM nav").innerHTML = $("#nav").innerHTML;
    $("#menuM").hidden = $("#menuBg").hidden = false;
  }
  else if (d.c) { sel.c = d.c; rerenderProduit(); }
  else if (d.t) { sel.t = d.t; rerenderProduit(); }
  else if (d.p) { sel.p = d.p; rerenderProduit(); }
  else if (d.vue) { sel.v = +d.vue; rerenderProduit(); }
  else if (d.preset) { const [tt, pp] = d.preset.split("|"); sel.t = tt; sel.p = pp; store("abrilin-sel", sel); }
  else if (d.buy !== undefined) {
    const c = COLORIS.find(x => x.id === sel.c), tt = TAILLES.find(x => x.id === sel.t), pk = PACKS.find(x => x.id === sel.p);
    addLine({ key: `rt-${c.id}-${tt.id}-${pk.id}`, id: "rideau-thermique", nom: `${P["rideau-thermique"].court} · ${pk.nom}`, opt: `${c.nom} · ${tt.nom}`, prix: prixPack(tt, pk), q: 1, ill: ill("fenetre", c.hex, { nuit: true }) });
  }
  else if (d.add) addSimple(d.add);
  else if (d.addlot) {
    e.preventDefault();
    const l = LOTS.find(x => x.id === d.addlot);
    addLine({ key: "lot-" + l.id, id: "lot-" + l.id, lot: true, nom: l.nom, opt: "Rideaux 140 × 240 · coloris à confirmer par e-mail", prix: l.prix, q: 1, ill: ill("fenetre", COLORIS[1].hex, { nuit: true }) });
  }
  else if (d.q !== undefined) {
    const l = cart[+d.q]; l.q += +d.d; if (l.q <= 0) cart.splice(+d.q, 1);
    saveCart(); renderCart();
  }
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
    store("abrilin-code", ok ? v : null);
    toast(ok ? "Code appliqué" : "Ce code n'est pas valable");
    $("#main").innerHTML = viewCommande();
  }
});

$("#footTrust").innerHTML = GARANTIES.map(([, t, s]) => `<div><b>${t}</b><span class="muted">${s}</span></div>`).join("");
$("#year").textContent = new Date().getFullYear();
announce(); renderCount();
addEventListener("hashchange", route);
route();
