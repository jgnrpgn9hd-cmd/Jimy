"""Remplit le modèle Scutify SANS RIEN MODIFIER : seules les cases blanches B à L
des lignes 6 à 15 sont remplies. Formules (marge M, notes N à U), mise en forme,
listes déroulantes et onglets du modèle restent identiques. LibreOffice recalcule
ensuite le fichier pour que les résultats s'affichent aussi sur téléphone.
Lancer : python3 remplir_modele_strict.py
"""
import os, shutil, subprocess, tempfile
from openpyxl import load_workbook
from produits import rows

ICI = os.path.dirname(os.path.abspath(__file__))
MODELE = os.path.join(ICI, "modele_scutify_vierge.xlsx")
SORTIE = os.path.join(ICI, "Support Scutify S01_Tableau recherche 10 idées de business.xlsx")

wb = load_workbook(MODELE)
ws = wb["S1 BUSINESS IDEAS"]
for k, row in enumerate(rows):
    r = 6 + k
    nom, lien, D, E, F, G, H, I, cout, livraison, revente, _, court = row
    for col, v in zip("BCDEFGHIJKL", (court, lien, D, E, F, G, H, I, cout, livraison, revente)):
        ws[f"{col}{r}"].value = v
    ws[f"C{r}"].hyperlink = lien

with tempfile.TemporaryDirectory() as t:
    brut = os.path.join(t, "brut.xlsx"); wb.save(brut)
    out = os.path.join(t, "calc")
    subprocess.run(["soffice", "--headless", "--calc", "--convert-to", "xlsx:Calc MS Excel 2007 XML",
                    "--outdir", out, brut], check=True, capture_output=True)
    shutil.copy(os.path.join(out, "brut.xlsx"), SORTIE)
print("OK ->", SORTIE)
