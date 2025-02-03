import type { Metadata } from "next";
import ScrollUpButton from "@/components/scrollUp/scrollUp";

import "./globals.css";
import WhatsappWidget from "@/components/whatsapp/whatsappWidjet";

export const metadata: Metadata = {
  title: "A-space",
  description: "A-space app",
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
