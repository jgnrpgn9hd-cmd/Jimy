const { chromium } = require('playwright');const fs=require('fs');
(async()=>{const out=__dirname+'/../publications-17-19oct';fs.mkdirSync(out,{recursive:true});
const b=await chromium.launch();
for(const k of ['p_eco','p_box','p_tins','s_site','s_box','s_europe']){
 const p=await b.newPage({viewport:{width:1080,height:1920}});
 await p.goto('file://'+__dirname+'/posts_site.html');await p.evaluate(()=>document.fonts.ready);
 const [w,h]=await p.evaluate(k=>show(k),k);await p.setViewportSize({width:w,height:h});
 await p.evaluate(()=>Promise.all([...document.images].map(i=>i.complete?1:new Promise(r=>i.onload=r))));await p.waitForTimeout(300);
 await p.screenshot({path:`${out}/${k}.jpg`,type:'jpeg',quality:93});await p.close();}
await b.close()})();
