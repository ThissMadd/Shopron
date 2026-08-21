'use client';

import { useState } from 'react';
import Icon from './Icon';

// NOTE: Shipping stats/table intentionally show "Free" instead of a paid
// per-cylinder figure — this store advertises free U.S. shipping everywhere
// else (banner, footer, trust badges), so a paid figure here would
// contradict the rest of the same page.
const SHIPPING_RETURNS = {
  stats: [
    { icon: 'box', value: 'Free', label: 'U.S. Shipping' },
    { icon: 'clock', value: 'Within 24h', label: 'Dispatch' },
    { icon: 'truck', value: '2–5 Days', label: 'Estimated Delivery' },
    { icon: 'pin', value: 'U.S. Warehouse', label: 'Ships From' }
  ],
  shipping: [
    { icon: 'box', text: 'Free shipping on all U.S. orders' },
    { icon: 'clock', text: 'Ships within 24 business hours' },
    { icon: 'truck', text: 'Estimated delivery: 2–5 business days' },
    { icon: 'pin', text: 'Ships from the United States' },
    { icon: 'shieldCheck', text: 'Tracking provided after dispatch' }
  ],
  returns: [
    { icon: 'rotate', text: '30-day return request window' },
    { icon: 'box', text: 'Unused and unopened cylinders only' },
    { icon: 'box', text: 'Original condition and packaging required' },
    { icon: 'message', text: 'Contact support before returning regulated goods' },
    { icon: 'shieldCheck', text: 'Refunds issued after inspection' }
  ],
  calc: [
    ['1 Cylinder', 'Free'],
    ['2 Cylinders', 'Free'],
    ['3 Cylinders', 'Free']
  ],
  hazardNotice: "Return approval and specialized carrier requirements may apply. Return shipping costs are the customer's responsibility."
};

const TABS = [
  { key: 'overview', label: 'Overview' },
  { key: 'specs', label: 'Specifications' },
  { key: 'shipping', label: 'Shipping & Returns' },
  { key: 'info', label: 'Important Information' }
];

function StatCard({ s }){
  return (
    <div className="pd2-stat">
      <div className="pd2-stat-icon"><Icon name={s.icon} /></div>
      <div>
        <span className="pd2-stat-value">{s.value}</span>
        <span className="pd2-stat-label">{s.label}</span>
      </div>
    </div>
  );
}

function formatSupportNote(text){
  const m = text.match(/^(.*?[?.])\s*(.*)$/);
  if(!m) return <>{text}</>;
  return <><strong>{m[1]}</strong>{m[2] ? ' ' + m[2] : ''}</>;
}

function AccordionBody({ item }){
  if(item.intro || (item.details && item.details.length > 1)){
    return (
      <>
        {item.intro ? <p>{item.intro}</p> : null}
        {item.details && item.details.length ? (
          <ul className="pd2-acc-bullets">
            {item.details.map((t, i) => <li key={i}>{t}</li>)}
          </ul>
        ) : null}
      </>
    );
  }
  return <>{(item.details || []).map((t, i) => <p key={i}>{t}</p>)}</>;
}

function OverviewPane({ product }){
  const d = product.details.overview;
  return (
    <div className="pd2-grid2">
      <div>
        <h3 className="pd2-h1">Product Overview</h3>
        <p className="pd2-p">{d.paragraph}</p>
        <h4 className="pd2-h2">Key Benefits</h4>
        <ul className="pd2-benefits">
          {d.benefits.map((b, i) => (
            <li key={i}>
              <span className="pd2-check"><Icon name="check" /></span>
              <span>{b}</span>
            </li>
          ))}
        </ul>
        <h4 className="pd2-h2">Compatibility Notice</h4>
        <p className="pd2-p" style={{ marginBottom: 0 }}>{d.compatibilityNotice}</p>
      </div>
      {d.image ? (
        <div className="pd2-media"><img src={d.image} alt={`${product.title} in use`} /></div>
      ) : null}
    </div>
  );
}

function SpecsPane({ product }){
  const d = product.details.specs;
  return (
    <>
      <div className="pd2-stats">{d.stats.map((s, i) => <StatCard key={i} s={s} />)}</div>
      <div className="pd2-cols2">
        <div className="pd2-panel">
          <h4 className="pd2-h3">Key Specifications</h4>
          <table className="pd2-table"><tbody>
            {d.keySpecs.map(([k, v]) => <tr key={k}><td>{k}</td><td>{v}</td></tr>)}
          </tbody></table>
          {d.keySpecsNote ? (
            <div className="pd2-note-info"><Icon name="info" /><span>{d.keySpecsNote}</span></div>
          ) : null}
        </div>
        <div className="pd2-panel">
          <h4 className="pd2-h3">Full Technical Data</h4>
          <table className="pd2-table"><tbody>
            {d.fullData.map(([k, v]) => <tr key={k}><td>{k}</td><td>{v}</td></tr>)}
          </tbody></table>
        </div>
      </div>
    </>
  );
}

function ShippingPane(){
  return (
    <>
      <div className="pd2-stats">{SHIPPING_RETURNS.stats.map((s, i) => <StatCard key={i} s={s} />)}</div>
      <div className="pd2-cols2">
        <div className="pd2-panel">
          <h4 className="pd2-h2">Shipping</h4>
          <ul className="pd2-rows">
            {SHIPPING_RETURNS.shipping.map((s, i) => (
              <li key={i}><Icon name={s.icon} /><span>{s.text}</span></li>
            ))}
          </ul>
          <div className="pd2-calc">
            <div className="pd2-calc-head">Shipping Calculation</div>
            {SHIPPING_RETURNS.calc.map(([k, v]) => (
              <div className="pd2-calc-row" key={k}><div>{k}</div><div>{v}</div></div>
            ))}
          </div>
        </div>
        <div className="pd2-panel">
          <h4 className="pd2-h2">Returns</h4>
          <ul className="pd2-rows">
            {SHIPPING_RETURNS.returns.map((s, i) => (
              <li key={i}><Icon name={s.icon} /><span>{s.text}</span></li>
            ))}
          </ul>
          <div className="pd2-hazard">
            <Icon name="alert" />
            <div><strong>Hazardous Material Notice</strong><p>{SHIPPING_RETURNS.hazardNotice}</p></div>
          </div>
        </div>
      </div>
    </>
  );
}

function InfoPane({ product, openAcc, setOpenAcc }){
  const d = product.details;
  const codeNH = product.code.replace(/-/g, '');
  return (
    <>
      <div className="pd2-banner">
        <span className="pd2-banner-icon"><Icon name="shieldCheck" /></span>
        <div>
          <span className="pd2-eyebrow">{codeNH} product notice</span>
          <h3>Important {codeNH} Product Information</h3>
          <p>{codeNH} is a high-pressure refrigerant blend for equipment specifically designed and labeled for {codeNH}. Review these requirements before ordering.</p>
        </div>
      </div>
      <div className="pd2-accordion">
        {d.importantInfo.map((item, i) => (
          <div className={`pd2-acc-item ${openAcc === i ? 'open' : ''}`} key={i}>
            <button type="button" className="pd2-acc-head" onClick={() => setOpenAcc(prev => prev === i ? null : i)}>
              <span className="pd2-acc-icon"><Icon name={item.icon || 'check'} /></span>
              <span className="pd2-acc-head-text">
                <strong>{item.title}</strong>
                <em>{item.summary}</em>
              </span>
              <span className="pd2-chevron"><Icon name="chevronDown" /></span>
            </button>
            <div className="pd2-acc-body"><AccordionBody item={item} /></div>
          </div>
        ))}
      </div>
      {d.supportNote ? (
        <div className="pd2-support"><Icon name="headset" /><p>{formatSupportNote(d.supportNote)}</p></div>
      ) : null}
    </>
  );
}

export default function ProductInfoTabs({ product }){
  const [activeTab, setActiveTab] = useState('overview');
  const [openAcc, setOpenAcc] = useState(0);

  if(!product.details) return null;

  return (
    <div className="pd2-card">
      <div className="pd2-nav">
        {TABS.map(t => (
          <button
            key={t.key}
            className={activeTab === t.key ? 'active' : ''}
            onClick={() => setActiveTab(t.key)}
            type="button"
          >
            {t.label}
          </button>
        ))}
      </div>
      <div className="pd2-body">
        <div className={`pd2-pane ${activeTab === 'overview' ? 'active' : ''}`}><OverviewPane product={product} /></div>
        <div className={`pd2-pane ${activeTab === 'specs' ? 'active' : ''}`}><SpecsPane product={product} /></div>
        <div className={`pd2-pane ${activeTab === 'shipping' ? 'active' : ''}`}><ShippingPane /></div>
        <div className={`pd2-pane ${activeTab === 'info' ? 'active' : ''}`}><InfoPane product={product} openAcc={openAcc} setOpenAcc={setOpenAcc} /></div>
      </div>
    </div>
  );
}
