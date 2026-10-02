'use client';

import { useMemo } from 'react';
import { WhopElements, Checkout, CheckoutElement } from '@whop/elements-react';
import { getWhopElements } from '@/lib/whopElements';
import { findProduct } from '@/data/products';
import { WHOP_PLAN_ID } from '@/data/whopPlan';
import { useCheckout } from '@/context/CheckoutContext';
import { useCart } from '@/context/CartContext';
import { trackPixel } from '@/lib/pixel';
import Icon from './Icon';

export default function WhopCheckoutModal(){
  const { checkoutCart, closeCheckout } = useCheckout();
  const { clearCart } = useCart();

  const lines = useMemo(() => {
    if(!checkoutCart) return [];
    return checkoutCart
      .map(entry => {
        const p = findProduct(entry.slug);
        if(!p) return null;
        return { slug: p.slug, qty: entry.qty, lineTotal: p.price * entry.qty };
      })
      .filter(Boolean);
  }, [checkoutCart]);

  const totalQty = lines.reduce((sum, l) => sum + l.qty, 0);

  if(!checkoutCart || !totalQty) return null;

  function handleComplete(payload){
    if(payload.result !== 'payment') return;
    trackPixel('Purchase', {
      content_ids: lines.map(l => l.slug),
      content_type: 'product',
      num_items: totalQty,
      value: lines.reduce((sum, l) => sum + l.lineTotal, 0),
      currency: 'USD'
    });
    clearCart();
    closeCheckout();
  }

  return (
    <div className="checkout-modal-overlay" onClick={closeCheckout}>
      <div className="checkout-modal" onClick={(e) => e.stopPropagation()}>
        <div className="checkout-modal-head">
          <span className="checkout-modal-logo">SH<span className="dot">◉</span>PRON</span>
          <span className="checkout-modal-secure"><Icon name="lock" /> Secure Checkout</span>
          <button type="button" className="checkout-modal-close" aria-label="Close checkout" onClick={closeCheckout}>
            <Icon name="close" />
          </button>
        </div>
        <div className="checkout-modal-body">
          <WhopElements elements={getWhopElements()}>
            <Checkout
              plan={WHOP_PLAN_ID}
              quantity={totalQty}
              returnUrl={typeof window !== 'undefined' ? `${window.location.origin}/thank-you` : undefined}
              onComplete={handleComplete}
            >
              <CheckoutElement />
            </Checkout>
          </WhopElements>
        </div>
      </div>
    </div>
  );
}
