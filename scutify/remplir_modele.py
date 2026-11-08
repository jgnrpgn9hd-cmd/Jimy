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
from openpyxl.styles import Alignment, Font, PatternFill
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
    ws[f"M{r}"].value = round(revente - cout, 2)
    ws[f"B{r}"].alignment = Alignment(horizontal="center", vertical="center", wrap_text=True)
    c = ws[f"C{r}"]
    c.value = lien  # adresse complète : cliquable ou copiable sur téléphone
    c.hyperlink = lien
    f = copy(c.font); c.font = Font(name=f.name, size=7, color="0563C1", underline="single")
    c.alignment = Alignment(horizontal="center", vertical="center", wrap_text=True)
    ws.row_dimensions[r].height = 60
    if ws[f"B{r}"].fill.fgColor.rgb not in (None, "00000000"):
        ws[f"B{r}"].fill = PatternFill(fill_type=None)  # surlignage vert d'exemple du modèle

ws.column_dimensions["C"].width = 40
a = wb.create_sheet("Arguments coach")
from openpyxl.styles import PatternFill, Border, Side
VIOLET = PatternFill("solid", fgColor="7030A0"); GRIS = PatternFill("solid", fgColor="F2F2F2")
fin = Side(style="thin", color="BFBFBF"); BORD = Border(left=fin, right=fin, top=fin, bottom=fin)
a["A1"] = "Mes 10 idées de business — pourquoi chaque produit"
a["A1"].font = Font(name="Arial", bold=True, size=14, color="7030A0")
a["A2"] = "Coût = prix Alibaba × 0,86. Prix de revente vérifiés sur les sites français. Marge sans livraison ni pub."
a["A2"].font = Font(name="Arial", italic=True, size=9, color="595959")
for j, t in enumerate(["N°", "Produit", "Niche", "Coût", "Revente", "Marge", "Problème, solution, prix en France, fournisseur", "Fiche Alibaba"], 1):
    c = a.cell(4, j, t); c.font = Font(name="Arial", bold=True, color="FFFFFF"); c.fill = VIOLET
    c.alignment = Alignment(horizontal="center", vertical="center", wrap_text=True); c.border = BORD
for k, row in enumerate(rows):
    r = 5 + k
    niche = row[0].split(" — Niche : ")[1] if " — Niche : " in row[0] else ""
    vals = [k + 1, row[12], niche[:1].upper() + niche[1:], row[8], row[10], round(row[10] - row[8], 2), row[11], row[1]]
    for j, v in enumerate(vals, 1):
        c = a.cell(r, j, v); c.font = Font(name="Arial", size=10, bold=(j in (2, 6))); c.border = BORD
        c.alignment = Alignment(horizontal="center" if j in (1, 4, 5, 6, 8) else "left", vertical="center", wrap_text=True)
        if k % 2: c.fill = GRIS
        if j in (4, 5, 6): c.number_format = '#,##0.00 "€"'
    a.cell(r, 8).hyperlink = row[1]; a.cell(r, 8).font = Font(name="Arial", size=8, color="0563C1", underline="single")
    a.row_dimensions[r].height = 105
for col, w in zip("ABCDEFGH", [5, 26, 20, 10, 10, 10, 85, 45]):
    a.column_dimensions[col].width = w
a.row_dimensions[4].height = 30; a.freeze_panes = "C5"

with tempfile.TemporaryDirectory() as t:
    brut = os.path.join(t, "brut.xlsx"); wb.save(brut)
    # Recalcul par LibreOffice : enregistre les résultats des formules dans le fichier.
    out = os.path.join(t, "calc")
    subprocess.run(["soffice", "--headless", "--calc", "--convert-to", "xlsx:Calc MS Excel 2007 XML",
                    "--outdir", out, brut], check=True, capture_output=True)
    shutil.copy(os.path.join(out, "brut.xlsx"), SORTIE)
print("OK ->", SORTIE)
