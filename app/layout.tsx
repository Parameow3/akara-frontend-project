import type { Metadata } from "next";
import "./globals.css";
import { Figtree } from "next/font/google";
import Sidebar from "@/components/ui/Sidebar";

const font = Figtree({ subsets: ["latin"] })

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
    <html lang="en" suppressHydrationWarning>
      <body className={`p-2 ${font.className}`}>
      <Sidebar>
          {children}
      </Sidebar>
      </body>
    </html>
  );
}
