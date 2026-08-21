import LegalLayout from '@/components/LegalLayout';

export const metadata = { title: 'Refund Policy — Shopron' };

export default function RefundPolicyPage(){
  return (
    <LegalLayout>
      <h2>Eligibility for Returns</h2>
      <ul>
        <li>Items must be returned in their original condition and packaging, with all accessories included.</li>
        <li>Return requests must be initiated within <strong>30 days</strong> of receiving your item.</li>
        <li>Items showing signs of wear, modification, or damage not caused by shipping may not be eligible for return.</li>
      </ul>

      <h2>Return Shipping</h2>
      <p>If the item is defective, damaged on arrival, or not as described, we cover the return shipping cost. For all other reasons (e.g. change of mind), the customer is responsible for return shipping.</p>

      <h2>Exchanges</h2>
      <p>The item must be in its original condition, with all accessories and packaging intact. Exchanges are processed for the same item or an item of equal or lesser value, depending on availability. If the requested item is out of stock, we&apos;ll offer a full refund or a different item of equal value.</p>
      <p>If the exchange is due to our error (wrong item, shipping damage, or defect), we cover shipping both ways. If it&apos;s due to personal preference, the customer is responsible for shipping costs.</p>

      <h2>Return Shipping Address</h2>
      <p>Please send all returns to:<br /><strong>Shopron Returns Department</strong><br />6890 Distribution Dr, Beltsville, MD 20705, United States</p>

      <h2>Packaging Requirements</h2>
      <ul>
        <li>Use the original product packaging whenever possible</li>
        <li>If original packaging is unavailable, use a sturdy box with appropriate protective materials</li>
        <li>Ensure items are well-protected against damage during transit and secure any loose parts</li>
        <li>Remove or cover any previous shipping labels</li>
      </ul>

      <h2>Return Tracking</h2>
      <p>We recommend using a trackable shipping method and keeping your tracking information until your return is processed, in case of shipping delays.</p>

      <h2>Refund Options</h2>
      <p>A full refund is issued to your original payment method once the item is received and inspected — typically within <strong>5–7 business days</strong>. If the item was returned due to damage or authenticity issues, we also refund the original shipping cost.</p>

      <h2>How to Initiate a Return</h2>
      <p>Contact us via:<br />
      Phone: +1 888-556-2111<br />
      Email: support@shopron.shop<br />
      Include your order number, reason for return, and clear photos if the item was damaged or incorrect. We respond within 1 business day with return instructions and a return shipping label, if applicable.</p>
    </LegalLayout>
  );
}
