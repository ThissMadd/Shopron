import ContactInfoGrid from '@/components/ContactInfoGrid';
import ContactForm from '@/components/ContactForm';

export const metadata = { title: 'Contact Us — Shopron' };

export default function ContactPage(){
  return (
    <>
      <div className="page-hero">
        <div className="wrap">
          <h1>Contact Us</h1>
          <p>We&apos;re always happy to assist you! If you have any questions, concerns, or need help with your order, reach out below.</p>
        </div>
      </div>

      <div className="content-narrow">
        <div className="info-card" style={{ marginBottom: 22 }}>
          <ContactInfoGrid />
        </div>

        <div className="info-card">
          <h3 style={{ marginBottom: 18 }}>Send us a message</h3>
          <ContactForm />
        </div>
      </div>
    </>
  );
}
