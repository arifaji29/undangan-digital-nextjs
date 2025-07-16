// app/page.tsx
'use client'; // Wajib agar bisa pakai useSearchParams

import { useSearchParams } from 'next/navigation';
import InvitationClient from './InvitationClient';

export default function HomePage() {
  const searchParams = useSearchParams();
  const guestName = searchParams.get('to') || 'Tamu Undangan';

  return <InvitationClient guestName={guestName} />;
}
