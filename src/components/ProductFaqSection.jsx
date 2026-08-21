'use client';

import { useState } from 'react';
import Icon from './Icon';

export default function ProductFaqSection({ product }){
  const [openFaq, setOpenFaq] = useState(0);
  const items = product.details?.faq || [];
  if(!items.length) return null;

  return (
    <div className="pd2-card">
      <div className="pd2-body">
        <h3 className="pd2-h1">Frequently Asked Questions</h3>
        <div className="pd2-accordion">
          {items.map((item, i) => (
            <div className={`pd2-acc-item ${openFaq === i ? 'open' : ''}`} key={i}>
              <button type="button" className="pd2-acc-head" onClick={() => setOpenFaq(prev => prev === i ? null : i)}>
                <span className="pd2-acc-head-text">
                  <strong>{item.q}</strong>
                </span>
                <span className="pd2-chevron"><Icon name="chevronDown" /></span>
              </button>
              <div className="pd2-acc-body"><p>{item.a}</p></div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
