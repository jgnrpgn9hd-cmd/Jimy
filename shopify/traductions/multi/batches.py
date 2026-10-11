# Contrôle + découpage en lots translationsRegister pour une langue.
# Usage : python3 batches.py <locale>   → écrit lots_<locale>_N.json (variables {r0,t0,...})
import json, re, sys
loc = sys.argv[1]
src = {str(x["id"]): x for x in json.load(open("source.json"))}
tr = json.load(open(f"{loc}.json"))
skip = {"77"} if loc in ("es", "pt-PT") else set()
errs = []
for i, x in src.items():
    if i in skip: continue
    v = tr.get(i, "")
    if not v.strip(): errs.append((i, "vide")); continue
    if x["fr"].count("<") != v.count("<"): errs.append((i, "balises", x["fr"].count("<"), v.count("<")))
    for pat in (r"\{\{.*?\}\}", r"\{%.*?%\}"):
        if sorted(re.findall(pat, x["fr"])) != sorted(re.findall(pat, v)): errs.append((i, "liquid"))
    if re.search(r"\bbio(log)?", v, re.I) and not re.search(r"\bbio(log)?", x["fr"], re.I): errs.append((i, "bio"))
    for h in re.findall(r'(?:href|src)="[^"]*"', x["fr"]):
        if h not in v: errs.append((i, "lien", h))
print("erreurs:", errs)
groups = {}
for i, x in src.items():
    if i in skip: continue
    groups.setdefault(x["rid"], []).append({"locale": loc, "key": x["key"], "value": tr[i], "translatableContentDigest": x["digest"]})
lots, cur, size = [], {}, 0
for rid, t in groups.items():
    for e in t:
        s = len(json.dumps(e, ensure_ascii=False))
        if cur and (size + s > 14000 or (rid not in cur and len(cur) >= 15)):
            lots.append(cur); cur, size = {}, 0
        cur.setdefault(rid, []).append(e); size += s
if cur: lots.append(cur)
for n, lot in enumerate(lots):
    v = {}
    for k, (rid, t) in enumerate(lot.items()):
        v[f"r{k}"] = rid; v[f"t{k}"] = t
    json.dump(v, open(f"lots_{loc}_{n}.json", "w"), ensure_ascii=False)
    print(n, len(lot), len(json.dumps(v, ensure_ascii=False)))
