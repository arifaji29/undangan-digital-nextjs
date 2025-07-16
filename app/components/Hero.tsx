'use client';

import Image from 'next/image';
import { weddingDate } from '../constants'; // Import tanggal pernikahan

// Format tanggal dan jam dalam Bahasa Indonesia
const formattedDate = weddingDate.toLocaleDateString('id-ID', {
  weekday: 'long',
  year: 'numeric',
  month: 'long',
  day: 'numeric',
});

const formattedTime = weddingDate.toLocaleTimeString('id-ID', {
  hour: '2-digit',
  minute: '2-digit',
  hour12: false,
});

export default function Hero({ guestName }: { guestName: string }) {
  return (
    <section
      data-aos="fade-up"
      className="min-h-screen relative flex items-center justify-center text-center text-stone-700 p-4"
    >
      {/* Latar Belakang Gambar */}
      <div className="absolute inset-0 overflow-hidden">
        <Image
          src="/images/hero-image.jpg"
          alt="Foto Pre-Wedding Tono & Tini"
          layout="fill"
          objectFit="cover"
          priority
        />
      </div>

      {/* Konten Teks */}
      <div data-aos="fade-up" data-aos-delay="400" className="relative z-10">
        <div className="mb-8">
          <p className="text-lg font-light">Kepada Yth. Bapak/Ibu/Saudara/i</p>
          <p className="text-3xl font-bold mt-2">{guestName.replace(/%20/g, ' ')}</p>
        </div>

        <h2
          data-aos="fade-up"
          data-aos-delay="500"
          className="text-xl font-light tracking-wider mb-4"
          style={{ fontFamily: 'sans-serif' }}
        >
          PERNIKAHAN
        </h2>
        <h1
          data-aos="fade-up"
          data-aos-delay="600"
          className="text-6xl md:text-8xl mb-6"
          style={{ fontFamily: 'serif' }}
        >
          Tono & Tini
        </h1>
        <p
          data-aos="fade-up"
          data-aos-delay="700"
          className="text-lg mb-2"
        >
          Dengan segala hormat mengundang Anda pada acara pernikahan kami yang akan dilaksanakan pada:
        </p>
        <div
          data-aos="fade-up"
          data-aos-delay="800"
          className="mt-4 flex justify-center"
        >
          <div className="bg-white/60 backdrop-blur-sm border border-white/30 rounded-lg px-6 py-3 shadow-md">
            <p className="text-base font-bold text-stone-800">{formattedDate}</p>
            <p className="text-base font-bold text-stone-800">Pukul {formattedTime} WIB</p>
          </div>
        </div>
      </div>
    </section>
  );
}
