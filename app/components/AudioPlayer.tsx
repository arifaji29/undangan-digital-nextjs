'use client';

import { useRef, forwardRef, useImperativeHandle } from 'react';

export interface AudioPlayerHandle {
  playMusic: () => void;
  pauseMusic: () => void;
}

// GANTI KOMENTAR DISABLE DENGAN NAMA ATURAN YANG BENAR
// eslint-disable-next-line @typescript-eslint/no-empty-object-type
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