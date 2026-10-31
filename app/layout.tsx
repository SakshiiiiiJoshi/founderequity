import type { Metadata } from "next";
import { Plus_Jakarta_Sans, Playfair_Display } from "next/font/google";
import "./globals.css";
import Loader from "@/components/ui/loader";

const plusJakartaSans = Plus_Jakarta_Sans({
  variable: "--font-plus-jakarta",
  subsets: ["latin"],
  display: "swap",
});

const playfairDisplay = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  style: ["normal", "italic"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://www.foundersequity.in"),

  title: {
    default: "Founder's Equity | Business Valuation & Capital Advisory",
    template: "%s | Founder's Equity",
  },

  description:
    "Professional business valuation, startup valuation, fundraising valuation, ESOP valuation and capital advisory services in India.",

  keywords: [
    "Business Valuation India",
    "Startup Valuation Services",
    "Fundraising Valuation",
    "MSME Valuation",
    "ESOP Valuation",
    "Capital Advisory",
  ],

  alternates: {
    canonical: "/",
  },

  openGraph: {
    title: "Founder's Equity | Business Valuation & Capital Advisory",
    description:
      "Business valuation and capital advisory services for startups and businesses.",
    url: "https://www.foundersequity.in",
    siteName: "Founder's Equity",
    type: "website",
  },

  robots: {
    index: true,
    follow: true,
  },

  icons: {
    icon: "/logo-icon-v2.png",
    shortcut: "/logo-icon-v2.png",
    apple: "/logo-icon-v2.png",
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
      className={`${plusJakartaSans.variable} ${playfairDisplay.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-background text-foreground">
        <Loader />
        {children}
      </body>
    </html>
  );
}


