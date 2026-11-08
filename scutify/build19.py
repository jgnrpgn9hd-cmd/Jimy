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
rows=[
("Kit barre Pilates 13 pièces + élastiques + programme — Sport maison","https://www.alibaba.com/product-detail/13-Pcs-Home-Exercise-Starter-Kit_1601484459815.html","OUI","OUI","OUI","OUI","OUI","NON",6.49,6,34.9,"Problème : un cours de Pilates coûte 20-35 € la séance. Solution : le « reformer » chez soi. Prix vérifié : 18 € (sans marque) à 44-63 € (Amazon) → 34,90 € milieu de marché. Lien vérifié en stock : 7,55 $, MOQ 2."),
("Ensemble de sport sans couture pastel (legging taille haute + brassière) — Sport maison","https://www.alibaba.com/product-detail/Custom-Logo-Women-Sets-Sports-Bra_1601172785037.html","OUI","OUI","OUI","OUI","OUI","NON",7.10,9,34.9,"Problème : legging qui glisse, devient transparent, coutures qui frottent. Solution : sans couture, stretch 4 sens, coloris pastel. Prix vérifié : ensemble Decathlon 49,99 € → 34,90 € honnête. 483 vendus, 5,0/5 (73 avis), MOQ 2."),
("Tapis TPE 8 mm double couche antidérapant, pastel — Sport maison","https://www.alibaba.com/product-detail/Tpe-Yoga-Mat-Custom-Logo-Exercise_1601223812663.html","OUI","OUI","OUI","OUI","OUI","NON",6.86,5,29.9,"Problème : tapis qui glisse, genoux qui font mal. Solution : 8 mm d'amorti, double couche. Prix vérifié : 24,99-35,99 € en France. Lien vérifié en stock, 4,71-7,98 $. Encombrant : livraison plus chère."),
("Mini pistolet de massage 4 têtes — Récupération","https://www.alibaba.com/product-detail/Customized-Logo-Portable-Powerful-Deep-Tissue_1600835742970.html","OUI","OUI","OUI","OUI","OUI","NON",10.15,8,32.9,"Problème : courbatures après le sport. Waw : le muscle qui ondule à l'écran. Prix vérifié : sans marque 30-50 €, marques 65-190 €. Prix fournisseur actuel 11,80 $ → revente 32,90 € pour garder 20 € de marge. Fabricant 13 ans."),
("Masseur nuque et épaules chauffant shiatsu — Récupération","https://www.alibaba.com/product-detail/2025-Electric-Pain-Relief-Vibration-Body_1601165534367.html","OUI","OUI","OUI","OUI","OUI","NON",6.73,6,32.9,"Problème : nuque raide après le sport ou une journée sur écran. Waw : le pétrissage chauffant posé sur les épaules. Prix vérifié : 27-42 € en France (Kaufland 34,95 €, ManoMano 34 €). 221 vendus, 5,0/5 (24 avis), conforme UE, 7,83 $."),
("Tapis d'acupression + coussin + sac — Récupération","https://www.alibaba.com/product-detail/wholesale-Massage-Acupressure-Mat-and-Pillow_62341454488.html","OUI","OUI","OUI","OUI","OUI","NON",5.16,6,27.9,"Problème : dos tendu, mal à décrocher le soir. Solution : 15 min allongé pour détendre le dos. Prix vérifié : 20,99-34,99 € (Tunturi 34,99 €). Vendu depuis des années. Fournisseur 17 ans, 5/5 (149). Parler détente, pas de promesse médicale."),
("Coussin lombaire à mémoire de forme, housse lavable — Dos","https://www.alibaba.com/product-detail/China-Manufacturers-Portable-Office-Chair-Car_1601051263301.html","OUI","OUI","OUI","OUI","OUI","NON",3.29,6,24.9,"Exemple produit-problème de ta formation (mal de dos en télétravail). Prix vérifié : 20,99-30,71 € en France. Lien vérifié en stock, 3,83 $, fabricant Linsen (autre modèle à 950 vendus)."),
("Pommeau de douche anticalcaire filtre vitamine C — Rituel après sport","https://www.alibaba.com/product-detail/water-saver-pommau-de-douche-anti_1600072015451.html","OUI","OUI","OUI","OUI","OUI","NON",1.20,8,24.9,"Gardé par toi, lien remplacé (l'ancien n'était plus en stock). Problème : eau calcaire, peau qui tire après la douche. Prix vérifié : 20-30 € en France. En stock, 1,39 $, 4,5/5. Récurrent : recharges."),
("Réveil lumière qui simule le lever du soleil — Sommeil","https://www.alibaba.com/product-detail/shenzhen-snooze-sunrise-wake-up-light_60603683987.html","OUI","OUI","OUI","OUI","OUI","NON",13.59,8,34.9,"Problème : se lever dans le noir l'hiver (pile la saison). Prix vérifié : entrée de gamme ~31 €, Philips 100-150 €. En stock, 11,50-15,80 $, MOQ 1, CE/FCC/RoHS."),
("Projecteur ciel étoilé astronaute, minuterie + bruit blanc — Sommeil","https://www.alibaba.com/product-detail/Astronaut-Galaxy-Star-Projector-With-9_1601082100275.html","OUI","OUI","OUI","OUI","OUI","NON",10.57,7,34.9,"Problème : mal à décrocher le soir. Solution : lumière douce + bruit blanc + minuterie. Viral TikTok depuis 2021. Prix vérifié : 25-42 € en France. En stock, 12,29 $, MOQ 1, CE/FCC/UL."),
]
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
