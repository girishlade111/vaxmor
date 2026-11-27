import React from 'react';
import { SITE_CONFIG } from '@/config/site';
import { ClockIcon, PinIcon } from '@/components/common/Icons';
import styles from './Layout.module.css';

export function UtilityBar() {
  return (
    <div className={styles.topbar}>
      <div className="padding-global">
        <div className="container-large">
          <div className={styles.topbarInner}>
            <div className={styles.topbarLeft}>
              <ClockIcon />
              <span>{SITE_CONFIG.utilityBar.leftText}</span>
            </div>
            <div className={styles.topbarRight}>
              <PinIcon />
              <span>{SITE_CONFIG.utilityBar.rightText}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
