'use client';

import Countdown, { CountdownRendererFn } from 'react-countdown';
import { weddingDate } from '../constants'; // 👉 Ambil dari satu sumber

// Komponen tampilan angka countdown
const TimeBox = ({ value, label }: { value: number; label: string }) => (
  <div className="flex flex-col items-center justify-center bg-white text-stone-800 rounded-lg p-4 w-24 h-24 shadow-lg">
    <span className="text-4xl font-bold">{value}</span>
    <span className="text-sm uppercase">{label}</span>
  </div>
);

// Renderer untuk countdown custom
const renderer: CountdownRendererFn = ({
  days,
  hours,
  minutes,
  seconds,
  completed,
}) => {
  if (completed) {
    return (
      <div className="text-2xl font-bold text-white">
        The event has started!
      </div>
    );
  } else {
    return (
      <div className="flex justify-center gap-4" style={{ fontFamily: 'SourgummyReg'}}>
        <TimeBox value={days} label="Hari" />
        <TimeBox value={hours} label="Jam" />
        <TimeBox value={minutes} label="Menit" />
        <TimeBox value={seconds} label="Detik" />
      </div>
    );
  }
};

export default function WeddingCountdown() {
  return (
    <section id="countdown" className="bg-stone-700 py-12">
      <Countdown date={weddingDate} renderer={renderer} />
    </section>
  );
}
