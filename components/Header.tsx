import Link from "next/link";
import { Button } from "./ui/button";

//components
import Nav from "./Nav";
import MobileNav from "./MobileNav";
import ThemeButton from "./ThemeButton";
import React from "react";

const Header: React.FC = () => {
  return (
    <header className="py-8 xl:py-12 text-text-light dark:text-text-dark">
      <div className="container mx-auto flex justify-between items-center">
        <Link href="/">
          <h1 className="text-4xl font-semibold">
            Tech Retail SPA
            <span className="text-accent-light dark:text-accent-dark">.</span>
          </h1>
        </Link>
        {/* Desktop Nav & hire me button */}
        <div className="hidden xl:flex items-center gap-8">
          <Nav />
          <Link href="/contact">
            <Button>Login</Button>
          </Link>
          <ThemeButton />
        </div>

        {/* Mobile nav */}
        <div className="xl:hidden">
          <MobileNav />
        </div>
      </div>
    </header>
  );
};

export default Header;
