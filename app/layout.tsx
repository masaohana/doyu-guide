import type { Metadata, Viewport } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "DOYU!｜3分でわかる中小企業家同友会",
  description:
    "同友会ってどんな会？3つの目的、自主・民主・連帯、例会での学びを、初めての方にもわかりやすく紹介します。",
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
