"use client";

import { useState } from "react";

interface ApplyModalProps {
  taskId: string;
  taskTitle: string;
  isEn?: boolean;
  onClose: () => void;
}

export default function ApplyModal({ taskId, taskTitle, isEn, onClose }: ApplyModalProps) {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [submitting, setSubmitting] = useState(false);
  const [done, setDone] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitting(true);
    setError("");

    try {
      const res = await fetch("/api/tasks/apply", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ taskId, name, phone }),
      });
      const data = await res.json();
      if (data.success) {
        setDone(true);
      } else {
        setError(isEn ? "Application failed. Please try again." : "応募に失敗しました。もう一度お試しください。");
      }
    } catch {
      setError(isEn ? "Network error. Please try again." : "通信エラーが発生しました。");
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 px-4" onClick={onClose}>
      <div
        className="w-full max-w-md rounded-xl bg-white p-6 shadow-xl"
        onClick={(e) => e.stopPropagation()}
      >
        {done ? (
          <div className="text-center">
            <p className="mb-4 text-lg font-bold text-green-600">
              {isEn ? "Application submitted!" : "応募が完了しました！"}
            </p>
            <p className="mb-6 text-sm text-[var(--color-text-light)]">
              {isEn ? "We will contact you soon." : "担当者よりご連絡いたします。"}
            </p>
            <button
              onClick={onClose}
              className="rounded-lg bg-[var(--color-primary)] px-6 py-2 font-bold text-white"
            >
              {isEn ? "Close" : "閉じる"}
            </button>
          </div>
        ) : (
          <>
            <h3 className="mb-1 text-lg font-bold">
              {isEn ? "Apply for Task" : "案件に応募する"}
            </h3>
            <p className="mb-4 text-sm text-[var(--color-text-light)] line-clamp-2">{taskTitle}</p>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="mb-1 block text-sm font-medium">
                  {isEn ? "Your Name" : "お名前"} <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  required
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="w-full rounded-lg border border-[var(--color-border)] px-4 py-2 focus:border-[var(--color-primary)] focus:outline-none"
                  placeholder={isEn ? "Taro Yamada" : "山田太郎"}
                />
              </div>
              <div>
                <label className="mb-1 block text-sm font-medium">
                  {isEn ? "Phone Number" : "電話番号"}
                </label>
                <input
                  type="tel"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  className="w-full rounded-lg border border-[var(--color-border)] px-4 py-2 focus:border-[var(--color-primary)] focus:outline-none"
                  placeholder="090-1234-5678"
                />
              </div>

              {error && <p className="text-sm text-red-500">{error}</p>}

              <div className="flex gap-3">
                <button
                  type="button"
                  onClick={onClose}
                  className="flex-1 rounded-lg border border-[var(--color-border)] px-4 py-2 font-medium"
                >
                  {isEn ? "Cancel" : "キャンセル"}
                </button>
                <button
                  type="submit"
                  disabled={submitting}
                  className="flex-1 rounded-lg bg-[var(--color-primary)] px-4 py-2 font-bold text-white transition hover:bg-[var(--color-primary-light)] disabled:opacity-50"
                >
                  {submitting
                    ? (isEn ? "Submitting..." : "送信中...")
                    : (isEn ? "Apply" : "応募する")}
                </button>
              </div>
            </form>
          </>
        )}
      </div>
    </div>
  );
}
