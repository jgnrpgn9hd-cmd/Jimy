# Génère une page de vente (maquette) par produit du tableau Scutify, puis les rend en images téléphone.
import html, os, json
ICI = os.path.dirname(os.path.abspath(__file__))
e = html.escape

SITES = [
dict(n=1, fichier="01_pilates", acc="#9C4459", fond="#FBF6F4", doux="#F1E3E0",
 bandeau="Programme vidéo de 30 jours inclus avec chaque kit",
 niche="Pilates à la maison", h1="Le Pilates chez toi, pour le prix d'un cours.",
 sous="Une barre démontable, des élastiques et un programme vidéo de 30 jours. 20 minutes par jour, dans ton salon.",
 prix="29,90 €", ancre="au lieu de 20 à 35 € la séance en studio",
 puces=["Léger et démontable", "Tous niveaux", "Se range dans un tiroir"],
 photo="Une femme fait un exercice avec la barre dans un salon lumineux",
 preuve="Le Pilates est l'activité la plus réservée sur ClassPass pour la 3e année de suite (+66 % en 2025).",
 pb_titre="Tu as envie de faire du Pilates, mais…",
 pbs=[("Les cours coûtent cher", "20 à 35 € la séance : deux cours par semaine, ça chiffre vite."),
      ("Les créneaux sont complets", "Entre le travail, le trajet et les places prises, tu n'y vas jamais."),
      ("Le regard des autres", "Débuter devant un groupe, ce n'est pas facile. Chez toi, personne ne te voit.")],
 kit_titre="Ce que tu reçois",
 kit=[("Une barre démontable", "elle se visse en quelques secondes"), ("Des élastiques de résistance", "jambes, fessiers, dos, bras"),
      ("Des boucles pour les pieds", "pour tenir la barre bien en place"), ("Le programme de 30 jours", "en vidéo, avec le QR code de la boîte")],
 comp=("Cours en studio", [("Prix", "20 à 35 € la séance", "29,90 € une fois"), ("Horaires", "Créneaux complets", "Quand tu veux"), ("Trajet", "À chaque cours", "Aucun")]),
 faq=[("Je débute, c'est pour moi ?", "Oui, la semaine 1 reprend les bases pas à pas."), ("Il faut de la place ?", "La place d'un tapis de sol.")],
 fin="Ton premier cours commence ce soir."),
dict(n=2, fichier="02_blanchiment", acc="#1F5FA8", fond="#F5F8FC", doux="#E3ECF7",
 bandeau="Gel sans peroxyde · 10 minutes par jour, chez toi",
 niche="Sourire", h1="Un sourire plus blanc, sans passer chez le dentiste.",
 sous="Une gouttière LED et un gel sans peroxyde. 10 minutes par jour, chez toi, pendant que tu regardes une série.",
 prix="39,90 €", ancre="au lieu de 500 à 1 200 € chez le dentiste",
 puces=["Gel PAP sans peroxyde", "10 minutes par jour", "Rechargeable en USB"],
 photo="Gros plan d'un sourire avant / après, lumière naturelle",
 preuve="3 Français sur 4 jugent de belles dents aussi importantes qu'une belle peau ou une belle silhouette (OpinionWay, 2018).",
 pb_titre="Ton sourire te complexe ?",
 pbs=[("Le café, le thé, le tabac", "Les dents jaunissent petit à petit, même en se brossant bien."),
      ("Tu souris bouche fermée", "Sur les photos, en rendez-vous, au travail : tu te caches."),
      ("Le dentiste coûte une fortune", "500 à 1 200 € le blanchiment, et ce n'est pas remboursé.")],
 kit_titre="Ce que tu reçois",
 kit=[("La gouttière LED", "lumière bleue, se branche au téléphone ou en USB"), ("Les seringues de gel PAP", "sans peroxyde"),
      ("La boîte de rangement", "pour voyager avec"), ("Le guide d'utilisation", "10 minutes par séance")],
 comp=("Chez le dentiste", [("Prix", "500 à 1 200 €", "39,90 €"), ("Rendez-vous", "Plusieurs séances au cabinet", "Chez toi, quand tu veux"), ("Remboursé", "Non", "—")]),
 faq=[("C'est efficace pour tout le monde ?", "Les résultats varient selon les personnes et la couleur de départ des dents."),
      ("J'ai les dents sensibles ou des soins en cours", "Demande d'abord l'avis de ton dentiste.")],
 fin="Ton nouveau sourire commence ce soir."),
dict(n=3, fichier="03_lunch_box_chauffante", acc="#C2531B", fond="#FBF6F1", doux="#F3E3D6",
 bandeau="Prise secteur + prise voiture incluses",
 niche="Repas au travail", h1="Mange chaud partout. Sans micro-ondes.",
 sous="Tu la branches le matin, à midi ton plat maison est chaud : au bureau, sur le chantier ou dans le camion.",
 prix="34,90 €", ancre="remboursée en moins d'une semaine de déjeuners",
 puces=["Intérieur en inox", "Secteur et voiture", "1,5 litre"],
 photo="Un plat qui fume, posé sur un bureau ou sur le tableau de bord d'un camion",
 preuve="Environ la moitié des salariés dépensent 11 à 15 € par déjeuner (enquête Deskeo).",
 pb_titre="Ta pause déj', c'est la galère ?",
 pbs=[("Pas de micro-ondes", "Sur un chantier, en voiture, dans certains bureaux : impossible de réchauffer."),
      ("La queue au micro-ondes", "10 minutes d'attente sur ta pause."),
      ("Manger dehors coûte cher", "11 à 15 € par jour, c'est plus de 200 € par mois.")],
 kit_titre="Ce que tu reçois",
 kit=[("La lunch box chauffante", "intérieur en inox, 1,5 L"), ("Le câble secteur", "prise européenne"),
      ("Le câble voiture", "12 V / 24 V"), ("Les couverts", "[À CONFIRMER AVEC LE FOURNISSEUR]")],
 comp=("Manger dehors", [("Prix par repas", "11 à 15 €", "Quelques euros"), ("Sur un an", "Plus de 2 000 €", "34,90 € une fois"), ("Ce que tu manges", "Ce qu'il y a", "Ta cuisine")]),
 faq=[("Combien de temps pour chauffer ?", "[DURÉE À CONFIRMER AVEC LE FOURNISSEUR]"), ("Ça se lave comment ?", "Le bac en inox s'enlève et se lave facilement.")],
 fin="Ton déjeuner chaud, pour le prix d'un café."),
dict(n=4, fichier="04_creoles_waterproof", acc="#8A6A1F", fond="#FBF8F2", doux="#F0E8D8",
 bandeau="Waterproof · Ne noircit pas · Écrin offert",
 niche="Bijoux anti-oxydation", h1="Des bijoux dorés que tu n'enlèves jamais.",
 sous="Créoles en acier inoxydable doré. Douche, mer, piscine, sport : elles restent dorées.",
 prix="29,90 €", ancre="créoles épaisses, écrin offert",
 puces=["Acier inoxydable doré", "Résiste à l'eau", "Ne verdit pas la peau"],
 photo="Créoles portées, gros plan oreille, gouttes d'eau sur la peau",
 preuve="En Europe, environ 10 % des femmes sont allergiques au nickel (Que Choisir).",
 pb_titre="Tes bijoux te lâchent ?",
 pbs=[("Ils noircissent", "Au bout de quelques semaines, la dorure part et le bijou devient terne."),
      ("Ils laissent des traces vertes", "Le métal en dessous réagit avec la peau."),
      ("Il faut tout enlever", "Pour la douche, la mer, le sport… et tu finis par les perdre.")],
 kit_titre="Ce que tu reçois",
 kit=[("Les créoles", "acier inoxydable doré par PVD"), ("L'écrin en velours", "prêt à offrir"),
      ("La carte d'entretien", "pour les garder brillantes"), ("Une garantie", "[DURÉE À DÉFINIR APRÈS TESTS]")],
 comp=("Bijou fantaisie", [("Matière", "Laiton + fine dorure", "Acier inoxydable doré"), ("Sous la douche", "Noircit", "Reste doré"), ("Sur la peau", "Traces vertes possibles", "Non")]),
 faq=[("C'est du plaqué or ?", "Non : c'est de l'acier inoxydable doré, plus résistant à l'eau."), ("Et le nickel ?", "Conforme à la limite européenne : [RAPPORT DE TEST À JOINDRE].")],
 fin="Le look de l'or. Sans jamais l'enlever."),
dict(n=5, fichier="05_pommeau_filtrant", acc="#0F6E75", fond="#F2F8F8", doux="#DDEDEE",
 bandeau="Installation en 2 minutes, sans outil",
 niche="Eau calcaire", h1="Des cheveux plus doux, sans changer d'eau.",
 sous="Un pommeau de douche qui filtre le calcaire et le chlore. Tu le visses, c'est fini.",
 prix="34,90 €", ancre="cartouches de rechange disponibles",
 puces=["Filtre vitamine C", "Se visse sur ton flexible", "Cartouches de rechange"],
 photo="Avant / après : la cartouche blanche devenue marron après un mois",
 preuve="En France, l'eau est souvent dure : 20 à 30 °f en moyenne, jusqu'à 45 °f en Île-de-France (Veolia).",
 pb_titre="Ton eau est calcaire ?",
 pbs=[("Cheveux secs et ternes", "Le calcaire les rend rêches, même avec un bon shampoing."),
      ("La peau qui tire", "Après la douche, ça démange et ça tiraille."),
      ("Un adoucisseur, c'est des travaux", "Un plombier, de la place, et des centaines d'euros.")],
 kit_titre="Ce que tu reçois",
 kit=[("Le pommeau de douche", "plusieurs jets"), ("Le filtre", "à la vitamine C"),
      ("Les joints", "pour une installation sans fuite"), ("Le guide", "quand changer la cartouche")],
 comp=("Adoucisseur", [("Prix", "Plusieurs centaines d'euros", "34,90 €"), ("Installation", "Plombier", "2 minutes"), ("Place", "Un meuble entier", "Aucune")]),
 faq=[("Ça marche sur tous les flexibles ?", "Oui, avec le raccord standard français."), ("Je change la cartouche quand ?", "[DURÉE À CONFIRMER AVEC LE FOURNISSEUR]")],
 fin="Ta douche, enfin douce."),
dict(n=6, fichier="06_gourde_filtrante", acc="#2F5D3A", fond="#F3F5EF", doux="#E1E8DA",
 bandeau="2 fois moins chère qu'une gourde filtrante de marque",
 niche="Randonnée", h1="Bois l'eau des rivières. Porte moins lourd.",
 sous="Une gourde en inox avec filtre intégré : tu la remplis en chemin au lieu de porter des litres d'eau.",
 prix="34,90 €", ancre="au lieu de 55 à 90 € pour une LifeStraw inox",
 puces=["Inox 304", "Filtre céramique intégré", "Sans bouteilles en plastique"],
 photo="Une randonneuse remplit sa gourde dans un torrent de montagne",
 preuve="Environ 30 millions de Français ont randonné en 2025 (FFRandonnée).",
 pb_titre="En rando, le plus lourd, c'est l'eau.",
 pbs=[("2 à 3 litres sur le dos", "Ça pèse 2 à 3 kilos de plus à chaque montée."),
      ("L'eau des ruisseaux", "Tentante, mais risquée à boire telle quelle."),
      ("Les bouteilles en plastique", "Chères, lourdes, et elles finissent à la poubelle.")],
 kit_titre="Ce que tu reçois",
 kit=[("La gourde en inox 304", "solide et durable"), ("Le filtre céramique", "intégré"),
      ("Le mousqueton", "pour l'accrocher au sac"), ("Le guide", "entretien et changement du filtre")],
 comp=("LifeStraw Go inox", [("Prix", "55 à 90 €", "34,90 €"), ("Matière", "Inox", "Inox 304"), ("Filtre", "Intégré", "Intégré")]),
 faq=[("Ça filtre quoi exactement ?", "[RÉSULTATS DES TESTS DU FOURNISSEUR À AJOUTER]"), ("On peut y mettre de l'eau du robinet ?", "Oui, bien sûr.")],
 fin="Pars léger. Bois partout."),
dict(n=7, fichier="07_barre_lumineuse_ecran", acc="#3B4BC8", fond="#F4F5FB", doux="#E1E4F6",
 bandeau="3 fois moins chère qu'une barre lumineuse de marque",
 niche="Bureau et télétravail", h1="Ton bureau éclairé. Sans reflet sur l'écran.",
 sous="Une barre lumineuse qui se pose sur ton écran et éclaire seulement ton bureau. Branchement USB, 10 secondes.",
 prix="39,90 €", ancre="au lieu d'environ 139 € pour une BenQ ScreenBar Pro",
 puces=["Aluminium", "Sans reflet sur l'écran", "Intensité réglable"],
 photo="Setup de bureau le soir : la barre éclaire le clavier, l'écran reste net",
 preuve="22 % des salariés du privé télétravaillent, contre 4 % en 2019 (DARES, 2024).",
 pb_titre="Le soir, ton bureau te fatigue ?",
 pbs=[("Les reflets", "La lampe se reflète dans l'écran, tu plisses les yeux."),
      ("Le bureau dans le noir", "Seul l'écran éclaire : les yeux piquent en fin de journée."),
      ("La lampe qui prend de la place", "Elle encombre le bureau et éclaire mal.")],
 kit_titre="Ce que tu reçois",
 kit=[("La barre lumineuse", "aluminium"), ("Le support", "pour la poser sur l'écran"),
      ("Le câble USB", "se branche à l'ordinateur"), ("Le guide d'installation", "10 secondes")],
 comp=("BenQ ScreenBar Pro", [("Prix", "Environ 139 €", "39,90 €"), ("Branchement", "USB", "USB"), ("Sur l'écran", "Oui", "Oui")]),
 faq=[("Ça tient sur mon écran ?", "[ÉPAISSEURS COMPATIBLES À CONFIRMER, ÉCRANS INCURVÉS COMPRIS]"), ("Ça abîme les yeux ?", "Non : elle éclaire le bureau, pas tes yeux. Ce n'est pas un produit médical.")],
 fin="Un setup qui en jette. Des yeux qui disent merci."),
dict(n=8, fichier="08_baguette_lumiere_rouge", acc="#A3263A", fond="#FBF5F5", doux="#F2E0E2",
 bandeau="Lumière rouge · Microcourant · Chaleur · Vibration",
 niche="Lumière rouge", h1="Ton soin LED d'institut, à la maison.",
 sous="Une baguette 4 en 1 à passer 5 minutes chaque soir sur le visage. Ta routine devient un rituel.",
 prix="49,90 €", ancre="au lieu de 161 à 210 € pour une marque",
 puces=["LED rouge 630 nm", "4 fonctions en 1", "Étanche"],
 photo="Visage éclairé en rouge, dans une salle de bain sombre",
 preuve="La France fait 30 % des ventes européennes d'appareils beauté de CurrentBody (Journal du Luxe).",
 pb_titre="Ta peau a l'air fatiguée ?",
 pbs=[("Le teint terne", "La fatigue et le stress se voient sur le visage."),
      ("Les soins en institut", "Une séance de LED coûte cher, et il faut y retourner."),
      ("Les appareils de marque", "161 à 210 € pour une baguette connue.")],
 kit_titre="Ce que tu reçois",
 kit=[("La baguette 4 en 1", "LED, microcourant, chaleur, vibration"), ("Le câble de charge", "USB"),
      ("La pochette", "pour la ranger"), ("La routine de 30 jours", "5 minutes par soir")],
 comp=("Baguette de marque", [("Prix", "161 à 210 €", "49,90 €"), ("Fonctions", "Selon le modèle", "4 en 1"), ("Utilisation", "À la maison", "À la maison")]),
 faq=[("Ça enlève les rides ?", "Aucun appareil ne fait de miracle : c'est un soin d'entretien, régulier."), ("Je peux l'utiliser tous les jours ?", "Suis le guide : 5 minutes par séance.")],
 fin="Ton rituel du soir commence maintenant."),
dict(n=9, fichier="09_gourde_isotherme", acc="#2450A6", fond="#F4F6FB", doux="#E0E7F5",
 bandeau="Gravure du prénom : +5 €",
 niche="Gourde du quotidien", h1="Ta gourde. À ton nom.",
 sous="Une gourde isotherme en inox, finition mate. Simple, ou gravée au prénom pour ne plus jamais la perdre.",
 prix="24,90 €", ancre="29,90 € avec le prénom gravé",
 puces=["Eau fraîche toute la journée", "Inox double paroi", "Gravure au prénom en option"],
 photo="Gourdes de couleurs avec des prénoms gravés, posées sur un bureau",
 preuve="Les Français boivent environ 135 litres d'eau en bouteille par an (Fondation Jean-Jaurès).",
 pb_titre="Toujours une bouteille en plastique à la main ?",
 pbs=[("L'eau devient tiède", "À midi, ta bouteille est déjà chaude."),
      ("Le plastique", "Tu en rachètes toutes les semaines."),
      ("Les gourdes se perdent", "À l'école, au sport, au bureau : elles se ressemblent toutes.")],
 kit_titre="Choisis ta version",
 kit=[("Version simple", "24,90 €"), ("Version gravée au prénom", "29,90 €"),
      ("Les couleurs", "[COULEURS DU FOURNISSEUR]"), ("Le pack famille", "[PRIX À DÉFINIR]")],
 comp=("Bouteilles en plastique", [("Coût sur un an", "Des dizaines d'euros", "24,90 € une fois"), ("Fraîcheur", "Tiède en 1 heure", "Fraîche toute la journée"), ("Déchets", "Des centaines de bouteilles", "Zéro")]),
 faq=[("Combien de temps l'eau reste fraîche ?", "[DURÉE À CONFIRMER AVEC LE FOURNISSEUR]"), ("La gravure s'efface ?", "Non, elle est faite au laser dans le métal.")],
 fin="La gourde qu'on ne perd plus."),
dict(n=10, fichier="10_mini_pistolet_massage", acc="#3A7D44", fond="#F3F5F2", doux="#DFE8DF",
 bandeau="9 fois moins cher qu'un pistolet de marque",
 niche="Récupération sportive", h1="Tes courbatures, réglées en 5 minutes.",
 sous="Un mini pistolet de massage qui tient dans la poche, avec écran tactile et 4 têtes.",
 prix="29,90 €", ancre="au lieu de 269 € pour un Theragun Mini Plus",
 puces=["Écran tactile", "4 têtes de massage", "Tient dans la poche"],
 photo="Ralenti sur un mollet après un footing, onde de massage visible",
 preuve="18 millions de Français pratiquent le fitness (Observatoire Forme & Fitness 2026).",
 pb_titre="Le lendemain du sport, ça fait mal ?",
 pbs=[("Les courbatures", "Tu marches comme un robot pendant 2 jours."),
      ("L'ostéo", "45 à 80 € la séance, pas remboursée."),
      ("Les pistolets de marque", "269 € pour un Theragun Mini Plus.")],
 kit_titre="Ce que tu reçois",
 kit=[("Le mini pistolet", "écran tactile, plusieurs vitesses"), ("4 têtes de massage", "pour chaque muscle"),
      ("Le câble USB", "recharge rapide"), ("La pochette", "pour le sac de sport")],
 comp=("Theragun Mini Plus", [("Prix", "269 €", "29,90 €"), ("Taille", "Compact", "Tient dans la poche"), ("Têtes", "Selon le modèle", "4")]),
 faq=[("C'est assez puissant ?", "Pour la récupération du quotidien, oui. [À TESTER SUR ÉCHANTILLON]"), ("Je peux l'utiliser partout ?", "Évite les os, la nuque et les zones douloureuses sans avis médical.")],
 fin="Récupère comme un pro. Paie comme toi."),
]

CSS = """*{box-sizing:border-box}body{margin:0;font-family:Inter,system-ui,sans-serif;color:#221E1F;background:var(--fond)}
h1,h2,.marque{font-family:Outfit,Inter,sans-serif}
.w{max-width:1100px;margin:0 auto;padding:0 20px}
.band{background:#221E1F;color:#fff;text-align:center;font-size:13px;padding:9px 14px}
header .w{display:flex;justify-content:space-between;align-items:center;padding-top:16px;padding-bottom:16px}
.marque{font-weight:700;font-size:20px;letter-spacing:.04em}.panier{background:var(--acc);color:#fff;padding:10px 16px;border-radius:999px;font-weight:600;font-size:14px;text-decoration:none}
.hero{display:grid;grid-template-columns:repeat(auto-fit,minmax(300px,1fr));gap:28px;align-items:center;padding-top:16px;padding-bottom:48px}
.kick{color:var(--acc);font-weight:700;font-size:13px;letter-spacing:.08em;text-transform:uppercase}
h1{font-size:clamp(34px,5vw,56px);line-height:1.05;margin:10px 0 14px}.sous{font-size:17px;line-height:1.6;color:#55494C;margin:0 0 18px}
.prix{display:flex;align-items:baseline;gap:10px;flex-wrap:wrap}.prix b{font-family:Outfit,sans-serif;font-size:38px}.prix span{color:#55494C;font-size:14px}
.cta{display:inline-block;background:var(--acc);color:#fff;text-decoration:none;font-weight:700;padding:16px 26px;border-radius:999px;margin:18px 0 12px;font-size:16px}
.puces{list-style:none;padding:0;margin:0;display:flex;flex-wrap:wrap;gap:6px 16px;font-size:14px;color:#55494C}
.photo{aspect-ratio:4/5;border-radius:24px;background:var(--doux);border:2px dashed color-mix(in srgb,var(--acc) 45%,white);display:flex;align-items:center;justify-content:center;text-align:center;padding:28px;color:#5F5356;font-size:14px;line-height:1.5}
.preuve{background:var(--doux);text-align:center;padding:22px 20px;font-size:16px;line-height:1.5}
section{padding:52px 0 8px}h2{font-size:clamp(26px,3.4vw,38px);text-align:center;margin:0 0 24px}
.g3{display:grid;grid-template-columns:repeat(auto-fit,minmax(240px,1fr));gap:14px}
.carte{background:#fff;border-radius:18px;padding:22px}.carte b{font-family:Outfit,sans-serif;font-size:19px;display:block;margin-bottom:6px}.carte p{margin:0;color:#55494C;line-height:1.55}
.kit{display:grid;grid-template-columns:repeat(auto-fit,minmax(240px,1fr));gap:12px}.kit div{background:#221E1F;color:#fff;border-radius:18px;padding:20px}.kit small{display:block;color:#D9D2D3;margin-top:4px;font-size:14px}
.tab{background:#fff;border-radius:18px;overflow-x:auto}table{width:100%;border-collapse:collapse;font-size:15px}td,th{padding:14px 16px;border-bottom:1px solid #EEE7E4;text-align:left}th:last-child,td:last-child{color:var(--acc);font-weight:700}tr:last-child td{border-bottom:none}
details{background:#fff;border-radius:14px;padding:16px 20px;margin-bottom:10px}summary{font-weight:600;cursor:pointer}details p{color:#55494C;line-height:1.55;margin:10px 0 0}
.fin{background:var(--acc);color:#fff;border-radius:24px;padding:44px 24px;text-align:center;margin:48px 0}.fin h2{color:#fff;margin-bottom:10px}.fin a{display:inline-block;background:#fff;color:var(--acc);text-decoration:none;font-weight:700;padding:15px 26px;border-radius:999px;margin-top:14px}
footer{border-top:1px solid #E6DEDA;padding:22px 0;font-size:13px;color:#55494C}footer .w{display:flex;justify-content:space-between;flex-wrap:wrap;gap:10px}"""

def page(s):
    pbs = "".join(f'<div class="carte"><b>{e(t)}</b><p>{e(d)}</p></div>' for t, d in s["pbs"])
    kit = "".join(f'<div><b>{e(t)}</b><small>{e(d)}</small></div>' for t, d in s["kit"])
    alt, lignes = s["comp"]
    comp = "".join(f"<tr><td><b>{e(a)}</b></td><td>{e(b)}</td><td>{e(c)}</td></tr>" for a, b, c in lignes)
    faq = "".join(f"<details open><summary>{e(q)}</summary><p>{e(r)}</p></details>" for q, r in s["faq"])
    puces = "".join(f"<li>✓ {e(p)}</li>" for p in s["puces"])
    return f"""<!doctype html><html lang="fr"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1">
<title>{e(s['niche'])} — maquette</title>
<link href="https://fonts.googleapis.com/css2?family=Outfit:wght@600;700&family=Inter:wght@400;600;700&display=swap" rel="stylesheet">
<style>:root{{--acc:{s['acc']};--fond:{s['fond']};--doux:{s['doux']}}}{CSS}</style></head><body>
<div class="band">{e(s['bandeau'])}</div>
<header><div class="w"><span class="marque">[TA MARQUE]</span><a class="panier" href="#">Panier (0)</a></div></header>
<div class="w hero"><div><div class="kick">{e(s['niche'])}</div><h1>{e(s['h1'])}</h1><p class="sous">{e(s['sous'])}</p>
<div class="prix"><b>{e(s['prix'])}</b><span>{e(s['ancre'])}</span></div><a class="cta" href="#">Ajouter au panier</a><ul class="puces">{puces}</ul></div>
<div class="photo">PHOTO<br>{e(s['photo'])}</div></div>
<div class="preuve">{e(s['preuve'])}</div>
<section class="w"><h2>{e(s['pb_titre'])}</h2><div class="g3">{pbs}</div></section>
<section class="w"><h2>{e(s['kit_titre'])}</h2><div class="kit">{kit}</div></section>
<section class="w"><h2>Fais la comparaison</h2><div class="tab"><table><tr><th></th><th>{e(alt)}</th><th>[TA MARQUE]</th></tr>{comp}</table></div></section>
<section class="w"><h2>Questions fréquentes</h2>{faq}</section>
<div class="w"><div class="fin"><h2>{e(s['fin'])}</h2><div>{e(s['prix'])} · livraison suivie en France</div><a href="#">Ajouter au panier</a></div></div>
<footer><div class="w"><b>[TA MARQUE]</b><span>Mentions légales · CGV · Livraison et retours · Contact</span></div></footer>
</body></html>"""

os.makedirs(os.path.join(ICI, "html"), exist_ok=True)
for s in SITES:
    open(os.path.join(ICI, "html", s["fichier"] + ".html"), "w").write(page(s))
json.dump([s["fichier"] for s in SITES], open(os.path.join(ICI, "liste.json"), "w"))
print("OK", len(SITES))
