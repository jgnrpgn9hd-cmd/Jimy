# Vérifie les fiches Alibaba via la page publique « product-introduction » (sans captcha).
# FULL=True : page complète (titre + description) = fiche active. 404 = fiche supprimée. FULL=False = à vérifier sur téléphone.
# Usage : python3 verifier_liens.py URL [URL...]
import re, sys, html, subprocess, os
D = os.environ.get("CHK_DIR", "/tmp/chk"); os.makedirs(D, exist_ok=True)
def check(url):
    m = re.search(r'product-(?:detail|introduction)/(.+?)_(\d+)\.html', url)
    slug, pid = m.group(1), m.group(2)
    out = os.path.join(D, pid + ".html")
    r = subprocess.run(["curl","-sS","-L","--max-time","30","-o",out,"-w","%{http_code}",f"https://www.alibaba.com/product-introduction/{slug}_{pid}.html"],capture_output=True,text=True)
    t = open(out,encoding="utf-8",errors="ignore").read() if os.path.exists(out) else ""
    title = re.search(r"<title>(.*?)</title>", t, re.S); title = html.unescape(title.group(1)).strip() if title else ""
    txt = re.sub(r'\s+',' ',html.unescape(re.sub(r'<[^>]+>',' ',re.sub(r'<script.*?</script>|<style.*?</style>','',t,flags=re.S))))
    tiers = re.findall(r'([\d,]+ - [\d,]+|>= [\d,]+) (\w+) \$([\d.]+)', txt)
    full = bool(title) and ("Product overview" in txt or "Key features" in txt or len(t) > 50000)
    return f"{pid} http={r.stdout} size={len(t)} FULL={full} tiers={tiers[:3]} title={title[:70]}"
for u in sys.argv[1:]: print(check(u))
