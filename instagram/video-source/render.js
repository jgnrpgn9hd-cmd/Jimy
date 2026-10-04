const { chromium } = require('playwright-core');
const fs = require('fs');
(async () => {
  const mode = process.argv[2] || 'preview';
  const b = await chromium.launch({ executablePath: '/opt/pw-browsers/chromium-1194/chrome-linux/chrome', args: ['--no-sandbox'] });
  const p = await b.newPage({ viewport: { width: 1080, height: 1920 } });
  await p.goto('file://' + __dirname + '/film.html');
  await p.evaluate(() => document.fonts.ready);
  await p.waitForTimeout(800);
  if (mode === 'preview') {
    fs.mkdirSync('prev', { recursive: true });
    const ts = [1.0, 2.0, 3.4, 5.6, 7.3, 8.2, 9.6, 11.5, 13.9, 15.4, 16.5, 17.8, 19.2];
    for (const t of ts) { await p.evaluate(t => render(t), t); await p.screenshot({ path: `prev/t${t.toFixed(1)}.jpg`, type: 'jpeg', quality: 70 }); }
  } else {
    fs.mkdirSync('frames', { recursive: true });
    const fps = 30, D = await p.evaluate(() => DURATION), N = Math.round(D * fps);
    for (let i = 0; i < N; i++) { await p.evaluate(t => render(t), i / fps); await p.screenshot({ path: `frames/f${String(i).padStart(4, '0')}.jpg`, type: 'jpeg', quality: 92 }); }
    console.log('frames', N);
  }
  await b.close();
})();
