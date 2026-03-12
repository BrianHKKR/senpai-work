"use client";

import Link from "next/link";
import { useState } from "react";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-[var(--color-border)] bg-white/95 backdrop-blur">
      <div className="mx-auto flex max-w-5xl items-center justify-between px-6 py-4">
        <Link href="/" className="text-2xl font-bold text-[var(--color-primary)]">
          先輩<span className="text-[var(--color-accent)]">.work</span>
        </Link>

        {/* Desktop nav */}
        <nav className="hidden items-center gap-8 md:flex">
          <Link
            href="/tasks"
            className="text-[var(--color-text-light)] transition hover:text-[var(--color-primary)]"
          >
            案件一覧
          </Link>
          <Link
            href="/how-it-works"
            className="text-[var(--color-text-light)] transition hover:text-[var(--color-primary)]"
          >
            ご利用方法
          </Link>
          <Link
            href="/register"
            className="rounded-lg bg-[var(--color-primary)] px-6 py-2.5 font-bold text-white transition hover:bg-[var(--color-primary-light)]"
          >
            先輩登録
          </Link>
        </nav>

        {/* Mobile menu button */}
        <button
          className="md:hidden"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="メニュー"
        >
          <svg
            className="h-6 w-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            {isOpen ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile nav */}
      {isOpen && (
        <nav className="border-t border-[var(--color-border)] bg-white px-6 py-4 md:hidden">
          <div className="flex flex-col gap-4">
            <Link
              href="/tasks"
              className="text-lg"
              onClick={() => setIsOpen(false)}
            >
              案件一覧
            </Link>
            <Link
              href="/how-it-works"
              className="text-lg"
              onClick={() => setIsOpen(false)}
            >
              ご利用方法
            </Link>
            <Link
              href="/register"
              className="rounded-lg bg-[var(--color-primary)] px-6 py-3 text-center font-bold text-white"
              onClick={() => setIsOpen(false)}
            >
              先輩登録
            </Link>
          </div>
        </nav>
      )}
    </header>
  );
}
