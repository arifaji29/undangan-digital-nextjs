'use client'; // Agar bisa pakai useSearchParams
export const dynamic = 'force-dynamic'; // Penting agar tidak prerender

import { useSearchParams } from 'next/navigation';
import InvitationClient from './InvitationClient';

export default function HomePage() {
  const searchParams = useSearchParams();
  const guestName = searchParams.get('to') || 'Tamu Undangan';

  return <InvitationClient guestName={guestName} />;
}
