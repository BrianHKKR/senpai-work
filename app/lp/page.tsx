import Link from "next/link";

const tiers = [
  {
    icon: "📋",
    label: "T1",
    title: "書類サポート",
    price: "¥5,000〜",
    examples: ["緊急連絡先の登録", "役所での書類取得", "郵便物の受取代行"],
    color: "border-blue-200 bg-blue-50",
    badge: "bg-blue-600",
  },
  {
    icon: "🏭",
    label: "T2",
    title: "現場代行",
    price: "¥15,000〜",
    examples: ["工場・物件の現地確認", "内見代行・写真レポート", "現地視察・状況報告"],
    color: "border-amber-200 bg-amber-50",
    badge: "bg-amber-600",
  },
  {
    icon: "🤝",
    label: "T3",
    title: "交渉・面談",
    price: "¥50,000〜",
    examples: ["M&Aオーナーとの面談", "不動産仲介との交渉", "契約立会い・交渉代行"],
    color: "border-green-200 bg-green-50",
    badge: "bg-green-700",
  },
];

const steps = [
  {
    num: "1",
    title: "無料で登録",
    desc: "基本情報を入力するだけ。5分で完了します。",
    icon: "📝",
  },
  {
    num: "2",
    title: "案件を選ぶ",
    desc: "お住まいの地域・ご都合に合う案件をお選びください。",
    icon: "🔍",
  },
  {
    num: "3",
    title: "報酬を受け取る",
    desc: "業務完了後、Wiseで日本の銀行口座に直接振込。",
    icon: "💰",
  },
];

const safePoints = [
  {
    icon: "✅",
    title: "雇用関係なし",
    desc: "業務委託契約なので、年金・社会保険に影響しません。ご自身のペースで選べます。",
  },
  {
    icon: "✅",
    title: "確定申告不要",
    desc: "年間20万円以下の副収入は確定申告不要。気軽に始められます。",
  },
  {
    icon: "✅",
    title: "Wiseで安全送金",
    desc: "国際送金サービス「Wise」を通じて、ご指定の日本の口座に直接振込。",
  },
  {
    icon: "✅",
    title: "本人確認あり",
    desc: "登録者全員に本人確認とビデオ面談を実施。安心して取り組める環境です。",
  },
];

export default function LpPage() {
  return (
    <div className="overflow-x-hidden">
      {/* Hero */}
      <section className="relative bg-[var(--color-primary)] text-white">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_20%_60%,rgba(198,150,60,0.15),transparent_60%)]" />
        </div>
        <div className="relative mx-auto max-w-4xl px-6 py-20 md:py-28 text-center">
          {/* Badge */}
          <div className="mb-6 inline-block rounded-full bg-[var(--color-accent)]/20 border border-[var(--color-accent)]/40 px-5 py-2 text-base text-[var(--color-accent)]">
            50〜70代のシニア人材 募集中
          </div>

          <h1 className="mb-6 text-4xl font-bold leading-tight tracking-tight md:text-5xl lg:text-6xl">
            経験豊富な先輩、
            <br className="hidden sm:block" />
            募集中。
          </h1>

          <p className="mx-auto mb-4 max-w-2xl text-xl leading-relaxed text-white/85 md:text-2xl">
            あなたの経験を活かせる案件をご紹介します
          </p>
          <p className="mx-auto mb-10 max-w-xl text-lg text-white/65 leading-relaxed">
            不動産視察・書類手続き・交渉代行など、1件から気軽に。
            <br />
            案件単位の報酬制で、ご自身のペースで働けます。
          </p>

          <Link
            href="/register"
            className="inline-flex items-center justify-center rounded-xl bg-[var(--color-accent)] px-10 py-5 text-xl font-bold text-white shadow-lg transition hover:bg-[var(--color-accent-light)] hover:shadow-xl active:scale-[0.98]"
          >
            無料で登録する →
          </Link>

          <p className="mt-5 text-base text-white/50">登録無料・雇用関係なし・いつでも退会可</p>
        </div>
      </section>

      {/* 案件例 */}
      <section className="bg-[var(--color-bg-warm)] py-20">
        <div className="mx-auto max-w-5xl px-6">
          <div className="mb-12 text-center">
            <h2 className="mb-3 text-3xl font-bold md:text-4xl">案件例・報酬の目安</h2>
            <p className="text-lg text-[var(--color-text-light)]">
              地域や経験に応じて、3つのティアからお選びいただけます
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-3">
            {tiers.map((tier) => (
              <div
                key={tier.label}
                className={`rounded-2xl border-2 p-8 ${tier.color} flex flex-col`}
              >
                <div className="mb-4 flex items-center gap-3">
                  <span className="text-4xl">{tier.icon}</span>
                  <div>
                    <span className={`inline-block rounded px-2 py-0.5 text-xs font-bold text-white ${tier.badge}`}>
                      {tier.label}
                    </span>
                    <h3 className="text-xl font-bold">{tier.title}</h3>
                  </div>
                </div>

                <ul className="mb-6 flex-1 space-y-2">
                  {tier.examples.map((ex) => (
                    <li key={ex} className="flex items-start gap-2 text-base text-[var(--color-text)]">
                      <span className="mt-1 text-[var(--color-accent)]">•</span>
                      {ex}
                    </li>
                  ))}
                </ul>

                <div className="rounded-xl bg-white/70 py-3 text-center">
                  <p className="text-sm text-[var(--color-text-light)]">報酬目安</p>
                  <p className="text-2xl font-bold text-[var(--color-accent)]">{tier.price}</p>
                  <p className="text-xs text-[var(--color-text-light)]">/ 案件</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3ステップ */}
      <section className="py-20">
        <div className="mx-auto max-w-4xl px-6">
          <div className="mb-14 text-center">
            <h2 className="mb-3 text-3xl font-bold md:text-4xl">はじめ方は3ステップ</h2>
            <p className="text-lg text-[var(--color-text-light)]">難しい手続きはありません</p>
          </div>

          <div className="relative">
            {/* Connector line (desktop) */}
            <div className="absolute top-14 left-0 right-0 hidden h-0.5 bg-[var(--color-border)] md:block" style={{ margin: "0 calc(100%/6)" }} />

            <div className="grid gap-10 md:grid-cols-3">
              {steps.map((step, i) => (
                <div key={step.num} className="relative flex flex-col items-center text-center">
                  {/* Mobile connector */}
                  {i < steps.length - 1 && (
                    <div className="absolute top-full left-1/2 h-8 w-0.5 -translate-x-1/2 bg-[var(--color-border)] md:hidden" />
                  )}

                  <div className="relative mb-5 flex h-28 w-28 flex-col items-center justify-center rounded-full bg-[var(--color-primary)] text-white shadow-md">
                    <span className="text-3xl">{step.icon}</span>
                    <span className="absolute -top-1 -right-1 flex h-8 w-8 items-center justify-center rounded-full bg-[var(--color-accent)] text-sm font-bold">
                      {step.num}
                    </span>
                  </div>

                  <h3 className="mb-3 text-xl font-bold">{step.title}</h3>
                  <p className="text-base leading-relaxed text-[var(--color-text-light)]">{step.desc}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="mt-16 text-center">
            <Link
              href="/register"
              className="inline-flex items-center justify-center rounded-xl bg-[var(--color-accent)] px-10 py-5 text-xl font-bold text-white shadow-md transition hover:bg-[var(--color-accent-light)]"
            >
              今すぐ登録する →
            </Link>
          </div>
        </div>
      </section>

      {/* 安心ポイント */}
      <section className="bg-[var(--color-primary)] py-20 text-white">
        <div className="mx-auto max-w-5xl px-6">
          <div className="mb-12 text-center">
            <h2 className="mb-3 text-3xl font-bold md:text-4xl">安心して始められる理由</h2>
            <p className="text-lg text-white/70">
              年金生活者・退職者の方も安心してご参加いただけます
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2">
            {safePoints.map((pt) => (
              <div
                key={pt.title}
                className="flex gap-5 rounded-2xl bg-white/10 p-7 backdrop-blur-sm border border-white/10"
              >
                <span className="mt-0.5 text-3xl flex-shrink-0">{pt.icon}</span>
                <div>
                  <h3 className="mb-2 text-xl font-bold">{pt.title}</h3>
                  <p className="text-base leading-relaxed text-white/75">{pt.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 体験談 */}
      <section className="bg-[var(--color-bg-warm)] py-20">
        <div className="mx-auto max-w-3xl px-6">
          <div className="mb-12 text-center">
            <h2 className="mb-3 text-3xl font-bold md:text-4xl">ご参加の先輩から</h2>
          </div>

          <div className="rounded-2xl bg-white border border-[var(--color-border)] p-10 shadow-sm relative">
            {/* Quote mark */}
            <span className="absolute top-6 left-8 text-6xl font-serif text-[var(--color-accent)]/30 leading-none select-none">"</span>

            <blockquote className="relative z-10 mb-8 text-xl leading-relaxed text-[var(--color-text)] pt-6">
              退職後は時間はあるのに、なかなか「社会とのつながり」が感じられませんでした。
              Senpai.workで工場の現地視察を担当してから、自分の経験が本当に役立っていると実感しています。
              <br /><br />
              確定申告も不要で、年金に影響しないのも安心です。
            </blockquote>

            <div className="flex items-center gap-4 border-t border-[var(--color-border)] pt-6">
              <div className="flex h-14 w-14 items-center justify-center rounded-full bg-[var(--color-primary)] text-white text-xl font-bold">
                高
              </div>
              <div>
                <p className="font-bold text-lg">T.高木さん <span className="text-[var(--color-text-light)] font-normal text-base">（63歳）</span></p>
                <p className="text-[var(--color-text-light)]">三重県 · T2案件（工場視察）担当</p>
              </div>
              <div className="ml-auto">
                <div className="flex gap-1">
                  {[...Array(5)].map((_, i) => (
                    <span key={i} className="text-[var(--color-accent)] text-xl">★</span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-24 text-center">
        <div className="mx-auto max-w-3xl px-6">
          <p className="mb-3 text-base font-medium tracking-widest text-[var(--color-accent)] uppercase">今すぐ始める</p>
          <h2 className="mb-5 text-3xl font-bold leading-tight md:text-4xl">
            あなたの経験を、
            <br />
            もう一度活かしませんか？
          </h2>
          <p className="mx-auto mb-10 max-w-xl text-lg leading-relaxed text-[var(--color-text-light)]">
            登録無料。業務委託なので雇用関係はありません。
            <br />
            1案件から気軽にご参加いただけます。
          </p>

          <Link
            href="/register"
            className="inline-flex items-center justify-center rounded-xl bg-[var(--color-accent)] px-12 py-5 text-2xl font-bold text-white shadow-lg transition hover:bg-[var(--color-accent-light)] hover:shadow-xl active:scale-[0.98]"
          >
            無料で登録する →
          </Link>

          <div className="mt-8 flex flex-wrap items-center justify-center gap-6 text-sm text-[var(--color-text-light)]">
            <span>✓ 登録無料</span>
            <span>✓ 雇用関係なし</span>
            <span>✓ 確定申告不要（年20万以下）</span>
            <span>✓ いつでも退会可</span>
          </div>
        </div>
      </section>
    </div>
  );
}
