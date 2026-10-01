import ProductMedia from '@/components/ProductMedia';
import { money } from '@/lib/format';

export default function CheckoutSummary({ lines, subtotal, sticky }){
  return (
    <div className={`summary-card checkout-summary-card ${sticky ? 'sticky' : ''}`}>
      <div className="checkout-summary-items">
        {lines.map(({ item, p, lineTotal }) => (
          <div className="checkout-summary-item" key={item.slug}>
            <div className="checkout-summary-thumb">
              <ProductMedia product={p} />
              <span className="checkout-summary-qty">{item.qty}</span>
            </div>
            <div className="checkout-summary-info">
              <span className="checkout-summary-title">{p.title}</span>
            </div>
            <span className="checkout-summary-price">{money(lineTotal)}</span>
          </div>
        ))}
      </div>

      <div className="checkout-discount-row">
        <input type="text" placeholder="Discount code" />
        <button type="button" className="btn btn-outline-dark btn-sm">Apply</button>
      </div>

      <div className="summary-row"><span>Subtotal</span><span>{money(subtotal)}</span></div>
      <div className="summary-row"><span>Shipping</span><span style={{ color: 'var(--success)', fontWeight: 700 }}>FREE</span></div>
      <div className="summary-row total"><span>Total</span><span>{money(subtotal)}</span></div>
    </div>
  );
}
