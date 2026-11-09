'use client';

import { useState, type FormEvent } from 'react';
import { ArrowRight } from 'lucide-react';

export function ContactForm() {
  const [message, setMessage] = useState('');
  const [copied, setCopied] = useState(false);

  function prepareInquiry(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = new FormData(event.currentTarget);
    const body = `Name: ${form.get('name')}\nCompany: ${form.get('company')}\nEmail: ${form.get('email')}\nIndustry: ${form.get('industry')}\n\nProject details:\n${form.get('details')}`;
    setMessage(body);
    setCopied(false);
  }

  async function copyInquiry() {
    try {
      await navigator.clipboard.writeText(message);
      setCopied(true);
    } catch {
      setCopied(false);
    }
  }

  return (
    <form className="contact-form" onSubmit={prepareInquiry}>
      <div className="notice">This preview prepares your inquiry but does not submit it to a server. Direct email/CRM delivery will be configured before launch.</div>
      <label>Your name *<input name="name" required placeholder="Full name" /></label>
      <label>Company name *<input name="company" required placeholder="Your organization" /></label>
      <label>Work email *<input name="email" required type="email" placeholder="you@company.com" /></label>
      <label>Industry *
        <select name="industry" required defaultValue="">
          <option value="" disabled>Select your industry</option>
          <option>Medical Laboratory</option><option>Healthcare</option><option>Manufacturing</option>
          <option>Logistics</option><option>Professional Services</option><option>Other</option>
        </select>
      </label>
      <label>What would you like to improve? *<textarea name="details" required minLength={10} placeholder="Tell us about your current process and challenges..." /></label>
      <button className="btn" type="submit">Prepare Inquiry <ArrowRight size={18} /></button>
      {message && (
        <div className="notice" role="status">
          <strong>Inquiry prepared.</strong> You can copy it for your records. This preview does not send any information.
          <div style={{ marginTop: 12 }}>
            <button type="button" className="btn btn-dark" onClick={copyInquiry}>{copied ? 'Copied!' : 'Copy Inquiry'}</button>
          </div>
        </div>
      )}
    </form>
  );
}
