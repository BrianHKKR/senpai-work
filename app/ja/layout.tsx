import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Senpai.work — 信頼できるシニアに、ビジネス実務を依頼",
  description:
    "日本在住のシニア人材が、不動産手続き・工場視察・交渉代行などのビジネス実務を代行します。案件ごとの報酬制。",
};

export default function JaLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <div lang="ja">{children}</div>;
}
