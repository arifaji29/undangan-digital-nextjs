import Link from 'next/link';
import { Github } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-stone-900 text-white py-6 mt-20">
      <div className="max-w-5xl mx-auto px-4 flex flex-col md:flex-row items-center justify-between">
        <p className="text-sm text-center md:text-left font-light">
          © {new Date().getFullYear()} Arif.dev All rights reserved.
        </p>
        <div className="mt-2 md:mt-0">
          <Link
            href="https://github.com/arifaji29"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1 text-sm underline hover:text-stone-300 transition-colors"
          >
            <Github size={16} />
            Lihat di GitHub
          </Link>
        </div>
      </div>
    </footer>
  );
}
