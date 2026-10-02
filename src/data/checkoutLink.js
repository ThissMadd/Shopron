export const WHOP_CHECKOUT_LINK = 'https://whop.com/checkout/plan_W6C3iGhEUuabZ';

export function checkoutLinkFor(qty){
  return `${WHOP_CHECKOUT_LINK}?quantity=${qty}`;
}
