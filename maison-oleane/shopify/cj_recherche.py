"""Cherche chaque produit de correspondance-cj.csv dans le catalogue CJ Dropshipping (API officielle).

Clé : variable d'environnement CJ_API_KEY (compte CJ > Authorization > API > Generate).
Sortie : candidats-cj.csv, les 3 meilleurs résultats par produit, avec lien, prix CJ
et frais de port vers la France pour le premier candidat.

    python3 cj_recherche.py            # tous les produits
    python3 cj_recherche.py MO-001     # un seul SKU
"""
import csv
import json
import os
import sys
import time
import urllib.parse
import urllib.request

API = "https://developers.cjdropshipping.com/api2.0/v1"
ICI = os.path.dirname(os.path.abspath(__file__))
PAUSE = 1.2  # l'API gratuite accepte environ 1 requête par seconde


def appel(chemin, jeton=None, corps=None, params=None):
    url = API + chemin + ("?" + urllib.parse.urlencode(params) if params else "")
    entetes = {"Content-Type": "application/json"}
    if jeton:
        entetes["CJ-Access-Token"] = jeton
    donnees = json.dumps(corps).encode() if corps is not None else None
    req = urllib.request.Request(url, data=donnees, headers=entetes, method="POST" if corps is not None else "GET")
    with urllib.request.urlopen(req, timeout=30) as r:
        rep = json.load(r)
    time.sleep(PAUSE)
    if not rep.get("result"):
        raise RuntimeError(f"{chemin} : {rep.get('message')}")
    return rep["data"]


def jeton():
    cle = os.environ.get("CJ_API_KEY")
    if not cle:
        sys.exit("Variable CJ_API_KEY absente.")
    return appel("/authentication/getAccessToken", corps={"apiKey": cle})["accessToken"]


def port_france(tok, pid):
    """Frais de port les moins chers vers la France pour la première variante du produit."""
    try:
        produit = appel("/product/query", tok, params={"pid": pid})
        vid = produit["variants"][0]["vid"]
        options = appel("/logistic/freightCalculate", tok, corps={
            "startCountryCode": "CN", "endCountryCode": "FR",
            "products": [{"quantity": 1, "vid": vid}]})
        meilleur = min(options, key=lambda o: float(o["logisticPrice"]))
        return meilleur["logisticPrice"], meilleur["logisticName"], meilleur["logisticAging"]
    except Exception as e:  # noqa: BLE001 — un échec de calcul ne doit pas arrêter la recherche
        return "", f"erreur : {e}", ""


def main():
    filtre = set(sys.argv[1:])
    tok = jeton()
    with open(os.path.join(ICI, "correspondance-cj.csv"), encoding="utf-8-sig") as f:
        lignes = [l for l in csv.DictReader(f, delimiter=";") if not filtre or l["SKU"] in filtre]

    sortie = os.path.join(ICI, "candidats-cj.csv")
    with open(sortie, "w", encoding="utf-8-sig", newline="") as f:
        w = csv.writer(f, delimiter=";")
        w.writerow(["SKU", "Produit", "Rôle", "Rang", "Nom CJ", "SKU CJ", "Prix CJ ($)",
                    "Port France ($)", "Transporteur", "Délai (jours)", "Lien CJ", "Image"])
        for l in lignes:
            mot = l["Mot-clé à chercher sur CJ"]
            print(f"{l['SKU']} · {mot}", flush=True)
            try:
                res = appel("/product/list", tok, params={"productNameEn": mot, "pageNum": 1, "pageSize": 10})["list"]
            except Exception as e:  # noqa: BLE001
                w.writerow([l["SKU"], l["Produit"], l["Rôle (Héros / Complément)"], "", f"erreur : {e}"])
                continue
            if not res:
                w.writerow([l["SKU"], l["Produit"], l["Rôle (Héros / Complément)"], "", "aucun résultat"])
            for rang, p in enumerate(res[:3], 1):
                port = port_france(tok, p["pid"]) if rang == 1 else ("", "", "")
                w.writerow([l["SKU"], l["Produit"], l["Rôle (Héros / Complément)"], rang,
                            p.get("productNameEn"), p.get("productSku"), p.get("sellPrice"), *port,
                            f"https://cjdropshipping.com/product/-p-{p['pid']}.html", p.get("productImage")])
    print("Écrit :", sortie)


if __name__ == "__main__":
    main()
