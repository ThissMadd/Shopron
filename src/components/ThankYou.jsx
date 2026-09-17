'use client';

import { useEffect } from 'react';
import Link from 'next/link';
import Icon from './Icon';
import { useCart } from '@/context/CartContext';
import { findProduct } from '@/data/products';
import { trackPixel } from '@/lib/pixel';

export default function ThankYou(){
  const { cart, clearCart } = useCart();

  useEffect(() => {
    const lines = cart
      .map(item => {
        const p = findProduct(item.slug);
        if(!p) return null;
        const lineTotal = item.lineTotal != null ? item.lineTotal : p.price * item.qty;
        return { item, p, lineTotal };
      })
      .filter(Boolean);
    const value = lines.reduce((sum, l) => sum + l.lineTotal, 0);
    const purchaseParams = lines.length
      ? {
          content_ids: lines.map(l => l.p.slug),
          content_type: 'product',
          num_items: lines.reduce((sum, l) => sum + l.item.qty, 0),
          value,
          currency: 'USD'
        }
      : null;

    clearCart();

    if(typeof window.fbq === 'function') trackPixel('Purchase', purchaseParams);
    else {
      const id = setTimeout(() => trackPixel('Purchase', purchaseParams), 800);
      return () => clearTimeout(id);
    }
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
