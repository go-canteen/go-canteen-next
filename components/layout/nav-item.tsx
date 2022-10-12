import Link from "next/link";
import { useRouter } from "next/router";

export const NavItem = ({
  icon,
  activeIcon,
  label,
  href,
}: {
  icon: JSX.Element;
  activeIcon: JSX.Element;
  label: string;
  href: string;
}) => {
  const router = useRouter();
  const isActive = router.pathname === href;

  return (
    <Link href={href}>
      <a
        className={`flex flex-col justify-center items-center ${
          isActive ? "text-black" : "text-gray-500"
        }`}
      >
        <div>{isActive ? activeIcon : icon}</div>
        <div className="text-xs">{label}</div>
      </a>
    </Link>
  );
};
