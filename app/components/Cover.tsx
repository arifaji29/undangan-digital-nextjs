import { MailOpen } from 'lucide-react';
interface CoverProps {
  guestName: string;
  onOpen: () => void;
}

export default function Cover({ guestName, onOpen }: CoverProps) {
  return (
    <div className="fixed inset-0 z-50">
      {/* Background image */}
      <div
        className="absolute inset-0 bg-cover bg-center h-full w-full"
        style={{ backgroundImage: "url('/images/cover-bg.png')" }}
      />

      {/* Semi-transparent overlay */}
      <div className="absolute inset-0 bg-white/50" />

      {/* Main content */}
      <div className="relative z-10 flex flex-col justify-center items-center text-center h-full text-stone-800 drop-shadow-lg px-4 pt-20">
        <div className="mb-40 -mt-55"> {/* Geser lebih ke atas */}
          <h2 className="text-xl font-light tracking-wider mb-3">THE WEDDING OF</h2>
          <h1 className="text-6xl md:text-8xl font-serif mb-8">Tono & Tini</h1> {/* Tidak terlalu bold */}
        </div>

        <div className="mb-10">
          <p className="text-lg font-light">Kepada Yth. Bapak/Ibu/Saudara/i</p>
          <p className="text-3xl font-semibold mt-2">{guestName.replace(/%20/g, ' ')}</p>
        </div>

        <button
          onClick={onOpen}
          className="relative group bg-stone-800 text-white font-medium py-3 px-8 rounded-full shadow-lg hover:bg-stone-900 hover:scale-105 transition-transform"
        >
          <div className="flex items-center justify-center gap-2 z-10 relative">
            <MailOpen size={20} />
            <span>Buka Undangan</span>
          </div>
          <span className="absolute inset-0 w-full h-full rounded-full overflow-hidden">
            <span className="absolute top-0 left-[-100%] w-full h-full bg-white opacity-10 transform skew-x-[-20deg] group-hover:animate-shimmer" />
          </span>
        </button>
      </div>
    </div>
  );
}
