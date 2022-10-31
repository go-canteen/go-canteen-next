import { Button, Heading } from "@chakra-ui/react";
import { useSession } from "next-auth/react";
import { useState } from "react";
import logout from "../../../lib/logout";

export const AccountContainer = () => {
  const { data } = useSession();
  const [logoutLoading, setLogoutLoading] = useState(false);

  return (
    <main className="p-4">
      <Heading size="lg">
        Halo, {data.user.display_name || data.user.email}!
      </Heading>
      <Button
        colorScheme="red"
        onClick={() => {
          setLogoutLoading(true);
          logout();
        }}
        mt={4}
        isLoading={logoutLoading}
      >
        Keluar
      </Button>
    </main>
  );
};
