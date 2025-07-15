"use client";

import Image from 'next/image';

// Terima 'guestName' sebagai prop
export default function Hero({ guestName }: { guestName: string }) {
  return (
    <section data-aos="fade-up" className="min-h-screen relative flex items-center justify-center text-center text-stone-700 p-4">
      {/* Latar Belakang Gambar */}
      <div className="absolute inset-0 overflow-hidden">
        <Image
          src="/images/hero-image.jpg" // Ganti dengan path foto Anda
          alt="Foto Pre-Wedding Imam & Ratna"
          layout="fill"
          objectFit="cover"
          priority // Penting untuk gambar utama di halaman awal
        />
        {/* Efek Overlay Gelap */}
        {/* <div className="absolute inset-0 bg-black opacity-50"></div> */}
      </div>

      {/* Konten Teks di Atas Gambar */}
      <div data-aos="fade-up" data-aos-delay="400" className="relative z-10">
        {/* Nama Tamu */}
        <div className="mb-8">
          <p className="text-lg font-light ">Kepada Yth. Bapak/Ibu/Saudara/i</p>
          <p className="text-3xl font-bold mt-2">{guestName.replace(/%20/g, ' ')}</p>
        </div>

        {/* Teks Utama */}
        <h2 data-aos="fade-up" data-aos-delay="500" className="text-xl font-light tracking-wider mb-4" style={{ fontFamily: 'sans-serif' }}>
          PERNIKAHAN
        </h2>
        <h1 data-aos="fade-up" data-aos-delay="600" className="text-6xl md:text-8xl mb-6" style={{ fontFamily: 'serif' }}>
          Tono & Tini
        </h1>
        <p data-aos="fade-up" data-aos-delay="700" className="text-lg mb-2">
          Dengan segala hormat mengundang Anda pada acara pernikahan kami yang akan dilaksanakan pada:
        </p>
        <p data-aos="fade-up" data-aos-delay="800" className="text-2xl font-bold tracking-widest">
          Sabtu, 14 Februari 2026
        </p>
      </div>
    </section>
  );
}