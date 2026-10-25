// Génère les visuels provisoires des produits et des collections (PNG) à partir des illustrations de la maquette.
// Usage : node generer-images.js   (Playwright requis)
const { chromium } = require("playwright");
const path = require("path");

const SITE = path.join(__dirname, "..", "site", "index.html");
const OUT = path.join(__dirname, "images");

(async () => {
  const browser = await chromium.launch();
  const page = await browser.newPage({ viewport: { width: 1200, height: 1200 } });
  await page.goto("file://" + SITE);
  const jobs = await page.evaluate(() => {
    const out = [];
    for (const [id, p] of Object.entries(P)) {
      const opts = p.coloris || (p.metaux || ["or"]);
      for (const o of opts) out.push({ file: `${id}--${o.toLowerCase().normalize("NFD").replace(/[̀-ͯ]/g, "")}.png`, svg: illP(id, o) });
    }
    const cats = [["bijoux", "creoles", "#C9A35E"], ["piercings", "ear-cuff", "#C9A35E"], ["foulards-et-cheveux", "foulard", "#EDE3D2"], ["sacs", "mini-sac", "#1D1B19"], ["parures", "parure", "#C9A35E"], ["coffret", "box", "#C9A35E"]];
    for (const [h, t, c] of cats) out.push({ file: `collection--${h}.png`, svg: ill(t, c, "#E6DDCF") });
    return out;
  });
  for (const j of jobs) {
    await page.setContent(`<html><body style="margin:0">${j.svg.replace("<svg ", '<svg width="1200" height="1200" ')}</body></html>`);
    await page.screenshot({ path: path.join(OUT, j.file), clip: { x: 0, y: 0, width: 1200, height: 1200 } });
  }
  console.log(jobs.length + " images");
  await browser.close();
})();
