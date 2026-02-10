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
  title: "Yasmin Nadia | Fitness Coach & Personal Training in Kuala Lumpur",
  description: "Transform your fitness journey with Yasmin Nadia. Personal training, group fitness sessions, and nutrition coaching in KL. Move in ways that feel good, not forced. Book your free consultation today.",
  keywords: "fitness coach, personal trainer, fitness coaching, weight loss, health and wellness, fitness in KL, personal training Kuala Lumpur, nutrition coaching, group fitness",
  
  // Basic Meta Tags
  authors: [{ name: "Yasmin Nadia" }],
  creator: "Yasmin Nadia",
  publisher: "Yasmin Nadia",
  
  // Viewport and other basics
  viewport: "width=device-width, initial-scale=1.0",
  
  // Open Graph - for WhatsApp, Facebook, Instagram, LinkedIn sharing
  openGraph: {
    title: "Yasmin Nadia | Transform Your Fitness Journey",
    description: "Personal training, group fitness, and nutrition coaching. Move in ways that feel good, not forced. 87 clients transformed. Book your free consultation now!",
    type: "website",
    url: "https://yasminnadiacoaching.com", // Update with actual domain
    siteName: "Yasmin Nadia Fitness Coaching",
    images: [
      {
        url: "https://yasminnadiacoaching.com/og-image.jpg", // Update with actual image path
        width: 1200,
        height: 630,
        alt: "Yasmin Nadia - Fitness Coach | Personal Training in Kuala Lumpur",
        type: "image/jpeg",
      },
      {
        url: "https://yasminnadiacoaching.com/og-image-square.jpg", // Update with actual image path
        width: 800,
        height: 800,
        alt: "Yasmin Nadia Fitness Coaching",
        type: "image/jpeg",
      },
    ],
    locale: "en_US",
  },

  // Twitter Card - for Twitter/X sharing
  twitter: {
    card: "summary_large_image",
    title: "Yasmin Nadia | Transform Your Fitness Journey",
    description: "Personal training & nutrition coaching in KL. 87 clients transformed. Move in ways that feel good, not forced.",
    images: ["https://yasminnadiacoaching.com/og-image.jpg"], // Update with actual image path
    creator: "@yasminnadiacoach", // Update with actual Twitter handle
  },

  // Additional Meta Tags
  robots: "index, follow",
  referrer: "strict-origin-when-cross-origin",
  
  // Category
  category: "Health & Fitness",

  // Icons
  icons: {
    icon: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },

  // Alternate languages (if applicable)
  alternates: {
    canonical: "https://yasminnadiacoaching.com",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        {/* Additional Meta Tags for SEO */}
        <meta charSet="utf-8" />
        <meta name="theme-color" content="#FF6B9D" />
        
        {/* Preconnect to external domains for performance */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        
        {/* Structured Data (JSON-LD) for Local Business */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "LocalBusiness",
              name: "Yasmin Nadia Fitness Coaching",
              image: "https://yasminnadiacoaching.com/og-image.jpg",
              description: "Personal fitness training, group fitness sessions, and nutrition coaching in Kuala Lumpur",
              address: {
                "@type": "PostalAddress",
                streetAddress: "Kuala Lumpur",
                addressLocality: "Kuala Lumpur",
                addressCountry: "MY",
              },
              telephone: "+60XXXXXXXXX", // Update with actual phone number
              sameAs: [
                "https://instagram.com/yasminnadiacoach", // Update with actual Instagram
                "https://tiktok.com/@yasminnadiacoach", // Update with actual TikTok
              ],
              priceRange: "$$",
              aggregateRating: {
                "@type": "AggregateRating",
                ratingValue: "5",
                reviewCount: "87",
              },
            }),
          }}
        />

        {/* Structured Data (JSON-LD) for Person */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              name: "Yasmin Nadia",
              jobTitle: "Fitness Coach & Personal Trainer",
              image: "https://yasminnadiacoaching.com/yasmin-profile.jpg", // Update with actual image
              url: "https://yasminnadiacoaching.com",
              sameAs: [
                "https://instagram.com/yasminnadiacoach",
                "https://tiktok.com/@yasminnadiacoach",
              ],
              knowsAbout: ["Personal Training", "Nutrition Coaching", "Fitness", "Health & Wellness"],
            }),
          }}
        />
      </head>
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
