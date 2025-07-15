import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import AOSInitializer from './AOSInitializer'; // <-- Impor komponen baru

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Undangan Digital', // Anda bisa ganti judulnya
  description: 'Undangan Pernikahan Tono & Tini', // Ganti deskripsinya
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id">
      <body className={inter.className}>
        <AOSInitializer /> {/* <-- Tambahkan komponennya di sini */}
        {children}
      </body>
    </html>
  );
}