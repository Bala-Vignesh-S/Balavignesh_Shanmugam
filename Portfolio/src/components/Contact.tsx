import { SectionTitle } from './ui/SectionTitle';
import { SectionBackground } from './ui/SectionBackground';
import { ContactForm } from './ui/ContactForm';
import { Github, Linkedin, Mail, Instagram, MessageCircle, Twitter, Calendar } from 'lucide-react';

export function Contact() {
  return (
    <SectionBackground>
      <section id="contact">
        <div className="container mx-auto px-4">
          <SectionTitle subtitle="Let's collaborate on your next big idea — I'm just a message away 💬">Get In Touch</SectionTitle>

          <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-12">
            {/* Left Column: Contact Info */}
            <div className="glass-card p-8">
              <h3 className="text-2xl font-semibold mb-6 text-gray-100">Let's Connect</h3>
              <p className="text-[var(--text-secondary)] mb-8">
                I'm always open to discussing new projects, creative ideas, or opportunities to be part of your visions.
              </p>

              {/* Schedule Meeting Button */}
              <div className="mb-8">
                <a
                  href="#"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 w-full px-6 py-3 gradient-btn rounded-lg"
                >
                  <Calendar className="w-5 h-5" />
                  Schedule a Meeting
                </a>
              </div>

              <div className="space-y-4">
                <a href="mailto:balavignesh.ai@gmail.com"
                  className="flex items-center gap-3 text-[var(--text-secondary)] hover:text-red-400 transition-colors">
                  <Mail className="w-6 h-6 text-red-400" />
                  <span>balavignesh.ai@gmail.com</span>
                </a>
                <a href="https://github.com/Bala-Vignesh-S" target="_blank" rel="noopener noreferrer"
                  className="flex items-center gap-3 text-[var(--text-secondary)] hover:text-gray-200 transition-colors">
                  <Github className="w-6 h-6 text-gray-300" />
                  <span>github.com/Bala-Vignesh-S</span>
                </a>
                <a href="https://www.linkedin.com/in/balavigneshshanmugam/" target="_blank" rel="noopener noreferrer"
                  className="flex items-center gap-3 text-[var(--text-secondary)] hover:text-blue-400 transition-colors">
                  <Linkedin className="w-6 h-6 text-blue-400" />
                  <span>linkedin.com/in/balavigneshshanmugam</span>
                </a>
              </div>
            </div>

            {/* Right Column: Contact Form */}
            <div className="glass-card p-8">
              <ContactForm />
            </div>
          </div>

          {/* Location Map */}
          <div className="max-w-5xl mx-auto mt-12">
            <h3 className="text-2xl font-semibold mb-4 text-gray-100">Location</h3>
            <div className="relative w-full h-0 pb-[40%] rounded-lg overflow-hidden glass-card">
              <iframe
                title="Chennai Map"
                src="https://maps.google.com/maps?q=Chennai&t=&z=11&ie=UTF8&iwloc=&output=embed"
                className="absolute inset-0 w-full h-full opacity-80"
                style={{ border: 0 }}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                allowFullScreen
              />
            </div>
            <div className="mt-3 text-sm">
              <a href="https://www.google.com/maps/search/?api=1&query=Chennai" target="_blank" rel="noopener noreferrer"
                className="text-[var(--accent-cyan)] hover:underline">
                Open in Google Maps
              </a>
            </div>
          </div>
        </div>
      </section>
    </SectionBackground>
  );
}
