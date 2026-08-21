export function money(n){
  return '$' + n.toFixed(2);
}

export function tagBadgeClass(tag){
  const t = tag.toLowerCase();
  if(t === 'bestseller') return 'badge-best';
  if(t === 'new') return 'badge-new';
  if(t === 'a2l') return 'badge-a2l';
  if(t === 'low-gwp') return 'badge-gwp';
  return 'badge-best';
}

export function bulkTierTotal(product, tier){
  const base = product.price * tier.qty;
  return tier.type === 'flat' ? base - tier.amount : base * (1 - tier.amount / 100);
}
