import Image from 'next/image';

// Daftar nama file foto Anda
const imageFiles = [
  'foto1.jpg',
  'foto2.jpg',
  'foto3.jpg',
  'foto4.jpg',
  'foto5.jpg',
  'foto6.jpg',
];

export default function PhotoGallery() {
  return (
    <section className="bg-stone-100 py-16 px-4">
      <div className="max-w-5xl mx-auto text-center">
        <h2 data-aos="fade-up" className="text-4xl font-serif mb-8 text-stone-800">Momen Bahagia Kami</h2>
        {/* Grid untuk galeri foto */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {imageFiles.map((file, index) => (
            <div key={index} data-aos="zoom-in" data-aos-delay={100 * (index % 3)} className="aspect-square relative rounded-lg overflow-hidden shadow-lg">
              <Image
                src={`/images/${file}`} // Path ke gambar di folder public
                alt={`Galeri foto ${index + 1}`}
                fill // 'fill' akan membuat gambar mengisi div
                className="object-cover" // 'object-cover' agar gambar tidak penyok
                sizes="(max-width: 768px) 50vw, 33vw"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}