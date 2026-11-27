import fs from 'node:fs';
import path from 'node:path';
import { chromium } from 'playwright';

const BASE = 'https://vaxmor.webflow.io';
const CHROME_PATH = 'C:\\Users\\Girish Lade\\AppData\\Local\\ms-playwright\\chromium-1255\\chrome-win64\\chrome.exe';
const OUT_SS_DESKTOP = 'research/reference/screenshots/desktop';
const OUT_SS_MOBILE = 'research/reference/screenshots/mobile';
const OUT_SS_TABLET = 'research/reference/screenshots/tablet';
const OUT_SS_STATES = 'research/reference/screenshots/states';
const OUT_GEOM = 'research/geometry';

for (const d of [OUT_SS_DESKTOP, OUT_SS_MOBILE, OUT_SS_TABLET, OUT_SS_STATES, OUT_GEOM]) {
  fs.mkdirSync(d, { recursive: true });
}

const ROUTES = [
  '/',
  '/home-v2',
  '/home-v3',
  '/about-us',
  '/services-v1',
  '/services-v2',
  '/services-v3',
  '/pricing',
  '/blog',
  '/contact-v1',
  '/contact-v2',
  '/contact-v3',
  '/services/private-banking',
  '/services/wealth-management',
  '/services/investment-portfolios',
  '/services/retirement-planning',
  '/services/business-banking',
  '/services/lending-and-mortgages',
  '/blog/how-much-cash-should-you-really-keep',
  '/blog/what-interest-rate-changes-mean-for-you-in-2026',
  '/style-guide',
  '/instructions',
  '/licenses',
  '/changelog',
  '/401',
  '/404',
  '/testimonial/marcus-b',
];

function slugName(route) {
  return route === '/' ? 'home' : route.replace(/^\//, '').replace(/\//g, '__');
}

async function waitForPageReady(page) {
  await page.evaluate(async () => {
    await document.fonts.ready;
    const imgs = Array.from(document.querySelectorAll('img'));
    await Promise.all(
      imgs.map((img) => {
        if (img.loading === 'lazy') img.loading = 'eager';
        if (img.complete) return Promise.resolve();
        return new Promise((res) => {
          img.addEventListener('load', res, { once: true });
          img.addEventListener('error', res, { once: true });
          setTimeout(res, 4000);
        });
      })
    );
  });
  await page.waitForTimeout(500);
}

async function scrollEntirePage(page) {
  const totalHeight = await page.evaluate(() => document.body.scrollHeight);
  for (let y = 0; y <= totalHeight; y += 600) {
    await page.evaluate((pos) => window.scrollTo(0, pos), y);
    await page.waitForTimeout(120);
  }
  await page.evaluate(() => window.scrollTo(0, 0));
  await page.waitForTimeout(500);
}

async function extractDomTelemetry(page) {
  return await page.evaluate(() => {
    const pickStyle = (el) => {
      if (!el) return null;
      const cs = getComputedStyle(el);
      const r = el.getBoundingClientRect();
      return {
        tag: el.tagName,
        className: el.className,
        text: (el.textContent || '').trim().slice(0, 100),
        rect: { x: Math.round(r.x), y: Math.round(r.y), width: Math.round(r.width), height: Math.round(r.height) },
        visible: cs.display !== 'none' && cs.visibility !== 'hidden' && r.width > 0 && r.height > 0,
        styles: {
          display: cs.display,
          position: cs.position,
          fontFamily: cs.fontFamily,
          fontSize: cs.fontSize,
          fontWeight: cs.fontWeight,
          lineHeight: cs.lineHeight,
          letterSpacing: cs.letterSpacing,
          color: cs.color,
          backgroundColor: cs.backgroundColor,
          borderRadius: cs.borderRadius,
          border: cs.border,
          paddingTop: cs.paddingTop,
          paddingBottom: cs.paddingBottom,
          paddingLeft: cs.paddingLeft,
          paddingRight: cs.paddingRight,
          gap: cs.gap,
          maxWidth: cs.maxWidth,
          boxShadow: cs.boxShadow,
        },
      };
    };

    const selectors = [
      '.topbar', '.utility-bar', '.nav-wrap', '.navbar', 'header', 'nav',
      '.nav-logo-text', '.nav-link', '.nav-phone',
      'h1', 'h2', 'h3', 'h4', 'p',
      '.eyebrow', '.section-eyebrow', '.container-large', '.container-medium', '.container-small',
      '.padding-global', '.padding-section', '.button', '.button.is-secondary', '.button.is-small',
      'footer', '.footer'
    ];
    const samples = {};
    for (const sel of selectors) {
      const els = Array.from(document.querySelectorAll(sel));
      if (els.length > 0) {
        samples[sel] = els.slice(0, 5).map(pickStyle);
      }
    }

    const fonts = Array.from(document.fonts).map((f) => ({
      family: f.family,
      weight: f.weight,
      style: f.style,
      status: f.status,
    }));

    const sections = Array.from(document.querySelectorAll('section, [class*="section"]')).map((s, idx) => {
      const cs = getComputedStyle(s);
      const r = s.getBoundingClientRect();
      return {
        index: idx,
        className: s.className,
        visible: cs.display !== 'none' && r.height > 0,
        height: Math.round(r.height),
        backgroundColor: cs.backgroundColor,
        paddingTop: cs.paddingTop,
        paddingBottom: cs.paddingBottom,
        heading: (s.querySelector('h1,h2,h3')?.textContent || '').trim().slice(0, 80),
      };
    });

    const anims = document.getAnimations().map((a) => ({
      id: a.id,
      timing: a.effect?.getTiming?.() || null,
    }));

    return {
      title: document.title,
      scrollHeight: document.body.scrollHeight,
      scrollWidth: document.documentElement.scrollWidth,
      innerWidth: window.innerWidth,
      fonts,
      sections,
      samples,
      activeAnimationsCount: anims.length,
    };
  });
}

async function main() {
  const browser = await chromium.launch({
    executablePath: fs.existsSync(CHROME_PATH) ? CHROME_PATH : undefined,
    headless: true,
  });

  const fontRequests = new Set();
  const context = await browser.newContext({
    viewport: { width: 1440, height: 900 },
    deviceScaleFactor: 1,
  });

  const page = await context.newPage();
  page.on('response', (res) => {
    const url = res.url();
    if (url.includes('fonts.gstatic.com') || url.includes('.woff2') || url.includes('fonts.googleapis.com')) {
      fontRequests.add(`${res.status()} ${url}`);
    }
  });

  const summary = {};

  for (const route of ROUTES) {
    const name = slugName(route);
    console.log(`Capturing desktop ${route}...`);
    try {
      await page.goto(BASE + route, { waitUntil: 'domcontentloaded', timeout: 30000 });
      await waitForPageReady(page);
      await scrollEntirePage(page);
      await waitForPageReady(page);

      const telemetry = await extractDomTelemetry(page);
      summary[route] = telemetry;

      // Capture fullPage only for core pages to stay fast, and viewport above-fold for all
      await page.screenshot({ path: path.join(OUT_SS_DESKTOP, `${name}.png`), fullPage: true });
      fs.writeFileSync(path.join(OUT_GEOM, `${name}.json`), JSON.stringify(telemetry, null, 2));
    } catch (err) {
      console.error(`Failed ${route}:`, err.message);
      summary[route] = { error: err.message };
    }
  }

  // Interactive states on Homepage (Mega menu, Pages dropdown, Business tabs, FAQ)
  console.log('Capturing interactive states...');
  await page.goto(BASE + '/', { waitUntil: 'domcontentloaded', timeout: 30000 });
  await waitForPageReady(page);

  // Capture Services mega menu
  const servicesDropdown = page.locator('.w-dropdown-toggle', { hasText: 'Services' }).first();
  if (await servicesDropdown.count()) {
    await servicesDropdown.click();
    await page.waitForTimeout(400);
    await page.screenshot({ path: path.join(OUT_SS_STATES, 'mega-menu-individuals.png') });
    const tabs = page.locator('.w-tab-link');
    const tabCount = await tabs.count();
    for (let i = 0; i < Math.min(tabCount, 3); i++) {
      await tabs.nth(i).click();
      await page.waitForTimeout(250);
      await page.screenshot({ path: path.join(OUT_SS_STATES, `mega-menu-tab-${i}.png`) });
    }
    await page.keyboard.press('Escape');
    await page.mouse.click(10, 10);
    await page.waitForTimeout(250);
  }

  // Capture Pages dropdown
  const pagesDropdown = page.locator('.w-dropdown-toggle', { hasText: 'Pages' }).first();
  if (await pagesDropdown.count()) {
    await pagesDropdown.click();
    await page.waitForTimeout(400);
    await page.screenshot({ path: path.join(OUT_SS_STATES, 'pages-dropdown.png') });
    await page.mouse.click(10, 10);
  }

  // Mobile + Tablet captures on key routes
  const mobileCtx = await browser.newContext({ viewport: { width: 390, height: 844 }, deviceScaleFactor: 1 });
  const mPage = await mobileCtx.newPage();
  for (const r of ['/', '/about-us', '/services-v1', '/pricing', '/blog', '/contact-v1']) {
    await mPage.goto(BASE + r, { waitUntil: 'domcontentloaded', timeout: 30000 });
    await waitForPageReady(mPage);
    await mPage.screenshot({ path: path.join(OUT_SS_MOBILE, `${slugName(r)}.png`), fullPage: false });
  }
  const navBtn = mPage.locator('.w-nav-button').first();
  if (await navBtn.count()) {
    await mPage.goto(BASE + '/', { waitUntil: 'domcontentloaded' });
    await waitForPageReady(mPage);
    await navBtn.click();
    await mPage.waitForTimeout(400);
    await mPage.screenshot({ path: path.join(OUT_SS_STATES, 'mobile-menu-open.png') });
  }
  await mobileCtx.close();

  const tabletCtx = await browser.newContext({ viewport: { width: 820, height: 1180 }, deviceScaleFactor: 1 });
  const tPage = await tabletCtx.newPage();
  for (const r of ['/', '/pricing']) {
    await tPage.goto(BASE + r, { waitUntil: 'domcontentloaded', timeout: 30000 });
    await waitForPageReady(tPage);
    await tPage.screenshot({ path: path.join(OUT_SS_TABLET, `${slugName(r)}.png`), fullPage: false });
  }
  await tabletCtx.close();

  fs.writeFileSync('research/manifests/font-requests.json', JSON.stringify(Array.from(fontRequests), null, 2));
  fs.writeFileSync('research/manifests/live-telemetry-summary.json', JSON.stringify(summary, null, 2));

  await browser.close();
  console.log('Done! Font requests:', fontRequests.size);
}

main().catch((e) => {
  console.error(e);
  process.exit(1);
});
