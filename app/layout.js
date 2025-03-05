import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar";
import { ClerkProvider } from "@clerk/nextjs";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Briar Chapel Social",
  description: "Connect with your Briar Chapel community - Share moments, join events, and stay connected with your neighbors.",
  keywords: ["Briar Chapel", "community", "social network", "neighborhood", "Chapel Hill", "North Carolina"],
  openGraph: {
    title: "Briar Chapel Social",
    description: "Connect with your Briar Chapel community - Share moments, join events, and stay connected with your neighbors.",
    type: "website",
    locale: "en_US",
    siteName: "Briar Chapel Social"
  },
  robots: {
    index: true,
    follow: true
  }
};

export const viewport = {
  themeColor: "#ffffff"
};

export default function RootLayout({ children }) {
  return (
    <ClerkProvider>
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <div className="w-full bg-white px-4 md:px-8 lg:px-16 xl:px-32 2xl:px-64">
          <Navbar />
        </div>
        <div className="bg-slate-100 px-4 md:px-8 lg:px-16 xl:px-32 2xl:px-64">
          {children}
        </div>
      </body>
    </html>
    </ClerkProvider>
  );
}
