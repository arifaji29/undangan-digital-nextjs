'use client';

import { forwardRef, useImperativeHandle, useRef } from 'react';

export type AudioPlayerHandle = {
  playMusic: () => void;
  pauseMusic: () => void;
};

// Gunakan `object` sebagai pengganti {} untuk tipe props yang lebih aman
const AudioPlayer = forwardRef<AudioPlayerHandle, object>((_, ref) => {
  const audioRef = useRef<HTMLAudioElement>(null);

  useImperativeHandle(ref, () => ({
    playMusic() {
      audioRef.current?.play();
    },
    pauseMusic() {
      audioRef.current?.pause();
    },
  }));

  return (
    <audio ref={audioRef} loop>
      <source src="/musik.mp3" type="audio/mpeg" />
      Your browser does not support the audio element.
    </audio>
  );
});

// Tambahkan display name agar ESLint tidak error
AudioPlayer.displayName = 'AudioPlayer';

export default AudioPlayer;
