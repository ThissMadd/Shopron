import ThankYou from '@/components/ThankYou';
import { stripe } from '@/lib/stripe';

export const metadata = { title: 'Thank You — Shopron' };

async function getVerifiedOrder(sessionId){
  if(!sessionId) return null;
  try {
    const session = await stripe.checkout.sessions.retrieve(sessionId);
    if(session.payment_status !== 'paid') return null;

    let contentIds = [];
    try { contentIds = JSON.parse(session.metadata?.content_ids || '[]'); } catch(e){ contentIds = []; }

    return {
      value: (session.amount_total ?? 0) / 100,
      currency: (session.currency || 'usd').toUpperCase(),
      contentIds,
      numItems: Number(session.metadata?.num_items) || 0,
    };
  } catch(e){
    return null;
  }
}

export default async function ThankYouPage({ searchParams }){
  const { session_id } = await searchParams;
  const order = await getVerifiedOrder(session_id);
  return <ThankYou order={order} />;
}
