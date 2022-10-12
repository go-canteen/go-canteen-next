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
import { NavItem } from "./nav-item";

export const Layout = ({ children }) => {
  return (
    <div className="max-w-screen-sm mx-auto bg-white">
      <div className="container min-h-screen pb-16">{children}</div>
      <div className="w-full max-w-screen-sm flex bg-green-300 h-16 justify-between py-4 px-8 fixed bottom-0">
        {NAV_ITEMS.map((item, i) => (
          <NavItem key={i} {...item} />
        ))}
      </div>
    </div>
  );
};

const NAV_ITEMS = [
  {
    label: "Home",
    href: "/",
    icon: <HomeIcon className="h-8 w-8" />,
    activeIcon: <HomeIconSolid className="h-8 w-8" />,
  },
  {
    label: "Order",
    href: "/order",
    icon: <ClipboardDocumentIcon className="h-8 w-8" />,
    activeIcon: <ClipboardDocumentIconSolid className="h-8 w-8" />,
  },
  {
    label: "History",
    href: "/history",
    icon: <ArrowPathIcon className="h-8 w-8" />,
    activeIcon: <ArrowPathIconSolid className="h-8 w-8" />,
  },
  {
    label: "Account",
    href: "/account",
    icon: <UserCircleIcon className="h-8 w-8" />,
    activeIcon: <UserCircleIconSolid className="h-8 w-8" />,
  },
];
