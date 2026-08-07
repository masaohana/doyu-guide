import type { Metadata, Viewport } from "next";
import "./globals.css";

const publicSiteUrl = "https://masaohana.github.io/doyu-guide";
const socialImageUrl = `${publicSiteUrl}/og.png`;
const faviconUrl = `${publicSiteUrl}/favicon.png`;

export const metadata: Metadata = {
  metadataBase: new URL(publicSiteUrl),
  title: "DOYU!｜3分でわかる中小企業家同友会",
  description:
    "同友会ってどんな会？3つの目的、自主・民主・連帯、例会での学びを、初めての方にもわかりやすく紹介します。",
  icons: {
    icon: [{ url: faviconUrl, sizes: "64x64", type: "image/png" }],
    shortcut: faviconUrl,
  },
  openGraph: {
    type: "website",
    locale: "ja_JP",
    url: publicSiteUrl,
    title: "DOYU!｜経営者が、ひとりで悩まない場所。",
    description:
      "3分でつかむ入門編と、理念・活動・経営を学べる深掘りガイド。",
    images: [
      {
        url: socialImageUrl,
        width: 1731,
        height: 909,
        alt: "DOYU! 経営者が、ひとりで悩まない場所。",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "DOYU!｜経営者が、ひとりで悩まない場所。",
    description:
      "3分でつかむ入門編と、理念・活動・経営を学べる深掘りガイド。",
    images: [socialImageUrl],
  },
};

export const viewport: Viewport = {
  themeColor: "#ffd84d",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja">
      <body>{children}</body>
    </html>
  );
}
