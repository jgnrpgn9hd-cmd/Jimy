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
