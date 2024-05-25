import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Analytics } from "@vercel/analytics/react";
import { Navbar, Footer } from "@/components/index";
import { getHeroSectionData } from "@/config/getData";

const inter = Inter({ subsets: ["latin"] });

export const generateMetadata = async (): Promise<Metadata> => {
  const data = await getHeroSectionData();
  return {
    title: {
      default: `${data.fields.title} | ${data.fields.tagline}`,
      template: `${data.fields.title} | %s`,
    },
    description: data.fields.metaDescription,
  };
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <html lang="en">
        <body className={inter.className}>
          <Navbar />
          {children}
          <Footer />
        </body>
      </html>
      <Analytics />
    </>
  );
}
