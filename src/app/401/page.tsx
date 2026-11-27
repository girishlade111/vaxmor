'use client';

import React, { useState } from 'react';
import { SiteLayout } from '@/components/layout/SiteLayout';
import { GenericIcon } from '@/components/common/Icons';
import styles from '@/styles/Sections.module.css';

export default function ProtectedUtilityPage() {
  const [passcode, setPasscode] = useState('');
  const [feedback, setFeedback] = useState('');

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!passcode.trim()) {
      setFeedback('Please enter the access passcode.');
      return;
    }
    setFeedback(
      'Demo utility page: no protected banking data is hosted in this demonstration.'
    );
  }

  return (
    <SiteLayout showAdvisorStrip={true}>
      <section className={styles.utilityWrap}>
        <span style={{ color: 'var(--color-navy)', transform: 'scale(2.4)', marginBottom: '1rem' }}>
          <GenericIcon iconKey="lock" />
        </span>
        <h1 className="heading-style-h1">Protected Page</h1>

        <form
          onSubmit={handleSubmit}
          style={{
            width: '100%',
            maxWidth: '24rem',
            display: 'flex',
            flexDirection: 'column',
            gap: '1rem',
            marginTop: '1rem',
          }}
          noValidate
        >
          <label htmlFor="protected-passcode" className="sr-only">
            Enter your password
          </label>
          <input
            id="protected-passcode"
            type="password"
            placeholder="Enter your password"
            value={passcode}
            onChange={(e) => setPasscode(e.target.value)}
            style={{
              width: '100%',
              padding: '0.75rem 0.25rem',
              border: 'none',
              borderBottom: '1px solid var(--color-navy)',
              background: 'transparent',
              color: 'var(--color-navy)',
              fontSize: 'var(--text-small)',
            }}
          />
          <button type="submit" className="button" style={{ width: '100%' }}>
            Submit
          </button>
          {feedback && (
            <p role="status" className="text-size-small text-color-grey">
              {feedback}
            </p>
          )}
        </form>
      </section>
    </SiteLayout>
  );
}
