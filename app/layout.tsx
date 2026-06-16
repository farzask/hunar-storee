import type { Metadata } from "next";
import { Inter, Poppins } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["500", "600", "700", "800"],
  variable: "--font-poppins",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Hunar Vocational Training Centre — Skills for Life, Opportunity for All",
  description:
    "Hunar Vocational Training Centre is a community-based institute empowering women and youth through practical skills development — sewing, embroidery and more.",
  keywords: [
    "vocational training",
    "sewing",
    "embroidery",
    "women empowerment",
    "skills development",
    "Hunar",
  ],
  openGraph: {
    title: "Hunar Vocational Training Centre",
    description:
      "Empowering Women and Youth Through Skills Development. Skills for Life, Opportunity for All.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${poppins.variable}`}>
      <body>{children}</body>
    </html>
  );
}
