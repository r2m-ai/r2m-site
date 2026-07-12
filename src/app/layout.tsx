import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
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
  metadataBase: new URL("https://r2m.ai"),
  title: {
    default: "r2m.ai — long-horizon AI systems",
    template: "%s — r2m.ai",
  },
  description:
    "R2M is an independent research and product lab exploring long-horizon agents, memory systems, autonomous research, and reliable behavioral control.",
  openGraph: {
    title: "r2m.ai — long-horizon AI systems",
    description:
      "Long-horizon AI systems that reason, remember, reflect, and improve over time.",
    url: "https://r2m.ai",
    siteName: "r2m.ai",
    type: "website",
    images: [{ url: "/og.png", width: 1200, height: 630 }],
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
      <body className="flex min-h-full flex-col">
        <SiteHeader />
        <main className="flex-1">{children}</main>
        <SiteFooter />
      </body>
    </html>
  );
}
