'use client';

import { useCallback, useMemo } from 'react';
import { EmbeddedCheckoutProvider, EmbeddedCheckout } from '@stripe/react-stripe-js';
import { useCheckout } from '@/context/CheckoutContext';
import { getStripe } from '@/lib/stripeClient';
import Icon from './Icon';

export default function StripeCheckoutModal(){
  const { checkoutCart, closeCheckout } = useCheckout();

  const fetchClientSecret = useCallback(async () => {
    const res = await fetch('/api/checkout', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ cart: checkoutCart }),
    });
    if(!res.ok) throw new Error('Failed to start checkout');
    const data = await res.json();
    return data.clientSecret;
  }, [checkoutCart]);

  const options = useMemo(() => ({ fetchClientSecret }), [fetchClientSecret]);

  if(!checkoutCart) return null;

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
          <EmbeddedCheckoutProvider stripe={getStripe()} options={options}>
            <EmbeddedCheckout />
          </EmbeddedCheckoutProvider>
        </div>
      </div>
    </div>
  );
}
