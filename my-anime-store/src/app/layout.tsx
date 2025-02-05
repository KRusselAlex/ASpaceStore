import type { Metadata } from "next";
import ScrollUpButton from "@/components/scrollUp/scrollUp";

import "./globals.css";
import WhatsappWidget from "@/components/whatsapp/whatsappWidjet";

export const metadata: Metadata = {
  title: "A-Space - Anime & Manga Custom Clothing",
  description:
    "Discover unique, high-quality anime and manga-inspired fashion. Personalize your style with custom designs featuring your favorite characters!",
  icons: "/logo.png",
  keywords: [
    "anime clothing",
    "manga fashion",
    "custom anime shirts",
    "otaku apparel",
    "cosplay outfits",
    "personalized anime hoodies",
    "A-Space",
  ],
  openGraph: {
    title: "A-Space - Personalized Anime & Manga Clothing",
    description:
      "Shop the best custom anime and manga-themed clothing. Hoodies, t-shirts, and more – all tailored for anime lovers!",
    url: "https://a-space.vercel.app",
    siteName: "A-Space",
    images: [
      {
        url: "https://a-space.vercel.app/cartana.jpg", // Change this to an actual image URL
        width: 1200,
        height: 630,
        alt: "A-Space - Custom Anime & Manga Fashion",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "A-Space - Personalized Anime & Manga Clothing",
    description:
      "Express your love for anime with custom-designed clothing. Shop now at A-Space!",
    images: ["https://a-space.vercel.app/cartana.jpg"], // Use a relevant image
  },
};


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <div>{children}
          <WhatsappWidget />
          <ScrollUpButton />
        </div>
      </body>
    </html>
  );
}
