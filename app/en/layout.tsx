import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Senpai.work — Hire Trusted Japanese Seniors for Business Operations",
  description:
    "Experienced Japanese seniors handle real estate, factory inspections, negotiations, and business operations on your behalf. Pay per task via Wise.",
  openGraph: {
    title: "Senpai.work — Hire Trusted Japanese Seniors for Business Operations",
    description:
      "Experienced Japanese seniors become your hands on the ground. Real estate, factory inspections, negotiations.",
    url: "https://senpai.work/en",
    siteName: "Senpai.work",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Senpai.work — Hire Trusted Japanese Seniors",
    description:
      "Experienced Japanese seniors become your hands on the ground.",
  },
  alternates: {
    canonical: "https://senpai.work/en",
  },
};

export default function EnLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <div lang="en">{children}</div>;
}
