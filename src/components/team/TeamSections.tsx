import React from 'react';
import Link from 'next/link';
import { TEAM_MEMBERS } from '@/content/team';
import { SectionEyebrow } from '@/components/common/SectionEyebrow';
import { ArrowUpRightIcon } from '@/components/common/Icons';
import styles from '@/styles/Sections.module.css';

export function TeamPortraitGrid({
  eyebrowNumber = '(06)',
  eyebrowLabel = 'Our team',
  heading = 'The people who run Vaxmor',
  columns = 3,
  includeJoinCard = false,
}: {
  eyebrowNumber?: string;
  eyebrowLabel?: string;
  heading?: string;
  columns?: 3 | 4;
  includeJoinCard?: boolean;
}) {
  const members =
    columns === 3
      ? TEAM_MEMBERS.filter((m) => m.showInSixCardGrid).slice(0, 6)
      : TEAM_MEMBERS;

  return (
    <section className={styles.sectionTeam}>
      <div className="padding-global">
        <div className="container-large">
          <div className={styles.teamHead}>
            <SectionEyebrow number={eyebrowNumber} label={eyebrowLabel} />
            <h2 className="heading-style-h2">{heading}</h2>
          </div>

          <div
            className={
              columns === 4 ? styles.teamPortraitGridFour : styles.teamPortraitGridThree
            }
          >
            {members.map((m) => (
              <div key={m.id} className={styles.teamPortraitCard}>
                <img
                  src={m.photo}
                  alt={m.name}
                  className={styles.teamPortraitImg}
                />
                <div className={styles.teamPortraitOverlay}>
                  <div className="text-size-medium text-weight-medium text-color-darkmain">
                    {m.name}
                  </div>
                  <div className="text-size-small text-color-grey">{m.role}</div>
                </div>
              </div>
            ))}

            {includeJoinCard && (
              <Link href="/contact-v1" className={styles.teamJoinCard}>
                <h3 className="heading-style-h4 text-color-white">Join Our Team</h3>
                <span className={styles.teamJoinLink}>
                  <span>Meet an advisor</span>
                  <ArrowUpRightIcon />
                </span>
              </Link>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

export function TeamHorizontalGrid({
  eyebrowNumber = '(03)',
  eyebrowLabel = 'Our team',
  heading = 'Choose who you would like to speak with',
}: {
  eyebrowNumber?: string;
  eyebrowLabel?: string;
  heading?: string;
}) {
  const members = TEAM_MEMBERS.slice(0, 4);

  return (
    <section className={styles.sectionTeam}>
      <div className="padding-global">
        <div className="container-large">
          <div className={styles.teamHead}>
            <SectionEyebrow number={eyebrowNumber} label={eyebrowLabel} />
            <h2 className="heading-style-h2">{heading}</h2>
          </div>

          <div className={styles.teamHorizontalGrid}>
            {members.map((m) => (
              <div key={m.id} className={styles.teamHorizontalCard}>
                <div className={styles.teamHorizontalPhotoWrap}>
                  <img
                    src={m.photo}
                    alt={m.name}
                    className={styles.teamHorizontalPhoto}
                  />
                </div>
                <div className={styles.teamHorizontalBody}>
                  <div className={styles.teamHorizontalMeta}>
                    <div className="heading-style-h5 text-color-darkmain">
                      {m.name}
                    </div>
                    <div className="text-size-small text-color-secondary">
                      {m.role}
                    </div>
                  </div>
                  <p className="text-size-small text-color-grey">{m.bio}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
