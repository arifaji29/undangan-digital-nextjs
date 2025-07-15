'use client'; 

import { useState, useRef } from 'react';

// Impor semua komponen Anda
import Cover from './components/Cover';
import Hero from './components/Hero';
import WeddingCountdown from './components/Countdown';
import EventDetails from './components/EventDetails';
import RSVPForm from './components/RSVPForm';
import Guestbook from './components/Guestbook';
import PhotoGallery from './components/Gallery';
import DigitalGift from './components/DigitalGift';
import AudioPlayer, { AudioPlayerHandle } from './components/AudioPlayer';

// HAPUS 'async' DARI SINI
export default function InvitationClient({ guestName }: { guestName: string }) {
  // Semua state dan ref berada di sini
  const [isOpen, setIsOpen] = useState(false);
  const audioPlayerRef = useRef<AudioPlayerHandle>(null);

  // Fungsi ini tidak perlu async juga
  const handleOpenInvitation = () => {
    setIsOpen(true);
    audioPlayerRef.current?.playMusic();
  };

  return (
    <>
      <AudioPlayer ref={audioPlayerRef} />

      {!isOpen && (
        <Cover guestName={guestName} onOpen={handleOpenInvitation} />
      )}

      {isOpen && (
        <main className="bg-gray-50 font-sans">
          <Hero guestName={guestName} />
          <WeddingCountdown />
          <EventDetails />
          <PhotoGallery />
          <DigitalGift />
          <RSVPForm />
          <Guestbook />
        </main>
      )}
    </>
  );
}