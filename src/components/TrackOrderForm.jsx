'use client';

import { useState } from 'react';

export default function TrackOrderForm(){
  const [submitted, setSubmitted] = useState(false);

  return (
    <>
      <div className="page-hero">
        <div className="wrap">
          <h1>Track Your Order</h1>
          <p>Enter your order number and email to check your shipment status.</p>
        </div>
      </div>

      <div className="content-narrow">
        <div className="info-card">
          <form onSubmit={(e) => { e.preventDefault(); setSubmitted(true); }}>
            <div className="form-grid">
              <div className="field"><label htmlFor="order-no">Order Number</label><input id="order-no" type="text" required placeholder="e.g. SHP-10456" /></div>
              <div className="field"><label htmlFor="track-email">Email Used at Checkout</label><input id="track-email" type="email" required placeholder="you@company.com" /></div>
            </div>
            <button className="btn btn-dark" type="submit">Track Order</button>
          </form>

          {submitted ? (
            <div style={{ marginTop: 30 }}>
              <div className="track-steps">
                <div className="step done"><div className="dotc" /><span>Order Placed</span></div>
                <div className="step done"><div className="dotc" /><span>Processing</span></div>
                <div className="step done"><div className="dotc" /><span>Shipped</span></div>
                <div className="step"><div className="dotc" /><span>Delivered</span></div>
              </div>
              <div className="track-line" />
              <p style={{ textAlign: 'center', color: 'var(--muted)' }}>Your order is on its way — a tracking number was emailed to you when it shipped. Typical transit time is 2–4 business days once your package leaves our facility.</p>
            </div>
          ) : null}
        </div>

        <div className="info-card" style={{ marginTop: 22 }}>
          <h3 style={{ marginBottom: 12 }}>Shipping timeline</h3>
          <ul className="care-list">
            <li><span className="num">1</span> Orders placed before 2:00 PM (GMT) begin processing the same business day.</li>
            <li><span className="num">2</span> Handling takes 1–2 business days; orders are fulfilled Monday through Saturday.</li>
            <li><span className="num">3</span> Transit typically takes 2–4 business days via USPS or FedEx to U.S. addresses.</li>
          </ul>
        </div>
      </div>
    </>
  );
}
