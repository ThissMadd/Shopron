const SHOPIFY_VARIANT_ID = '54343109247304';

export function checkoutLinkFor(qty){
  return `https://pufrwt-uf.myshopify.com/cart/${SHOPIFY_VARIANT_ID}:${qty}`;
}
