export function trackPixel(event, params){
  if(typeof window === 'undefined' || typeof window.fbq !== 'function') return;
  if(params) window.fbq('track', event, params);
  else window.fbq('track', event);
}
