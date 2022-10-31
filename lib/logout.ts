import { signOut } from "next-auth/react";

const logout = () => {
  signOut({ callbackUrl: "/" });
};

export default logout;
