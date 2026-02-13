import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-display",
  weight: ["400", "500", "600", "700", "900"],
});

export const metadata: Metadata = {
  title: "Emart - Fun Shopping Starts Here",
  description: "Discover a world of premium toys, minimalist home essentials, and high-quality everyday products for your whole family.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={inter.variable}>
      <body className={`${inter.variable} font-display antialiased`}>
        {children}
      </body>
    </html>
  );
}
