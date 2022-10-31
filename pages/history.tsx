import { useSession } from "next-auth/react";
import Head from "next/head";
import { PageLoadingComponent } from "../components/common/page-loading";
import { GuestContainer } from "../components/container/guest";

export default function HistoryPage() {
  const { status } = useSession();

  return (
    <div>
      <Head>
        <title>Riwayat</title>
        <meta name="description" content="Riwayat transaksi" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {status === "loading" && <PageLoadingComponent />}
      {status === "unauthenticated" && (
        <GuestContainer title="Riwayat Transaksi" />
      )}
      {status === "authenticated" && <div>Authenticated</div>}
    </div>
  );
}
