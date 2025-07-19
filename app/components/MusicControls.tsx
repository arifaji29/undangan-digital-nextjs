'use client';

import { useEffect, useState } from 'react';
import { FaPlay, FaPause } from 'react-icons/fa';
import { AudioPlayerHandle } from './AudioPlayer';

type MusicControlsProps = {
  audioRef: React.RefObject<AudioPlayerHandle | null>;
};

export default function MusicControls({ audioRef }: MusicControlsProps) {
  const [isPlaying, setIsPlaying] = useState(false);

  // Auto-play ketika komponen pertama kali dimount
  useEffect(() => {
    const tryAutoPlay = async () => {
      try {
        await audioRef.current?.playMusic();
        setIsPlaying(true);
      } catch (error) {
        console.warn('Autoplay gagal (kemungkinan diblokir browser):', error);
      }
    };

    tryAutoPlay();
  }, [audioRef]);

  const toggleMusic = () => {
    const player = audioRef.current;
    if (!player) return;

    if (isPlaying) {
      player.pauseMusic();
    } else {
      player.playMusic();
    }

    setIsPlaying((prev) => !prev);
  };

  return (
    <div className="fixed bottom-4 right-4 z-50">
      <button
        onClick={toggleMusic}
        className="bg-white/80 hover:bg-white text-gray-700 p-3 rounded-full shadow-md transition"
        aria-label={isPlaying ? 'Pause music' : 'Play music'}
      >
        {isPlaying ? <FaPause /> : <FaPlay />}
      </button>
    </div>
  );
}
