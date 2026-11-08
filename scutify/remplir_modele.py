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
    c.value = "Voir le produit"  # adresse complète dans l'onglet Arguments coach
    c.hyperlink = lien
    f = copy(c.font); c.font = Font(name=f.name, size=9, color="2F5597")
    c.alignment = Alignment(horizontal="center", vertical="center", wrap_text=True)
    ws.row_dimensions[r].height = 60
    if ws[f"B{r}"].fill.fgColor.rgb not in (None, "00000000"):
        ws[f"B{r}"].fill = PatternFill(fill_type=None)  # surlignage vert d'exemple du modèle

a = wb.create_sheet("Arguments coach")
from openpyxl.styles import PatternFill, Border, Side
VIOLET = PatternFill("solid", fgColor="2B2B2B"); GRIS = PatternFill("solid", fgColor="F7F5F2")
fin = Side(style="thin", color="E3DED7"); BORD = Border(bottom=fin)
a["A1"] = "Mes 10 idées de business — pourquoi chaque produit"
a["A1"].font = Font(name="Arial", bold=True, size=16, color="2B2B2B")
a["A2"] = "Coût = prix Alibaba × 0,86. Prix de revente vérifiés sur les sites français. Marge sans livraison ni pub."
a["A2"].font = Font(name="Arial", size=9, color="8C8279")
for j, t in enumerate(["N°", "Produit", "Niche", "Coût", "Revente", "Marge", "Problème, solution, prix en France, fournisseur", "Lien Alibaba (à copier)"], 1):
    c = a.cell(4, j, t); c.font = Font(name="Arial", bold=True, size=9, color="FFFFFF"); c.fill = VIOLET
    c.alignment = Alignment(horizontal="center", vertical="center", wrap_text=True); c.border = BORD
for k, row in enumerate(rows):
    r = 5 + k
    niche = row[0].split(" — Niche : ")[1] if " — Niche : " in row[0] else ""
    vals = [k + 1, row[12], niche[:1].upper() + niche[1:], row[8], row[10], round(row[10] - row[8], 2), row[11], row[1]]
    for j, v in enumerate(vals, 1):
        c = a.cell(r, j, v); c.font = Font(name="Arial", size=9, bold=(j in (2, 6)), color="2B2B2B"); c.border = BORD
        c.alignment = Alignment(horizontal="center" if j in (1, 4, 5, 6, 8) else "left", vertical="center", wrap_text=True)
        if k % 2: c.fill = GRIS
        if j in (4, 5, 6): c.number_format = '#,##0.00 "€"'
    a.cell(r, 8).hyperlink = row[1]; a.cell(r, 8).font = Font(name="Arial", size=8, color="2F5597")
    a.row_dimensions[r].height = 95
for col, w in zip("ABCDEFGH", [5, 26, 20, 10, 10, 10, 85, 45]):
    a.column_dimensions[col].width = w
a.row_dimensions[4].height = 30; a.freeze_panes = "C5"


# Onglet « Validation Scutify » : méthode du support 01 (idée de business, critères, 4 questions)
from analyse import A
v = wb.create_sheet("Validation Scutify")
v["A1"] = "Validation Scutify — idée de business et 4 questions"
v["A1"].font = Font(name="Arial", bold=True, size=16, color="2B2B2B")
v["A2"] = "Méthode du support « Recherche de produits à fort potentiel » : cible → problème → idée de business, critère économique chiffré, effet wow, unique, puis les 4 questions de validation."
v["A2"].font = Font(name="Arial", size=9, color="8C8279")
heads = ["N°", "Produit", "Preuve que ça se vend déjà", "Cible", "Problème (douleur)", "Idée de business", "Économique (chiffré)", "Effet wow", "Unique", "Bénéfice évident au 1er regard ?", "Je visualise le site, les pubs, les arguments ?", "Prêt à investir 30 000 € sur ce seul produit ?"]
for j, t in enumerate(heads, 1):
    c = v.cell(4, j, t); c.font = Font(name="Arial", bold=True, size=9, color="FFFFFF"); c.fill = VIOLET
    c.alignment = Alignment(horizontal="center", vertical="center", wrap_text=True); c.border = BORD
for k, row in enumerate(rows):
    r = 5 + k; d = A[row[12]]
    vals = [k + 1, row[12], d.get("preuve", ""), d["cible"], d["probleme"], d["idee"], d["economique"], d["waw"], d["unique"], d["benefice_evident"], d["visualise"], d["invest_30k"]]
    for j, val in enumerate(vals, 1):
        c = v.cell(r, j, val); c.font = Font(name="Arial", size=9, bold=(j == 2), color="2B2B2B"); c.border = BORD
        c.alignment = Alignment(horizontal="center" if j == 1 else "left", vertical="top", wrap_text=True)
        if k % 2: c.fill = GRIS
    v.row_dimensions[r].height = 120
for col, w in zip("ABCDEFGHIJKL", [5, 22, 32, 26, 30, 38, 34, 26, 22, 26, 28, 30]):
    v.column_dimensions[col].width = w
v.row_dimensions[4].height = 42; v.freeze_panes = "C5"


# Onglet « 2e produits » : produits complémentaires à plus de 50 € (upsell), hors des 10 idées principales
from upsells import U
u = wb.create_sheet("2e produits")
u["A1"] = "2e produits (upsell) — proposés après le produit principal"
u["A1"].font = Font(name="Arial", bold=True, size=16, color="2B2B2B")
u["A2"] = "Prix de vente au-dessus de 50 € autorisé pour ces produits complémentaires : ils augmentent le panier moyen. Coût = prix Alibaba × 0,86."
u["A2"].font = Font(name="Arial", size=9, color="8C8279")
hu = ["Produit", "Se vend avec", "Problème", "Preuve prix France", "Prix fournisseur", "Coût", "Revente", "Marge", "Infos fournisseur", "Lien Alibaba (à copier)"]
for j, t in enumerate(hu, 1):
    c = u.cell(4, j, t); c.font = Font(name="Arial", bold=True, size=9, color="FFFFFF"); c.fill = VIOLET
    c.alignment = Alignment(horizontal="center", vertical="center", wrap_text=True); c.border = BORD
for k, (nom, avec, pb, preuve, lien, usd, cout, rev, info) in enumerate(U):
    r = 5 + k
    vals = [nom, avec, pb, preuve, f"{usd:.2f} $".replace(".", ","), cout, rev, round(rev - cout, 2), info, lien]
    for j, val in enumerate(vals, 1):
        c = u.cell(r, j, val); c.font = Font(name="Arial", size=9, bold=(j in (1, 8)), color="2B2B2B"); c.border = BORD
        c.alignment = Alignment(horizontal="center" if j in (5, 6, 7, 8) else "left", vertical="top", wrap_text=True)
        if j in (6, 7, 8): c.number_format = '#,##0.00 "€"'
        if k % 2: c.fill = GRIS
    u.cell(r, 10).hyperlink = lien; u.cell(r, 10).font = Font(name="Arial", size=8, color="2F5597")
    u.row_dimensions[r].height = 90
for col, w in zip("ABCDEFGHIJ", [28, 26, 40, 34, 12, 10, 10, 10, 30, 45]):
    u.column_dimensions[col].width = w
u.row_dimensions[4].height = 30

with tempfile.TemporaryDirectory() as t:
    brut = os.path.join(t, "brut.xlsx"); wb.save(brut)
    # Recalcul par LibreOffice : enregistre les résultats des formules dans le fichier.
    out = os.path.join(t, "calc")
    subprocess.run(["soffice", "--headless", "--calc", "--convert-to", "xlsx:Calc MS Excel 2007 XML",
                    "--outdir", out, brut], check=True, capture_output=True)
    shutil.copy(os.path.join(out, "brut.xlsx"), SORTIE)
print("OK ->", SORTIE)
