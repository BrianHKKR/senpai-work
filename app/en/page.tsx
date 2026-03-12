import Link from "next/link";

const tiers = [
  {
    level: "T1",
    title: "Document Support",
    description: "Emergency contact registration, mail handling, government paperwork",
    price: "¥5,000~¥8,000",
    icon: "📋",
  },
  {
    level: "T2",
    title: "On-Site Agent",
    description: "Property/factory inspections, on-site visits, photo reports",
    price: "¥8,000~¥25,000",
    icon: "🏭",
  },
  {
    level: "T3",
    title: "Negotiation",
    description: "M&A owner meetings, real estate negotiations, contract witnessing",
    price: "¥25,000~¥80,000",
    icon: "🤝",
  },
  {
    level: "T4",
    title: "Director",
    description: "Corporate officer registration, contract signing, bank account setup",
    price: "Monthly retainer",
    icon: "👔",
  },
];

const steps = [
  {
    num: "01",
    title: "Register Task",
    description: "Enter task details, location, and preferred dates",
  },
  {
    num: "02",
    title: "Match Senpai",
    description: "We match you with a senior based on region and experience",
  },
  {
    num: "03",
    title: "Execute & Report",
    description: "Your senpai handles the task on-site and reports back",
  },
  {
    num: "04",
    title: "Payment via Wise",
    description: "After confirmation, payment is sent via Wise",
  },
];

export default function Home() {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden bg-[var(--color-primary)] text-white">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(255,255,255,0.15),transparent_70%)]" />
        </div>
        <div className="relative mx-auto max-w-5xl px-6 py-24 md:py-32">
          <p className="mb-4 text-lg tracking-widest text-[var(--color-accent)]">
            SENPAI.WORK
          </p>
          <h1 className="mb-6 text-4xl font-bold leading-tight md:text-5xl lg:text-6xl">
            Hire Trusted Japanese Seniors
            <br />
            for On-the-Ground Business Operations
          </h1>
          <p className="mb-10 max-w-2xl text-xl leading-relaxed text-white/80">
            Real estate, factory inspections, M&A negotiations —
            <br />
            experienced Japanese professionals become your hands on the ground.
          </p>
          <div className="flex flex-col gap-4 sm:flex-row">
            <Link
              href="/en/register"
              className="inline-flex items-center justify-center rounded-lg bg-[var(--color-accent)] px-8 py-4 text-lg font-bold text-white transition hover:bg-[var(--color-accent-light)]"
            >
              Register as Senpai
            </Link>
            <Link
              href="/en/tasks"
              className="inline-flex items-center justify-center rounded-lg border-2 border-white/30 px-8 py-4 text-lg font-bold text-white transition hover:border-white/60"
            >
              Browse Tasks
            </Link>
          </div>
        </div>
      </section>

      {/* Why Senpai */}
      <section className="mx-auto max-w-5xl px-6 py-20">
        <h2 className="mb-4 text-center text-3xl font-bold">
          Why &ldquo;Senpai&rdquo;?
        </h2>
        <p className="mx-auto mb-12 max-w-2xl text-center text-lg text-[var(--color-text-light)]">
          Experienced professionals aged 50-70 bring the credibility and
          execution power that business situations in Japan demand.
        </p>
        <div className="grid gap-8 md:grid-cols-3">
          {[
            {
              title: "Social Credibility",
              desc: "Decades of career experience and track records earn trust from business partners and financial institutions.",
            },
            {
              title: "Face-to-Face Negotiation",
              desc: "In M&A and real estate situations, their communication skills put counterparts at ease.",
            },
            {
              title: "Weekday Availability",
              desc: "Available during business hours to visit government offices, banks, and real estate agents.",
            },
          ].map((item) => (
            <div
              key={item.title}
              className="rounded-xl border border-[var(--color-border)] bg-white p-8"
            >
              <h3 className="mb-3 text-xl font-bold">{item.title}</h3>
              <p className="text-[var(--color-text-light)] leading-relaxed">
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Service Tiers */}
      <section className="bg-[var(--color-bg-warm)] py-20">
        <div className="mx-auto max-w-5xl px-6">
          <h2 className="mb-12 text-center text-3xl font-bold">
            Service Tiers
          </h2>
          <div className="grid gap-6 md:grid-cols-2">
            {tiers.map((tier) => (
              <div
                key={tier.level}
                className="rounded-xl border border-[var(--color-border)] bg-white p-8"
              >
                <div className="mb-4 flex items-center gap-3">
                  <span className="text-3xl">{tier.icon}</span>
                  <div>
                    <span className="rounded bg-[var(--color-primary)] px-2 py-0.5 text-xs font-bold text-white">
                      {tier.level}
                    </span>
                    <h3 className="text-xl font-bold">{tier.title}</h3>
                  </div>
                </div>
                <p className="mb-4 text-[var(--color-text-light)] leading-relaxed">
                  {tier.description}
                </p>
                <p className="text-lg font-bold text-[var(--color-accent)]">
                  {tier.price}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How it works */}
      <section className="mx-auto max-w-5xl px-6 py-20">
        <h2 className="mb-12 text-center text-3xl font-bold">How It Works</h2>
        <div className="grid gap-8 md:grid-cols-4">
          {steps.map((step) => (
            <div key={step.num} className="text-center">
              <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-[var(--color-primary)] text-2xl font-bold text-white">
                {step.num}
              </div>
              <h3 className="mb-2 text-lg font-bold">{step.title}</h3>
              <p className="text-[var(--color-text-light)]">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="bg-[var(--color-primary)] py-20 text-center text-white">
        <div className="mx-auto max-w-3xl px-6">
          <h2 className="mb-4 text-3xl font-bold">
            Put your experience to work again
          </h2>
          <p className="mb-8 text-lg text-white/80">
            Your skills and credibility from decades of work are needed in business situations right now.
            <br />
            Per-task compensation. Work at your own pace.
          </p>
          <Link
            href="/en/register"
            className="inline-flex items-center justify-center rounded-lg bg-[var(--color-accent)] px-10 py-4 text-xl font-bold text-white transition hover:bg-[var(--color-accent-light)]"
          >
            Register as Senpai
          </Link>
        </div>
      </section>
    </>
  );
}
