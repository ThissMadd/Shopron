'use client';

import Link from 'next/link';
import ProductMedia from './ProductMedia';
import { money, tagBadgeClass } from '@/lib/format';

export default function ProductCard({ product }){
  const save = product.compareAt ? product.compareAt - product.price : null;
  const badges = [...product.tags];
  if(save) badges.unshift(`Save ${money(save)}`);

  return (
    <div className="card-product no-actions">
      <Link href={`/products/${product.slug}`} className="card-product-link">
        <div className="card-media">
          <div className="badge-row">
            {badges.slice(0, 2).map(b => (
              <span key={b} className={`badge ${b.startsWith('Save') ? 'badge-sale' : tagBadgeClass(b)}`}>{b}</span>
            ))}
          </div>
          <ProductMedia product={product} />
        </div>
        <div className="card-body">
          <span className="card-title">{product.title.replace(/ — .*/, '')}</span>
          <div className="card-price">
            {product.compareAt ? <span className="price-was">{money(product.compareAt)} USD</span> : null}
            <span className="price-now">{money(product.price)} USD</span>
          </div>
        </div>
      </Link>
    </div>
  );
}
