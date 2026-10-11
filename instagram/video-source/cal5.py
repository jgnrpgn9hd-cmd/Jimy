exec(open('cal5_base.py').read())
import json
def listing(i,n,series,k,title,rows,dark=False,lead=None):
    fg='#F5EFE4' if dark else '#1F241C'; ac='#D8C08F' if dark else '#A88B57'; bc='#E6DDCE' if dark else '#4B523C'; hc='rgba(245,239,228,.3)' if dark else 'rgba(31,36,28,.18)'
    s=chrome(i,n,series,dark=dark)+f'<div class="k" style="position:absolute;left:80px;top:220px;color:{ac}">{k}</div><div class="T" style="position:absolute;left:76px;right:80px;top:270px;font-size:110px;color:{fg}">{title}</div>'
    y0=270+110*(title.count('<br>')+1)+80; step=min(160,(1150-y0)//max(1,len(rows)))
    for q,(a,b) in enumerate(rows):
        y=y0+q*step
        s+=f'<div style="position:absolute;left:80px;right:80px;top:{y}px;height:1px;background:{hc}"></div>'
        if lead=='num': s+=f'<div class="T" style="position:absolute;left:80px;top:{y+26}px;font-size:70px;color:{ac}">{q+1}</div><div class="p" style="position:absolute;left:170px;right:80px;top:{y+34}px;font-size:34px;color:{fg}">{a}</div>'
        else: s+=f'<div class="T" style="position:absolute;left:80px;top:{y+30}px;font-size:58px;color:{fg}">{a}</div><div class="p" style="position:absolute;left:470px;right:80px;top:{y+44}px;font-size:31px;color:{bc}">{b}</div>'
    return ('background:'+('#4B523C' if dark else 'linear-gradient(#EFE1CD,#F4EADB)'),s)
def PF(u,i,n,series,k,t,sub=None,dark=False,ty=210,op='50% 50%'):
    fg='#F5EFE4' if dark else '#1F241C'; ac='#E2C98F' if dark else '#8C6F3E'; bc='#EDE5D6' if dark else '#3E4632'
    g='linear-gradient(to bottom,rgba(20,22,16,.62) 0%,rgba(20,22,16,.25) 34%,rgba(20,22,16,0) 50%,rgba(20,22,16,0) 80%,rgba(20,22,16,.45) 100%)' if dark else 'linear-gradient(to bottom,rgba(246,240,229,.78) 0%,rgba(246,240,229,.45) 30%,rgba(246,240,229,0) 46%,rgba(246,240,229,0) 78%,rgba(246,240,229,.9) 100%)'
    s=f'<img class="ph" src="../ai/{u}.png" style="left:0;top:0;width:1080px;height:1350px;object-position:{op}"><div style="position:absolute;inset:0;background:{g}"></div>'+chrome(i,n,series,dark=dark)
    s+=f'<div class="k" style="position:absolute;left:80px;top:{ty}px;color:{ac}">{k}</div><div class="T" style="position:absolute;left:76px;right:80px;top:{ty+48}px;font-size:104px;color:{fg}">{t}</div>'
    if sub: s+=f'<div class="p" style="position:absolute;left:80px;right:260px;top:{ty+48+104*(t.count("<br>")+1)+26}px;font-size:32px;color:{bc}">{sub}</div>'
    return ('background:#111',s)
def cta(i,n,series,k,t,d,dark=False):
    fg='#F5EFE4' if dark else '#1F241C'; ac='#D8C08F' if dark else '#A88B57'; bc='#E6DDCE' if dark else '#4B523C'
    s=chrome(i,n,series,dark=dark)+f'<div class="k" style="position:absolute;left:80px;top:420px;color:{ac}">{k}</div><div class="T" style="position:absolute;left:76px;right:80px;top:470px;font-size:120px;color:{fg}">{t}</div><div class="p" style="position:absolute;left:80px;right:170px;top:{470+120*(t.count("<br>")+1)+40}px;color:{bc}">{d}</div>'
    bt='#F5EFE4' if dark else '#1F241C'; btx='#1F241C' if dark else '#F5EFE4'
    s+=f'<div style="position:absolute;left:80px;top:1060px;padding:24px 46px;border-radius:999px;background:{bt};color:{btx};font-size:30px">Lien en bio · jimenez-shop.com</div>'
    return ('background:'+('#4B523C' if dark else '#F5EFE4'),s)
S5='Le matin'; S6='La recette'; S7='Le savoir'; S8="L'Andalousie"
# LUNDI
page('L1_matin',[PF('u14',1,1,S8,'Bonjour','Le jour se lève<br>sur les oliviers.')])
page('L2_carrousel_tartines',[PF('u13',1,5,S5,'3 tartines','Bien commencer<br>la journée.',ty=180),
 PF('u12',2,5,S5,'01 · Le classique andalou','Tomate &<br>fleur de sel.'),
 PF('u11',3,5,S5,'02 · Frais et vif','Avocat<br>& citron.'),
 PF('u10',4,5,S5,'03 · Tout en douceur','Fromage frais<br>& herbes.'),
 cta(5,5,S5,'Arbequina · Première récolte','Le secret ?<br>Une vraie huile.','Pomme verte, amande, un léger piquant. Celle qui change une simple tartine.',dark=True)])
page('L4_soir_table',[PF('u09',1,1,S8,'Ce soir','On dresse<br>la table.',ty=190)])
# MARDI
ER=[('Près des plaques','La chaleur<br>l\'abîme.','Rangez-la loin du four et des feux.'),('À la lumière','Elle<br>s\'oxyde.','Verre foncé, céramique ou placard fermé.'),('Ouverte trop longtemps','L\'air<br>l\'éteint.','Bouchon refermé après chaque usage.')]
sl=[PF('u08',1,5,S7,'3 erreurs','Ce qu\'on fait<br>tous de travers.',dark=True)]
for j,(k,t,d) in enumerate(ER): sl.append(typo(j+2,5,S7,k,t,d,dark=j%2==1,num=f'0{j+1}'))
sl.append(cta(5,5,S7,'Le bon réflexe','Au frais,<br>à l\'abri.','Comme ça, elle garde son fruité jusqu\'à la dernière goutte.'))
page('M2_carrousel_erreurs',sl)
page('M3_premiere_recolte',[PF('u07',1,1,S3,'Première récolte','Récoltée tôt.<br>Pressée à froid.',ty=190)])
page('M4_soir_coupage',[PF('u06',1,1,S3,'Le Coupage','Picual et Arbequina,<br>réunies.',ty=190)])
# MERCREDI
page('W1_matin_oliveraie',[PF('u05',1,1,S8,'Andalousie','Des milliers<br>d\'oliviers,<br>en rangs serrés.',ty=190)])
page('W3_coffret',[PF('u04',1,1,S3,'Le coffret dégustation','Ronde. Fruitée.<br>Robuste.',ty=190)])
page('W4_carrousel_legumes',[PF('u03',1,2,S6,'Ce soir · 40 minutes','Les légumes<br>rôtis.',ty=180),
 listing(2,2,S6,'La recette','En 4 gestes.',[('Couper courgettes, poivrons et oignon rouge en gros morceaux.',''),('Arroser généreusement d\'huile d\'olive, saler, poivrer, thym.',''),('Four à 200 °C pendant 35 minutes.',''),('Un dernier filet d\'huile à cru avant de servir.','')],lead='num')])
# JEUDI
page('J1_matin_pain',[PF('u02',1,1,S7,'Le conseil de la maison','Une bonne huile,<br>ça se goûte<br>sur du pain.',ty=180)])
json.dump(M,open('cal5/manifest.json','w')); print(len(M))
