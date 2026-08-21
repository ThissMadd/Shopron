'use client';

import { useMemo, useState } from 'react';
import StarRow from './StarRow';
import Icon from './Icon';

function average(reviews){
  if(!reviews.length) return 0;
  return reviews.reduce((sum, r) => sum + r.rating, 0) / reviews.length;
}

function distribution(reviews){
  const counts = { 5: 0, 4: 0, 3: 0, 2: 0, 1: 0 };
  reviews.forEach(r => {
    const bucket = Math.min(5, Math.max(1, Math.round(r.rating)));
    counts[bucket]++;
  });
  return counts;
}

function formatDate(iso){
  const d = new Date(iso);
  if(Number.isNaN(d.getTime())) return iso;
  return d.toLocaleDateString('en-US', { month: '2-digit', day: '2-digit', year: 'numeric' });
}

const PAGE_SIZE = 5;

export default function ProductReviewsSection({ product }){
  const reviews = useMemo(() => product.details?.reviews || [], [product.details]);
  const [sort, setSort] = useState('recent');
  const [page, setPage] = useState(1);

  const avg = useMemo(() => average(reviews), [reviews]);
  const dist = useMemo(() => distribution(reviews), [reviews]);
  const maxBucket = Math.max(1, ...Object.values(dist));

  const sorted = useMemo(() => {
    const list = [...reviews];
    if(sort === 'highest') list.sort((a, b) => b.rating - a.rating);
    else if(sort === 'lowest') list.sort((a, b) => a.rating - b.rating);
    else list.sort((a, b) => new Date(b.date) - new Date(a.date));
    return list;
  }, [reviews, sort]);

  const totalPages = Math.max(1, Math.ceil(sorted.length / PAGE_SIZE));
  const currentPage = Math.min(page, totalPages);
  const pageItems = sorted.slice((currentPage - 1) * PAGE_SIZE, currentPage * PAGE_SIZE);

  function changeSort(value){
    setSort(value);
    setPage(1);
  }

  return (
    <div className="pd2-card" id="reviews">
      <div className="pd2-body">
        <h3 className="pd2-h1 pd2-reviews-title">Customer Reviews</h3>

        {!reviews.length ? (
          <div className="pd2-reviews-empty">
            <StarRow />
            <p>No reviews yet for this product.</p>
            <button type="button" className="btn btn-outline-dark btn-sm" onClick={() => alert('Review submission is not wired up yet.')}>
              Be the First to Review
            </button>
          </div>
        ) : (
          <>
            <div className="pd2-reviews-summary">
              <div className="pd2-reviews-avg">
                <StarRow rating={avg} />
                <span className="pd2-reviews-avg-num">{avg.toFixed(2)} out of 5</span>
                <span className="pd2-reviews-avg-count">Based on {reviews.length} review{reviews.length !== 1 ? 's' : ''}</span>
              </div>
              <div className="pd2-reviews-dist">
                {[5, 4, 3, 2, 1].map(n => (
                  <div className="pd2-reviews-dist-row" key={n}>
                    <StarRow rating={n} />
                    <div className="pd2-reviews-bar"><span style={{ width: `${(dist[n] / maxBucket) * 100}%` }} /></div>
                    <span className="count">{dist[n]}</span>
                  </div>
                ))}
              </div>
              <button type="button" className="btn btn-primary btn-sm" onClick={() => alert('Review submission is not wired up yet.')}>
                Write a Review
              </button>
            </div>

            <div className="pd2-reviews-toolbar">
              <span style={{ fontSize: '.85rem', color: 'var(--muted)', fontWeight: 600 }}>
                {reviews.length} review{reviews.length !== 1 ? 's' : ''}
              </span>
              <select value={sort} onChange={(e) => changeSort(e.target.value)}>
                <option value="recent">Most Recent</option>
                <option value="highest">Highest Rated</option>
                <option value="lowest">Lowest Rated</option>
              </select>
            </div>

            <div>
              {pageItems.map((r, i) => (
                <div className="pd2-review-card" key={i}>
                  <div className="pd2-review-head">
                    <StarRow rating={r.rating} />
                    {r.date ? <span className="pd2-review-date">{formatDate(r.date)}</span> : null}
                  </div>
                  <div className="pd2-review-meta">
                    <span className="pd2-review-author">{r.name}</span>
                    {r.verified ? (
                      <span className="pd2-review-verified"><Icon name="check" /> Verified Buyer</span>
                    ) : null}
                  </div>
                  {r.title ? <div className="pd2-review-title">{r.title}</div> : null}
                  {r.body ? <p className="pd2-review-body">{r.body}</p> : null}
                </div>
              ))}
            </div>

            {totalPages > 1 ? (
              <div className="pd2-reviews-pagination">
                <button
                  type="button"
                  className="btn btn-outline-dark btn-sm"
                  disabled={currentPage === 1}
                  onClick={() => setPage(p => Math.max(1, p - 1))}
                >
                  Previous
                </button>
                <div className="pd2-reviews-pages">
                  {Array.from({ length: totalPages }, (_, i) => i + 1).map(n => (
                    <button
                      key={n}
                      type="button"
                      className={n === currentPage ? 'active' : ''}
                      onClick={() => setPage(n)}
                    >
                      {n}
                    </button>
                  ))}
                </div>
                <button
                  type="button"
                  className="btn btn-outline-dark btn-sm"
                  disabled={currentPage === totalPages}
                  onClick={() => setPage(p => Math.min(totalPages, p + 1))}
                >
                  Next
                </button>
              </div>
            ) : null}
          </>
        )}
      </div>
    </div>
  );
}
