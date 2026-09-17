const SHOPIFY_VARIANT_ID = '58031314698622';

export function checkoutLinkFor(qty){
  return `https://pgnyah-we.myshopify.com/cart/${SHOPIFY_VARIANT_ID}:${qty}`;
}
