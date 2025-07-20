'use client';

import { useState } from 'react';
import { supabase } from '@/lib/supabaseClient';

export default function RSVPForm() {
  // State untuk input form
  const [name, setName] = useState('');
  const [attendance, setAttendance] = useState('Hadir'); // Nilai default
  const [guestCount, setGuestCount] = useState(1);
  
  // State untuk proses submit
  const [submitting, setSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false); // Untuk menampilkan pesan sukses

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!name) {
      alert('Nama tidak boleh kosong!');
      return;
    }
    
    setSubmitting(true);
    // Kirim data ke tabel 'rsvp'
    const { error } = await supabase
      .from('rsvp')
      .insert([{ 
        name: name, 
        attendance: attendance, 
        guest_count: attendance === 'Hadir' ? guestCount : 0 // Jika tidak hadir, jumlah tamu 0
      }]);

    if (error) {
      console.error('Gagal mengirim RSVP:', error);
      alert('Terjadi kesalahan saat mengirim konfirmasi.');
    } else {
      // Jika berhasil, tampilkan pesan sukses
      setIsSubmitted(true);
    }
    setSubmitting(false);
  }

  // Jika sudah submit, tampilkan pesan terima kasih
  if (isSubmitted) {
    return (
      <section className="max-w-2xl mx-auto p-8 text-center">
        <div className="p-8 border rounded-lg bg-green-50 shadow-sm">
          <h2 className="text-2xl font-bold mb-2 text-green-800">Terima Kasih!</h2>
          <p className="text-green-700">Konfirmasi kehadiran Anda telah kami terima.</p>
        </div>
      </section>
    );
  }

  // Tampilan form jika belum submit
  return (
    <section id="rsvp" className="max-w-2xl mx-auto p-8" style={{ fontFamily: 'SourgummyReg'}}>
      <form onSubmit={handleSubmit} className="mb-8 p-6 border rounded-lg bg-white shadow-lg">
        <h2 className="text-3xl mb-6 text-center text-stone-800">Konfirmasi Kehadiran</h2>
        <div className="mb-4">
          <label htmlFor="rsvp-name" className="block mb-2 font-medium">Nama Lengkap:</label>
          <input
            id="rsvp-name"
            type="text"
            className="w-full p-2 border rounded"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div className="mb-4">
          <label htmlFor="attendance" className="block mb-2 font-medium">Konfirmasi:</label>
          <select
            id="attendance"
            className="w-full p-2 border rounded bg-white"
            value={attendance}
            onChange={(e) => setAttendance(e.target.value)}
          >
            <option value="Hadir">Insya Allah, Hadir</option>
            <option value="Tidak Hadir">Maaf, Berhalangan</option>
          </select>
        </div>
        {/* Hanya tampilkan jumlah tamu jika memilih "Hadir" */}
        {attendance === 'Hadir' && (
          <div className="mb-6">
            <label htmlFor="guest-count" className="block mb-2 font-medium">Jumlah Tamu (termasuk Anda):</label>
            <input
              id="guest-count"
              type="number"
              min="1"
              className="w-full p-2 border rounded"
              value={guestCount}
              onChange={(e) => setGuestCount(parseInt(e.target.value))}
            />
          </div>
        )}
        <button
          type="submit"
          className="w-full bg-stone-700 text-white p-3 rounded-lg hover:bg-stone-800 transition-colors disabled:bg-gray-400"
          disabled={submitting}
        >
          {submitting ? 'Mengirim...' : 'Kirim Konfirmasi'}
        </button>
      </form>
    </section>
  );
}