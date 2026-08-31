'use client';

import NewsletterForm from './NewsletterForm';
import { useLocale } from '@/context/LocaleContext';

export default function NewsletterSection(){
  const { t } = useLocale();
  return (
    <section className="section" style={{ paddingTop: 0, paddingBottom: 72 }}>
      <div className="wrap">
        <div className="newsletter">
          <div>
            <h3>{t('newsletter.heading')}</h3>
            <p>{t('newsletter.sub')}</p>
          </div>
          <NewsletterForm />
        </div>
      </div>
    </section>
  );
}
