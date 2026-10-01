import { NextResponse } from 'next/server';
import { WHOP_ACCOUNT_ID } from '@/data/whopAccount';

export async function POST(request){
  const body = await request.json().catch(() => null);
  const confirmationToken = body?.confirmationToken;
  const amount = Number(body?.amount);
  const currency = body?.currency || 'usd';
  const items = Array.isArray(body?.items) ? body.items : [];

  if(!confirmationToken || !Number.isFinite(amount) || amount < 1){
    return NextResponse.json({ error: 'Missing payment data' }, { status: 400 });
  }

  if(!process.env.WHOP_API_KEY){
    return NextResponse.json({ error: 'Payments are not configured yet.' }, { status: 503 });
  }

  const orderTitle = items.length
    ? items.map(i => `${i.title} x${i.qty}`).join(', ').slice(0, 200)
    : 'Shopron order';

  const res = await fetch('https://api.whop.com/api/v1/payments', {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${process.env.WHOP_API_KEY}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      account_id: WHOP_ACCOUNT_ID,
      confirmation_token: confirmationToken,
      plan: { initial_price: amount / 100, currency, plan_type: 'one_time', title: orderTitle },
      metadata: { content_ids: JSON.stringify(items.map(i => i.slug)), order_title: orderTitle },
    }),
  });

  const data = await res.json().catch(() => null);

  if(!res.ok){
    return NextResponse.json({ error: data?.error?.message || 'Payment failed' }, { status: res.status });
  }

  return NextResponse.json({
    status: data?.status,
    clientSecret: data?.client_secret || null,
    paymentId: data?.id || null,
  });
}
