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
