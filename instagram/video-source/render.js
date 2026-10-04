const { chromium } = require('playwright-core');
const fs = require('fs');
(async () => {
  const mode = process.argv[2] || 'preview';
  const b = await chromium.launch({ executablePath: '/opt/pw-browsers/chromium-1194/chrome-linux/chrome', args: ['--no-sandbox'] });
  const p = await b.newPage({ viewport: { width: 1080, height: 1920 } });
  await p.goto('file://' + __dirname + '/' + (process.env.FILM || 'film.html'));
  await p.evaluate(() => document.fonts.ready);
  await p.waitForTimeout(800);
  if (mode === 'preview') {
    fs.mkdirSync('prev', { recursive: true });
    const ts = [0.6, 1.1, 4.7, 6.0, 12.9];
    for (const t of ts) { await p.evaluate(t => render(t), t); await p.screenshot({ path: `prev/t${t.toFixed(1)}.jpg`, type: 'jpeg', quality: 70 }); }
  } else {
    fs.mkdirSync('frames', { recursive: true });
    const fps = +(process.env.FPS||30), D = await p.evaluate(() => DURATION), N = Math.round(D * fps);
    for (let i = 0; i < N; i++) { await p.evaluate(t => render(t), i / fps); await p.screenshot({ path: `frames/f${String(i).padStart(4, '0')}.jpg`, type: 'jpeg', quality: 92 }); }
    console.log('frames', N);
  }
  await b.close();
})();
