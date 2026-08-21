'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

const LEGAL_PAGES = [
  { slug: 'privacy-policy', label: 'Privacy Policy' },
  { slug: 'refund-policy', label: 'Refund Policy' },
  { slug: 'shipping-policy', label: 'Shipping Policy' },
  { slug: 'terms-of-service', label: 'Terms of Service' },
  { slug: 'payment-policy', label: 'Payment Policy' },
  { slug: 'disclaimer', label: 'Disclaimer' }
];

export default function LegalNav(){
  const pathname = usePathname();
  return (
    <nav className="legal-nav">
      {LEGAL_PAGES.map(p => (
        <Link key={p.slug} href={`/policies/${p.slug}`} className={pathname === `/policies/${p.slug}` ? 'active' : ''}>
          {p.label}
        </Link>
      ))}
    </nav>
  );
}
