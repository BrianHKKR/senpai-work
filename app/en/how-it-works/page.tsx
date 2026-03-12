import Link from "next/link";

export default function HowItWorksPage() {
  return (
    <div className="mx-auto max-w-3xl px-6 py-16">
      <h1 className="mb-2 text-3xl font-bold">How It Works</h1>
      <p className="mb-12 text-[var(--color-text-light)]">
        Whether you want to work as a senpai or submit a task as a client, here is how the process works.
      </p>

      {/* For Senpai */}
      <section className="mb-16">
        <h2 className="mb-8 text-2xl font-bold text-[var(--color-primary)]">
          For Senpai (Workers)
        </h2>
        <div className="space-y-6">
          {[
            {
              step: "1",
              title: "Fill out the registration form",
              desc: "Enter your basic information, career history, preferred tasks, and bank details. Takes about 5 minutes.",
            },
            {
              step: "2",
              title: "Identity verification",
              desc: "Submit a photo of your driver's license or My Number card for identity verification.",
            },
            {
              step: "3",
              title: "Video interview (10-15 min)",
              desc: "A short interview via LINE or Zoom. We'll explain the work and listen to your preferences.",
            },
            {
              step: "4",
              title: "Task matching",
              desc: "We'll introduce tasks that match your region and experience. You decide which ones to accept.",
            },
            {
              step: "5",
              title: "Execute & report",
              desc: "Carry out the task and report the results. Reports can be easily submitted via LINE or email.",
            },
            {
              step: "6",
              title: "Get paid",
              desc: "After completion is confirmed, payment is sent to your designated bank account via Wise (international transfer service). Usually within 3 business days.",
            },
          ].map((item) => (
            <div key={item.step} className="flex gap-4">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[var(--color-primary)] text-lg font-bold text-white">
                {item.step}
              </div>
              <div>
                <h3 className="text-lg font-bold">{item.title}</h3>
                <p className="text-[var(--color-text-light)] leading-relaxed">
                  {item.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* For Clients */}
      <section className="mb-16">
        <h2 className="mb-8 text-2xl font-bold text-[var(--color-primary)]">
          For Clients
        </h2>
        <div className="space-y-6">
          {[
            {
              step: "1",
              title: "Register your task",
              desc: "Enter the task details, preferred region, schedule, and compensation amount.",
            },
            {
              step: "2",
              title: "Senpai matching",
              desc: "We'll introduce a senpai matched by region and skills. You can review their profile and select.",
            },
            {
              step: "3",
              title: "Briefing",
              desc: "We'll share your task details with the senpai. Please provide any necessary materials.",
            },
            {
              step: "4",
              title: "Execution",
              desc: "The senpai handles the task on-site and reports back with photos, documents, or a written report.",
            },
            {
              step: "5",
              title: "Completion & payment",
              desc: "Review the report and confirm completion. We handle the payment to the senpai.",
            },
          ].map((item) => (
            <div key={item.step} className="flex gap-4">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[var(--color-accent)] text-lg font-bold text-white">
                {item.step}
              </div>
              <div>
                <h3 className="text-lg font-bold">{item.title}</h3>
                <p className="text-[var(--color-text-light)] leading-relaxed">
                  {item.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* FAQ */}
      <section className="mb-16">
        <h2 className="mb-8 text-2xl font-bold">Frequently Asked Questions</h2>
        <div className="space-y-4">
          {[
            {
              q: "How is payment handled?",
              a: "Payment is sent via Wise (international transfer service) to your designated Japanese bank account. You don't need a Wise account — it goes directly to your regular bank account.",
            },
            {
              q: "What about taxes?",
              a: "Compensation is paid as independent contractor income (業務委託). You are responsible for filing your own taxes. If your annual side income is under ¥200,000, no tax filing is required.",
            },
            {
              q: "How often are tasks available?",
              a: "Task frequency varies by season and demand. Work at your own pace — only accept tasks that suit you.",
            },
            {
              q: "Is this employment?",
              a: "No. This is an independent contractor agreement (業務委託契約), not an employment contract.",
            },
            {
              q: "Do I need special qualifications?",
              a: "No special qualifications are needed for T1-T2 tasks. Having certifications like a real estate license (宅建士) or administrative scrivener (行政書士) allows access to a wider range of tasks.",
            },
          ].map((item) => (
            <div
              key={item.q}
              className="rounded-xl border border-[var(--color-border)] bg-white p-6"
            >
              <h3 className="mb-2 font-bold">{item.q}</h3>
              <p className="text-[var(--color-text-light)] leading-relaxed">
                {item.a}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <div className="rounded-xl bg-[var(--color-primary)] p-8 text-center text-white">
        <h2 className="mb-4 text-2xl font-bold">Register Here</h2>
        <p className="mb-6 text-white/80">
          Registration is free. Get started today.
        </p>
        <Link
          href="/en/register"
          className="inline-flex items-center justify-center rounded-lg bg-[var(--color-accent)] px-10 py-4 text-lg font-bold text-white transition hover:bg-[var(--color-accent-light)]"
        >
          Register as Senpai
        </Link>
      </div>
    </div>
  );
}
