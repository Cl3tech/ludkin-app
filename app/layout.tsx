import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navigation from "./components/Navigation"
import { AudioProvider } from "./context/AudioContext";
import GlobalPlayer from "./components/GlobalPlayer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "LUDKIN | DJ & Producer",
  description: "Plataforma oficial - Gigs, Music & Videos",
  manifest: "/manifest.json",
  appleWebApp: {
    capable: true,
    statusBarStyle: "black-translucent",
    title: "LUDKIN",
  },
};

export const viewport: Viewport = {
  themeColor: "#000000",
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-pt">
      <body className="...">
        <AudioProvider>
          <main className="pb-32">{children}</main>
          <GlobalPlayer />
          <Navigation />
        </AudioProvider>
      </body>
    </html>
  );
}