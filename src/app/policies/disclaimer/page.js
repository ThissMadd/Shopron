import LegalLayout from '@/components/LegalLayout';

export const metadata = { title: 'Disclaimer — Shopron' };

export default function DisclaimerPage(){
  return (
    <LegalLayout>
      <p>Please read this disclaimer carefully before using our website or purchasing products from Shopron. By accessing our website and/or placing an order, you acknowledge that you have read, understood and agreed to the terms below.</p>

      <h2>1. General Information</h2>
      <p>Information provided on the Shopron website (shopron.com) is intended for general informational purposes only. While we strive to keep content accurate and up to date, Shopron makes no representations or warranties, express or implied, regarding the completeness, accuracy, reliability or availability of the website or any information, products or services. Any reliance you place on such information is strictly at your own risk.</p>

      <h2>2. Product Information</h2>
      <p>We make every effort to present our products accurately, including descriptions and specifications. However:</p>
      <ul>
        <li><strong>Color/Finish Accuracy:</strong> actual cylinder color or brand may vary by manufacturer batch, and screen display settings may affect how colors appear.</li>
        <li><strong>Availability:</strong> all products are subject to availability and may be changed or discontinued without notice.</li>
      </ul>

      <h2>3. Limitation of Liability</h2>
      <p>In no event shall Shopron or its owners, employees, affiliates, partners or suppliers be liable for any direct, indirect, incidental, consequential, special or punitive damages — including loss of profits or data, or issues arising from unauthorized access, website interruptions, or exposure to harmful code — arising from use of our services, even if advised of the possibility of such damages. You use our services at your own risk.</p>

      <h2>4. External Links</h2>
      <p>Our website may contain links to third-party websites. These sites are not controlled or maintained by Shopron, and we are not responsible for their content, policies or practices. Inclusion of a link does not imply endorsement.</p>

      <h2>5. Governing Law</h2>
      <p>This disclaimer and your use of our website are governed and interpreted in accordance with the laws of the United States, without regard to conflict of law principles.</p>

      <h2>6. Changes to This Disclaimer</h2>
      <p>Shopron reserves the right to update this disclaimer at any time without prior notice. Continued use of the website after changes are posted signifies acceptance of the revised terms.</p>

      <h2>7. Contact Us</h2>
      <p>If you have any questions or concerns about this disclaimer, please contact us:<br />
      Phone: +1 888-556-2111<br />
      Email: support@shopron.shop<br />
      Business Address: Shopron, 6890 Distribution Dr, Beltsville, MD 20705, United States</p>
    </LegalLayout>
  );
}
