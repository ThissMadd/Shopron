import { NextResponse } from 'next/server';
import { stripe } from '@/lib/stripe';
import { findProduct } from '@/data/products';

export async function POST(request){
  const body = await request.json().catch(() => null);
  const cart = Array.isArray(body?.cart) ? body.cart : [];

  const lineItems = [];
  const slugs = [];
  let numItems = 0;
  for(const entry of cart){
    const product = findProduct(entry?.slug);
    const qty = Number(entry?.qty);
    if(!product || !Number.isInteger(qty) || qty < 1) continue;

    const hasBulkTotal = entry.lineTotal != null && Number.isFinite(Number(entry.lineTotal));
    const unitAmount = hasBulkTotal
      ? Math.round(Number(entry.lineTotal) * 100)
      : Math.round(product.price * 100);

    lineItems.push({
      quantity: hasBulkTotal ? 1 : qty,
      price_data: {
        currency: 'usd',
        unit_amount: unitAmount,
        product_data: {
          name: hasBulkTotal ? `${product.title} × ${qty}` : product.title,
        },
      },
    });
    slugs.push(product.slug);
    numItems += qty;
  }

  if(!lineItems.length){
    return NextResponse.json({ error: 'Cart is empty' }, { status: 400 });
  }

  const origin = new URL(request.url).origin;

  const session = await stripe.checkout.sessions.create({
    mode: 'payment',
    ui_mode: 'embedded_page',
    line_items: lineItems,
    return_url: `${origin}/thank-you?session_id={CHECKOUT_SESSION_ID}`,
    metadata: {
      content_ids: JSON.stringify(slugs),
      num_items: String(numItems),
    },
  });

  return NextResponse.json({ clientSecret: session.client_secret });
}
