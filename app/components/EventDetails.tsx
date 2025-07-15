export default function EventDetails() {
  return (
    <section data-aos="fade-up" className="bg-stone-100 text-stone-800 py-16 px-4">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-4xl font-serif mb-8">Detail Acara</h2>
        <div className="flex flex-col md:flex-row justify-center gap-8">
          {/* Kartu Akad Nikah */}
          <div data-aos="fade-up" data-aos-delay="200" className="bg-white p-8 rounded-lg shadow-lg flex-1">
            <h3 className="text-3xl font-serif text-stone-700 mb-4">Akad Nikah</h3>
            <p className="text-lg mb-2">Sabtu, 14 Februari 2026</p>
            <p className="text-lg mb-4">Pukul 09:00 WIB - Selesai</p>
            <p className="text-base">Gedung Serbaguna Bidakara</p>
            <p className="text-sm text-gray-500">Jl. Jenderal Gatot Subroto Kav. 71-73, Jakarta Selatan</p>
            <a 
              href="#" 
              className="mt-6 inline-block bg-stone-700 text-white py-2 px-6 rounded-full hover:bg-stone-800 transition-colors"
            >
              Lihat Peta
            </a>
          </div>

          {/* Kartu Resepsi */}
          <div data-aos="fade-up" data-aos-delay="400" className="bg-white p-8 rounded-lg shadow-lg flex-1">
            <h3 className="text-3xl font-serif text-stone-700 mb-4">Resepsi</h3>
            <p className="text-lg mb-2">Sabtu, 14 Februari 2026</p>
            <p className="text-lg mb-4">Pukul 12:00 WIB - Selesai</p>
            <p className="text-base">Gedung Serbaguna Bidakara</p>
            <p className="text-sm text-gray-500">Jl. Jenderal Gatot Subroto Kav. 71-73, Jakarta Selatan</p>
            <a 
              href="#" 
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

