'use client';
export const dynamic = 'force-dynamic';

import { Suspense } from 'react';
import InvitationClient from './InvitationClient';
import { useSearchParams } from 'next/navigation';

function Inner() {
  const searchParams = useSearchParams();
  const guestName = searchParams.get('to') || 'Tamu Undangan';

  return <InvitationClient guestName={guestName} />;
}

export default function HomePage() {
  return (
    <Suspense fallback={<div>Loading undangan...</div>}>
      <Inner />
    </Suspense>
  );
}
