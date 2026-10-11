# Traductions ES / PT-PT du contenu du thème live (accueil, collection, fiche produit, pied de page).
# Les infos de livraison sont celles d'Espagne/Portugal : départ de Paris, 2 à 3 jours ouvrés.
import json, sys
SRC = sys.argv[1]  # export translatableContent du thème (liste key/value/digest)
T = {
 # Accueil
 "section.index.json.hero_DdhBcH.group_iCr8Rp__text_yn8mJC.text": ("<h1>El verdadero sabor del aceite de oliva andaluz</h1>", "<h1>O verdadeiro sabor do azeite andaluz</h1>"),
 "section.index.json.hero_DdhBcH.group_iCr8Rp__text_sub.text": ("<p>Virgen extra, de cosecha temprana, prensado en frío. Enviado desde París, en 2 a 3 días.</p>", "<p>Virgem extra, de colheita precoce, prensado a frio. Enviado de Paris, em 2 a 3 dias.</p>"),
 "section.index.json.hero_DdhBcH.group_iCr8Rp__group_Kd6LcE__button_4nF9Lg.label": ("Descubrir nuestros aceites", "Descobrir os nossos azeites"),
 "section.index.json.hero_DdhBcH.group_iCr8Rp__group_Kd6LcE__button_coffret.label": ("El estuche de cata", "A caixa de prova"),
 "section.index.json.section_Rassurance.row__r0__t.text": ("<h3>Directo del productor</h3>", "<h3>Direto do produtor</h3>"),
 "section.index.json.section_Rassurance.row__r0__p.text": ("<p>De los olivares andaluces a tu mesa, sin intermediarios.</p>", "<p>Dos olivais andaluzes para a sua mesa, sem intermediários.</p>"),
 "section.index.json.section_Rassurance.row__r1__t.text": ("<h3>Cosecha temprana, prensado en frío</h3>", "<h3>Colheita precoce, prensado a frio</h3>"),
 "section.index.json.section_Rassurance.row__r1__p.text": ("<p>Más frescura, más sabor.</p>", "<p>Mais frescura, mais sabor.</p>"),
 "section.index.json.section_Rassurance.row__r2__t.text": ("<h3>Enviado desde París</h3>", "<h3>Enviado de Paris</h3>"),
 "section.index.json.section_Rassurance.row__r2__p.text": ("<p>Chronopost, en 2 a 3 días laborables.</p>", "<p>Chronopost, em 2 a 3 dias úteis.</p>"),
 "section.index.json.section_Intro.t2.text": ("<h2>Pocos aceites, todos probados.</h2>", "<h2>Poucos azeites, todos provados.</h2>"),
 "section.index.json.section_Intro.t3.text": ("<p>Trabajamos directamente con productores andaluces. De sus aceites, solo nos quedamos con los que servimos en nuestra propia mesa.</p>", "<p>Trabalhamos diretamente com produtores andaluzes. Dos seus azeites, ficamos apenas com os que servimos à nossa própria mesa.</p>"),
 "section.index.json.product_list_Huiles.static-header__title.text": ("<h3>Nuestros aceites</h3>", "<h3>Os nossos azeites</h3>"),
 "section.index.json.product_list_Huiles.static-header__view_all.label": ("Ver todo", "Ver tudo"),
 "section.index.json.section_Guide.h.text": ("<h2>¿Qué aceite es para ti?</h2>", "<h2>Que azeite é para si?</h2>"),
 "section.index.json.section_Guide.row__c0__l.text": ("<p>01 · Para el día a día</p>", "<p>01 · No dia a dia</p>"),
 "section.index.json.section_Guide.row__c0__t.text": ("<h3>Para todos los días</h3>", "<h3>Para todos os dias</h3>"),
 "section.index.json.section_Guide.row__c0__p.text": ("<p>Redondo y equilibrado, en crudo o en cocción suave.</p>", "<p>Redondo e equilibrado, em cru ou em cozedura suave.</p>"),
 "section.index.json.section_Guide.row__c0__b.label": ("El Coupage", "O Coupage"),
 "section.index.json.section_Guide.row__c1__l.text": ("<p>02 · Para saborear</p>", "<p>02 · Para saborear</p>"),
 "section.index.json.section_Guide.row__c1__t.text": ("<h3>Para disfrutarlo en crudo</h3>", "<h3>Para saborear em cru</h3>"),
 "section.index.json.section_Guide.row__c1__p.text": ("<p>Manzana verde, almendra y un ligero picor al final.</p>", "<p>Maçã verde, amêndoa e um ligeiro picante no final.</p>"),
 "section.index.json.section_Guide.row__c1__b.label": ("La primera cosecha", "A primeira colheita"),
 "section.index.json.section_Guide.row__c2__l.text": ("<p>03 · En la cocina</p>", "<p>03 · Na cozinha</p>"),
 "section.index.json.section_Guide.row__c2__t.text": ("<h3>Para cocinar sin contar</h3>", "<h3>Para cozinhar sem contar</h3>"),
 "section.index.json.section_Guide.row__c2__p.text": ("<p>Arbequina ecológica, en gran formato de 1 L.</p>", "<p>Arbequina ecológica, em grande formato de 1 L.</p>"),
 "section.index.json.section_Guide.row__c2__b.label": ("El gran formato", "O grande formato"),
 "section.index.json.section_Guide.row__c3__l.text": ("<p>04 · Para regalar</p>", "<p>04 · Para oferecer</p>"),
 "section.index.json.section_Guide.row__c3__t.text": ("<h3>Para regalar</h3>", "<h3>Para oferecer</h3>"),
 "section.index.json.section_Guide.row__c3__p.text": ("<p>Tres variedades para probar una al lado de la otra.</p>", "<p>Três variedades para provar lado a lado.</p>"),
 "section.index.json.section_Guide.row__c3__b.label": ("El estuche", "A caixa"),
 "section.index.json.media_with_content_CwFqjm.content__g1__h.text": ("<h2>Cosecha temprana, prensado en frío</h2>", "<h2>Colheita precoce, prensado a frio</h2>"),
 "section.index.json.media_with_content_CwFqjm.content__g1__p.text": ("<p>Las aceitunas se recogen al inicio de la temporada. El aceite conserva más frescura, notas de hierba y un ligero amargor al final.</p>", "<p>As azeitonas são colhidas no início da época. O azeite guarda mais frescura, notas de erva e um ligeiro amargo no final.</p>"),
 "section.index.json.media_with_content_CwFqjm.content__g2__b.label": ("Probar la primera cosecha", "Provar a primeira colheita"),
 "section.index.json.media_with_content_xUctDh.content__g1__h.text": ("<h2>Para regalar: el estuche de cata</h2>", "<h2>Para oferecer: a caixa de prova</h2>"),
 "section.index.json.media_with_content_xUctDh.content__g1__p.text": ("<p>Hojiblanca, redonda. Arbosana, afrutada. Picual, más picante. Tres botellas para notar la diferencia entre una aceituna y otra, o para regalar.</p>", "<p>Hojiblanca, redonda. Arbosana, frutada. Picual, mais picante. Três garrafas para sentir a diferença entre uma azeitona e outra, ou para oferecer.</p>"),
 "section.index.json.media_with_content_xUctDh.content__g2__b.label": ("Ver el estuche", "Ver a caixa"),
 # Collection huiles
 "section.collection.huiles.json.banner.g__p.text": ("<p>Virgen extra, de Andalucía. Cosecha temprana, prensado en frío.</p>", "<p>Virgem extra, da Andaluzia. Colheita precoce, prensado a frio.</p>"),
 "section.collection.huiles.json.choisir.t.text": ("<h2>¿Cuál elegir?</h2>", "<h2>Qual escolher?</h2>"),
 "section.collection.huiles.json.choisir.cols__c1__h.text": ("<h3>Para todos los días</h3>", "<h3>Para todos os dias</h3>"),
 "section.collection.huiles.json.choisir.cols__c1__p.text": ("<p>La Arbequina o el Coupage. Suaves y versátiles, en crudo o en cocción suave.</p>", "<p>A Arbequina ou o Coupage. Suaves e versáteis, em cru ou em cozedura suave.</p>"),
 "section.collection.huiles.json.choisir.cols__c1__b.label": ("Ver la Arbequina", "Ver a Arbequina"),
 "section.collection.huiles.json.choisir.cols__c2__h.text": ("<h3>Para tomarlo en crudo</h3>", "<h3>Para provar em cru</h3>"),
 "section.collection.huiles.json.choisir.cols__c2__p.text": ("<p>La Arbequina de primera cosecha. Más fresca, con notas de manzana verde y un ligero picor.</p>", "<p>A Arbequina de primeira colheita. Mais fresca, com notas de maçã verde e um ligeiro picante.</p>"),
 "section.collection.huiles.json.choisir.cols__c2__b.label": ("Ver la primera cosecha", "Ver a primeira colheita"),
 "section.collection.huiles.json.choisir.cols__c3__h.text": ("<h3>Para regalar</h3>", "<h3>Para oferecer</h3>"),
 "section.collection.huiles.json.choisir.cols__c3__p.text": ("<p>El estuche de cata. Hojiblanca, Arbosana y Picual, para comparar una al lado de la otra.</p>", "<p>A caixa de prova. Hojiblanca, Arbosana e Picual, para comparar lado a lado.</p>"),
 "section.collection.huiles.json.choisir.cols__c3__b.label": ("Ver el estuche", "Ver a caixa"),
 "section.collection.huiles.json.faq.t.text": ("<h2>Preguntas frecuentes</h2>", "<h2>Perguntas frequentes</h2>"),
 "section.collection.huiles.json.faq.wrap__acc__r1.heading": ("¿Cuáles son los plazos de entrega?", "Quais são os prazos de entrega?"),
 "section.collection.huiles.json.faq.wrap__acc__r1__t.text": ("<p>Enviamos desde París con Chronopost. España peninsular, Baleares y Portugal: entrega en 2 a 3 días laborables.</p>", "<p>Enviamos de Paris com a Chronopost. Portugal continental, ilhas e Espanha: entrega em 2 a 3 dias úteis.</p>"),
 "section.collection.huiles.json.faq.wrap__acc__r2.heading": ("¿Cómo conservar mi aceite?", "Como conservar o meu azeite?"),
 "section.collection.huiles.json.faq.wrap__acc__r2__t.text": ("<p>Bien cerrado, protegido de la luz y del calor. Evita guardarlo junto a los fogones.</p>", "<p>Bem fechado, ao abrigo da luz e do calor. Evite guardá-lo ao pé do fogão.</p>"),
 "section.collection.huiles.json.faq.wrap__acc__r3.heading": ("Una botella ha llegado rota, ¿qué hago?", "Uma garrafa chegou partida, o que faço?"),
 "section.collection.huiles.json.faq.wrap__acc__r3__t.text": ("<p>Escríbenos en 48 horas con una foto desde nuestra <a href=\"/pages/contact\">página de contacto</a>. Te la reenviamos o te la reembolsamos.</p>", "<p>Escreva-nos em 48 horas com uma fotografia através da nossa <a href=\"/pages/contact\">página de contacto</a>. Voltamos a enviá-la ou reembolsamos.</p>"),
 # Fiche produit
 "section.product.json.product-information.product-details__group_J87VfC__reassure.text": ("<p>Envío a España y Portugal · Pago seguro · Devolución en 14 días (botella cerrada)</p>", "<p>Envio para Portugal e Espanha · Pagamento seguro · Devolução em 14 dias (garrafa fechada)</p>"),
 "section.product.json.product-information.product-details__group_J87VfC__infos__r1.heading": ("Envío", "Envio"),
 "section.product.json.product-information.product-details__group_J87VfC__infos__r1__t.text": ("<p>Tu pedido sale de París con Chronopost y se entrega en España peninsular y Baleares en 2 a 3 días laborables. Los gastos se muestran en la cesta, antes del pago.</p>", "<p>A sua encomenda sai de Paris com a Chronopost e é entregue em Portugal em 2 a 3 dias úteis. Os portes são indicados no carrinho, antes do pagamento.</p>"),
 "section.product.json.product-information.product-details__group_J87VfC__infos__r2.heading": ("Conservación", "Conservação"),
 "section.product.json.product-information.product-details__group_J87VfC__infos__r2__t.text": ("<p>Bien cerrado, protegido de la luz y del calor. Evita guardarlo junto a los fogones.</p>", "<p>Bem fechado, ao abrigo da luz e do calor. Evite guardá-lo ao pé do fogão.</p>"),
 "section.product.json.product-information.product-details__group_J87VfC__infos__r3.heading": ("Devoluciones", "Devoluções"),
 "section.product.json.product-information.product-details__group_J87VfC__infos__r3__t.text": ("<p>Tienes 14 días desde la recepción para cambiar de opinión, si la botella no se ha abierto. ¿Una botella ha llegado rota? Escríbenos en 48 horas con una foto: te la reenviamos o te la reembolsamos.</p>", "<p>Tem 14 dias após a receção para mudar de ideias, se a garrafa não tiver sido aberta. Uma garrafa chegou partida? Escreva-nos em 48 horas com uma fotografia: voltamos a enviá-la ou reembolsamos.</p>"),
 "section.product.json.product_recommendations_8RVdzU.text_w3FTGV.text": ("<h3>Nuestros otros aceites</h3>", "<h3>Os nossos outros azeites</h3>"),
 # Pied de page, contact, panier, 404
 "section.sections/footer-group.json.section_UM49qN.text_tqMiyM.text": ("<h2>Sigamos en contacto</h2>", "<h2>Fiquemos em contacto</h2>"),
 "section.sections/footer-group.json.section_UM49qN.text_6qbwK9.text": ("<p>Un email cuando llega un aceite nuevo. Nada más.</p>", "<p>Um email quando chega um azeite novo. Nada mais.</p>"),
 "section.sections/footer-group.json.section_UM49qN.email_signup_zGgJDN.label": ("Suscribirme", "Subscrever"),
 "section.sections/footer-group.json.footer.group_x4FxXe__menu_EQKgTP.heading": ("Tienda", "Loja"),
 "section.page.contact.json.form.contact_form_UwiCkQ__submit-button.label": ("Enviar", "Enviar"),
 "section.cart.json.cart-section.cart-page-title.title": ("Cesta", "Carrinho"),
 "section.cart.json.product_list_YRK996.static-header__product_list_text_Dkgy6X.text": ("<h3>Nuestros más vendidos</h3>", "<h3>Os mais vendidos</h3>"),
 "section.cart.json.product_list_YRK996.static-header__button_RCgx6a.label": ("Ver todo", "Ver tudo"),
 "section.404.json.main.text_GqmVFf.text": ("<h1>Página no encontrada</h1>", "<h1>Página não encontrada</h1>"),
 "section.404.json.main.text_Ua9XAW.text": ("<p>El enlace puede ser incorrecto o la página ya no existe.</p>", "<p>A ligação pode estar incorreta ou a página já não existe.</p>"),
 "section.404.json.main.button_PAQMwR.label": ("Seguir comprando", "Continuar a comprar"),
 "section.404.json.product_list_axmDjT.static-header__product_list_text_E7wGJF.text": ("<h3>Nuestros más vendidos</h3>", "<h3>Os mais vendidos</h3>"),
 "section.404.json.product_list_axmDjT.static-header__button_Vtz9N9.label": ("Ver todo", "Ver tudo"),
}
src = {x["key"].split(":")[0]: x for x in json.load(open(SRC))}
out = []
for k, (es, pt) in T.items():
    s = src[k]
    out.append({"locale": "es", "key": s["key"], "value": es, "translatableContentDigest": s["digest"]})
    out.append({"locale": "pt-PT", "key": s["key"], "value": pt, "translatableContentDigest": s["digest"]})
json.dump(out, open("theme_payload.json", "w"), ensure_ascii=False)
print(len(T), "clés,", len(out), "traductions")
