import Head from "next/head";
import { OrderContainer } from "../components/container/order";

export default function OrderPage() {
  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <OrderContainer />
    </div>
  );
}
