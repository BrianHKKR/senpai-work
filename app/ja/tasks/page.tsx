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
    title: "化粧品工場の現地視察・写真レポート",
    location: "愛知県名古屋市",
    date: "2026年3月下旬",
    reward: "¥20,000",
    description:
      "M&A検討中の化粧品OEM工場を訪問し、外観・設備・周辺環境の写真撮影とレポートを作成していただきます。所要時間：約2時間。",
    status: "open",
  },
  {
    id: "2",
    tier: "T1",
    title: "賃貸物件の緊急連絡先登録",
    location: "愛知県名古屋市",
    date: "随時",
    reward: "¥5,000",
    description:
      "外国籍オーナーの賃貸契約における緊急連絡先として登録していただきます。年に数回、管理会社からの連絡を取り次いでいただく場合があります。",
    status: "open",
  },
  {
    id: "3",
    tier: "T3",
    title: "BATONZ案件オーナーとの面談代行",
    location: "関西地方",
    date: "2026年4月上旬",
    reward: "¥50,000",
    description:
      "事業承継プラットフォームBAT ONZの案件について、売却オーナーとの初回面談を代行していただきます。事前にブリーフィング資料をお渡しします。",
    status: "open",
  },
  {
    id: "4",
    tier: "T2",
    title: "古民家物件の内見・状態レポート",
    location: "愛知県名古屋市 四間道エリア",
    date: "2026年3月中旬",
    reward: "¥15,000",
    description:
      "名古屋市内の古民家候補物件を内見し、建物の状態、周辺環境、アクセスについてレポートを作成していただきます。",
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
  open: { label: "募集中", color: "bg-green-500" },
  assigned: { label: "対応中", color: "bg-yellow-500" },
  completed: { label: "完了", color: "bg-gray-400" },
};

export default function TasksPage() {
  return (
    <div className="mx-auto max-w-5xl px-6 py-16">
      <h1 className="mb-2 text-3xl font-bold">案件一覧</h1>
      <p className="mb-8 text-[var(--color-text-light)]">
        現在募集中の案件です。ご登録済みの先輩は、案件の詳細をご確認の上ご応募ください。
      </p>

      {/* Filters */}
      <div className="mb-8 flex flex-wrap gap-2">
        <button className="rounded-full bg-[var(--color-primary)] px-4 py-2 text-sm font-bold text-white">
          すべて
        </button>
        {["T1: 書類", "T2: 現場", "T3: 交渉", "T4: ディレクター"].map(
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
                <span>希望日: {task.date}</span>
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
          案件に応募するには、先輩としてのご登録が必要です。
        </p>
        <Link
          href="/ja/register"
          className="inline-flex items-center justify-center rounded-lg bg-[var(--color-primary)] px-8 py-3 font-bold text-white transition hover:bg-[var(--color-primary-light)]"
        >
          先輩として登録する
        </Link>
      </div>
    </div>
  );
}
