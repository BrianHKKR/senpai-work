"use client";

import Link from "next/link";
import { useState } from "react";
import { trackTaskApply } from "@/lib/tracking";

interface ApplyModalProps {
  taskId: string;
  taskTitle: string;
  isEn?: boolean;
  prefix?: string;
  onClose: () => void;
}

function formatPhone(value: string): string {
  const digits = value.replace(/[^0-9]/g, "");
  if (digits.length <= 3) return digits;
  if (digits.length <= 7) return `${digits.slice(0, 3)}-${digits.slice(3)}`;
  return `${digits.slice(0, 3)}-${digits.slice(3, 7)}-${digits.slice(7, 11)}`;
}

export default function ApplyModal({ taskId, taskTitle, isEn, prefix = "", onClose }: ApplyModalProps) {
  const [phone, setPhone] = useState("");
  const [submitting, setSubmitting] = useState(false);
  const [done, setDone] = useState(false);
  const [notRegistered, setNotRegistered] = useState(false);
  const [confirmedName, setConfirmedName] = useState("");
  const [error, setError] = useState("");

  const handlePhoneChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPhone(formatPhone(e.target.value));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitting(true);
    setError("");
    setNotRegistered(false);

    try {
      const res = await fetch("/api/tasks/apply", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ taskId, phone }),
      });
      const data = await res.json();

      if (data.success) {
        trackTaskApply(taskId, taskTitle);
        setConfirmedName(data.name || "");
        setDone(true);
      } else if (data.error === "not_registered") {
        setNotRegistered(true);
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
        className="w-full max-w-md rounded-2xl bg-white p-8 shadow-xl"
        onClick={(e) => e.stopPropagation()}
      >
        {done ? (
          <div className="text-center py-4">
            <div className="mb-4 text-5xl">✓</div>
            <p className="mb-2 text-xl font-bold text-green-600">
              {isEn ? "Application submitted!" : "応募が完了しました！"}
            </p>
            {confirmedName && (
              <p className="mb-2 text-base text-[var(--color-text-light)]">
                {isEn ? `Applied as: ${confirmedName}` : `応募者: ${confirmedName}さん`}
              </p>
            )}
            <p className="mb-8 text-base text-[var(--color-text-light)]">
              {isEn ? "We will contact you soon." : "担当者よりご連絡いたします。"}
            </p>
            <button
              onClick={onClose}
              className="rounded-lg bg-[var(--color-primary)] px-8 py-3 text-lg font-bold text-white"
            >
              {isEn ? "Close" : "閉じる"}
            </button>
          </div>
        ) : notRegistered ? (
          <div className="text-center py-4">
            <div className="mb-4 text-5xl">!</div>
            <p className="mb-2 text-xl font-bold text-amber-600">
              {isEn ? "Not Registered" : "未登録の電話番号です"}
            </p>
            <p className="mb-8 text-base text-[var(--color-text-light)]">
              {isEn
                ? "This phone number is not registered. Please register as a senpai first."
                : "この電話番号では登録が確認できませんでした。先に先輩登録をお願いいたします。"}
            </p>
            <div className="flex gap-3">
              <button
                onClick={() => setNotRegistered(false)}
                className="flex-1 rounded-lg border border-[var(--color-border)] px-4 py-3 text-lg font-medium"
              >
                {isEn ? "Try Again" : "戻る"}
              </button>
              <Link
                href={`${prefix}/register`}
                className="flex-1 rounded-lg bg-[var(--color-primary)] px-4 py-3 text-center text-lg font-bold text-white"
                onClick={onClose}
              >
                {isEn ? "Register" : "先輩登録へ"}
              </Link>
            </div>
          </div>
        ) : (
          <>
            <h3 className="mb-1 text-xl font-bold">
              {isEn ? "Apply for Task" : "この案件に応募する"}
            </h3>
            <p className="mb-6 text-base text-[var(--color-text-light)] line-clamp-2">{taskTitle}</p>

            <form onSubmit={handleSubmit} className="space-y-5">
              <div>
                <label className="mb-2 block text-base font-bold">
                  {isEn ? "Your Phone Number" : "電話番号"}
                </label>
                <input
                  type="tel"
                  required
                  value={phone}
                  onChange={handlePhoneChange}
                  className="w-full rounded-lg border-2 border-[var(--color-border)] px-4 py-3 text-xl focus:border-[var(--color-primary)] focus:outline-none"
                  placeholder="090-1234-5678"
                  autoComplete="tel"
                  inputMode="tel"
                />
                <p className="mt-2 text-sm text-[var(--color-text-light)]">
                  {isEn
                    ? "Enter the phone number you registered with. Dashes are optional."
                    : "ご登録時の電話番号を入力してください。ハイフンは自動で入ります。"}
                </p>
              </div>

              {error && (
                <div className="rounded-lg bg-red-50 p-3 text-base text-red-600">
                  {error}
                </div>
              )}

              <div className="flex gap-3 pt-2">
                <button
                  type="button"
                  onClick={onClose}
                  className="flex-1 rounded-lg border border-[var(--color-border)] px-4 py-3 text-lg font-medium"
                >
                  {isEn ? "Cancel" : "キャンセル"}
                </button>
                <button
                  type="submit"
                  disabled={submitting}
                  className="flex-1 rounded-lg bg-[var(--color-accent)] px-4 py-3 text-lg font-bold text-white transition hover:opacity-90 disabled:opacity-50"
                >
                  {submitting
                    ? (isEn ? "Checking..." : "確認中...")
                    : (isEn ? "Apply" : "応募する")}
                </button>
              </div>

              <p className="text-center text-sm text-[var(--color-text-light)]">
                {isEn ? "Not registered yet? " : "まだ登録していない方は "}
                <Link href={`${prefix}/register`} className="text-[var(--color-primary)] underline" onClick={onClose}>
                  {isEn ? "Register here" : "こちらから登録"}
                </Link>
              </p>
            </form>
          </>
        )}
      </div>
    </div>
  );
}
