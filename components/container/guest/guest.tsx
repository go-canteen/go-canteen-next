import { Button, Heading } from "@chakra-ui/react";
import { useRouter } from "next/router";
import { FC } from "react";

interface GuestContainerProps {
  title?: string;
}

export const GuestContainer: FC<GuestContainerProps> = ({ title }) => {
  const router = useRouter();

  return (
    <main className="p-4 h-[80vh] flex items-center">
      <div>
        <Heading size="lg">{title || "Selamat Datang"}</Heading>

        <p className="my-4 text-lg">
          Kamu menggunakan Gocanteen sebagai tamu. Silakan login untuk
          mendapatkan benefit lainnya.
        </p>

        <Button
          width="full"
          colorScheme="yellow"
          onClick={() => router.push("/login")}
        >
          Login
        </Button>

        <p className="mt-6 my-2">Belum memiliki akun? </p>

        <Button
          width="full"
          colorScheme="yellow"
          onClick={() => router.push("/register")}
        >
          Buat Akun
        </Button>
      </div>
    </main>
  );
};
