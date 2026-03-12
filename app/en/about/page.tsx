import Link from "next/link";

export default function AboutPage() {
  return (
    <div className="mx-auto max-w-3xl px-6 py-16">
      <h1 className="mb-8 text-3xl font-bold">About Us</h1>

      <div className="space-y-8">
        {/* Mement HK */}
        <section className="rounded-xl border border-[var(--color-border)] bg-white p-8">
          <h2 className="mb-4 text-xl font-bold">Company Information</h2>
          <table className="w-full text-left">
            <tbody className="divide-y divide-[var(--color-border)]">
              {[
                ["Company", "Mement Hong Kong Limited"],
                ["Registration", "CR No. 2792342 / BR No. 70344480"],
                ["Incorporated", "January 29, 2019"],
                ["Location", "Central, Hong Kong SAR"],
                ["Business", "Medical beauty operations, on-the-ground business services in Japan"],
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

        {/* Mement Group */}
        <section className="rounded-xl border border-[var(--color-border)] bg-white p-8">
          <h2 className="mb-4 text-xl font-bold">Mement Group</h2>
          <div className="space-y-4 text-[var(--color-text-light)] leading-relaxed">
            <p>
              Mement Group is a beauty-tech company headquartered in South Korea (Mement Co., Ltd.),
              operating medical beauty and aesthetic services across the Asia-Pacific region.
            </p>
            <p>
              Founded in 2017, the group has 7+ years of experience in medical aesthetics,
              leveraging proprietary IT platforms for digital marketing and
              clinic management systems to deliver efficient operations.
            </p>
          </div>

          <div className="mt-6 grid gap-4 sm:grid-cols-2">
            <div className="rounded-lg bg-[var(--color-bg-warm)] p-5 text-center">
              <p className="text-3xl font-bold text-[var(--color-primary)]">41+</p>
              <p className="text-sm text-[var(--color-text-light)]">Franchised clinics in South Korea</p>
            </div>
            <div className="rounded-lg bg-[var(--color-bg-warm)] p-5 text-center">
              <p className="text-3xl font-bold text-[var(--color-primary)]">5</p>
              <p className="text-sm text-[var(--color-text-light)]">Directly-owned clinics (Hong Kong &amp; Vietnam)</p>
            </div>
          </div>

          <div className="mt-6">
            <h3 className="mb-3 text-sm font-bold text-[var(--color-text-light)]">Group Brands</h3>
            <div className="flex flex-wrap gap-3">
              {["MUSE CLINIC", "SHINE BEAM", "SKIN & BEAM", "COCONUT", "What's M"].map((brand) => (
                <span
                  key={brand}
                  className="rounded-full border border-[var(--color-border)] px-4 py-1.5 text-sm"
                >
                  {brand}
                </span>
              ))}
            </div>
          </div>
        </section>

        {/* Corporate Structure */}
        <section className="rounded-xl border border-[var(--color-border)] bg-white p-8">
          <h2 className="mb-4 text-xl font-bold">Corporate Structure</h2>
          <div className="space-y-3 text-sm">
            <div className="rounded-lg border border-[var(--color-border)] p-4">
              <p className="font-bold">Mement Co., Ltd.</p>
              <p className="text-[var(--color-text-light)]">South Korea HQ &mdash; Marketing, Procurement, Domestic Franchise Management</p>
            </div>
            <div className="ml-6 border-l-2 border-[var(--color-border)] pl-4">
              <div className="rounded-lg border border-[var(--color-border)] p-4">
                <p className="font-bold">Mement Overseas Holdings, Limited</p>
                <p className="text-[var(--color-text-light)]">Cayman Islands &mdash; Overseas Investment Holdings</p>
              </div>
              <div className="mt-3 ml-6 grid gap-3 sm:grid-cols-2">
                <div className="rounded-lg border-2 border-[var(--color-primary)] p-4">
                  <p className="font-bold text-[var(--color-primary)]">Mement Hong Kong Limited</p>
                  <p className="text-[var(--color-text-light)]">Hong Kong &mdash; Investment &amp; Operations</p>
                  <div className="mt-2 rounded border border-[var(--color-border)] p-3">
                    <p className="text-xs font-bold">Skin and Beam Hong Kong Limited</p>
                    <p className="text-xs text-[var(--color-text-light)]">Hong Kong clinic operations</p>
                  </div>
                </div>
                <div className="rounded-lg border border-[var(--color-border)] p-4">
                  <p className="font-bold">Mement Inc.</p>
                  <p className="text-[var(--color-text-light)]">U.S. (Delaware) &mdash; US Investment Holdings</p>
                  <div className="mt-2 rounded border border-[var(--color-border)] p-3">
                    <p className="text-xs font-bold">Mement Operations LLC</p>
                    <p className="text-xs text-[var(--color-text-light)]">California operations</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Senpai.work */}
        <section className="rounded-xl border border-[var(--color-border)] bg-white p-8">
          <h2 className="mb-4 text-xl font-bold">About Senpai.work</h2>
          <div className="space-y-4 text-[var(--color-text-light)] leading-relaxed">
            <p>
              Senpai.work is a matching platform operated by Mement Hong Kong Limited that connects
              foreign businesses with experienced Japanese senior professionals
              for on-the-ground operations in Japan.
            </p>
            <p>
              When overseas companies need to operate in Japan &mdash; handling paperwork, inspecting factories,
              negotiating real estate, or attending M&amp;A meetings &mdash; they often face the challenge of not having
              a trusted person on the ground. Senpai.work solves this by matching them with professionals
              aged 50&ndash;70 who bring decades of business experience and social credibility.
            </p>
            <p>
              Compensation is paid via Wise (international transfer) from our Hong Kong entity
              to Japanese personal bank accounts as independent contractor fees.
            </p>
          </div>
        </section>

        {/* Target */}
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
