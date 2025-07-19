'use client';

import { forwardRef, useImperativeHandle, useRef } from 'react';

export type AudioPlayerHandle = {
  playMusic: () => void;
  pauseMusic: () => void;
};

const AudioPlayer = forwardRef<AudioPlayerHandle, {}>((_, ref) => {
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
    </audio>
  );
});

export default AudioPlayer;
