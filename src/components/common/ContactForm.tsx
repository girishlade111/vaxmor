'use client';

import React, { useState } from 'react';
import { SITE_CONFIG } from '@/config/site';
import styles from '@/styles/Sections.module.css';

export interface ContactFormProps {
  heading: string;
}

export function ContactForm({ heading }: ContactFormProps) {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [message, setMessage] = useState('');
  const [honeypot, setHoneypot] = useState('');
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [feedback, setFeedback] = useState('');

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (status === 'loading') return;

    if (!firstName.trim() || !lastName.trim() || !email.trim() || !message.trim()) {
      setStatus('error');
      setFeedback(
        `We could not send your message. Please check each field and try again, or call us on ${SITE_CONFIG.contact.phoneDisplay}.`
      );
      return;
    }

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.trim())) {
      setStatus('error');
      setFeedback('Please enter a valid email address.');
      return;
    }

    setStatus('loading');
    setFeedback('');

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          firstName: firstName.trim(),
          lastName: lastName.trim(),
          email: email.trim(),
          phone: phone.trim(),
          message: message.trim(),
          website: honeypot,
        }),
      });
      const json = await res.json();
      if (!res.ok) {
        setStatus('error');
        setFeedback(
          json.error ||
            `We could not send your message. Please check each field and try again, or call us on ${SITE_CONFIG.contact.phoneDisplay}.`
        );
        return;
      }
      setStatus('success');
      setFeedback(json.message);
      setFirstName('');
      setLastName('');
      setEmail('');
      setPhone('');
      setMessage('');
    } catch {
      setStatus('error');
      setFeedback(
        `We could not send your message. Please check each field and try again, or call us on ${SITE_CONFIG.contact.phoneDisplay}.`
      );
    }
  }

  return (
    <div className={styles.contactCard}>
      <h2 className="heading-style-h4" style={{ marginBottom: '1.5rem' }}>
        {heading}
      </h2>

      {status === 'success' ? (
        <div role="status" aria-live="polite" className={styles.contactSuccessBox}>
          <p className="text-size-regular text-color-darkmain">{feedback}</p>
          <p className="text-size-small text-color-grey" style={{ marginTop: '0.5rem' }}>
            {SITE_CONFIG.contact.demoNotice}
          </p>
          <button
            type="button"
            className="button is-secondary is-small"
            style={{ marginTop: '1rem' }}
            onClick={() => {
              setStatus('idle');
              setFeedback('');
            }}
          >
            Send another message
          </button>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className={styles.contactFormGrid} noValidate>
          <div className={styles.honeypot} aria-hidden="true">
            <label htmlFor="contact-website">Website</label>
            <input
              id="contact-website"
              type="text"
              tabIndex={-1}
              autoComplete="off"
              value={honeypot}
              onChange={(e) => setHoneypot(e.target.value)}
            />
          </div>

          <div className={styles.contactFormRow}>
            <div className={styles.formField}>
              <label htmlFor="first-name" className={styles.fieldLabel}>
                First Name
              </label>
              <input
                id="first-name"
                name="firstName"
                type="text"
                placeholder="First name"
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
                className={styles.formInput}
                required
              />
            </div>

            <div className={styles.formField}>
              <label htmlFor="last-name" className={styles.fieldLabel}>
                Last Name
              </label>
              <input
                id="last-name"
                name="lastName"
                type="text"
                placeholder="Last Name"
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
                className={styles.formInput}
                required
              />
            </div>
          </div>

          <div className={styles.contactFormRow}>
            <div className={styles.formField}>
              <label htmlFor="email-address" className={styles.fieldLabel}>
                Email Address
              </label>
              <input
                id="email-address"
                name="email"
                type="email"
                placeholder="email@example.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className={styles.formInput}
                required
              />
            </div>

            <div className={styles.formField}>
              <label htmlFor="phone-number" className={styles.fieldLabel}>
                Phone
              </label>
              <input
                id="phone-number"
                name="phone"
                type="tel"
                placeholder="Phone Number"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                className={styles.formInput}
              />
            </div>
          </div>

          <div className={styles.formField}>
            <label htmlFor="contact-message" className={styles.fieldLabel}>
              Message
            </label>
            <textarea
              id="contact-message"
              name="message"
              placeholder="Message"
              rows={5}
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              className={`${styles.formInput} ${styles.formTextarea}`}
              required
            />
          </div>

          {status === 'error' && feedback && (
            <div role="alert" className={styles.contactErrorBox}>
              {feedback}
            </div>
          )}

          <button
            type="submit"
            className={`button ${styles.contactSubmitBtn}`}
            disabled={status === 'loading'}
          >
            {status === 'loading' ? 'Sending...' : 'SEND MESSAGE'}
          </button>
        </form>
      )}
    </div>
  );
}
