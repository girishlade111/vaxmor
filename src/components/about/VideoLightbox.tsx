'use client';

import React, { useEffect, useRef, useState } from 'react';
import { PlayIcon, CrossIcon } from '@/components/common/Icons';
import styles from '@/styles/Sections.module.css';

export interface VideoLightboxProps {
  title: string;
  description: string;
  youtubeId: string;
  disclaimer: string;
}

export function VideoLightbox({
  title,
  description,
  youtubeId,
  disclaimer,
}: VideoLightboxProps) {
  const [open, setOpen] = useState(false);
  const triggerRef = useRef<HTMLButtonElement>(null);
  const closeRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (!open) return;
    closeRef.current?.focus();
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';

    function onKey(e: KeyboardEvent) {
      if (e.key === 'Escape') {
        setOpen(false);
      }
    }
    document.addEventListener('keydown', onKey);
    return () => {
      document.body.style.overflow = prevOverflow;
      document.removeEventListener('keydown', onKey);
      triggerRef.current?.focus();
    };
  }, [open]);

  return (
    <>
      <button
        ref={triggerRef}
        type="button"
        className={styles.founderVideoTrigger}
        onClick={() => setOpen(true)}
      >
        <span className={styles.founderVideoIcon}>
          <PlayIcon />
        </span>
        <span className={styles.founderVideoText}>
          <span className="text-size-medium text-weight-medium text-color-darkmain">
            {title}
          </span>
          <span className="text-size-small text-color-grey">{description}</span>
        </span>
      </button>

      {open && (
        <div
          className={styles.lightboxBackdrop}
          role="dialog"
          aria-modal="true"
          aria-label={title}
          onClick={(e) => {
            if (e.target === e.currentTarget) setOpen(false);
          }}
        >
          <div className={styles.lightboxDialog}>
            <div className={styles.lightboxHeader}>
              <span className="text-size-small text-color-white">{title}</span>
              <button
                ref={closeRef}
                type="button"
                aria-label="Close video dialog"
                className={styles.lightboxClose}
                onClick={() => setOpen(false)}
              >
                <CrossIcon />
              </button>
            </div>
            <div className={styles.lightboxFrameWrap}>
              <iframe
                src={`https://www.youtube-nocookie.com/embed/${youtubeId}?rel=0`}
                title={title}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className={styles.lightboxIframe}
              />
            </div>
            <p className="text-size-tiny text-color-darkgrey" style={{ marginTop: '0.75rem' }}>
              {disclaimer}
            </p>
          </div>
        </div>
      )}
    </>
  );
}
