'use client';

import { useRef, useEffect } from 'react';
import StarRow from './StarRow';
import Icon from './Icon';
import { findProduct } from '@/data/products';

const AUTO_ADVANCE_MS = 3500;

function TestimonialCard({ t }){
  const product = findProduct(t.productSlug);
  if(!product) return null;

  return (
    <div className="testi-card">
      <div className="testi-media">
        <img src={product.images[0]} alt={product.title} loading="lazy" />
      </div>
      <div className="testi-body">
        <StarRow rating={t.rating} />
        {t.title ? <div className="testi-title">{t.title}</div> : null}
        {t.body ? <p className="testi-text">{t.body}</p> : null}
        <div className="testi-meta">
          <span className="testi-name">{t.name}</span>
          <span className="testi-verified"><Icon name="shieldCheck" /> Verified</span>
        </div>
        <span className="testi-product">{product.size} {product.code}</span>
      </div>
    </div>
  );
}

export default function HomeTestimonials({ testimonials, avg, count }){
  const trackRef = useRef(null);

  function cardStep(){
    const el = trackRef.current;
    if(!el) return 0;
    const card = el.querySelector('.testi-card');
    if(!card) return 0;
    const style = getComputedStyle(el);
    const gap = parseFloat(style.columnGap || style.gap || '0');
    return card.getBoundingClientRect().width + gap;
  }

  function scrollByCards(dir){
    const el = trackRef.current;
    if(!el) return;
    el.scrollBy({ left: dir * cardStep(), behavior: 'smooth' });
  }

  useEffect(() => {
    const el = trackRef.current;
    if(!el || testimonials.length <= 1) return;
    const id = setInterval(() => {
      const atEnd = el.scrollLeft + el.clientWidth >= el.scrollWidth - 4;
      if(atEnd) el.scrollTo({ left: 0, behavior: 'smooth' });
      else scrollByCards(1);
    }, AUTO_ADVANCE_MS);
    return () => clearInterval(id);
  }, [testimonials.length]);

  return (
    <div className="testi-wrap">
      <div className="testi-summary">
        <StarRow rating={avg} />
        <span className="testi-avg">{avg.toFixed(2)} ★ ({count})</span>
        <span className="testi-verified-badge"><Icon name="shieldCheck" /> Verified</span>
      </div>

      <div className="testi-scroller">
        <button type="button" className="testi-arrow testi-arrow-left" onClick={() => scrollByCards(-1)} aria-label="Previous">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="m15 6-6 6 6 6" /></svg>
        </button>
        <div className="testi-track" ref={trackRef}>
          {testimonials.map((t, i) => <TestimonialCard key={i} t={t} />)}
        </div>
        <button type="button" className="testi-arrow testi-arrow-right" onClick={() => scrollByCards(1)} aria-label="Next">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="m9 6 6 6-6 6" /></svg>
        </button>
      </div>
    </div>
  );
}
