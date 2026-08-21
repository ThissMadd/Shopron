export default function CylinderSvg({ color, code }){
  const safeCode = (code || '').replace(/</g, '');
  const gradId = 'g-' + safeCode.replace(/[^a-zA-Z0-9]/g, '');
  return (
    <svg viewBox="0 0 220 320" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id={gradId} x1="0" y1="0" x2="1" y2="0">
          <stop offset="0" stopColor={color} stopOpacity="0.55" />
          <stop offset=".5" stopColor={color} />
          <stop offset="1" stopColor={color} stopOpacity="0.75" />
        </linearGradient>
      </defs>
      <rect x="70" y="18" width="30" height="26" rx="4" fill="#b9c2c7" />
      <path d="M75 40 h20 l14 26 h-48 z" fill="#c7d0d4" />
      <rect x="45" y="64" width="130" height="230" rx="26" fill={`url(#${gradId})`} stroke="rgba(0,0,0,.12)" />
      <rect x="45" y="150" width="130" height="46" fill="rgba(255,255,255,.85)" />
      <text x="110" y="180" fontFamily="Poppins, Arial, sans-serif" fontSize="26" fontWeight="700" textAnchor="middle" fill="#101c26">{safeCode}</text>
      <rect x="58" y="80" width="12" height="190" rx="6" fill="rgba(255,255,255,.35)" />
    </svg>
  );
}
