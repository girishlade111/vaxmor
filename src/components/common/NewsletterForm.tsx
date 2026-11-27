'use client';

import React, { useState } from 'react';
import { HOME_V1_DATA } from '@/content/home';
import styles from '@/styles/Sections.module.css';

export function NewsletterForm() {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [message, setMessage] = useState('');

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (status === 'loading') return;
    const trimmed = email.trim();
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(trimmed)) {
      setStatus('error');
      setMessage('Please enter a valid email address.');
      return;
    }

    setStatus('loading');
    setMessage('');
    try {
      const res = await fetch('/api/newsletter', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email: trimmed }),
      });
      const json = await res.json();
      if (!res.ok) {
        setStatus('error');
        setMessage(json.error || 'Could not process subscription.');
        return;
      }
      setStatus('success');
      setMessage(json.message);
      setEmail('');
    } catch {
      setStatus('error');
      setMessage('Something went wrong. Please try again.');
    }
  }

  return (
    <div className={styles.newsNewsletter}>
      <div className={styles.newsNewsletterText}>
        <h3 className="heading-style-h4 text-color-white">
          {HOME_V1_DATA.newsletter.heading}
        </h3>
        <p className="text-size-regular text-color-darkgrey">
          {HOME_V1_DATA.newsletter.description}
        </p>
      </div>

      <div className={styles.newsFormWrap}>
        <form onSubmit={handleSubmit} className={styles.newsForm} noValidate>
          <label htmlFor="newsletter-email" className="sr-only text-color-white">
            Email address
          </label>
          <input
            id="newsletter-email"
            type="email"
            name="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder={HOME_V1_DATA.newsletter.placeholder}
            className={styles.newsInput}
            required
            disabled={status === 'loading'}
          />
          <button
            type="submit"
            className="button is-white"
            disabled={status === 'loading'}
          >
            {status === 'loading' ? 'Sending...' : HOME_V1_DATA.newsletter.ctaLabel}
          </button>
        </form>
        {message && (
          <p
            role="status"
            aria-live="polite"
            className={
              status === 'error' ? styles.formFeedbackError : styles.formFeedbackSuccess
            }
          >
            {message}
          </p>
        )}
      </div>
    </div>
  );
}
