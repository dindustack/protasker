import type { Metadata } from "next";
import localFont from "next/font/local";

import "./globals.css";
import { siteConfig } from "@/config/site";
import PlatformLayout from "./(platform)/layout";

const mona = localFont({
  src: [
    {
      path: "./fonts/Mona Sans/WOFF 2/Mona-Sans-Regular.woff2",
      weight: "400",
      style: "normal",
    },
    {
      path: "./fonts/Mona Sans/WOFF 2/Mona-Sans-Medium.woff2",
      weight: "500",
      style: "normal",
    },
    {
      path: "./fonts/Mona Sans/WOFF 2/Mona-Sans-SemiBold.woff2",
      weight: "600",
      style: "normal",
    },
    {
      path: "./fonts/Mona Sans/WOFF 2/Mona-Sans-Bold.woff2",
      weight: "700",
      style: "normal",
    },
    {
      path: "./fonts/Mona Sans/WOFF 2/Mona-Sans-ExtraBold.woff2",
      weight: "800",
      style: "normal",
    },
  ],
});

export const metadata: Metadata = {
  title: {
    default: siteConfig.name,
    template: `%s | ${siteConfig.name}`,
  },
  description: siteConfig.description,
  icons: [
    {
      url: "/icons/logo.svg",
      href: "/icons/logo.svg",
    },
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={` ${mona.className} antialiased`}>{children}</body>
    </html>
  );
}
