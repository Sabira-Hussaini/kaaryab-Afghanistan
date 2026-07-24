import type { Metadata } from "next";
import "./globals.css";
import { Inter } from "next/font/google";

import ThemeProvider from "@/components/theme/ThemeProvider";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { SavedProvider } from "@/context/SavedContext";
import { LanguageProvider } from "@/context/LanguageContext";

const inter = Inter({
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "KaarYab Afghanistan",
  description: "Find jobs, internships, scholarships and more.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider>
          <LanguageProvider>
            <SavedProvider>
              <Navbar />

              <main>{children}</main>

              <Footer />
            </SavedProvider>
          </LanguageProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}