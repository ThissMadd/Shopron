'use client';

import ProductCard from './ProductCard';
import { useLocale } from '@/context/LocaleContext';

export default function ProductGrid({ products, className, showAddToCart = true }){
  const { t } = useLocale();
  return (
    <div className={`grid-products ${className || ''}`}>
      {products.length
        ? products.map(p => <ProductCard key={p.slug} product={p} showAddToCart={showAddToCart} />)
        : <p style={{ color: 'var(--muted)', gridColumn: '1/-1', textAlign: 'center', padding: '40px 0' }}>{t('browser.noMatch')}</p>}
    </div>
  );
}
