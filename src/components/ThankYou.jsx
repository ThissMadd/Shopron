'use client';

import { useEffect } from 'react';
import Link from 'next/link';
import Icon from './Icon';
import { useCart } from '@/context/CartContext';

export default function ThankYou(){
  const { clearCart } = useCart();

  useEffect(() => {
    clearCart();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      <div className="page-hero" style={{ textAlign: 'center' }}>
        <div className="wrap">
          <div className="ty-icon"><Icon name="check" /></div>
          <h1>Thank you for your order!</h1>
          <p className="ty-lead">Your order has been received and is now being processed. A confirmation email is on its way to your inbox.</p>
        </div>
      </div>

      <div className="content-narrow">
        <div className="info-card">
          <div className="ty-steps">
            <div className="ty-step">
              <span className="ty-step-icon"><Icon name="clock" /></span>
              <div><strong>Dispatch</strong><span>Within 24 business hours</span></div>
            </div>
            <div className="ty-step">
              <span className="ty-step-icon"><Icon name="truck" /></span>
              <div><strong>Delivery</strong><span>Estimated 2–5 business days</span></div>
            </div>
            <div className="ty-step">
              <span className="ty-step-icon"><Icon name="shieldCheck" /></span>
              <div><strong>Tracking</strong><span>Provided by email after dispatch</span></div>
            </div>
          </div>

          <p style={{ textAlign: 'center', color: 'var(--muted)', margin: '26px 0 0' }}>
            Questions about your order? Email <a href="mailto:support@shopron.shop">support@shopron.shop</a>.
          </p>

          <div className="ty-actions">
            <Link href="/track-order" className="btn btn-outline-dark">Track Your Order</Link>
            <Link href="/products" className="btn btn-primary">Continue Shopping</Link>
          </div>
        </div>
      </div>
    </>
  );
}
