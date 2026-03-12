import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Senpai.work — Hire Trusted Japanese Seniors for Business Operations",
  description:
    "Experienced Japanese seniors handle real estate, factory inspections, negotiations, and business operations on your behalf. Pay per task via Wise.",
};

export default function EnLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <div lang="en">{children}</div>;
}
