// Rendu du modèle « photo + bandeau » : images fixes et reels.
// node modeleshot.js prev|full [nom...]
const { chromium } = require('playwright');const fs=require('fs');
const OUT=__dirname+'/../publications-17-19oct';
const P=(img,pos,l1,l2,dur,z0,z1)=>({img,pos,l1,l2,dur,z0,z1});
const photo=(img,pos,l1,l2)=>({w:1080,h:1350,band:350,size1:88,size2:96,shots:[P(img,pos,l1,l2,1,1,1)]});
const story=(img,pos,l1,l2)=>({w:1080,h:1920,band:520,size1:96,size2:112,top:80,right:64,logo:120,logoBottom:56,url:'jimenez-shop.com',urlBottom:70,shots:[P(img,pos,l1,l2,1,1,1)]});
const reel=(shots)=>({w:1080,h:1920,band:520,size1:96,size2:112,top:80,right:64,logo:120,logoBottom:56,url:'jimenez-shop.com',urlBottom:70,urlAt:shots.slice(0,-1).reduce((a,s)=>a+s.dur,0)+0.8,shots});
const J={
 '1_samedi_photo':photo('hq/new_eco.jpg','50% 58%','Écologique,','naturellement'),
 '2_dimanche_photo':photo('hq/new_box.jpg','50% 52%','Une idée','à offrir'),
 '3_lundi_photo':photo('hq/new_tins.jpg','85% 22%','Arbequina,','format généreux'),
 '1_samedi_story':story('hq/bottle.jpg','50% 45%','Le nouveau site','est en ligne'),
 '2_dimanche_story':story('hq/ceramic.jpg','50% 50%','Le goût','de l\'Andalousie'),
 '3_lundi_story':story('hq/trio.jpg','50% 40%','Livré partout','en Europe'),
 '1_samedi_reel':reel([P('hq/mist.jpg','50% 60%','Récoltée tôt','en Andalousie',3.4,1.0,1.08),P('hq/bottle.jpg','50% 45%','Pressée','à froid',3.4,1.0,1.07),P('hq/new_eco.jpg','50% 58%','Expédiée','de Paris',4.2,1.0,1.06)]),
 '2_dimanche_reel':reel([P('hq/aerial.jpg','50% 50%','Dimanche,','on prend le temps',3.4,1.0,1.08),P('hq/ceramic.jpg','50% 50%','Douce','et fruitée',3.4,1.0,1.07),P('hq/new_box.jpg','50% 52%','Une idée','à offrir',4.2,1.0,1.06)]),
 '3_lundi_reel':reel([P('hq/tin_olives.jpg','50% 50%','Ce soir,','on cuisine',3.4,1.0,1.08),P('hq/trio.jpg','50% 40%','Trois olives,','trois caractères',3.4,1.0,1.07),P('hq/new_tins.jpg','95% 30%','Livré partout','en Europe',4.2,1.0,1.06)]),
};
(async()=>{const mode=process.argv[2]||'prev';const names=process.argv.slice(3).length?process.argv.slice(3):Object.keys(J);
fs.mkdirSync(OUT,{recursive:true});const b=await chromium.launch();
for(const k of names){const cfg=J[k];const p=await b.newPage({viewport:{width:cfg.w,height:cfg.h}});
 await p.goto('file://'+__dirname+'/modele.html');await p.evaluate(()=>document.fonts.ready);
 const D=await p.evaluate(c=>{setup(c);return C.D},cfg);
 await p.evaluate(()=>Promise.all([...document.images].map(i=>i.complete?1:new Promise(r=>i.onload=r))));await p.waitForTimeout(300);
 if(!k.includes('reel')){await p.evaluate(()=>render(99));await p.screenshot({path:`${OUT}/${k}.jpg`,type:'jpeg',quality:94});}
 else if(mode==='prev'){for(const t of [0.2,1.4,3.6,5.0,8.2,D-0.1]){await p.evaluate(t=>render(t),t);await p.screenshot({path:`${OUT}/_prev_${k}_${t.toFixed(1)}.jpg`,type:'jpeg',quality:70});}}
 else{const dir=`${__dirname}/rf_${k}`;fs.mkdirSync(dir,{recursive:true});const N=Math.round(D*30);
  for(let i=0;i<N;i++){await p.evaluate(t=>render(t),i/30);await p.screenshot({path:`${dir}/f${String(i).padStart(4,'0')}.jpg`,type:'jpeg',quality:92});}}
 await p.close();}
await b.close()})();
