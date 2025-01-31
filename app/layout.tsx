import type { Metadata } from "next";
import { Inter } from "next/font/google";

// components
import Header from "@/components/Header";
import PageTransition from "@/components/PageTransition";
import StairTransition from "@/components/StairTransition";
import ThemeContextProvider from "@/components/ThemeContextProvider";
import "./globals.css";

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
      <html lang="en">
        <body className={inter.className}>
          <Header />
          <StairTransition />
          <PageTransition>{children}</PageTransition>
        </body>
      </html>
    </ThemeContextProvider>
  );
}
