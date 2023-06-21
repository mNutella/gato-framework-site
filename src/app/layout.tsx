import "./globals.css";

import { clsx } from "clsx";

import Footer from "@/components/Footer";
import Nav from "@/components/Nav";
import { NAV_ITEMS } from "@/lib/data/nav";

import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "GATO Framework",
  description: "Global Cooperation on AI Safety",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={clsx(inter.className, "relative")}>
        <Nav items={NAV_ITEMS} />
        <main className="max-w-screen-2xl mx-auto px-6">{children}</main>
        <Footer items={NAV_ITEMS} />
      </body>
    </html>
  );
}
