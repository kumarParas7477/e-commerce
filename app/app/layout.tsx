
import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const playfair = Playfair_Display({ subsets: ["latin"], variable: "--font-playfair" });

export const metadata: Metadata = {
  title: "GolfCoffee.ca - The Perfect Pairing | Premium Golf Equipment & Coffee Gear",
  description: "Discover the perfect pairing of premium golf equipment and artisan coffee gear. Fuel for fairways & collectors - where passion meets precision.",
  keywords: "golf equipment, coffee gear, premium golf accessories, artisan coffee, golf coffee mugs, luxury golf gear",
  openGraph: {
    title: "GolfCoffee.ca - The Perfect Pairing",
    description: "Premium golf equipment and coffee gear for the passionate enthusiast",
    url: "https://golfcoffee.ca",
    siteName: "GolfCoffee.ca",
    images: [
      {
        url: "/Screenshot 2025-09-13 182002.png",
        width: 800,
        height: 600,
        alt: "GolfCoffee.ca Logo",
      },
    ],
    locale: "en_CA",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "GolfCoffee.ca - The Perfect Pairing",
    description: "Premium golf equipment and coffee gear for the passionate enthusiast",
    images: ["/Screenshot 2025-09-13 182002.png"],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${inter.variable} ${playfair.variable}`}>
      <head>
        <link rel="icon" href="/Screenshot 2025-09-13 181837.png" type="image/png" />
      </head>
      <body className="min-h-screen bg-black text-white overflow-x-hidden">
        {children}
      </body>
    </html>
  );
}
