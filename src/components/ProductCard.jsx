'use client';

import Link from 'next/link';
import ProductMedia from './ProductMedia';
import { money, tagBadgeClass } from '@/lib/format';
import { useCart } from '@/context/CartContext';
import { trackPixel } from '@/lib/pixel';

export default function ProductCard({ product, showAddToCart = true }){
  const { addToCart } = useCart();
  const save = product.compareAt ? product.compareAt - product.price : null;
  const badges = [...product.tags];
  if(save) badges.unshift(`Save ${money(save)}`);

  function handleAdd(e){
    e.preventDefault();
    e.stopPropagation();
    addToCart(product.slug, 1);
    trackPixel('AddToCart', {
      content_ids: [product.slug],
      content_name: product.title,
      content_type: 'product',
      value: product.price,
      currency: 'USD'
    });
  }

  return (
    <div className={`card-product ${showAddToCart ? '' : 'no-actions'}`}>
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
      {showAddToCart ? (
        <div className="card-actions">
          <button type="button" className="btn btn-outline-ice btn-block" onClick={handleAdd}>Add to cart</button>
        </div>
      ) : null}
    </div>
  );
}
