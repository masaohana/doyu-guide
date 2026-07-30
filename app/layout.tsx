import type { Metadata, Viewport } from "next";
import { headers } from "next/headers";
import "./globals.css";

export async function generateMetadata(): Promise<Metadata> {
  const requestHeaders = await headers();
  const host =
    requestHeaders.get("x-forwarded-host") ??
    requestHeaders.get("host") ??
    "doyu-guide.masao457193.chatgpt.site";
  const protocol =
    requestHeaders.get("x-forwarded-proto") ??
    (host.includes("localhost") ? "http" : "https");
  const origin = `${protocol}://${host}`;
  const imageUrl = new URL("/og.png", origin).toString();

  return {
    title: "DOYU!｜3分でわかる中小企業家同友会",
    description:
      "同友会ってどんな会？3つの目的、自主・民主・連帯、例会での学びを、初めての方にもわかりやすく紹介します。",
    openGraph: {
      type: "website",
      locale: "ja_JP",
      title: "DOYU!｜経営者が、ひとりで悩まない場所。",
      description:
        "3分でつかむ入門編と、理念・活動・経営を学べる深掘りガイド。",
      images: [
        {
          url: imageUrl,
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
      images: [imageUrl],
    },
  };
}

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
