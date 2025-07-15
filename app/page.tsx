
// app/page.tsx
import InvitationClient from './InvitationClient';

// 👇 TAMBAHKAN BARIS INI UNTUK MEMAKSA MODE DINAMIS 👇
export const dynamic = 'force-dynamic';

export default function HomePage({
  searchParams,
}: {
  searchParams: { to?: string };
}) {
  const guestName = searchParams?.to || 'Tamu Undangan';
  
  return <InvitationClient guestName={guestName} />;
}