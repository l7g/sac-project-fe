"use client";

import { LoginForm } from "@/components/LoginForm";
import { GalleryVerticalEnd } from "lucide-react";
import React from "react";
import LogoLink from "@/components/LogoLink";

const Login = () => {
  return (
    <div className="h-full w-full flex flex-col">
      <div className="flex min-h-svh flex-col items-center justify-center gap-6 bg-muted p-6 md:p-10">
        <LogoLink />
        <div className="flex w-full max-w-sm flex-col gap-6">
          <LoginForm />
        </div>
      </div>
    </div>
  );
};

export default Login;
