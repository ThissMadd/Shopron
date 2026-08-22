'use client';

import Link from 'next/link';
import { findProduct } from '@/data/products';
import ProductMedia from '@/components/ProductMedia';
import { money } from '@/lib/format';
import { useCart } from '@/context/CartContext';
import { paymentLinkFor } from '@/data/paymentLinks';
import { trackPixel } from '@/lib/pixel';

export default function CartView(){
  const { cart, removeFromCart, setQty } = useCart();

  if(!cart.length){
    return (
      <>
        <div className="page-hero" style={{ padding: '40px 0 46px' }}>
          <div className="wrap"><h1 style={{ fontSize: '1.8rem' }}>Your Cart</h1></div>
        </div>
        <div className="wrap">
          <div className="cart-layout">
            <div className="cart-empty" style={{ gridColumn: '1/-1' }}>
              <p style={{ fontSize: '1.1rem', fontWeight: 700, color: 'var(--text)' }}>Your cart is empty.</p>
              <p>Browse our certified refrigerants and add a cylinder to get started.</p>
              <Link href="/products" className="btn btn-primary">Shop All Refrigerants</Link>
            </div>
          </div>
        </div>
      </>
    );
  }

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

  function handleCheckout(){
    trackPixel('InitiateCheckout', {
      content_ids: cartLines.map(l => l.p.slug),
      value: subtotal,
      currency: 'USD',
      num_items: totalQty
    });
    const link = paymentLinkFor(totalQty);
    if(link){
      window.location.href = link;
      return;
    }
    alert('This is a demo storefront — checkout is not wired to a payment processor yet.');
  }

  const lines = cartLines.map(({ item, p, lineTotal }) => {
    return (
      <div className="cart-line" key={item.slug}>
        <ProductMedia product={p} />
        <div>
          <Link href={`/products/${p.slug}`} style={{ fontWeight: 700 }}>{p.title}</Link>
          <div style={{ color: 'var(--muted)', fontSize: '.85rem', marginTop: 4 }}>
            {item.lineTotal != null ? 'Bulk pricing applied' : `${money(p.price)} each`}
          </div>
          <button className="rm" onClick={() => removeFromCart(p.slug)}>Remove</button>
        </div>
        <div className="qty-box" style={{ height: 40 }}>
          <button type="button" onClick={() => setQty(p.slug, item.qty - 1)}>–</button>
          <input type="text" readOnly value={item.qty} />
          <button type="button" onClick={() => setQty(p.slug, item.qty + 1)}>+</button>
        </div>
        <div style={{ fontWeight: 700, textAlign: 'right', minWidth: 80 }}>{money(lineTotal)}</div>
      </div>
    );
  });

  return (
    <>
      <div className="page-hero" style={{ padding: '40px 0 46px' }}>
        <div className="wrap"><h1 style={{ fontSize: '1.8rem' }}>Your Cart</h1></div>
      </div>
      <div className="wrap">
        <div className="cart-layout">
          <div>{lines}</div>
          <div className="summary-card">
            <div className="summary-row"><span>Subtotal</span><span>{money(subtotal)}</span></div>
            <div className="summary-row"><span>Shipping</span><span style={{ color: 'var(--success)', fontWeight: 700 }}>FREE</span></div>
            <div className="summary-row total"><span>Estimated Total</span><span>{money(subtotal)}</span></div>
            <button
              className="btn btn-primary btn-block"
              style={{ marginTop: 16 }}
              onClick={handleCheckout}
            >
              Proceed to Checkout
            </button>
            <Link href="/products" className="btn btn-outline-dark btn-block" style={{ marginTop: 10 }}>Continue Shopping</Link>
          </div>
        </div>
      </div>
    </>
  );
}
