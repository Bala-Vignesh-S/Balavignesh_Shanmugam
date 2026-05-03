import React, { useState } from 'react';
import { useForm } from '@formspree/react';
import { Send, CheckCircle } from 'lucide-react';

export function ContactForm() {
  const [state, handleSubmit] = useForm("xyzgkqpd");
  const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  if (state.succeeded) {
    return (
      <div className="flex flex-col items-center justify-center py-12 text-center">
        <CheckCircle className="w-16 h-16 text-[var(--accent-cyan)] mb-4" />
        <h3 className="text-xl font-semibold text-gray-100 mb-2">Message Sent!</h3>
        <p className="text-[var(--text-secondary)]">Thank you for reaching out. I'll get back to you soon!</p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <h3 className="text-2xl font-semibold text-gray-100 mb-6">Send a Message</h3>
      <div>
        <input type="text" name="name" placeholder="Your Name" value={formData.name} onChange={handleChange} required
          className="w-full px-4 py-3 rounded-lg bg-white/5 border border-white/10 text-gray-100 placeholder-[var(--text-muted)] focus:border-[var(--accent-cyan)]/50 focus:outline-none focus:ring-1 focus:ring-[var(--accent-cyan)]/30 transition-colors" />
      </div>
      <div>
        <input type="email" name="email" placeholder="Your Email" value={formData.email} onChange={handleChange} required
          className="w-full px-4 py-3 rounded-lg bg-white/5 border border-white/10 text-gray-100 placeholder-[var(--text-muted)] focus:border-[var(--accent-cyan)]/50 focus:outline-none focus:ring-1 focus:ring-[var(--accent-cyan)]/30 transition-colors" />
      </div>
      <div>
        <input type="text" name="subject" placeholder="Subject" value={formData.subject} onChange={handleChange} required
          className="w-full px-4 py-3 rounded-lg bg-white/5 border border-white/10 text-gray-100 placeholder-[var(--text-muted)] focus:border-[var(--accent-cyan)]/50 focus:outline-none focus:ring-1 focus:ring-[var(--accent-cyan)]/30 transition-colors" />
      </div>
      <div>
        <textarea name="message" placeholder="Your Message" rows={5} value={formData.message} onChange={handleChange} required
          className="w-full px-4 py-3 rounded-lg bg-white/5 border border-white/10 text-gray-100 placeholder-[var(--text-muted)] focus:border-[var(--accent-cyan)]/50 focus:outline-none focus:ring-1 focus:ring-[var(--accent-cyan)]/30 transition-colors resize-none" />
      </div>
      <button type="submit" disabled={state.submitting}
        className="w-full flex items-center justify-center gap-2 gradient-btn px-6 py-3 rounded-lg disabled:opacity-50">
        <Send className="w-5 h-5" />
        {state.submitting ? 'Sending...' : 'Send Message'}
      </button>
    </form>
  );
}
