import type { Metadata } from "next";
import { Handjet } from "next/font/google";
import "./globals.css";

const inter = Handjet({
  subsets: ['latin'],
  weight: ['400'], // Example of specifying font weights
});

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} shooting-stars`}>
        <div className="moving-gradient">
        </div>
        {children}
      </body>
    </html>
  );
}
