const {chromium}=require('playwright');
const OUT=process.argv[2];
(async()=>{
 const b=await chromium.launch();
 const p=await b.newPage({deviceScaleFactor:3,viewport:{width:1400,height:900}});
 await p.goto('http://localhost:8766/#/page/faq');await p.waitForTimeout(500);
 await p.evaluate(()=>document.fonts.ready);
 // page d'atelier : on vide le body et on dessine les éléments
 await p.evaluate(()=>{
  const css=`body{margin:0;background:transparent} .el{display:inline-block;padding:0}
   .logo{font-family:"Bodoni Moda",serif;font-weight:400;letter-spacing:.32em;padding-left:.32em;line-height:1}
   .f{font-size:64px;line-height:1.15}`;
  document.body.innerHTML=`<style>${css}</style>
   <div class="el logo" id="logo-noir" style="font-size:120px;color:#151412;padding:20px 10px 20px 50px">VAURE</div>
   <div class="el logo" id="logo-ivoire" style="font-size:120px;color:#F8F5F0;padding:20px 10px 20px 50px">VAURE</div>
   <div class="el logo" id="logo-or" style="font-size:120px;color:#C9A35E;padding:20px 10px 20px 50px">VAURE</div>
   <div class="el" id="font-bodoni" style="font-family:'Bodoni Moda',serif;color:#151412;padding:10px"><div style="font-size:110px;line-height:1">Aa</div><div style="font-size:44px;margin-top:10px">Un éclat qui dure</div></div>
   <div class="el" id="font-manrope" style="font-family:Manrope,sans-serif;color:#151412;padding:10px"><div style="font-size:110px;line-height:1;font-weight:500">Aa</div><div style="font-size:40px;margin-top:10px">Livraison offerte à partir de 35 €</div></div>
   <div id="bij"></div>`;
  const items=[['collier','collier-fleur','#C9A35E'],['bracelet','bracelet-fleur','#C9A35E'],['puces','puces-fleur','#C9A35E'],['creoles','creoles','#C9A35E'],['anneau','anneau-nez','#C9A35E'],['earcuff','ear-cuff','#C9A35E'],['foulard','foulard','#EDE3D2'],['sac','mini-sac','#1D1B19'],['parure','parure','#C9A35E'],['coffret','box','#C9A35E']];
  document.getElementById('bij').innerHTML=items.map(([id,t,c])=>`<div id="img-${id}" style="width:400px;height:400px;display:inline-block">${ill(t,c)}</div>`).join('');
 });
 await p.waitForTimeout(800);
 for(const id of ['logo-noir','logo-ivoire','logo-or','font-bodoni','font-manrope'])
   await (await p.$('#'+id)).screenshot({path:`${OUT}/${id}.png`,omitBackground:true});
 for(const id of ['collier','bracelet','puces','creoles','anneau','earcuff','foulard','sac','parure','coffret'])
   await (await p.$('#img-'+id)).screenshot({path:`${OUT}/bijou-${id}.png`});
 await b.close();
})();
