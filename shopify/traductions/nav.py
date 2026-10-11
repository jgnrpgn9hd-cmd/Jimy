# Traductions ES / PT-PT : collections et liens de menu.
# (resourceId, key, digest, es, pt)
import json
C1 = "gid://shopify/Collection/750857027966"
C2 = "gid://shopify/Collection/753408344446"
R = [
 (C1, "title", "6dd52773a526fa626da9bfd427b9db458fe6be7f16300b226267f7582c6f6598", "Aceites de oliva", "Azeites"),
 (C1, "body_html", "9aad5f8405552b38ff36d28020a57236092a8adc6e5c00ddbdac4aa8ebe26b2b",
  "<p>Nuestros aceites de oliva virgen extra vienen de Andalucía. Recogidos temprano, prensados en frío y enviados desde París. Arbequina, Coupage o estuche de tres variedades: para tomar en crudo, sobre pan, verduras o pescado.</p>",
  "<p>Os nossos azeites virgem extra vêm da Andaluzia. Colhidos cedo, prensados a frio e enviados de Paris. Arbequina, Coupage ou caixa de três variedades: para provar em cru, no pão, em legumes ou num peixe.</p>"),
 (C1, "meta_title", "e62cb752df5c826a2192684c02548f31170a961dfd63e5b93f4c8db404763b00",
  "Aceite de oliva virgen extra de Andalucía | Jiménez", "Azeite virgem extra da Andaluzia | Jiménez"),
 (C1, "meta_description", "0f2ade3c5066d9d2d9ce6bfa307cb96b4a44a0e3a507918143f613acf3121835",
  "Aceites de oliva virgen extra de Andalucía, recogidos temprano y prensados en frío. Arbequina, Coupage y estuche de cata. Envío a España y Portugal.",
  "Azeites virgem extra da Andaluzia, colhidos cedo e prensados a frio. Arbequina, Coupage e caixa de prova. Envio para Portugal e Espanha."),
 (C2, "title", "88f6fce9dced24c202bd716498bd7c77d94a8f3b3492c8ba42c3ea6ee5853f40", "Aceites de oliva", "Azeites"),
 (C2, "body_html", "2403035fa1dab587c62e9c856aa302d7d6c103531ecbec630774f658a04ffb7f",
  "<p>Aceites de oliva virgen extra andaluces y estuches de cata, seleccionados directamente a los productores.</p>",
  "<p>Azeites virgem extra andaluzes e caixas de prova, selecionados diretamente junto dos produtores.</p>"),
]
L = {
 "1448309719422": ("533161735639c51adb4623f3780b497601d7b82108e6f03f5b65b5dd4c89f616", "Inicio", "Início"),
 "1448309784958": ("2b5c3d26721ae9c350cf3009318b626f0fc8a90b4a2ac0ca8099c05aa849282e", "Contacto", "Contacto"),
 "1464601018750": ("2b5c3d26721ae9c350cf3009318b626f0fc8a90b4a2ac0ca8099c05aa849282e", "Contacto", "Contacto"),
 "1448309817726": ("733d1c742675f53792b10c780b3584b2197101e56f892ca382c35133ca6dce55", "Buscar", "Pesquisar"),
 "1448309850494": ("0e3118a24b9ff7bdffb66c7342f1ad65016394b6cc2db7abc9a93b184560b82c", "Pedidos", "Encomendas"),
 "1448309883262": ("e267d343821f264e61be7d66ef27acd640e0cdb4ef2df9b54ad6ebff0f3ab35f", "Perfil", "Perfil"),
 "1464601051518": ("307ef284ba576615fa72dc9a25e2102cd12ea9f7e1aa36f3843232dd6265c5ea", "Quiénes somos", "Quem somos"),
 "1464896586110": ("307ef284ba576615fa72dc9a25e2102cd12ea9f7e1aa36f3843232dd6265c5ea", "Quiénes somos", "Quem somos"),
 "1464601084286": ("dbc468a14b601d5d9240aeb72b9fcd2f8aed2f4e30932876edf8d16ec313846b", "Preguntas frecuentes", "Perguntas frequentes"),
 "1464601117054": ("cce9c0a1b975aca056b7a1949b9642ca30768efc4ffd568c35b8eac678ed3f72", "Aviso legal", "Aviso legal"),
 "1464896553342": ("6dd52773a526fa626da9bfd427b9db458fe6be7f16300b226267f7582c6f6598", "Aceites de oliva", "Azeites"),
}
for lid, (d, es, pt) in L.items():
    R.append(("gid://shopify/Link/" + lid, "title", d, es, pt))
groups = {}
for rid, k, d, es, pt in R:
    g = groups.setdefault(rid, [])
    g.append({"locale": "es", "key": k, "value": es, "translatableContentDigest": d})
    g.append({"locale": "pt-PT", "key": k, "value": pt, "translatableContentDigest": d})
ids = list(groups)
q = "mutation(" + ", ".join(f"$r{i}: ID!, $t{i}: [TranslationInput!]!" for i in range(len(ids))) + ") {\n"
q += "\n".join(f"  a{i}: translationsRegister(resourceId: $r{i}, translations: $t{i}) {{ userErrors {{ message }} }}" for i in range(len(ids))) + "\n}"
v = {}
for i, rid in enumerate(ids):
    v[f"r{i}"] = rid; v[f"t{i}"] = groups[rid]
print(q); print(json.dumps(v, ensure_ascii=True))
