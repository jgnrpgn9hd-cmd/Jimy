const { chromium } = require('playwright-core');const fs=require('fs');
(async()=>{const [name,cfg,mode]=process.argv.slice(2);
const b=await chromium.launch({executablePath:'/opt/pw-browsers/chromium-1194/chrome-linux/chrome',args:['--no-sandbox']});
const p=await b.newPage({viewport:{width:1080,height:1920}});
await p.goto('file://'+__dirname+'/reel.html#'+encodeURIComponent(fs.readFileSync(cfg,'utf8')));await p.evaluate(()=>document.fonts.ready);await p.waitForTimeout(800);
const D=await p.evaluate(()=>DURATION); const dir='rf_'+name; fs.mkdirSync(dir,{recursive:true});
if(mode==='prev'){for(const t of [0.3,1.6,4.5,8,D-1]){await p.evaluate(t=>render(t),t);await p.screenshot({path:`${dir}/p${t.toFixed(1)}.jpg`,type:'jpeg',quality:70});}}
else{const N=Math.round(D*30);for(let i=0;i<N;i++){await p.evaluate(t=>render(t),i/30);await p.screenshot({path:`${dir}/f${String(i).padStart(4,'0')}.jpg`,type:'jpeg',quality:92});}console.log(name,N);}
await b.close()})();
