// Raw inline SVG markup, ported 1:1 from the original vanilla-JS storefront.
// Rendered via the <Icon> component using dangerouslySetInnerHTML — every
// string here is authored by us (no user input), so this is safe.
export const ICONS = {
  search: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="11" cy="11" r="7"/><path d="M21 21l-4.3-4.3"/></svg>',
  cart: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="9" cy="21" r="1"/><circle cx="19" cy="21" r="1"/><path d="M2.5 3h2l2.7 12.4a2 2 0 0 0 2 1.6h8.6a2 2 0 0 0 2-1.6L23 7H6"/></svg>',
  phone: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M22 16.9v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3.1 19.5 19.5 0 0 1-6-6A19.8 19.8 0 0 1 2.1 4.2 2 2 0 0 1 4.1 2h3a2 2 0 0 1 2 1.7c.1.9.3 1.8.6 2.7a2 2 0 0 1-.5 2.1L8 9.7a16 16 0 0 0 6 6l1.2-1.2a2 2 0 0 1 2.1-.5c.9.3 1.8.5 2.7.6a2 2 0 0 1 1.7 2Z"/></svg>',
  mail: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="2" y="4" width="20" height="16" rx="2"/><path d="m3 6 8.9 6.5a2 2 0 0 0 2.2 0L23 6"/></svg>',
  pin: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"/><circle cx="12" cy="10" r="3"/></svg>',
  clock: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><path d="M12 6v6l4 2"/></svg>',
  check: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4"><path d="M20 6 9 17l-5-5"/></svg>',
  shield: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 2 4 5v6c0 5.5 3.4 9 8 11 4.6-2 8-5.5 8-11V5Z"/></svg>',
  truck: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="1" y="7" width="14" height="10" rx="1"/><path d="M15 10h3l3 3v4h-6z"/><circle cx="6" cy="19" r="1.6"/><circle cx="17.5" cy="19" r="1.6"/></svg>',
  plus: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4"><path d="M12 5v14M5 12h14"/></svg>',
  menu: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M3 6h18M3 12h18M3 18h18"/></svg>',
  lock: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="5" y="11" width="14" height="9" rx="2"/><path d="M8 11V7a4 4 0 0 1 8 0v4"/></svg>',
  share: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 16V4M12 4 7 9M12 4l5 5"/><path d="M5 14v4a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2v-4"/></svg>',
  facebook: '<svg viewBox="0 0 24 24" fill="currentColor"><path d="M22 12a10 10 0 1 0-11.6 9.9v-7H7.9V12h2.5V9.8c0-2.5 1.5-3.9 3.8-3.9 1.1 0 2.2.2 2.5.3v2.7h-1.7c-1.3 0-1.6.7-1.6 1.6V12h3.2l-.5 2.9h-2.7v7A10 10 0 0 0 22 12Z"/></svg>',
  twitter: '<svg viewBox="0 0 24 24" fill="currentColor"><path d="M18.9 3h3.1l-6.8 7.8L23 21h-6.4l-5-6.6L5.6 21H2.5l7.3-8.3L2 3h6.6l4.5 6z"/></svg>',
  whatsapp: '<svg viewBox="0 0 24 24" fill="currentColor"><path d="M20 4a11 11 0 0 0-17 13.2L2 22l4.9-1a11 11 0 0 0 13-17ZM12 20a8.9 8.9 0 0 1-4.5-1.2l-.3-.2-3.3.9.9-3.2-.2-.3A9 9 0 1 1 12 20Zm4.9-6.6c-.3-.1-1.6-.8-1.8-.9-.2-.1-.4-.1-.6.1-.2.2-.6.9-.8 1-.1.2-.3.2-.5.1-1.4-.7-2.3-1.2-3.2-2.8-.2-.3 0-.5.2-.7.2-.2.4-.5.5-.6.2-.2.2-.4.1-.6-.1-.2-.7-1.6-.9-2.1-.2-.5-.4-.4-.6-.4h-.5c-.2 0-.5.1-.7.3-.2.3-.9 1-.9 2.3s1 2.6 1.1 2.8c.1.2 1.9 3 4.7 4.1 2.2.9 2.7.7 3.1.6.6-.1 1.6-.7 1.8-1.3.2-.6.2-1.1.2-1.2 0-.1-.2-.2-.4-.3Z"/></svg>',
  link: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M9 15 15 9"/><path d="M13 6l1.5-1.5a3.5 3.5 0 1 1 5 5L18 11"/><path d="M11 18l-1.5 1.5a3.5 3.5 0 1 1-5-5L6 13"/></svg>',
  close: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M18 6 6 18M6 6l12 12"/></svg>',
  droplet: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 2s7 7.4 7 12a7 7 0 0 1-14 0c0-4.6 7-12 7-12Z"/></svg>',
  leaf: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M20 4C11 4 4 11 4 20c9 0 16-7 16-16Z"/><path d="M4 20 20 4"/></svg>',
  grid: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="3" y="3" width="7" height="7" rx="1"/><rect x="14" y="3" width="7" height="7" rx="1"/><rect x="3" y="14" width="7" height="7" rx="1"/><rect x="14" y="14" width="7" height="7" rx="1"/></svg>',
  box: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 8 12 3 3 8v8l9 5 9-5Z"/><path d="M3 8l9 5 9-5M12 13v8"/></svg>',
  rotate: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M3 12a9 9 0 1 0 3-6.7"/><path d="M3 3v5h5"/></svg>',
  alert: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 9v4M12 17h.01"/><path d="M10.3 3.9 2 18a1.8 1.8 0 0 0 1.6 2.7h16.8A1.8 1.8 0 0 0 22.9 18L13.7 3.9a1.8 1.8 0 0 0-3.4 0Z"/></svg>',
  headset: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M4 13v-1a8 8 0 0 1 16 0v1"/><rect x="2.5" y="13" width="4" height="6" rx="1.4"/><rect x="17.5" y="13" width="4" height="6" rx="1.4"/></svg>',
  clipboard: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="5" y="4" width="14" height="17" rx="2"/><path d="M9 4V3a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v1"/><path d="m8.5 12 2 2 4-4"/></svg>',
  user: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="8" r="4"/><path d="M4 21c0-4 3.6-6 8-6s8 2 8 6"/></svg>',
  eye: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M2 12s3.5-7 10-7 10 7 10 7-3.5 7-10 7-10-7-10-7Z"/><circle cx="12" cy="12" r="3"/></svg>',
  file: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M6 2h9l5 5v13a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2Z"/><path d="M15 2v5h5"/></svg>',
  chevronDown: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2"><path d="m6 9 6 6 6-6"/></svg>',
  info: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><path d="M12 11v5M12 8h.01"/></svg>',
  shieldCheck: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 2 4 5v6c0 5.5 3.4 9 8 11 4.6-2 8-5.5 8-11V5Z"/><path d="m9 12 2 2 4-4"/></svg>',
  message: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/></svg>'
};

export const PAYMENT_ICONS = {
  visa: `<svg viewBox="0 0 48 30" width="40" height="26"><rect width="48" height="30" rx="5" fill="#1a1f71"/><text x="24" y="20" font-family="Arial, sans-serif" font-size="12" font-weight="800" font-style="italic" fill="#fff" text-anchor="middle">VISA</text></svg>`,
  mastercard: `<svg viewBox="0 0 48 30" width="40" height="26"><rect width="48" height="30" rx="5" fill="#16171a"/><circle cx="20" cy="15" r="8.2" fill="#eb001b"/><circle cx="30" cy="15" r="8.2" fill="#f79e1b" opacity="0.92"/></svg>`,
  amex: `<svg viewBox="0 0 48 30" width="40" height="26"><rect width="48" height="30" rx="5" fill="#2472c8"/><text x="24" y="19" font-family="Arial, sans-serif" font-size="10.5" font-weight="800" fill="#fff" text-anchor="middle">AMEX</text></svg>`,
  discover: `<svg viewBox="0 0 48 30" width="40" height="26"><rect width="48" height="30" rx="5" fill="#f3f3f3" stroke="#d8d8d8"/><text x="21" y="19" font-family="Arial, sans-serif" font-size="7.6" font-weight="800" fill="#1a1a1a" text-anchor="middle">DISCOVER</text><circle cx="41" cy="15" r="5" fill="#ff6000"/></svg>`,
  paypal: `<svg viewBox="0 0 48 30" width="40" height="26"><rect width="48" height="30" rx="5" fill="#003087"/><text x="24" y="19" font-family="Arial, sans-serif" font-size="9.5" font-weight="800" fill="#fff" text-anchor="middle">Pay<tspan fill="#009cde">Pal</tspan></text></svg>`,
  applepay: `<svg viewBox="0 0 48 30" width="40" height="26"><rect width="48" height="30" rx="5" fill="#000"/><text x="27" y="19.5" font-family="-apple-system, Arial, sans-serif" font-size="10" font-weight="600" fill="#fff" text-anchor="middle"> Pay</text><path d="M16.2 12.3c.4-.5.7-1.2.6-1.9-.6 0-1.3.4-1.7.9-.4.4-.7 1.1-.6 1.8.7.1 1.3-.3 1.7-.8z" fill="#fff"/><path d="M16.8 12.9c-.9 0-1.7.5-2.1.5-.5 0-1.2-.5-2-.5-1 0-2 .6-2.5 1.6-1.1 1.9-.3 4.7.8 6.2.5.7 1.1 1.5 1.9 1.5.7 0 1-.5 1.9-.5s1.1.5 1.9.5c.8 0 1.4-.7 1.9-1.5.3-.5.5-.9.7-1.4-.7-.3-1.2-1-1.2-1.9 0-.9.5-1.6 1.1-1.9-.4-.6-1-1-1.7-1.1-.1 0-.2 0-.3 0-.5 0-1 .2-1.4.4z" fill="#fff"/></svg>`
};
