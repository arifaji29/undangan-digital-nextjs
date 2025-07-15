'use client';

import { useRef, forwardRef, useImperativeHandle } from 'react';

export interface AudioPlayerHandle {
  playMusic: () => void;
  pauseMusic: () => void;
}

// Komentar di bawah ini akan menonaktifkan aturan ESlint yang menyebabkan masalah
// eslint-disable-next-line @typescript-eslint/ban-types
const AudioPlayer = forwardRef<AudioPlayerHandle, {}>((_props, ref) => {
  const audioRef = useRef<HTMLAudioElement>(null);

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

AudioPlayer.displayName = 'AudioPlayer';

export default AudioPlayer;