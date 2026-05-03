import React from 'react';
import { Phone, Mail, MapPin } from 'lucide-react';

interface ContactItemProps {
  icon: React.ReactNode;
  text: string;
  href?: string;
}

function ContactItem({ icon, text, href }: ContactItemProps) {
  const Component = href ? 'a' : 'div';
  return (
    <Component
      href={href}
      className={`flex items-center gap-2 px-4 py-1 ${href ? 'hover:scale-105' : ''} transition-transform duration-200`}
    >
      <span className="text-[var(--accent-cyan)]">{icon}</span>
      <span className="text-[var(--text-secondary)] hover:text-[var(--accent-cyan)]">
        {text}
      </span>
    </Component>
  );
}

export function ContactInfo() {
  return (
    <div className="flex flex-col items-center gap-0">
      <ContactItem icon={<Phone className="w-5 h-5" />} text="+91 8122129450" href="tel:+918122129450" />
      <ContactItem icon={<Mail className="w-5 h-5" />} text="balavignesh.ai@gmail.com" href="mailto:balavignesh.ai@gmail.com" />
      <ContactItem icon={<MapPin className="w-5 h-5" />} text="Chennai, India" />
    </div>
  );
}
