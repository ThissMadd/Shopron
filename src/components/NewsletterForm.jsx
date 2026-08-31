'use client';

import { useState } from 'react';
import { useLocale } from '@/context/LocaleContext';

export default function NewsletterForm(){
  const [submitted, setSubmitted] = useState(false);
  const { t } = useLocale();
  return (
    <form onSubmit={(e) => { e.preventDefault(); setSubmitted(true); }}>
      <input type="email" required placeholder={t('newsletter.placeholder')} />
      <button className="btn btn-dark" type="submit">{submitted ? t('newsletter.subscribed') : t('newsletter.subscribe')}</button>
    </form>
  );
}
