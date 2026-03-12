import Link from "next/link";

export default function Footer() {
  return (
    <footer className="border-t border-[var(--color-border)] bg-white">
      <div className="mx-auto max-w-5xl px-6 py-12">
        <div className="grid gap-8 md:grid-cols-3">
          <div>
            <p className="mb-2 text-xl font-bold text-[var(--color-primary)]">
              先輩<span className="text-[var(--color-accent)]">.work</span>
            </p>
            <p className="text-sm text-[var(--color-text-light)]">
              信頼できるシニアに、
              <br />
              ビジネス実務を依頼
            </p>
          </div>
          <div>
            <h4 className="mb-3 font-bold">サービス</h4>
            <ul className="space-y-2 text-sm text-[var(--color-text-light)]">
              <li>
                <Link href="/tasks" className="hover:text-[var(--color-primary)]">
                  案件一覧
                </Link>
              </li>
              <li>
                <Link href="/register" className="hover:text-[var(--color-primary)]">
                  先輩として登録
                </Link>
              </li>
              <li>
                <Link href="/how-it-works" className="hover:text-[var(--color-primary)]">
                  ご利用方法
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="mb-3 font-bold">運営</h4>
            <ul className="space-y-2 text-sm text-[var(--color-text-light)]">
              <li>運営会社: Mement Hong Kong Limited</li>
              <li>
                <Link href="/privacy" className="hover:text-[var(--color-primary)]">
                  プライバシーポリシー
                </Link>
              </li>
              <li>
                <Link href="/legal" className="hover:text-[var(--color-primary)]">
                  特定商取引法に基づく表記
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="mt-8 border-t border-[var(--color-border)] pt-6 text-center text-sm text-[var(--color-text-light)]">
          &copy; 2026 Senpai.work — Mement Hong Kong Limited
        </div>
      </div>
    </footer>
  );
}
