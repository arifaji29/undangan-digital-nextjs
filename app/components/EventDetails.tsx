'use client';

import { weddingDate } from '../constants';

function formatDate(date: Date): string {
  return date.toLocaleDateString('id-ID', {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });
}

export default function EventDetails() {
  // H-2 untuk akad nikah
  const akadDate = new Date(weddingDate);
  akadDate.setDate(weddingDate.getDate() - 2);

  return (
    <section data-aos="fade-up" className="bg-stone-100 text-stone-800 py-16 px-4">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-4xl font-serif mb-8">Detail Acara</h2>
        <div className="flex flex-col md:flex-row justify-center gap-8">
          {/* Kartu Akad Nikah */}
          <div data-aos="fade-up" data-aos-delay="200" className="bg-white p-8 rounded-lg shadow-lg flex-1">
            <h3 className="text-3xl font-serif text-stone-700 mb-4">Akad Nikah</h3>
            <p className="text-lg mb-2">{formatDate(akadDate)}</p>
            <p className="text-lg mb-4">Pukul 09:00 WIB - Selesai</p>
            <p className="text-base">Rumah mempelai putri</p>
            <p className="text-sm text-gray-500">
             Jl. Karya Budiman Kelurahan Condet No 223 RT 12 RW 06 Kampung Tengah Kramat Jati Jakarta Timur
            </p>
            <a
              href="https://www.google.com/maps/place/Kampung+Tengah,+Kramat+Jati,+East+Jakarta+City,+Jakarta/@-6.2888248,106.8541007,15z/data=!3m1!4b1!4m6!3m5!1s0x2e69f27d678c9fad:0xa808eda46bc58c07!8m2!3d-6.2900045!4d106.8672736!16s%2Fg%2F1229kpn1?entry=ttu&g_ep=EgoyMDI1MDcxMy4wIKXMDSoASAFQAw%3D%3D"
              className="mt-6 inline-block bg-stone-700 text-white py-2 px-6 rounded-full hover:bg-stone-800 transition-colors"
            >
              Lihat Peta
            </a>
          </div>

          {/* Kartu Resepsi */}
          <div data-aos="fade-up" data-aos-delay="400" className="bg-white p-8 rounded-lg shadow-lg flex-1">
            <h3 className="text-3xl font-serif text-stone-700 mb-4">Resepsi</h3>
            <p className="text-lg mb-2">{formatDate(weddingDate)}</p>
            <p className="text-lg mb-4">Pukul 12:00 WIB - Selesai</p>
            <p className="text-base">Gedung Serbaguna Al Rahman</p>
            <p className="text-sm text-gray-500">
              Jl. lingkar PTB, RT.1/RW.12, Duren Sawit, Kec. Duren Sawit, Kota Jakarta Timur
            </p>
            <a
              href="https://www.google.com/maps/place/Gedung+Serbaguna+Al+Rahman.+Masjid+Jami'+Baiturrahman+Duren+Sawit+Jakarta+Timur/@-6.2262782,106.8432479,13z/data=!4m10!1m2!2m1!1sgedung+serbaguna+pernikahan+jakarta+timur!3m6!1s0x2e698de796863e2b:0xf8a57b4af5163286!8m2!3d-6.2262782!4d106.9153457!15sCilnZWR1bmcgc2VyYmFndW5hIHBlcm5pa2FoYW4gamFrYXJ0YSB0aW11clorIilnZWR1bmcgc2VyYmFndW5hIHBlcm5pa2FoYW4gamFrYXJ0YSB0aW11cpIBDXdlZGRpbmdfdmVudWWaASNDaFpEU1VoTk1HOW5TMFZKUTBGblNVUXRNVGRETTBSUkVBRaoBfAoIL20vMDgxaHYQASofIhtnZWR1bmcgc2VyYmFndW5hIHBlcm5pa2FoYW4oJjIeEAEiGiyxC1CcwYZATmyKSqNa23hIl4g0J5Qm8L08Mi0QAiIpZ2VkdW5nIHNlcmJhZ3VuYSBwZXJuaWthaGFuIGpha2FydGEgdGltdXLgAQD6AQQIABA6!16s%2Fg%2F11f6yw7cg_?entry=ttu&g_ep=EgoyMDI1MDcxMy4wIKXMDSoASAFQAw%3D%3D"
              className="mt-6 inline-block bg-stone-700 text-white py-2 px-6 rounded-full hover:bg-stone-800 transition-colors"
            >
              Lihat Peta
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
