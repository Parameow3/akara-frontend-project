import type { Metadata } from "next";
import "./globals.css";
import { ubuntu } from "./util/front.conf";

export const metadata: Metadata = {
  title: "Akara Podcast",
  description: "Discover your way to find your greatest fortune.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${ubuntu}`}>{children}</body>
    </html>
  );
}
