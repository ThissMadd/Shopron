import Link from 'next/link';

export const metadata = { title: 'Care & Handling Instructions — Shopron' };

const listStyle = { paddingLeft: 20, color: 'var(--muted)', marginBottom: 24 };

export default function CareInstructionsPage(){
  return (
    <>
      <div className="page-hero">
        <div className="wrap">
          <h1>Care &amp; Handling Instructions for Refrigerant Cylinders</h1>
          <p>Essential tips for safely storing, handling and transporting refrigerant cylinders — for performance, safety and EPA compliance across R-134a, R-410A, R-404A, R-290 and more.</p>
        </div>
      </div>

      <div className="content-narrow" style={{ maxWidth: 820 }}>
        <div className="info-card">
          <h3>1. Inspection Before Use</h3>
          <ul style={listStyle}>
            <li>Check each cylinder for dents, rust, leaks or damage — immediately retire any compromised unit.</li>
            <li>Confirm labels are clear, current, and display refrigerant type, chemical name, UN number and fill date.</li>
          </ul>

          <h3>2. Proper Storage</h3>
          <ul style={listStyle}>
            <li>Store cylinders upright, tightly secured with straps, chains, or in racks to prevent rolling or falling.</li>
            <li>Keep in a well-ventilated, cool (below 125°F / 52°C) and dry area, away from direct sunlight or heat sources.</li>
            <li>Separate full and empty cylinders, always keeping valves capped and closed on empty units.</li>
          </ul>

          <h3>3. Safe Transportation</h3>
          <ul style={listStyle}>
            <li>Transport cylinders upright and securely fastened (cage, straps or rack) to avoid movement.</li>
            <li>Keep flammable and oxygen cylinders separated by at least 1 meter, or per DOT/OSHA spacing guidelines.</li>
            <li>Ensure the vehicle is ventilated — never leave cylinders in a hot van, where interior temperatures can exceed safe limits.</li>
          </ul>

          <h3>4. Handling &amp; Usage</h3>
          <ul style={listStyle}>
            <li>Always wear PPE: safety glasses, gloves and protective clothing.</li>
            <li>Avoid dropping, rolling or dragging cylinders — use a hand cart or forklift when needed.</li>
            <li>Open the valve slowly and never apply direct heat or flame to the cylinder.</li>
            <li>Never overfill — keep fill levels under 80% to allow expansion and reduce leak risk.</li>
          </ul>

          <h3>5. Storage for Flammable / Low-GWP (A2L) Refrigerants</h3>
          <ul style={listStyle}>
            <li>Keep flammable refrigerants in ventilated, locked cages, away from combustible materials and ignition sources.</li>
            <li>Install active sensors, sprinkler/fire suppression, hazard signage, and adhere to local fire codes.</li>
          </ul>

          <h3>6. End-of-Life &amp; Disposal</h3>
          <ul style={{ ...listStyle, marginBottom: 0 }}>
            <li>Close and seal cylinders when empty — do not dispose of in regular trash; return for recycling or reclamation.</li>
            <li>Do not refill disposable cylinders — use only certified refillable tanks, retested every 10 years.</li>
          </ul>
        </div>

        <div className="pd-note info" style={{ marginTop: 24 }}>
          <strong>✅ Quick checklist:</strong> Inspect cylinder · Store upright, secured &amp; ventilated · Separate full/empty and flammable/oxygen · Use valve caps &amp; PPE · Transport correctly, never heat directly · Close valves when not in use · Return or recycle empty tanks.
        </div>

        <div style={{ textAlign: 'center', marginTop: 32 }}>
          <Link href="/products" className="btn btn-primary">Shop Refrigerants</Link>
        </div>
      </div>
    </>
  );
}
