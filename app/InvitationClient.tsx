'use client';

import { useState, useRef } from 'react';

import Cover from './components/Cover';
import Hero from './components/Hero';
import WeddingCountdown from './components/Countdown';
import EventDetails from './components/EventDetails';
import RSVPForm from './components/RSVPForm';
import Guestbook from './components/Guestbook';
import PhotoGallery from './components/Gallery';
import DigitalGift from './components/DigitalGift';
import AudioPlayer, { AudioPlayerHandle } from './components/AudioPlayer';
import StickyNav from './components/StickyNav';
import Footer from './components/Footer';
import MusicControls from './components/MusicControls';

export default function InvitationClient({ guestName }: { guestName: string }) {
  const [hasOpened, setHasOpened] = useState(false);
  const audioPlayerRef = useRef<AudioPlayerHandle>(null);
  const heroRef = useRef<HTMLDivElement>(null);

  const handleOpenInvitation = () => {
    // Play music saat pertama kali buka
    if (!hasOpened) {
      setHasOpened(true);
      audioPlayerRef.current?.playMusic();
    }

    // Scroll ke Hero
    scrollToHero();
  };

const scrollToHero = () => {
  if (heroRef.current) {
    const y = heroRef.current.offsetTop;
    window.scrollTo({ top: y, behavior: 'smooth' });
  }
};

  return (
    <>
      {/* Musik tetap berjalan di latar belakang */}
      <AudioPlayer ref={audioPlayerRef} />

      <main className="bg-gray-50 font-sans">
        {/* Cover dengan tombol buka undangan */}
        <Cover
          guestName={guestName}
          hasOpened={hasOpened}
          onOpen={handleOpenInvitation}
        />

        {/* Hero Section */}
        <div ref={heroRef}>
          <Hero  />
        </div>

        <WeddingCountdown />
        <EventDetails />
        <PhotoGallery />
        <DigitalGift />
        <RSVPForm />
        <Guestbook />
        <Footer />
      </main>

      <MusicControls audioRef={audioPlayerRef} />
      <StickyNav />
    </>
  );
}
