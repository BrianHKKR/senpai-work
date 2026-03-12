import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Senpai.work — 信頼できるシニアに、ビジネス実務を依頼",
  description:
    "日本在住のシニア人材が、不動産手続き・工場視察・交渉代行などのビジネス実務を代行します。案件ごとの報酬制。",
  openGraph: {
    title: "Senpai.work — 信頼できるシニアに、ビジネス実務を依頼",
    description:
      "経験豊富な日本のシニア人材が、あなたの「現地の手」になります。不動産・工場視察・交渉代行。",
    url: "https://senpai.work/ja",
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
    canonical: "https://senpai.work/ja",
  },
};

export default function JaLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <div lang="ja">{children}</div>;
}
