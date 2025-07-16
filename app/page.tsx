// app/page.tsx
import { Suspense } from 'react';
import InvitationWrapper from './components/InvitationWrapper';

export const dynamic = 'force-dynamic';

export default function HomePage() {
  return (
    <Suspense fallback={<div>Memuat undangan...</div>}>
      <InvitationWrapper />
    </Suspense>
  );
}
