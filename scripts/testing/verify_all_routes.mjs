import fs from 'node:fs';
import path from 'node:path';
import { chromium } from 'playwright';
import AxeBuilder from '@axe-core/playwright';
import pixelmatch from 'pixelmatch';
import { PNG } from 'pngjs';
import sharp from 'sharp';

const LOCAL_BASE = process.env.LOCAL_URL || 'http://127.0.0.1:3000';
const CHROME_PATH =
  'C:\\Users\\Girish Lade\\AppData\\Local\\ms-playwright\\chromium-1255\\chrome-win64\\chrome.exe';

const ALL_ROUTES = [
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
  '/services/wealth-management',
  '/services/investment-portfolios',
  '/services/private-banking',
  '/services/retirement-planning',
  '/services/business-banking',
  '/services/lending-and-mortgages',
  '/blog/how-much-cash-should-you-really-keep',
  '/blog/what-interest-rate-changes-mean-for-you-in-2026',
  '/blog/seven-questions-to-ask-before-choosing-a-financial-advisor',
  '/blog/diversification-explained-without-the-jargon',
  '/blog/planning-retirement-in-your-forties-five-steps',
  '/blog/cash-flow-habits-of-fast-growing-businesses',
  '/style-guide',
  '/instructions',
  '/licenses',
  '/changelog',
  '/401',
  '/404',
  '/testimonial/marcus-b',
  '/testimonial/patricia-h',
  '/testimonial/daniel-k',
  '/testimonial/james-p',
  '/testimonial/maria-s',
  '/testimonial/thomas-w',
  '/testimonial/karen-d',
  '/testimonial/robert-m',
];

const COMPARE_ROUTES = [
  { route: '/', refFile: 'home.png', dir: 'home' },
  { route: '/about-us', refFile: 'about-us.png', dir: 'about' },
  { route: '/services-v1', refFile: 'services-v1.png', dir: 'services/v1' },
  { route: '/pricing', refFile: 'pricing.png', dir: 'pricing' },
  { route: '/blog', refFile: 'blog.png', dir: 'blog/listing' },
  { route: '/contact-v1', refFile: 'contact-v1.png', dir: 'contact/v1' },
];

async function main() {
  const browser = await chromium.launch({
    executablePath: fs.existsSync(CHROME_PATH) ? CHROME_PATH : undefined,
    headless: true,
  });

  const ctx = await browser.newContext({ viewport: { width: 1440, height: 900 } });
  const page = await ctx.newPage();

  const consoleErrors = [];
  const failedAssets = [];
  page.on('console', (msg) => {
    if (msg.type() === 'error' && !msg.text().includes('status of 404')) {
      consoleErrors.push(msg.text());
    }
  });
  page.on('response', (res) => {
    if (
      res.status() >= 400 &&
      !res.url().includes('/nonexistent-test') &&
      !res.url().endsWith('/404')
    ) {
      failedAssets.push(`${res.status()} ${res.url()}`);
    }
  });

  const routeResults = [];
  for (const r of ALL_ROUTES) {
    const resp = await page.goto(LOCAL_BASE + r, { waitUntil: 'load', timeout: 20000 });
    await page.evaluate(() => document.fonts.ready);
    const metrics = await page.evaluate(() => {
      const brokenImgs = Array.from(document.querySelectorAll('img')).filter(
        (im) => !im.complete || im.naturalWidth === 0
      ).length;
      const overflow =
        document.documentElement.scrollWidth > window.innerWidth;
      const h1 = document.querySelector('h1')?.textContent?.trim() || '';
      return { brokenImgs, overflow, h1, scrollHeight: document.body.scrollHeight };
    });
    routeResults.push({
      route: r,
      status: resp?.status(),
      ...metrics,
    });
  }

  // Interactive E2E checks
  await page.goto(LOCAL_BASE + '/', { waitUntil: 'load' });
  await page.getByRole('button', { name: 'Services' }).click();
  await page.getByRole('tab', { name: 'Businesses', exact: true }).click();
  const megaVisible = await page.getByText('Business accounts').isVisible();
  await page.keyboard.press('Escape');

  // Business segment switcher
  await page.getByRole('tab', { name: /Startups/i }).click();
  const startupDescVisible = await page.getByText(/venture debt/i).isVisible();

  // FAQ accordion
  await page.getByRole('button', { name: /What does an account cost/i }).click();
  const faqVisible = await page.getByText(/Everyday accounts are free/i).isVisible();

  // Newsletter form validation + submission
  await page.fill('#newsletter-email', 'client@example.com');
  await page.getByRole('button', { name: 'Subscribe' }).click();
  await page.waitForTimeout(400);
  const newsletterFeedback = await page.getByText(/Demo mode:/i).isVisible();

  // Contact form submission
  await page.goto(LOCAL_BASE + '/contact-v1', { waitUntil: 'load' });
  await page.fill('#first-name', 'Alex');
  await page.fill('#last-name', 'Morgan');
  await page.fill('#email-address', 'alex@example.com');
  await page.fill('#contact-message', 'Requesting introductory advisory call.');
  await page.getByRole('button', { name: 'SEND MESSAGE' }).click();
  await page.waitForTimeout(400);
  const contactSuccess = await page.getByText(/Demo mode:/i).isVisible();

  // Video Lightbox on About Us
  await page.goto(LOCAL_BASE + '/about-us', { waitUntil: 'load' });
  await page.getByRole('button', { name: /Watch our studio story/i }).click();
  const dialogOpen = await page.getByRole('dialog').isVisible();
  await page.keyboard.press('Escape');

  // Accessibility audit (axe-core) on primary routes
  const axeReports = {};
  for (const r of ['/', '/about-us', '/services-v1', '/pricing', '/blog', '/contact-v1']) {
    await page.goto(LOCAL_BASE + r, { waitUntil: 'load' });
    const res = await new AxeBuilder({ page }).analyze();
    axeReports[r] = {
      violations: res.violations.map((v) => ({
        id: v.id,
        impact: v.impact,
        nodes: v.nodes.length,
        targets: v.nodes.map((n) => n.target.join(' ')),
      })),
    };
  }

  // Mobile overflow check (390x844)
  const mobileCtx = await browser.newContext({ viewport: { width: 390, height: 844 } });
  const mPage = await mobileCtx.newPage();
  const mobileOverflows = [];
  for (const r of ['/', '/about-us', '/services-v1', '/pricing', '/blog', '/contact-v1']) {
    await mPage.goto(LOCAL_BASE + r, { waitUntil: 'load' });
    const ov = await mPage.evaluate(() => document.documentElement.scrollWidth > window.innerWidth);
    if (ov) mobileOverflows.push(r);
  }
  await mobileCtx.close();

  // Visual comparison artifacts (above-the-fold 1440x900 crop comparison against live reference captures)
  const visualMetrics = [];
  for (const item of COMPARE_ROUTES) {
    const refPath = path.join('research/reference/screenshots/desktop', item.refFile);
    if (!fs.existsSync(refPath)) continue;
    const outDir = path.join('research/comparisons', item.dir, 'desktop-1440');
    fs.mkdirSync(outDir, { recursive: true });

    await page.goto(LOCAL_BASE + item.route, { waitUntil: 'load' });
    await page.evaluate(() => document.fonts.ready);
    await page.waitForTimeout(300);

    const implFold = path.join(outDir, 'implementation.png');
    await page.screenshot({ path: implFold, fullPage: false });

    const refFold = path.join(outDir, 'reference.png');
    await sharp(refPath)
      .extract({ left: 0, top: 0, width: 1440, height: 900 })
      .png()
      .toFile(refFold);

    const img1 = PNG.sync.read(fs.readFileSync(refFold));
    const img2 = PNG.sync.read(fs.readFileSync(implFold));
    const diff = new PNG({ width: 1440, height: 900 });
    const diffPixels = pixelmatch(img1.data, img2.data, diff.data, 1440, 900, {
      threshold: 0.15,
    });
    fs.writeFileSync(path.join(outDir, 'difference.png'), PNG.sync.write(diff));

    await sharp({
      create: { width: 2880, height: 900, channels: 4, background: { r: 245, g: 247, b: 250, alpha: 1 } },
    })
      .composite([
        { input: refFold, left: 0, top: 0 },
        { input: implFold, left: 1440, top: 0 },
      ])
      .png()
      .toFile(path.join(outDir, 'side-by-side.png'));

    const diffPct = Number(((diffPixels / (1440 * 900)) * 100).toFixed(2));
    const metric = {
      route: item.route,
      viewport: '1440x900',
      diffPixels,
      diffPct,
    };
    fs.writeFileSync(path.join(outDir, 'metrics.json'), JSON.stringify(metric, null, 2));
    visualMetrics.push(metric);
  }

  // Unknown route HTTP 404 check
  const notFoundResp = await page.goto(LOCAL_BASE + '/nonexistent-test', { waitUntil: 'load' });

  await browser.close();

  const report = {
    totalRoutesTested: routeResults.length,
    allValidStatus: routeResults.every((r) =>
      r.route === '/404' ? r.status === 200 || r.status === 404 : r.status === 200
    ),
    brokenImgsTotal: routeResults.reduce((acc, r) => acc + r.brokenImgs, 0),
    desktopOverflows: routeResults.filter((r) => r.overflow).map((r) => r.route),
    mobileOverflows,
    notFoundStatus: notFoundResp?.status(),
    interactions: {
      megaVisible,
      startupDescVisible,
      faqVisible,
      newsletterFeedback,
      contactSuccess,
      dialogOpen,
    },
    consoleErrorsCount: consoleErrors.length,
    consoleErrors,
    failedAssetsCount: failedAssets.length,
    failedAssets,
    axeReports,
    visualMetrics,
  };

  fs.mkdirSync('research/reports', { recursive: true });
  fs.writeFileSync('research/reports/verification-report.json', JSON.stringify(report, null, 2));
  console.log(JSON.stringify(report, null, 2));

  if (!report.allValidStatus || report.brokenImgsTotal > 0 || report.consoleErrorsCount > 0 || report.failedAssetsCount > 0) {
    process.exitCode = 1;
  }
}

main().catch((e) => {
  console.error(e);
  process.exit(1);
});
