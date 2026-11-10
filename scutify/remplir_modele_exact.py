# Remplit le modèle Scutify EXACTEMENT : on modifie seulement le XML des cellules B à L (lignes 6 à 15)
# et les valeurs déjà calculées des formules (M à U), sans repasser par LibreOffice ni openpyxl.
# Tout le reste du fichier (styles, formats, largeurs, listes déroulantes, image) reste identique à l'octet près.
# Usage : python3 remplir_modele_exact.py [modèle.xlsx]
import os, re, sys, zipfile
from xml.sax.saxutils import escape
from produits import rows

ICI = os.path.dirname(os.path.abspath(__file__))
MODELE = sys.argv[1] if len(sys.argv) > 1 else os.path.join(ICI, "modele_scutify_vierge.xlsx")
SORTIE = os.path.join(ICI, "Support Scutify S01_Tableau recherche 10 idées de business.xlsx")
SHEET = "xl/worksheets/sheet1.xml"
IDX = {"NON": 27, "OUI": 28}  # index des textes « NON » / « OUI » dans sharedStrings.xml du modèle


def num(v):
    return repr(float(v)) if not float(v).is_integer() else f"{float(v):.1f}"


def calcule(r, D, E, F, G, H, I, J, K, L):
    """Reproduit les formules du modèle (la ligne 6 a ses propres formules P et T)."""
    M = round(L - J, 2)
    N = sum(1.5 for x in (D, E, F) if x == "OUI") + sum(0.25 for x in (G, H) if x == "OUI") + (1 if I == "NON" else 0)
    O = 1 if J > 25 else 0.5
    Q = round(J * 3, 2)
    R = 1.5 if L > Q else 0
    S = 1 if L == Q else 0
    if r == 6:
        P = 1.5 if K > 6 else 0
        T = R + S
    else:
        P = 0 if K < 5 else 1
        T = 1 if M > 3 * J else (0.5 if M == 3 * J else 0)
    U = N + P + O + T
    return dict(M=M, N=N, O=O, P=P, Q=Q, R=R, S=S, T=T, U=U)


with zipfile.ZipFile(MODELE) as z:
    items = [(i, z.read(i.filename)) for i in z.infolist()]
xml = dict((i.filename, d) for i, d in items)[SHEET].decode("utf-8")

for k, row in enumerate(rows):
    r = 6 + k
    _, lien, D, E, F, G, H, I, J, K, L, _, court = row
    m = re.search(rf'<row r="{r}"[^>]*>.*?</row>', xml, re.S)
    ligne = m.group(0)

    def cell(col, contenu, typ=None):
        global ligne
        pat = re.compile(rf'<c r="{col}{r}" s="(\d+)"(?: t="\w+")?(?:/>|>.*?</c>)', re.S)
        s = pat.search(ligne).group(1)
        t = f' t="{typ}"' if typ else ""
        ligne = pat.sub(lambda _: f'<c r="{col}{r}" s="{s}"{t}>{contenu}</c>', ligne, count=1)

    cell("B", f"<is><t>{escape(court)}</t></is>", "inlineStr")
    cell("C", f"<is><t>{escape(lien)}</t></is>", "inlineStr")
    for col, v in zip("DEFGHI", (D, E, F, G, H, I)):
        cell(col, f"<v>{IDX[v]}</v>", "s")
    cell("J", f"<v>{num(J)}</v>")
    cell("K", f"<v>{num(K)}</v>")
    cell("L", f"<v>{num(L)}</v>")
    # valeurs déjà calculées des formules, pour que le tableau s'affiche juste partout (téléphone compris)
    for col, v in calcule(r, D, E, F, G, H, I, J, K, L).items():
        ligne = re.sub(rf'(<c r="{col}{r}"[^>]*>(?:<f[^>]*/>|<f[^>]*>.*?</f>))<v>[^<]*</v>',
                       lambda mm: mm.group(1) + f"<v>{v}</v>", ligne, count=1, flags=re.S)
    xml = xml[:m.start()] + ligne + xml[m.end():]

# Lien Alibaba visible en entier : colonne C plus large, retour à la ligne automatique, lignes 6-15 plus hautes.
LARGEUR_C, HAUTEUR = "50.0", "54.0"
STYLES = "xl/styles.xml"
styles = dict((i.filename, d) for i, d in items)[STYLES].decode("utf-8")
bloc = re.search(r'<cellXfs count="(\d+)">(.*?)</cellXfs>', styles, re.S)
xfs = re.findall(r'<xf [^>]*?(?:/>|>.*?</xf>)', bloc.group(2), re.S)
nouveaux, remap = [], {}
for s in sorted(set(re.findall(r'<c r="C(?:[6-9]|1[0-5])" s="(\d+)"', xml))):
    xf = xfs[int(s)].replace('<alignment ', '<alignment wrapText="1" ', 1)
    remap[s] = str(len(xfs) + len(nouveaux))
    nouveaux.append(xf)
styles = (styles[:bloc.start()] + f'<cellXfs count="{len(xfs) + len(nouveaux)}">'
          + bloc.group(2) + "".join(nouveaux) + "</cellXfs>" + styles[bloc.end():])
xml = re.sub(r'<c r="(C(?:[6-9]|1[0-5]))" s="(\d+)"', lambda m: f'<c r="{m.group(1)}" s="{remap[m.group(2)]}"', xml)
xml = re.sub(r'(<col [^>]*min="3" max="3" width=")[^"]*"', rf'\g<1>{LARGEUR_C}"', xml)
xml = re.sub(r'<row r="([6-9]|1[0-5])" ht="[^"]*"', lambda m: f'<row r="{m.group(1)}" ht="{HAUTEUR}"', xml)

with zipfile.ZipFile(SORTIE, "w") as out:
    for info, data in items:
        if info.filename == SHEET:
            data = xml.encode("utf-8")
        elif info.filename == STYLES:
            data = styles.encode("utf-8")
        out.writestr(info, data)
print("OK ->", SORTIE)
