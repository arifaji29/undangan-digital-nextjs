'use client';

import { useState } from 'react';
import Image from 'next/image';

const bankAccounts = [
  {
    bankName: 'Bank Central Asia (BCA)',
    accountNumber: '1234567890',
    accountHolder: 'Tono',
  },
  {
    bankName: 'Bank Mandiri',
    accountNumber: '0987654321',
    accountHolder: 'Tini',
  },
];

export default function DigitalGift() {
  const [copied, setCopied] = useState('');

  const handleCopy = (text: string) => {
    navigator.clipboard.writeText(text).then(() => {
      setCopied(text);
      setTimeout(() => {
        setCopied('');
      }, 2000);
    }).catch(err => {
      console.error('Gagal menyalin teks: ', err);
      alert('Gagal menyalin nomor rekening.');
    });
  };

  return (
    <section id="gift" data-aos="fade-up" className="relative py-16 px-4 overflow-hidden">
      {/* Background dan overlay */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/hero-image.jpg"
          alt="Background Gift"
          layout="fill"
          objectFit="cover"
          priority
        />
        <div className="absolute inset-0 bg-white/50 backdrop-blur-sm" />
      </div>

      {/* Konten utama */}
      <div className="relative z-10 max-w-4xl mx-auto text-center">
        <h2 className="text-4xl font-serif mb-4 text-stone-800">Wedding Gift</h2>
        <p className="text-stone-600 mb-10 max-w-2xl mx-auto">
          Doa restu Anda adalah hadiah terindah bagi kami. Namun, jika Anda ingin memberikan tanda kasih, kami dengan senang hati akan menerimanya.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-left">
          {/* Kartu Hadiah Fisik */}
          <div data-aos="fade-up" data-aos-delay="300" className="bg-white p-6 rounded-lg shadow-lg">
            <h3 className="text-xl font-bold mb-3 text-stone-700">Kirim Hadiah</h3>
            <p className="font-semibold">Tono & Tini</p>
            <p className="text-stone-600">
              Jl. Karya Budiman Kelurahan Condet No 223 RT 12 RW 06 Kampung Tengah Kramat Jati Jakarta Timur
            </p>
          </div>

          {/* Kartu Amplop Digital */}
          <div data-aos="fade-up" data-aos-delay="600" className="bg-white p-6 rounded-lg shadow-lg">
            <h3 className="text-xl font-bold mb-3 text-stone-700">Amplop Digital</h3>
            <div className="space-y-4">
              {bankAccounts.map((account, index) => (
                <div key={index} className="border p-4 rounded-md">
                  <p className="font-semibold text-stone-800">{account.bankName}</p>
                  <p className="text-lg text-stone-600 my-1">{account.accountNumber}</p>
                  <p className="text-sm text-stone-500 mb-3">a.n. {account.accountHolder}</p>
                  <button
                    onClick={() => handleCopy(account.accountNumber)}
                    className={`w-full py-2 px-4 text-sm rounded-md transition-colors ${
                      copied === account.accountNumber
                        ? 'bg-green-500 text-white'
                        : 'bg-stone-700 text-white hover:bg-stone-800'
                    }`}
                  >
                    {copied === account.accountNumber ? 'Nomor Tersalin!' : 'Salin Nomor'}
                  </button>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
