import type { Metadata } from "next";
import { Inter } from "next/font/google";

// components
import ThemeContextProvider from "@/components/ThemeContextProvider";
import "./globals.css";
import Dashboard from "@/components/Dashboard";
import LoginContextProvider from "@/components/LoginContextProvider";

const inter = Inter({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
  title: "Tech Retail SPA",
  description: "Campania's and Lazio's biggest tech retailer",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ThemeContextProvider>
      <LoginContextProvider>
        <html lang="en">
          <body className={inter.className}>{children}</body>
        </html>
      </LoginContextProvider>
    </ThemeContextProvider>
  );
}
