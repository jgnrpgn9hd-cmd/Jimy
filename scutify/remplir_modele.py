"""Remplit le modèle Scutify officiel avec les 10 produits de produits.py.

Ne touche ni à la structure ni aux formules du modèle : seules les cases
blanches (B à L) sont remplies, plus la MARGE (M) écrite en chiffre pour
qu'elle s'affiche sur téléphone. LibreOffice recalcule ensuite le fichier
pour que les notes (N à U) soient aussi enregistrées et visibles partout.
Lancer : python3 remplir_modele.py
"""
import os, re, shutil, subprocess, tempfile
from copy import copy
from openpyxl import load_workbook
from openpyxl.styles import Alignment, Font
from produits import rows

ICI = os.path.dirname(os.path.abspath(__file__))
MODELE = os.path.join(ICI, "modele_scutify_vierge.xlsx")
SORTIE = os.path.join(ICI, "Mes_10_idees_business_MODELE_SCUTIFY.xlsx")

wb = load_workbook(MODELE)
ws = wb["S1 BUSINESS IDEAS"]
for k, row in enumerate(rows):
    r = 6 + k
    nom, lien, D, E, F, G, H, I, cout, livraison, revente, _ = row
    for col, v in zip("BCDEFGHIJKL", (nom, lien, D, E, F, G, H, I, cout, livraison, revente)):
        ws[f"{col}{r}"].value = v
    ws[f"M{r}"].value = round(revente - cout, 2)
    ws[f"B{r}"].alignment = Alignment(horizontal="center", vertical="center", wrap_text=True)
    c = ws[f"C{r}"]
    c.value = "Fiche Alibaba\nn° " + re.search(r"[_-](\d+)\.html", lien).group(1)
    c.hyperlink = lien
    f = copy(c.font); c.font = Font(name=f.name, size=9, color="0563C1", underline="single")
    c.alignment = Alignment(horizontal="center", vertical="center", wrap_text=True)
    ws.row_dimensions[r].height = 60

a = wb.create_sheet("Arguments coach")
a["A1"] = "Pourquoi chaque critère est OUI"; a["A1"].font = Font(bold=True, size=12)
for k, row in enumerate(rows):
    a.cell(k + 3, 1, f"{k+1}. {row[0]}").font = Font(bold=True)
    a.cell(k + 3, 2, row[11]).alignment = Alignment(wrap_text=True, vertical="top")
    a.row_dimensions[k + 3].height = 45
a.column_dimensions["A"].width = 50; a.column_dimensions["B"].width = 90

with tempfile.TemporaryDirectory() as t:
    brut = os.path.join(t, "brut.xlsx"); wb.save(brut)
    # Recalcul par LibreOffice : enregistre les résultats des formules dans le fichier.
    out = os.path.join(t, "calc")
    subprocess.run(["soffice", "--headless", "--calc", "--convert-to", "xlsx:Calc MS Excel 2007 XML",
                    "--outdir", out, brut], check=True, capture_output=True)
    shutil.copy(os.path.join(out, "brut.xlsx"), SORTIE)
print("OK ->", SORTIE)
