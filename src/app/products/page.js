import ProductsBrowser from '@/components/ProductsBrowser';
import Icon from '@/components/Icon';

export const metadata = {
  title: 'All Refrigerants — Shopron',
  description: "Browse Shopron's full catalog of certified refrigerants: R-410A, R-134a, R-404A, R-32, R-22, low-GWP blends and more.",
};

export default async function ProductsPage({ searchParams }){
  const { cat } = await searchParams;

  return (
    <>
      <div className="page-hero">
        <div className="wrap">
          <h1>All Refrigerants</h1>
          <p>Certified, factory-sealed refrigerants for HVAC, automotive and industrial applications — filtered by category, sorted your way.</p>
        </div>
      </div>

      <section className="section">
        <div className="wrap">
          <ProductsBrowser initialCategory={cat || 'all'} />

          <div className="mini-trust-strip">
            <div className="mini-trust-item">
              <span className="mini-trust-icon"><Icon name="pin" /></span>
              <div>
                <strong>U.S. Warehouse</strong>
                <p>Orders ship from our U.S. warehouse for reliable service.</p>
              </div>
            </div>
            <div className="mini-trust-item">
              <span className="mini-trust-icon"><Icon name="clock" /></span>
              <div>
                <strong>Fast Dispatch</strong>
                <p>Orders ship within 24 business hours.</p>
              </div>
            </div>
            <div className="mini-trust-item">
              <span className="mini-trust-icon"><Icon name="lock" /></span>
              <div>
                <strong>Secure Checkout</strong>
                <p>Your payment information is protected by secure checkout.</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
