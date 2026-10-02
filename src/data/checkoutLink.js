import { WHOP_PLAN_ID } from './whopPlan';

export function checkoutLinkFor(qty){
  return `https://whop.com/checkout/${WHOP_PLAN_ID}?quantity=${qty}`;
}
