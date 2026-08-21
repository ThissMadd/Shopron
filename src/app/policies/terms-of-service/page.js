import Link from 'next/link';
import LegalLayout from '@/components/LegalLayout';

export const metadata = { title: 'Terms of Service — Shopron' };

export default function TermsOfServicePage(){
  return (
    <LegalLayout>
      <h2>1. Introduction</h2>
      <p>Welcome to Shopron (&quot;Company&quot;, &quot;we&quot;, &quot;our&quot;, &quot;us&quot;). These Terms of Service govern your use of our website located at www.shopron.com (the &quot;Service&quot;). Your agreement with us includes these Terms and our Privacy Policy (the &quot;Agreements&quot;). If you do not agree with the Agreements, you may not use the Service — email <strong>support@shopron.shop</strong> and we&apos;ll try to find a solution.</p>

      <h2>2. Communications</h2>
      <p>By using our Service, you agree to receive newsletters, marketing or promotional materials. You may opt out at any time via the unsubscribe link or by emailing support@shopron.shop.</p>

      <h2>3. Purchases</h2>
      <p>To purchase a product through the Service, you may be asked to supply information relevant to your purchase, including payment details, billing address and shipping information. You represent that you have the legal right to use any payment method submitted and that the information you supply is true, correct and complete. We reserve the right to refuse or cancel an order for reasons including product availability, pricing or description errors, or suspected fraud.</p>

      <h2>4. Refunds</h2>
      <p>We issue refunds within 30 days of purchase per our <Link href="/policies/refund-policy" style={{ color: 'var(--ice-2)', fontWeight: 700 }}>Refund Policy</Link>. We will answer any customer complaints within 30 days.</p>

      <h2>5. Content</h2>
      <p>Content found on or through this Service is the property of Shopron or used with permission. You may not distribute, modify, reproduce or use said Content for commercial purposes without express advance written permission.</p>

      <h2>6. Prohibited Uses</h2>
      <p>You agree not to use the Service to violate any law, transmit spam or malicious code, impersonate any person or entity, infringe on the rights of others, interfere with the proper working of the Service, or attempt unauthorized access to any part of the Service or its infrastructure.</p>

      <h2>7. No Use By Minors</h2>
      <p>The Service is intended only for individuals at least eighteen (18) years old. By using the Service, you represent that you meet this requirement.</p>

      <h2>8. Accounts</h2>
      <p>When you create an account, you guarantee the information you provide is accurate and current, and you are responsible for maintaining the confidentiality of your account and password.</p>

      <h2>9. Intellectual Property</h2>
      <p>The Service and its original content (excluding user-submitted content), features and functionality are and remain the exclusive property of Shopron and its licensors. Our trademarks may not be used without prior written consent.</p>

      <h2>10. Copyright Policy &amp; DMCA</h2>
      <p>We respect the intellectual property rights of others. If you believe content on the Service infringes your copyright, email <strong>support@shopron.shop</strong> with the subject &quot;Copyright Infringement&quot; and include: a signature of the rights holder or authorized agent; a description of the copyrighted work and its location; the URL of the allegedly infringing material; your contact details; and a statement of good-faith belief made under penalty of perjury.</p>

      <h2>11. Links to Other Websites</h2>
      <p>Our Service may contain links to third-party websites not owned or controlled by Shopron. We assume no responsibility for their content, privacy policies or practices, and encourage you to review the terms of any site you visit.</p>

      <h2>12. Limitation of Liability</h2>
      <p>Except as prohibited by law, Shopron and its officers, directors, employees and agents are not liable for any indirect, incidental, or consequential damages arising from your use of the Service. If liability is found, it is limited to the amount paid for the product or service in question.</p>

      <h2>13. Governing Law</h2>
      <p>These Terms are governed by the laws of the United States, without regard to conflict of law provisions. If any provision is held invalid, the remaining provisions remain in full effect.</p>

      <h2>14. Changes to Service &amp; Terms</h2>
      <p>We may amend these Terms at any time by posting the amended terms on this page. Continued use of the Service after changes become effective constitutes acceptance of the revised Terms.</p>

      <h2>15. Contact Us</h2>
      <p>If you have any questions about these Terms of Service, please contact us:<br />
      Phone: +1 888-556-2111<br />
      Email: support@shopron.shop<br />
      Address: 6890 Distribution Dr, Beltsville, MD 20705, United States</p>
    </LegalLayout>
  );
}
