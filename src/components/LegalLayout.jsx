import LegalNav from './LegalNav';

export default function LegalLayout({ children }){
  return (
    <>
      <div className="page-hero" style={{ padding: '44px 0 50px' }}>
        <div className="wrap"><h1 style={{ fontSize: '1.9rem' }}>Policies</h1></div>
      </div>
      <div className="wrap">
        <div className="legal-layout">
          <LegalNav />
          <div className="legal-content">
            <p className="updated">Last updated: August 2026</p>
            {children}
          </div>
        </div>
      </div>
    </>
  );
}
