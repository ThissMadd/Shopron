import LegalLayout from '@/components/LegalLayout';

export const metadata = { title: 'Payment Policy — Shopron' };

export default function PaymentPolicyPage(){
  return (
    <LegalLayout>
      <p>At Shopron, we strive to make your shopping experience seamless, secure and flexible. Below you&apos;ll find details about our accepted payment methods, security practices and billing procedures.</p>

      <h2>Accepted Payment Methods</h2>
      <ul>
        <li>Credit/Debit Cards: Visa, Mastercard, American Express, Discover</li>
        <li>Digital Wallets: PayPal, Apple Pay, Google Pay</li>
        <li>Financing Options: Affirm, Shop Pay Installments (for qualifying purchases)</li>
      </ul>
      <p>All payments are processed through secure, encrypted gateways to protect your financial data.</p>

      <h2>Payment Security</h2>
      <p>Every transaction is encrypted with SSL technology to keep your personal and payment details confidential. We do not store complete payment information on our servers — our payment processors are PCI-DSS compliant and regularly audited.</p>

      <h2>Currency</h2>
      <p>All prices and transactions are processed in USD. If your bank account uses another currency, your provider will convert the amount at their current exchange rate. Shopron is not responsible for currency conversion fees charged by your bank or card issuer.</p>

      <h2>Payment Authorization</h2>
      <p>By placing an order, you authorize Shopron (or our third-party processors) to charge your selected payment method for the full order amount. If you opt into a subscription or installment plan, you authorize recurring charges as agreed during checkout until you cancel.</p>

      <h2>Order Confirmation</h2>
      <p>Once your payment is successfully processed, you&apos;ll receive an email confirmation with your order details. If you don&apos;t receive confirmation within 24 hours, check your spam folder or contact our support team.</p>

      <h2>Payment Issues</h2>
      <p>If you encounter a payment problem: double-check your card details or digital wallet login, ensure sufficient funds are available, or contact your bank or payment provider if the issue continues.</p>

      <h2>Pricing &amp; Taxes</h2>
      <p>All prices are listed in USD and may change without prior notice. If we discover a pricing error after you&apos;ve placed an order, we&apos;ll notify you to reconfirm or cancel — if we&apos;re unable to reach you, the order may be automatically canceled. Sales tax is calculated and applied where required by state and local laws. We do not ship internationally at this time.</p>

      <h2>Pre-Authorization Holds</h2>
      <p>Your bank or card provider may place a temporary authorization hold when you place an order. This is not a charge, but a hold to verify funds, and typically clears within 3–5 business days if the order is canceled or modified.</p>

      <h2>Billing Disputes</h2>
      <p>If you suspect an error or unauthorized charge, contact us within 30 days of the transaction and we&apos;ll investigate and resolve the issue promptly.</p>

      <h2>Contact Us</h2>
      <p>Have questions or concerns about payments?<br />
      Business Name: Shopron<br />
      Phone: +1 888-556-2111<br />
      Email: support@shopron.shop<br />
      Address: 6890 Distribution Dr, Beltsville, MD 20705, United States<br />
      Customer Service Hours: Monday – Friday, 9:00 AM to 5:00 PM</p>
    </LegalLayout>
  );
}
