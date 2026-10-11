def end(img,bg,top,h,title,pills):
    P=''.join(f'<div class="pill" style="{xy};background:{b};color:{fg}"><i style="background:{ib};color:{ic}">{ch}</i>{t}</div>' for xy,b,fg,ib,ic,ch,t in pills)
    return f'''<div style="position:absolute;inset:0;background:{bg}"></div>
  <img src="hq/{img}" style="position:absolute;left:0;top:{top}px;width:1080px;height:{h}px;object-fit:contain;-webkit-mask-image:radial-gradient(ellipse 32% 46% at 50% 52%,#000 72%,transparent 100%)">
  <div style="position:absolute;left:0;right:0;top:110px;text-align:center;color:var(--ink)"><div class="H" style="font-size:86px">{title}</div></div>
  {P}
  <div class="cta">jimenez-shop.com <span>→</span></div>'''
A6=end('bottle_white.jpg','linear-gradient(#E1DECD,#EEEBD9 50%,#FBF8E9)',230,1000,'La nôtre coche<br><span style="color:var(--gold)">toutes les cases.</span>',[
 ('left:60px;top:520px','var(--cream)','var(--ink)','var(--gold)','var(--cream)','✓','Vierge extra'),
 ('right:50px;top:650px','var(--ink)','var(--cream)','var(--gold2)','var(--ink)','✓','Bouteille sombre'),
 ('left:50px;top:820px','var(--teal)','var(--cream)','var(--cream)','var(--teal)','✓','Un peu de piquant'),
 ('right:70px;top:950px','var(--gold)','var(--ink)','var(--ink)','var(--gold2)','✓','Bien protégée'),])
B7=end('ceramic.jpg','linear-gradient(#EEDCC4,#F2E1CD 50%,#EFE3D3)',300,800,'À cru, elle donne<br><span style="color:var(--gold)">tout son goût.</span>',[
 ('left:60px;top:520px','var(--teal)','var(--cream)','var(--cream)','var(--teal)','1','Pain grillé'),
 ('right:60px;top:650px','var(--cream)','var(--ink)','var(--gold)','var(--cream)','2','Tomates'),
 ('left:50px;top:820px','var(--olive)','var(--cream)','var(--gold2)','var(--olive)','3','Poisson'),
 ('right:60px;top:950px','var(--gold)','var(--ink)','var(--cream)','var(--gold)','4','Légumes'),])
L=open('mk.py').read().split('\n')
L=[('A6END=%r'%A6 if l.startswith('A6END=') else 'B7END=%r'%B7 if l.startswith('B7END=') else l) for l in L]
open('mk.py','w').write('\n'.join(L))
