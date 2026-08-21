'use client';

import { useMemo, useState } from 'react';
import { useRouter } from 'next/navigation';
import { PRODUCTS, CATEGORIES, hasCategory } from '@/data/products';
import ProductGrid from './ProductGrid';

export default function ProductsBrowser({ initialCategory }){
  const router = useRouter();
  const [activeCat, setActiveCat] = useState(initialCategory || 'all');
  const [sort, setSort] = useState('featured');

  const chips = [{ slug: 'all', label: 'All Refrigerants' }, ...CATEGORIES];

  function selectCat(slug){
    setActiveCat(slug);
    router.replace(slug === 'all' ? '/products' : `/products?cat=${slug}`, { scroll: false });
  }

  const list = useMemo(() => {
    let items = activeCat === 'all' ? [...PRODUCTS] : PRODUCTS.filter(p => hasCategory(p, activeCat));
    if(sort === 'price-asc') items.sort((a, b) => a.price - b.price);
    else if(sort === 'price-desc') items.sort((a, b) => b.price - a.price);
    else if(sort === 'name-asc') items.sort((a, b) => a.title.localeCompare(b.title));
    return items;
  }, [activeCat, sort]);

  return (
    <>
      <div className="chip-row">
        {chips.map(c => (
          <button
            key={c.slug}
            type="button"
            className={`chip ${c.slug === activeCat ? 'active' : ''}`}
            onClick={() => selectCat(c.slug)}
          >
            {c.label}
          </button>
        ))}
      </div>
      <div className="section-head">
        <p style={{ color: 'var(--muted)', margin: 0 }}>{list.length} product{list.length !== 1 ? 's' : ''}</p>
        <select
          className="field"
          style={{ padding: '10px 14px', border: '1px solid var(--border)', borderRadius: 10, fontWeight: 600 }}
          value={sort}
          onChange={(e) => setSort(e.target.value)}
        >
          <option value="featured">Sort: Featured</option>
          <option value="price-asc">Price: Low to High</option>
          <option value="price-desc">Price: High to Low</option>
          <option value="name-asc">Name: A–Z</option>
        </select>
      </div>
      <ProductGrid products={list} />
    </>
  );
}
