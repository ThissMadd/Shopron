'use client';

import { useState } from 'react';
import Icon from './Icon';

function AccordionItem({ q, a, iconName, open, onToggle }){
  return (
    <div className={`acc-item ${open ? 'open' : ''}`}>
      <div className="acc-head" onClick={onToggle}>
        <span dangerouslySetInnerHTML={{ __html: q }} />
        <Icon name={iconName} />
      </div>
      <div className="acc-body">
        <div>
          <p dangerouslySetInnerHTML={{ __html: a }} />
        </div>
      </div>
    </div>
  );
}

export default function Accordion({ items, iconName = 'plus' }){
  const [openIndex, setOpenIndex] = useState(null);
  return (
    <div className="accordion">
      {items.map((item, i) => (
        <AccordionItem
          key={i}
          q={item.q}
          a={item.a}
          iconName={iconName}
          open={openIndex === i}
          onToggle={() => setOpenIndex(prev => prev === i ? null : i)}
        />
      ))}
    </div>
  );
}
