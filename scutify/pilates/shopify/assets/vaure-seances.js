const NS='http://www.w3.org/2000/svg',$=id=>document.getElementById(id);
const L={torso:150,thigh:122,shin:116,upper:86,fore:80,neck:20,head:27};
const ease=t=>.5-.5*Math.cos(Math.PI*t);
const lerp=(a,b,t)=>a+(b-a)*t,P=(x,y)=>({x,y}),mix=(a,b,t)=>P(lerp(a.x,b.x,t),lerp(a.y,b.y,t));
const R=Math.PI/180,f1=n=>(+n).toFixed(1);
const pol=(a,deg,l)=>P(a.x+l*Math.cos(deg*R),a.y-l*Math.sin(deg*R));      // angle en degrés, 90 = vers le haut
const angOf=(a,b)=>Math.atan2(-(b.y-a.y),b.x-a.x)/R;
const dirA=deg=>P(Math.cos(deg*R),-Math.sin(deg*R));
const off=(p,dx,dy)=>P(p.x+dx,p.y+dy);
const along=(a,b,len)=>{const d=Math.hypot(b.x-a.x,b.y-a.y)||1;return P(a.x+(b.x-a.x)/d*len,a.y+(b.y-a.y)/d*len)};
function ik(A,Cc,l1,l2,pick){const dx=Cc.x-A.x,dy=Cc.y-A.y;let d=Math.hypot(dx,dy);d=Math.max(Math.abs(l1-l2)+.5,Math.min(d,l1+l2-.5));
const a=Math.acos((l1*l1+d*d-l2*l2)/(2*l1*d)),th=Math.atan2(dy,dx);
return pick(P(A.x+l1*Math.cos(th+a),A.y+l1*Math.sin(th+a)),P(A.x+l1*Math.cos(th-a),A.y+l1*Math.sin(th-a)));}
function circ(g,c,r,fill){const e=document.createElementNS(NS,'circle');e.setAttribute('cx',f1(c.x));e.setAttribute('cy',f1(c.y));e.setAttribute('r',r);e.setAttribute('fill',fill);g.appendChild(e);}
function poly(g,pts,fill){const p=document.createElementNS(NS,'polygon');p.setAttribute('points',pts.map(q=>f1(q.x)+','+f1(q.y)).join(' '));p.setAttribute('fill',fill);g.appendChild(p);}
function raw(g,html){g.insertAdjacentHTML('beforeend',html);}
function limb(g,a,b,w1,w2,col){const d=Math.hypot(b.x-a.x,b.y-a.y)||1,nx=-(b.y-a.y)/d,ny=(b.x-a.x)/d;
poly(g,[P(a.x+nx*w1/2,a.y+ny*w1/2),P(b.x+nx*w2/2,b.y+ny*w2/2),P(b.x-nx*w2/2,b.y-ny*w2/2),P(a.x-nx*w1/2,a.y-ny*w1/2)],col);
circ(g,a,w1/2,col);circ(g,b,w2/2,col);}
const VV=(a,b)=>P(b.x-a.x,b.y-a.y),LN=v=>Math.hypot(v.x,v.y)||1;
function crPath(pts){const n=pts.length;let d='M'+f1(pts[0].x)+' '+f1(pts[0].y);
for(let i=0;i<n;i++){const p0=pts[(i-1+n)%n],p1=pts[i],p2=pts[(i+1)%n],p3=pts[(i+2)%n];
d+=' C'+f1(p1.x+(p2.x-p0.x)/6)+' '+f1(p1.y+(p2.y-p0.y)/6)+' '+f1(p2.x-(p3.x-p1.x)/6)+' '+f1(p2.y-(p3.y-p1.y)/6)+' '+f1(p2.x)+' '+f1(p2.y);}
return d+'Z';}
function shape(g,pts,col){raw(g,'<path d="'+crPath(pts)+'" fill="'+col+'"/>');}
function seg(g,a,b,prof,col,k=1,hl=false){const v=VV(a,b),L=LN(v),u=P(v.x/L,v.y/L),n=P(-u.y,u.x);
const pt=(t,w)=>P(a.x+u.x*L*t+n.x*w*k,a.y+u.y*L*t+n.y*w*k),w0=prof[0][1]*k,we=prof[prof.length-1][1]*k;
const pts=[...prof.map(([t,w])=>pt(t,w)),P(b.x+u.x*we*.8,b.y+u.y*we*.8),...prof.map(([t,w])=>pt(t,-w)).reverse(),P(a.x-u.x*w0*.8,a.y-u.y*w0*.8)];
shape(g,pts,col);
if(arguments[7]){const sd=n.y<0?-1:1,c2=arguments[7];
shape(g,[...prof.map(([t,w])=>pt(t,sd*w)),P(b.x+u.x*we*.55+n.x*sd*we*.5,b.y+u.y*we*.55+n.y*sd*we*.5),...prof.map(([t,w])=>pt(t,sd*w*.2)).reverse()],c2);}
if(hl){const sd=n.y<0?1:-1,hp=prof.slice(1,-1).map(([t,w])=>pt(t,sd*w*.55));
if(hp.length>1)raw(g,'<path d="M'+hp.map(p=>f1(p.x)+' '+f1(p.y)).join(' L')+'" fill="none" stroke="#fff" stroke-opacity=".17" stroke-width="3" stroke-linecap="round"/>');}
return u;}
const THIGH=[[0,20],[.22,21],[.55,16.5],[.85,12.6],[1,12]],SHIN=[[0,11.8],[.25,13.2],[.55,11],[.85,8],[1,7.4]],
UARM=[[0,9.6],[.35,9],[.75,7.2],[1,6.6]],FARM=[[0,6.6],[.25,7.1],[.8,5.3],[1,4.9]],FOOT=[[0,6.6],[.45,6.9],[1,4.4]],HAND=[[0,4.8],[.5,6.2],[1,4.2]];
const TF=[[-.13,12],[-.03,21],[.12,20.5],[.3,17.5],[.45,16],[.56,18],[.64,23.5],[.7,25],[.76,22],[.86,17],[1,12]],
TB=[[-.13,16],[-.03,27],[.1,26],[.26,19],[.45,16.5],[.62,18.5],[.8,19.5],[.92,17],[1,13]];
const lerpProf=(pr,t)=>{if(t<=pr[0][0])return pr[0][1];for(let i=1;i<pr.length;i++)if(t<=pr[i][0]){const [t0,w0]=pr[i-1],[t1,w1]=pr[i];return w0+(w1-w0)*(t-t0)/(t1-t0);}return pr[pr.length-1][1];};
const LEG='#552b1d',LEGD='#3a1d14',TOP='#2ef27a',TOPD='#1fc864',SOCK='#f4ece2',SCARF='#2b1710';
const SKINS=['#f3d2b8','#e6b792','#d8a07a','#b97b55','#8d5638','#5e3a25'];
const HAIRS=[['#1c120d','Noirs'],['#3a2318','Bruns'],['#6b4428','Châtains'],['#b88a4e','Blonds'],['#8e3b22','Roux']];
const STYLES=[['queue','Queue de cheval'],['chignon','Chignon'],['afro','Afro'],['tresses','Tresse'],['court','Courts'],['foulard','Foulard']];
const SHAPES=[['fine','Fine',.9],['moyenne','Moyenne',1.06],['ronde','Ronde',1.3]];
const shade=(h,f)=>'#'+[1,3,5].map(i=>Math.min(255,Math.round(parseInt(h.substr(i,2),16)*f)).toString(16).padStart(2,'0')).join('');
let AV=null;
function drawBody(S,g=$('body')){g.innerHTML='';
{const xs=[S.hip.x,S.sh.x,S.ank.x,S.foot.x,S.hand.x],x0=Math.min(...xs)-20,x1=Math.max(...xs)+20,lo=Math.max(S.hip.y,S.sh.y);if(g.id==='body')raw(g,'<ellipse cx="'+f1((x0+x1)/2)+'" cy="-1" rx="'+f1((x1-x0)/2)+'" ry="'+f1(lo>-80?7:5)+'" fill="#2b1710" opacity=".16"/>');}
const av=AV||{skin:2,hair:1,style:'queue',shape:'moyenne'};
const SK=SKINS[av.skin],SKD=shade(SK,.84),SKS=shade(SK,.92),HAIR=HAIRS[av.hair][0],k=(SHAPES.find(x=>x[0]===av.shape)||SHAPES[1])[2],ka=1+(k-1)*.55;
const dl=LN(VV(S.hip,S.sh)),d=P((S.sh.x-S.hip.x)/dl,(S.sh.y-S.hip.y)/dl);
const front=S.front||P(-d.y,d.x);let n=P(-d.y,d.x);if(n.x*front.x+n.y*front.y<0)n=P(-n.x,-n.y);
const at=(t,o=0)=>P(S.hip.x+(S.sh.x-S.hip.x)*t+n.x*o,S.hip.y+(S.sh.y-S.hip.y)*t+n.y*o);
const hand=(e,h,col)=>{const u=VV(e,h),L=LN(u),uu=P(u.x/L,u.y/L);seg(g,P(h.x-uu.x*3,h.y-uu.y*3),P(h.x+uu.x*12,h.y+uu.y*12),HAND,col,ka);};
if(S.farArm){seg(g,S.sh,S.farArm.e,UARM,SKD,ka);seg(g,S.farArm.e,S.farArm.h,FARM,SKD,ka);hand(S.farArm.e,S.farArm.h,SKD);}
if(S.farLeg){seg(g,S.hip,S.farLeg.k,THIGH,LEGD,k);seg(g,S.farLeg.k,S.farLeg.a,SHIN,LEGD,k);seg(g,S.farLeg.a,S.farLeg.f,FOOT,'#dccbb9');}
seg(g,S.hip,S.knee,THIGH,LEG,k,true,'#3f1f15');seg(g,S.knee,S.ank,SHIN,LEG,k,true,'#3f1f15');seg(g,S.ank,S.foot,FOOT,SOCK,1,false,'#ddd0c2');
{const m1=mix(S.hip,S.knee,.08),m2=S.knee,m3=mix(S.knee,S.ank,.92);raw(g,'<path d="M'+f1(m1.x)+' '+f1(m1.y)+' L'+f1(m2.x)+' '+f1(m2.y)+' L'+f1(m3.x)+' '+f1(m3.y)+'" fill="none" stroke="'+TOP+'" stroke-width="2.6" stroke-linecap="round" stroke-linejoin="round" opacity=".9"/>');}
const tsr=(t0,t1)=>{const ts=[];for(let t=t0;t<t1-1e-6;t+=.04)ts.push(t);ts.push(t1);return ts;};
const torso=(f0,f1_,b0,b1,dw=0,capTop=false,capBot=false)=>{
const fr=tsr(f0,f1_).map(t=>at(t,(lerpProf(TF,t)+dw)*k)),bk=tsr(b0,b1).map(t=>at(t,-(lerpProf(TB,t)+dw)*k)).reverse();
const pts=[...fr];if(capTop)pts.push(at(Math.max(f1_,b1)+.06,0));pts.push(...bk);if(capBot)pts.push(at(Math.min(f0,b0)-.05,2));return pts;};
const strip=(t0,t1,dw,col)=>{const ts=tsr(t0,t1);shape(g,[...ts.map(t=>at(t,-(lerpProf(TB,t)+dw)*k)),...ts.map(t=>at(t,-(lerpProf(TB,t)*.35)*k)).reverse()],col);};
shape(g,torso(-.13,1,-.13,1,0,true,true),SK);strip(.32,.95,0,SKD);
shape(g,torso(-.13,.32,-.13,.3,.6,false,true),LEG);strip(-.1,.3,.6,'#3f1f15');
{const a1=at(.32,(lerpProf(TF,.32)+.6)*k),a2=at(.3,-(lerpProf(TB,.3)+.6)*k);raw(g,'<path d="M'+f1(a1.x)+' '+f1(a1.y)+' L'+f1(a2.x)+' '+f1(a2.y)+'" stroke="#7a4430" stroke-width="2.5" stroke-linecap="round"/>');}
shape(g,torso(.5,.75,.53,.84,.9),TOP);strip(.53,.82,.9,TOPD);
const hd0=S.headDir||d,hl=LN(hd0),hdir=P(hd0.x/hl,hd0.y/hl);
let hn=P(-hdir.y,hdir.x);if(hn.x*front.x+hn.y*front.y<0)hn=P(-hn.x,-hn.y);
const nk=P(S.sh.x+hdir.x*L.neck,S.sh.y+hdir.y*L.neck),C=P(S.sh.x+hdir.x*(L.neck+L.head-6),S.sh.y+hdir.y*(L.neck+L.head-6));
const cp=(ang,r)=>P(C.x+hn.x*Math.cos(ang*R)*r+hdir.x*Math.sin(ang*R)*r,C.y+hn.y*Math.cos(ang*R)*r+hdir.y*Math.sin(ang*R)*r);
const ring=arr=>arr.map(([a,r])=>cp(a,r));
const st=av.style;
const SKULL=[[0,22.5],[12,25],[24,23],[50,23],[90,24.5],[130,24.5],[170,23],[210,21],[245,15],[280,14],[310,20],[336,22.5]];
if(st==='foulard'){
seg(g,S.sh,nk,[[0,13],[1,11]],SCARF);
shape(g,ring([[30,27],[70,30],[110,31],[150,30],[190,29],[225,27],[260,22],[290,20]]),SCARF);
shape(g,ring([[-58,16],[-25,20.5],[0,21.5],[12,24],[26,21],[48,16],[70,9],[150,5],[230,6]]),SK);
}else{
seg(g,S.sh,nk,[[0,8],[1,7]],SKS);
if(st==='afro')shape(g,ring([[40,30],[80,36],[120,38],[160,36],[200,32],[235,24],[20,24]]),HAIR);
if(st==='chignon'){const c=cp(118,31);circ(g,c,13,HAIR);}
if(st==='queue'){const base=cp(150,23),tip=P(base.x-hn.x*16,Math.min(-6,base.y+34));seg(g,base,tip,[[0,7],[.35,9],[.8,5],[1,2.5]],HAIR);}
if(st==='tresses'){let p=cp(195,20);for(let i=0;i<7;i++){p=P(p.x-hn.x*1.5,Math.min(-6,p.y+9));circ(g,p,7.2-i*.45,HAIR);circ(g,P(p.x+2,p.y-2),2,'rgba(255,255,255,.12)');}circ(g,P(p.x,Math.min(-4,p.y+7)),3.5,TOP);}
shape(g,ring(SKULL),SK);
const cap=st==='court'?[[48,26],[70,27],[95,27.5],[130,27],[165,26],[200,24],[232,19],[205,13],[150,10],[100,12],[62,19]]
:[[54,25.5],[75,26.5],[100,27],[135,26.5],[170,25.5],[205,23.5],[230,18],[200,13],[150,10],[105,13],[66,20]];
shape(g,ring(cap),HAIR);
raw(g,'<path d="M'+ring([[70,24],[95,25],[120,24]]).map(p=>f1(p.x)+' '+f1(p.y)).join(' L')+'" fill="none" stroke="#fff" stroke-opacity=".14" stroke-width="3" stroke-linecap="round"/>');
circ(g,cp(176,9),4.2,SKD);
if(st==='queue')circ(g,cp(150,23),4.6,TOP);
if(st==='chignon')circ(g,cp(110,23),4.2,TOP);
}
if(st!=='foulard'||true)circ(g,cp(-2,12),6,'rgba(232,110,95,.22)');
circ(g,cp(30,15.5),2.5,'#2b1710');raw(g,'<path d="M'+f1(cp(30,15.5).x)+' '+f1(cp(30,15.5).y)+' L'+f1(cp(24,19.5).x)+' '+f1(cp(24,19.5).y)+'" stroke="#2b1710" stroke-width="1.6" stroke-linecap="round"/>');
raw(g,'<path d="M'+f1(cp(42,17).x)+' '+f1(cp(42,17).y)+' L'+f1(cp(30,20.5).x)+' '+f1(cp(30,20.5).y)+'" stroke="'+(st==='foulard'?'#2b1710':HAIR)+'" stroke-width="2.2" stroke-linecap="round" opacity=".8"/>');
seg(g,S.sh,S.elb,UARM,SK,ka,true,SKD);seg(g,S.elb,S.hand,FARM,SK,ka,true,SKD);hand(S.elb,S.hand,SK);
}
let KB,KF;function kit0(){KB=$('kitBack');KF=$('kitFront');KB.innerHTML='';KF.innerHTML='';}
const BAND={leg:'#c4a284',mid:'#997b63',fort:'#534032'};
function bandOn(g,hip,knee,col,t=.78){const bp=mix(hip,knee,t),a=Math.atan2(knee.y-hip.y,knee.x-hip.x)/R;
raw(g,`<rect x="${f1(bp.x-15)}" y="${f1(bp.y-24)}" width="30" height="48" rx="9" fill="${col}" transform="rotate(${f1(a+90)} ${f1(bp.x)} ${f1(bp.y)})"/>`);}
function slider(g,x){raw(g,`<ellipse cx="${f1(x)}" cy="-6" rx="40" ry="8" fill="#4e2719"/><ellipse cx="${f1(x)}" cy="-9" rx="40" ry="7" fill="#6e3a27"/>`);}
function brick(g,c,w,h,rot=0){raw(g,`<g transform="rotate(${f1(rot)} ${f1(c.x)} ${f1(c.y)})"><rect x="${f1(c.x-w/2)}" y="${f1(c.y-h/2)}" width="${w}" height="${h}" rx="5" fill="#7a4430"/><rect x="${f1(c.x-w/2)}" y="${f1(c.y-h/2)}" width="${w}" height="7" rx="3" fill="#95573e"/></g>`);}
function ball(g,c,r){raw(g,`<circle cx="${f1(c.x)}" cy="${f1(c.y)}" r="${r}" fill="#6e3a27"/><circle cx="${f1(c.x-r*.35)}" cy="${f1(c.y-r*.35)}" r="${f1(r*.28)}" fill="#8d4f37"/>`);}
function ring(g,c,rx,ry,rot){raw(g,`<g transform="rotate(${f1(rot)} ${f1(c.x)} ${f1(c.y)})"><ellipse cx="${f1(c.x)}" cy="${f1(c.y)}" rx="${f1(rx)}" ry="${ry}" fill="none" stroke="#552b1d" stroke-width="9"/><rect x="${f1(c.x-9)}" y="${f1(c.y-ry-10)}" width="18" height="16" rx="6" fill="#2b1710"/><rect x="${f1(c.x-9)}" y="${f1(c.y+ry-6)}" width="18" height="16" rx="6" fill="#2b1710"/></g>`);}
function roller(g,x1,x2,y1,y2){const h=y2-y1;raw(g,`<rect x="${x1}" y="${y1}" width="${x2-x1}" height="${h}" rx="${h/2}" fill="#5a2e20"/><rect x="${x1+8}" y="${y1+4}" width="${x2-x1-16}" height="7" rx="3.5" fill="#7a4430" opacity=".8"/>`);}
const FL=(k,a,f,dx=-6,dy=4)=>({k:off(k,dx,dy),a:off(a,dx-2,0),f:off(f,dx-2,0)});
const MAT=P(420,4);
function supine(lift,x=0){const sh=P(250+x,-27),ank=P(545+x,-16),foot=P(578+x,-11),hip=P(lerp(392,402,lift)+x,lerp(-27,-142,lift));
return {sh,hip,ank,foot,knee:ik(hip,ank,L.thigh,L.shin,(a,b)=>a.y<b.y?a:b)};}
const ARMS={elb:P(325,-16),hand:P(400,-12)};
const X={};
X.resp=t=>{kit0();const s=supine(0),b=ease(t),hand=P(340,-60-12*b),elb=P(300,-13);
return {S:{...s,elb,hand,front:P(0,-1),headDir:P(-1,.08),farArm:{e:off(elb,-6,0),h:off(hand,-8,-4)},farLeg:FL(s.knee,s.ank,s.foot)},hl:P(335,-62),arrow:{at:P(340,-140),dir:-1},at:MAT};};
X.bascule=t=>{kit0();const s=supine(.2*ease(t)),bc=mix(s.hip,s.knee,.9);brick(KF,bc,46,30,-angOf(s.hip,s.knee));
return {S:{...s,...ARMS,front:P(0,-1),headDir:P(-1,.08),farLeg:FL(s.knee,s.ank,s.foot)},hl:s.hip,arrow:{at:P(s.hip.x+6,s.hip.y-86),dir:-1},at:bc};};
X.cercle=t=>{kit0();const s=supine(0),c=mix(s.hip,s.knee,.82),th=Math.atan2(s.knee.y-s.hip.y,s.knee.x-s.hip.x)/R;ring(KF,c,lerp(18,8,ease(t)),44,th);
return {S:{...s,...ARMS,front:P(0,-1),headDir:P(-1,.08),farLeg:FL(s.knee,s.ank,s.foot)},hl:c,arrow:{at:P(c.x,c.y-92),dir:0},at:c};};
X.pont=t=>{kit0();const s=supine(ease(t));bandOn(KF,s.hip,s.knee,BAND.mid);
return {S:{...s,elb:P(325,-16),hand:P(400,-12),front:P(0,-1),headDir:P(-1,.08),farLeg:FL(s.knee,s.ank,s.foot)},hl:mix(s.hip,s.knee,.25),arrow:{at:P(s.hip.x+70,s.hip.y-30),dir:-1},at:mix(s.hip,s.knee,.78)};};
X.hundred=t=>{kit0();const hip=P(392,-27),sh=pol(hip,158,150),knee=pol(hip,88,122),ank=pol(knee,-2,116),foot=pol(ank,-6,28),a=lerp(-15,-5,t),elb=pol(sh,a,86),hand=pol(sh,a,166);
return {S:{sh,hip,knee,ank,foot,elb,hand,headDir:dirA(146),farArm:{e:off(elb,-6,3),h:off(hand,-8,3)},farLeg:FL(knee,ank,foot,-6,2)},hl:mix(hip,sh,.4),arrow:null,at:MAT};};
function slsLeg(hip,s){const ta=lerp(120,32,s),sa=lerp(-8,32,s),k=pol(hip,ta,122),a=pol(k,sa,116);return {k,a,f:pol(a,sa-10,28)};}
X.sls=t=>{kit0();const hip=P(392,-27),sh=pol(hip,155,150),s=ease(t),N=slsLeg(hip,s),F=slsLeg(hip,1-s),B=s<.5?N:F;
let hand=mix(B.k,B.a,.2);if(Math.hypot(hand.x-sh.x,hand.y-sh.y)>160)hand=along(sh,hand,160);
const elb=ik(sh,hand,L.upper,L.fore,(a,b)=>a.y<b.y?a:b);
return {S:{sh,hip,knee:N.k,ank:N.a,foot:N.f,elb,hand,headDir:dirA(144),farArm:{e:off(elb,-6,4),h:off(hand,-4,6)},farLeg:F},hl:mix(hip,sh,.4),arrow:null,at:MAT};};
X.deadbug=t=>{kit0();const sh=P(290,-27),hip=P(432,-27),d=ease(t),aa=lerp(86,124,d),elb=pol(sh,aa,86),hand=pol(sh,aa,166);
ball(KB,pol(sh,aa,192),28);
const ta=lerp(90,22,d),sa=lerp(0,22,d),knee=pol(hip,ta,122),ank=pol(knee,sa,116),foot=pol(ank,sa,28);
const fk=pol(hip,92,122),fa=pol(fk,0,116);
return {S:{sh,hip,knee,ank,foot,elb,hand,front:P(0,-1),headDir:P(-1,.08),farArm:{e:off(elb,-5,2),h:off(hand,-6,2)},farLeg:{k:fk,a:fa,f:pol(fa,0,26)}},hl:mix(hip,sh,.4),arrow:{at:P(ank.x+30,ank.y-56),dir:0},at:pol(sh,aa,192)};};
X.enroule=t=>{kit0();const d=ease(t),ank=P(470,-14),foot=P(506,-9),hip=P(lerp(452,436,d),lerp(-236,-226,d));
const knee=ik(hip,ank,L.thigh,L.shin,(a,b)=>a.x>b.x?a:b),ta=lerp(93,-38,d),sh=pol(hip,ta,150);
const bc=P(556,-23);brick(KF,bc,40,42);
let hand=mix(pol(sh,-88,160),P(552,-46),d);if(Math.hypot(hand.x-sh.x,hand.y-sh.y)>162)hand=along(sh,hand,162);
const elb=ik(sh,hand,L.upper,L.fore,(a,b)=>a.x<b.x?a:b);
return {S:{sh,hip,knee,ank,foot,elb,hand,headDir:dirA(ta-42*d),farArm:{e:off(elb,-8,0),h:off(hand,-8,0)},farLeg:{k:off(knee,-12,3),a:off(ank,-14,0),f:off(foot,-14,0)}},hl:mix(hip,sh,.5),arrow:{at:off(sh,70,-10),dir:1},at:bc};};
X.planche=t=>{kit0();const sh=P(300,-100),ank=P(680,-24),b=3*Math.sin(t*Math.PI);
const hip=off(mix(sh,ank,150/388),0,-b),knee=off(mix(sh,ank,272/388),0,-b*.5),elb=P(298,-14),hand=P(222,-12),foot=P(696,-6);
return {S:{sh,hip,knee,ank,foot,elb,hand,front:P(0,1),farArm:{e:off(elb,12,0),h:off(hand,14,0)},farLeg:{k:off(knee,-4,-3),a:off(ank,-6,-2),f:off(foot,-6,-2)}},hl:mix(sh,hip,.6),arrow:null,at:MAT};};
X.clam=t=>{kit0();const d=ease(t),hip=P(430,-36),sh=P(282,-44);
const bk=P(528,-18),ba=P(612,-24),bf=P(640,-20),tk=mix(P(524,-48),P(498,-146),d),ta=P(608,-44),tf=P(636,-40);
const hand=P(332,-12),elb=ik(sh,hand,L.upper,L.fore,(a,b)=>a.y<b.y?a:b);
const b1=mix(hip,tk,.8),b2=mix(hip,bk,.8);
raw(KF,`<path d="M${f1(b1.x)} ${f1(b1.y)} L${f1(b2.x)} ${f1(b2.y)}" stroke="${BAND.leg}" stroke-width="16" stroke-linecap="round"/>`);
return {S:{sh,hip,knee:tk,ank:ta,foot:tf,elb,hand,front:P(0,1),headDir:P(-1,-.05),farArm:{e:P(204,-22),h:P(140,-24)},farLeg:{k:bk,a:ba,f:bf}},hl:mix(hip,tk,.6),arrow:{at:off(tk,46,-26),dir:-1},at:mix(b1,b2,.5)};};
X.fente=t=>{kit0();const d=ease(t),ankF=P(500,-14),footF=P(536,-9),hip=mix(P(482,-236),P(372,-140),d);
const knee=ik(hip,ankF,L.thigh,L.shin,(a,b)=>a.x>b.x?a:b);
const ankB=P(lerp(476,278,d),lerp(-14,-28,d)),footB=mix(P(ankB.x+36,-9),P(ankB.x+22,-10),d),kB=ik(hip,ankB,L.thigh,L.shin,(a,b)=>a.y>b.y?a:b);
slider(KB,footB.x-4);
const sh=pol(hip,91,150),hand=P(hip.x+14,hip.y-26),elb=ik(sh,hand,L.upper,L.fore,(a,b)=>a.x<b.x?a:b);
return {S:{sh,hip,knee,ank:ankF,foot:footF,elb,hand,front:P(1,0),farArm:{e:off(elb,-10,2),h:off(hand,-10,2)},farLeg:{k:kB,a:ankB,f:footB}},hl:mix(hip,knee,.4),arrow:{at:P(ankB.x-30,-84),dir:0},at:P(footB.x-4,-8)};};
X.circles=(t,ph)=>{kit0();const s=supine(0),hip=s.hip,a=2*Math.PI*ph,c=P(hip.x+40,hip.y-214);
const ank=along(hip,P(c.x+36*Math.cos(a),c.y+18*Math.sin(a)),236),knee=mix(hip,ank,.513),foot=along(ank,P(ank.x*2-hip.x,ank.y*2-hip.y),26);
return {S:{sh:s.sh,hip,knee,ank,foot,...ARMS,front:P(0,-1),headDir:P(-1,.08),farLeg:FL(s.knee,s.ank,s.foot)},hl:hip,arrow:{orbit:{c:P(c.x,c.y-28),rx:52,ry:24},ph},at:MAT};};
X.squat=t=>{kit0();const d=ease(t),ank=P(470,-14),foot=P(506,-9),hip=P(lerp(452,372,d),lerp(-236,-128,d));
const knee=ik(hip,ank,L.thigh,L.shin,(a,b)=>a.x>b.x?a:b),lean=lerp(4,42,d)*R,sh=P(hip.x+L.torso*Math.sin(lean),hip.y-L.torso*Math.cos(lean));
const r=lerp(.15,1,d),elb=P(sh.x+L.upper*lerp(.15,.98,r),sh.y+L.upper*lerp(.98,.2,r)),hand=P(elb.x+L.fore*lerp(.1,1,r),elb.y+L.fore*lerp(.99,.05,r));
bandOn(KF,hip,knee,BAND.fort,.8);
return {S:{sh,hip,knee,ank,foot,elb,hand,front:P(1,0),farArm:{e:off(elb,-10,4),h:off(hand,-10,4)},farLeg:{k:off(knee,-12,3),a:off(ank,-14,0),f:off(foot,-14,0)}},hl:mix(hip,knee,.3),arrow:{at:P(hip.x-80,hip.y-20),dir:1},at:mix(hip,knee,.8)};};
X.tuck=t=>{kit0();const k=ease(t),hand=P(292,-12),sh=P(300,-142),ank=P(lerp(678,486,k),-24),foot=P(ank.x+30,-18),hip=P(lerp(455,430,k),lerp(-120,-172,k));
const knee=ik(hip,ank,L.thigh,L.shin,(a,b)=>a.y>b.y?a:b),elb=off(mix(sh,hand,.5),3,0);slider(KB,ank.x+14);
return {S:{sh,hip,knee,ank,foot,elb,hand,front:P(0,1),farArm:{e:off(elb,-12,0),h:off(hand,-14,0)},farLeg:{k:off(knee,-8,-4),a:off(ank,-10,-2),f:off(foot,-10,-2)}},hl:mix(sh,hip,.5),arrow:{at:P(ank.x+90,-70),dir:0},at:P(ank.x+14,-8)};};
X.rollup=t=>{kit0();const d=ease(t),hip=P(460,-27),knee=P(582,-22),ank=P(698,-18),foot=P(704,-46);
const ta=lerp(178,58,d),sh=pol(hip,ta,150),aa=lerp(160,14,d),elb=pol(sh,aa,86),hand=pol(sh,aa,166);
return {S:{sh,hip,knee,ank,foot,elb,hand,headDir:dirA(ta-24*Math.sin(Math.PI*d)),farArm:{e:off(elb,-4,3),h:off(hand,-4,3)},farLeg:{k:off(knee,-6,2),a:off(ank,-8,0),f:off(foot,-8,0)}},hl:mix(hip,sh,.4),arrow:{at:P(hip.x-70,-190),dir:-1},at:MAT};};
X.teaser=t=>{kit0();const d=ease(t),hip=P(430,-30),a0=P(600,-16),k0=ik(hip,a0,L.thigh,L.shin,(a,b)=>a.y<b.y?a:b);
const knee=pol(hip,lerp(angOf(hip,k0),52,d),122),sa=lerp(angOf(k0,a0),-4,d),ank=pol(knee,sa,116),foot=mix(P(ank.x+33,ank.y+5),pol(ank,sa-12,28),d);
const sh=pol(hip,lerp(100,130,d),150),aa=lerp(8,26,d),elb=pol(sh,aa,86),hand=pol(sh,aa,166);ball(KB,pol(sh,aa,188),24);
return {S:{sh,hip,knee,ank,foot,elb,hand,farArm:{e:off(elb,-6,3),h:off(hand,-6,3)},farLeg:FL(knee,ank,foot,-8,2)},hl:mix(hip,sh,.3),arrow:{at:P(ank.x+34,ank.y-56),dir:-1},at:pol(sh,aa,188)};};
X.pike=t=>{kit0();const d=ease(t),hand=P(292,-12),sh=mix(P(300,-148),P(282,-150),d),hip=pol(sh,lerp(-18,40,d),150);
const dy=-24-hip.y,ank=P(hip.x+Math.sqrt(Math.max(0,238*238-dy*dy)),-24),knee=mix(hip,ank,.513),foot=P(ank.x+30,-18),elb=off(mix(sh,hand,.5),3,0);
slider(KB,ank.x+14);
return {S:{sh,hip,knee,ank,foot,elb,hand,front:P(0,1),farArm:{e:off(elb,-12,0),h:off(hand,-14,0)},farLeg:{k:off(knee,-8,-4),a:off(ank,-10,-2),f:off(foot,-10,-2)}},hl:hip,arrow:{at:P(hip.x+56,hip.y-40),dir:-1},at:P(ank.x+14,-8)};};
X.rouleau=t=>{kit0();roller(KB,235,452,-40,-2);const d=ease(t),sh=P(285,-62),hip=P(430,-62),ank=P(590,-16),foot=P(623,-11);
const knee=ik(hip,ank,L.thigh,L.shin,(a,b)=>a.y<b.y?a:b),aa=lerp(-12,132,d),elb=pol(sh,aa,86),hand=pol(sh,aa,166);
return {S:{sh,hip,knee,ank,foot,elb,hand,front:P(0,-1),headDir:P(-1,0),farArm:{e:off(elb,-6,4),h:off(hand,-8,6)},farLeg:FL(knee,ank,foot)},hl:mix(sh,hip,.5),arrow:{at:P(250,-170),dir:-1},at:P(340,-21)};};
const ICON={
tapis:'<rect x="10" y="24" width="60" height="34" rx="6" fill="#6a3726"/><circle cx="62" cy="41" r="14" fill="#552b1d"/><circle cx="62" cy="41" r="6" fill="#43211a"/>',
brique:'<rect x="16" y="22" width="48" height="36" rx="6" fill="#7a4430"/><rect x="16" y="22" width="48" height="9" rx="4" fill="#95573e"/>',
cercle:'<ellipse cx="40" cy="40" rx="24" ry="24" fill="none" stroke="#6e3a27" stroke-width="7"/><rect x="31" y="9" width="18" height="12" rx="5" fill="#f4ece2" opacity=".85"/><rect x="31" y="59" width="18" height="12" rx="5" fill="#f4ece2" opacity=".85"/>',
ballon:'<circle cx="40" cy="40" r="24" fill="#6e3a27"/><circle cx="32" cy="32" r="7" fill="#8d4f37"/>',
rouleau:'<rect x="10" y="28" width="60" height="24" rx="12" fill="#5a2e20"/><ellipse cx="62" cy="40" rx="6" ry="12" fill="#7a4430"/>',
slider1:'<ellipse cx="40" cy="44" rx="26" ry="9" fill="#4e2719"/><ellipse cx="40" cy="41" rx="26" ry="8" fill="#6e3a27"/>',
sliders:'<ellipse cx="40" cy="30" rx="26" ry="8" fill="#4e2719"/><ellipse cx="40" cy="27" rx="26" ry="7" fill="#6e3a27"/><ellipse cx="40" cy="55" rx="26" ry="8" fill="#4e2719"/><ellipse cx="40" cy="52" rx="26" ry="7" fill="#6e3a27"/>'};
const bandIcon=c=>'<rect x="14" y="20" width="52" height="40" rx="14" fill="none" stroke="'+c+'" stroke-width="12"/>';
const SOL='Pose-les au sol, hors du tapis : ils doivent pouvoir glisser.';
const EX={
resp:{name:'Respiration latérale',kit:'Avec le tapis',acc:'Le tapis',icon:'tapis',period:6,reps:8,cues:['Inspire, ouvre les côtes','Expire, ventre rentré'],
steps:['Déroule le tapis à plat, dans un endroit dégagé.','Allonge-toi sur le dos, genoux pliés, pieds à plat.','Pose tes mains sur les côtés de tes côtes.','Inspire par le nez : tes côtes s\'écartent sous tes mains.'],easy:'Fais-le assise, le dos droit.'},
bascule:{name:'Bascule du bassin',kit:'Avec la brique',acc:'La brique',icon:'brique',period:4,reps:10,cues:['Expire, bascule le bassin','Inspire, reviens doucement'],
steps:['Prends la brique.','Allonge-toi sur le dos, genoux pliés, pieds à plat.','Serre la brique entre tes genoux.','Bras le long du corps, paumes vers le sol.'],easy:'Sans la brique, genoux simplement serrés.'},
hundred:{name:'Le Hundred',kit:'Avec le tapis · version débutante',acc:'Le tapis',icon:'tapis',type:'beats',period:1,cueEvery:5,reps:50,cues:['Inspire sur 5 battements','Expire sur 5 battements'],
steps:['Allonge-toi sur le dos.','Monte les jambes, genoux pliés à 90°, tibias parallèles au sol.','Décolle la tête et les épaules, regard vers tes genoux.','Bras tendus le long du corps : tape l\'air en petits battements.'],easy:'Garde la tête posée et les pieds sur le tapis.'},
enroule:{name:'Enroulé de colonne',kit:'Avec la brique',acc:'La brique',icon:'brique',period:7,reps:6,cues:['Expire, enroule-toi vers le bas','Inspire, déroule pour remonter'],
steps:['Pose la brique debout, devant tes pieds.','Debout, pieds écartés de la largeur des hanches, genoux souples.','Descends en enroulant le dos, la tête en premier.','Touche la brique du bout des doigts, puis déroule pour remonter.'],easy:'Plie un peu plus les genoux et descends moins bas.'},
planche:{name:'Planche',kit:'Sur les avant-bras',acc:'Le tapis',icon:'tapis',type:'hold',period:4,cueEvery:4,reps:30,cues:['Respire calmement','Ventre serré, dos plat'],
steps:['Mets-toi à plat ventre sur le tapis.','Avant-bras au sol, coudes sous les épaules.','Décolle le corps : appui sur les avant-bras et la pointe des pieds.','Ventre serré, fesses dans l\'alignement du dos.'],easy:'Pose les genoux au sol.'},
sls:{name:'Single leg stretch',kit:'Avec le tapis',acc:'Le tapis',icon:'tapis',period:3,reps:10,cues:['Expire, change de jambe','Inspire, allonge bien'],
steps:['Allonge-toi sur le dos.','Décolle la tête et les épaules, regard vers le ventre.','Ramène un genou vers la poitrine, mains posées dessus.','Allonge l\'autre jambe en diagonale, puis change.'],easy:'Tête posée au sol, jambe tendue plus haut.'},
cercle:{name:'Cercle entre les genoux',kit:'Avec le cercle',acc:'Le cercle',icon:'cercle',period:4,reps:12,cues:['Expire, serre le cercle','Inspire, relâche doucement'],
steps:['Prends le cercle.','Allonge-toi sur le dos, genoux pliés, pieds à plat.','Place le cercle entre tes genoux, bien centré.','Bras le long du corps, épaules relâchées.'],easy:'Serre moins fort, moins longtemps.'},
deadbug:{name:'Dead bug',kit:'Avec le petit ballon',acc:'Le petit ballon',icon:'ballon',period:4,reps:10,cues:['Expire, allonge bras et jambe','Inspire, reviens au centre'],
steps:['Prends le petit ballon.','Allonge-toi sur le dos, jambes en l\'air, genoux pliés à 90°.','Tiens le ballon à deux mains, bras tendus au-dessus de toi.','Allonge une jambe à la fois, bas du dos collé au tapis.'],easy:'Allonge la jambe moins loin, pied plus haut.'},
pont:{name:'Pont fessier',kit:'Avec la bande moyenne',acc:'La bande moyenne',icon:'band:'+BAND.mid,period:3.2,reps:12,cues:['Expire, monte le bassin','Inspire, redescends'],
steps:['Prends la bande moyenne, la taupe.','Enfile-la au-dessus des genoux, bien à plat, sans la vriller.','Allonge-toi sur le dos, pieds à plat, écartés de la largeur des hanches.','Pendant tout l\'exercice, pousse doucement les genoux vers l\'extérieur.'],easy:'Avec la bande légère, ou sans bande.'},
clam:{name:'Clamshell',kit:'Avec la bande légère',acc:'La bande légère',icon:'band:'+BAND.leg,period:3,reps:12,cues:['Expire, ouvre le genou','Inspire, referme doucement'],
steps:['Prends la bande légère, la plus claire.','Enfile-la au-dessus des genoux.','Allonge-toi sur le côté, genoux pliés, pieds l\'un sur l\'autre.','Pieds collés, ouvre le genou du dessus. À mi-temps, change de côté.'],easy:'Sans la bande.'},
squat:{name:'Squat avec bande',kit:'Avec la bande forte',acc:'La bande forte',icon:'band:'+BAND.fort,period:3.4,reps:12,cues:['Inspire, descends','Expire, pousse dans les talons'],
steps:['Prends la bande forte, la plus foncée.','Place-la au-dessus des genoux.','Debout, pieds écartés de la largeur des épaules.','Garde les genoux dans l\'axe des pieds en descendant.'],easy:'Avec la bande moyenne, et descends moins bas.'},
fente:{name:'Fente arrière',kit:'Avec 1 slider',acc:'Un slider',icon:'slider1',period:4,reps:10,cues:['Inspire, glisse la jambe en arrière','Expire, ramène-la sous toi'],
steps:['Pose un slider au sol, hors du tapis : il doit pouvoir glisser.','Debout, pose la pointe d\'un pied sur le slider.','Glisse ce pied vers l\'arrière en pliant le genou de devant.','Ramène le pied sous toi. À mi-temps, change de jambe.'],easy:'Descends moins bas, en te tenant à une chaise.'},
circles:{name:'Leg circles',kit:'Avec le tapis',acc:'Le tapis',icon:'tapis',period:4,reps:8,cues:['Dessine un petit cercle','Garde le bassin immobile'],
steps:['Allonge-toi sur le dos.','Plie une jambe, pied à plat sur le tapis.','Monte l\'autre jambe vers le plafond.','Dessine de petits cercles avec le pied. À mi-temps, change de jambe.'],easy:'Plus petits cercles, genou un peu plié.'},
tuck:{name:'Genoux à la poitrine',kit:'Avec les 2 sliders',acc:'Les 2 sliders',icon:'sliders',period:3,reps:10,cues:['Expire, ramène les genoux','Inspire, repousse'],
steps:['Prends les 2 sliders. '+SOL,'Mets la pointe de chaque pied sur un slider.','Mains sous les épaules, corps droit comme une planche.','Garde le ventre serré : le dos ne doit pas creuser.'],easy:'Ramène un genou à la fois.'},
rollup:{name:'Roll up',kit:'Avec le tapis',acc:'Le tapis',icon:'tapis',period:7,reps:6,cues:['Expire, enroule-toi vers tes pieds','Inspire, déroule vers le tapis'],
steps:['Allonge-toi sur le dos, jambes tendues, pointes de pieds vers toi.','Bras tendus au-dessus de la tête.','Monte les bras, puis enroule le dos pour aller vers tes pieds.','Redescends en déroulant le dos, petit à petit.'],easy:'Genoux pliés, mains derrière les cuisses pour t\'aider.'},
teaser:{name:'Teaser guidé',kit:'Avec le petit ballon',acc:'Le petit ballon',icon:'ballon',period:5,reps:6,cues:['Expire, décolle les pieds','Inspire, repose les pieds'],
steps:['Prends le petit ballon.','Assise, genoux pliés, pieds à plat.','Tiens le ballon bras tendus devant toi.','Penche-toi en arrière, dos droit, et décolle les pieds.'],easy:'Garde les pieds au sol et penche-toi moins.'},
pike:{name:'Pike sur sliders',kit:'Avec les 2 sliders',acc:'Les 2 sliders',icon:'sliders',period:4,reps:8,cues:['Expire, monte les fesses','Inspire, reviens en planche'],
steps:['Prends les 2 sliders. '+SOL,'Pointe des pieds sur les sliders, mains sous les épaules.','Jambes tendues, monte les fesses vers le plafond.','Les pieds glissent vers les mains, puis reviens en planche.'],easy:'Fais plutôt « genoux à la poitrine ».'},
rouleau:{name:'Retour au calme',kit:'Sur le rouleau',acc:'Le rouleau',icon:'rouleau',period:8,reps:6,cues:['Inspire, ouvre les bras','Expire, relâche tout'],
steps:['Pose le rouleau dans la longueur, au milieu du tapis.','Assieds-toi au bout, puis allonge-toi dessus : tête et bassin posés.','Genoux pliés, pieds à plat au sol.','Ouvre doucement les bras sur les côtés, sans forcer.'],easy:'Reste allongée sur le tapis, sans le rouleau.'}
};
const PH=[{n:'Les bases',from:1,to:7,c:'#3a2a22'},{n:'Le gainage',from:8,to:14,c:'#5c4031'},{n:'Le bas du corps',from:15,to:21,c:'#8a5e45'},{n:'Les enchaînements',from:22,to:30,c:'#2ef27a'}];
const RANGE={bascule:[1,7],enroule:[1,7],hundred:[3,7],planche:[8,14],cercle:[8,14],sls:[9,14],deadbug:[11,14],
pont:[15,21],clam:[15,18],squat:[16,21],fente:[17,21],tuck:[19,21],circles:[19,21],rollup:[22,29],teaser:[24,29],pike:[26,29]};
const POOL={1:['hundred','enroule'],2:['planche','deadbug'],3:['planche','pont','sls','fente','squat','deadbug']};   // rappels des phases précédentes
const phaseOf=d=>PH.findIndex(p=>d>=p.from&&d<=p.to);
function movesFor(d){if(d===30)return movesFor(1);      // jour 30 : on refait la séance du jour 1
const pi=phaseOf(d);let m=Object.keys(RANGE).filter(k=>RANGE[k][0]<=d&&d<=RANGE[k][1]&&phaseOf(RANGE[k][0])===pi);
const cap=pi===0?3:4,min=pi===3?4:3;
if(m.length>cap){const r=d%m.length;m=m.slice(r).concat(m.slice(0,r)).slice(0,cap);}
const pool=POOL[pi]||[];for(let i=0;i<pool.length*2&&m.length<min;i++){const c=pool[(d+i)%pool.length];if(!m.includes(c))m.push(c);}
return m;}
const PREP=12,NEXT=6,WU=60,CD=90;
function buildDay(d){const m=movesFor(d),n=m.length,rounds=n<=2?4:n===3?3:2;
const fixed=WU+CD+PREP*(n+2)+NEXT*(n*rounds-n);
let W=Math.round((900-fixed)/(n*rounds)/5)*5;W=Math.max(35,Math.min(75,W));
const st=[{k:'prep',ex:'resp',ph:'Échauffement'},{k:'work',ex:'resp',dur:WU,ph:'Échauffement'}];
for(let r=0;r<rounds;r++)for(const e of m){st.push({k:r===0?'prep':'next',ex:e,round:r+1,rounds});st.push({k:'work',ex:e,dur:EX[e].type==='hold'?Math.min(W,40):W,round:r+1,rounds});}
st.push({k:'prep',ex:'rouleau',ph:'Retour au calme'},{k:'work',ex:'rouleau',dur:CD,ph:'Retour au calme'});
const total=st.reduce((s,x)=>s+(x.k==='work'?x.dur:x.k==='prep'?PREP:NEXT),0);
return {d,m,rounds,W,steps:st,total,phase:PH[phaseOf(d)]};}
const store={get(k,def){try{const v=localStorage.getItem('vaure_'+k);return v===null?def:JSON.parse(v);}catch(e){return def;}},
set(k,v){try{localStorage.setItem('vaure_'+k,JSON.stringify(v));}catch(e){}}};
let DONE=store.get('done',[]),MODE=store.get('mode','timer');
const nextDay=()=>{for(let d=1;d<=30;d++)if(!DONE.includes(d))return d;return 30;};
const accOf=id=>EX[id].acc.replace(/^(Le|La|Les|Un) /,m=>m.toLowerCase());
function needFor(b){const s=new Set(['le tapis']);[...b.m,'rouleau'].forEach(id=>s.add(accOf(id)));return [...s];}
const mins=s=>Math.round(s/60);
function renderHome(){const nd=nextDay(),b=buildDay(nd);
$('doneN').textContent=DONE.length;$('pPct').textContent=Math.round(DONE.length/30*100)+' %';$('pbar').style.width=(DONE.length/30*100)+'%';
const all=DONE.length===30;
$('today').innerHTML=`<span class="k">${all?'Défi terminé, bravo':'Ta séance du jour'}</span>
<h2 class="bc">Jour ${nd} · <em>${b.phase.n.replace(/^(Les|Le|La) /,'')}</em></h2>
<div class="meta">${mins(b.total)} min · ${b.m.length} exercices · ${b.rounds} tours</div>
<div class="chips">${b.m.map(id=>'<span>'+EX[id].name+'</span>').join('')}</div>
<button class="btn" data-start="${nd}">${all?'Refaire le jour 30':'Commencer'} <svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M3 8h10M9 4l4 4-4 4"/></svg></button>`;
let g='';for(let d=1;d<=30;d++)g+=`<button class="tile${DONE.includes(d)?' done':''}${d===nd&&!all?' now':''}" style="--c:${PH[phaseOf(d)].c}" data-day="${d}" aria-label="Jour ${d}">${d}</button>`;
$('grid').innerHTML=g;
$('legend').innerHTML=PH.map(p=>`<span style="--c:${p.c}">${p.from}–${p.to} · ${p.n.replace(/^(Les|Le) /,'')}</span>`).join('');}
function openSheet(d){const b=buildDay(d);
const row=(id,extra)=>`<li>${EX[id].name}<span>${extra}</span></li>`;
$('sheet').innerHTML=`<div class="grab"></div><span class="k">Jour ${d} sur 30</span>
<h2 class="bc">${b.phase.n.replace(/ (\S+)$/,' <em>$1</em>')}</h2>
<div class="meta">${mins(b.total)} min au total · ${b.rounds} tours${d===30?' · la séance du jour 1, pour voir le chemin parcouru':''}</div>
<div class="need"><b>Ce qu'il te faut</b><div class="chips">${needFor(b).map(x=>'<span>'+x[0].toUpperCase()+x.slice(1)+'</span>').join('')}</div></div>
<ul class="plan"><li class="sub">Échauffement</li>${row('resp','1 min')}
<li class="sub">Le corps de la séance · ${b.rounds} tours</li>${b.m.map(id=>row(id,(EX[id].type==='hold'?Math.min(b.W,40):b.W)+' s × '+b.rounds)).join('')}
<li class="sub">Retour au calme</li>${row('rouleau','1 min 30')}</ul>
<button class="btn" data-start="${d}">Commencer le jour ${d}</button>`;
$('sheet').classList.add('on');$('veil').classList.add('on');}
function closeSheet(){$('sheet').classList.remove('on');$('veil').classList.remove('on');}
document.addEventListener('click',e=>{const s=e.target.closest('[data-start]');if(s){closeSheet();startDay(+s.dataset.start);return;}
const t=e.target.closest('[data-day]');if(t)openSheet(+t.dataset.day);
const n=e.target.closest('[data-tab]');if(n)setTab(n.dataset.tab);});
$('veil').onclick=closeSheet;
let TAB='home',MUS=store.get('music',null),musSheet=false;
function toEmbed(u){let x;try{x=new URL(u.trim());}catch(e){return null;}
const h=x.hostname.replace(/^www\./,'');let m;
if(h==='open.spotify.com'&&(m=x.pathname.match(/\/(playlist|album|track|artist|show|episode)\/([A-Za-z0-9]+)/)))return {p:'Spotify',src:'https://open.spotify.com/embed/'+m[1]+'/'+m[2],h:152};
if(/(^|\.)deezer\.com$/.test(h)&&(m=x.pathname.match(/\/(playlist|album|track|artist)\/(\d+)/)))return {p:'Deezer',src:'https://widget.deezer.com/widget/dark/'+m[1]+'/'+m[2],h:150};
if(h==='music.apple.com'&&x.pathname.split('/').length>3)return {p:'Apple Music',src:'https://embed.music.apple.com'+x.pathname+x.search,h:175};
if(/^(m\.|music\.)?youtube\.com$/.test(h)){const l=x.searchParams.get('list'),v=x.searchParams.get('v');
if(l)return {p:'YouTube',src:'https://www.youtube.com/embed/videoseries?list='+encodeURIComponent(l),h:210};
if(v)return {p:'YouTube',src:'https://www.youtube.com/embed/'+encodeURIComponent(v),h:210};}
if(h==='youtu.be'&&x.pathname.length>1)return {p:'YouTube',src:'https://www.youtube.com/embed/'+encodeURIComponent(x.pathname.slice(1)),h:210};
return null;}
function mountMusic(){const slot=$('dkSlot');slot.innerHTML='';
if(!MUS){$('dkFrame').classList.remove('on');$('dkForm').hidden=false;$('dkHelp').hidden=false;$('musBtn').classList.remove('on');return;}
const f=document.createElement('iframe');f.src=MUS.src;f.height=MUS.h;f.loading='lazy';f.title='Lecteur '+MUS.p;
f.allow='autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture';slot.appendChild(f);
$('dkSrc').textContent='Connecté : '+MUS.p;$('dkName').textContent=MUS.p;
$('dkFrame').classList.add('on');$('dkForm').hidden=true;$('dkHelp').hidden=true;$('musBtn').classList.add('on');}
function placeDock(){const k=$('dock'),inPlayer=$('app').classList.contains('open');
k.className='dock '+(inPlayer?(musSheet?'msheet':'hide'):TAB==='music'?'page':MUS?'mini':'hide');}
$('dkForm').onsubmit=e=>{e.preventDefault();const v=$('dkUrl').value,r=toEmbed(v),msg=$('dkMsg');
if(!v.trim()){msg.className='dk-msg err';msg.textContent='Colle d\'abord un lien.';return;}
if(!r){msg.className='dk-msg err';msg.textContent=/spotify\.link|link\.deezer|deezer\.page/.test(v)?'Ce lien est un lien court : ouvre-le dans ton navigateur, puis copie l\'adresse complète.':'Ce lien n\'est pas reconnu. Il faut un lien de playlist, d\'album ou de titre Spotify, Deezer, Apple Music ou YouTube.';return;}
MUS=r;store.set('music',r);msg.textContent='';$('dkUrl').value='';mountMusic();placeDock();};
$('dkRemove').onclick=()=>{MUS=null;store.set('music',null);mountMusic();placeDock();};
$('dkShow').onclick=()=>setTab('music');
$('dkClose').onclick=()=>{musSheet=false;placeDock();};
$('musBtn').onclick=()=>{musSheet=!musSheet;placeDock();};
function setTab(t){TAB=t;$('tab-home').hidden=t!=='home';$('tab-music').hidden=t!=='music';
document.querySelectorAll('.nav button').forEach(b=>b.classList.toggle('on',b.dataset.tab===t));placeDock();}
let PL=null,lastStep=-1,lastNow=null;
const pad=n=>String(Math.max(0,Math.floor(n))).padStart(2,'0'),mmss=s=>pad(s/60)+':'+pad(s%60);
function startDay(d){const b=buildDay(d);PL={b,i:0,t:0,at:0,paused:false,real:0};lastStep=-1;
const works=b.steps.filter(s=>s.k==='work').length;$('segs').innerHTML='<i><b></b></i>'.repeat(works);
$('dayLbl').innerHTML='Jour '+d+' · <b>'+b.phase.n+'</b>';
$('app').classList.add('open');$('app').classList.remove('paused');musSheet=false;placeDock();setMode(MODE);}
function setMode(m){MODE=m;store.set('mode',m);$('app').classList.toggle('rythme',m==='rythme');
document.querySelectorAll('#mode button').forEach(b=>b.classList.toggle('on',b.dataset.m===m));lastStep=-1;}
document.querySelectorAll('#mode button').forEach(b=>b.onclick=()=>setMode(b.dataset.m));
function advance(){if(!PL)return;PL.i++;PL.t=0;PL.at=0;if(PL.i>=PL.b.steps.length)finish();}
$('go').onclick=advance;$('fin').onclick=advance;$('skip').onclick=advance;
$('pause').onclick=()=>{if(!PL)return;PL.paused=!PL.paused;$('app').classList.toggle('paused',PL.paused);
$('pzIc').innerHTML=PL.paused?'<path d="M4 2l16 11L4 24z" fill="#2b1710"/>':'<rect x="2" y="2" width="6" height="22" rx="2" fill="#2b1710"/><rect x="14" y="2" width="6" height="22" rx="2" fill="#2b1710"/>';};
$('quit').onclick=()=>{PL=null;$('app').classList.remove('open');musSheet=false;placeDock();};
function finish(){const b=PL.b;if(!DONE.includes(b.d))DONE.push(b.d);store.set('done',DONE);
$('endDay').textContent='Jour '+b.d+' · '+b.phase.n;
$('endTxt').textContent=b.d<30?'Demain, jour '+(b.d+1)+'. Le plus dur, c\'est de commencer : c\'est fait.':'Tu as bouclé le défi. Demain, une nouvelle séance t\'attend.';
$('sMin').textContent=Math.max(1,Math.round(PL.real/60));$('sEx').textContent=b.m.length+2;$('sDone').textContent=DONE.length;
PL=null;$('app').classList.remove('open');musSheet=false;placeDock();$('end').classList.add('on');renderHome();}
$('endBack').onclick=()=>$('end').classList.remove('on');
function drawArrow(A,tri,ph){const g=$('arw');if(!A){g.innerHTML='';return;}
if(A.orbit){const o=A.orbit,a=2*Math.PI*A.ph,p=P(o.c.x+o.rx*Math.cos(a),o.c.y+o.ry*Math.sin(a));
g.innerHTML=`<ellipse cx="${f1(o.c.x)}" cy="${f1(o.c.y)}" rx="${o.rx}" ry="${o.ry}" stroke-dasharray="4 14" opacity=".7"/><circle cx="${f1(p.x)}" cy="${f1(p.y)}" r="7" fill="#2ef27a" stroke="none"/>`;g.setAttribute('opacity','1');return;}
const up=ph<.5;let dx=0,dy=0;if(A.dir===-1)dy=up?-1:1;else if(A.dir===1)dy=up?1:-1;else dx=up?-1:1;
const s0=P(A.at.x-dx*34-dy*14,A.at.y-dy*34+dx*14),s1=P(A.at.x+dx*34-dy*14,A.at.y+dy*34+dx*14),c=P(A.at.x+dy*18,A.at.y-dx*18);
g.innerHTML=`<path d="M${f1(s0.x)} ${f1(s0.y)} Q${f1(c.x)} ${f1(c.y)} ${f1(s1.x)} ${f1(s1.y)}"/><path d="M${f1(s1.x-dy*14-dx*16)} ${f1(s1.y+dx*14-dy*16)} L${f1(s1.x)} ${f1(s1.y)} L${f1(s1.x+dy*14-dx*16)} ${f1(s1.y-dx*14-dy*16)}"/>`;
g.setAttribute('opacity',f1(.35+.6*Math.sin(Math.PI*((ph*2)%1))));}
function pose(id,at){const e=EX[id],ph=(at%e.period)/e.period,tri=ph<.5?ph*2:2-ph*2,r=X[id](e.type==='hold'?ph:tri,ph);
drawBody(r.S);return {r,ph,tri};}
function frame(){if(!PL)return;const b=PL.b,s=b.steps[PL.i],e=EX[s.ex],intro=s.k!=='work',app=$('app');
app.classList.toggle('intro',intro);
const works=b.steps.filter(x=>x.k==='work'),wi=b.steps.slice(0,PL.i+(intro?1:0)).filter(x=>x.k==='work').length-(intro?0:1);
const segs=$('segs').children;for(let i=0;i<segs.length;i++)segs[i].firstChild.style.transform='scaleX('+(i<wi?1:i===wi&&!intro?Math.min(1,MODE==='timer'?PL.t/s.dur:1):0)+')';
$('num').textContent=s.ph?s.ph.toUpperCase():'EXERCICE '+(b.m.indexOf(s.ex)+1)+' / '+b.m.length;
$('name').textContent=e.name;$('kit').textContent=e.kit;
if(intro){
if(lastStep!==PL.i){lastStep=PL.i;
const prevWork=b.steps.slice(0,PL.i).reverse().find(x=>x.k==='work'),same=prevWork&&EX[prevWork.ex].acc===e.acc;
$('pk').textContent=s.k==='prep'?'Prépare ton matériel':same?'Exercice suivant · même matériel':'Exercice suivant · reprends';
$('pname').textContent=s.k==='prep'?e.acc:e.name;
$('picon').innerHTML=e.icon.startsWith('band')?bandIcon(e.icon.split(':')[1]):ICON[e.icon];
const list=s.k==='prep'?e.steps:[e.steps[3]];$('psteps').className=s.k==='prep'?'':'one';
$('psteps').innerHTML=list.map(x=>'<li>'+x+'</li>').join('');
$('easy').innerHTML=s.k==='prep'?'<b>Plus facile :</b> '+e.easy:'';
$('go').textContent=s.k==='prep'?'Je suis prête →':'C\'est parti →';}
const lis=$('psteps').children,k=Math.min(lis.length,Math.floor(PL.t/1.5)+1);for(let i=0;i<lis.length;i++)lis[i].classList.toggle('on',i<k);
const dur=s.k==='prep'?PREP:NEXT;
if(MODE==='timer'){$('cd').textContent=Math.max(1,Math.ceil(dur-PL.t));$('cdl').textContent='Ça commence';$('cd').style.display='';}
else{$('cd').style.display='none';$('cdl').textContent='Prends ton temps';}
const {r}=pose(s.ex,0);$('arw').innerHTML='';
$('hl').setAttribute('cx',f1(r.at.x));$('hl').setAttribute('cy',f1(r.at.y));$('hl').setAttribute('opacity',f1(.55+.45*Math.sin(PL.real*4)));
return;}
if(lastStep!==PL.i){lastStep=PL.i;}
const {r,ph,tri}=pose(s.ex,PL.at);drawArrow(r.arrow?Object.assign({},r.arrow,{ph}):null,tri,ph);
$('hl').setAttribute('cx',f1(r.hl.x));$('hl').setAttribute('cy',f1(r.hl.y));$('hl').setAttribute('opacity',f1(.55+.45*tri));
const ci=e.cueEvery?Math.floor(PL.t/e.cueEvery)%2:(ph<.5?0:1);$('cue').textContent=e.cues[ci];
$('round').textContent=s.rounds?'Tour '+s.round+' sur '+s.rounds:'';
if(MODE==='timer'){
if(e.type==='hold'){$('reps').textContent=Math.floor(PL.t);$('repn').textContent='s';}
else{const n=Math.max(1,Math.floor(s.dur/e.period));$('reps').textContent=Math.min(n,Math.floor(PL.t/e.period)+1);$('repn').textContent='/ '+n;}
$('time').textContent=mmss(Math.ceil(s.dur-PL.t));$('tlbl').textContent='Restant';
}else{
$('reps').textContent=e.reps;$('repn').textContent=e.type==='hold'?'s':e.type==='beats'?'batt.':'répét.';
$('time').textContent=mmss(PL.t);$('tlbl').textContent='À ton rythme';}
}
function tick(now){const dt=lastNow===null?0:Math.min(.1,(now-lastNow)/1000);lastNow=now;
if(PL&&!PL.paused){PL.t+=dt;PL.at+=dt;PL.real+=dt;const s=PL.b.steps[PL.i];
const dur=s.k==='work'?s.dur:s.k==='prep'?PREP:NEXT;if(MODE==='timer'&&PL.t>=dur)advance();}
frame();if(!window.__frame)requestAnimationFrame(tick);}
renderHome();mountMusic();setTab('home');
if(!window.__frame)requestAnimationFrame(tick);
AV=store.get('avatar',null);
function standPose(){const r=X.fente(0);kit0();return r.S;}
function drawMini(){const S=standPose();drawBody(S,$('meMini').querySelector('g'));const p=$('avPrev');if(p)drawBody(S,p.querySelector('g'));}
function openAvatar(first){const a=AV||{skin:2,hair:1,style:'queue',shape:'moyenne'};AV=a;
const sw=(arr,key,fn)=>arr.map((v,i)=>`<button data-av="${key}" data-v="${i}" class="${a[key]===i?'on':''}" style="background:${fn(v)}" aria-label="${key} ${i+1}"></button>`).join('');
const ch=(arr,key)=>arr.map(v=>`<button data-av="${key}" data-v="${v[0]}" class="${a[key]===v[0]?'on':''}">${v[1]}</button>`).join('');
$('sheet').innerHTML=`<div class="grab"></div>
<div class="av-top"><svg class="av-prev" id="avPrev" viewBox="380 -470 200 480"><g></g></svg>
<div><span class="k">${first?'Bienvenue':'Ma silhouette'}</span><h2 class="bc" style="font-size:40px;margin:8px 0 0">Elle te <em>ressemble</em></h2>
<p>Choisis ta silhouette : c'est elle qui fera chaque exercice avec toi.</p></div></div>
<div class="av-row"><b>Ta peau</b><div class="sw">${sw(SKINS,'skin',v=>v)}</div></div>
<div class="av-row"><b>Tes cheveux</b><div class="ch">${ch(STYLES,'style')}</div></div>
<div class="av-row" id="avHairCol"><b>Leur couleur</b><div class="sw">${sw(HAIRS,'hair',v=>v[0])}</div></div>
<div class="av-row"><b>Ta morphologie</b><div class="ch">${ch(SHAPES,'shape')}</div></div>
<button class="btn" id="avOk">C'est moi →</button>
<p class="safe" style="text-align:center">Tu pourras la changer quand tu veux.</p>`;
$('avHairCol').style.display=a.style==='foulard'?'none':'';
$('sheet').classList.add('on');$('veil').classList.add('on');drawMini();}
$('sheet').addEventListener('click',e=>{const b=e.target.closest('[data-av]');if(b){const k=b.dataset.av;AV[k]=(k==='skin'||k==='hair')?+b.dataset.v:b.dataset.v;
b.parentNode.querySelectorAll('button').forEach(x=>x.classList.toggle('on',x===b));
if(k==='style')$('avHairCol').style.display=AV.style==='foulard'?'none':'';
store.set('avatar',AV);drawMini();}
if(e.target.closest('#avOk')){store.set('avatar',AV);closeSheet();drawMini();}});
$('meBtn').onclick=()=>openAvatar(false);
drawMini();if(!store.get('avatar',null))setTimeout(()=>openAvatar(true),400);
window.__dr=r=>drawBody(r.S);window.__api={openAvatar,setAV:v=>{AV=v;drawMini();},X,EX,buildDay,startDay,setMode,setTab,openSheet,closeSheet,toEmbed,pose,frame,get PL(){return PL;},set:(i,t)=>{PL.i=i;PL.t=t;PL.at=t;lastStep=-1;frame();}};
