import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Studio Market",
  description: "A minimal shop built with Next.js and MySQL."
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="zh-CN">
      <body>{children}</body>
    </html>
  );
}
