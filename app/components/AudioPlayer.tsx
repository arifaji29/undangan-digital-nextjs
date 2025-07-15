'use client';

import { useRef, forwardRef, useImperativeHandle } from 'react';

// Tipe untuk handle yang bisa diakses oleh parent
export interface AudioPlayerHandle {
  playMusic: () => void;
  pauseMusic: () => void;
}

// 1. Definisikan tipe untuk props, meskipun kosong.
interface AudioPlayerProps {}

// 2. Gunakan tipe props yang baru dan ubah 'props' menjadi '_props' 
//    karena tidak digunakan.
const AudioPlayer = forwardRef<AudioPlayerHandle, AudioPlayerProps>((_props, ref) => {
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