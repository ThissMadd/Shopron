const FILLED = '<svg viewBox="0 0 20 20" fill="currentColor"><path d="M10 1.5l2.6 5.6 6.1.7-4.5 4.2 1.2 6-5.4-3-5.4 3 1.2-6L1.3 7.8l6.1-.7z"/></svg>';
const OUTLINE = '<svg viewBox="0 0 20 20" fill="none" stroke="currentColor" stroke-width="1.4"><path d="M10 1.5l2.6 5.6 6.1.7-4.5 4.2 1.2 6-5.4-3-5.4 3 1.2-6L1.3 7.8l6.1-.7z"/></svg>';

export default function StarRow({ rating }){
  let stars = '';
  for(let i = 0; i < 5; i++){
    stars += (rating && i < Math.round(rating)) ? FILLED : OUTLINE;
  }
  return (
    <span
      className={`star-row ${rating ? 'is-rated' : 'is-empty'}`}
      dangerouslySetInnerHTML={{ __html: stars }}
    />
  );
}
