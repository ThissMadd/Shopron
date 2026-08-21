const CAT_ICONS = {
  'ac-heat-pumps': '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M12 2v20M12 2 8 6M12 2l4 4M12 22l-4-4M12 22l4-4M2 12h20M2 12l4-4M2 12l4 4M22 12l-4-4M22 12l-4 4"/></svg>',
  'commercial-refrigeration': '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><rect x="4" y="2" width="16" height="20" rx="2"/><path d="M4 12h16M9 6h.01M9 16h.01"/></svg>',
  automotive: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M3 12l2-6h14l2 6v6H3z"/><circle cx="7.5" cy="18" r="1.6"/><circle cx="16.5" cy="18" r="1.6"/></svg>',
  'r22-retrofit': '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><path d="m14.7 3.3-9.9 9.9a2 2 0 0 0 0 2.8l1.2 1.2a2 2 0 0 0 2.8 0l9.9-9.9"/><path d="m17 6-3-3M4 20l3-3"/></svg>',
  accessories: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M14.7 6.3a1 1 0 0 0 0-1.4l-2.6-2.6a1 1 0 0 0-1.4 0L3 10a3 3 0 1 0 4 4z"/><path d="m9 15 3 3M17 10l4 4-3 3-4-4"/></svg>'
};

export default function CategoryIcon({ slug }){
  return <span style={{ display: 'contents' }} dangerouslySetInnerHTML={{ __html: CAT_ICONS[slug] || '' }} />;
}
