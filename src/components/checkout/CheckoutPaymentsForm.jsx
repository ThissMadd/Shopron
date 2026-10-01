'use client';

import { EmailElement, AddressElement, PaymentElement, BrandingElement, usePayments, useWhop } from '@whop/elements-react';
import Icon from '@/components/Icon';
import PaymentIcons from '@/components/PaymentIcons';

export default function CheckoutPaymentsForm({
  email, setEmail,
  address, setAddress,
  paymentState, setPaymentState,
  canSubmit, submitting, error,
  onSubmit,
}){
  const payments = usePayments();
  const whop = useWhop();

  function handleClick(){
    onSubmit(payments, whop);
  }

  return (
    <>
      <section className="checkout-section">
        <h2>Contact</h2>
        <div className="checkout-element-frame">
          <EmailElement
            placeholder="you@example.com"
            defaultValue={email.value}
            onChange={({ email: value, complete }) => setEmail({ value, complete })}
          />
        </div>
      </section>

      <section className="checkout-section">
        <h2>Delivery</h2>
        <div className="checkout-element-frame">
          <AddressElement
            mode="shipping"
            name="split"
            line2="always"
            allowedCountries={['US']}
            customFields={[
              { key: 'phone', label: 'Phone number', type: 'phone', position: 'after_address', required: true },
            ]}
            onChange={({ complete, address: value, custom }) => setAddress({ complete, data: { ...value, custom } })}
          />
        </div>
      </section>

      <section className="checkout-section">
        <h2>Shipping Method</h2>
        <div className="checkout-shipping-static">
          <span>Standard Shipping</span>
          <strong>FREE</strong>
        </div>
      </section>

      <section className="checkout-section">
        <h2>Payment</h2>
        <div className="checkout-element-frame">
          <PaymentElement onChange={({ complete }) => setPaymentState({ complete })} />
        </div>
        <BrandingElement />
      </section>

      {error ? <div className="checkout-error">{error}</div> : null}

      <button
        type="button"
        className="checkout-pay-btn"
        disabled={!canSubmit || submitting}
        onClick={handleClick}
      >
        {submitting ? 'Processing…' : 'Pay Now'}
      </button>

      <div className="checkout-trust-row">
        <span><Icon name="lock" /> Secure checkout</span>
        <span><Icon name="check" /> Secure payment</span>
        <span><Icon name="check" /> Easy ordering</span>
      </div>

      <PaymentIcons />
    </>
  );
}
