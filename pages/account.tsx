import { useSession } from "next-auth/react";
import Head from "next/head";
import { PageLoadingComponent } from "../components/common/page-loading";
import { AccountContainer } from "../components/container/account";
import { GuestContainer } from "../components/container/guest";

export default function AccountPage() {
  const { status } = useSession();

  return (
    <div>
      <Head>
        <title>Akun Saya</title>
        <meta name="description" content="Akun saya" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {status === "loading" && <PageLoadingComponent />}
      {status === "unauthenticated" && <GuestContainer />}
      {status === "authenticated" && <AccountContainer />}
    </div>
  );
}
