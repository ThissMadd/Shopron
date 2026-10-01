'use client';

import { useEffect, useMemo, useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { WhopElements, Payments } from '@whop/elements-react';
import { getWhopElements } from '@/lib/whopElements';
import { WHOP_ACCOUNT_ID } from '@/data/whopAccount';
import { useCart } from '@/context/CartContext';
import { findProduct } from '@/data/products';
import { money } from '@/lib/format';
import { trackPixel } from '@/lib/pixel';
import Icon from '@/components/Icon';
import CheckoutSummary from './CheckoutSummary';
import CheckoutPaymentsForm from './CheckoutPaymentsForm';

const APPEARANCE = { theme: { appearance: 'light', accentColor: 'cyan' } };

export default function CheckoutPage(){
  const { cart, clearCart } = useCart();
  const router = useRouter();

  const [mounted, setMounted] = useState(false);
  const [summaryOpen, setSummaryOpen] = useState(false);
  const [email, setEmail] = useState({ value: '', complete: false });
  const [address, setAddress] = useState({ complete: false, data: null });
  const [paymentState, setPaymentState] = useState({ complete: false });
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState('');

  useEffect(() => { setMounted(true); }, []);

  const lines = useMemo(() => cart
    .map(item => {
      const p = findProduct(item.slug);
      if(!p) return null;
      const lineTotal = item.lineTotal != null ? item.lineTotal : p.price * item.qty;
      return { item, p, lineTotal };
    })
    .filter(Boolean), [cart]);

  const subtotal = lines.reduce((sum, l) => sum + l.lineTotal, 0);
  const totalQty = lines.reduce((sum, l) => sum + l.item.qty, 0);
  const amount = Math.round(subtotal * 100);

  useEffect(() => {
    if(!lines.length) return;
    trackPixel('InitiateCheckout', {
      content_ids: lines.map(l => l.p.slug),
      value: subtotal,
      currency: 'USD',
      num_items: totalQty
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [mounted]);

  const canSubmit = email.complete && address.complete && paymentState.complete;

  async function handleSubmit(payments, whop){
    if(!canSubmit || submitting || !payments) return;
    setSubmitting(true);
    setError('');

    try {
      const a = address.data || {};
      const fullName = a.name || `${a.first_name || ''} ${a.last_name || ''}`.trim();

      const { confirmationToken } = await payments.createConfirmationToken({
        billingDetails: {
          email: email.value,
          name: fullName,
          phone: a.custom?.phone,
          address: {
            country: a.country,
            line1: a.line1,
            line2: a.line2,
            city: a.city,
            state: a.state,
            postal_code: a.postal_code,
          },
        },
      });

      const res = await fetch('/api/whop/confirm-payment', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          confirmationToken,
          amount,
          currency: 'usd',
          email: email.value,
          items: lines.map(l => ({ slug: l.p.slug, title: l.p.title, qty: l.item.qty })),
        }),
      });
      const data = await res.json();

      if(!res.ok){
        setError(data.error || 'Payment failed. Please try again.');
        setSubmitting(false);
        return;
      }

      if(data.clientSecret && data.status !== 'succeeded'){
        const result = await whop.payments.handleNextAction({
          clientSecret: data.clientSecret,
          returnUrl: `${window.location.origin}/thank-you`,
        });
        if(result.status !== 'succeeded'){
          setError(result.lastPaymentError?.message || 'Payment could not be completed.');
          setSubmitting(false);
          return;
        }
      }

      trackPixel('Purchase', {
        content_ids: lines.map(l => l.p.slug),
        content_type: 'product',
        num_items: totalQty,
        value: subtotal,
        currency: 'USD'
      });
      clearCart();
      router.push('/thank-you');
    } catch(e){
      setError(e?.message || 'Something went wrong. Please try again.');
      setSubmitting(false);
    }
  }

  if(mounted && !cart.length){
    return (
      <div className="checkout-page">
        <header className="checkout-header">
          <Link href="/" className="checkout-logo">SH<span className="dot">◉</span>PRON</Link>
        </header>
        <div className="checkout-empty">
          <p>Your cart is empty.</p>
          <Link href="/products" className="btn btn-primary">Shop All Refrigerants</Link>
        </div>
      </div>
    );
  }

  return (
    <div className="checkout-page">
      <header className="checkout-header">
        <Link href="/cart" className="checkout-return">← Return to cart</Link>
        <Link href="/" className="checkout-logo">SH<span className="dot">◉</span>PRON</Link>
      </header>

      <div className="checkout-mobile-summary">
        <button type="button" className="checkout-summary-toggle" onClick={() => setSummaryOpen(o => !o)}>
          <span><Icon name="chevronDown" className={summaryOpen ? 'rotated' : ''} /> {summaryOpen ? 'Hide' : 'Show'} order summary</span>
          <strong>{money(subtotal)}</strong>
        </button>
        {summaryOpen ? <CheckoutSummary lines={lines} subtotal={subtotal} /> : null}
      </div>

      <div className="checkout-grid">
        <div className="checkout-form-col">
          {mounted ? (
            <WhopElements elements={getWhopElements()} appearance={APPEARANCE}>
              <Payments
                accountId={WHOP_ACCOUNT_ID}
                currency="usd"
                amount={amount}
                returnUrl={`${window.location.origin}/thank-you`}
              >
                <CheckoutPaymentsForm
                  email={email} setEmail={setEmail}
                  address={address} setAddress={setAddress}
                  paymentState={paymentState} setPaymentState={setPaymentState}
                  canSubmit={canSubmit}
                  submitting={submitting}
                  error={error}
                  onSubmit={handleSubmit}
                />
              </Payments>
            </WhopElements>
          ) : null}
        </div>
        <div className="checkout-summary-col">
          <CheckoutSummary lines={lines} subtotal={subtotal} sticky />
        </div>
      </div>
    </div>
  );
}
