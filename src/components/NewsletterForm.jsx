'use client';

import { useState } from 'react';

export default function NewsletterForm(){
  const [submitted, setSubmitted] = useState(false);
  return (
    <form onSubmit={(e) => { e.preventDefault(); setSubmitted(true); }}>
      <input type="email" required placeholder="Email" />
      <button className="btn btn-dark" type="submit">{submitted ? 'Subscribed ✓' : 'Subscribe'}</button>
    </form>
  );
}
