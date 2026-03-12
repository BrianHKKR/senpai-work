import type { Metadata } from "next";
import { Noto_Sans_JP } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Analytics from "@/components/Analytics";

const notoSansJP = Noto_Sans_JP({
  subsets: ["latin"],
  variable: "--font-noto-sans-jp",
});

export const metadata: Metadata = {
  title: "Senpai.work — 信頼できるシニアに、ビジネス実務を依頼",
  description:
    "日本在住のシニア人材が、不動産手続き・工場視察・交渉代行などのビジネス実務を代行します。案件ごとの報酬制。",
  openGraph: {
    title: "Senpai.work — 信頼できるシニアに、ビジネス実務を依頼",
    description:
      "経験豊富な日本のシニア人材が、あなたの「現地の手」になります。不動産・工場視察・交渉代行。",
    url: "https://senpai.work",
    siteName: "Senpai.work",
    locale: "ja_JP",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Senpai.work — 信頼できるシニアに、ビジネス実務を依頼",
    description:
      "経験豊富な日本のシニア人材が、あなたの「現地の手」になります。",
  },
  alternates: {
    canonical: "https://senpai.work",
    languages: {
      ja: "https://senpai.work/ja",
      en: "https://senpai.work/en",
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja">
      <body className={`${notoSansJP.variable} font-sans antialiased`}>
        <Analytics />
        <Header />
        <main className="min-h-screen">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
