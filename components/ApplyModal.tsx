"use client";

import Link from "next/link";
import { useState } from "react";

interface ApplyModalProps {
  taskId: string;
  taskTitle: string;
  isEn?: boolean;
  prefix?: string;
  onClose: () => void;
}

export default function ApplyModal({ taskId, taskTitle, isEn, prefix = "", onClose }: ApplyModalProps) {
  const [phone, setPhone] = useState("");
  const [submitting, setSubmitting] = useState(false);
  const [done, setDone] = useState(false);
  const [notRegistered, setNotRegistered] = useState(false);
  const [confirmedName, setConfirmedName] = useState("");
  const [error, setError] = useState("");

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
        className="w-full max-w-md rounded-xl bg-white p-6 shadow-xl"
        onClick={(e) => e.stopPropagation()}
      >
        {done ? (
          <div className="text-center">
            <p className="mb-2 text-lg font-bold text-green-600">
              {isEn ? "Application submitted!" : "応募が完了しました！"}
            </p>
            {confirmedName && (
              <p className="mb-2 text-sm text-[var(--color-text-light)]">
                {isEn ? `Applied as: ${confirmedName}` : `応募者: ${confirmedName}`}
              </p>
            )}
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
        ) : notRegistered ? (
          <div className="text-center">
            <p className="mb-2 text-lg font-bold text-amber-600">
              {isEn ? "Not Registered" : "未登録です"}
            </p>
            <p className="mb-6 text-sm text-[var(--color-text-light)]">
              {isEn
                ? "This phone number is not registered. Please register as a senpai first."
                : "この電話番号は登録されていません。先に先輩登録をお願いいたします。"}
            </p>
            <div className="flex gap-3">
              <button
                onClick={() => setNotRegistered(false)}
                className="flex-1 rounded-lg border border-[var(--color-border)] px-4 py-2 font-medium"
              >
                {isEn ? "Try Again" : "戻る"}
              </button>
              <Link
                href={`${prefix}/register`}
                className="flex-1 rounded-lg bg-[var(--color-primary)] px-4 py-2 text-center font-bold text-white"
                onClick={onClose}
              >
                {isEn ? "Register" : "先輩登録"}
              </Link>
            </div>
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
                  {isEn ? "Registered Phone Number" : "登録済みの電話番号"} <span className="text-red-500">*</span>
                </label>
                <input
                  type="tel"
                  required
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  className="w-full rounded-lg border border-[var(--color-border)] px-4 py-2 focus:border-[var(--color-primary)] focus:outline-none"
                  placeholder="090-1234-5678"
                />
                <p className="mt-1 text-xs text-[var(--color-text-light)]">
                  {isEn
                    ? "Enter the phone number you used to register."
                    : "ご登録時の電話番号を入力してください。"}
                </p>
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
                    ? (isEn ? "Checking..." : "確認中...")
                    : (isEn ? "Apply" : "応募する")}
                </button>
              </div>

              <p className="text-center text-xs text-[var(--color-text-light)]">
                {isEn ? "Not registered yet? " : "まだ登録していない方は"}
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
