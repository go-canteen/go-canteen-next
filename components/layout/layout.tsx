import {
  HomeIcon,
  ClipboardDocumentIcon,
  ArrowPathIcon,
  UserCircleIcon,
} from "@heroicons/react/24/outline";
import {
  HomeIcon as HomeIconSolid,
  ClipboardDocumentIcon as ClipboardDocumentIconSolid,
  ArrowPathIcon as ArrowPathIconSolid,
  UserCircleIcon as UserCircleIconSolid,
} from "@heroicons/react/24/solid";
import { useSession } from "next-auth/react";
import { useRouter } from "next/router";
import { NavItem } from "./nav-item";

export const Layout = ({ children }) => {
  return (
    <div className="max-w-xl mx-auto bg-white shadow">
      <div className="container min-h-screen pb-16">{children}</div>
      <div className="w-full max-w-xl flex bg-white border-t-2 h-16 justify-between py-4 px-8 fixed bottom-0">
        {NAV_ITEMS.map((item, i) => (
          <NavItem key={i} {...item} />
        ))}
      </div>
    </div>
  );
};

const NAV_ITEMS = [
  {
    label: "Toko",
    href: "/",
    icon: <HomeIcon className="h-8 w-8" />,
    activeIcon: <HomeIconSolid className="h-8 w-8" />,
  },
  {
    label: "Pesanan",
    href: "/order",
    icon: <ClipboardDocumentIcon className="h-8 w-8" />,
    activeIcon: <ClipboardDocumentIconSolid className="h-8 w-8" />,
  },
  {
    label: "Riwayat",
    href: "/history",
    icon: <ArrowPathIcon className="h-8 w-8" />,
    activeIcon: <ArrowPathIconSolid className="h-8 w-8" />,
  },
  {
    label: "Akun",
    href: "/account",
    icon: <UserCircleIcon className="h-8 w-8" />,
    activeIcon: <UserCircleIconSolid className="h-8 w-8" />,
  },
];
