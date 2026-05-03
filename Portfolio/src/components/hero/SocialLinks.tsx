import { Github, Linkedin, Twitter } from 'lucide-react';
import { FaWhatsapp } from 'react-icons/fa';
import { SiLeetcode, SiCodeforces } from 'react-icons/si';

const links = [
  { href: 'https://github.com/Bala-Vignesh-S', icon: <Github className="w-6 h-6 text-gray-200" />, label: 'GitHub' },
  { href: 'https://www.linkedin.com/in/balavigneshshanmugam/', icon: <Linkedin className="w-6 h-6 text-[#0077B5]" />, label: 'LinkedIn' },
  { href: 'https://wa.me/918122129450', icon: <FaWhatsapp className="w-6 h-6 text-[#25D366]" />, label: 'WhatsApp' },
  { href: 'https://www.skillrack.com/faces/resume.xhtml?id=441044&key=7439c35acb2669a03b4502e7b1f0567f0635e000', icon: <SiCodeforces className="w-6 h-6 text-[#1F8ACB]" />, label: 'SkillRack' },
  { href: 'https://leetcode.com/u/Balavignesh_Shanmugam/', icon: <SiLeetcode className="w-6 h-6 text-[#FFA116]" />, label: 'LeetCode' },
];

export function SocialLinks() {
  return (
    <div className="flex flex-wrap gap-2 justify-center md:justify-start">
      {links.map(({ href, icon, label }) => (
        <a
          key={href}
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={label}
          className="group relative p-3 glass-card hover:scale-110 transform transition-all duration-300 hover:border-[var(--accent-cyan)]/20 hover:shadow-[0_0_15px_rgba(0,212,255,0.15)]"
        >
          <div>{icon}</div>
        </a>
      ))}
    </div>
  );
}