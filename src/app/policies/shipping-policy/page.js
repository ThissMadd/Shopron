import Link from 'next/link';
import LegalLayout from '@/components/LegalLayout';

export const metadata = { title: 'Shipping Policy — Shopron' };

export default function ShippingPolicyPage(){
  return (
    <LegalLayout>
      <p>At Shopron, we aim to deliver your refrigerants safely and promptly. Please review our shipping policy below for full details on our delivery process.</p>

      <h2>Delivery Times</h2>
      <ul>
        <li>Shipping Carriers: USPS or FedEx</li>
        <li>Order Fulfillment: within 1–2 business days</li>
        <li>Delivery Time (USA): estimated 3–5 business days</li>
        <li>We currently ship only within the United States</li>
      </ul>

      <h2>Order Processing Schedule</h2>
      <p>Orders are processed according to the following schedule (Greenwich Mean Time – GMT):</p>
      <ul>
        <li>Orders placed before 2:00 PM GMT: begin processing the same business day</li>
        <li>Orders placed after 2:00 PM GMT: begin processing the next business day</li>
        <li>Orders placed on Sundays or U.S. federal holidays: begin processing the next business day</li>
      </ul>

      <h2>Handling Time</h2>
      <p>After confirming your order, our team carefully prepares and packages your items for shipment. Typical handling time is 1–2 business days, and orders are fulfilled Monday through Saturday.</p>

      <h2>Transit Time</h2>
      <p>Once shipped, your order is in transit for approximately 2–4 business days, depending on your location and carrier conditions. Transit time starts after your package leaves our facility.</p>

      <h2>Tracking Your Order</h2>
      <p>You&apos;ll receive a confirmation email with your tracking number once your order ships. You can track your shipment anytime via our <Link href="/track-order" style={{ color: 'var(--ice-2)', fontWeight: 700 }}>Track Your Order</Link> page.</p>

      <h2>Need Help?</h2>
      <p>If you have questions about your shipment, our customer support team is here to assist:<br />
      Phone: +1 888-556-2111<br />
      Email: support@shopron.shop<br />
      Address: 6890 Distribution Dr, Beltsville, MD 20705, United States</p>
    </LegalLayout>
  );
}
