import Link from 'next/link';
import Icon from './Icon';
import PaymentIcons from './PaymentIcons';

export default function Footer(){
  const year = new Date().getFullYear();
  return (
    <footer className="site-footer">
      <div className="wrap">
        <div className="footer-top">
          <div className="footer-brand">
            <Link href="/" className="logo">SH<span className="dot">◉</span>PRON</Link>
            <p>America&apos;s go-to source for certified refrigerants — fast, safe and affordable. Bulk supply, rapid shipping and EPA-compliant standards trusted by technicians, distributors and businesses across the U.S.</p>
          </div>
          <div className="footer-col">
            <h4>Policies</h4>
            <ul>
              <li><Link href="/policies/privacy-policy">Privacy Policy</Link></li>
              <li><Link href="/policies/refund-policy">Refund Policy</Link></li>
              <li><Link href="/policies/shipping-policy">Shipping Policy</Link></li>
              <li><Link href="/policies/terms-of-service">Terms of Service</Link></li>
              <li><Link href="/policies/payment-policy">Payment Policy</Link></li>
              <li><Link href="/policies/disclaimer">Disclaimer</Link></li>
            </ul>
          </div>
          <div className="footer-col">
            <h4>Shopping Help</h4>
            <ul>
              <li><Link href="/care-instructions">Care &amp; Instructions</Link></li>
              <li><Link href="/contact">Contact Us</Link></li>
              <li><Link href="/faq">FAQ</Link></li>
              <li><Link href="/track-order">Track Your Order</Link></li>
              <li><Link href="/about">About Us</Link></li>
            </ul>
          </div>
          <div className="footer-col">
            <h4>Shopron</h4>
            <ul className="footer-contact">
              <li><Icon name="pin" /><span>6890 Distribution Dr, Beltsville, MD 20705, United States</span></li>
              <li><Icon name="phone" /><span>+1 888-556-2111</span></li>
              <li><Icon name="mail" /><span>support@shopron.shop</span></li>
              <li><Icon name="clock" /><span>Mon–Fri, 9:00 AM–5:00 PM</span></li>
            </ul>
          </div>
        </div>
        <div className="footer-bottom">
          <span>© {year} Shopron. All rights reserved.</span>
          <PaymentIcons />
        </div>
      </div>
    </footer>
  );
}
