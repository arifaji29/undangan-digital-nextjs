'use client';

import { useRef, forwardRef, useImperativeHandle } from 'react';

// Tentukan tipe untuk handle yang bisa diakses oleh parent
export interface AudioPlayerHandle {
  playMusic: () => void;
  pauseMusic: () => void;
}

// Komponen ini tidak akan me-render apa pun yang terlihat
const AudioPlayer = forwardRef<AudioPlayerHandle, {}>((props, ref) => {
  const audioRef = useRef<HTMLAudioElement>(null);

  // useImperativeHandle mengekspos fungsi ke komponen parent melalui ref
  useImperativeHandle(ref, () => ({
    playMusic() {
      audioRef.current?.play().catch(error => console.error("Gagal memutar audio:", error));
    },
    pauseMusic() {
      audioRef.current?.pause();
    }
  }));

  return (
    <audio ref={audioRef} src="/musik.mp3" loop />
  );
});

// Tambahkan display name untuk debugging
AudioPlayer.displayName = 'AudioPlayer';

export default AudioPlayer;