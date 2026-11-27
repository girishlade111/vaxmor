'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import type { FAQGroup } from '@/content/faqs';
import { SectionEyebrow } from './SectionEyebrow';
import { PlusIcon } from './Icons';
import styles from '@/styles/Sections.module.css';

export interface FAQSectionProps {
  data: FAQGroup;
}

export function FAQSection({ data }: FAQSectionProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section className={styles.sectionFaqSplit}>
      <div className="padding-global">
        <div className="container-large">
          <div className={styles.faqSplitLayout}>
            <div className={styles.faqSplitIntro}>
              <SectionEyebrow number={data.eyebrowNum} label={data.eyebrowText} />
              <h2 className="heading-style-h2">{data.heading}</h2>
              <p className="text-size-regular text-color-grey">
                {data.description}
              </p>
              <div className={styles.faqSplitCard}>
                <h3 className="heading-style-h5 text-color-white">
                  {data.assistanceTitle}
                </h3>
                <p className="text-size-small text-color-darkgrey">
                  {data.assistanceCopy}
                </p>
                {data.assistanceCta.href.startsWith('tel:') ? (
                  <a
                    href={data.assistanceCta.href}
                    className="button is-white is-small"
                  >
                    {data.assistanceCta.label}
                  </a>
                ) : (
                  <Link
                    href={data.assistanceCta.href}
                    className="button is-white is-small"
                  >
                    {data.assistanceCta.label}
                  </Link>
                )}
              </div>
            </div>

            <div className={styles.faqSplitList}>
              {data.items.map((item, idx) => {
                const isOpen = openIndex === idx;
                const panelId = `faq-panel-${idx}`;
                const btnId = `faq-btn-${idx}`;
                return (
                  <div key={item.question} className={styles.faqSplitItem}>
                    <button
                      id={btnId}
                      type="button"
                      className={styles.faqSplitQuestion}
                      aria-expanded={isOpen}
                      aria-controls={panelId}
                      onClick={() => setOpenIndex(isOpen ? null : idx)}
                    >
                      <span className="text-size-medium text-weight-medium text-color-darkmain">
                        {item.question}
                      </span>
                      <span className={styles.faqSplitIcon}>
                        <PlusIcon rotated={isOpen} />
                      </span>
                    </button>
                    <div
                      id={panelId}
                      role="region"
                      aria-labelledby={btnId}
                      className={`${styles.faqSplitAnswer} ${isOpen ? styles.faqSplitAnswerOpen : ''}`.trim()}
                    >
                      <div className={styles.faqSplitAnswerInner}>
                        <p className="text-size-regular text-color-grey">
                          {item.answer}
                        </p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
