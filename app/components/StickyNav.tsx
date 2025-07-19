'use client';

import {
  Home,
  Calendar,
  Image,
  Gift,
  PencilLine,
  Users,
} from 'lucide-react';
import { useState, useEffect } from 'react';
import React from 'react';

const sections = [
  { id: 'hero', icon: <Home size={20} />, label: 'Beranda' },
  { id: 'countdown', icon: <Calendar size={20} />, label: 'Tanggal' },
  { id: 'event', icon: <Users size={20} />, label: 'Acara' },
  { id: 'gallery', icon: <Image size={20} />, label: 'Galeri' },
  { id: 'gift', icon: <Gift size={20} />, label: 'Hadiah' },
  { id: 'rsvp', icon: <PencilLine size={20} />, label: 'RSVP' },
];

export default function StickyNav() {
  const [visible, setVisible] = useState(false);
  const [activeSection, setActiveSection] = useState<string>('hero');

  useEffect(() => {
    const handleScroll = () => {
      setVisible(window.scrollY > 200);

      let current = 'hero';
      for (const section of sections) {
        const el = document.getElementById(section.id);
        if (el) {
          const offsetTop = el.offsetTop - 150; // sesuaikan jika butuh margin
          if (window.scrollY >= offsetTop) {
            current = section.id;
          }
        }
      }
      setActiveSection(current);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav
      className={`fixed bottom-20 left-1/2 -translate-x-1/2 bg-stone-600 text-white shadow-lg rounded-full px-4 py-2 flex gap-3 z-50 transition-all duration-500 backdrop-blur-sm ${
        visible ? 'opacity-100' : 'opacity-0 pointer-events-none'
      } max-w-full overflow-x-auto`}
    >
      {sections.map((section) => (
        <NavItem
          key={section.id}
          href={`#${section.id}`}
          icon={section.icon}
          label={section.label}
          active={activeSection === section.id}
        />
      ))}
    </nav>
  );
}

function NavItem({
  href,
  icon,
  label,
  active,
}: {
  href: string;
  icon: React.ReactNode;
  label: string;
  active: boolean;
}) {
  return (
    <a
      href={href}
      className={`flex flex-col items-center justify-center transition-colors duration-200 text-xs ${
        active ? 'text-yellow-300' : 'text-white'
      } hover:text-yellow-300`}
    >
      {icon}
      <span className="mt-1">{label}</span>
    </a>
  );
}
