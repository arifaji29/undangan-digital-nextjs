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
  const [isOpen, setIsOpen] = useState(false);
  const audioPlayerRef = useRef<AudioPlayerHandle>(null);

  const handleOpenInvitation = () => {
    setIsOpen(true);
    audioPlayerRef.current?.playMusic(); // auto-play setelah dibuka
  };

  return (
    <>
      {/* ✅ AudioPlayer hanya dirender sekali */}
      <AudioPlayer ref={audioPlayerRef} />

      {!isOpen ? (
        <Cover guestName={guestName} onOpen={handleOpenInvitation} />
      ) : (
        <>
          <main className="bg-gray-50 font-sans">
            <Hero guestName={guestName} />
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
      )}
    </>
  );
}
