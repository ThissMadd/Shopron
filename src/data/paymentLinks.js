// Stripe Payment Links keyed by quantity. Same links apply across the
// catalog since every product shares the $89/unit price point.
export const QTY_PAYMENT_LINKS = {
  1: "https://buy.stripe.com/14A4gC2vE7iFeSh0T2gMw0a",
  2: "https://buy.stripe.com/aFa9AW0nwcCZ7pPfNWgMw0b",
  3: "https://buy.stripe.com/dRm4gC3zI46tbG51X6gMw0c",
  4: "https://buy.stripe.com/fZu5kGc6e8mJ11r7hqgMw0d",
  5: "https://buy.stripe.com/cNi4gC1rAeL7fWl1X6gMw0e",
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
