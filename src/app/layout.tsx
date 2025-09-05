import type { Metadata } from "next";
import { Open_Sans } from "next/font/google";
import "./globals.css";
import { JsonLd, organizationJsonLd, localBusinessJsonLd } from "@/components/JsonLd";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { PerformanceMonitor } from "@/components/PerformanceMonitor";

const openSans = Open_Sans({
  subsets: ["latin"],
  variable: "--font-open-sans",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Finex Development | Leaders in Construction & Facility Maintenance",
    template: "%s | Finex Development",
  },
  description: "Professional construction and facility maintenance services in Mississauga, ON. Over 20 years of experience with 26,924+ projects completed. Emergency repairs, preventative maintenance, and comprehensive facility management.",
  keywords: [
    "construction",
    "facility maintenance",
    "Mississauga",
    "Ontario",
    "plumbing",
    "electrical",
    "HVAC",
    "handyman services",
    "emergency repairs",
    "preventative maintenance",
  ],
  authors: [{ name: "Finex Development" }],
  creator: "Finex Development",
  publisher: "Finex Development",
  metadataBase: new URL("https://finexdevelopment.com"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "en_CA",
    url: "https://finexdevelopment.com",
    title: "Finex Development | Leaders in Construction & Facility Maintenance",
    description: "Professional construction and facility maintenance services in Mississauga, ON. Over 20 years of experience with 26,924+ projects completed.",
    siteName: "Finex Development",
    images: [
      {
        url: "/images/og-image.png",
        width: 1200,
        height: 630,
        alt: "Finex Development - Leaders in Construction & Facility Maintenance",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Finex Development | Leaders in Construction & Facility Maintenance",
    description: "Professional construction and facility maintenance services in Mississauga, ON. Over 20 years of experience with 26,924+ projects completed.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={openSans.variable}>
      <body className="font-sans antialiased">
        <JsonLd data={organizationJsonLd} />
        <JsonLd data={localBusinessJsonLd} />
        {children}
        <Analytics />
        <SpeedInsights />
        <PerformanceMonitor />
      </body>
    </html>
  );
}
