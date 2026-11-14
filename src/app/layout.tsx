import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { content } from "@/content";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const viewport: Viewport = {
  ...content.layout.viewport,
  themeColor: content.layout.viewport.themeColor.map((item) => ({ ...item })),
};

export const metadata: Metadata = {
  metadataBase: new URL(content.layout.metadata.metadataBase),

  title: content.layout.metadata.title,
  description: content.layout.metadata.description,
  openGraph: {
    title: content.layout.metadata.title,
    description: content.layout.metadata.description,
    images: [content.page.profile.image],
  },
  twitter: {
    card: "summary_large_image",
    title: content.layout.metadata.title,
    description: content.layout.metadata.description,
    images: [content.page.profile.image],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
