'use client';

import { useState } from 'react';

export default function ContactForm(){
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e){
    e.preventDefault();
    setSubmitted(true);
    e.target.reset();
  }

  return (
    <form onSubmit={handleSubmit}>
      <div className="form-grid">
        <div className="field"><label htmlFor="name">Name</label><input id="name" type="text" placeholder="Your name" /></div>
        <div className="field"><label htmlFor="email">Email *</label><input id="email" type="email" required placeholder="you@company.com" /></div>
      </div>
      <div className="field" style={{ marginBottom: 16 }}><label htmlFor="phone">Phone number</label><input id="phone" type="tel" placeholder="(optional)" /></div>
      <div className="field" style={{ marginBottom: 16 }}><label htmlFor="comment">Comment</label><textarea id="comment" rows={5} placeholder="How can we help?" /></div>
      <button className="btn btn-dark" type="submit">Send</button>
      <div className={`form-note ${submitted ? 'show' : ''}`}>Thanks — your message has been received. Our team will reply within 1 business day.</div>
    </form>
  );
}
