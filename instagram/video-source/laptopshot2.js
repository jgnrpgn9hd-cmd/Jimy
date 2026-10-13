const { chromium } = require('playwright');const fs=require('fs');
(async()=>{const mode=process.argv[2];
const b=await chromium.launch();
const p=await b.newPage({viewport:{width:1080,height:1920}});
await p.goto('file://'+__dirname+'/laptop2.html');await p.evaluate(()=>document.fonts.ready);await p.waitForTimeout(800);
const D=await p.evaluate(()=>DURATION);const dir='rf_laptop2';fs.mkdirSync(dir,{recursive:true});
if(mode==='prev'){for(const t of [1,4,7,9.8]){await p.evaluate(t=>render(t),t);await p.screenshot({path:`${dir}/p${t}.jpg`,type:'jpeg',quality:75});}}
else{const N=Math.round(D*30);for(let i=0;i<N;i++){await p.evaluate(t=>render(t),i/30);await p.screenshot({path:`${dir}/f${String(i).padStart(4,'0')}.jpg`,type:'jpeg',quality:92});}console.log(N);}
await b.close()})();
