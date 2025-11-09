import type { Metadata } from "next";
import { Special_Elite } from "next/font/google";
import "./globals.css";

const specialElite = Special_Elite({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-typewriter",
});

export const metadata: Metadata = {
  title: "The Raven — An Intimate Companion Guide",
  description:
    "A deeply human, emotionally intelligent companion’s exploration of Edgar Allan Poe’s 'The Raven', unraveling symbolism, structure, and life lessons.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${specialElite.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
