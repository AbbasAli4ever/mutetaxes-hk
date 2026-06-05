import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "MuteTaxes",
  description: "Set up a verified Hong Kong company and payment accounts (PayPal, Airwallex, Payoneer, OceanPayments) in as little as 7 days. 2,500+ stores protected. Zero freezes, zero surprises.",
  keywords: "Hong Kong PSP, PayPal Hong Kong, Airwallex setup, payment processor, HK company formation, high risk merchant, ecommerce payments",
  openGraph: {
    title: "MuteTaxes | Hong Kong PSP Setup — PayPal, Airwallex & More",
    description: "Set up a verified Hong Kong company and payment accounts in as little as 7 days. 2,500+ stores protected.",
    url: "https://mutetaxes.com",
    siteName: "MuteTaxes",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "MuteTaxes | Hong Kong PSP Setup",
    description: "Set up a verified Hong Kong company and payment accounts in as little as 7 days. 2,500+ stores protected.",
  },
  icons: {
    icon: "/fav.svg",
    shortcut: "/fav.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@100..900&family=Cambo&family=Manrope:wght@200..800&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
