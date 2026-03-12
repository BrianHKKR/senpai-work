import Link from "next/link";

export default function AboutPage() {
  return (
    <div className="mx-auto max-w-3xl px-6 py-16">
      <h1 className="mb-8 text-3xl font-bold">About Us</h1>

      <div className="space-y-8">
        <section className="rounded-xl border border-[var(--color-border)] bg-white p-8">
          <h2 className="mb-4 text-xl font-bold">Company Information</h2>
          <table className="w-full text-left">
            <tbody className="divide-y divide-[var(--color-border)]">
              {[
                ["Company", "Mement Hong Kong Limited"],
                ["Registration", "CR No. 2792342"],
                ["Incorporated", "January 29, 2019"],
                ["Location", "Central, Hong Kong SAR"],
                ["Representative", "Brian Choi (Byung Chul)"],
                ["Business", "Planning and operation of on-the-ground business services in Japan"],
                ["Group", "Mement Co., Ltd. (Korea HQ)"],
              ].map(([label, value]) => (
                <tr key={label}>
                  <th className="w-40 py-3 align-top text-sm font-bold text-[var(--color-text-light)]">
                    {label}
                  </th>
                  <td className="py-3">{value}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </section>

        <section className="rounded-xl border border-[var(--color-border)] bg-white p-8">
          <h2 className="mb-4 text-xl font-bold">About Senpai.work</h2>
          <div className="space-y-4 text-[var(--color-text-light)] leading-relaxed">
            <p>
              Senpai.work is a matching platform that connects foreign businesses
              with experienced Japanese senior professionals for on-the-ground operations in Japan.
            </p>
            <p>
              When overseas companies need to operate in Japan — handling paperwork, inspecting factories,
              negotiating real estate, or attending M&A meetings — they often face the challenge of not having
              a trusted person on the ground. Senpai.work solves this by matching them with professionals
              aged 50-70 who bring decades of business experience and social credibility.
            </p>
            <p>
              Compensation is paid via Wise (international transfer) from our Hong Kong entity
              to Japanese personal bank accounts as independent contractor fees (業務委託).
            </p>
          </div>
        </section>

        <section className="rounded-xl border border-[var(--color-border)] bg-white p-8">
          <h2 className="mb-4 text-xl font-bold">Who We Serve</h2>
          <div className="grid gap-4 sm:grid-cols-2">
            {[
              {
                title: "Clients",
                desc: "Companies and individuals based outside Japan who need on-the-ground business operations handled locally.",
              },
              {
                title: "Senpai (Operators)",
                desc: "Japanese residents aged 50-70 with extensive professional experience and social credibility.",
              },
            ].map((item) => (
              <div key={item.title} className="rounded-lg bg-[var(--color-bg-warm)] p-6">
                <h3 className="mb-2 font-bold">{item.title}</h3>
                <p className="text-sm text-[var(--color-text-light)]">{item.desc}</p>
              </div>
            ))}
          </div>
        </section>

        <div className="text-center">
          <Link
            href="/en/register"
            className="inline-flex items-center justify-center rounded-lg bg-[var(--color-primary)] px-8 py-3 font-bold text-white transition hover:bg-[var(--color-primary-light)]"
          >
            Register as Senpai
          </Link>
        </div>
      </div>
    </div>
  );
}
