/* VAURE : rouleau court à reliefs, posé sous le haut du dos (comme le vrai produit) */
(function(){if(typeof X==='undefined')return;
function rollerEnd(g,cx,cy,r){let s='';for(let i=0;i<12;i++){const a=i*Math.PI/6;s+=`<circle cx="${f1(cx+Math.cos(a)*r*.98)}" cy="${f1(cy+Math.sin(a)*r*.98)}" r="${f1(r*.2)}" fill="#5a2e20"/>`;}
  raw(g,s+`<circle cx="${cx}" cy="${cy}" r="${r}" fill="#5a2e20"/><circle cx="${cx}" cy="${cy}" r="${f1(r*.62)}" fill="none" stroke="#3f1f15" stroke-width="2.5"/><path d="M${f1(cx-r*.55)} ${f1(cy-r*.55)} A${r} ${r} 0 0 1 ${f1(cx+r*.3)} ${f1(cy-r*.85)}" fill="none" stroke="#7a4430" stroke-width="3" stroke-linecap="round" opacity=".8"/>`);}
X.rouleau=t=>{kit0();rollerEnd(KB,304,-22,20);const d=ease(t),sh=P(280,-62),hip=P(432,-27),ank=P(565,-16),foot=P(598,-11);
const knee=ik(hip,ank,L.thigh,L.shin,(a,b)=>a.y<b.y?a:b),aa=lerp(-12,132,d),elb=pol(sh,aa,86),hand=pol(sh,aa,166);
return {S:{sh,hip,knee,ank,foot,elb,hand,front:P(0,-1),headDir:P(-1,0),farArm:{e:off(elb,-6,4),h:off(hand,-8,6)},farLeg:FL(knee,ank,foot)},hl:mix(sh,hip,.5),arrow:{at:P(250,-170),dir:-1},at:P(340,-21)};};
ICON.rouleau='<rect x="14" y="26" width="52" height="28" rx="9" fill="#5a2e20"/><path d="M24 28v24M33 28v24M42 28v24M51 28v24M60 28v24" stroke="#3f1f15" stroke-width="3"/><path d="M20 32h40" stroke="#7a4430" stroke-width="3" stroke-linecap="round" opacity=".8"/>';
EX.rouleau.steps=['Pose le rouleau en travers du tapis.','Allonge-toi : le rouleau sous le haut du dos, juste sous les omoplates. Les fesses restent au sol.','Genoux pliés, pieds à plat. Si ta nuque tire, soutiens ta tête avec les mains.','Ouvre doucement les bras sur les côtés, sans forcer.'];
if(typeof renderHome==='function')renderHome();})();
/* VAURE : silhouettes v2. Proportions athlétiques, tenue chocolat assortie au kit, visage épuré. */
(function(){
if(typeof seg!=='function')return;
const TH=[[0,23],[.18,25],[.5,20.5],[.82,14.5],[1,13]],SH=[[0,12.6],[.2,15],[.45,13.2],[.8,8.8],[1,8.2]],
  UA=[[0,13],[.22,12.4],[.6,9.6],[1,8.4]],FA=[[0,8.4],[.22,9],[.75,6.6],[1,5.8]],FT=[[0,8.2],[.4,8.8],[.8,7],[1,5.2]],HD=[[0,6],[.45,7.6],[1,5.4]];
const TF2=[[-.14,16],[-.04,27],[.12,26],[.3,23],[.46,22],[.58,24],[.66,30],[.74,31],[.82,28],[.92,24],[1,19]],
  TB2=[[-.14,20],[-.04,34],[.08,33],[.24,25],[.45,22.5],[.62,25],[.8,27],[.92,25],[1,20]];
const lp=(pr,t)=>{if(t<=pr[0][0])return pr[0][1];for(let i=1;i<pr.length;i++)if(t<=pr[i][0]){const [t0,w0]=pr[i-1],[t1,w1]=pr[i];return w0+(w1-w0)*(t-t0)/(t1-t0);}return pr[pr.length-1][1];};
const shd=(h,f)=>'#'+[1,3,5].map(i=>Math.min(255,Math.round(parseInt(h.substr(i,2),16)*f)).toString(16).padStart(2,'0')).join('');
const LG='#552b1d',LGD='#3b1c13',LGS='#43221a',BRA='#2f1610',BRAS='#24110c',SOCKC='#f7f1ea',SOCKD='#ddd2c6',SCARFC='#4a2418';
drawBody=function(S,g){g=g||document.getElementById('body');g.innerHTML='';
  {const xs=[S.hip.x,S.sh.x,S.ank.x,S.foot.x,S.hand.x],x0=Math.min(...xs)-20,x1=Math.max(...xs)+20,lo=Math.max(S.hip.y,S.sh.y);
   if(g.id==='body')raw(g,'<ellipse cx="'+f1((x0+x1)/2)+'" cy="-1" rx="'+f1((x1-x0)/2)+'" ry="'+f1(lo>-80?7:5)+'" fill="#2b1710" opacity=".16"/>');}
  const av=(typeof AV!=='undefined'&&AV)||{skin:2,hair:1,style:'queue',shape:'moyenne'};
  const SK=SKINS[av.skin],SKD=shd(SK,.8),SKS=shd(SK,.9),HAIR=HAIRS[av.hair][0],HAIRL=shd(HAIR,1.6);
  const k=(SHAPES.find(x=>x[0]===av.shape)||SHAPES[1])[2]*.94,ka=1+(k-1)*.6;
  const dl=LN(VV(S.hip,S.sh)),d=P((S.sh.x-S.hip.x)/dl,(S.sh.y-S.hip.y)/dl);
  const front=S.front||P(-d.y,d.x);let n=P(-d.y,d.x);if(n.x*front.x+n.y*front.y<0)n=P(-n.x,-n.y);
  const at=(t,o=0)=>P(S.hip.x+(S.sh.x-S.hip.x)*t+n.x*o,S.hip.y+(S.sh.y-S.hip.y)*t+n.y*o);
  const hand=(e,h,col)=>{const u=VV(e,h),l=LN(u),uu=P(u.x/l,u.y/l);seg(g,P(h.x-uu.x*4,h.y-uu.y*4),P(h.x+uu.x*14,h.y+uu.y*14),HD,col,ka);};
  const shoulder=at(.9,(lp(TF2,.9)-lp(TB2,.9))*.5*k);
  /* côté éloigné */
  if(S.farArm){circ(g,shoulder,13*ka,SKD);seg(g,shoulder,S.farArm.e,UA,SKD,ka);circ(g,S.farArm.e,8.6*ka,SKD);seg(g,S.farArm.e,S.farArm.h,FA,SKD,ka);hand(S.farArm.e,S.farArm.h,SKD);}
  if(S.farLeg){seg(g,S.hip,S.farLeg.k,TH,LGD,k);circ(g,S.farLeg.k,13*k,LGD);seg(g,S.farLeg.k,S.farLeg.a,SH,LGD,k);seg(g,S.farLeg.a,S.farLeg.f,FT,SOCKD);}
  /* jambe proche : legging uni, mollet galbé, chaussette blanche */
  seg(g,S.hip,S.knee,TH,LG,k,false,LGS);circ(g,S.knee,13.5*k,LG);seg(g,S.knee,S.ank,SH,LG,k,false,LGS);
  seg(g,mix(S.knee,S.ank,.86),S.ank,[[0,9.2],[1,9]],SOCKC,k);seg(g,S.ank,S.foot,FT,SOCKC,1,false,SOCKD);
  /* buste */
  const tsr=(t0,t1)=>{const ts=[];for(let t=t0;t<t1-1e-6;t+=.04)ts.push(t);ts.push(t1);return ts;};
  const torso=(f0,f1_,b0,b1,dw=0,capTop=false,capBot=false)=>{
    const fr=tsr(f0,f1_).map(t=>at(t,(lp(TF2,t)+dw)*k)),bk=tsr(b0,b1).map(t=>at(t,-(lp(TB2,t)+dw)*k)).reverse();
    const pts=[...fr];if(capTop)pts.push(at(Math.max(f1_,b1)+.07,0));pts.push(...bk);if(capBot)pts.push(at(Math.min(f0,b0)-.06,2));return pts;};
  const strip=(t0,t1,dw,col)=>{const ts=tsr(t0,t1);shape(g,[...ts.map(t=>at(t,-(lp(TB2,t)+dw)*k)),...ts.map(t=>at(t,-(lp(TB2,t)*.4)*k)).reverse()],col);};
  shape(g,torso(-.14,1,-.14,1,0,true,true),SK);strip(.36,.95,0,SKS);
  shape(g,torso(-.14,.33,-.14,.33,.7,false,true),LG);strip(-.1,.33,.7,LGS);
  {const a1=at(.33,(lp(TF2,.33)+.7)*k),a2=at(.33,-(lp(TB2,.33)+.7)*k);raw(g,'<path d="M'+f1(a1.x)+' '+f1(a1.y)+' L'+f1(a2.x)+' '+f1(a2.y)+'" stroke="#2ef27a" stroke-width="2.4" opacity=".9" stroke-linecap="round"/>');}
  shape(g,torso(.55,.88,.55,.88,1,true,false),BRA);strip(.55,.88,1,BRAS);{const b1=at(.55,(lp(TF2,.55)+1)*k),b2=at(.55,-(lp(TB2,.55)+1)*k);raw(g,'<path d="M'+f1(b1.x)+' '+f1(b1.y)+' L'+f1(b2.x)+' '+f1(b2.y)+'" stroke="#2ef27a" stroke-width="2.4" stroke-linecap="round" opacity=".9"/>');}
  /* bretelle */
  {const s1=at(.79,(lp(TF2,.79)-4)*k),s2=at(1.0,-6*k);raw(g,'<path d="M'+f1(s1.x)+' '+f1(s1.y)+' Q'+f1(at(.93,2).x)+' '+f1(at(.93,2).y)+' '+f1(s2.x)+' '+f1(s2.y)+'" fill="none" stroke="'+BRA+'" stroke-width="6" stroke-linecap="round"/>');}
  /* tête : un peu plus grande, visage épuré */
  const HS=1.24,hd0=S.headDir||d,hl=LN(hd0),hdir=P(hd0.x/hl,hd0.y/hl);
  let hn=P(-hdir.y,hdir.x);if(hn.x*front.x+hn.y*front.y<0)hn=P(-hn.x,-hn.y);
  const NKL=L.neck*.6,HC=NKL+L.head*HS-9,nk=P(S.sh.x+hdir.x*NKL,S.sh.y+hdir.y*NKL),C=P(S.sh.x+hdir.x*HC,S.sh.y+hdir.y*HC);
  const cp=(ang,r)=>{r*=HS;return P(C.x+hn.x*Math.cos(ang*R)*r+hdir.x*Math.sin(ang*R)*r,C.y+hn.y*Math.cos(ang*R)*r+hdir.y*Math.sin(ang*R)*r);};
  const ring=arr=>arr.map(([a,r])=>cp(a,r));
  const st=av.style;
  const SKULL=[[-8,21.5],[6,23.5],[18,22.5],[40,23],[90,24.5],[130,24.5],[170,23],[210,21],[240,16],[262,13.5],[290,15],[318,19.5],[340,21.5]];
  if(st==='foulard'){
    seg(g,S.sh,nk,[[0,14],[1,12]],SCARFC);
    shape(g,ring([[25,26.5],[70,29.5],[110,30.5],[150,29.5],[190,28.5],[225,26],[258,21],[292,19]]),SCARFC);
    shape(g,ring([[-60,15.5],[-28,20],[-6,21.5],[8,23],[24,21.5],[44,17],[66,9],[150,5],[230,6]]),SK);
    
  }else{
    seg(g,at(.97,0),nk,[[0,11],[1,10]],SKS);
    if(st==='afro')shape(g,ring([[30,29],[70,36],[115,39],[160,37],[200,33],[235,25],[10,25]]),HAIR);
    if(st==='chignon'){const c=cp(120,30);circ(g,c,13*HS,HAIR);circ(g,P(c.x-3,c.y-4),5,HAIRL);}
    if(st==='queue'){const base=cp(150,22),tip=P(base.x-hn.x*18,Math.min(-6,base.y+40));seg(g,base,tip,[[0,7.5],[.3,10],[.75,6],[1,2.5]],HAIR);}
    if(st==='tresses'){let p=cp(195,20);for(let i=0;i<7;i++){p=P(p.x-hn.x*1.5,Math.min(-6,p.y+9.5));circ(g,p,7.6-i*.45,HAIR);}}
    shape(g,ring(SKULL),SK);
    const cap=st==='court'?[[44,25.5],[68,27],[95,27.8],[130,27.2],[165,26],[200,24],[232,19],[210,13],[160,10],[105,11.5],[60,18]]
                          :[[50,25],[72,26.6],[100,27.2],[135,26.8],[170,25.6],[205,23.6],[232,18],[205,13],[155,10],[105,12.5],[62,19]];
    shape(g,ring(cap),HAIR);
    raw(g,'<path d="M'+ring([[72,23.5],[98,24.6],[124,23.8]]).map(p=>f1(p.x)+' '+f1(p.y)).join(' L')+'" fill="none" stroke="#fff" stroke-opacity=".16" stroke-width="3" stroke-linecap="round"/>');
    circ(g,cp(176,9),4.6,SKD);
    if(st==='queue')circ(g,cp(150,22),4.4,'#2ef27a');
  }
  /* oeil fermé/regard simple, sourcil : lecture du sens du visage sans caricature */
  {const e1=cp(26,15),e2=cp(36,15.5);raw(g,'<path d="M'+f1(e1.x)+' '+f1(e1.y)+' L'+f1(e2.x)+' '+f1(e2.y)+'" stroke="#2b1710" stroke-width="2.2" stroke-linecap="round" opacity=".85"/>');}
  /* bras proche, épaule arrondie */
  circ(g,shoulder,14.5*ka,SK);
  seg(g,shoulder,S.elb,UA,SK,ka,false,SKS);circ(g,S.elb,8.8*ka,SK);seg(g,S.elb,S.hand,FA,SK,ka,false,SKS);hand(S.elb,S.hand,SK);
};
if(typeof drawMini==='function')try{drawMini();}catch(e){}
})();
/* VAURE : vraies photos d'exercices dans l'appli. Quand une photo existe pour l'exercice en cours,
   elle remplace le dessin ; sinon le dessin reste. Ajouter une photo = ajouter une ligne dans PH. */
(function(){
if(!window.__api)return;
const BASE=window.VAURE_PH_BASE||'https://cdn.shopify.com/s/files/1/1007/2742/3358/files/';
const PH={
  pont:['vaure-pont-salon.webp','50% 62%',.9],
  squat:['vaure-squat-bande.webp','50% 40%',.9],
  planche:['vaure-planche-foulard.webp','45% 55%',1.5],
  rouleau:['vaure-rouleau-dos.webp','40% 60%',.8],
  cercle:['vaure-ex-cercle.webp','45% 55%',1.5]
};
const app=document.getElementById('app'),svg=app&&app.querySelector('svg.scene');if(!svg)return;
const st=document.createElement('style');
st.textContent='.exph{position:absolute;z-index:1;border-radius:22px;overflow:hidden;background:#e6d8c8;box-shadow:0 18px 40px -18px rgba(43,23,16,.45);opacity:0;transition:opacity .35s ease;pointer-events:none}'+
 '.exph.on{opacity:1}.exph img{width:100%;height:100%;object-fit:cover;display:block;animation:exz 12s ease-in-out infinite alternate}'+
 '@keyframes exz{from{transform:scale(1)}to{transform:scale(1.06)}}@media (prefers-reduced-motion:reduce){.exph img{animation:none}}';
document.head.appendChild(st);
const box=document.createElement('div');box.className='exph';box.setAttribute('aria-hidden','true');const img=new Image();img.alt='';box.appendChild(img);
svg.parentNode.insertBefore(box,svg.nextSibling);
const ok={};let cur=null;
function want(id){const p=PH[id];if(!p)return null;if(ok[id]===false)return null;return p;}
function place(ratio){const a=app.getBoundingClientRect(),r=svg.getBoundingClientRect(),m=Math.min(16,a.width*.04),w=a.width-2*m;
  const kit=document.getElementById('kit'),kb=kit?kit.getBoundingClientRect().bottom-a.top+12:0,cue=document.getElementById('cue'),c=cue&&cue.getBoundingClientRect();
  const t0=Math.max(r.top-a.top,kb),b0=(c&&c.height?c.top-a.top-14:r.bottom-a.top),avail=Math.max(140,b0-t0),h=Math.min(avail,w/ratio);
  box.style.left=m+'px';box.style.right=m+'px';box.style.top=(t0+(avail-h)/2)+'px';box.style.height=h+'px';}
function tick(){
  const pl=window.__api.PL;let id=null;
  if(pl&&pl.b&&pl.b.steps[pl.i])id=pl.b.steps[pl.i].ex;
  const p=id&&want(id);
  if(p){if(cur!==id){cur=id;img.onerror=()=>{ok[id]=false;cur=null;};img.onload=()=>{ok[id]=true;};img.src=BASE+p[0];img.style.objectPosition=p[1];}
    place(p[2]||1);box.classList.add('on');svg.style.visibility='hidden';}
  else{box.classList.remove('on');svg.style.visibility='';cur=null;}
}
setInterval(tick,200);
})();
