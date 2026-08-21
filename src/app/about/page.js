import Link from 'next/link';
import ContactInfoGrid from '@/components/ContactInfoGrid';

export const metadata = { title: 'About Us — Shopron' };

export default function AboutPage(){
  return (
    <>
      <div className="page-hero">
        <div className="wrap">
          <h1>About Shopron</h1>
          <p>America&apos;s go-to source for certified refrigerants — fast, safe and affordable.</p>
        </div>
      </div>

      <div className="content-narrow">
        <div className="info-card">
          <p style={{ fontSize: '1.02rem', color: 'var(--text)' }}>Shopron supplies bulk refrigerant cylinders to HVAC technicians, automotive shops, distributors and industrial businesses across the United States. We focus on three things: certified, factory-sealed product; fast, free shipping; and support you can actually reach.</p>
          <p style={{ color: 'var(--muted)' }}>Every cylinder we ship is 100% virgin refrigerant meeting or exceeding AHRI-700 purity standards — no reclaimed or blended stock. From residential A/C staples like R-410A and R-22 to next-generation low-GWP and A2L refrigerants, our catalog is built for the transition the industry is already going through.</p>

          <div style={{ margin: '26px 0' }}>
            <span className="pd-section-title" style={{ marginTop: 0 }}>We are always happy to assist you</span>
            <p style={{ color: 'var(--muted)', marginBottom: 0 }}>If you have any questions, concerns, or need help with your order, feel free to reach out:</p>
          </div>

          <ContactInfoGrid />

          <Link href="/contact" className="btn btn-primary" style={{ marginTop: 26 }}>Contact Us</Link>
        </div>
      </div>
    </>
  );
}
