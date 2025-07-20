'use client';

import Image from 'next/image';
import { weddingDate } from '../constants';
import { FaInstagram } from 'react-icons/fa';

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

export default function Hero() {
  return (
    <section
      id="hero"
      data-aos="fade-up"
      className="relative h-screen flex items-center justify-center text-center text-stone-700 p-5 overflow-hidden"
    >
      {/* Background */}
      <div className="absolute inset-0 overflow-hidden">
        <Image
          src="/images/hero-image.jpg"
          alt="Foto Pre-Wedding Tono & Tini"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-white/50" />
      </div>

      {/* Bunga Dekoratif Atas Kiri */}
      <div
        className="absolute top-0 left-0 w-35 h-35 animate-[float-rotate_6s_ease-in-out_infinite] z-10"
        style={{ transform: 'translate(-90%, -90%)' }}
        data-aos="fade-down"
        data-aos-delay="1000"
        data-aos-duration="1200"
      >
        <Image
          src="/images/flower1.png"
          alt=""
          width={100}
          height={100}
          className="w-full h-full object-contain"
        />
      </div>

      {/* Bunga Dekoratif Bawah Kanan */}
      <div
        className="absolute bottom-0 right-0 w-35 h-35 animate-[float_6s_ease-in-out_infinite] z-10"
        style={{ transform: 'translate(-90%, -90%)' }}
        data-aos="fade-up"
        data-aos-delay="1000"
        data-aos-duration="1200"
      >
        <Image
          src="/images/flower2.png"
          alt=""
          width={100}
          height={100}
          className="w-full h-full object-contain"
        />
      </div>

      {/* Konten */}
      <div data-aos="fade-up" data-aos-delay="400" className="relative z-10">
        <div>
          <p className="text-4xl mb-3" style={{ fontFamily: 'signature' }}>
            Assalamu&#39;alaikum Wr. Wb.
          </p>
          <p className="text-base mb-3" style={{ fontFamily: 'SourgummyLight' }}>
            Tanpa mengurangi rasa hormat. Kami mengundang Bapak/Ibu/Saudara/i serta kerabat sekalian untuk menghadiri acara pernikahan kami :
          </p>
        </div>

        <h1 className="text-7xl mt-2 mb-3" style={{ fontFamily: 'tentangnanti' }}>
          Tono & Tini
        </h1>

        <div className="flex justify-center items-center gap-8 flex-wrap">
          {/* Tono */}
          <div className="flex flex-col items-center">
            <Image
              src="/images/tono.jpg"
              alt="Tono"
              width={100}
              height={100}
              className="rounded-full object-cover shadow-md"
            />
            <a
              style={{ fontFamily: 'SourgummyThin' }}
              href="https://instagram.com/tono_username"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1 text-white bg-black/50 px-3 py-1 mt-2 rounded-md hover:bg-black transition text-sm"
            >
              <FaInstagram />
              <span>@tono_321</span>
            </a>
          </div>

          {/* Tini */}
          <div className="flex flex-col items-center">
            <Image
              src="/images/tini.jpg"
              alt="Tini"
              width={100}
              height={100}
              className="rounded-full object-cover shadow-md"
            />
            <a
              style={{ fontFamily: 'SourgummyThin' }}
              href="https://instagram.com/tini_username"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1 text-white bg-black/50 px-3 py-1 mt-2 rounded-md hover:bg-black transition text-sm"
            >
              <FaInstagram />
              <span>@tini_123</span>
            </a>
          </div>
        </div>

        <br />

        <p
          data-aos="fade-up"
          data-aos-delay="700"
          className="text-base mt-3 mb-2"
          style={{ fontFamily: 'SourgummyLight' }}
        >
          yang akan dilaksanakan pada:
        </p>
        <p className="text-xl text-stone-700" style={{ fontFamily: 'SourgummyMed' }}>{formattedDate}</p>
        <p className="text-lg text-stone-700" style={{ fontFamily: 'SourgummyLight' }}>
          Pukul {formattedTime} WIB
        </p>
      </div>
    </section>
  );
}
