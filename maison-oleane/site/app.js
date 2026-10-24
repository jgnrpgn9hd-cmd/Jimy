(function(){
"use strict";
var PIC={"salon": "images/salon.jpg", "chambre": "images/chambre.jpg", "cuisine": "images/cuisine.jpg", "sdb": "images/sdb.jpg", "entree": "images/entree.jpg", "bureau": "images/bureau.jpg", "balcon": "images/balcon.jpg", "boheme": "images/boheme.jpg", "scandi": "images/scandi.jpg", "indus": "images/indus.jpg", "chic": "images/chic.jpg", "noel": "images/noel.jpg"};
var HERO_IMG="images/hero.jpg";

/* ---------- Données ---------- */
var P = [
["Lampe projecteur coucher de soleil","Salon;Chambre","Lampes","Luminaires","Bohème",39.90,1,"sunset","Elle projette au mur un halo chaud, comme une fin de journée d'été, tous les soirs."],
["Lampe champignon","Salon;Chambre","Lampes","Luminaires","Scandinave",39.90,0,"lamp","Une forme ronde et douce, une lumière diffuse pour une console ou une table de chevet."],
["Guirlande lumineuse","Salon;Chambre","Guirlandes lumineuses","Luminaires","Bohème",19.90,0,"lights","De petites lumières chaudes à poser sur une étagère, un miroir ou dans un vase.",1],
["Miroir arche","Salon;Entrée","Miroirs","Déco","Chic classique",59.90,0,"mirror","Sa forme arrondie adoucit un mur et renvoie la lumière dans la pièce."],
["Toile abstraite","Salon;Chambre","Cadres et toiles","Déco","Scandinave",34.90,0,"art","Des formes simples et des tons neutres pour habiller un mur sans le charger."],
["Étagère flottante","Salon;Chambre","Étagères","Rangement","Scandinave",29.90,0,"shelf","Pour poser quelques livres, un vase ou une bougie, sans fixation visible."],
["Vase en céramique","Salon;Entrée","Vases","Déco","Scandinave",29.90,1,"vase","Un vase qui tient seul, avec ou sans fleurs, sur une table ou une console."],
["Soliflore en verre","Salon;Chambre","Vases","Déco","Scandinave",14.90,0,"bud","Pour une seule tige ou quelques brins séchés, sur une table de chevet ou un rebord de fenêtre."],
["Herbe de pampa séchée","Salon;Chambre","Fleurs séchées et plantes","Déco","Bohème",19.90,0,"pampas","Des plumeaux légers qui se gardent des mois, sans eau ni entretien."],
["Plante artificielle en pot","Salon;Bureau;Salle de bain","Fleurs séchées et plantes","Déco","Scandinave",29.90,0,"plant","Du vert toute l'année, même dans un coin sans lumière."],
["Plateau décoratif","Salon","Plateaux et vide-poches","Déco","Chic classique",24.90,0,"tray","Pour regrouper bougies, clés ou petits objets et leur donner une place."],
["Housse de coussin en lin","Salon;Chambre","Coussins","Linge de maison","Scandinave",17.90,0,"cushion","Une matière naturelle au toucher doux, qui change l'allure d'un canapé en un geste."],
["Plaid grosse maille","Salon;Chambre","Plaids","Linge de maison","Scandinave",49.90,0,"throw","Une maille épaisse et chaude, à poser sur un canapé ou au pied du lit.",1],
["Tapis style berbère","Salon;Chambre","Tapis","Linge de maison","Bohème",59.90,0,"rug","Des motifs graphiques et des tons naturels pour réchauffer le sol."],
["Parure de lit en gaze de coton","Chambre","Linge de lit","Linge de maison","Scandinave",69.90,1,"bed","Une housse de couette et deux taies en coton léger et froissé, doux dès le premier lavage."],
["Housse de coussin texturée","Chambre;Salon","Coussins","Linge de maison","Bohème",19.90,0,"cushion","Du relief et de la matière pour habiller le lit ou le canapé."],
["Lampe de chevet tactile","Chambre","Lampes","Luminaires","Scandinave",32.90,1,"lamp","S'allume d'un simple toucher, avec plusieurs intensités pour lire ou s'endormir."],
["Veilleuse","Chambre","Veilleuses et projecteurs","Luminaires","Scandinave",19.90,0,"globe","Une lumière très douce pour la nuit, dans une chambre d'adulte ou d'enfant."],
["Projecteur étoiles","Chambre","Veilleuses et projecteurs","Luminaires","Bohème",29.90,0,"stars","Il couvre le plafond d'un ciel étoilé, pour une ambiance calme le soir."],
["Panier en osier","Chambre;Salon;Salle de bain","Paniers et boîtes","Rangement","Bohème",29.90,0,"basket","Pour ranger plaids, linge ou jouets, et le laisser en vue."],
["Boîte à bijoux","Chambre","Paniers et boîtes","Rangement","Chic classique",24.90,0,"box","Des compartiments pour bagues, boucles et colliers, sur une commode."],
["Organiseur de tiroir","Chambre;Bureau","Paniers et boîtes","Rangement","Scandinave",19.90,0,"box","Des cases pour que chaque chose retrouve sa place dans le tiroir."],
["Miroir rond mural","Chambre;Entrée;Salle de bain","Miroirs","Déco","Chic classique",44.90,0,"round","Un miroir rond qui agrandit l'espace et apporte de la lumière."],
["Diffuseur d'huiles essentielles","Chambre;Salle de bain;Salon","Bougies et diffuseurs","Bougies et parfums d'intérieur","Scandinave",34.90,1,"diffuser","Une brume légère et parfumée, avec une lumière douce qui s'éteint seule."],
["Tasses en céramique, lot de 4","Cuisine","Vaisselle","Arts de la table","Scandinave",32.90,1,"cups","Quatre tasses aux finitions irrégulières, pour le café du matin ou le thé de l'après-midi."],
["Assiettes en céramique","Cuisine","Vaisselle","Arts de la table","Bohème",39.90,0,"plates","Des assiettes aux bords irréguliers qui donnent un air fait-maison à la table."],
["Verres côtelés, lot de 4","Cuisine","Verres","Arts de la table","Chic classique",24.90,1,"glasses","Un verre strié qui accroche la lumière, pour l'eau comme pour les cocktails.",1],
["Sets de table, lot de 4","Cuisine","Linge de table","Arts de la table","Bohème",24.90,0,"mat","Pour dresser une table simple et soignée au quotidien."],
["Chemin de table","Cuisine","Linge de table","Arts de la table","Scandinave",19.90,0,"runner","Une bande de tissu qui structure la table, pour tous les jours ou les repas de fête."],
["Bougeoirs","Cuisine;Salon","Bougeoirs","Arts de la table","Chic classique",22.90,0,"candlesticks","Pour des bougies longues, sur la table ou la cheminée.",1],
["Bocaux en verre","Cuisine","Rangement cuisine","Rangement","Scandinave",29.90,0,"jars","Pâtes, riz, café : on voit ce qu'il reste, et le plan de travail reste net."],
["Étagère à épices","Cuisine","Rangement cuisine","Rangement","Industriel",27.90,0,"shelf","Toutes les épices à portée de main, sans encombrer les placards."],
["Porte-ustensiles","Cuisine","Rangement cuisine","Rangement","Industriel",17.90,0,"utensils","Spatules et cuillères rangées debout, près des plaques."],
["Distributeur de savon","Salle de bain","Accessoires de salle de bain","Salle de bain","Scandinave",19.90,1,"dispenser","Un distributeur sobre qui remplace le flacon en plastique sur le lavabo."],
["Porte-brosses à dents","Salle de bain","Accessoires de salle de bain","Salle de bain","Scandinave",14.90,0,"utensils","Assorti au distributeur, pour un lavabo rangé."],
["Plateau de vasque","Salle de bain","Accessoires de salle de bain","Salle de bain","Chic classique",19.90,0,"tray","Pour regrouper flacons et parfums autour du lavabo."],
["Tapis de bain","Salle de bain","Tapis","Linge de maison","Scandinave",24.90,0,"mat","Doux sous les pieds et rapide à sécher."],
["Serviettes gaufrées","Salle de bain","Serviettes","Linge de maison","Scandinave",29.90,0,"towels","Un tissage gaufré léger qui sèche vite."],
["Étagère de douche","Salle de bain","Accessoires de salle de bain","Rangement","Industriel",27.90,0,"shelf","Shampoing et savon rangés dans la douche."],
["Bougie parfumée","Salle de bain;Salon;Chambre","Bougies et diffuseurs","Bougies et parfums d'intérieur","Chic classique",19.90,0,"candle","Une bougie dans un pot réutilisable, pour parfumer une pièce le soir.",1],
["Vide-poche en céramique","Entrée","Plateaux et vide-poches","Rangement","Scandinave",16.90,1,"tray","Pour poser clés, lunettes et monnaie en rentrant."],
["Range-clés mural","Entrée","Patères et porte-clés","Rangement","Scandinave",24.90,1,"hooks","Les clés toujours au même endroit, près de la porte."],
["Paillasson","Entrée","Tapis","Linge de maison","Bohème",24.90,0,"mat","Le premier objet qu'on voit en arrivant."],
["Porte-manteau mural","Entrée","Patères et porte-clés","Rangement","Industriel",34.90,0,"hooks","Manteaux et sacs accrochés, l'entrée dégagée."],
["Panier à chaussures","Entrée","Paniers et boîtes","Rangement","Bohème",34.90,0,"basket","Les chaussures rangées sans être cachées au fond d'un placard."],
["Sous-main en cuir","Bureau","Accessoires de bureau","Rangement","Industriel",24.90,1,"deskmat","Une surface douce pour le clavier et la souris, qui protège le bureau."],
["Organiseur de bureau","Bureau","Accessoires de bureau","Rangement","Scandinave",22.90,0,"box","Stylos, carnets et téléphone rangés au même endroit."],
["Pot à crayons","Bureau","Accessoires de bureau","Rangement","Scandinave",12.90,0,"utensils","Simple, utile, et joli sur un bureau."],
["Lampe de bureau LED","Bureau","Lampes","Luminaires","Industriel",39.90,1,"desklamp","Une lumière orientable et réglable pour travailler sans fatiguer les yeux."],
["Support d'écran","Bureau","Accessoires de bureau","Rangement","Scandinave",34.90,0,"shelf","Remonte l'écran à hauteur des yeux et libère de la place dessous."],
["Repose-pieds","Bureau","Accessoires de bureau","Rangement","Scandinave",29.90,0,"box","Pour mieux s'asseoir pendant les longues journées."],
["Guirlande solaire","Balcon et terrasse","Éclairage extérieur","Luminaires","Bohème",24.90,0,"lights","Se recharge au soleil et s'allume seule à la nuit tombée."],
["Lanterne solaire","Balcon et terrasse","Éclairage extérieur","Luminaires","Bohème",22.90,0,"lantern","Une lumière douce sur une table de balcon, sans câble."],
["Jardinière","Balcon et terrasse","Pots et jardinières","Déco","Scandinave",29.90,0,"plant","Pour des herbes aromatiques ou des fleurs sur le balcon."],
["Pot suspendu","Balcon et terrasse;Salon","Pots et jardinières","Déco","Bohème",19.90,0,"hanging","Une plante suspendue pour gagner de la place au sol."],
["Drap housse en gaze de coton","Chambre","Linge de lit","Linge de maison","Scandinave",29.90,1,"bed","Assorti à la parure, un coton léger qui se froisse joliment et respire bien."],
["Taies d'oreiller en lin, lot de 2","Chambre","Linge de lit","Linge de maison","Scandinave",24.90,0,"cushion","Un lin lavé, souple et frais, qui gagne en douceur à chaque lavage."],
["Jeté de lit gaufré","Chambre","Plaids","Linge de maison","Bohème",54.90,0,"throw","Un grand jeté en coton gaufré pour couvrir le lit et lui donner du relief."],
["Rideaux en voile de lin","Salon;Chambre","Rideaux","Linge de maison","Scandinave",39.90,1,"curtain","Un voile léger qui filtre la lumière sans assombrir la pièce."],
["Tapis rond en jute","Salon;Chambre;Entrée","Tapis","Linge de maison","Bohème",44.90,0,"ruground","Une fibre naturelle et une forme ronde, sous une table basse ou au pied du lit."],
["Descente de lit en laine","Chambre","Tapis","Linge de maison","Scandinave",34.90,0,"mat","Doux sous les pieds au réveil, à poser de chaque côté du lit."],
["Tapis de cuisine","Cuisine","Tapis","Linge de maison","Industriel",24.90,0,"runner","Un tapis long et lavable devant le plan de travail."]
].map(function(r,i){
  return {id:i, name:r[0], rooms:r[1].split(";"), cat:r[2], sub:r[2], type:r[3], univ:r[4], price:r[5], isNew:!!r[6], ill:r[7], desc:r[8], noel:!!r[9]};
});
var CAT_ORDER = ["Lampes","Veilleuses et projecteurs","Guirlandes lumineuses","Éclairage extérieur","Vases","Fleurs séchées et plantes","Pots et jardinières","Miroirs","Cadres et toiles","Étagères","Plateaux et vide-poches","Bougies et diffuseurs","Bougeoirs","Linge de lit","Coussins","Plaids","Tapis","Rideaux","Linge de table","Serviettes","Vaisselle","Verres","Rangement cuisine","Accessoires de salle de bain","Paniers et boîtes","Patères et porte-clés","Accessoires de bureau"];

var HERO = {
 "Projecteur étoiles":"Un ciel étoilé au plafond, et le coucher se passe en douceur, pour les enfants comme pour les grands.",
 "Diffuseur d'huiles essentielles":"Quand le chauffage assèche l'air, une brume légère et parfumée, qui s'éteint seule.",
 "Plaid grosse maille":"Avoir chaud sur le canapé sans toucher au thermostat.",
 "Lampe de chevet tactile":"Lire au lit, puis éteindre d'un geste, sans chercher l'interrupteur.",
 "Lampe projecteur coucher de soleil":"La lumière d'un soir d'été dans le salon, même au cœur de l'hiver.",
 "Étagère de douche":"Une douche rangée sans percer le carrelage : idéale en location.",
 "Rideaux en voile de lin":"Garder la lumière, pas les regards du vis-à-vis.",
 "Miroir arche":"Un miroir bien placé, et la pièce paraît plus grande et plus lumineuse."
};
P.forEach(function(p){ if(HERO[p.name]){p.hero=true;p.why=HERO[p.name];} });
function pid(name){for(var i=0;i<P.length;i++){if(P[i].name===name)return i;}throw new Error(name);}
var LOTS = [
 ["Nuit étoilée",["Projecteur étoiles","Veilleuse"],44.90,"Chambre","Bohème","Pour des couchers plus doux : un ciel étoilé au plafond, puis une veilleuse pour la nuit."],
 ["Chevet en duo",["Lampe de chevet tactile","Lampe de chevet tactile"],59.90,"Chambre","Scandinave","Une lampe tactile de chaque côté du lit, pour lire chacun à son rythme."],
 ["Air doux",["Diffuseur d'huiles essentielles","Bougie parfumée"],49.90,"Salon;Chambre","Scandinave","Une brume parfumée le jour, une bougie le soir : la maison sent bon tout l'hiver."],
 ["Salle de bain sans perçage",["Étagère de douche","Plateau de vasque","Distributeur de savon"],57.90,"Salle de bain","Scandinave","Tout ranger autour du lavabo et dans la douche, sans un seul trou dans le carrelage."],
 ["Entrée rangée",["Range-clés mural","Vide-poche en céramique","Porte-manteau mural"],64.90,"Entrée","Scandinave","Clés, manteaux et petites affaires trouvent leur place dès qu'on passe la porte."],
 ["Cocon d'hiver",["Plaid grosse maille","Housse de coussin en lin","Bougie parfumée"],74.90,"Salon","Scandinave","Le plaid, le coussin et la bougie : un canapé où l'on a envie de passer la soirée."],
 ["Bureau sans mal de dos",["Support d'écran","Repose-pieds","Sous-main en cuir"],74.90,"Bureau","Industriel","L'écran à hauteur des yeux, les pieds bien posés : un poste de télétravail qui ménage le dos."]
];
LOTS.forEach(function(l){
  var ids=l[1].map(pid), sum=ids.reduce(function(a,i){return a+P[i].price;},0);
  P.push({id:P.length,name:l[0],rooms:l[3].split(";"),cat:"Compositions",sub:"Composition",type:"Compositions",univ:l[4],price:l[2],isNew:false,ill:P[ids[0]].ill,desc:l[5],isLot:true,items:ids,sum:sum});
});
function lotOf(id){for(var i=0;i<P.length;i++){if(P[i].isLot&&P[i].items.indexOf(id)>=0)return P[i];}return null;}
function lotIll(p){var u=p.items.filter(function(v,i,a){return a.indexOf(v)===i;});return '<span class="lot-ill" style="grid-template-columns:repeat('+u.length+',minmax(0,1fr))">'+u.map(function(i){return '<span>'+ill(P[i].ill,i)+'</span>';}).join("")+'</span>';}
function countItems(p){return p.items.length;}

var MAIL="contact@maisonoleane.com";
var ICO={
 lock:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.4" aria-hidden="true"><rect x="5" y="10.5" width="14" height="10" rx="1.5"/><path d="M8 10.5V8a4 4 0 0 1 8 0v2.5"/></svg>',
 truck:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.4" aria-hidden="true"><path d="M3 7h11v9H3zM14 10h4l3 3v3h-7"/><circle cx="7" cy="17.5" r="1.5"/><circle cx="17" cy="17.5" r="1.5"/></svg>',
 back:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.4" aria-hidden="true"><path d="M4 12a8 8 0 1 0 3-6.2"/><path d="M4 4v4h4"/></svg>',
 chat:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.4" aria-hidden="true"><path d="M4 5h16v11H9l-5 4z"/></svg>',
 box:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.4" aria-hidden="true"><path d="M3 8l9-4 9 4v8l-9 4-9-4z"/><path d="M3 8l9 4 9-4M12 12v8"/></svg>'
};
function trustRow(compact){
  var it=[["lock","Paiement sécurisé","Données bancaires chiffrées, jamais stockées"],["truck","Livraison suivie","Numéro de suivi par e-mail"],["back","Retours 30 jours","Remboursé sous 14 jours"],["chat","Une vraie personne","Réponse sous 24 h"]];
  return '<ul class="trust'+(compact?' compact':'')+'">'+it.map(function(t){return '<li><span class="ti">'+ICO[t[0]]+'</span><span><b>'+t[1]+'</b>'+(compact?'':'<small>'+t[2]+'</small>')+'</span></li>';}).join("")+'</ul>';
}
function payBadges(){return '<div class="pays" aria-label="Moyens de paiement acceptés">'+["CB","Visa","Mastercard","PayPal","Apple Pay","Google Pay","3x sans frais"].map(function(x){return '<span>'+x+'</span>';}).join("")+'</div>';}
function catsWhere(f){return CAT_ORDER.filter(function(c){return P.some(function(p){return p.cat===c&&f(p);});});}

var ROOMS = {
  "Salon":{subs:["Luminaires","Déco murale","Vases et objets","Textile"],intro:"Lumière tamisée, céramique et textiles doux, pour une pièce où l'on aime s'attarder."},
  "Chambre":{subs:["Linge de lit","Éclairage","Rangement","Déco"],intro:"Des matières douces et une lumière basse, pour une chambre qui apaise."},
  "Cuisine":{subs:["Vaisselle","Arts de la table","Rangement"],intro:"De la vaisselle qu'on a envie de sortir tous les jours, et un plan de travail rangé."},
  "Salle de bain":{subs:["Accessoires","Textile","Rangement et ambiance"],intro:"Des accessoires sobres et des textiles doux, pour une salle de bain qui ressemble à un spa."},
  "Entrée":{subs:["Accueil","Rangement"],intro:"Une entrée rangée, des clés à leur place, et une première impression soignée."},
  "Bureau":{subs:["Organisation","Éclairage et confort"],intro:"Un bureau organisé et bien éclairé, pour travailler chez soi sans fatigue."},
  "Balcon et terrasse":{subs:["Éclairage","Plantes et pots"],intro:"Des lumières solaires et des plantes, pour profiter de l'extérieur jusqu'à la nuit."}
};
var TYPES = ["Déco","Luminaires","Linge de maison","Arts de la table","Bougies et parfums d'intérieur","Rangement","Salle de bain"];
var UNIV = {
  "Bohème":"Osier, rotin, herbe de pampa et tons sable.",
  "Scandinave":"Bois clair, céramique blanche, lin et lignes simples.",
  "Industriel":"Métal noir, verre et cuir.",
  "Chic classique":"Laiton, verre, miroirs arrondis."
};
var SPECIAL = {
  essentiels:{title:"Les essentiels", intro:"Les objets qui changent vraiment une pièce, choisis parmi toute la collection.", f:function(p){return p.hero;}},
  compositions:{title:"Compositions", intro:"Des objets pensés pour aller ensemble, réunis à un prix plus doux qu'à l'unité.", f:function(p){return p.isLot;}},
  nouveautes:{title:"Nouveautés", intro:"Les derniers objets entrés dans la maison.", f:function(p){return p.isNew;}},
  moins30:{title:"Petits plaisirs", intro:"De petits objets à moins de 30 €, qui changent une pièce.", f:function(p){return p.price<30;}},
  cadeaux:{title:"Idées cadeaux", intro:"Des objets à offrir à moins de 50 €, pour Noël, une crémaillère ou un anniversaire.", f:function(p){return p.price<50;}},
  noel:{title:"Noël à la maison", intro:"Lumières chaudes, bougies et belle table, pour les fêtes. Disponible jusqu'au 24 décembre ou jusqu'à épuisement.", f:function(p){return p.noel;}}
};

/* ---------- Illustrations ---------- */
var BG = ["#E9E3D9","#E3DCD1","#DDD5C8","#E6E0D6","#E1D9CC"];
var C = {ink:"#3A3631",sand:"#D9C9B0",clay:"#B97A56",sage:"#8E9C86",cream:"#F4EFE7",brass:"#B8975A",wood:"#C4A47C",glass:"#DCE4DF",glow:"#F3D9A6",leather:"#7A5C46"};
function sh(cx,w){return '<ellipse cx="'+cx+'" cy="404" rx="'+w+'" ry="9" fill="#2a2420" opacity=".09"/>';}
var D = {
 lamp:function(){return '<circle cx="200" cy="235" r="105" fill="'+C.glow+'" opacity=".35"/>'+sh(200,60)+'<rect x="194" y="250" width="12" height="140" fill="'+C.ink+'"/><ellipse cx="200" cy="392" rx="46" ry="10" fill="'+C.ink+'"/><path d="M130 258 Q200 140 270 258 Z" fill="'+C.sand+'"/><path d="M130 258 H270" stroke="#c4b294" stroke-width="3"/>';},
 sunset:function(){return '<circle cx="230" cy="190" r="125" fill="'+C.clay+'" opacity=".38"/><circle cx="230" cy="190" r="80" fill="'+C.glow+'" opacity=".75"/>'+sh(130,40)+'<rect x="122" y="300" width="16" height="96" fill="'+C.ink+'"/><circle cx="130" cy="294" r="20" fill="'+C.ink+'"/><circle cx="138" cy="290" r="7" fill="'+C.glow+'"/>';},
 lights:function(){var s='<path d="M30 130 Q200 260 370 130" fill="none" stroke="'+C.ink+'" stroke-width="2"/>';for(var i=1;i<10;i++){var t=i/10,x=(1-t)*(1-t)*30+2*(1-t)*t*200+t*t*370,y=(1-t)*(1-t)*130+2*(1-t)*t*260+t*t*130;s+='<circle cx="'+x.toFixed(0)+'" cy="'+(y+10).toFixed(0)+'" r="16" fill="'+C.glow+'" opacity=".45"/><circle cx="'+x.toFixed(0)+'" cy="'+(y+10).toFixed(0)+'" r="6" fill="'+C.glow+'"/>';}return s+'<path d="M60 230 Q200 340 340 230" fill="none" stroke="'+C.ink+'" stroke-width="2" opacity=".5"/>';},
 mirror:function(){return sh(200,80)+'<path d="M120 395 V205 A80 80 0 0 1 280 205 V395 Z" fill="'+C.brass+'"/><path d="M132 383 V207 A68 68 0 0 1 268 207 V383 Z" fill="#ECE8E1"/><path d="M160 260 L230 175 M175 300 L250 210" stroke="#fff" stroke-width="6" opacity=".6"/>';},
 round:function(){return '<circle cx="200" cy="215" r="120" fill="'+C.brass+'"/><circle cx="200" cy="215" r="108" fill="#ECE8E1"/><path d="M140 200 L220 120 M150 240 L250 140" stroke="#fff" stroke-width="7" opacity=".6"/><path d="M200 95 V60" stroke="'+C.ink+'" stroke-width="2"/>';},
 art:function(){return '<rect x="105" y="95" width="190" height="245" fill="'+C.cream+'" stroke="'+C.ink+'" stroke-width="7"/><circle cx="240" cy="170" r="38" fill="'+C.clay+'" opacity=".85"/><path d="M135 320 V250 A55 55 0 0 1 245 250 V320 Z" fill="'+C.sage+'"/>'+sh(200,70)+'<rect x="150" y="372" width="100" height="30" fill="'+C.wood+'"/>';},
 shelf:function(){return '<rect x="70" y="250" width="260" height="14" fill="'+C.wood+'"/><rect x="95" y="180" width="18" height="70" fill="'+C.sage+'"/><rect x="115" y="190" width="14" height="60" fill="'+C.clay+'"/><rect x="131" y="172" width="16" height="78" fill="'+C.sand+'"/><path d="M230 250 C210 230 215 205 232 197 V185 H252 V197 C270 205 274 230 254 250 Z" fill="'+C.cream+'" stroke="#c9bda9"/><circle cx="300" cy="238" r="12" fill="'+C.brass+'"/>';},
 vase:function(){return '<path d="M200 255 C190 200 160 170 150 130 M200 255 C205 190 230 160 250 120 M200 255 C200 200 200 170 196 110" stroke="'+C.sage+'" stroke-width="3" fill="none"/><ellipse cx="150" cy="125" rx="9" ry="18" fill="'+C.sage+'" transform="rotate(-25 150 125)"/><ellipse cx="252" cy="115" rx="9" ry="18" fill="'+C.sage+'" transform="rotate(25 252 115)"/><ellipse cx="196" cy="104" rx="8" ry="16" fill="'+C.sage+'"/>'+sh(200,60)+'<path d="M170 400 C128 360 138 300 176 280 L176 252 L224 252 L224 280 C262 300 272 360 230 400 Z" fill="'+C.sand+'"/><path d="M176 262 H224" stroke="#c7b598" stroke-width="3"/>';},
 bud:function(){return '<path d="M200 300 C198 240 205 190 215 140" stroke="'+C.sage+'" stroke-width="3" fill="none"/><ellipse cx="220" cy="135" rx="10" ry="18" fill="'+C.clay+'" opacity=".85"/><ellipse cx="208" cy="200" rx="6" ry="13" fill="'+C.sage+'" transform="rotate(-35 208 200)"/>'+sh(200,30)+'<path d="M187 402 C172 370 178 330 193 310 L193 272 L207 272 L207 310 C222 330 228 370 213 402 Z" fill="'+C.glass+'" stroke="#9aa9a2" stroke-width="1.5" opacity=".9"/>';},
 pampas:function(){var s='';[[150,95,-18],[200,70,0],[250,100,18]].forEach(function(a){s+='<path d="M200 270 Q'+(a[0]+(200-a[0])*.3)+' 190 '+a[0]+' '+(a[1]+40)+'" stroke="#b9a98d" stroke-width="2" fill="none"/><ellipse cx="'+a[0]+'" cy="'+(a[1]+20)+'" rx="22" ry="52" fill="#E9DFCC" transform="rotate('+a[2]+' '+a[0]+' '+(a[1]+20)+')"/>';});return s+sh(200,48)+'<path d="M172 400 C160 340 168 300 184 270 H216 C232 300 240 340 228 400 Z" fill="'+C.clay+'"/>';},
 plant:function(){var s='',L=[[-60,170],[-35,140],[-10,120],[15,125],[40,140],[62,170],[-20,180],[25,175]];L.forEach(function(l){s+='<ellipse cx="'+(200+l[0])+'" cy="'+l[1]+'" rx="16" ry="48" fill="'+C.sage+'" opacity=".92" transform="rotate('+(l[0]*.7)+' '+(200+l[0])+' '+l[1]+')"/>';});return s+sh(200,62)+'<path d="M140 270 H260 L245 400 H155 Z" fill="'+C.clay+'"/><rect x="134" y="262" width="132" height="16" fill="#a86b49"/>';},
 tray:function(){return sh(200,140)+'<ellipse cx="200" cy="380" rx="135" ry="30" fill="'+C.brass+'"/><ellipse cx="200" cy="375" rx="122" ry="23" fill="#c9ab72"/><rect x="140" y="300" width="44" height="72" fill="'+C.cream+'"/><path d="M162 300 V288" stroke="'+C.ink+'" stroke-width="2"/><circle cx="240" cy="352" r="22" fill="'+C.sage+'"/><circle cx="276" cy="362" r="12" fill="'+C.clay+'"/>';},
 cushion:function(){return sh(205,110)+'<rect x="150" y="215" width="170" height="150" rx="34" fill="'+C.sage+'" transform="rotate(6 235 290)"/><rect x="90" y="235" width="180" height="160" rx="34" fill="'+C.sand+'"/><path d="M110 315 Q180 300 250 315" stroke="#c7b598" stroke-width="2" fill="none"/>';},
 throw:function(){var s=sh(200,130);[[315,"#E7DCCB"],[265,C.sand],[215,"#E7DCCB"]].forEach(function(r){s+='<rect x="85" y="'+r[0]+'" width="230" height="58" rx="14" fill="'+r[1]+'"/>';for(var x=105;x<305;x+=22){s+='<path d="M'+x+' '+(r[0]+10)+' l8 18 l8 -18 M'+x+' '+(r[0]+30)+' l8 18 l8 -18" stroke="#c4b093" stroke-width="2" fill="none"/>';}});return s;},
 rug:function(){var s='<path d="M50 402 L350 402 L305 300 L95 300 Z" fill="'+C.cream+'"/>';for(var i=0;i<5;i++){var y=318+i*18;s+='<path d="M'+(100-i*4)+' '+y+' l20 10 l20 -10 l20 10 l20 -10 l20 10 l20 -10 l20 10 l20 -10 l20 10 l20 -10" stroke="'+C.ink+'" stroke-width="2" fill="none" opacity=".55"/>';}return s+'<path d="M50 402 L350 402" stroke="'+C.clay+'" stroke-width="4"/>';},
 bed:function(){return '<rect x="60" y="170" width="280" height="120" fill="'+C.wood+'"/><rect x="50" y="280" width="300" height="70" fill="#ECE5DA"/><rect x="85" y="230" width="100" height="56" rx="18" fill="'+C.cream+'"/><rect x="215" y="230" width="100" height="56" rx="18" fill="'+C.cream+'"/><path d="M50 300 Q200 280 350 300 V350 H50 Z" fill="'+C.sand+'"/><path d="M90 315 Q140 305 180 320 M220 318 Q270 305 320 318" stroke="#c4b294" stroke-width="2" fill="none"/>'+sh(200,150)+'<rect x="60" y="350" width="10" height="50" fill="'+C.ink+'"/><rect x="330" y="350" width="10" height="50" fill="'+C.ink+'"/>';},
 globe:function(){return '<circle cx="200" cy="330" r="85" fill="'+C.glow+'" opacity=".35"/>'+sh(200,55)+'<rect x="160" y="378" width="80" height="22" fill="'+C.wood+'"/><circle cx="200" cy="330" r="52" fill="#FBF3E2"/>';},
 stars:function(){var s='',pts=[[60,60],[110,110],[160,50],[230,95],[290,60],[340,120],[90,170],[200,150],[270,180],[330,200],[140,200]];pts.forEach(function(p){s+='<circle cx="'+p[0]+'" cy="'+p[1]+'" r="3.5" fill="'+C.glow+'"/><circle cx="'+p[0]+'" cy="'+p[1]+'" r="10" fill="'+C.glow+'" opacity=".25"/>';});return '<rect width="400" height="260" fill="#3E4048" opacity=".18"/>'+s+sh(200,46)+'<path d="M160 400 Q160 330 200 320 Q240 330 240 400 Z" fill="'+C.cream+'"/>';},
 basket:function(){var s=sh(200,90)+'<path d="M115 265 H285 L268 400 H132 Z" fill="'+C.wood+'"/>';for(var y=285;y<400;y+=18){s+='<path d="M'+(118+(y-265)*.12)+' '+y+' H'+(282-(y-265)*.12)+'" stroke="#a98757" stroke-width="3"/>';}for(var x=140;x<270;x+=22){s+='<path d="M'+x+' 268 L'+(x+(200-x)*.08)+' 398" stroke="#b8976a" stroke-width="2"/>';}return s+'<path d="M150 265 Q200 210 250 265" stroke="#a98757" stroke-width="6" fill="none"/>';},
 box:function(){return sh(200,95)+'<rect x="115" y="300" width="170" height="100" fill="'+C.sand+'"/><rect x="105" y="282" width="190" height="26" fill="'+C.clay+'"/><rect x="185" y="292" width="30" height="6" fill="'+C.brass+'"/>';},
 diffuser:function(){return '<path d="M200 230 C175 190 225 160 195 120 C175 95 210 70 200 50" stroke="#fff" stroke-width="14" fill="none" opacity=".7" stroke-linecap="round"/>'+sh(200,60)+'<path d="M145 400 Q140 300 200 260 Q260 300 255 400 Z" fill="'+C.cream+'" stroke="#d1c6b4"/><rect x="145" y="372" width="110" height="28" fill="'+C.wood+'"/>';},
 cups:function(){return sh(200,120)+'<rect x="95" y="300" width="90" height="100" rx="12" fill="'+C.cream+'" stroke="#d1c6b4"/><path d="M185 320 q28 0 28 25 q0 25 -28 25" stroke="#d1c6b4" stroke-width="8" fill="none"/><rect x="220" y="290" width="90" height="110" rx="12" fill="'+C.sand+'"/><path d="M310 312 q28 0 28 27 q0 27 -28 27" stroke="'+C.sand+'" stroke-width="8" fill="none"/><path d="M228 300 H302" stroke="#c7b598" stroke-width="3"/>';},
 plates:function(){var s=sh(200,140);[400,382,364,346].forEach(function(y,i){s+='<ellipse cx="200" cy="'+y+'" rx="140" ry="26" fill="'+(i%2?C.cream:"#EAE2D6")+'" stroke="#cfc2ad"/>';});return s+'<ellipse cx="200" cy="346" rx="96" ry="16" fill="none" stroke="'+C.clay+'" stroke-width="3" opacity=".7"/>';},
 glasses:function(){var s=sh(200,110);[[150,290],[250,270]].forEach(function(g){s+='<path d="M'+(g[0]-42)+' '+g[1]+' H'+(g[0]+42)+' L'+(g[0]+36)+' 400 H'+(g[0]-36)+' Z" fill="'+C.glass+'" stroke="#9aa9a2" stroke-width="1.5" opacity=".9"/>';for(var x=-30;x<=30;x+=10){s+='<path d="M'+(g[0]+x)+' '+(g[1]+6)+' L'+(g[0]+x*.86)+' 396" stroke="#fff" stroke-width="2" opacity=".7"/>';}});return s;},
 mat:function(){return '<path d="M80 402 L320 402 L292 320 L108 320 Z" fill="'+C.sage+'" opacity=".85"/><path d="M98 392 L302 392 L280 330 L120 330 Z" fill="none" stroke="'+C.cream+'" stroke-width="3"/>';},
 runner:function(){return '<path d="M20 402 L380 402 L340 300 L60 300 Z" fill="'+C.wood+'" opacity=".55"/><path d="M150 402 L250 402 L232 300 L168 300 Z" fill="'+C.cream+'"/><path d="M150 402 L168 300 M250 402 L232 300" stroke="'+C.clay+'" stroke-width="3"/>';},
 candlesticks:function(){var s=sh(200,90);[[160,190],[240,160]].forEach(function(c){s+='<circle cx="'+c[0]+'" cy="'+(c[1]-30)+'" r="26" fill="'+C.glow+'" opacity=".4"/><path d="M'+c[0]+' '+(c[1]-14)+' q-7 -12 0 -24 q7 12 0 24" fill="#E9A64B"/><rect x="'+(c[0]-8)+'" y="'+c[1]+'" width="16" height="'+(300-c[1])+'" fill="'+C.cream+'"/><path d="M'+(c[0]-14)+' 300 H'+(c[0]+14)+' L'+(c[0]+6)+' 380 H'+(c[0]-6)+' Z" fill="'+C.brass+'"/><ellipse cx="'+c[0]+'" cy="392" rx="34" ry="10" fill="'+C.brass+'"/>';});return s;},
 jars:function(){var s=sh(200,120);[[150,270,130],[255,300,100]].forEach(function(j){s+='<rect x="'+(j[0]-48)+'" y="'+j[1]+'" width="96" height="'+j[2]+'" rx="14" fill="'+C.glass+'" stroke="#9aa9a2" opacity=".9"/><rect x="'+(j[0]-44)+'" y="'+(j[1]+j[2]*.45)+'" width="88" height="'+(j[2]*.55-4)+'" rx="10" fill="'+C.sand+'"/><rect x="'+(j[0]-44)+'" y="'+(j[1]-16)+'" width="88" height="18" rx="4" fill="'+C.wood+'"/>';});return s;},
 utensils:function(){return '<path d="M175 300 L160 170 M200 300 V150 M225 300 L245 175" stroke="'+C.wood+'" stroke-width="7" stroke-linecap="round"/><ellipse cx="158" cy="160" rx="14" ry="20" fill="'+C.wood+'"/><rect x="236" y="150" width="20" height="30" rx="4" fill="'+C.ink+'"/>'+sh(200,60)+'<rect x="145" y="290" width="110" height="112" rx="10" fill="'+C.clay+'"/>';},
 dispenser:function(){return sh(200,55)+'<rect x="150" y="240" width="100" height="162" rx="22" fill="'+C.cream+'" stroke="#d1c6b4"/><rect x="186" y="208" width="28" height="34" fill="'+C.ink+'"/><path d="M196 210 V195 H245" stroke="'+C.ink+'" stroke-width="10" fill="none"/>';},
 towels:function(){var s=sh(200,120);[[330,"#F7F3EC"],[285,C.sage],[240,"#F7F3EC"]].forEach(function(t){s+='<rect x="90" y="'+t[0]+'" width="220" height="44" rx="8" fill="'+t[1]+'" stroke="#d6cbb9"/>';for(var x=105;x<300;x+=14){s+='<path d="M'+x+' '+(t[0]+6)+' V'+(t[0]+38)+'" stroke="#000" stroke-width="1" opacity=".07"/>';}});return s;},
 candle:function(){return '<circle cx="200" cy="250" r="70" fill="'+C.glow+'" opacity=".35"/><path d="M200 272 q-10 -18 0 -36 q10 18 0 36" fill="#E9A64B"/><path d="M200 300 V278" stroke="'+C.ink+'" stroke-width="2"/>'+sh(200,72)+'<rect x="130" y="290" width="140" height="112" rx="10" fill="'+C.clay+'"/><ellipse cx="200" cy="294" rx="64" ry="10" fill="'+C.cream+'"/><rect x="160" y="330" width="80" height="40" fill="'+C.cream+'" opacity=".85"/>';},
 hooks:function(){var s='<rect x="70" y="170" width="260" height="26" fill="'+C.wood+'"/>';[110,170,230,290].forEach(function(x){s+='<path d="M'+x+' 196 V222 q0 14 14 14" stroke="'+C.ink+'" stroke-width="5" fill="none" stroke-linecap="round"/>';});return s+'<path d="M170 222 V300" stroke="'+C.brass+'" stroke-width="3"/><circle cx="170" cy="310" r="12" fill="none" stroke="'+C.brass+'" stroke-width="4"/><path d="M290 236 Q250 300 270 380 H340 Q345 300 290 236 Z" fill="'+C.sand+'"/>';},
 deskmat:function(){return '<path d="M40 402 L360 402 L320 290 L80 290 Z" fill="'+C.leather+'"/><path d="M110 380 L260 380 L248 335 L122 335 Z" fill="#EDE7DD"/><ellipse cx="300" cy="360" rx="18" ry="24" fill="#EDE7DD"/>';},
 desklamp:function(){return '<circle cx="270" cy="270" r="80" fill="'+C.glow+'" opacity=".3"/>'+sh(170,60)+'<ellipse cx="170" cy="395" rx="56" ry="11" fill="'+C.ink+'"/><path d="M170 392 L130 260 L240 180" stroke="'+C.ink+'" stroke-width="8" fill="none" stroke-linecap="round"/><path d="M230 160 L290 205 L262 238 L210 190 Z" fill="'+C.ink+'"/><path d="M262 238 L285 210" stroke="'+C.glow+'" stroke-width="5"/>';},
 lantern:function(){return '<circle cx="200" cy="300" r="90" fill="'+C.glow+'" opacity=".3"/>'+sh(200,55)+'<circle cx="200" cy="205" r="16" fill="none" stroke="'+C.ink+'" stroke-width="5"/><path d="M155 225 H245 L235 245 H165 Z" fill="'+C.ink+'"/><rect x="160" y="245" width="80" height="140" fill="#F8EBCC" stroke="'+C.ink+'" stroke-width="6"/><rect x="150" y="385" width="100" height="16" fill="'+C.ink+'"/><circle cx="200" cy="320" r="18" fill="'+C.glow+'"/>';},
 curtain:function(){var s='<rect x="40" y="70" width="320" height="8" fill="'+C.ink+'"/>';for(var i=0;i<9;i++){var x=60+i*32;s+='<path d="M'+x+' 78 Q'+(x+10)+' 240 '+(x-4)+' 400 H'+(x+28)+' Q'+(x+40)+' 240 '+(x+30)+' 78 Z" fill="'+(i%2?"#F7F3EC":"#EFE8DC")+'" opacity=".92"/>';}return s+'<rect y="400" width="400" height="4" fill="#000" opacity=".05"/>';},
 ruground:function(){var s='<ellipse cx="200" cy="385" rx="165" ry="44" fill="'+C.wood+'"/>';for(var r=1;r<5;r++){s+='<ellipse cx="200" cy="385" rx="'+(165-r*32)+'" ry="'+(44-r*8.5)+'" fill="none" stroke="#A8875A" stroke-width="3"/>';}return s;},
 hanging:function(){var s='<path d="M200 0 L150 220 M200 0 L250 220" stroke="'+C.wood+'" stroke-width="3"/>';[[-50,280,25],[-25,300,10],[5,310,-5],[35,295,-15],[55,275,-25]].forEach(function(l){s+='<ellipse cx="'+(200+l[0])+'" cy="'+l[1]+'" rx="13" ry="40" fill="'+C.sage+'" transform="rotate('+l[2]+' '+(200+l[0])+' '+l[1]+')"/>';});return s+'<path d="M145 215 H255 L240 275 H160 Z" fill="'+C.cream+'" stroke="#d1c6b4"/>';}
};
function ill(kind, seed, opt){
  opt=opt||{};
  var bg = opt.bg || (seed % 2 ? "#E9E4DC" : "#ECE7DF");
  return '<svg viewBox="0 0 400 500" preserveAspectRatio="xMidYMid slice" aria-hidden="true"><rect width="400" height="500" fill="'+bg+'"/><g style="filter:grayscale(1)" opacity=".2" transform="translate(60 75) scale(.7)">'+(D[kind]?D[kind]():'')+'</g></svg>';
}
function scene(kinds, seed, bg){
  /* une "pièce" composée de plusieurs objets, en 800x500 */
  var s='<svg viewBox="0 0 800 500" preserveAspectRatio="xMidYMid slice" aria-hidden="true"><rect width="800" height="500" fill="#E6E0D7"/>';
  var xs=[60,280,500];
  kinds.forEach(function(k,i){ s+='<g style="filter:grayscale(1)" opacity=".2" transform="translate('+(xs[i]||0)+',90) scale(.6)">'+(D[k]?D[k]():'')+'</g>'; });
  return s+'</svg>';
}

/* ---------- Utilitaires ---------- */
function eur(n){return n.toFixed(2).replace(".",",")+" €";}
function esc(s){return String(s).replace(/[&<>"]/g,function(c){return {"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;"}[c];});}
function byId(id){return P[+id];}
function store(get,val){try{ if(get) return JSON.parse(localStorage.getItem("mo-cart")||"[]"); localStorage.setItem("mo-cart",JSON.stringify(val)); }catch(e){ return get?[]:undefined; }}
var state = {route:{v:"home"}, cart:store(true)||[], filters:{}};
state.recent=(function(){try{return JSON.parse(localStorage.getItem("mo-recent")||"[]");}catch(e){return [];}})();
function rememberView(id){state.recent=[id].concat(state.recent.filter(function(x){return x!==id;})).slice(0,8);try{localStorage.setItem("mo-recent",JSON.stringify(state.recent));}catch(e){}}
function norm(t){return String(t).toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g,"");}
function findP(q){var n=norm(q).trim();if(!n)return [];return P.filter(function(p){var h=norm(p.name+" "+p.sub+" "+p.type+" "+p.rooms.join(" ")+" "+p.univ);return n.split(/\s+/).every(function(w){return h.indexOf(w)>=0;});});}
function addDays(n){var d=new Date();var c=0;while(c<n){d.setDate(d.getDate()+1);var w=d.getDay();if(w!==0&&w!==6)c++;}return d.toLocaleDateString("fr-FR",{weekday:"long",day:"numeric",month:"long"});}

/* ---------- Navigation ---------- */
var ROOM_TOP={"Salon":["Lampes","Vases","Coussins","Plaids","Tapis","Miroirs"],"Chambre":["Linge de lit","Lampes","Plaids","Tapis","Rideaux"],"Cuisine":["Vaisselle","Verres","Linge de table","Rangement cuisine"],"Salle de bain":["Accessoires de salle de bain","Serviettes","Tapis","Bougies et diffuseurs"],"Entrée":["Miroirs","Patères et porte-clés","Plateaux et vide-poches","Paniers et boîtes"],"Bureau":["Lampes","Accessoires de bureau","Paniers et boîtes"],"Balcon et terrasse":["Éclairage extérieur","Pots et jardinières"]};
var ROOM_PIC={"Salon":"salon","Chambre":"chambre","Cuisine":"cuisine","Salle de bain":"sdb","Entrée":"entree","Bureau":"bureau","Balcon et terrasse":"balcon"};
function roomCats(r){var key="room:"+r;return '<span class="eyebrow">'+esc(r)+'</span>'+ROOM_TOP[r].map(function(c){return '<button data-go="col" data-p="'+esc(key)+'" data-chip="'+esc(c)+'">'+esc(c)+'</button>';}).join("")+'<button class="all" data-go="col" data-p="'+esc(key)+'">Tout voir</button>';}
function roomMega(){var rs=Object.keys(ROOMS);return '<div class="panel mega mega2"><div class="m2-rooms">'+rs.map(function(r,i){return '<button data-go="col" data-p="room:'+esc(r)+'" data-room-hover="'+esc(r)+'"'+(i===0?' class="on"':'')+'>'+esc(r)+'</button>';}).join("")+'</div><div class="m2-cats">'+roomCats(rs[0])+'</div><div class="m2-img"><img src="'+PIC[ROOM_PIC[rs[0]]]+'" alt=""></div></div>';}
function navHTML(){
  var r=state.route, cur=function(k){return r.v==="col"&&r.p&&r.p.indexOf(k)===0?' aria-current="true"':'';};
  function mega(kind,heads,catsFor){
    return '<div class="panel mega">'+heads.map(function(h){
      var key=kind+":"+h;
      return '<div class="mega-col"><button class="h" data-go="col" data-p="'+esc(key)+'">'+esc(h)+'</button>'+
        catsFor(h).map(function(c){return '<button data-go="col" data-p="'+esc(key)+'" data-chip="'+esc(c)+'">'+esc(c)+'</button>';}).join("")+
        '<button class="all" data-go="col" data-p="'+esc(key)+'">Tout voir</button></div>';
    }).join("")+'</div>';
  }
  function panel(items){return '<div class="panel">'+items.map(function(i){return '<button data-go="col" data-p="'+esc(i[0])+'">'+esc(i[1])+'</button>';}).join("")+'</div>';}
  return ''+
  '<div class="nav-item"><button data-go="col" data-p="special:noel"'+(r.p==="special:noel"?' aria-current="true"':'')+'>Noël</button></div>'+
  '<div class="nav-item"><button data-go="col" data-p="special:nouveautes"'+(r.p==="special:nouveautes"?' aria-current="true"':'')+'>Nouveautés</button></div>'+
  '<div class="nav-item mega"><button aria-haspopup="true"'+cur("room:")+'>Pièces</button>'+roomMega()+'</div>'+
  '<div class="nav-item"><button aria-haspopup="true"'+cur("type:")+'>Produits</button>'+panel(TYPES.map(function(t){return ["type:"+t,t];}))+'</div>'+
  '<div class="nav-item"><button aria-haspopup="true"'+cur("univ:")+'>Univers</button>'+panel(Object.keys(UNIV).map(function(t){return ["univ:"+t,t];}))+'</div>'+
  '<div class="nav-item"><button aria-haspopup="true"'+(["special:cadeaux","special:moins30","special:essentiels","special:compositions"].indexOf(r.p)>=0?' aria-current="true"':'')+'>Sélections</button>'+panel([["special:essentiels","Les essentiels"],["special:compositions","Compositions"],["special:cadeaux","Idées cadeaux à moins de 50 €"],["special:moins30","Petits plaisirs"]])+'</div>'+
  '<div class="nav-item"><button data-go="page" data-p="journal"'+(r.v==="page"&&r.p==="journal"?' aria-current="true"':'')+'>Journal</button></div>';
}
function card(p, opts){
  opts=opts||{};
  return '<div class="card" data-go="product" data-p="'+p.id+'" role="link" tabindex="0" aria-label="'+esc(p.name)+', '+eur(p.price)+'">'+
    '<div class="ill">'+(p.isLot?lotIll(p):ill(p.ill,p.id))+'</div>'+
    '<span class="tag">'+(p.isLot?'Composition · '+countItems(p)+' objets':(p.isNew?'Nouveau · ':'')+esc(opts.tag||p.sub))+'</span>'+
    '<span class="name">'+esc(p.name)+'</span>'+
    '<span class="price">'+eur(p.price)+(p.isLot?' <s class="was">'+eur(p.sum)+'</s>':'')+'</span></div>';
}

/* ---------- Vues ---------- */
function vHome(){
  var tabs={essentiels:["Les essentiels",function(p){return p.hero;}],compositions:["Compositions",function(p){return p.isLot;}],moins30:["Petits plaisirs",function(p){return p.price<30;}]};
  var tab=state.homeTab||"essentiels";
  var picks=P.filter(tabs[tab][1]);
  if(tab==="moins30") picks=picks.slice().sort(function(a,b){return a.price-b.price;});
  picks=picks.slice(0,4);
  var roomIll={"Salon":["vase","#DCD4C7"],"Chambre":["bed","#E3DCD1"],"Cuisine":["cups","#D6CDBF"],"Salle de bain":["towels","#E6E0D6"],"Entrée":["hooks","#DDD5C8"],"Bureau":["desklamp","#E1D9CC"],"Balcon et terrasse":["lantern","#D9D2C4"]};
  return ''+
  '<section class="hero2"><img src="'+HERO_IMG+'" alt="Salon haussmannien avec cheminée en marbre, canapé en bouclette, fauteuil en velours et table basse en travertin" width="1536" height="1024">'+
   '<div class="wrap"><div class="hero-txt"><span class="eyebrow" style="color:var(--ink)">Collection Hiver 2026</span><h1>La maison, <em>en douceur</em></h1><p>Des objets choisis pour aller ensemble, pièce par pièce, à des prix qui restent doux.</p><div style="display:flex;flex-wrap:wrap;gap:12px"><button class="btn" data-go="col" data-p="room:Salon">Découvrir la collection</button></div></div></div></section>'+
  '<section class="pledges" aria-label="Nos engagements"><div class="wrap"><span>Livraison offerte dès 49 €</span><span>Retours sous 30 jours</span><span>Paiement sécurisé</span></div></section>'+
  '<section class="wrap home-sec"><div class="sec-head"><h2>Par pièce</h2><button class="link" data-menu-rooms>Toutes les familles d\'objets</button></div>'+
   '<div class="room-strip">'+Object.keys(ROOMS).map(function(r){var pk={"Salon":"salon","Chambre":"chambre","Cuisine":"cuisine","Salle de bain":"sdb","Entrée":"entree","Bureau":"bureau","Balcon et terrasse":"balcon"}[r];return '<button class="room-mini" data-go="col" data-p="room:'+esc(r)+'"><span class="ill"><img src="'+PIC[pk]+'" alt="" loading="lazy"></span><span class="nm">'+esc(r)+'</span></button>';}).join("")+'</div></section>'+
  '<section class="wrap home-sec" style="padding-top:0"><div class="sec-head"><div class="tabs" role="tablist" aria-label="Sélections">'+Object.keys(tabs).map(function(k){return '<button role="tab" aria-selected="'+(k===tab)+'" data-tab="'+k+'">'+tabs[k][0]+'</button>';}).join("")+'</div><button class="link" data-go="col" data-p="special:'+tab+'">Tout voir</button></div>'+
   '<div class="grid four" role="tabpanel">'+picks.map(function(p){return card(p);}).join("")+'</div></section>'+
  '<section class="wrap home-sec" style="padding-top:0"><div class="split compact"><div class="ill"><img src="'+PIC.noel+'" alt="Table de fête dressée avec bougies, verres et branches de sapin" loading="lazy"></div><div class="txt"><span class="eyebrow">Édition limitée</span><h2>L\'édition <em>de Noël</em></h2><p style="font-size:17px;max-width:400px;margin:0">Bougeoirs, verres côtelés et lumières chaudes pour la table des fêtes. Jusqu\'au 24 décembre ou jusqu\'à épuisement.</p><button class="btn ghost" data-go="col" data-p="special:noel">Voir l\'édition</button></div></div></section>'+
  '<section class="wrap home-sec" style="padding-top:0"><div class="sec-head"><h2>Nos univers</h2></div><div class="univ compact">'+
   [["Bohème","boheme"],["Scandinave","scandi"],["Industriel","indus"],["Chic classique","chic"]].map(function(u){return '<button data-go="col" data-p="univ:'+u[0]+'"><img src="'+PIC[u[1]]+'" alt="" loading="lazy">'+'<span class="cap"><b>'+u[0]+'</b><i>'+UNIV[u[0]]+'</i></span></button>';}).join("")+'</div></section>'+
  newsletter();
}

function plink(name,label){var i=pid(name);return '<button class="plink" data-go="product" data-p="'+i+'">'+(label||name)+'</button>';}
function lotlink(name){for(var i=0;i<P.length;i++){if(P[i].isLot&&P[i].name===name)return '<button class="plink" data-go="product" data-p="'+i+'">'+name+'</button>';}return name;}
var ARTICLES = {
 vase:{cat:"Conseils",title:"Choisir un vase selon sa pièce",pic:"salon",lead:"Un vase bien choisi tient la pièce à lui seul, avec ou sans fleurs. Trois questions suffisent : la hauteur, la matière et l'endroit où il sera posé.",
  body:function(){return '<h2>La hauteur</h2><p>Les fleuristes conseillent un bouquet une fois et demie à deux fois plus haut que le vase. Pour de grandes branches d\'olivier ou d\'eucalyptus, prenez un vase haut et lourd, qui ne basculera pas. Pour une seule tige, un '+plink("Soliflore en verre","soliflore")+' suffit.</p>'+
  '<h2>La matière</h2><p>La céramique mate va avec les fleurs séchées et les branches : elle cache les tiges et donne un air naturel. Le verre met en valeur les tiges fraîches et la lumière, mais montre l\'eau, à changer souvent. Un '+plink("Vase en céramique")+' sans fleurs reste un objet de décoration à part entière.</p>'+
  '<h2>L\'endroit</h2><p>Sur une console d\'entrée ou une table basse, groupez par trois objets de hauteurs différentes : un vase, une bougie, un livre. Sur une table de chevet, restez petit pour garder la place d\'une lampe. Un '+plink("Plateau décoratif")+' rassemble l\'ensemble et évite l\'effet désordre.</p>'+
  '<h2>Trois associations qui marchent</h2><ul><li>Céramique mate et '+plink("Herbe de pampa séchée","herbe de pampa")+' : esprit bohème, aucun entretien.</li><li>Soliflore en verre et une tige de saison : simple, sur un rebord de fenêtre.</li><li>Vase en céramique vide sur une pile de livres : chic et sobre.</li></ul>';}},
 lumiere:{cat:"Inspiration",title:"Agrandir un petit salon avec la lumière",pic:"chambre",lead:"Un petit salon paraît étroit surtout quand il est mal éclairé. Avant de déplacer les meubles, jouez sur la lumière : c'est rapide et peu coûteux.",
  body:function(){return '<h2>Un miroir près de la fenêtre</h2><p>Placé sur un mur perpendiculaire à la fenêtre, un miroir renvoie la lumière du jour au fond de la pièce. Une forme arrondie comme le '+plink("Miroir arche")+' adoucit aussi les angles.</p>'+
  '<h2>Trois sources de lumière, à trois hauteurs</h2><p>Un plafonnier seul écrase la pièce. Ajoutez une lampe à poser à hauteur de table, comme la '+plink("Lampe champignon")+', et une lumière basse ou murale. Les coins éclairés repoussent visuellement les murs.</p>'+
  '<h2>Une lumière chaude le soir</h2><p>Préférez des ampoules à lumière chaude, autour de 2 700 K. Pour une ambiance de fin de journée, la '+plink("Lampe projecteur coucher de soleil")+' ou une '+plink("Guirlande lumineuse","guirlande")+' sur une étagère suffisent.</p>'+
  '<h2>Des voilages plutôt que des rideaux épais</h2><p>Un '+plink("Rideaux en voile de lin","voilage en lin")+' laisse passer la lumière tout en protégeant du vis-à-vis. Choisissez-le clair et assez long pour toucher le sol : la fenêtre paraît plus haute.</p>';}},
 cadeaux:{cat:"Cadeaux",title:"Offrir un bel objet à moins de 50 €",pic:"noel",lead:"Un cadeau de décoration réussi est utile, facile à placer et assez neutre pour aller partout. Voici nos idées selon la personne à qui vous l'offrez.",
  body:function(){return '<h2>Pour celui qui emménage</h2><p>Le '+plink("Vide-poche en céramique")+' et le '+plink("Range-clés mural")+' : on s\'en sert dès le premier jour.</p>'+
  '<h2>Pour celle qui dort mal</h2><p>La composition '+lotlink("Nuit étoilée")+' réunit le projecteur étoiles et une veilleuse, pour des couchers plus doux.</p>'+
  '<h2>Pour l\'amateur de thé ou de café</h2><p>Des '+plink("Tasses en céramique, lot de 4","tasses en céramique artisanale")+', qui rendent le petit-déjeuner plus agréable.</p>'+
  '<h2>Pour le télétravailleur</h2><p>Un '+plink("Sous-main en cuir")+' : il protège le bureau et donne tout de suite un air soigné.</p>'+
  '<h2>Pour un petit budget</h2><p>Une '+plink("Bougie parfumée")+' ou un '+plink("Soliflore en verre")+', à moins de 20 €.</p>'+
  '<p>Pour une livraison avant Noël, pensez à commander avant la date limite indiquée en haut du site.</p>';}}
};
function vArticle(){var a=ARTICLES[state.route.p]; if(!a) return vPage();
  var others=Object.keys(ARTICLES).filter(function(k){return k!==state.route.p;});
  return '<article class="art"><div class="art-hero"><img src="'+(PIC[a.pic]||HERO_IMG)+'" alt=""></div><div class="art-body wrap"><nav class="crumbs" aria-label="Fil d\'Ariane"><button data-go="home">Accueil</button><span>·</span><button data-go="page" data-p="journal">Le journal</button></nav><span class="eyebrow">'+a.cat+'</span><h1>'+a.title+'</h1><p class="lead">'+a.lead+'</p>'+a.body()+'</div></article>'+
  '<section class="band"><div class="wrap sec" style="padding-top:64px"><div class="sec-head"><h2>À lire aussi</h2></div><div class="journal">'+others.map(function(k){return jcard(k);}).join("")+'</div></div></section>';}
function jcard(k){var a=ARTICLES[k];return '<article><button class="jlink" data-go="article" data-p="'+k+'"><div class="ill"><img src="'+(PIC[a.pic]||HERO_IMG)+'" alt="" loading="lazy"></div><span class="eyebrow" style="font-size:11px">'+a.cat+'</span><h3>'+a.title+'</h3><span class="jlead">'+a.lead+'</span></button></article>';}
function journalCards(){
  return Object.keys(ARTICLES).map(jcard).join("");
  return [["Conseils","Choisir un vase selon sa pièce","vase","#E3DCD1"],["Inspiration","Agrandir un petit salon avec la lumière","round","#E6E0D6"],["Cadeaux","Offrir un bel objet à moins de 50 €","candle","#DDD5C8"]].map(function(a){
    return '<article><div class="ill">'+ill(a[2],0,{bg:a[3]})+'</div><span class="eyebrow" style="font-size:11px">'+a[0]+'</span><h3>'+a[1]+'</h3></article>';}).join("");
}
function newsletter(){
  return '<section class="band"><div class="wrap"><div class="news"><h2 style="font-size:40px">La lettre Oléane</h2><p style="margin:0;color:var(--muted)">Nouveautés, conseils et avant-premières. 10 € offerts sur votre première commande dès 60 €.</p><form data-form="news"><label for="nl" style="position:absolute;left:-9999px">Adresse e-mail</label><input id="nl" type="email" required placeholder="Votre adresse e-mail"><button type="submit">S\'inscrire</button></form><p class="note" id="nlMsg" hidden></p></div></div></section>';
}

function colDef(key){
  var t=key.split(":"),kind=t[0],name=t.slice(1).join(":");
  if(kind==="room") return {title:name, intro:ROOMS[name].intro, list:P.filter(function(p){return p.rooms.indexOf(name)>=0;}), chips:ROOM_TOP[name], chipKey:"sub", crumb:"Pièces"};
  if(kind==="type") return {title:name, intro:"Tous nos objets de la catégorie "+name.toLowerCase()+", toutes pièces confondues.", list:P.filter(function(p){return p.type===name;}), chips:catsWhere(function(p){return p.type===name;}), chipKey:"sub", crumb:"Produits"};
  if(kind==="univ") return {title:name, intro:UNIV[name], list:P.filter(function(p){return p.univ===name;}), chips:Object.keys(ROOMS), chipKey:"room", crumb:"Univers"};
  var s=SPECIAL[name]; return {title:s.title, intro:s.intro, list:P.filter(s.f), chips:Object.keys(ROOMS), chipKey:"room", crumb:"Sélections"};
}
var UNIV_PIC={"Bohème":"boheme","Scandinave":"scandi","Industriel":"indus","Chic classique":"chic"};
function colPic(key){var t=key.split(":"),k=t[0],n=t.slice(1).join(":");
  if(k==="room")return n==="Salon"?HERO_IMG:(["Chambre","Cuisine","Salle de bain"].indexOf(n)>=0?PIC[ROOM_PIC[n]]:null); if(k==="univ")return null; if(key==="special:noel")return null; if(key==="special:essentiels"||key==="special:compositions")return HERO_IMG; return null;}
function vCol(){
  var key=state.route.p, d=colDef(key), f=state.filters, pic=colPic(key);
  var isRoom=key.indexOf("room:")===0, rname=key.slice(5);
  var roomLots=isRoom&&!f.chip&&!f.max&&!f.univ?P.filter(function(p){return p.isLot&&p.rooms.indexOf(rname)>=0;}):[];
  var list=d.list.filter(function(p){
    if(roomLots.length&&p.isLot) return false;
    if(f.chip){ if(d.chipKey==="sub"&&p.sub!==f.chip) return false; if(d.chipKey==="room"&&p.rooms.indexOf(f.chip)<0) return false; }
    if(f.univ&&p.univ!==f.univ) return false;
    if(f.max&&p.price>=+f.max) return false;
    return true;
  });
  var s=f.sort||"rec";
  if(s==="asc") list.sort(function(a,b){return a.price-b.price;});
  if(s==="desc") list.sort(function(a,b){return b.price-a.price;});
  if(s==="new") list.sort(function(a,b){return (b.isNew?1:0)-(a.isNew?1:0);});
  if(s==="rec") list.sort(function(a,b){return (a.hero?0:a.isLot?2:1)-(b.hero?0:b.isLot?2:1);});
  var availChips=d.chips.filter(function(c){return d.list.some(function(p){return d.chipKey==="sub"?p.sub===c:p.rooms.indexOf(c)>=0;});});
  var showUniv=key.indexOf("univ:")!==0;
  var crumbs='<nav class="crumbs" aria-label="Fil d\'Ariane"><button data-go="home">Accueil</button><span>·</span><span>'+d.crumb+'</span><span>·</span><span>'+esc(d.title)+'</span></nav>';
  return (pic?'<section class="col-hero"><img src="'+pic+'" alt=""><div class="wrap"><div class="col-hero-txt">'+crumbs+'<h1>'+esc(d.title)+'</h1><p>'+esc(d.intro)+'</p></div></div></section><section class="wrap col-head col-head-slim">'
      :'<section class="wrap col-head">'+crumbs+'<h1>'+esc(d.title)+'</h1><p>'+esc(d.intro)+'</p>')+
    (availChips.length>1?'<div class="chips" role="group" aria-label="Filtrer"><button data-chip="" aria-pressed="'+(!f.chip)+'">Tout</button>'+availChips.map(function(c){return '<button data-chip="'+esc(c)+'" aria-pressed="'+(f.chip===c)+'">'+esc(c)+'</button>';}).join("")+'</div>':'')+
  '</section>'+
  (roomLots.length?'<section class="wrap lots-strip"><div class="sec-head"><div><span class="eyebrow">À composer</span><h2>Compositions pour '+(rname==="Salle de bain"?"la salle de bain":rname==="Entrée"?"l\u2019entrée":rname==="Balcon et terrasse"?"le balcon":"le "+rname.toLowerCase())+'</h2></div><button class="link" data-go="col" data-p="special:compositions">Toutes les compositions</button></div><div class="grid lots">'+roomLots.map(function(p){return card(p);}).join("")+'</div></section>':'')+
  '<section class="wrap" style="padding-bottom:96px"><div class="toolbar"><div class="f">'+
    (showUniv?'<label for="fUniv">Univers <select id="fUniv" data-filter="univ"><option value="">Tous</option>'+Object.keys(UNIV).map(function(u){return '<option'+(f.univ===u?' selected':'')+'>'+u+'</option>';}).join("")+'</select></label>':'')+
    '<label for="fMax">Prix <select id="fMax" data-filter="max"><option value="">Tous les prix</option><option value="20"'+(f.max==="20"?' selected':'')+'>Moins de 20 €</option><option value="30"'+(f.max==="30"?' selected':'')+'>Moins de 30 €</option><option value="50"'+(f.max==="50"?' selected':'')+'>Moins de 50 €</option></select></label>'+
    '</div><div class="f"><span class="n">'+list.length+' objet'+(list.length>1?'s':'')+'</span><label for="fSort">Trier <select id="fSort" data-filter="sort"><option value="rec">Notre sélection</option><option value="new"'+(s==="new"?' selected':'')+'>Nouveautés</option><option value="asc"'+(s==="asc"?' selected':'')+'>Prix croissant</option><option value="desc"'+(s==="desc"?' selected':'')+'>Prix décroissant</option></select></label></div></div>'+
    (list.length?'<div class="grid">'+list.map(function(p){return card(p);}).join("")+'</div>':'<p class="empty">Aucun objet ne correspond à ces filtres. <button class="link" data-reset>Réinitialiser</button></p>')+
  '</section>';
}
function vLot(p){
  var q=state.qty||1, u=[];
  p.items.forEach(function(i){var f=u.filter(function(x){return x.id===i;})[0];if(f)f.n++;else u.push({id:i,n:1});});
  return '<section class="wrap"><nav class="crumbs" style="justify-content:flex-start;padding-top:28px" aria-label="Fil d\'Ariane"><button data-go="home">Accueil</button><span>·</span><button data-go="col" data-p="special:compositions">Compositions</button></nav>'+
  '<div class="pdp"><div class="gallery"><div class="main lot-main">'+lotIll(p)+'</div></div>'+
  '<div class="info"><span class="eyebrow">Composition · '+countItems(p)+' objets</span><h1>'+esc(p.name)+'</h1>'+
   '<div class="pr"><b>'+eur(p.price)+'</b><small>au lieu de '+eur(p.sum)+' à l\'unité, soit '+eur(p.sum-p.price)+' d\'économie</small></div>'+
   '<p style="margin:0;font-size:16px;color:#3A3631;max-width:440px">'+esc(p.desc)+'</p>'+
   '<div class="lot-list"><span class="eyebrow">Dans cette composition</span>'+u.map(function(x){var it=P[x.id];return '<button data-go="product" data-p="'+it.id+'"><span>'+(x.n>1?x.n+' × ':'')+esc(it.name)+'</span><span>'+eur(it.price*x.n)+'</span></button>';}).join("")+'</div>'+
   '<div class="buy"><div class="qty"><button data-q="-1" aria-label="Retirer un">−</button><span aria-live="polite">'+q+'</span><button data-q="1" aria-label="Ajouter un">+</button></div><button class="btn" data-add="'+p.id+'" data-withqty="1">Ajouter au panier · '+eur(p.price*q)+'</button></div>'+
   '<div class="ship-est">'+ICO.truck+'<span>Livré entre le <b>'+addDays(7)+'</b> et le <b>'+addDays(12)+'</b><small>Livraison offerte · emballage renforcé</small></span></div>'+
   trustRow(true)+
  '</div></div></section>'+stickyBuy(p,q);
}
function stickyBuy(p,q){return '<div class="sticky-buy" role="region" aria-label="Achat rapide"><span><b>'+esc(p.name)+'</b><small>'+eur(p.price*q)+'</small></span><button class="btn" data-add="'+p.id+'" data-withqty="1">Ajouter</button></div>';}
function vProduct(){
  var p=byId(state.route.p); if(!p) return vHome();
  var seen=state.recent.filter(function(x){return x!==p.id&&P[x];}).slice(0,4);
  rememberView(p.id);
  var seenHTML=seen.length?'<section class="wrap sec" style="padding-top:64px"><div class="sec-head"><h2>Vus récemment</h2></div><div class="grid four">'+seen.map(function(x){return card(P[x]);}).join("")+'</div></section>':'';
  if(p.isLot) return vLot(p)+seenHTML;
  var lot=lotOf(p.id);
  var q=state.qty||1;
  var related=P.filter(function(x){return x.id!==p.id&&!x.isLot&&(x.rooms[0]===p.rooms[0]);}).sort(function(a,b){return (a.hero?0:1)-(b.hero?0:1);}).slice(0,4);
  var alt1=(p.id+1)%BG.length, alt2=(p.id+3)%BG.length;
  return '<section class="wrap"><nav class="crumbs" style="justify-content:flex-start;padding-top:28px" aria-label="Fil d\'Ariane"><button data-go="home">Accueil</button><span>·</span><button data-go="col" data-p="room:'+esc(p.rooms[0])+'">'+esc(p.rooms[0])+'</button><span>·</span><span>'+esc(p.sub)+'</span></nav>'+
  '<div class="pdp"><div class="gallery"><div class="main">'+ill(p.ill,p.id)+'</div><div class="thumb">'+ill(p.ill,alt1)+'</div><div class="thumb">'+ill(p.ill,alt2)+'</div></div>'+
  '<div class="info"><span class="eyebrow">Univers '+esc(p.univ.toLowerCase())+'</span><h1>'+esc(p.name)+'</h1>'+
   '<div class="pr"><b>'+eur(p.price)+'</b><small>'+(p.price>=50?'ou 3 × '+eur(p.price/3)+' sans frais':'Paiement en 3 fois sans frais dès 50 € de panier')+'</small></div>'+
   '<p style="margin:0;font-size:16px;color:#3A3631;max-width:440px">'+esc(p.desc)+'</p>'+
   (p.why?'<div class="why"><span class="eyebrow">Pourquoi on l\'aime</span><p>'+esc(p.why)+'</p></div>':'')+
   '<div class="buy"><div class="qty"><button data-q="-1" aria-label="Retirer un">−</button><span aria-live="polite">'+q+'</span><button data-q="1" aria-label="Ajouter un">+</button></div><button class="btn" data-add="'+p.id+'" data-withqty="1">Ajouter au panier · '+eur(p.price*q)+'</button></div>'+
   '<div class="ship-est">'+ICO.truck+'<span>Livré entre le <b>'+addDays(7)+'</b> et le <b>'+addDays(12)+'</b><small>Livraison suivie 4,90 €, offerte dès 49 € · emballage renforcé</small></span></div>'+
   trustRow(true)+
   '<p class="ask">Une question sur cet objet ? <button class="link" data-go="page" data-p="contact">Écrivez-nous</button>, réponse sous 24 h.</p>'+
   (lot?'<button class="lot-offer" data-go="product" data-p="'+lot.id+'"><span class="eyebrow">Existe en composition</span><b>'+esc(lot.name)+'</b><span>'+lot.items.length+' objets pour '+eur(lot.price)+' au lieu de '+eur(lot.sum)+'</span><span class="go">Voir la composition</span></button>':'')+
   '<div class="links-row"><button data-go="col" data-p="room:'+esc(p.rooms[0])+'">'+esc(p.rooms[0])+'</button><button data-go="col" data-p="type:'+esc(p.type)+'">'+esc(p.type)+'</button><button data-go="col" data-p="univ:'+esc(p.univ)+'">'+esc(p.univ)+'</button></div>'+
   '<div><details open><summary>Description</summary><p>'+esc(p.desc)+' Un objet choisi pour s\'accorder avec le reste de la collection '+esc(p.rooms[0].toLowerCase())+'.</p></details>'+
   '<details><summary>Dimensions et matière</summary><p>Dimensions, matière et entretien : à compléter à réception de l\'échantillon.</p></details>'+
   '<details><summary>Livraison et retours</summary><p>Livraison suivie, 4,90 €, offerte dès 49 €. Numéro de suivi envoyé par e-mail. Retours sous 30 jours ; un article abîmé est remplacé ou remboursé sur simple photo.</p></details></div>'+
  '</div></div></section>'+stickyBuy(p,q)+
  (related.length?'<section class="band"><div class="wrap sec" style="padding-top:80px"><div class="sec-head"><h2>Pour compléter la pièce</h2></div><div class="grid">'+related.map(function(x){return card(x);}).join("")+'</div></div></section>':'')+seenHTML;
}
function vSearch(){
  var q=(state.route.p||"").trim(), n=q.toLowerCase().normalize("NFD").replace(/[̀-ͯ]/g,"");
  var list=findP(q);
  return '<section class="wrap col-head"><h1>Recherche</h1><form data-form="search2" style="width:100%;max-width:520px;display:flex;border-bottom:1px solid var(--ink)"><label for="q2" style="position:absolute;left:-9999px">Rechercher</label><input id="q2" type="search" value="'+esc(q)+'" placeholder="Vase, lampe, plaid…" style="flex:1;min-width:0;height:52px;border:0;background:transparent;font:inherit;font-size:18px;color:var(--ink)"><button type="submit" class="link" style="border:0">Chercher</button></form>'+
   (q?'<p>'+list.length+' résultat'+(list.length>1?'s':'')+' pour « '+esc(q)+' »</p>':'<p>Tapez le nom d\'un objet, d\'une pièce ou d\'un univers.</p>')+'</section>'+
   '<section class="wrap" style="padding-bottom:96px">'+(list.length?'<div class="grid">'+list.map(function(p){return card(p);}).join("")+'</div>':(q?'<p class="empty">Aucun objet trouvé. Essayez « lampe », « vase » ou « salon ».</p>':''))+'</section>';
}
var PAGES = {
  histoire:["Notre histoire",'<p class="lead">Maison Oléane est née d\'une conviction simple : une maison bien décorée ne devrait pas coûter une fortune.</p><p>Je m\'appelle [Prénom]. Comme beaucoup, j\'ai longtemps hésité entre des objets beaux mais hors de prix et des objets bon marché qui ne tenaient pas leurs promesses. Maison Oléane cherche le juste milieu : des objets bien dessinés, à des prix qui restent doux.</p><h2>Comment je choisis les objets</h2><ul><li><b>La matière</b> : céramique, verre, lin, bois, osier. Pas de plastique qui imite autre chose.</li><li><b>L\'accord</b> : chaque objet doit aller avec les autres. C\'est pour cela que la boutique est rangée pièce par pièce.</li><li><b>Le prix juste</b> : la plupart des objets coûtent moins de 40 €.</li></ul><h2>D\'où viennent nos objets</h2><p>Ils sont fabriqués par des fournisseurs partenaires et expédiés depuis leurs entrepôts, en Europe ou en Asie selon l\'article. Je commande et teste chaque produit avant de le proposer. Le délai indiqué sur chaque fiche tient compte de l\'entrepôt d\'expédition.</p><h2>Mes engagements</h2><ul><li>Une réponse sous 24 h, par moi, du lundi au vendredi.</li><li>Les retours acceptés pendant 30 jours.</li><li>Un objet abîmé remplacé ou remboursé, sur simple photo.</li></ul><p class="sign">[Prénom], fondateur de Maison Oléane</p>'],
  livraison:["Livraison",'<p>Livraison suivie, 4,90 €, offerte dès 49 € d\'achat.</p><p>Chaque commande est préparée sous [1 à 3] jours ouvrés. Le délai de livraison dépend de l\'entrepôt d\'expédition ; la date estimée est indiquée sur chaque fiche produit.</p><p>Vous recevez un numéro de suivi par e-mail dès l\'expédition. Pour une livraison avant Noël, commandez avant le [date limite].</p>'],
  retours:["Retours et remboursements",'<p>Vous disposez de 30 jours après réception pour nous retourner un article, sans avoir à vous justifier. Écrivez-nous avec votre numéro de commande ; nous vous indiquons la marche à suivre.</p><p>Le remboursement est effectué sous 14 jours après réception du retour, sur le moyen de paiement utilisé.</p><p>Un article arrivé abîmé ? Envoyez-nous une photo sous 48 h : nous le remplaçons ou le remboursons, sans retour à faire.</p>'],
  faq:["Questions fréquentes",'<div class="faq">'+[["Combien coûte la livraison ?","4,90 € en livraison standard suivie, offerte dès 49 € d\'achat. La livraison express coûte 9,90 €."],["Quand vais-je recevoir ma commande ?","La date estimée est affichée sur chaque fiche produit et au moment de la commande. Vous recevez un numéro de suivi par e-mail dès l\'expédition."],["D\'où sont expédiés les produits ?","Depuis les entrepôts de nos fournisseurs partenaires, en Europe ou en Asie selon l\'article. Le délai affiché sur chaque fiche en tient compte."],["Puis-je payer en plusieurs fois ?","Oui, en 3 fois sans frais à partir de 50 € de panier."],["Comment suivre ma commande ?","Avec le lien envoyé par e-mail dès l\'expédition."],["Les objets fragiles sont-ils bien emballés ?","La céramique, le verre et les miroirs sont expédiés avec un emballage renforcé. Un objet abîmé est remplacé ou remboursé sur photo."],["Puis-je modifier ou annuler ma commande ?","Oui, tant qu\'elle n\'est pas expédiée. Écrivez-nous au plus vite avec votre numéro de commande."],["Un objet est arrivé abîmé, que faire ?","Envoyez-nous une photo sous 48 h. Nous le remplaçons ou le remboursons, sans retour à faire."],["Les couleurs sont-elles fidèles ?","Les dimensions et matières sont indiquées sur chaque fiche. Une légère différence de teinte peut exister selon votre écran ; si l\'objet ne vous convient pas, vous avez 30 jours pour le retourner."],["Livrez-vous hors de France ?","Pour l\'instant, nous livrons en France métropolitaine."],["Comment vous contacter ?","Par e-mail à '+MAIL+' ou via la page Contact. Réponse sous 24 h les jours ouvrés."]].map(function(x){return '<details><summary>'+x[0]+'</summary><p>'+x[1]+'</p></details>';}).join("")+'</div>'],
  contact:["Contact",'<p style="text-align:center">Une question sur un objet ou une commande ? Écrivez-nous à <b>'+MAIL+'</b> ou avec le formulaire ci-dessous. Nous répondons sous 24 h, du lundi au vendredi.</p><form class="form" data-form="contact"><label for="cName">Nom<input id="cName" required></label><label for="cMail">E-mail<input id="cMail" type="email" required></label><label for="cOrder">Numéro de commande (facultatif)<input id="cOrder"></label><label for="cMsg">Message<textarea id="cMsg" rows="5" required></textarea></label><button class="btn" type="submit">Envoyer</button><p class="note" id="cMsgOk" hidden></p></form>'],
  journal:["Le journal",'<p style="text-align:center">Conseils, inspirations et idées pour décorer chaque pièce.</p></div><div class="wrap" style="padding-bottom:96px"><div class="journal">'+journalCards()+'</div>'],
  cgv:["Conditions générales de vente",'<p class="lead">Conditions générales de vente applicables à toute commande passée sur maisonoleane.com.</p><p class="draft">Brouillon à faire relire par un professionnel avant la mise en ligne. Les informations entre crochets sont à compléter.</p><h2>1. Vendeur</h2><p>Le site est édité par [nom ou dénomination sociale], [forme juridique], immatriculé sous le numéro SIREN [numéro], dont le siège est situé [adresse]. Contact : contact@maisonoleane.com.</p><h2>2. Produits</h2><p>Les produits sont décrits avec la plus grande exactitude possible : dimensions, matières et photos. Une légère différence de teinte peut exister selon l\'écran. Les produits sont expédiés depuis les entrepôts de nos fournisseurs partenaires, en Europe ou en Asie selon l\'article.</p><h2>3. Prix</h2><p>Les prix sont indiqués en euros, toutes taxes comprises. Les frais de livraison sont précisés avant la validation de la commande : 4,90 € en livraison standard, offerte dès 49 € d\'achat, 9,90 € en livraison express.</p><h2>4. Commande</h2><p>La commande est ferme après validation du paiement. Une confirmation est envoyée par e-mail. Nous pouvons refuser une commande en cas de litige existant avec le client ou de suspicion de fraude.</p><h2>5. Paiement</h2><p>Le paiement s\'effectue par carte bancaire, Apple Pay, Google Pay, PayPal ou en plusieurs fois, sur une page sécurisée. Maison Oléane n\'a jamais accès aux données bancaires.</p><h2>6. Livraison</h2><p>La livraison est assurée en France métropolitaine. La date estimée est indiquée sur chaque fiche produit et lors de la commande. Un numéro de suivi est envoyé dès l\'expédition. En cas de retard important, le client peut nous contacter ; au-delà de la date limite convenue, il peut résoudre le contrat dans les conditions prévues par le Code de la consommation.</p><h2>7. Droit de rétractation</h2><p>Le client dispose d\'un délai légal de 14 jours à compter de la réception pour se rétracter, sans avoir à se justifier. Maison Oléane étend ce délai à 30 jours. Pour l\'exercer, il suffit de nous écrire à contact@maisonoleane.com avec le numéro de commande ; un formulaire type de rétractation est disponible sur demande. Le remboursement, frais de livraison initiaux inclus, intervient au plus tard 14 jours après la réception du retour ou de la preuve d\'expédition. [Préciser qui paie les frais de retour.]</p><h2>8. Produits abîmés</h2><p>Un produit arrivé abîmé est remplacé ou remboursé sur simple envoi d\'une photo dans les 48 heures suivant la réception.</p><h2>9. Garanties légales</h2><p>Tous les produits bénéficient de la garantie légale de conformité (articles L.217-3 et suivants du Code de la consommation), pendant 2 ans à compter de la livraison, et de la garantie des vices cachés (articles 1641 et suivants du Code civil).</p><h2>10. Service client</h2><p>Pour toute question ou réclamation : contact@maisonoleane.com. Réponse sous 24 heures, du lundi au vendredi.</p><h2>11. Médiation</h2><p>En cas de litige non résolu, le client peut recourir gratuitement au médiateur de la consommation : [nom et coordonnées du médiateur choisi]. Il peut aussi utiliser la plateforme européenne de règlement en ligne des litiges.</p><h2>12. Données personnelles</h2><p>Les données collectées sont traitées conformément à notre politique de confidentialité.</p><h2>13. Droit applicable</h2><p>Les présentes conditions sont soumises au droit français.</p>'],
  mentions:["Mentions légales",'<p class="draft">À compléter une fois l\'activité déclarée.</p><h2>Éditeur du site</h2><p>[Nom ou dénomination sociale], [forme juridique], SIREN [numéro], [adresse]. E-mail : contact@maisonoleane.com.</p><h2>Directeur de la publication</h2><p>[Nom et prénom].</p><h2>Hébergeur</h2><p>Shopify Inc., 151 O\'Connor Street, Ground floor, Ottawa, Ontario, K2P 2L8, Canada.</p><h2>Propriété intellectuelle</h2><p>Les textes et images du site appartiennent à Maison Oléane, sauf mention contraire. Toute reproduction sans accord est interdite.</p>'],
  confidentialite:["Politique de confidentialité",'<p class="lead">Comment Maison Oléane utilise vos données personnelles.</p><p class="draft">Brouillon à faire relire avant la mise en ligne. Les informations entre crochets sont à compléter.</p><h2>Responsable du traitement</h2><p>[Nom ou dénomination sociale], [adresse]. Contact : contact@maisonoleane.com.</p><h2>Données collectées</h2><ul><li>Pour la commande : nom, adresse, e-mail, téléphone, contenu de la commande.</li><li>Pour la newsletter : adresse e-mail, uniquement si vous vous inscrivez.</li><li>Pour les avis clients : prénom, avis et photo éventuelle, si vous en laissez un.</li></ul><h2>Pourquoi nous les utilisons</h2><ul><li>Traiter et livrer votre commande, et répondre à vos messages.</li><li>Vous envoyer la newsletter, si vous l\'avez demandé.</li><li>Respecter nos obligations comptables.</li></ul><h2>Qui y a accès</h2><p>Uniquement les prestataires nécessaires : la plateforme de la boutique (Shopify), le prestataire de paiement, les fournisseurs et transporteurs qui préparent et livrent la commande, l\'outil d\'avis clients. Vos données ne sont jamais vendues.</p><h2>Durée de conservation</h2><p>Les données de commande sont conservées le temps nécessaire à la relation client puis archivées selon les durées légales. L\'adresse de newsletter est conservée jusqu\'à votre désinscription.</p><h2>Vos droits</h2><p>Vous pouvez accéder à vos données, les rectifier, les supprimer ou vous opposer à leur utilisation en écrivant à contact@maisonoleane.com. Vous pouvez aussi saisir la CNIL.</p><h2>Cookies</h2><p>Le site utilise les cookies nécessaires au panier et au paiement. Les cookies de mesure d\'audience ou de publicité ne sont déposés qu\'avec votre accord.</p>']
};
function vPage(){var pg=PAGES[state.route.p]||PAGES.histoire;return '<div class="page wrap"><h1>'+pg[0]+'</h1>'+pg[1]+'</div>';}
function vCheckout(){
  var t=totals();
  if(!t.n) return '<div class="page wrap"><h1>Votre panier est vide</h1><p style="text-align:center"><button class="btn" data-go="home">Continuer mes achats</button></p></div>';
  var promo=state.promo&&t.sub>=60?10:0, ship=state.ship==="express"?9.90:t.ship, total=t.sub+ship-promo;
  var pm=state.pay||"card";
  function radio(name,val,cur,title,sub,right){return '<label class="opt'+(val===cur?' on':'')+'"><input type="radio" name="'+name+'" value="'+val+'" data-co="'+name+'"'+(val===cur?' checked':'')+'><span><b>'+title+'</b>'+(sub?'<small>'+sub+'</small>':'')+'</span>'+(right?'<em>'+right+'</em>':'')+'</label>';}
  return '<section class="wrap co">'+
  '<ol class="steps" aria-label="Étapes"><li class="done">Panier</li><li class="cur" aria-current="step">Livraison et paiement</li><li>Confirmation</li></ol>'+
  '<div class="co-grid"><form class="co-main" data-form="checkout" novalidate>'+
   '<fieldset><legend>1. Vos coordonnées</legend><label for="coMail">E-mail<input id="coMail" type="email" autocomplete="email" placeholder="Pour recevoir la confirmation et le suivi"></label></fieldset>'+
   '<fieldset><legend>2. Adresse de livraison</legend><div class="two"><label for="coFirst">Prénom<input id="coFirst" autocomplete="given-name"></label><label for="coLast">Nom<input id="coLast" autocomplete="family-name"></label></div><label for="coAddr">Adresse<input id="coAddr" autocomplete="street-address"></label><div class="two"><label for="coZip">Code postal<input id="coZip" autocomplete="postal-code" inputmode="numeric"></label><label for="coCity">Ville<input id="coCity" autocomplete="address-level2"></label></div><label for="coTel">Téléphone (pour le transporteur)<input id="coTel" type="tel" autocomplete="tel"></label></fieldset>'+
   '<fieldset><legend>3. Livraison</legend>'+
    radio("ship","std",state.ship==="express"?"express":"std","Standard suivie","Livré entre le "+addDays(7)+" et le "+addDays(12),t.ship?eur(t.ship):"Offerte")+
    radio("ship","express",state.ship==="express"?"express":"std","Express suivie","Livré entre le "+addDays(4)+" et le "+addDays(6),"9,90 €")+
   '</fieldset>'+
   '<fieldset><legend>4. Paiement</legend>'+
    radio("pay","card",pm,"Carte bancaire","CB, Visa, Mastercard")+
    radio("pay","paypal",pm,"PayPal","")+
    radio("pay","wallet",pm,"Apple Pay ou Google Pay","")+
    radio("pay","x3",pm,"Paiement en 3 fois sans frais",t.sub>=50?"3 × "+eur(total/3):"Disponible dès 50 € d\'achat")+
    '<p class="secure">'+ICO.lock+' Le paiement se fait sur une page sécurisée et chiffrée. Maison Oléane n\'a jamais accès à vos données bancaires.</p>'+
   '</fieldset>'+
   '<button class="btn pay-btn" type="submit">'+ICO.lock+' Payer '+eur(total)+'</button>'+
   '<p class="co-legal">En validant, vous acceptez nos <button type="button" class="link" data-go="page" data-p="cgv">conditions de vente</button>. Vous disposez de 30 jours pour changer d\'avis.</p>'+
   '<p class="note" id="coMsg" hidden></p>'+
  '</form>'+
  '<aside class="co-side"><h2>Votre commande</h2>'+
   state.cart.map(function(l){var p=byId(l.id);return '<div class="co-line"><span class="ill">'+(p.isLot?lotIll(p):ill(p.ill,p.id))+'<i>'+l.qty+'</i></span><span class="nm2">'+esc(p.name)+(p.isLot?'<small>Composition · '+p.items.length+' objets</small>':'<small>'+esc(p.sub)+'</small>')+'</span><span>'+eur(p.price*l.qty)+'</span></div>';}).join("")+
   '<form class="promo" data-form="promo"><label for="coPromo" class="sr">Code promo</label><input id="coPromo" placeholder="Code promo" value="'+(state.promo?'BIENVENUE':'')+'"><button class="link" type="submit">Appliquer</button></form>'+
   (state.promoMsg?'<p class="promo-msg">'+state.promoMsg+'</p>':'')+
   '<div class="totals"><div><span>Sous-total</span><span>'+eur(t.sub)+'</span></div>'+(promo?'<div><span>Code BIENVENUE</span><span>−'+eur(promo)+'</span></div>':'')+'<div><span>Livraison</span><span>'+(ship?eur(ship):"Offerte")+'</span></div><div class="grand"><span>Total TTC</span><span>'+eur(total)+'</span></div><small style="color:var(--muted)">TVA incluse</small></div>'+
   trustRow(false)+payBadges()+
   '<p class="co-help">Besoin d\'aide ? '+MAIL+' — réponse sous 24 h, du lundi au vendredi.</p>'+
  '</aside></div></section>';
}
/* ---------- Panier ---------- */
function totals(){var sub=0,n=0;state.cart.forEach(function(l){var p=byId(l.id);if(p){sub+=p.price*l.qty;n+=l.qty;}});var ship=(n===0||sub>=49)?0:4.90;return {sub:sub,n:n,ship:ship,total:sub+ship};}
function saveCart(){store(false,state.cart);var t=totals(),c=document.getElementById("count");c.hidden=!t.n;c.textContent=t.n;}
function addToCart(id,qty){var l=state.cart.filter(function(x){return x.id===id;})[0];if(l)l.qty+=qty;else state.cart.push({id:id,qty:qty});saveCart();openCart();}
function suggest(left){
  var inCart=state.cart.map(function(l){return l.id;});
  var room=state.cart.length?byId(state.cart[state.cart.length-1].id).rooms[0]:"Salon";
  var pool=P.filter(function(p){return !p.isLot&&inCart.indexOf(p.id)<0;});
  var fit=pool.filter(function(p){return p.price>=left;}).sort(function(a,b){return (a.rooms.indexOf(room)>=0?0:1)-(b.rooms.indexOf(room)>=0?0:1)||a.price-b.price;});
  return fit.slice(0,3);
}
function cartHTML(){
  var t=totals(), left=Math.max(0,49-t.sub), sug=(t.n&&left>0)?suggest(left):[];
  return '<div class="scrim" data-close></div><aside class="drawer right" role="dialog" aria-modal="true" aria-label="Panier"><div class="drawer-head"><h2>Panier</h2><button class="icon-btn" data-close aria-label="Fermer le panier"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.3" aria-hidden="true"><path d="M6 6l12 12M18 6L6 18"/></svg></button></div>'+
   (t.n?'<div class="ship-bar">'+(left>0?'Plus que <b>'+eur(left)+'</b> pour la livraison offerte':'La livraison est offerte')+'<div class="track"><i style="width:'+Math.min(100,t.sub/49*100).toFixed(0)+'%"></i></div></div>'+
     state.cart.map(function(l){var p=byId(l.id);return '<div class="line"><div class="ill">'+ill(p.ill,p.id)+'</div><div><div class="nm">'+esc(p.name)+'</div><div style="font-size:14px;color:var(--muted)">'+eur(p.price)+'</div><div class="small-qty"><button data-cq="'+p.id+':-1" aria-label="Retirer un">−</button><span style="min-width:24px;text-align:center">'+l.qty+'</span><button data-cq="'+p.id+':1" aria-label="Ajouter un">+</button></div><br><button class="rm" data-rm="'+p.id+'">Retirer</button></div><div>'+eur(p.price*l.qty)+'</div></div>';}).join("")+
     (sug.length?'<div class="sug"><span class="eyebrow">Pour la livraison offerte</span>'+sug.map(function(p){return '<div class="sug-row"><span class="ill">'+ill(p.ill,p.id)+'</span><span class="nm2">'+esc(p.name)+'<small>'+eur(p.price)+'</small></span><button class="link" data-add="'+p.id+'">Ajouter</button></div>';}).join("")+'</div>':'')+
     '<div class="totals"><div><span>Sous-total</span><span>'+eur(t.sub)+'</span></div><div><span>Livraison</span><span>'+(t.ship?eur(t.ship):"Offerte")+'</span></div><div class="grand"><span>Total TTC</span><span>'+eur(t.total)+'</span></div><button class="btn" data-checkout style="margin-top:12px">'+ICO.lock+' Commander en toute sécurité</button><span class="cart-sure">Retours gratuits sous 30 jours · Paiement en 3 fois dès 50 €</span>'+payBadges()+'</div>'
   :'<p style="color:var(--muted)">Votre panier est vide.</p><button class="btn ghost" data-go="col" data-p="special:essentiels">Voir les essentiels</button>')+
  '</aside>';
}
function openCart(){var o=document.getElementById("overlay");o.innerHTML=cartHTML();var b=o.querySelector(".drawer button");if(b)b.focus();}
function menuHTML(){
  function acc(t,kind,heads,catsFor){
    return '<div class="m-group"><strong>'+t+'</strong>'+heads.map(function(h){var key=kind+":"+h;
      return '<details><summary>'+esc(h)+'</summary><button data-go="col" data-p="'+esc(key)+'">Tout voir</button>'+catsFor(h).map(function(c){return '<button data-go="col" data-p="'+esc(key)+'" data-chip="'+esc(c)+'">'+esc(c)+'</button>';}).join("")+'</details>';}).join("")+'</div>';
  }
  function g(t,items){return '<div class="m-group"><strong>'+t+'</strong>'+items.map(function(i){return '<button data-go="col" data-p="'+esc(i[0])+'">'+esc(i[1])+'</button>';}).join("")+'</div>';}
  return '<div class="scrim" data-close></div><aside class="drawer left" role="dialog" aria-modal="true" aria-label="Menu"><div class="drawer-head"><span class="serif" style="font-size:30px">Menu</span><button class="icon-btn" data-close aria-label="Fermer le menu"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.3" aria-hidden="true"><path d="M6 6l12 12M18 6L6 18"/></svg></button></div>'+
   '<form data-form="search3" style="display:flex;border-bottom:1px solid var(--ink);margin-bottom:14px"><label for="q3" style="position:absolute;left:-9999px">Rechercher</label><input id="q3" type="search" placeholder="Rechercher un objet" style="flex:1;min-width:0;height:48px;border:0;background:transparent;font:inherit;color:var(--ink)"></form>'+
   g("Sélections",[["special:essentiels","Les essentiels"],["special:compositions","Compositions"],["special:noel","Noël à la maison"],["special:nouveautes","Nouveautés"],["special:moins30","Petits plaisirs"],["special:cadeaux","Idées cadeaux"]])+
   acc("Pièces","room",Object.keys(ROOMS),function(r){return ROOM_TOP[r];})+
   g("Produits",TYPES.map(function(r){return ["type:"+r,r];}))+
   g("Univers",Object.keys(UNIV).map(function(r){return ["univ:"+r,r];}))+
   '<div class="m-group"><strong>La maison</strong><button data-go="page" data-p="journal">Le journal</button><button data-go="page" data-p="histoire">Notre histoire</button><button data-go="page" data-p="contact">Contact</button></div></aside>';
}
var tt;
function toast(msg){var t=document.getElementById("toast");t.textContent=msg;t.hidden=false;clearTimeout(tt);tt=setTimeout(function(){t.hidden=true;},2200);}

/* ---------- Rendu ---------- */
function render(){
  var r=state.route, html;
  if(r.v==="col") html=vCol(); else if(r.v==="product") html=vProduct(); else if(r.v==="search") html=vSearch(); else if(r.v==="page") html=vPage(); else if(r.v==="checkout") html=vCheckout(); else if(r.v==="article") html=vArticle(); else html=vHome();
  document.getElementById("main").innerHTML=html;
  document.body.classList.toggle("has-sticky", r.v==="product");
  document.body.classList.toggle("is-checkout", r.v==="checkout");
  document.getElementById("nav").innerHTML=navHTML();
  var titles={home:"Maison Oléane"};
  document.title = r.v==="product"? byId(r.p).name+" — Maison Oléane" : r.v==="col"? colDef(r.p).title+" — Maison Oléane" : r.v==="article"&&ARTICLES[r.p]? ARTICLES[r.p].title+" — Maison Oléane" : "Maison Oléane";
}
function go(v,p,chip){
  state.route={v:v,p:p}; state.filters=chip?{chip:chip}:{}; state.qty=1;
  var ql=document.getElementById("qList"); if(ql){ql.hidden=true;} if(v!=="search"){var qi=document.getElementById("q"); if(qi) qi.value="";}
  document.getElementById("overlay").innerHTML="";
  render(); window.scrollTo(0,0);
  var h=document.querySelector("main h1"); if(h){h.setAttribute("tabindex","-1");h.focus({preventScroll:true});}
}

document.addEventListener("click",function(e){
  var t=e.target;
  var add=t.closest("[data-add]");
  if(add){e.preventDefault();e.stopPropagation();addToCart(+add.dataset.add, add.dataset.withqty?(state.qty||1):1);return;}
  var q=t.closest("[data-q]");
  if(q){state.qty=Math.max(1,(state.qty||1)+(+q.dataset.q));var y=window.scrollY;render();window.scrollTo(0,y);return;}
  var cq=t.closest("[data-cq]");
  if(cq){var a=cq.dataset.cq.split(":"),id=+a[0],d=+a[1];state.cart.forEach(function(l){if(l.id===id)l.qty+=d;});state.cart=state.cart.filter(function(l){return l.qty>0;});saveCart();openCart();return;}
  var rm=t.closest("[data-rm]");
  if(rm){state.cart=state.cart.filter(function(l){return l.id!==+rm.dataset.rm;});saveCart();openCart();return;}
  var tb=t.closest("[data-tab]");
  if(tb){state.homeTab=tb.dataset.tab;var y=window.scrollY;render();window.scrollTo(0,y);var nb=document.querySelector('[data-tab="'+tb.dataset.tab+'"]');if(nb)nb.focus();return;}
  if(t.closest("[data-menu-rooms]")){document.getElementById("overlay").innerHTML=menuHTML();var d=document.querySelector(".drawer details");if(d)d.open=true;return;}
  if(t.closest("[data-checkout]")){go("checkout");return;}
  if(t.closest("[data-cart]")){openCart();return;}
  if(t.closest("[data-menu]")){document.getElementById("overlay").innerHTML=menuHTML();return;}
  if(t.closest("[data-close]")){document.getElementById("overlay").innerHTML="";return;}
  var g=t.closest("[data-go]");
  if(g){e.preventDefault();var v=g.dataset.go;if(v==="search"){go("search","");return;}go(v,g.dataset.p,g.dataset.chip);if(document.activeElement&&document.activeElement.blur&&g.closest(".panel"))document.activeElement.blur();return;}
  var chip=t.closest("[data-chip]");
  if(chip){state.filters.chip=chip.dataset.chip;render();return;}
  if(t.closest("[data-reset]")){state.filters={};render();return;}
});
document.addEventListener("mouseover",roomHover);document.addEventListener("focusin",roomHover);
function roomHover(e){var b=e.target.closest&&e.target.closest("[data-room-hover]");if(!b)return;var pn=b.closest(".mega2");if(!pn)return;var r=b.dataset.roomHover;
  pn.querySelectorAll("[data-room-hover]").forEach(function(x){x.classList.toggle("on",x===b);});
  pn.querySelector(".m2-cats").innerHTML=roomCats(r);pn.querySelector(".m2-img img").src=PIC[ROOM_PIC[r]];}

document.addEventListener("input",function(e){
  if(e.target.id!=="q")return;
  var box=document.getElementById("qList"), v=e.target.value, res=findP(v).slice(0,5);
  if(!v.trim()){box.hidden=true;e.target.setAttribute("aria-expanded","false");return;}
  box.innerHTML=(res.length?res.map(function(p){return '<button type="button" data-go="product" data-p="'+p.id+'"><span>'+esc(p.name)+'<small>'+esc(p.isLot?"Composition":p.rooms[0]+" · "+p.sub)+'</small></span><b>'+eur(p.price)+'</b></button>';}).join(""):'<p>Aucun objet pour « '+esc(v)+' »</p>')+
    '<button type="submit" class="qall">Voir tous les résultats</button>';
  box.hidden=false;e.target.setAttribute("aria-expanded","true");
});
document.addEventListener("click",function(e){var box=document.getElementById("qList");if(box&&!e.target.closest(".search-form")){box.hidden=true;}},true);
document.addEventListener("keydown",function(e){
  if(e.key==="Escape"){document.getElementById("overlay").innerHTML="";}
  if(e.key==="Enter"&&e.target.matches&&e.target.matches(".card[data-go]")){go("product",e.target.dataset.p);}
});
document.addEventListener("change",function(e){
  var co=e.target.closest("[data-co]"); if(co){ if(co.dataset.co==="ship") state.ship=co.value; else state.pay=co.value; var y=window.scrollY; render(); window.scrollTo(0,y); return; }
  var f=e.target.closest("[data-filter]"); if(f){state.filters[f.dataset.filter]=f.value; render();}
});
document.addEventListener("submit",function(e){
  e.preventDefault();
  var f=e.target, k=f.dataset.form||f.id;
  if(k==="searchForm"){var qv=document.getElementById("q").value;document.getElementById("qList").hidden=true;go("search",qv);return;}
  if(k==="search2"){go("search",document.getElementById("q2").value);return;}
  if(k==="search3"){go("search",document.getElementById("q3").value);return;}
  if(k==="promo"){var v=(document.getElementById("coPromo").value||"").trim().toUpperCase();var t=totals();
    if(v==="BIENVENUE"&&t.sub>=60){state.promo=true;state.promoMsg="Code appliqué : 10 € de réduction.";}
    else if(v==="BIENVENUE"){state.promo=true;state.promoMsg="Ce code s'applique dès 60 € d'achat : plus que "+eur(60-t.sub)+".";}
    else {state.promo=false;state.promoMsg=v?"Ce code n'existe pas. Vérifiez l'orthographe.":"";}
    var y=window.scrollY;render();window.scrollTo(0,y);return;}
  if(k==="checkout"){var m=document.getElementById("coMsg");m.hidden=false;m.textContent="Démonstration : sur la boutique en ligne, ce bouton ouvre le paiement sécurisé Shopify. Aucune commande n'a été passée.";return;}
  if(k==="news"){var m=document.getElementById("nlMsg");m.hidden=false;m.textContent="Merci. Sur la boutique en ligne, le code BIENVENUE vous serait envoyé par e-mail (démonstration : aucun envoi).";f.reset();return;}
  if(k==="contact"){var c=document.getElementById("cMsgOk");c.hidden=false;c.textContent="Merci, votre message est prêt. Sur la boutique en ligne, il nous serait transmis (démonstration : aucun envoi).";f.reset();return;}
});
function fitHeader(){var s=document.getElementById("mSearch");if(s)s.style.display=window.innerWidth<=900?"inline-flex":"none";}
window.addEventListener("resize",fitHeader);
fitHeader(); saveCart(); render();
})();
