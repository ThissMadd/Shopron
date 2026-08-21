'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import Icon from './Icon';
import StarRow from './StarRow';
import PaymentIcons from './PaymentIcons';
import BulkBox from './BulkBox';
import ShareMenu from './ShareMenu';
import { money, tagBadgeClass } from '@/lib/format';
import { useCart } from '@/context/CartContext';
import { paymentLinkFor } from '@/data/paymentLinks';

export default function ProductPurchasePanel({ product }){
  const { addToCart } = useCart();
  const router = useRouter();
  const [qty, setQty] = useState(1);
  const [added, setAdded] = useState(false);

  const badges = [...product.tags];
  const reviews = product.details?.reviews || [];
  const avgRating = reviews.length ? reviews.reduce((sum, r) => sum + r.rating, 0) / reviews.length : 0;

  function scrollToReviews(e){
    e.preventDefault();
    document.getElementById('reviews')?.scrollIntoView({ behavior: 'smooth' });
  }

  function handleAddToCart(){
    addToCart(product.slug, qty);
    setAdded(true);
    setTimeout(() => setAdded(false), 1400);
  }

  function handleBuyNow(){
    const link = paymentLinkFor(qty);
    if(link){
      window.location.href = link;
      return;
    }
    addToCart(product.slug, qty);
    router.push('/cart');
  }

  return (
    <div>
      <span className="pd-code">SHOPRON</span>
      <h1 className="pd-title">{product.title}</h1>

      <div className="pd-rating">
        <StarRow rating={avgRating} />
        {reviews.length
          ? <a href="#reviews" className="pd-rating-count" onClick={scrollToReviews}>{reviews.length} review{reviews.length !== 1 ? 's' : ''}</a>
          : <a href="#reviews" className="pd-rating-count" onClick={scrollToReviews}>Be the first to review</a>}
      </div>

      {badges.length ? (
        <div className="pd-tags">
          {badges.map(b => (
            <span key={b} className={`badge ${b.startsWith('Save') ? 'badge-sale' : tagBadgeClass(b)}`}>{b}</span>
          ))}
        </div>
      ) : null}

      <div className="pd-price">
        {product.compareAt ? <span className="price-was">{money(product.compareAt)} USD</span> : null}
        <span className={`price-now ${product.compareAt ? 'on-sale' : ''}`}>{money(product.price)} USD</span>
        {product.compareAt ? <span className="save-pill">Save {money(product.compareAt - product.price)}</span> : null}
      </div>

      <div className="pd-trust-lines">
        <div><Link href="/policies/shipping-policy" className="pd-shipping-link">Shipping</Link> <span className="pd-shipping-note">calculated at checkout.</span></div>
        <div className="pd-protection"><Icon name="shield" /> Package protection powered by <strong>XCOTTON<sup>®</sup></strong></div>
      </div>

      <p className="pd-intro">{product.intro}</p>
      {product.note ? (
        <div className={`pd-note ${product.note.type}`}>
          {product.note.type === 'warning' ? '⚠️ ' : 'ℹ️ '}{product.note.text}
        </div>
      ) : null}

      <div className="qty-row">
        <div className="qty-box">
          <button type="button" onClick={() => setQty(q => Math.max(1, q - 1))}>–</button>
          <input type="text" value={qty} readOnly />
          <button type="button" onClick={() => setQty(q => q + 1)}>+</button>
        </div>
        <button className="btn btn-primary btn-block" style={{ flex: 1 }} onClick={handleAddToCart}>
          {added ? 'Added ✓' : 'Add to Cart'}
        </button>
      </div>
      <button className="btn btn-dark btn-block" onClick={handleBuyNow}>Buy Now</button>

      {product.bulkPricing ? <BulkBox product={product} /> : null}

      <div className="accepted-payments">
        <span>Accepted payments</span>
        <PaymentIcons />
        <div className="secure-checkout"><Icon name="lock" /><span>Secure checkout powered by <strong>Stripe</strong></span></div>
      </div>

      <div className="trust-mini">
        <div><Icon name="truck" /> Free U.S. shipping</div>
        <div><Icon name="shield" /> AHRI-700 certified</div>
        <div><Icon name="check" /> 30-day returns</div>
      </div>

      <ShareMenu title={product.title} />
    </div>
  );
}
