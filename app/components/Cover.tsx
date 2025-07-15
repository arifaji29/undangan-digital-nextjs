// Terima guestName dan fungsi onOpen sebagai props
interface CoverProps {
  guestName: string;
  onOpen: () => void; // Fungsi yang akan dipanggil saat tombol diklik
}

export default function Cover({ guestName, onOpen }: CoverProps) {
  return (
    <div 
      className="fixed inset-0 flex flex-col justify-center items-center text-center z-50 bg-cover bg-center"
      // Mengatur gambar latar belakang dari folder public
      style={{ backgroundImage: "url('/images/cover-bg.png')" }}
    >
      {/* Karena latar belakang sekarang putih, kita ganti warna teks menjadi gelap.
        Contoh: text-stone-800 atau text-gray-700.
      */}
      <div className="text-stone-800">
        <h2 className="text-xl font-light tracking-wider mb-4">THE WEDDING OF</h2>
        <h1 className="text-6xl md:text-8xl font-serif mb-12">Tono & Tini</h1>
        
        <div className="mb-8">
          <p className="text-lg font-light">Kepada Yth. Bapak/Ibu/Saudara/i</p>
          <p className="text-3xl font-bold mt-2">{guestName.replace(/%20/g, ' ')}</p>
        </div>

        <button
          onClick={onOpen}
          // Ubah style tombol agar kontras dengan latar belakang putih
          className="bg-stone-700 text-white font-bold py-3 px-8 rounded-full shadow-lg hover:bg-stone-800 hover:scale-105 transition-transform"
        >
          Buka Undangan
        </button>
      </div>
    </div>
  );
}