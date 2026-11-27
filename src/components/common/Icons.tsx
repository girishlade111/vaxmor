import React from 'react';

export function VaxmorSymbol({ className = '' }: { className?: string }) {
  return (
    <img
      src="/assets/brand/6af96ebc6cca54008f8adfb3_vaxmor-dark.svg"
      alt="Vaxmor logo"
      className={className}
      width={34}
      height={34}
    />
  );
}

export function ClockIcon({ className = '' }: { className?: string }) {
  return (
    <svg className={className} width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" aria-hidden="true">
      <circle cx="12" cy="12" r="9" />
      <path d="M12 7v5l3 2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export function PinIcon({ className = '' }: { className?: string }) {
  return (
    <svg className={className} width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" aria-hidden="true">
      <path d="M20 10c0 4.418-8 12-8 12s-8-7.582-8-12a8 8 0 1 1 16 0Z" />
      <circle cx="12" cy="10" r="2.5" />
    </svg>
  );
}

export function PhoneIcon({ className = '' }: { className?: string }) {
  return (
    <svg className={className} width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true">
      <path d="M18.1182 14.702L14 15.5C11.2183 14.1038 9.5 12.5 8.5 10L9.26995 5.8699L7.81452 2H4.0636C2.93605 2 2.04814 2.93178 2.21654 4.04668C2.63695 6.83 3.87653 11.8765 7.5 15.5C11.3052 19.3052 16.7857 20.9564 19.802 21.6127C20.9668 21.8662 22 20.9575 22 19.7655V16.1812L18.1182 14.702Z" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export function MailIcon({ className = '' }: { className?: string }) {
  return (
    <svg className={className} width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true">
      <path d="M7 9l5 3.5L17 9" strokeLinecap="round" strokeLinejoin="round" />
      <rect x="2" y="5" width="20" height="14" rx="2" />
    </svg>
  );
}

export function ChevronDownIcon({ className = '' }: { className?: string }) {
  return (
    <svg className={className} width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" aria-hidden="true">
      <path d="M6 9l6 6 6-6" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export function ChevronRightIcon({ className = '' }: { className?: string }) {
  return (
    <svg className={className} width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" aria-hidden="true">
      <path d="M9 6l6 6-6 6" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export function ArrowRightIcon({ className = '' }: { className?: string }) {
  return (
    <svg className={className} width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" aria-hidden="true">
      <path d="M5 12h14m-6-6 6 6-6 6" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export function ArrowLeftIcon({ className = '' }: { className?: string }) {
  return (
    <svg className={className} width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" aria-hidden="true">
      <path d="M19 12H5m6-6-6 6 6 6" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export function ArrowUpRightIcon({ className = '' }: { className?: string }) {
  return (
    <svg className={className} width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" aria-hidden="true">
      <path d="M7 17L17 7M8 7h9v9" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export function PlusIcon({ className = '', rotated = false }: { className?: string; rotated?: boolean }) {
  return (
    <svg
      className={className}
      width="16"
      height="16"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.75"
      aria-hidden="true"
      style={{ transform: rotated ? 'rotate(45deg)' : undefined, transition: 'transform 0.25s ease' }}
    >
      <path d="M12 5v14M5 12h14" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export function CheckIcon({ className = '' }: { className?: string }) {
  return (
    <svg className={className} width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden="true">
      <path d="M5 13l4 4L19 7" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export function CrossIcon({ className = '' }: { className?: string }) {
  return (
    <svg className={className} width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden="true">
      <path d="M6 6l12 12M18 6L6 18" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export function CalendarIcon({ className = '' }: { className?: string }) {
  return (
    <svg className={className} width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true">
      <path d="M15 4V2m0 2v2m0-2h-4.5M3 10v9a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-9H3Zm0 0V6a2 2 0 0 1 2-2h2m0-2v4" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export function PlayIcon({ className = '' }: { className?: string }) {
  return (
    <svg className={className} width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M7 5.5v13l11-6.5L7 5.5Z" />
    </svg>
  );
}

export function ServiceIcon({ name, className = '' }: { name: string; className?: string }) {
  switch (name) {
    case 'wealth':
      return (
        <svg className={className} width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true">
          <path d="M16 13c-2.761 0-5-1.119-5-2.5S13.239 8 16 8s5 1.119 5 2.5-2.239 2.5-5 2.5Z" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M11 14.5c0 1.381 2.239 2.5 5 2.5s5-1.119 5-2.5" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M3 9.5C3 10.881 5.239 12 8 12c1.126 0 2.165-.186 3-.5" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M3 13c0 1.381 2.239 2.5 5 2.5 1.126 0 2.164-.186 3-.5" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M3 5.5v11C3 17.881 5.239 19 8 19c1.126 0 2.164-.186 3-.5M13 8.5v-3M11 10.5v8c0 1.381 2.239 2.5 5 2.5s5-1.119 5-2.5v-8" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M8 8C5.239 8 3 6.881 3 5.5S5.239 3 8 3s5 1.119 5 2.5S10.761 8 8 8Z" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      );
    case 'investment':
      return (
        <svg className={className} width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true">
          <path d="M20 20H4V4" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M4 16.5L12 9l3 3 4.5-4.5" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      );
    case 'private':
      return (
        <svg className={className} width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true">
          <path d="M3 9.5L12 4l9 5.5M5 20h14M10 9h4M6 17v-5M10 17v-5M14 17v-5M18 17v-5" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      );
    case 'retirement':
      return (
        <svg className={className} width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true">
          <path d="M14.5 8.5C13.719 8.298 12.634 8 11.765 8 7.476 8 4 10.668 4 13.958c0 1.891 1.148 3.576 2.938 4.668l-.485 1.6A.59.59 0 0 0 7.027 21h1.764a.6.6 0 0 0 .36-.12l1.395-1.047h2.437l1.395 1.047a.6.6 0 0 0 .36.12h1.764a.59.59 0 0 0 .574-.774l-.485-1.6A6.5 6.5 0 0 0 19 16.125" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M14.5 8.5L19 7l-.084 3.628L21 11.5V15l-1.926 1" strokeLinecap="round" strokeLinejoin="round" />
          <circle cx="15.5" cy="12.5" r=".5" fill="currentColor" />
        </svg>
      );
    case 'business':
      return (
        <svg className={className} width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true">
          <path d="M8 7H4a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2h-4M8 7V3.6a.6.6 0 0 1 .6-.6h6.8a.6.6 0 0 1 .6.6V7M8 7h8" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      );
    case 'lending':
    default:
      return (
        <svg className={className} width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true">
          <path d="M10 18v-3a2 2 0 1 1 4 0v3M2 8l9.732-4.866a.6.6 0 0 1 .536 0L22 8M20 11v8a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2v-8" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      );
  }
}

export function GenericIcon({ iconKey, className = '' }: { iconKey: string; className?: string }) {
  switch (iconKey) {
    case 'wallet':
      return (
        <svg className={className} width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true">
          <path d="M19 20H5a2 2 0 0 1-2-2V9a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2Z" />
          <circle cx="16.5" cy="13.5" r=".5" fill="currentColor" />
          <path d="M18 7V5.603A2 2 0 0 0 15.485 3.67l-11 2.933A2 2 0 0 0 3 8.537V9" />
        </svg>
      );
    case 'card':
      return (
        <svg className={className} width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true">
          <path d="M22 9v8a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V7a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v2Zm0 0H6" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      );
    case 'home':
      return (
        <svg className={className} width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true">
          <path d="M17 21H7a4 4 0 0 1-4-4v-6.292a4 4 0 0 1 1.927-3.421l5-3.03a4 4 0 0 1 4.146 0l5 3.03A4 4 0 0 1 21 10.707V17a4 4 0 0 1-4 4Z" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M9 17h6" strokeLinecap="round" />
        </svg>
      );
    case 'savings':
      return <ServiceIcon name="retirement" className={className} />;
    case 'building':
      return (
        <svg className={className} width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true">
          <path d="M6 20.4V5.6a.6.6 0 0 1 .6-.6H12V3.6a.6.6 0 0 1 .6-.6h4.8a.6.6 0 0 1 .6.6v16.8a.6.6 0 0 1-.6.6H6.6a.6.6 0 0 1-.6-.6Z" />
          <path d="M10 9h.01M14 9h.01M10 13h.01M14 13h.01M10 17h.01M14 17h.01" strokeLinecap="round" />
        </svg>
      );
    case 'lending':
      return (
        <svg className={className} width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true">
          <path d="M8 13.5V7a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v6a2 2 0 0 1-2 2h-6.5M2 19.5l5.5 0 4-3c0 0 .809-.547 2-1.5 2.5-2 0-5.166-2.5-3.5-2.036 1.357-4 2.5-4 2.5" strokeLinecap="round" strokeLinejoin="round" />
          <circle cx="15" cy="10" r="2" />
        </svg>
      );
    case 'payments':
    case 'send':
      return (
        <svg className={className} width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true">
          <path d="M13 12h8m0 0-3.84-4M21 12l-3.84 4M10 8.23C9.2 7.49 7.79 6.98 6.5 6.95c-1.54-.04-2.92.6-2.92 2.36 0 3.23 6.42 1.61 6.42 4.84 0 1.84-1.71 2.64-3.5 2.58-1.35-.04-2.75-.57-3.5-1.5M6.5 6.95V5m0 11.73V19" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      );
    case 'chart':
    case 'report':
      return (
        <svg className={className} width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true">
          <path d="M16 16V8m-4 8v-5m-4 5v-3M3 20.4V3.6a.6.6 0 0 1 .6-.6h16.8a.6.6 0 0 1 .6.6v16.8a.6.6 0 0 1-.6.6H3.6a.6.6 0 0 1-.6-.6Z" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      );
    case 'shield':
    case 'lock':
      return (
        <svg className={className} width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true">
          <path d="M16 12h1.4a.6.6 0 0 1 .6.6v6.8a.6.6 0 0 1-.6.6H6.6a.6.6 0 0 1-.6-.6v-6.8a.6.6 0 0 1 .6-.6H8m8 0V8c0-1.333-.8-4-4-4S8 6.667 8 8v4m8 0H8" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      );
    case 'biometric':
      return (
        <svg className={className} width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true">
          <path d="M7 3H5a2 2 0 0 0-2 2v2M17 3h2a2 2 0 0 1 2 2v2M16 8v2a2 2 0 0 1-2 2h-4a2 2 0 0 1-2-2V8m8 8H8M7 21H5a2 2 0 0 1-2-2v-2M17 21h2a2 2 0 0 0 2-2v-2" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      );
    case 'contactless':
      return (
        <svg className={className} width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true">
          <path d="M8.5 14.5A3.5 3.5 0 0 1 8.5 9.5M12 17a7 7 0 0 1 0-10M15.5 19.5a10.5 10.5 0 0 1 0-15" strokeLinecap="round" />
        </svg>
      );
    case 'cashback':
      return (
        <svg className={className} width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true">
          <circle cx="12" cy="12" r="9" />
          <path d="M15 9l-6 6M9.5 9.5h.01M14.5 14.5h.01" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      );
    case 'user':
    case 'specialist':
    case 'family':
      return (
        <svg className={className} width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true">
          <circle cx="12" cy="8" r="4" />
          <path d="M5 20v-1a7 7 0 0 1 14 0v1" strokeLinecap="round" />
        </svg>
      );
    case 'calendar':
      return <CalendarIcon className={className} />;
    case 'phone':
      return <PhoneIcon className={className} />;
    case 'mail':
      return <MailIcon className={className} />;
    case 'pin':
      return <PinIcon className={className} />;
    case 'clock':
      return <ClockIcon className={className} />;
    default:
      return (
        <svg className={className} width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true">
          <path d="M4 21.4V2.6a.6.6 0 0 1 .6-.6h11.652a.6.6 0 0 1 .424.176l3.148 3.148A.6.6 0 0 1 20 5.748V21.4a.6.6 0 0 1-.6.6H4.6a.6.6 0 0 1-.6-.6Z" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M8 10h8M8 14h4M8 18h8M16 2v3.4a.6.6 0 0 0 .6.6H20" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      );
  }
}
