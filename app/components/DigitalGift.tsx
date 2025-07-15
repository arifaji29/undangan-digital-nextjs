'use client';

import { useState } from 'react';

// Data untuk rekening bank, bisa Anda tambah atau kurangi
const bankAccounts = [
  {
    bankName: 'Bank Central Asia (BCA)',
    accountNumber: '1234567890',
    accountHolder: 'Imam',
  },
  {
    bankName: 'Bank Mandiri',
    accountNumber: '0987654321',
    accountHolder: 'Ratna',
  },
];

export default function DigitalGift() {
  // State untuk melacak nomor rekening mana yang baru saja disalin
  const [copied, setCopied] = useState('');

  // Fungsi untuk menangani aksi salin ke clipboard
  const handleCopy = (text: string) => {
    navigator.clipboard.writeText(text).then(() => {
      // Jika berhasil, simpan nomor yang disalin ke state
      setCopied(text);
      // Setelah 2 detik, reset state agar tombol kembali seperti semula
      setTimeout(() => {
        setCopied('');
      }, 2000);
    }).catch(err => {
      console.error('Gagal menyalin teks: ', err);
      alert('Gagal menyalin nomor rekening.');
    });
  };

  return (
    <section data-aos="fade-up" className="bg-stone-100 py-16 px-4">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-4xl font-serif mb-4 text-stone-800">Wedding Gift</h2>
        <p className="text-stone-600 mb-10 max-w-2xl mx-auto">
          Doa restu Anda adalah hadiah terindah bagi kami. Namun, jika Anda ingin memberikan tanda kasih, kami dengan senang hati akan menerimanya.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-left">
          {/* Kartu untuk Kirim Hadiah Fisik */}
          <div data-aos="fade-up" data-aos-delay="300" className="bg-white p-6 rounded-lg shadow-lg">
            <h3 className="text-xl font-bold mb-3 text-stone-700">Kirim Hadiah</h3>
            <p className="font-semibold">Imam & Ratna</p>
            <p className="text-stone-600">
              Jl. Kebahagiaan No. 25, RT 01/RW 02, <br />
              Kelurahan Sejahtera, Kecamatan Sentosa, <br />
              Kota Bahagia, 12345
            </p>
          </div>

          {/* Kartu untuk Amplop Digital */}
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