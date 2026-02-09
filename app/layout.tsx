import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
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
  title: "Fat Calico - Build Your Creator Portfolio Website | Get Discovered, Get Chosen",
  description: "Stop being invisible on social media. Build a professional portfolio website that showcases your niche and gets you hired. RM 100 one-time, no subscriptions. Perfect for content creators, influencers, and freelancers.",
  keywords: "portfolio website, creator portfolio, portfolio builder, content creator website, influencer portfolio, freelancer portfolio, portfolio for creators",
  openGraph: {
    title: "Fat Calico - Build Your Creator Portfolio Website",
    description: "Get discovered and get chosen with your own professional portfolio. Showcase your niche, organize your links, and attract clients.",
    type: "website",
    url: "https://fatcalico.vercel.app",
    siteName: "Fat Calico",
    images: [
      {
        url: "https://fatcalico.vercel.app/fatcalicodev.jpg",
        width: 1200,
        height: 630,
        alt: "Fat Calico - Build Your Creator Portfolio Website",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Fat Calico - Build Your Creator Portfolio Website",
    description: "Get discovered and get chosen with your own professional portfolio.",
    images: ["https://fatcalico.vercel.app/fatcalicodev.jpg"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
