// app/components/InvitationWrapper.tsx
'use client';

import { useSearchParams } from 'next/navigation';
import { Suspense } from 'react';
import InvitationClient from '../InvitationClient';

export default function InvitationWrapper() {
  const searchParams = useSearchParams();
  const guestName = searchParams.get('to') || 'Tamu Undangan';

  return <InvitationClient guestName={guestName} />;
}
