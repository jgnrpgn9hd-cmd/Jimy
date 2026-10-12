const { chromium } = require('playwright');
(async()=>{const b=await chromium.launch();const p=await b.newPage({viewport:{width:1080,height:1920},deviceScaleFactor:1});
await p.goto('file://'+process.cwd()+'/offre.html');await p.waitForTimeout(1500);
await p.screenshot({path:'/home/user/Jimy/instagram/calendrier-v5/story_offre_livraison.png'});await b.close();})();
