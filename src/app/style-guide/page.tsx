import type { Metadata } from 'next';
import { SiteLayout } from '@/components/layout/SiteLayout';
import { SectionEyebrow } from '@/components/common/SectionEyebrow';
import { ArrowRightIcon, CheckIcon, GenericIcon } from '@/components/common/Icons';
import styles from '@/styles/Sections.module.css';

export const metadata: Metadata = {
  title: 'Style Guide',
  description:
    'Typography, color, spacing and component reference for Vaxmor, with every single style kept in one place.',
};

const BG_SWATCHES = [
  { name: 'background-color-white', hex: '#F5F7FA', label: 'Page surface' },
  { name: 'background-color-light-grey', hex: '#EBEFF5', label: 'Secondary surface' },
  { name: 'background-color-subtle', hex: '#E6ECF7', label: 'Subtle blue' },
  { name: 'background-color-dark-grey', hex: '#D8DEE8', label: 'Borders & dividers' },
  { name: 'background-color-main', hex: '#0B1526', label: 'Primary navy' },
  { name: 'background-color-dark', hex: '#060D19', label: 'Dark navy' },
  { name: 'background-color-black', hex: '#070C16', label: 'Near-black' },
  { name: 'background-color-secondary', hex: '#1E4FD6', label: 'Brand blue' },
];

const TEXT_WEIGHTS = [
  { cls: 'text-weight-xbold', label: 'Extra Bold (800)' },
  { cls: 'text-weight-bold', label: 'Bold (700)' },
  { cls: 'text-weight-semibold', label: 'Semibold (600)' },
  { cls: 'text-weight-medium', label: 'Medium (500)' },
  { cls: 'text-weight-normal', label: 'Normal (400)' },
  { cls: 'text-weight-light', label: 'Light (300)' },
];

const ICON_SIZES = [16, 20, 24, 32, 40, 48, 56];

const MARGIN_TOKENS = [
  { cls: 'margin-2x-small', rem: '0.25rem' },
  { cls: 'margin-small', rem: '0.5rem' },
  { cls: 'margin-medium', rem: '0.75rem' },
  { cls: 'margin-large', rem: '1rem' },
  { cls: 'margin-x-large', rem: '1.25rem' },
  { cls: 'margin-xx-large', rem: '1.5rem' },
  { cls: 'margin-4x-large', rem: '2rem' },
  { cls: 'margin-6x-large', rem: '3rem' },
  { cls: 'margin-8x-large', rem: '4rem' },
  { cls: 'margin-10x-large', rem: '5rem' },
  { cls: 'margin-12x-large', rem: '6rem' },
  { cls: 'margin-15x-large', rem: '8rem' },
];

export default function StyleGuidePage() {
  return (
    <SiteLayout showAdvisorStrip={true}>
      <section className={styles.sectionBanner}>
        <div className="padding-global">
          <div className="container-large">
            <div className={styles.bannerEditorialMeta}>
              <SectionEyebrow number="(01)" label="Template" />
            </div>
            <h1 className="heading-style-h1">Style Guide</h1>
            <p className="text-size-regular text-color-grey" style={{ maxWidth: '40rem', marginTop: '1rem' }}>
              Typography, color, spacing and component reference for Vaxmor, with every single token kept in one place.
            </p>
          </div>
        </div>
      </section>

      <section className={styles.docsSection}>
        <div className="padding-global">
          <div className="container-large">
            {/* Headings */}
            <div className={styles.sgBlock}>
              <div className={styles.sgBlockBanner}>
                <h2 className="heading-style-h4">Headings</h2>
              </div>
              <div className={styles.sgRow}>
                <span className="font-mono text-size-small text-color-grey">heading-style-hero</span>
                <div className="heading-style-hero">Display Hero</div>
              </div>
              <div className={styles.sgRow}>
                <span className="font-mono text-size-small text-color-grey">H1 / heading-style-h1</span>
                <div className="heading-style-h1">Heading 1</div>
              </div>
              <div className={styles.sgRow}>
                <span className="font-mono text-size-small text-color-grey">H2 / heading-style-h2</span>
                <div className="heading-style-h2">Heading 2</div>
              </div>
              <div className={styles.sgRow}>
                <span className="font-mono text-size-small text-color-grey">H3 / heading-style-h3</span>
                <div className="heading-style-h3">Heading 3</div>
              </div>
              <div className={styles.sgRow}>
                <span className="font-mono text-size-small text-color-grey">H4 / heading-style-h4</span>
                <div className="heading-style-h4">Heading 4</div>
              </div>
              <div className={styles.sgRow}>
                <span className="font-mono text-size-small text-color-grey">H5 / heading-style-h5</span>
                <div className="heading-style-h5">Heading 5</div>
              </div>
              <div className={styles.sgRow}>
                <span className="font-mono text-size-small text-color-grey">H6 / heading-style-h6</span>
                <div className="heading-style-h6">Heading 6</div>
              </div>
            </div>

            {/* Other HTML Tags */}
            <div className={styles.sgBlock}>
              <div className={styles.sgBlockBanner}>
                <h2 className="heading-style-h4">Other HTML Tags</h2>
              </div>
              <div className={styles.sgRow}>
                <span className="font-mono text-size-small text-color-grey">Paragraph</span>
                <p className="text-size-regular text-color-grey">
                  Independent banking built on trust, discipline and long-term thinking.
                </p>
              </div>
              <div className={styles.sgRow}>
                <span className="font-mono text-size-small text-color-grey">Blockquote</span>
                <blockquote style={{ margin: 0, paddingLeft: '1.25rem', borderLeft: '2px solid var(--color-brand)' }}>
                  Clear advice, fair fees and one named advisor.
                </blockquote>
              </div>
              <div className={styles.sgRow}>
                <span className="font-mono text-size-small text-color-grey">Lists</span>
                <ul style={{ margin: 0, paddingLeft: '1.25rem' }}>
                  <li>Private banking</li>
                  <li>Investment portfolios</li>
                  <li>Wealth management</li>
                </ul>
              </div>
            </div>

            {/* Text Sizes & Weights */}
            <div className={styles.sgBlock}>
              <div className={styles.sgBlockBanner}>
                <h2 className="heading-style-h4">Text Sizes & Weights</h2>
              </div>
              {[
                ['text-size-large', 'Large body copy specimen'],
                ['text-size-medium', 'Medium body copy specimen'],
                ['text-size-regular', 'Regular body copy specimen'],
                ['text-size-small', 'Small body copy specimen'],
                ['text-size-tiny', 'Tiny caption specimen'],
                ['text-size-eyebrow', 'EYEBROW LABEL'],
              ].map(([cls, txt]) => (
                <div key={cls} className={styles.sgRow}>
                  <span className="font-mono text-size-small text-color-grey">{cls}</span>
                  <div className={cls}>{txt}</div>
                </div>
              ))}
              {TEXT_WEIGHTS.map((w) => (
                <div key={w.cls} className={styles.sgRow}>
                  <span className="font-mono text-size-small text-color-grey">{w.cls}</span>
                  <div className={`text-size-large ${w.cls}`}>{w.label}</div>
                </div>
              ))}
            </div>

            {/* Background & Text Colors */}
            <div className={styles.sgBlock}>
              <div className={styles.sgBlockBanner}>
                <h2 className="heading-style-h4">Colors</h2>
              </div>
              <div className={styles.sgSwatchGrid}>
                {BG_SWATCHES.map((sw) => (
                  <div key={sw.name} className={styles.sgSwatchCard}>
                    <div
                      className={styles.sgSwatchColor}
                      style={{ backgroundColor: sw.hex }}
                    />
                    <div style={{ padding: '0.85rem' }}>
                      <div className="text-size-small text-weight-medium text-color-darkmain">
                        {sw.label}
                      </div>
                      <div className="font-mono text-size-tiny text-color-grey">
                        {sw.hex}
                      </div>
                      <div className="font-mono text-size-tiny text-color-grey">
                        {sw.name}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Buttons */}
            <div className={styles.sgBlock}>
              <div className={styles.sgBlockBanner}>
                <h2 className="heading-style-h4">Buttons</h2>
              </div>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1.25rem', alignItems: 'center' }}>
                <button type="button" className="button">
                  <span>Primary</span>
                  <ArrowRightIcon />
                </button>
                <button type="button" className="button is-accent">
                  Accent
                </button>
                <button type="button" className="button is-secondary">
                  Secondary
                </button>
                <button type="button" className="button is-small">
                  Small
                </button>
                <button type="button" className="button is-link">
                  <span>Link button</span>
                  <ArrowRightIcon />
                </button>
              </div>
            </div>

            {/* Form Elements (Inert Specimens) */}
            <div className={styles.sgBlock}>
              <div className={styles.sgBlockBanner}>
                <h2 className="heading-style-h4">Form Elements</h2>
              </div>
              <div style={{ maxWidth: '36rem', display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
                <div className={styles.formField}>
                  <label htmlFor="sg-input" className={styles.fieldLabel}>
                    field-label / form-input
                  </label>
                  <input
                    id="sg-input"
                    type="text"
                    placeholder="Placeholder text"
                    className={styles.formInput}
                    readOnly
                  />
                </div>
                <div className={styles.formField}>
                  <label htmlFor="sg-textarea" className={styles.fieldLabel}>
                    is-text-area
                  </label>
                  <textarea
                    id="sg-textarea"
                    rows={3}
                    placeholder="Message specimen"
                    className={`${styles.formInput} ${styles.formTextarea}`}
                    readOnly
                  />
                </div>
                <div style={{ display: 'flex', gap: '2rem', alignItems: 'center' }}>
                  <label style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem' }}>
                    <input type="checkbox" defaultChecked readOnly />
                    <span className="text-size-small">form-checkbox</span>
                  </label>
                  <label style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem' }}>
                    <input type="radio" name="sg-radio" defaultChecked readOnly />
                    <span className="text-size-small">form-radio</span>
                  </label>
                </div>
              </div>
            </div>

            {/* Icons & Shadow */}
            <div className={styles.sgBlock}>
              <div className={styles.sgBlockBanner}>
                <h2 className="heading-style-h4">Icons & Shadows</h2>
              </div>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '2rem', alignItems: 'center', marginBottom: '2rem' }}>
                {ICON_SIZES.map((sz) => (
                  <div key={sz} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '0.4rem' }}>
                    <span style={{ width: sz, height: sz, display: 'inline-flex', alignItems: 'center', justifyContent: 'center', color: 'var(--color-brand)' }}>
                      <GenericIcon iconKey="shield" />
                    </span>
                    <span className="font-mono text-size-tiny text-color-grey">icon-{sz}</span>
                  </div>
                ))}
              </div>
              <div className="shadow-card" style={{ padding: '2rem', borderRadius: '1rem', background: 'var(--color-white)', maxWidth: '24rem' }}>
                <CheckIcon />
                <div className="text-size-small text-weight-medium" style={{ marginTop: '0.5rem' }}>
                  shadow-card specimen
                </div>
              </div>
            </div>

            {/* Margins */}
            <div className={styles.sgBlock}>
              <div className={styles.sgBlockBanner}>
                <h2 className="heading-style-h4">Margins & Spacing Scale</h2>
              </div>
              {MARGIN_TOKENS.map((m) => (
                <div key={m.cls} className={styles.sgRow}>
                  <span className="font-mono text-size-small text-color-grey">
                    {m.cls} ({m.rem})
                  </span>
                  <div className={styles.sgMarginBar} style={{ height: m.rem }} />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </SiteLayout>
  );
}
