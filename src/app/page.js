import Link from 'next/link';
import { PRODUCTS, findProduct } from '@/data/products';
import BestSellersCarousel from '@/components/BestSellersCarousel';
import Icon from '@/components/Icon';

const SHOP_BY_REFRIGERANT_SLUGS = ['r22-30lb', 'r-410a-25lb', 'r134a-30lb', 'r404a-24lb', 'r32-20-9lb'];

export default function HomePage(){
  const shopByRefrigerant = SHOP_BY_REFRIGERANT_SLUGS.map(findProduct).filter(Boolean);

  return (
    <>
      <section className="hero">
        <img src="/assets/hero-bg.png" alt="" className="hero-bg" />
        <div className="hero-inner">
          <div>
            <span className="hero-badge"><span className="pulse" /> SHOPRON · PROFESSIONAL HVAC REFRIGERANTS</span>
            <h1>Refrigerants for HVAC, Refrigeration &amp; Auto&nbsp;A/C</h1>
            <p className="lead">Professional-grade refrigerants for air conditioning and refrigeration systems, shipped directly from our U.S. warehouse.</p>
            <div className="hero-cta">
              <Link href="/products" className="btn btn-primary">Shop Refrigerants</Link>
              <Link href="/care-instructions" className="btn btn-outline">Care &amp; Handling Guide</Link>
            </div>
            <div className="hero-stats">
              <div><b>20+</b><span>Refrigerant Types</span></div>
              <div><b>48</b><span>States Shipped</span></div>
              <div><b>30-Day</b><span>Free Returns</span></div>
            </div>
          </div>
        </div>
        <div className="hero-tag">❄ Factory‑sealed · AHRI‑700 certified</div>
      </section>

      <div className="trust-bar">
        <div className="trust-grid wrap" style={{ padding: 0 }}>
          <div className="trust-item">
            <svg className="ic" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8"><path d="M20 15a8 8 0 1 0-16 0" /><path d="M2 15h20l-2 6H4z" /></svg>
            <div><b>Best Customer Service</b><span>9 AM–5 PM, Mon–Fri</span></div>
          </div>
          <div className="trust-item">
            <svg className="ic" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8"><rect x="1" y="7" width="14" height="10" rx="1" /><path d="M15 10h3l3 3v4h-6z" /><circle cx="6" cy="19" r="1.6" /><circle cx="17.5" cy="19" r="1.6" /></svg>
            <div><b>Free Shipping</b><span>On every U.S. order</span></div>
          </div>
          <div className="trust-item">
            <svg className="ic" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8"><path d="M3 12a9 9 0 1 0 3-6.7" /><path d="M3 4v5h5" /></svg>
            <div><b>30-Day Free Return</b><span>On all products</span></div>
          </div>
          <div className="trust-item">
            <svg className="ic" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8"><path d="M12 2 4 5v6c0 5.5 3.4 9 8 11 4.6-2 8-5.5 8-11V5Z" /><path d="m9 12 2 2 4-4" /></svg>
            <div><b>EPA-Compliant</b><span>AHRI-700 certified stock</span></div>
          </div>
        </div>
      </div>

      <section className="section section-alt section-tight-top section-tight-bottom">
        <div className="wrap">
          <div className="section-head" style={{ justifyContent: 'center', alignItems: 'center', textAlign: 'center', flexDirection: 'column' }}>
            <div><h2>Shop by Refrigerant</h2><p>Find the correct refrigerant for your system.</p></div>
          </div>
          <div className="sbr-grid">
            {shopByRefrigerant.map(p => (
              <Link key={p.slug} href={`/products/${p.slug}`} className="sbr-card">
                <img src={p.images[2] || p.images[0]} alt={p.code} />
                <span>{p.code}</span>
              </Link>
            ))}
          </div>
          <p className="sbr-help">Not sure what you need? <Link href="/products">View our refrigerant guide →</Link></p>
        </div>
      </section>

      <section className="section section-alt section-tight-top">
        <div className="wrap">
          <div className="section-head">
            <div><h2>Best Sellers</h2><p>Professional-grade refrigerants trusted by HVAC technicians.</p></div>
            <Link href="/products" className="link-arrow">View all products →</Link>
          </div>
          <BestSellersCarousel products={PRODUCTS} />
        </div>
      </section>

      <section className="section section-tight-top">
        <div className="wrap">
          <div className="pro-panel">
            <div className="pro-media">
              <img src="/assets/built-for-pros.webp" alt="Refrigerant cylinders palletized in our U.S. warehouse" />
            </div>
            <div className="pro-content">
              <span className="eyebrow">Built for HVAC Professionals</span>
              <h2>Refrigerants You Can Count&nbsp;On.</h2>
              <p>Professional-grade refrigerants and HVAC supplies, fulfilled from our U.S. warehouse with secure packaging and dependable support.</p>
              <div className="pro-features">
                <div className="pro-feature"><span className="pro-feature-icon"><Icon name="pin" /></span><strong>U.S. Warehouse Inventory</strong></div>
                <div className="pro-feature"><span className="pro-feature-icon"><Icon name="box" /></span><strong>Secure Cylinder Packaging</strong></div>
                <div className="pro-feature"><span className="pro-feature-icon"><Icon name="truck" /></span><strong>Reliable Order Fulfillment</strong></div>
                <div className="pro-feature"><span className="pro-feature-icon"><Icon name="headset" /></span><strong>Responsive Customer Support</strong></div>
              </div>
              <div className="pro-cta">
                <Link href="/products" className="btn btn-primary">Shop Refrigerants</Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
