'use client';

import { useEffect, useMemo, useRef, useState } from 'react';
import Link from 'next/link';
import { PRODUCTS } from '@/data/products';
import ProductMedia from './ProductMedia';
import Icon from './Icon';
import { money } from '@/lib/format';

export default function SearchOverlay({ onClose }){
  const [query, setQuery] = useState('');
  const inputRef = useRef(null);

  useEffect(() => {
    inputRef.current?.focus();
    function onKey(e){ if(e.key === 'Escape') onClose(); }
    window.addEventListener('keydown', onKey);
    document.body.style.overflow = 'hidden';
    return () => {
      window.removeEventListener('keydown', onKey);
      document.body.style.overflow = '';
    };
  }, [onClose]);

  const results = useMemo(() => {
    const q = query.trim().toLowerCase();
    if(!q) return [];
    return PRODUCTS.filter(p =>
      p.title.toLowerCase().includes(q) ||
      p.code.toLowerCase().includes(q) ||
      p.size.toLowerCase().includes(q)
    ).slice(0, 8);
  }, [query]);

  return (
    <div className="search-overlay" onClick={onClose}>
      <div className="search-panel" onClick={(e) => e.stopPropagation()}>
        <div className="search-input-row">
          <Icon name="search" />
          <input
            ref={inputRef}
            type="text"
            placeholder="Search for a refrigerant, e.g. R-410A"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
          />
          <button type="button" className="search-close" onClick={onClose} aria-label="Close search"><Icon name="close" /></button>
        </div>

        {query.trim() ? (
          results.length ? (
            <div className="search-results">
              {results.map(p => (
                <Link key={p.slug} href={`/products/${p.slug}`} className="search-result" onClick={onClose}>
                  <ProductMedia product={p} />
                  <div>
                    <span className="search-result-title">{p.title}</span>
                    <span className="search-result-price">{money(p.price)}</span>
                  </div>
                </Link>
              ))}
            </div>
          ) : (
            <p className="search-empty">No products match "{query}".</p>
          )
        ) : (
          <p className="search-empty">Start typing to search our refrigerant catalog.</p>
        )}
      </div>
    </div>
  );
}
