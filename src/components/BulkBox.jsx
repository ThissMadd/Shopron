'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { money, bulkTierTotal } from '@/lib/format';
import { useCart } from '@/context/CartContext';
import { trackPixel } from '@/lib/pixel';
import { useLocale } from '@/context/LocaleContext';

const BULK_ICON = '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 2 4 5v6c0 5.5 3.4 9 8 11 4.6-2 8-5.5 8-11V5Z"/><path d="M9 12h6M12 9v6"/></svg>';

function tierLabel(t, tier){
  return tier.type === 'flat'
    ? t('bulk.flat', tier.qty, money(tier.amount))
    : t('bulk.percent', tier.qty, tier.amount);
}

export default function BulkBox({ product }){
  const { addToCart, clearLastAdded } = useCart();
  const router = useRouter();
  const [addedIndex, setAddedIndex] = useState(null);
  const { t } = useLocale();

  function handleAdd(tier, i){
    const total = bulkTierTotal(product, tier);
    addToCart(product.slug, tier.qty, total);
    trackPixel('AddToCart', {
      content_ids: [product.slug],
      content_name: product.title,
      content_type: 'product',
      value: total,
      currency: 'USD'
    });
    clearLastAdded();
    setAddedIndex(i);
    router.push('/cart');
  }

  return (
    <div className="bulk-box">
      <div className="bulk-head">
        <div className="bulk-icon" dangerouslySetInnerHTML={{ __html: BULK_ICON }} />
        <div><strong>{t('bulk.heading')}</strong><span>{t('bulk.sub')}</span></div>
      </div>
      <div className="bulk-rows">
        {product.bulkPricing.map((tier, i) => (
          <div className="bulk-row" key={i}>
            <span>{tierLabel(t, tier)}</span>
            <button className="btn btn-primary btn-sm" type="button" onClick={() => handleAdd(tier, i)}>
              {addedIndex === i ? t('bulk.added') : t('bulk.add', tier.qty)}
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
