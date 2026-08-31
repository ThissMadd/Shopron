'use client';

import Link from 'next/link';
import Icon from './Icon';
import PaymentIcons from './PaymentIcons';
import { useLocale } from '@/context/LocaleContext';

export default function Footer(){
  const year = new Date().getFullYear();
  const { t } = useLocale();
  return (
    <footer className="site-footer">
      <div className="wrap">
        <div className="footer-top">
          <div className="footer-brand">
            <Link href="/" className="logo">SH<span className="dot">◉</span>PRON</Link>
            <p>{t('footer.tagline')}</p>
          </div>
          <div className="footer-col">
            <h4>{t('footer.policies')}</h4>
            <ul>
              <li><Link href="/policies/privacy-policy">{t('footer.privacy')}</Link></li>
              <li><Link href="/policies/refund-policy">{t('footer.refund')}</Link></li>
              <li><Link href="/policies/shipping-policy">{t('footer.shippingPolicy')}</Link></li>
              <li><Link href="/policies/terms-of-service">{t('footer.terms')}</Link></li>
              <li><Link href="/policies/payment-policy">{t('footer.payment')}</Link></li>
              <li><Link href="/policies/disclaimer">{t('footer.disclaimer')}</Link></li>
            </ul>
          </div>
          <div className="footer-col">
            <h4>{t('footer.shoppingHelp')}</h4>
            <ul>
              <li><Link href="/care-instructions">{t('footer.care')}</Link></li>
              <li><Link href="/contact">{t('footer.contact')}</Link></li>
              <li><Link href="/faq">{t('footer.faq')}</Link></li>
              <li><Link href="/track-order">{t('footer.track')}</Link></li>
              <li><Link href="/about">{t('footer.about')}</Link></li>
            </ul>
          </div>
          <div className="footer-col">
            <h4>Shopron</h4>
            <ul className="footer-contact">
              <li><Icon name="pin" /><span>6890 Distribution Dr, Beltsville, MD 20705, United States</span></li>
              <li><Icon name="phone" /><span>+1 888-556-2111</span></li>
              <li><Icon name="mail" /><span>support@shopron.shop</span></li>
              <li><Icon name="clock" /><span>{t('footer.hours')}</span></li>
            </ul>
          </div>
        </div>
        <div className="footer-bottom">
          <span>{t('footer.rights', year)}</span>
          <PaymentIcons />
        </div>
      </div>
    </footer>
  );
}
