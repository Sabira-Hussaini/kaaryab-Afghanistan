import type { Metadata } from "next";
import "./globals.css";

import { Inter } from "next/font/google";

import ThemeProvider from "@/components/theme/ThemeProvider";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

import { SavedProvider } from "@/context/SavedContext";
import { LanguageProvider } from "@/context/LanguageContext";

import { AuthProvider } from "@/context/AuthContext";
const inter = Inter({
  subsets: ["latin"],
  display: "swap",
});



export const metadata: Metadata = {

  title: {
    default: "KaarYab Afghanistan",
    template: "%s | KaarYab Afghanistan",
  },


  description:
    "KaarYab Afghanistan helps Afghan youth find jobs, internships, scholarships, online courses, training programs and remote opportunities.",


  keywords: [
    "Jobs Afghanistan",
    "Internships Afghanistan",
    "Scholarships",
    "Remote Work",
    "Online Courses",
    "KaarYab",
  ],


  authors:[
    {
      name:"KaarYab Afghanistan",
    }
  ],


  creator:
    "KaarYab Afghanistan",


  openGraph:{

    title:
      "KaarYab Afghanistan",

    description:
      "Find opportunities including jobs, internships, scholarships and online learning programs.",

    type:"website",

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

  suppressHydrationWarning

>


<body

className={inter.className}

>
<AuthProvider>

<ThemeProvider>

<LanguageProvider>

<SavedProvider>

<Navbar />

<main>
{children}
</main>

<Footer />

</SavedProvider>

</LanguageProvider>

</ThemeProvider>

</AuthProvider>


</body>


</html>


);

}