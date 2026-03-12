import Link from "next/link";

interface Task {
  id: string;
  tier: string;
  title: string;
  location: string;
  date: string;
  reward: string;
  description: string;
  status: "open" | "assigned" | "completed";
}

const sampleTasks: Task[] = [
  {
    id: "1",
    tier: "T2",
    title: "Cosmetics factory inspection & photo report",
    location: "Aichi Prefecture, Nagoya",
    date: "Late March 2026",
    reward: "¥20,000",
    description:
      "Visit a cosmetics OEM factory under M&A consideration. Take photos of the exterior, equipment, and surrounding area, and prepare a report. Estimated time: ~2 hours.",
    status: "open",
  },
  {
    id: "2",
    tier: "T1",
    title: "Emergency contact registration for rental property",
    location: "Aichi Prefecture, Nagoya",
    date: "Anytime",
    reward: "¥5,000",
    description:
      "Register as the emergency contact for a rental contract held by a foreign owner. You may occasionally relay messages from the property management company (a few times per year).",
    status: "open",
  },
  {
    id: "3",
    tier: "T3",
    title: "BATONZ M&A owner meeting on behalf of buyer",
    location: "Kansai region",
    date: "Early April 2026",
    reward: "¥50,000",
    description:
      "Attend the initial meeting with the selling owner for a business listed on the BATONZ succession platform. Briefing materials will be provided in advance.",
    status: "open",
  },
  {
    id: "4",
    tier: "T2",
    title: "Kominka (traditional house) property inspection",
    location: "Nagoya, Shikemichi area",
    date: "Mid-March 2026",
    reward: "¥15,000",
    description:
      "Visit a candidate kominka property in Nagoya and prepare a report on the building condition, surrounding environment, and accessibility.",
    status: "assigned",
  },
];

const tierColors: Record<string, string> = {
  T1: "bg-green-100 text-green-800",
  T2: "bg-blue-100 text-blue-800",
  T3: "bg-purple-100 text-purple-800",
  T4: "bg-amber-100 text-amber-800",
};

const statusLabels: Record<string, { label: string; color: string }> = {
  open: { label: "Open", color: "bg-green-500" },
  assigned: { label: "Assigned", color: "bg-yellow-500" },
  completed: { label: "Completed", color: "bg-gray-400" },
};

export default function TasksPage() {
  return (
    <div className="mx-auto max-w-5xl px-6 py-16">
      <h1 className="mb-2 text-3xl font-bold">Available Tasks</h1>
      <p className="mb-8 text-[var(--color-text-light)]">
        Currently open tasks. Registered senpai can review details and apply.
      </p>

      {/* Filters */}
      <div className="mb-8 flex flex-wrap gap-2">
        <button className="rounded-full bg-[var(--color-primary)] px-4 py-2 text-sm font-bold text-white">
          All
        </button>
        {["T1: Documents", "T2: On-Site", "T3: Negotiation", "T4: Director"].map(
          (label) => (
            <button
              key={label}
              className="rounded-full border border-[var(--color-border)] px-4 py-2 text-sm transition hover:border-[var(--color-primary)]"
            >
              {label}
            </button>
          )
        )}
      </div>

      {/* Task cards */}
      <div className="space-y-4">
        {sampleTasks.map((task) => (
          <div
            key={task.id}
            className="rounded-xl border border-[var(--color-border)] bg-white p-6 transition hover:shadow-md"
          >
            <div className="mb-3 flex flex-wrap items-center gap-3">
              <span
                className={`rounded px-2 py-0.5 text-xs font-bold ${tierColors[task.tier]}`}
              >
                {task.tier}
              </span>
              <span className="flex items-center gap-1.5 text-sm">
                <span
                  className={`inline-block h-2 w-2 rounded-full ${statusLabels[task.status].color}`}
                />
                {statusLabels[task.status].label}
              </span>
              <span className="text-sm text-[var(--color-text-light)]">
                {task.location}
              </span>
            </div>
            <h2 className="mb-2 text-xl font-bold">{task.title}</h2>
            <p className="mb-4 text-[var(--color-text-light)] leading-relaxed">
              {task.description}
            </p>
            <div className="flex flex-wrap items-center justify-between gap-4">
              <div className="flex gap-6 text-sm text-[var(--color-text-light)]">
                <span>Target date: {task.date}</span>
              </div>
              <span className="text-xl font-bold text-[var(--color-accent)]">
                {task.reward}
              </span>
            </div>
          </div>
        ))}
      </div>

      {/* CTA */}
      <div className="mt-12 rounded-xl bg-[var(--color-bg-warm)] p-8 text-center">
        <p className="mb-4 text-lg">
          You need to register as a senpai to apply for tasks.
        </p>
        <Link
          href="/en/register"
          className="inline-flex items-center justify-center rounded-lg bg-[var(--color-primary)] px-8 py-3 font-bold text-white transition hover:bg-[var(--color-primary-light)]"
        >
          Register as Senpai
        </Link>
      </div>
    </div>
  );
}
