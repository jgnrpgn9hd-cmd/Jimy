import json
CSS='''<!doctype html><html lang="fr"><head><meta charset="utf-8"><link href="../fonts/fonts.css" rel="stylesheet"><style>
*{margin:0;padding:0;box-sizing:border-box}body{font-family:"Instrument Sans",sans-serif;color:#1F241C;background:#000}
.s{position:absolute;top:0;width:1080px;overflow:hidden}
.T{font-family:"Instrument Serif",serif;font-weight:400;letter-spacing:-.022em;line-height:1}
.k{font-size:20px;letter-spacing:6px;text-transform:uppercase;font-weight:600}
.bar{position:absolute;left:80px;right:80px;display:flex;justify-content:space-between;align-items:center}
.hair{position:absolute;left:80px;right:80px;height:1px}
.p{font-size:36px;line-height:1.4}
.ph{position:absolute;object-fit:cover}
</style></head><body>'''
M=[]
def chrome(i,n,series,dark=False,H=1350,bottom=True):
    c='#F5EFE4' if dark else '#1F241C'; a='#D8C08F' if dark else '#A88B57'; logo='logo_cream' if dark else 'logo_ink'
    hc='rgba(245,239,228,.35)' if dark else 'rgba(31,36,28,.18)'
    s=f'<div class="bar" style="top:64px"><img src="../img/{logo}.png" style="width:128px"><span class="k" style="color:{a}">{series}</span></div><div class="hair" style="top:132px;background:{hc}"></div>'
    if bottom:
        r=f'{i:02d} / {n:02d}' if n>1 else "Huile d'olive vierge extra"
        s+=f'<div class="hair" style="top:{H-118}px;background:{hc}"></div><div class="bar" style="top:{H-92}px"><span class="k" style="color:{c};opacity:.8">jimenez-shop.com</span><span class="k" style="color:{a}">{r}</span></div>'
    return s
def page(name,slides,H=1350):
    n=len(slides); h=CSS.replace('<body>',f'<body style="width:{1080*n}px;height:{H}px">')
    for i,s in enumerate(slides): h+=f'<div class="s" style="left:{i*1080}px;height:{H}px;{s[0]}">{s[1]}</div>'
    open(f'cal5/{name}.html','w').write(h+'</body></html>'); M.append([name,n,H])
# photo specs: bg, box(x,y,w,h), objpos, text zone
PH={
 'arbequina':('n_arbequina.jpg','linear-gradient(#D9C9B5,#E2D5C3 55%,#EADFCD)'),'ceramic':('n_ceramic.jpg','linear-gradient(#EEDFCB,#F1E5D3 55%,#EFE6D8)'),'coupage':('n_coupage.jpg','#FFFFFF'),
 'eco':('n_eco.jpg','linear-gradient(#D3CFCE,#CFCBCA 60%,#D8D3D6)'),'trio':('n_trio.jpg','#FCF3F3'),'giftbox':('giftbox.jpg','#23231F'),'olives':('tin_olives.jpg','#CDBFA8'),'close':('close.jpg','#DDDDDB')}
def img(key,x,y,w,h,op='50% 50%',fade=None):
    f,bg=PH[key]; m=''
    if fade=='top' and key=='trio': m='-webkit-mask-image:linear-gradient(to bottom,transparent 0,#000 22%);'
    elif fade=='top': m='-webkit-mask-image:radial-gradient(ellipse 50% 50% at 50% 50%,#000 78%,transparent 100%);'
    if fade=='bottom': m='-webkit-mask-image:linear-gradient(to top,transparent 0,#000 18%);'
    return f'<img class="ph" src="../hq/{f}" style="left:{x}px;top:{y}px;width:{w}px;height:{h}px;object-position:{op};{m}">'
def bg(key): return 'background:'+PH[key][1]
# ---- layouts
def photo_top_text(key,i,n,series,k,t,box,op='50% 50%',H=1350,fade='top',tc='#1F241C',kc='#A88B57',sub=None):
    # text at top on photo bg, photo below
    s=img(key,*box,op=op,fade=fade)+chrome(i,n,series,H=H)
    s+=f'<div class="k" style="position:absolute;left:80px;top:200px;color:{kc}">{k}</div><div class="T" style="position:absolute;left:76px;right:80px;top:248px;font-size:112px;color:{tc}">{t}</div>'
    if sub: s+=f'<div class="p" style="position:absolute;left:80px;right:300px;top:{248+112*t.count("<br>")+150}px;font-size:32px;color:#4B523C">{sub}</div>'
    return (bg(key),s)
def photo_dark(key,i,n,series,k,t,op='50% 50%',H=1350,sub=None):
    f,_=PH[key]
    s=f'<img class="ph" src="../hq/{f}" style="left:0;top:0;width:1080px;height:{H}px;object-position:{op}"><div style="position:absolute;inset:0;background:linear-gradient(to top,rgba(14,17,12,.88) 0%,rgba(14,17,12,.45) 38%,rgba(14,17,12,0) 60%,rgba(14,17,12,.35) 100%)"></div>'+chrome(i,n,series,dark=True,H=H)
    y=H-470-(70 if sub else 0)
    s+=f'<div class="k" style="position:absolute;left:80px;top:{y}px;color:#D8C08F">{k}</div><div class="T" style="position:absolute;left:76px;right:80px;top:{y+48}px;font-size:104px;color:#F5EFE4">{t}</div>'
    if sub: s+=f'<div class="p" style="position:absolute;left:80px;right:200px;top:{y+48+104*(t.count("<br>")+1)+24}px;font-size:32px;color:#E6DDCE">{sub}</div>'
    return ('background:#111',s)
def typo(i,n,series,k,t,d,dark=False,num=None):
    fg='#F5EFE4' if dark else '#1F241C'; ac='#D8C08F' if dark else '#A88B57'; bc='#E6DDCE' if dark else '#4B523C'
    s=chrome(i,n,series,dark=dark)
    if num: s+=f'<div class="T" style="position:absolute;left:72px;top:180px;font-size:280px;color:{ac}">{num}</div>'
    y=560 if num else 330
    s+=f'<div class="k" style="position:absolute;left:80px;top:{y-50}px;color:{ac}">{k}</div><div class="T" style="position:absolute;left:78px;right:90px;top:{y}px;font-size:100px;color:{fg}">{t}</div>'
    s+=f'<div class="p" style="position:absolute;left:80px;right:170px;top:{y+100*(t.count("<br>")+1)+160}px;color:{bc}">{d}</div>'
    return ('background:'+('#4B523C' if dark else '#F5EFE4'),s)
def story_photo(key,k,t,box,op='50% 50%',fade='top',tc='#1F241C'):
    s=img(key,*box,op=op,fade=fade)
    s+=f'<img src="../img/logo_ink.png" style="position:absolute;left:50%;transform:translateX(-50%);top:190px;width:150px">'
    s+=f'<div class="k" style="position:absolute;left:0;right:0;top:320px;text-align:center;color:#A88B57">{k}</div><div class="T" style="position:absolute;left:60px;right:60px;top:370px;text-align:center;font-size:118px;color:{tc}">{t}</div>'
    s+='<div style="position:absolute;left:50%;transform:translateX(-50%);top:1690px;padding:24px 50px;border-radius:999px;background:#1F241C;color:#F5EFE4;font-size:30px;white-space:nowrap">Lien en bio · jimenez-shop.com</div>'
    return (bg(key),s)
def story_dark(key,k,t,op='50% 50%'):
    f,_=PH[key]
    s=f'<img class="ph" src="../hq/{f}" style="left:0;top:0;width:1080px;height:1920px;object-position:{op}"><div style="position:absolute;inset:0;background:linear-gradient(to top,rgba(14,17,12,.9) 0%,rgba(14,17,12,.4) 40%,rgba(14,17,12,0) 62%,rgba(14,17,12,.4) 100%)"></div>'
    s+='<img src="../img/logo_cream.png" style="position:absolute;left:50%;transform:translateX(-50%);top:190px;width:150px">'
    s+=f'<div class="k" style="position:absolute;left:0;right:0;top:1180px;text-align:center;color:#D8C08F">{k}</div><div class="T" style="position:absolute;left:60px;right:60px;top:1230px;text-align:center;font-size:112px;color:#F5EFE4">{t}</div>'
    s+='<div style="position:absolute;left:50%;transform:translateX(-50%);top:1690px;padding:24px 50px;border-radius:999px;background:#F5EFE4;color:#1F241C;font-size:30px;white-space:nowrap">Lien en bio · jimenez-shop.com</div>'
    return ('background:#111',s)
# photo boxes (1080x1350)
B={'arbequina':(130,350,820,1093,'50% 50%'),'ceramic':(160,410,760,899,'50% 50%'),'coupage':(40,360,1000,936,'50% 50%'),
   'eco':(-110,390,1300,847,'50% 50%'),'trio':(250,500,580,719,'50% 50%')}
def P(key,i,n,series,k,t,sub=None): x,y,w,h,op=B[key]; return photo_top_text(key,i,n,series,k,t,(x,y,w,h),op=op,sub=sub)
SB={'arbequina':(40,600,1000,1333,'50% 50%'),'ceramic':(40,600,1000,1183,'50% 50%'),'coupage':(0,730,1080,1011,'50% 50%'),'eco':(-210,710,1500,978,'50% 50%'),'trio':(90,560,900,1116,'50% 50%')}
def SP(key,k,t): x,y,w,h,op=SB[key]; return story_photo(key,k,t,(x,y,w,h),op=op)
S1='Le goût'; S2='À table'; S3='Les huiles'; S4='Le guide'
