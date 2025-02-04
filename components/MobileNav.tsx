"use client";

import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { CiMenuFries } from "react-icons/ci";
import ThemeButton from "./ThemeButton";

const links = [
  {
    name: "home",
    path: "/dashboard",
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
];

const MobileNav: React.FC = () => {
  const pathname = usePathname();
  return (
    <Sheet>
      <SheetTrigger className="flex justify-center items-center">
        <CiMenuFries className="text-[32px] text-accent-light dark:text-accent-dark" />
      </SheetTrigger>
      <SheetContent className="flex flex-col">
        {/* logo */}
        <div className="mt-32 mb-40 text-center text-2xl">
          <Link href="/">
            <h1 className="text-4xl font-semibold">
              Tech Retail SPA
              <span className="text-accent-light dark:text-accent-dark">.</span>
            </h1>
          </Link>
        </div>
        <div className=""></div>
        {/* nav */}
        <nav className="flex flex-col justify-center items-center gap-8">
          {links.map((link, index) => {
            return (
              <Link
                href={link.path}
                key={index}
                className={`${
                  link.path === pathname &&
                  "text-accent-light dark:text-accent-dark border-b-2 border-accent-light dark:border-accent-dark"
                } text-xl capitalize hover:text-accent-light dark:hover:text-accent-dark transition-all`}
              >
                {link.name}
              </Link>
            );
            1;
          })}
          <ThemeButton />
        </nav>
      </SheetContent>
    </Sheet>
  );
};

export default MobileNav;
