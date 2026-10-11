# Compléments ES / PT-PT : livraisons, mentions légales (politique), boutique, blog, menus,
# collections charcuterie (pt), titre « Collections » du thème (pt).
import json
G = "gid://shopify/"
DOM = "Expédiée de Paris"
R = []  # (resourceId, key, digest, es or None, pt)
dom_desc = ("9b5086fd8452184d5a99a12a5af2e6b384a515ec9d12ba39659b07f96d4950f1",
            "Enviado desde París · entrega en 3 días · gratis a partir de 80 €",
            "Enviado de Paris · entrega em 3 dias · grátis a partir de 80 €")
for i in ("1315903734142","1315903766910","1315903799678","1315903832446","1315903865214","1315903897982"):
    R.append((G+"DeliveryMethodDefinition/"+i, "name", "cacebba8216246603497a9df9229658fda971ac5ae57a3e038e807d90a1e8022",
              "Envío Chronopost a domicilio", "Entrega Chronopost ao domicílio"))
    R.append((G+"DeliveryMethodDefinition/"+i, "description", *dom_desc))
R.append((G+"DeliveryMethodDefinition/1315902325118", "name", "6ca8c4996bde3ae857506bca773d476dce1ac566a790e1bf6a56f8a295db6420",
          "Envío Chronopost gratuito", "Entrega Chronopost grátis"))
R.append((G+"DeliveryMethodDefinition/1315902325118", "description", "1f73a03a40b64c629e6d590e4a71d16572ed3b069bf4eb925d155fcd1c9bc737",
          "Enviado desde París · entrega en 3 días", "Enviado de Paris · entrega em 3 dias"))
for i in ("1315920937342","1315920970110","1315921002878"):
    R.append((G+"DeliveryMethodDefinition/"+i, "name", "4d2072c62e0e4113090d0dbd3b8a8a201df6ed79d35f1cbf2db5d78539e6e6f8",
              "Chronopost Classic Europe", "Chronopost Classic Europe"))
    R.append((G+"DeliveryMethodDefinition/"+i, "description", "147e588ca11f801032c9a898480e517d0daece5061a84e18494480985b26c400",
              "Enviado desde París · entrega en 2 a 3 días laborables", "Enviado de Paris · entrega em 2 a 3 dias úteis"))
LEG = ("<p>Nombre comercial: culinary consulting solution&nbsp;</p>\n<p>Teléfono: 0659660824</p>\n<p>Email: davicojairo09@gmail.com</p>\n<p>Dirección: 5 Rue du Docteur Schapira, 93330 Neuilly-sur-Marne, Francia</p>\n<p>Número de IVA: &nbsp;</p>\n<p>Número de empresa (SIRET): <span>945 369 957 00010</span></p>",
       "<p>Nome comercial: culinary consulting solution&nbsp;</p>\n<p>Telefone: 0659660824</p>\n<p>Email: davicojairo09@gmail.com</p>\n<p>Morada: 5 Rue du Docteur Schapira, 93330 Neuilly-sur-Marne, França</p>\n<p>Número de IVA: &nbsp;</p>\n<p>Número de empresa (SIRET): <span>945 369 957 00010</span></p>")
R.append((G+"ShopPolicy/56987255166", "body", "a9d04a10a2aec2b537bb389189889e01732ec70ffe4e1e8148f4bea2c3a43cea", *LEG))
R.append((G+"Shop/100727423358", "meta_title", "798cc0f0ce54fd42212dbf4b39e414c165f6b9fd0463a5fc12d57d519edd94fc", None, "Jimenez"))
R.append((G+"Blog/124696068478", "title", "da288dd2a3d9536a6573a49bd70fbb60b4639e5b16dfb2e2595bdb118f9750a9", None, "Novidades"))
R.append((G+"Menu/359646003582", "title", "4546ae0b013232b5b2796928a92cb096edc93c20498337f6c3ee4eb060e57cd9", None, "Menu principal"))
R.append((G+"Menu/359646036350", "title", "7d9e675b7727a1723186a4427a18d5e1b15c183bbb5ddd7464cdea79fb402c68", None, "Menu do rodapé"))
R.append((G+"Menu/359646069118", "title", "ee4f1093cdfe3a67b0d73192b63bf09050c44e81ba2ecd02a3d066588d2a26ed", None, "Menu da conta de cliente"))
C = [
 ("753182933374", "b6f2cbe8f02f8fa39172136b5831084a6133cc9120398d781213f1c96b4e78bd", "Presuntos ibéricos",
  "2eec7a07906b74fa93fe6246eef238348fcd99540ae0b452c94f4188c96dcc46", "<p>Presuntos ibéricos. Preços indicados ao kg para as peças inteiras e desossadas. Os formatos fatiados são propostos aos 100 g, segundo o método de corte indicado.</p>"),
 ("753182966142", "8f2b186a50ab9155425064b9c08bf2b46d133eb1b7ce0d5bd820431b2a632f28", "Paletas ibéricas",
  "30dedd1022a151a15446e29d16c0b59aa6c39c1b5f8b084f2a25038949f865c6", "<p>Paletas ibéricas. Preços indicados ao kg para as peças inteiras e desossadas. Os formatos fatiados são propostos aos 100 g quando o preço está disponível.</p>"),
 ("753182998910", "5868ba6599344b4a2e493a91f26a4f1cb37d1f47acab790136aa9e97ae18e108", "Enchidos ibéricos",
  "9b11f36b5e0d94324dc04fa8acabada8624aa8f8ab9dd2092fc2e939c6422847", "<p>Enchidos ibéricos em peça.</p>"),
]
for cid, dt, t, db, b in C:
    R.append((G+"Collection/"+cid, "title", dt, None, t))
    R.append((G+"Collection/"+cid, "body_html", db, None, b))
R.append((G+"Collection/747176821118", "title", "9b87f4b2595358107b068c38c1d573df79daa3bcc33e69c195d05c165aa071b5", None, "Página inicial"))
R.append((G+"OnlineStoreTheme/197493555582", "section.list-collections.json.collection_list_kTdkcn.group_we9NFt__text_BfQ46x.text:bw368cimbvsh",
          "883500fc3d16ebcd07ab4a930c5b655208eb188c20e5a49bad4c7b2a328c288c", None, "<h1>Coleções</h1>"))
groups = {}
for rid, k, d, es, pt in R:
    g = groups.setdefault(rid, [])
    if es is not None:
        g.append({"locale": "es", "key": k, "value": es, "translatableContentDigest": d})
    g.append({"locale": "pt-PT", "key": k, "value": pt, "translatableContentDigest": d})
ids = list(groups)
q = "mutation(" + ", ".join(f"$r{i}: ID!, $t{i}: [TranslationInput!]!" for i in range(len(ids))) + ") { "
q += " ".join(f"a{i}: translationsRegister(resourceId: $r{i}, translations: $t{i}) {{ userErrors {{ message }} }}" for i in range(len(ids))) + " }"
v = {}
for i, rid in enumerate(ids):
    v[f"r{i}"] = rid; v[f"t{i}"] = groups[rid]
print(q); print(json.dumps(v, ensure_ascii=False))
