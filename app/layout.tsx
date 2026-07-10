import type { Metadata } from "next";
import { Archivo_Black, Geist, Geist_Mono, Kaushan_Script } from "next/font/google";
import "./globals.css";
import { QuoteModalProvider } from "@/lib/quote-modal-context";
import { LocalBusinessSchema } from "@/components/local-business-schema";
import { SITE_URL } from "@/lib/site-config";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const archivoBlack = Archivo_Black({
  variable: "--font-archivo-black",
  subsets: ["latin"],
  weight: "400",
});

const kaushanScript = Kaushan_Script({
  variable: "--font-kaushan-script",
  subsets: ["latin"],
  weight: "400",
});

const TITLE = "Rebel Removal | Junk Hauling & Cleanouts | Oxford, MS";
const DESCRIPTION =
  "Fast, no-hassle junk removal, cleanouts, and moving help in Oxford, MS. Get a free quote today.";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: TITLE,
  description: DESCRIPTION,
  keywords: [
    "junk removal Oxford MS",
    "cleanout service Oxford Mississippi",
    "moving help Oxford MS",
    "same day junk removal",
  ],
  openGraph: {
    title: TITLE,
    description: DESCRIPTION,
    url: SITE_URL,
    siteName: "Rebel Removal",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: TITLE,
    description: DESCRIPTION,
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
      className={`${geistSans.variable} ${geistMono.variable} ${archivoBlack.variable} ${kaushanScript.variable} h-full scroll-smooth antialiased`}
    >
      <body className="flex min-h-full flex-col pb-16 md:pb-0">
        <LocalBusinessSchema />
        <QuoteModalProvider>{children}</QuoteModalProvider>
      </body>
    </html>
  );
}
