import type { Metadata } from 'next';
import { SiteLayout } from '@/components/layout/SiteLayout';
import { SectionEyebrow } from '@/components/common/SectionEyebrow';
import styles from '@/styles/Sections.module.css';

export const metadata: Metadata = {
  title: 'Instructions',
  description:
    'Setup notes for Vaxmor, explaining how its components, variables, CMS collections and responsive modes fit together.',
};

const SECTIONS = [
  {
    id: 'start-here',
    num: '01',
    title: 'Start here',
    body: [
      'Duplicate before you edit: Work on a duplicate or feature branch so you can always compare edits with the original reference.',
      'Set your brand once: Open src/styles/tokens.css and src/config/site.ts. Buttons, sections, borders and overlays all read from these tokens.',
      'Things worth knowing first: Review component variants, the Services V3 five-slide offset rule, and responsive breakpoint modes before shipping.',
    ],
  },
  {
    id: 'editing-content',
    num: '02',
    title: 'Editing content',
    body: [
      'Structured content lives in src/content/ (services, articles, testimonials, team, branches, pricing, faqs, home, pages).',
      'Shared layout components consume typed props rather than hardcoding copy inside templates.',
    ],
  },
  {
    id: 'variant-map',
    num: '03',
    title: 'Variant map',
    body: [
      'Services V1 uses Services Split Section (Rows Preview variant).',
      'Services V2 uses Services Section (Base expandable variant).',
      'Services V3 uses Services Section (Third slider variant).',
    ],
  },
  {
    id: 'cms-collections',
    num: '04',
    title: 'CMS collections',
    body: [
      '01 Blogs: Title, slug, summary, body, main and secondary images, category, date and meta description.',
      '02 Services: Name, slug, number, summary, description, icon, main and secondary images with alt text and meta description.',
      '03 Testimonials: Client name, quote, position, photo, photo alt text and meta description.',
    ],
  },
  {
    id: 'adding-service',
    num: '05',
    title: 'Adding a new service',
    body: [
      'Services V1, Services V2 and the home pages list records dynamically. In reference comparison mode, the Services V3 slider caps visible slides at the first five records (omitting Lending and mortgages) to match the original template configuration; production mode enables all six.',
    ],
  },
  {
    id: 'variables',
    num: '06',
    title: 'Variables',
    body: [
      'Three primary token collections: Colors (#F5F7FA, #EBEFF5, #E6ECF7, #0B1526, #1E4FD6), Sizes (spacing scale and section padding), and Typography (Inter and Geist Mono across desktop, tablet and mobile breakpoints).',
    ],
  },
  {
    id: 'fonts-assets',
    num: '07',
    title: 'Fonts and assets',
    body: [
      '01 Fonts: Inter for all UI/editorial text and Geist Mono for counters, served locally via WOFF2.',
      '02 Images: Lummi-generated template imagery stored under public/assets/.',
      '03 Icons: Iconoir SVG embeds following currentColor. Client logos are Logoipsum placeholders.',
    ],
  },
  {
    id: 'before-launch',
    num: '08',
    title: 'Before you launch',
    body: [
      'Replace all demo images, copy, pricing figures and disclosures with approved production material; set NEXT_PUBLIC_APP_MODE=production; connect authorized CONTACT_WEBHOOK_URL and NEWSLETTER_WEBHOOK_URL adapters; and verify 404 and metadata.',
    ],
  },
];

export default function InstructionsPage() {
  return (
    <SiteLayout showAdvisorStrip={true}>
      <section className={styles.sectionBanner}>
        <div className="padding-global">
          <div className="container-large">
            <div className={styles.bannerEditorialMeta}>
              <SectionEyebrow number="(01)" label="Template" />
            </div>
            <h1 className="heading-style-h1">Instructions</h1>
            <p className="text-size-regular text-color-grey" style={{ maxWidth: '40rem', marginTop: '1rem' }}>
              How Vaxmor is structured: components, variables, CMS collections and responsive modes, explained step by step.
            </p>
          </div>
        </div>
      </section>

      <section className={styles.docsSection}>
        <div className="padding-global">
          <div className="container-large">
            <div className={styles.docsLayout}>
              <nav className={styles.docsSidebar} aria-label="Instructions sections">
                {SECTIONS.map((s) => (
                  <a key={s.id} href={`#${s.id}`} className={styles.docsNavLink}>
                    {s.num} {s.title}
                  </a>
                ))}
              </nav>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '3.5rem' }}>
                {SECTIONS.map((s) => (
                  <section key={s.id} id={s.id} style={{ paddingBottom: '2.5rem', borderBottom: '1px solid var(--color-dark-grey)' }}>
                    <span className="font-mono text-size-small text-color-secondary">
                      {s.num}
                    </span>
                    <h2 className="heading-style-h3" style={{ marginTop: '0.5rem', marginBottom: '1rem' }}>
                      {s.title}
                    </h2>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                      {s.body.map((p) => (
                        <p key={p} className="text-size-regular text-color-grey">
                          {p}
                        </p>
                      ))}
                    </div>
                  </section>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </SiteLayout>
  );
}
