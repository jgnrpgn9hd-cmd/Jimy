from openpyxl import Workbook
from openpyxl.styles import Font, PatternFill, Alignment, Border, Side
from openpyxl.utils import get_column_letter
F="Times New Roman"
def f(b=False,s=10,c="000000",u=None): return Font(name=F,bold=b,size=s,color=c,underline=u)
s=Side(style="thin",color="000000"); BD=Border(left=s,right=s,top=s,bottom=s)
C=Alignment(horizontal="center",vertical="center",wrap_text=True)
PUR=PatternFill("solid",fgColor="7030A0"); GR=PatternFill("solid",fgColor="BFBFBF"); BL=PatternFill("solid",fgColor="9999FF"); OR=PatternFill("solid",fgColor="FFC000"); Y=PatternFill("solid",fgColor="FFF2CC")
wb=Workbook(); ws=wb.active; ws.title="Mes 10 idées"
ws["B1"]="MES 10 IDEES DE BUSINESS"; ws["B1"].font=f(True,11,u="single")
# header rows 3-5
ws.merge_cells("D3:F3"); ws["D3"]="CRITERES PRINCIPAUX"
ws.merge_cells("G3:H3"); ws["G3"]="CRITERES SECONDAIRES"
for a in ("D3","G3"): ws[a].font=f(True); ws[a].fill=GR; ws[a].alignment=C
for col in "DEFGH": ws[f"{col}3"].border=BD
heads={"B":("PRODUIT",PUR,"FFFFFF",""),"C":("LIEN ALIBABA",PUR,"FFFFFF",""),
"D":("ÉCONOMIQUE",GR,"000000","Est-ce que ton produit fait économiser de l'argent ?"),
"E":("SOLUTION PROBLÈME",GR,"000000","Est-ce qu'il résout une douleur physique ou psychologique ?"),
"F":("BESOIN / PASSION",GR,"000000","Une passion qui pousse à l'achat pour combler un besoin"),
"G":("EFFET WAW",GR,"000000","Ce qui attire l'attention"),
"H":("UNIQUE",GR,"000000","Particularité claire et identifiable (personnalisable)"),
"I":("SAISONNIER",PUR,"FFFFFF",""),
"J":("COÛT PRODUIT (€)",BL,"000000","≈ prix Alibaba converti"),
"K":("COÛT DE LIVRAISON",BL,"000000","Note de 0 à 10 (10 = livraison peu chère)"),
"L":("PRIX DE REVENTE (€)",BL,"000000",""),
"M":("MARGE (€)",BL,"000000","sans coût d'expédition"),
"N":("NOTE FINALE /10",OR,"000000","5 critères sur 5 validés")}
for col,(t,fill,fc,sub) in heads.items():
    ws[f"{col}4"]=t; ws[f"{col}5"]=sub
    for r in (4,5):
        c=ws[f"{col}{r}"]; c.fill=fill; c.border=BD; c.alignment=C
        c.font=f(r==4,9 if r==4 else 7,fc)
    if col in "BCI": ws.merge_cells(f"{col}4:{col}5")
A="https://www.alibaba.com/"; NOR="https://norlun.en.alibaba.com/index.html"
from produits import rows
for k,row in enumerate(rows):
    r=6+k
    ws[f"A{r}"]=k+1; ws[f"A{r}"].font=f(True)
    vals=dict(zip("BCDEFGHIJKL",row[:11]))
    for col,v in vals.items():
        c=ws[f"{col}{r}"]; c.value=v; c.border=BD; c.font=f(); c.alignment=C if col!="B" else Alignment(vertical="center",wrap_text=True)
    ws[f"C{r}"].hyperlink=row[1]; ws[f"C{r}"].font=f(s=7,c="0563C1",u="single"); ws[f"C{r}"].alignment=Alignment(vertical="center",wrap_text=True)
    ws[f"M{r}"]=round(row[10]-row[8],2); ws[f"N{r}"]=10
    for col in "JLM": ws[f"{col}{r}"].number_format='#,##0.00 €'
    for col in "MN": ws[f"{col}{r}"].border=BD; ws[f"{col}{r}"].alignment=C; ws[f"{col}{r}"].font=f(True)
    ws[f"N{r}"].fill=OR
    for col in "JKL": ws[f"{col}{r}"].font=f(c="0000FF")
ws["B17"]="Coût produit = prix Alibaba × 0,86 (hors logo). Coût de livraison : 10 = pas cher à expédier."
ws["B17"].font=f(s=8); ws["B18"]="Prix de revente vérifiés sur les prix pratiqués en France (Amazon, Leroy Merlin, ManoMano…), tous sous 35 €. Toutes les marges sont au-dessus de 20 € (critère Scutify). Marge = prix de revente − coût produit (hors livraison et pub)."; ws["B18"].font=f(s=8)
for col,w in zip("ABCDEFGHIJKLMN",[4,34,42,12,12,12,11,13,11,11,12,11,11,11]): ws.column_dimensions[col].width=w
ws.row_dimensions[5].height=48
for r in range(6,16): ws.row_dimensions[r].height=42
ws.freeze_panes="C6"
a=wb.create_sheet("Arguments coach")
a["A1"]="Pourquoi chaque critère est OUI"; a["A1"].font=f(True,12)
for k,row in enumerate(rows):
    a.cell(k+3,1,f"{k+1}. {row[0]}").font=f(True)
    a.cell(k+3,2,row[11]).font=f(); a.cell(k+3,2).alignment=Alignment(wrap_text=True,vertical="top")
    a.row_dimensions[k+3].height=40
a.column_dimensions["A"].width=50; a.column_dimensions["B"].width=90
import os
wb.save(os.path.join(os.path.dirname(os.path.abspath(__file__)),"Mes_10_idees_business_RECUPERATION.xlsx"))
