'use client';

import { MailOpen, CalendarCheck } from 'lucide-react';

interface CoverProps {
  guestName: string;
  hasOpened: boolean;
  onOpen: () => void;
}

export default function Cover({ guestName, hasOpened, onOpen }: CoverProps) {
  return (
    <div className="relative min-h-screen w-full bg-white">
      {/* Background image */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: "url('/images/cover-bg.png')" }}
      />

      {/* Semi-transparent overlay */}
      <div className="absolute inset-0 bg-white/70" />

      {/* Main content */}
      <div className="relative z-10 flex flex-col justify-center items-center text-center min-h-screen text-stone-800 px-4 pt-20 pb-50">
        <div className="mb-50">
          <h2 className="text-2xl mb-3" style={{ fontFamily: 'tentangnanti' }}>
            The Wedding Of
          </h2>
          <h1 className="text-7xl mb-3" style={{ fontFamily: 'tentangnanti' }}>
            Tono & Tini
          </h1>
        </div>

        <div className="mb-20">
          <p className="text-lg font-light">Kepada Yth. Bapak/Ibu/Saudara/i</p>
          <p className="text-3xl font-semibold mt-2">
            {guestName.replace(/%20/g, ' ')}
          </p>
        </div>

        <button
          onClick={onOpen}
          className="relative group bg-stone-800 text-white font-medium py-3 px-8 rounded-full shadow-lg hover:bg-stone-900 hover:scale-105 transition-transform"
        >
          <div className="flex items-center justify-center gap-2 z-10 relative">
            {hasOpened ? <CalendarCheck size={20} /> : <MailOpen size={20} />}
            <span>{hasOpened ? 'Save the Date' : 'Buka Undangan'}</span>
          </div>
          <span className="absolute inset-0 w-full h-full rounded-full overflow-hidden">
            <span className="absolute top-0 left-[-100%] w-full h-full bg-white opacity-10 transform skew-x-[-20deg] group-hover:animate-shimmer" />
          </span>
        </button>
      </div>
    </div>
  );
}
