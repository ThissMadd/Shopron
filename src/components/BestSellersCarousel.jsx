'use client';

import { useState } from 'react';
import Link from 'next/link';
import StarRow from './StarRow';
import { useCart } from '@/context/CartContext';
import { money } from '@/lib/format';

const PAGE_SIZE = 4;

function BsCard({ p }){
  const { addToCart } = useCart();
  const reviews = p.details?.reviews || [];
  const avg = reviews.length ? reviews.reduce((s, r) => s + r.rating, 0) / reviews.length : 0;
  const save = p.compareAt ? p.compareAt - p.price : null;

  function handleAdd(e){
    e.preventDefault();
    e.stopPropagation();
    addToCart(p.slug, 1);
  }

  return (
    <div className="bs-card">
      <Link href={`/products/${p.slug}`} className="bs-media">
        <img src={p.images[0]} alt={p.title} loading="lazy" />
        {save ? <span className="bs-badge">Save {money(save)}</span> : null}
      </Link>
      <div className="bs-body">
        <Link href={`/products/${p.slug}`} className="bs-title">{p.title}</Link>
        {reviews.length ? (
          <div className="bs-rating">
            <StarRow rating={avg} />
            <span>{reviews.length} review{reviews.length !== 1 ? 's' : ''}</span>
          </div>
        ) : null}
        <div className="bs-price">
          {p.compareAt ? <span className="bs-was">{money(p.compareAt)} USD</span> : null}
          <span className="bs-now">{money(p.price)} USD</span>
        </div>
      </div>
      <div className="bs-actions">
        <button type="button" className="btn btn-outline-ice btn-block" onClick={handleAdd}>Add to cart</button>
      </div>
    </div>
  );
}

export default function BestSellersCarousel({ products }){
  const [page, setPage] = useState(0);
  const totalPages = Math.max(1, Math.ceil(products.length / PAGE_SIZE));
  const isLastPage = page === totalPages - 1;
  const start = isLastPage ? Math.max(0, products.length - PAGE_SIZE) : page * PAGE_SIZE;
  const pageItems = products.slice(start, start + PAGE_SIZE);

  return (
    <div className="bs-carousel">
      <div className="bs-row bs-row-desktop">
        {pageItems.map(p => <BsCard key={p.slug} p={p} />)}
      </div>
      {totalPages > 1 ? (
        <div className="bs-nav bs-nav-desktop">
          <button type="button" onClick={() => setPage(v => Math.max(0, v - 1))} disabled={page === 0} aria-label="Previous">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="m15 6-6 6 6 6" /></svg>
          </button>
          <span>{page + 1}/{totalPages}</span>
          <button type="button" onClick={() => setPage(v => Math.min(totalPages - 1, v + 1))} disabled={page === totalPages - 1} aria-label="Next">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="m9 6 6 6-6 6" /></svg>
          </button>
        </div>
      ) : null}

      <div className="bs-row bs-row-mobile">
        {products.map(p => <BsCard key={p.slug} p={p} />)}
      </div>
    </div>
  );
}
