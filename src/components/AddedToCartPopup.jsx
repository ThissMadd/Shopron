'use client';

import { useEffect } from 'react';
import Link from 'next/link';
import { findProduct } from '@/data/products';
import ProductMedia from './ProductMedia';
import Icon from './Icon';
import { money } from '@/lib/format';
import { useCart } from '@/context/CartContext';
import { useCheckout } from '@/context/CheckoutContext';
import { trackPixel } from '@/lib/pixel';
import { useLocale } from '@/context/LocaleContext';

export default function AddedToCartPopup(){
  const { cart, cartCount, lastAdded, clearLastAdded } = useCart();
  const { openCheckout } = useCheckout();
  const { t } = useLocale();

  useEffect(() => {
    if(!lastAdded) return;
    const id = setTimeout(clearLastAdded, 8000);
    return () => clearTimeout(id);
  }, [lastAdded, clearLastAdded]);

  if(!lastAdded) return null;
  const product = findProduct(lastAdded.slug);
  if(!product) return null;

  const cartLines = cart
    .map(item => {
      const p = findProduct(item.slug);
      if(!p) return null;
      const lineTotal = item.lineTotal != null ? item.lineTotal : p.price * item.qty;
      return { item, p, lineTotal };
    })
    .filter(Boolean);
  const subtotal = cartLines.reduce((sum, l) => sum + l.lineTotal, 0);
  const totalQty = cartLines.reduce((sum, l) => sum + l.item.qty, 0);

  function goCheckout(){
    trackPixel('InitiateCheckout', {
      content_ids: cartLines.map(l => l.p.slug),
      value: subtotal,
      currency: 'USD',
      num_items: totalQty
    });
    clearLastAdded();
    openCheckout(cartLines.map(l => ({ slug: l.p.slug, qty: l.item.qty, lineTotal: l.item.lineTotal })));
  }

  return (
    <div className="atc-overlay" onClick={clearLastAdded}>
      <div className="atc-popup" onClick={(e) => e.stopPropagation()}>
        <div className="atc-head">
          <span className="atc-confirm"><Icon name="check" /> {t('atc.added')}</span>
          <button type="button" className="atc-close" onClick={clearLastAdded} aria-label={t('atc.close')}><Icon name="close" /></button>
        </div>

        <div className="atc-item">
          <ProductMedia product={product} />
          <Link href={`/products/${product.slug}`} onClick={clearLastAdded}>{product.title}</Link>
        </div>

        <Link href="/cart" className="btn btn-outline-dark btn-block" onClick={clearLastAdded}>{t('atc.viewCart', cartCount)}</Link>
        <button type="button" className="btn btn-dark btn-block" style={{ marginTop: 10 }} onClick={goCheckout}>
          {t('atc.checkout', money(subtotal))}
        </button>

        <button type="button" className="atc-continue" onClick={clearLastAdded}>{t('atc.continueShopping')}</button>
      </div>
    </div>
  );
}
