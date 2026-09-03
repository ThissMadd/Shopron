'use client';

import { useState } from 'react';
import Link from 'next/link';
import Icon from './Icon';
import StarRow from './StarRow';
import PaymentIcons from './PaymentIcons';
import BulkBox from './BulkBox';
import ShareMenu from './ShareMenu';
import { money, tagBadgeClass } from '@/lib/format';
import { useCart } from '@/context/CartContext';
import { useCheckout } from '@/context/CheckoutContext';
import { trackPixel } from '@/lib/pixel';
import { useLocale } from '@/context/LocaleContext';

export default function ProductPurchasePanel({ product }){
  const { addToCart } = useCart();
  const { openCheckout } = useCheckout();
  const { t } = useLocale();
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
    trackPixel('AddToCart', {
      content_ids: [product.slug],
      content_name: product.title,
      content_type: 'product',
      value: product.price * qty,
      currency: 'USD'
    });
    setAdded(true);
    setTimeout(() => setAdded(false), 1400);
  }

  function handleBuyNow(){
    trackPixel('InitiateCheckout', {
      content_ids: [product.slug],
      content_name: product.title,
      value: product.price * qty,
      currency: 'USD',
      num_items: qty
    });
    openCheckout([{ slug: product.slug, qty }]);
  }

  return (
    <div>
      <span className="pd-code">SHOPRON</span>
      <h1 className="pd-title">{product.title}</h1>

      <div className="pd-rating">
        <StarRow rating={avgRating} />
        {reviews.length
          ? <a href="#reviews" className="pd-rating-count" onClick={scrollToReviews}>{t('purchase.review', reviews.length)}</a>
          : <a href="#reviews" className="pd-rating-count" onClick={scrollToReviews}>{t('purchase.beFirstReview')}</a>}
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
        {product.compareAt ? <span className="save-pill">{t('purchase.save', money(product.compareAt - product.price))}</span> : null}
      </div>

      <div className="pd-trust-lines">
        <div><Link href="/policies/shipping-policy" className="pd-shipping-link">{t('purchase.shipping')}</Link> <span className="pd-shipping-note">{t('purchase.shippingNote')}</span></div>
        <div className="pd-protection"><Icon name="shield" /> {t('purchase.packageProtection')} <strong>XCOTTON<sup>®</sup></strong></div>
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
          {added ? t('purchase.added') : t('purchase.addToCart')}
        </button>
      </div>
      <button className="btn btn-dark btn-block" onClick={handleBuyNow}>{t('purchase.buyNow')}</button>

      {product.bulkPricing ? <BulkBox product={product} /> : null}

      <div className="accepted-payments">
        <span>{t('purchase.acceptedPayments')}</span>
        <PaymentIcons />
        <div className="secure-checkout"><Icon name="lock" /><span>{t('purchase.secureCheckout')} <strong>Stripe</strong></span></div>
      </div>

      <div className="trust-mini">
        <div><Icon name="truck" /> {t('purchase.freeShipping')}</div>
        <div><Icon name="shield" /> {t('purchase.certified')}</div>
        <div><Icon name="check" /> {t('purchase.returns')}</div>
      </div>

      <ShareMenu title={product.title} />
    </div>
  );
}
