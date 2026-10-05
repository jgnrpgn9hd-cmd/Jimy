const { chromium } = require('playwright-core');
(async()=>{const b=await chromium.launch({executablePath:'/opt/pw-browsers/chromium-1194/chrome-linux/chrome',args:['--no-sandbox']});
for(const [f,n,out] of [['carousel',6,'car/pano2x.png'],['carA',6,'carA/pano2x.png'],['carB',7,'carB/pano2x.png']]){
 const p=await b.newPage({viewport:{width:1080*n,height:1350},deviceScaleFactor:2});await p.goto('file://'+__dirname+'/'+f+'.html');await p.evaluate(()=>document.fonts.ready);await p.waitForTimeout(600);
 await p.screenshot({path:out});await p.close();}
await b.close()})();
