"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

interface Task {
  id: string;
  tier: string;
  title: string;
  location: string;
  date: string;
  reward: string;
  description: string;
  status: string;
}

const tierColors: Record<string, string> = {
  T1: "bg-green-100 text-green-800",
  T2: "bg-blue-100 text-blue-800",
  T3: "bg-purple-100 text-purple-800",
  T4: "bg-amber-100 text-amber-800",
};

const statusLabels: Record<string, { label: string; color: string }> = {
  open: { label: "募集中", color: "bg-green-500" },
  in_progress: { label: "進行中", color: "bg-yellow-500" },
  completed: { label: "完了", color: "bg-gray-400" },
  cancelled: { label: "キャンセル", color: "bg-red-400" },
};

export default function TasksPage() {
  const [tasks, setTasks] = useState<Task[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("/api/tasks?lang=ja")
      .then((res) => res.json())
      .then((data) => setTasks(data))
      .catch(() => setTasks([]))
      .finally(() => setLoading(false));
  }, []);

  return (
    <div className="mx-auto max-w-5xl px-6 py-16">
      <h1 className="mb-2 text-3xl font-bold">案件一覧</h1>
      <p className="mb-8 text-[var(--color-text-light)]">
        現在募集中の案件です。ご登録済みの先輩は、案件の詳細をご確認の上ご応募ください。
      </p>

      {loading ? (
        <p className="text-center text-[var(--color-text-light)] py-12">読み込み中...</p>
      ) : tasks.length === 0 ? (
        <p className="text-center text-[var(--color-text-light)] py-12">
          現在募集中の案件はありません。しばらくお待ちください。
        </p>
      ) : (
        <div className="space-y-4">
          {tasks.map((task) => {
            const sl = statusLabels[task.status] || statusLabels.open;
            return (
              <div
                key={task.id}
                className="rounded-xl border border-[var(--color-border)] bg-white p-6 transition hover:shadow-md"
              >
                <div className="mb-3 flex flex-wrap items-center gap-3">
                  <span
                    className={`rounded px-2 py-0.5 text-xs font-bold ${tierColors[task.tier] || ""}`}
                  >
                    {task.tier}
                  </span>
                  <span className="flex items-center gap-1.5 text-sm">
                    <span
                      className={`inline-block h-2 w-2 rounded-full ${sl.color}`}
                    />
                    {sl.label}
                  </span>
                  {task.location && (
                    <span className="text-sm text-[var(--color-text-light)]">
                      {task.location}
                    </span>
                  )}
                </div>
                <h2 className="mb-2 text-xl font-bold">{task.title}</h2>
                {task.description && (
                  <p className="mb-4 text-[var(--color-text-light)] leading-relaxed">
                    {task.description}
                  </p>
                )}
                <div className="flex flex-wrap items-center justify-between gap-4">
                  {task.date && (
                    <span className="text-sm text-[var(--color-text-light)]">
                      希望日: {task.date}
                    </span>
                  )}
                  {task.reward && (
                    <span className="text-xl font-bold text-[var(--color-accent)]">
                      {task.reward}
                    </span>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      )}

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
