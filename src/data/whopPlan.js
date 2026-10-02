// One-time Whop plans, one per quantity tier (1-5). All products share
// this pricing since every cylinder is $59/unit.
export const QTY_PLANS = {
  1: 'plan_W6C3iGhEUuabZ',
  2: 'plan_oFRB900SwHiId',
  3: 'plan_TjtlpcBXf0Dzv',
  4: 'plan_YRvmWKCeQpSb3',
  // TODO: quantity 5 was given the same plan ID as quantity 4 — needs the
  // correct $295 plan link.
  5: 'plan_YRvmWKCeQpSb3',
};

export function whopPlanFor(qty){
  return QTY_PLANS[qty] || null;
}
