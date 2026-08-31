// Stripe Payment Links keyed by quantity. Same links apply across the
// catalog since every product shares the $59/unit price point.
export const QTY_PAYMENT_LINKS = {
  1: "https://buy.stripe.com/cNieVda7V15VarveApcQU04",
  2: "https://buy.stripe.com/eVq3cvgwj9Cr2Z3cshcQU05",
  3: "https://buy.stripe.com/fZu3cvdk701R7fj0JzcQU06",
  4: "https://buy.stripe.com/fZu28reob9Cr9nr9g5cQU07",
  5: "https://buy.stripe.com/00w7sLgwj01R0QV77XcQU08",
  6: "https://buy.stripe.com/fZu14qgmu6eBcK96dmgMw0h",
  7: "https://buy.stripe.com/eVqeVgeem46t5hH31agMw0i",
  8: "https://buy.stripe.com/7sYeVgdaidH3dOd1X6gMw0j",
  9: "https://buy.stripe.com/7sY3cy4DMdH311r31agMw0k",
  10: "https://buy.stripe.com/cNi00m7PYauR11r45egMw0f",
  15: "https://buy.stripe.com/5kQ4gCfiq0Uh25vgS0gMw0g"
};

export function paymentLinkFor(qty){
  return QTY_PAYMENT_LINKS[qty] || null;
}
