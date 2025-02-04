"use client";

import { ILoginContextProvider, LoginContextType } from "@/lib/utils";
import { useRouter } from "next/navigation";
import { createContext, useContext, useEffect, useState } from "react";

const LoginContext = createContext<LoginContextType | null>(null);

const LoginContextProvider: React.FC<ILoginContextProvider> = ({
  children,
}) => {
  const [token, setToken] = useState<string | null>(null);
  const router = useRouter();

  useEffect(() => {
    // Load token from local storage on initial load
    const savedToken = localStorage.getItem("token");
    if (savedToken) {
      setToken(savedToken);
    }
  }, []);

  const login = (token: string) => {
    setToken(token);
    localStorage.setItem("token", token); // Store token securely
  };

  const logout = () => {
    setToken(null);
    localStorage.removeItem("token");
    router.push("/login");
  };

  const isAuthenticated = !!token;
  return (
    <LoginContext.Provider value={{ token, login, logout, isAuthenticated }}>
      {children}
    </LoginContext.Provider>
  );
};

export default LoginContextProvider;

export const useLogin = (): LoginContextType => {
  const context = useContext(LoginContext);
  if (!context) {
    throw new Error("useTheme must be used within a ThemeContextProvider");
  }
  return context;
};
