'use client';

import { useState, useEffect } from 'react';
import { supabase } from '@/lib/supabaseClient';

interface GuestbookEntry {
  id: number;
  created_at: string;
  name: string;
  message: string;
}

// UBAH NAMA FUNGSI INI
export default function Guestbook() { 
  const [entries, setEntries] = useState<GuestbookEntry[]>([]);
  const [loading, setLoading] = useState(true);
  const [name, setName] = useState('');
  const [message, setMessage] = useState('');
  const [submitting, setSubmitting] = useState(false);

  async function fetchGuestbookEntries() {
    setLoading(true);
    const { data, error } = await supabase
      .from('guestbook')
      .select('*')
      .order('created_at', { ascending: false });
    if (error) console.error('Gagal mengambil data:', error);
    else if (data) setEntries(data);
    setLoading(false);
  }

  useEffect(() => {
    fetchGuestbookEntries();
  }, []);

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!name || !message) {
      alert('Nama dan pesan tidak boleh kosong!');
      return;
    }
    setSubmitting(true);
    const { error } = await supabase
      .from('guestbook')
      .insert([{ name: name, message: message }]);

    if (error) {
      console.error('Gagal mengirim ucapan:', error);
      alert('Terjadi kesalahan saat mengirim ucapan.');
    } else {
      setName('');
      setMessage('');
      await fetchGuestbookEntries();
    }
    setSubmitting(false);
  }

  // Tampilannya kita bungkus dalam satu section
  return (
    <section className="max-w-2xl mx-auto p-8">
      {/* FORM UNTUK MENGIRIM UCAPAN */}
      <form onSubmit={handleSubmit} className="mb-8 p-4 border rounded-lg bg-white shadow-sm">
        <h2 className="text-2xl font-bold mb-4 text-center">Kirim Ucapan & Doa</h2>
        <div className="mb-4">
          <label htmlFor="name" className="block mb-1 font-medium">Nama:</label>
          <input
            id="name"
            type="text"
            className="w-full p-2 border rounded"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div className="mb-4">
          <label htmlFor="message" className="block mb-1 font-medium">Ucapan:</label>
          <textarea
            id="message"
            className="w-full p-2 border rounded"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            rows={3}
          />
        </div>
        <button
          type="submit"
          className="w-full bg-blue-500 text-white p-2 rounded hover:bg-blue-600 disabled:bg-gray-400"
          disabled={submitting}
        >
          {submitting ? 'Mengirim...' : 'Kirim Ucapan'}
        </button>
      </form>
      
      {/* DAFTAR UCAPAN */}
      <h2 className="text-2xl font-bold mb-4">Daftar Ucapan</h2>
      {loading && <p className="text-center">Memuat ucapan...</p>}
      <div className="space-y-4">
        {entries.map((entry) => (
          <div key={entry.id} className="bg-gray-100 p-4 rounded-lg shadow">
            <p className="font-bold">{entry.name}</p>
            <p className="text-gray-700">{entry.message}</p>
            <p className="text-xs text-gray-500 mt-2">
              {new Date(entry.created_at).toLocaleString('id-ID')}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}