import Link from 'next/link';
import Accordion from '@/components/Accordion';

export const metadata = { title: 'FAQ — Shopron' };

const SHIPPING_FAQ = [
  { q: 'How much does shipping cost?', a: 'We offer free shipping on all orders within the United States.' },
  { q: 'How long will it take to receive my order?', a: 'Orders typically ship within 1–2 business days and arrive within 3–5 business days for domestic U.S. deliveries.' },
  { q: 'Do you ship internationally?', a: 'No, we currently only ship within the USA.' },
  { q: 'How can I track my order?', a: "You'll receive a tracking number via email once your order ships. You can also check your order status on our <a href='/track-order' style='color:var(--ice-2); font-weight:700;'>Track Your Order</a> page." },
  { q: "Can I modify or cancel my order after it's been placed?", a: 'You may request modifications or cancellations by contacting our customer service team after placing your order. Once an order begins processing, we cannot guarantee changes can be made.' }
];

const RETURNS_FAQ = [
  { q: 'What is your return policy?', a: 'We accept returns within 30 days of receiving your item. Items must be in their original condition with all packaging and accessories included.' },
  { q: 'How do I initiate a return?', a: "Contact our customer service team via email at support@shopron.shop or by phone at +1 888-556-2111 with your order number and reason for return. We'll provide return instructions." },
  { q: 'Who pays for return shipping?', a: "If the return is due to our error (damaged item, wrong item shipped, etc.), we'll cover return shipping costs. For returns due to change of mind or personal preference, the customer is responsible for return shipping." },
  { q: 'How long does it take to process a refund?', a: 'Once we receive and inspect your return, refunds are typically processed within 5–7 business days back to your original payment method.' }
];

const PAYMENTS_FAQ = [
  { q: 'What payment methods do you accept?', a: 'We accept major credit and debit cards, along with popular digital wallets. All payments are processed securely through PCI-DSS compliant third-party processors.' },
  { q: 'Is my payment information secure?', a: 'Yes. We do not store your payment card details — all payment information is provided directly to our secure, PCI-DSS compliant payment processors.' },
  { q: 'Do you charge sales tax?', a: 'Yes, we collect sales tax according to applicable state and local tax laws. The exact amount is calculated at checkout based on your shipping address.' },
  { q: 'How do I contact customer support?', a: 'Email support@shopron.shop or call +1 888-556-2111, Monday to Friday, 9:00 AM – 5:00 PM.' }
];

const headingStyle = { textAlign: 'center', fontSize: '1.1rem', textTransform: 'uppercase', letterSpacing: '.06em', color: 'var(--muted)', marginBottom: 28 };

export default function FaqPage(){
  return (
    <>
      <div className="page-hero">
        <div className="wrap">
          <h1>Frequently Asked Questions</h1>
          <p>Shipping, returns, payments and order support — answered.</p>
        </div>
      </div>

      <section className="section">
        <div className="wrap">
          <h2 style={headingStyle}>Shipping &amp; Orders</h2>
          <Accordion items={SHIPPING_FAQ} />

          <h2 style={{ ...headingStyle, margin: '56px 0 28px' }}>Returns &amp; Refunds</h2>
          <Accordion items={RETURNS_FAQ} />

          <h2 style={{ ...headingStyle, margin: '56px 0 28px' }}>Payments</h2>
          <Accordion items={PAYMENTS_FAQ} />

          <div className="info-card" style={{ maxWidth: 760, margin: '56px auto 0', textAlign: 'center' }}>
            <p style={{ marginBottom: 14 }}>Can&apos;t find your answer? Our support team responds within 1 business day.</p>
            <Link href="/contact" className="btn btn-primary">Contact Support</Link>
          </div>
        </div>
      </section>
    </>
  );
}
