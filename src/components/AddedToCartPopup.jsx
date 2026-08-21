'use client';

import { useEffect } from 'react';
import Link from 'next/link';
import { findProduct } from '@/data/products';
import ProductMedia from './ProductMedia';
import Icon from './Icon';
import { money } from '@/lib/format';
import { useCart } from '@/context/CartContext';
import { paymentLinkFor } from '@/data/paymentLinks';

export default function AddedToCartPopup(){
  const { cart, cartCount, lastAdded, clearLastAdded } = useCart();

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
    const link = paymentLinkFor(totalQty);
    if(link){
      window.location.href = link;
      return;
    }
    alert('This is a demo storefront — checkout is not wired to a payment processor yet.');
  }

  return (
    <div className="atc-overlay" onClick={clearLastAdded}>
      <div className="atc-popup" onClick={(e) => e.stopPropagation()}>
        <div className="atc-head">
          <span className="atc-confirm"><Icon name="check" /> Item added to your cart</span>
          <button type="button" className="atc-close" onClick={clearLastAdded} aria-label="Close"><Icon name="close" /></button>
        </div>

        <div className="atc-item">
          <ProductMedia product={product} />
          <Link href={`/products/${product.slug}`} onClick={clearLastAdded}>{product.title}</Link>
        </div>

        <Link href="/cart" className="btn btn-outline-dark btn-block" onClick={clearLastAdded}>View cart ({cartCount})</Link>
        <button type="button" className="btn btn-dark btn-block" style={{ marginTop: 10 }} onClick={goCheckout}>
          Check out • {money(subtotal)}
        </button>

        <button type="button" className="atc-continue" onClick={clearLastAdded}>Continue shopping</button>
      </div>
    </div>
  );
}
