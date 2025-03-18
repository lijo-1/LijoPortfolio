import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";

const poppins = Poppins({
  subsets: ["latin"], // Optimize for Latin characters
  weight: ["300", "400", "500", "600", "700"], // Choose required weights
  variable: "--font-poppins", // Define a CSS variable for global use
});

export const metadata: Metadata = {
  title: "Lijo S | Portfolio",
  description: "Portfolio website",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="!scroll-smooth scrollbar-hide">
      <body className={`${poppins.variable} antialiased`}>{children}</body>
    </html>
  );
}
