import { whopPlanFor } from './whopPlan';

export function checkoutLinkFor(qty){
  const planId = whopPlanFor(qty);
  return planId ? `https://whop.com/checkout/${planId}` : null;
}
