import React from 'react';
import { FileText, Mail } from 'lucide-react';
import { Link } from '../Link';

export function ActionButtons() {
  return (
    <div className="flex flex-wrap gap-4 justify-center">
      <a
        href="/assets/dresume.pdf"
        className="flex items-center gap-2 px-4 py-2.5 rounded-lg text-sm sm:text-base gradient-btn"
      >
        <FileText className="w-5 h-5" />
        <span>View Resume</span>
      </a>
      <Link
        href="#contact"
        className="flex items-center gap-2 px-4 py-2.5 rounded-lg text-sm sm:text-base gradient-btn-outline"
      >
        <Mail className="w-5 h-5" />
        <span>Contact Me</span>
      </Link>
    </div>
  );
}
