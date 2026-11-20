# Construit les données du tableau Scutify à partir de dossier.py :
#  - produits.py (les 10 lignes du modèle),
#  - upsells.py (les 2e produits à plus de 50 €),
#  - RECHERCHE_IDEES_METHODE_SCUTIFY.md (le dossier lisible sur téléphone).
# Vérifie aussi les règles : coût < 15 €, revente < 50 €, marge ≥ 20 € et marge > 3 × coût.
# Lancer : python3 construire_tableau.py
import os, pprint
from dossier import FICHES, SOURCES

ICI = os.path.dirname(os.path.abspath(__file__))


def note(r, D, E, F, G, H, I, J, K, L):
    """Même calcul que les formules du modèle Scutify (la ligne 6 a ses propres formules)."""
    M = round(L - J, 2)
    N = sum(1.5 for x in (D, E, F) if x == "OUI") + sum(0.25 for x in (G, H) if x == "OUI") + (1 if I == "NON" else 0)
    O = 1 if J > 25 else 0.5
    if r == 6:
        P = 1.5 if K > 6 else 0
        T = (1.5 if L > J * 3 else 0) + (1 if L == J * 3 else 0)
    else:
        P = 0 if K < 5 else 1
        T = 1 if M > 3 * J else (0.5 if M == 3 * J else 0)
    return N + P + O + T


assert len(FICHES) == 10 and len({f["court"] for f in FICHES}) == 10 and len({f["niche"] for f in FICHES}) == 10
for f in FICHES:
    assert f["cout"] < 15 and f["revente"] < 50 and f["marge"] >= 20, f["court"]
    if not f["marge"] > 3 * f["cout"]:
        print("ATTENTION : marge sous 3 fois le coût :", f["court"])

# 1. produits.py
rows = []
for f in FICHES:
    arg = (f"MODÈLE : {f['modele']} DEMANDE : {f['demande']} PROBLÈME : {f['probleme']} "
           f"ÉCONOMIQUE : {f['c_economique']} EFFET WAOUW : {f['c_wow']} PRIX EN FRANCE : {f['prix_france']} "
           f"FOURNISSEUR : {f['fournisseur']} À VÉRIFIER : {f['vigilance']}")
    rows.append((f"{f['nom']} — Niche : {f['niche']}", f["lien"], *f["criteres"], f["cout"], f["liv"], f["revente"], arg, f["court"]))
with open(os.path.join(ICI, "produits.py"), "w") as out:
    out.write("# 10 idées de business, 10 niches : généré par construire_tableau.py à partir de dossier.py (ne pas modifier à la main).\n"
              "# (nom complet — Niche : niche, lien, D, E, F, G, H, I, coût €, livraison /10, revente €, argument coach, nom court)\n"
              "rows=")
    pprint.pprint(rows, stream=out, width=200)

# 2. upsells.py : packs à plus de 50 € (liens vérifiés le 14/11/2026)
U = [
 ("Pack Salle de bain spa : kit WC lavant + pommeau filtrant", "Kit WC lavant sans électricité",
  "Toute la salle de bain plus propre et plus douce, sans travaux.",
  "Prix séparés dans la boutique : 49,90 + 39,90 = 89,80 €.",
  "https://www.alibaba.com/product-detail/Ultra-Slim-Adjustable-Water-Manual-Bidet_1600984952493.html", 14.00, 12.04, 74.90,
  "Kit WC 8,50 $ (lien) + pommeau 5,50 $. Marge 62,86 €."),
 ("Pack Maison nette : égouttoir enroulable + boîte cache-multiprise", "Égouttoir enroulable doré",
  "La cuisine et le salon dégagés en une commande.",
  "Prix séparés dans la boutique : 34,90 + 34,90 = 69,80 €.",
  "https://www.alibaba.com/product-detail/China-factory-gold-Roll-up-Dish_1601010537663.html", 7.70, 6.62, 59.90,
  "Égouttoir 4,20 $ (lien) + boîte 3,50 $. Marge 53,28 €."),
 ("Pack Papiers en ordre : trieur papiers importants + classeur budget", "Trieur papiers importants",
  "Tous les papiers et tout le budget de la maison enfin organisés.",
  "Prix séparés dans la boutique : 39,90 + 34,90 = 74,80 €.",
  "https://www.alibaba.com/product-detail/Fireproof-Multi-Layer-Accordion-File-Folder_1601781954486.html", 12.49, 10.74, 59.90,
  "Trieur 9,50 $ (lien) + classeur 2,99 $. Marge 49,16 €."),
]
with open(os.path.join(ICI, "upsells.py"), "w") as out:
    out.write("# 2e produits (packs à plus de 50 €) : généré par construire_tableau.py.\n"
              "# (nom, se vend avec, problème, preuve prix France, lien, prix $, coût €, revente €, infos fournisseur)\nU=")
    pprint.pprint(U, stream=out, width=200)

# 3. Dossier lisible sur téléphone
L = ["# Mes 10 idées de business — méthode Scutify", "",
     "Chaque idée suit le support « Recherche de produits à fort potentiel » : niche → observation → cible et désir → problème → pistes produit, "
     "puis l'idée de business, les critères et les 4 questions de validation.", "",
     "**Inspirations :**",
     "- **TrendTrack** : maison et cuisine, catégorie n° 1 des pubs Meta en 2026 ; **Pinterest** : l'univers « home organization ».",
     "- **SmartWorkout**, l'exemple du support : un kit qui règle un problème, avec un programme et une vraie marque.",
     "- **Tushy et StoneStream** : des produits de salle de bain vendus avec des pubs à effet waouh.",
     "- **Kosso et Hustle Wear** : une seule cible, plusieurs produits qui se répondent, des packs.",
     "- À ne pas copier : NOXYA (sommeil), la boutique de la coach.", "",
     "## Le tableau en résumé", "",
     "| N° | Niche | Produit | Coût | Revente | Marge | Note /10 |", "|---|---|---|---|---|---|---|"]
eur = lambda x: f"{x:.2f}".replace(".", ",") + " €"
for k, f in enumerate(FICHES):
    n = note(6 + k, *f["criteres"], f["cout"], f["liv"], f["revente"])
    L.append(f"| {k + 1} | {f['niche']} | [{f['court']}]({f['lien']}) | {eur(f['cout'])} | {eur(f['revente'])} | {eur(f['marge'])} | {str(n).replace('.', ',')} |")
L += ["", "La note vient des formules du modèle Scutify. La ligne 1 a des formules différentes dans le modèle, d'où sa note plus haute. "
      "Les 10 produits visent la même cible : une personne qui veut une maison nette, pratique et jolie, sans travaux.", ""]
ETAPES = [("modele", "Boutique modèle"), ("demande", "Demande en France"), ("observation", "Observation"), ("cible", "Cible et désir"),
          ("probleme", "Problème"), ("question", "Question à résoudre"), ("pistes", "Pistes produit"), ("idee", "**Idée de business**"),
          ("c_probleme", "Solution à un problème"), ("c_economique", "Économique"), ("c_passion", "Besoin / passion"),
          ("c_wow", "Effet wow"), ("c_unique", "Unique"), ("c_poids", "Poids / volume"),
          ("q1", "1. Répond aux critères principaux ?"), ("q2", "2. Bénéfice évident au premier regard ?"),
          ("q3", "3. Je visualise le site, les pubs, les arguments ?"), ("q4", "4. Prêt à investir 30 000 € sur ce seul produit ?"),
          ("prix_france", "Prix en France"), ("angle_pub", "Angle pub / Instagram"), ("fournisseur", "Fournisseur"), ("vigilance", "À vérifier")]
for k, f in enumerate(FICHES):
    L += [f"## {k + 1}. {f['niche']} — {f['court']}", "",
          f"[Lien Alibaba]({f['lien']}) · coût {eur(f['cout'])} ({str(f['usd']).replace('.', ',')} $ × 0,86) · revente {eur(f['revente'])} · marge {eur(f['marge'])}", "",
          "| Étape | Réponse |", "|---|---|"]
    L += [f"| {lab} | {f[key]} |" for key, lab in ETAPES]
    L.append("")
L += ["## 2e produits (plus de 50 €)", "", "| Pack | Coût | Revente | Lien |", "|---|---|---|---|"]
L += [f"| {u[0]} | {eur(u[6])} | {eur(u[7])} | [Alibaba]({u[4]}) |" for u in U]
L += ["", "## Sources", ""]
L += [f"- [{nom}]({url})" if url else f"- {nom}" for nom, url in SOURCES]
L += ["", "Liens Alibaba et prix fournisseur vérifiés le 14/11/2026. Les prix en France viennent des sites cités et peuvent changer."]
with open(os.path.join(ICI, "RECHERCHE_IDEES_METHODE_SCUTIFY.md"), "w") as out:
    out.write("\n".join(L) + "\n")

for k, f in enumerate(FICHES):
    print(k + 1, f["court"], f["cout"], f["revente"], f["marge"], note(6 + k, *f["criteres"], f["cout"], f["liv"], f["revente"]))
print("OK -> produits.py, upsells.py, RECHERCHE_IDEES_METHODE_SCUTIFY.md")
