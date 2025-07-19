'use client';

import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css'; // Impor CSS untuk AOS

export default function AOSInitializer() {
  useEffect(() => {
    AOS.init({
      // Pengaturan global AOS:
      duration: 1200, // Durasi animasi dalam milidetik
      once: true,    // Apakah animasi hanya terjadi sekali saat scroll
    });
  }, []); // useEffect kosong berarti ini hanya akan berjalan sekali saat komponen dimuat

  return null; // Komponen ini tidak me-render apapun, hanya untuk inisialisasi
}