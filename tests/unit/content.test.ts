import fs from 'node:fs';
import path from 'node:path';
import { describe, expect, it } from 'vitest';
import { SERVICES } from '../../src/content/services';
import { ARTICLES } from '../../src/content/articles';
import { TESTIMONIALS } from '../../src/content/testimonials';
import { TEAM_MEMBERS } from '../../src/content/team';
import { BRANCHES } from '../../src/content/branches';
import { PERSONAL_PLANS, BUSINESS_PLANS, SERVICE_FEE_ROWS } from '../../src/content/pricing';
import { HOME_V1_DATA, PARTNER_LOGOS } from '../../src/content/home';

function publicExists(relPath: string) {
  return fs.existsSync(path.join(process.cwd(), 'public', relPath.replace(/^\//, '')));
}

describe('Vaxmor Content Integrity', () => {
  it('has 6 ordered services with existing local images', () => {
    expect(SERVICES).toHaveLength(6);
    expect(SERVICES.map((s) => s.slug)).toEqual([
      'wealth-management',
      'investment-portfolios',
      'private-banking',
      'retirement-planning',
      'business-banking',
      'lending-and-mortgages',
    ]);
    for (const s of SERVICES) {
      expect(publicExists(s.mainImage)).toBe(true);
      expect(publicExists(s.secondaryImage)).toBe(true);
    }
  });

  it('has 6 articles with non-empty bodies and covers', () => {
    expect(ARTICLES).toHaveLength(6);
    for (const a of ARTICLES) {
      expect(a.bodyBlocks.length).toBeGreaterThan(5);
      expect(publicExists(a.coverImage)).toBe(true);
    }
  });

  it('has 8 testimonials and 7 team members with existing portraits', () => {
    expect(TESTIMONIALS).toHaveLength(8);
    for (const t of TESTIMONIALS) {
      expect(t.quote.length).toBeGreaterThan(20);
      expect(publicExists(t.photo)).toBe(true);
    }
    expect(TEAM_MEMBERS).toHaveLength(7);
    for (const m of TEAM_MEMBERS) {
      expect(publicExists(m.photo)).toBe(true);
    }
  });

  it('has 4 branches and 6 partner logos with existing assets', () => {
    expect(BRANCHES).toHaveLength(4);
    for (const b of BRANCHES) {
      expect(publicExists(b.image)).toBe(true);
    }
    expect(PARTNER_LOGOS).toHaveLength(6);
    for (const l of PARTNER_LOGOS) {
      expect(publicExists(l.src)).toBe(true);
    }
  });

  it('preserves verified pricing figures and CTA routing', () => {
    expect(PERSONAL_PLANS.map((p) => p.price)).toEqual(['$0', '0.45%', '0.80%']);
    expect(PERSONAL_PLANS.map((p) => p.ctaHref)).toEqual([
      '/contact-v1',
      '/contact-v2',
      '/contact-v3',
    ]);
    expect(BUSINESS_PLANS.map((p) => p.price)).toEqual(['$0', '$29', '$79']);
    expect(BUSINESS_PLANS.map((p) => p.ctaHref)).toEqual([
      '/contact-v1',
      '/contact-v2',
      '/contact-v3',
    ]);
    expect(SERVICE_FEE_ROWS).toHaveLength(6);
    expect(HOME_V1_DATA.hero.primaryCta.href).toBe('/pricing');
    expect(HOME_V1_DATA.hero.secondaryCta.href).toBe('/services-v1');
  });
});
