'use client';
import {
    Home,
    Calendar,
    Image,
    Gift,
    PencilLine,
    Users
} from 'lucide-react';
import { useState, useEffect } from 'react';
import React from 'react';

export default function StickyNav() {
    const [visible, setVisible] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setVisible(window.scrollY > 200);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <nav
            className={`fixed bottom-25 left-1/2 -translate-x-1/2 bg-stone-800 text-white shadow-lg rounded-full px-6 py-2 flex gap-4 z-50 transition-all duration-500 backdrop-blur-sm ${visible ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}
        >
            <NavItem href="#hero" icon={<Home size={20} />} label="Beranda" />
            <NavItem href="#countdown" icon={<Calendar size={20} />} label="Tanggal" />
            <NavItem href="#event" icon={<Users size={20} />} label="Acara" />
            <NavItem href="#gallery" icon={<Image size={20} />} label="Galeri" />
            <NavItem href="#gift" icon={<Gift size={20} />} label="Hadiah" />
            <NavItem href="#rsvp" icon={<PencilLine size={20} />} label="RSVP" />
        </nav>
    );
}

function NavItem({
    href,
    icon,
    label,
}: {
    href: string;
    icon: React.ReactNode;
    label: string;
}) {
    return (
        <a
            href={href}
            className="flex flex-col items-center justify-center text-white hover:text-yellow-300 transition-colors duration-200"
        >
            {icon}
            <span className="text-xs mt-1">{label}</span>
        </a>
    );
}
