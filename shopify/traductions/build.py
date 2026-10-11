import json; exec(open('textes.py').read())
D={
'gid://shopify/Page/705948713342':{'title':'2b5c3d26721ae9c350cf3009318b626f0fc8a90b4a2ac0ca8099c05aa849282e'},
'gid://shopify/Page/707846078846':{'title':'23247a701e9c43e2112b419e72fd3dc62296460069fc7c7f712c4f8fbfaa2f20'},
'gid://shopify/Page/708204921214':{'title':'307ef284ba576615fa72dc9a25e2102cd12ea9f7e1aa36f3843232dd6265c5ea','body_html':'e94267b93ce90704bcac00230ad60057d1f808aaae6562ae7bc98ed2cf4e28e1'},
'gid://shopify/Page/708204986750':{'title':'dbc468a14b601d5d9240aeb72b9fcd2f8aed2f4e30932876edf8d16ec313846b','body_html':'f787af1f4ce8c35ee33b453fbc6fd83d8148290d82e746dde2cfdde8325f5e4d'},
'gid://shopify/Page/708285694334':{'title':'cce9c0a1b975aca056b7a1949b9642ca30768efc4ffd568c35b8eac678ed3f72','body_html':'34504061cddea3d908f33d4a4d2a94171b611e50d0e3ca8c39c9acfefa18676a'},
'gid://shopify/Page/709524685182':{'title':'e5305dec009dd2ff1df14eb5eadd30d1d3fdbed762c40e8e2a3a9ecd5372f4f3','body_html':'d6a34caae2326db1cb12ad362611a98c0266f654045b981199bf1e8e8ea9dfbc'},
'gid://shopify/Product/16052426572158':{'title':'229afdfa67dc22548fe9e63d578b136c70ef82c1f327f9fae214eb5b4f331fc7','body_html':'3c96b9ee28d15a39b60f5e53bd870371917487791c938333f8961c449ec3ca1f','meta_title':'974a0b6017a272c4517e6c6b408d3516b28e18a6045df70f350eb8dad0e340d9','meta_description':'a44a7d63934999fb2de5cbb7d3b045f7d77f35d822bfc2be9483d0b13c6cc518'},
'gid://shopify/Product/16052552335742':{'title':'7ac5cce1d867edc30aded40103e796b72a5f488989c9e31ff6b44a89b87aaff0','body_html':'3949d3178364ea33268f2b17654978d4a1b9be806448cf744ca8865cf28c3b9b','meta_title':'0926019009cf2977842fab599d6828f63b2d92db6a86a6a021e56be2b27c9c51','meta_description':'620f25152b2c780ad5593f0721d37441c8faafa4561cd97df3e6dd3508e3a307'},
'gid://shopify/Product/16052553122174':{'title':'fd046b58e8ae7c789140c1141aa3518b18b27f1675329a5eebd27d2f940fb6d0','body_html':'7d9ca0fc4583fd292b84495a6d529963e735c03a8ac108f07183c2f4e3881997','meta_title':'c3e1802a85014aa3e81331cf9d466a0eea4462ccc706144d235c975c68a5a914','meta_description':'63a20f253150af7f98aa81e938cb7d694e9bf5498b315b514519ccf08a6f8e6e'},
'gid://shopify/Product/16104470348158':{'title':'277b465cd77cd4dbaec9c5ed93e70757e16a0f261792fc9fbac2b22fd906f802','body_html':'8664f1968923b3e58a03a64535d942b3c88ded12b3c6788c2d7feb3f4bd6e8bd','meta_title':'7b593b7bc3c4b4dd83bfa3997a103c6cfdd4278b5d899cb347892bcefd379787','meta_description':'95f63f47f4c75745b66d1af0198cde25ba243844fa459c377fb57e62b94706e9'},
'gid://shopify/Product/16104474182014':{'title':'7365d88fda1b1c676a54c0408bec6fe09b86b4ced48c25e6015a1095c3bd31be','body_html':'bb6c49e880fed77dc32bf42dc01859c9305c14114a94d013b4370b9c52d34f1e','meta_title':'75b7e8a230ba88c7441e3105588e9358f3173248798b9b00637537d3c54de73c','meta_description':'46fd1986e10638a0bc61bde5679fc804718a12f5ee9bdb87a0429da662f2edaf'}}
out=[]
for rid,f in T.items():
    tr=[]
    for k,(es,pt) in f.items():
        for loc,v in (('es',es),('pt-PT',pt)):
            tr.append({'locale':loc,'key':k,'value':v,'translatableContentDigest':D[rid][k]})
    out.append({'resourceId':rid,'translations':tr})
json.dump(out,open('payload.json','w'),ensure_ascii=False)
for o in out: print(o['resourceId'],len(o['translations']),len(json.dumps(o,ensure_ascii=False)))
