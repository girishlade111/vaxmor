import type { Metadata } from 'next';
import Link from 'next/link';
import { SiteLayout } from '@/components/layout/SiteLayout';
import styles from '@/styles/Sections.module.css';

export const metadata: Metadata = {
  title: 'Page Not Found',
  description:
    'That page could not be found. Head back to the Vaxmor homepage, browse our banking and investment services, or contact an advisor.',
};

export default function Custom404Page() {
  return (
    <SiteLayout showAdvisorStrip={true}>
      <section className={styles.utilityWrap}>
        <div
          className="font-mono"
          style={{
            fontSize: 'clamp(5rem, 12vw, 9rem)',
            fontWeight: 600,
            lineHeight: 1,
            color: 'var(--color-navy)',
          }}
        >
          404
        </div>
        <h1 className="heading-style-h2">Page Not Found</h1>
        <p className="text-size-regular text-color-grey" style={{ maxWidth: '30rem' }}>
          The page you are looking for doesn&apos;t exist or has been moved
        </p>
        <Link href="/" className="button">
          Back to home
        </Link>
      </section>
    </SiteLayout>
  );
}
