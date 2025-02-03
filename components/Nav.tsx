"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const links = [
  {
    name: "home",
    path: "/",
  },
  {
    name: "products",
    path: "/products",
  },
  {
    name: "cart",
    path: "/cart",
  },
  {
    name: "contact",
    path: "/contact",
  },
  {
    name: "login",
    path: "/login",
  },
];

const Nav: React.FC = () => {
  const pathname = usePathname();
  return (
    <nav className="flex gap-8">
      {links.map((link, index) => {
        return (
          <Link
            href={link.path}
            key={index}
            className={`${
              link.path === pathname &&
              "text-accent-light dark:text-accent-dark border-b-2 border-accent-light dark:border-accent-dark"
            } capitalize font-medium hover:text-accent-light dark:hover:text-accent-dark transition-all`}
          >
            {link.name}
          </Link>
        );
      })}
    </nav>
  );
};

export default Nav;
