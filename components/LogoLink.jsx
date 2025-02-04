import Link from "next/link";
import React from "react";

const LogoLink = () => {
  return (
    <Link href="/dashboard">
      <h1 className="text-4xl font-semibold">
        Tech Retail
        <span className="text-accent-light dark:text-accent-dark">.</span>
      </h1>
    </Link>
  );
};

export default LogoLink;
