import { PAYMENT_ICONS } from '@/lib/icons';

const KEYS = ['visa', 'mastercard', 'amex', 'discover', 'paypal', 'applepay'];

export default function PaymentIcons({ muted }){
  return (
    <div className={`payment-icons-svg ${muted ? 'muted' : ''}`}>
      {KEYS.map(k => (
        <span key={k} className="pay-badge" dangerouslySetInnerHTML={{ __html: PAYMENT_ICONS[k] }} />
      ))}
    </div>
  );
}
