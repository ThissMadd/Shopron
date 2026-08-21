import NewsletterForm from './NewsletterForm';

export default function NewsletterSection(){
  return (
    <section className="section" style={{ paddingTop: 0, paddingBottom: 72 }}>
      <div className="wrap">
        <div className="newsletter">
          <div>
            <h3>Get restock alerts &amp; bulk pricing</h3>
            <p>Get refrigerant restock alerts, bulk offers, and HVAC updates.</p>
          </div>
          <NewsletterForm />
        </div>
      </div>
    </section>
  );
}
