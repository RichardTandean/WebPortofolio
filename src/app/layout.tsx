import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Nav } from "@/components/nav";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Richard Tandean",
  description: "Richard Tandean's Portfolio",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const childrenString = children?.toString() || '';
  const isAdminRoute = childrenString.includes('/admin/');

  return (
    <html lang="en">
      <body className={inter.className}>
        {!isAdminRoute && <Nav />}
        {children}
      </body>
    </html>
  );
}
