import Link from "next/link";

const tiers = [
  {
    level: "T1",
    title: "書類サポート",
    description: "緊急連絡先の登録、郵便物の受取、役所での書類取得",
    price: "¥5,000〜¥8,000",
    icon: "📋",
  },
  {
    level: "T2",
    title: "現場代行",
    description: "物件・工場の現地確認、内見代行、写真撮影・レポート",
    price: "¥8,000〜¥25,000",
    icon: "🏭",
  },
  {
    level: "T3",
    title: "交渉・面談",
    description: "M&Aオーナー面談、不動産仲介との交渉、契約立会い",
    price: "¥25,000〜¥80,000",
    icon: "🤝",
  },
  {
    level: "T4",
    title: "ディレクター",
    description: "法人役員登録、契約書署名、銀行口座開設の立会い",
    price: "月額制・要相談",
    icon: "👔",
  },
];

const steps = [
  {
    num: "01",
    title: "案件を登録",
    description: "依頼内容・地域・希望日時を入力",
  },
  {
    num: "02",
    title: "先輩をマッチング",
    description: "地域・経験に合った先輩をご紹介",
  },
  {
    num: "03",
    title: "実行・報告",
    description: "先輩が現地で実行し、結果を報告",
  },
  {
    num: "04",
    title: "報酬お支払い",
    description: "完了確認後、Wise経由で送金",
  },
];

export default function Home() {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden bg-[var(--color-primary)] text-white">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(255,255,255,0.15),transparent_70%)]" />
        </div>
        <div className="relative mx-auto max-w-5xl px-6 py-24 md:py-32">
          <p className="mb-4 text-lg tracking-widest text-[var(--color-accent)]">
            SENPAI.WORK
          </p>
          <h1 className="mb-6 text-4xl font-bold leading-tight md:text-5xl lg:text-6xl">
            信頼できる先輩に、
            <br />
            日本のビジネス実務を依頼
          </h1>
          <p className="mb-10 max-w-2xl text-xl leading-relaxed text-white/80">
            不動産手続き、工場視察、交渉代行——
            <br />
            経験豊富な日本のシニア人材が、あなたの「現地の手」になります。
          </p>
          <div className="flex flex-col gap-4 sm:flex-row">
            <Link
              href="/register"
              className="inline-flex items-center justify-center rounded-lg bg-[var(--color-accent)] px-8 py-4 text-lg font-bold text-white transition hover:bg-[var(--color-accent-light)]"
            >
              先輩として登録する
            </Link>
            <Link
              href="/tasks"
              className="inline-flex items-center justify-center rounded-lg border-2 border-white/30 px-8 py-4 text-lg font-bold text-white transition hover:border-white/60"
            >
              案件を見る
            </Link>
          </div>
        </div>
      </section>

      {/* Why Senpai */}
      <section className="mx-auto max-w-5xl px-6 py-20">
        <h2 className="mb-4 text-center text-3xl font-bold">
          なぜ「先輩」なのか
        </h2>
        <p className="mx-auto mb-12 max-w-2xl text-center text-lg text-[var(--color-text-light)]">
          50代〜70代の経験豊富なシニアだからこそ、
          ビジネスの現場で信頼される実行力があります。
        </p>
        <div className="grid gap-8 md:grid-cols-3">
          {[
            {
              title: "社会的信用",
              desc: "長年のキャリアと実績が、取引先や金融機関からの信頼を生みます。",
            },
            {
              title: "対面交渉力",
              desc: "M&Aや不動産の現場で、相手の警戒を解くコミュニケーション力。",
            },
            {
              title: "平日対応可能",
              desc: "役所・銀行・仲介業者の営業時間に柔軟に対応できます。",
            },
          ].map((item) => (
            <div
              key={item.title}
              className="rounded-xl border border-[var(--color-border)] bg-white p-8"
            >
              <h3 className="mb-3 text-xl font-bold">{item.title}</h3>
              <p className="text-[var(--color-text-light)] leading-relaxed">
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Service Tiers */}
      <section className="bg-[var(--color-bg-warm)] py-20">
        <div className="mx-auto max-w-5xl px-6">
          <h2 className="mb-12 text-center text-3xl font-bold">
            サービス内容
          </h2>
          <div className="grid gap-6 md:grid-cols-2">
            {tiers.map((tier) => (
              <div
                key={tier.level}
                className="rounded-xl border border-[var(--color-border)] bg-white p-8"
              >
                <div className="mb-4 flex items-center gap-3">
                  <span className="text-3xl">{tier.icon}</span>
                  <div>
                    <span className="rounded bg-[var(--color-primary)] px-2 py-0.5 text-xs font-bold text-white">
                      {tier.level}
                    </span>
                    <h3 className="text-xl font-bold">{tier.title}</h3>
                  </div>
                </div>
                <p className="mb-4 text-[var(--color-text-light)] leading-relaxed">
                  {tier.description}
                </p>
                <p className="text-lg font-bold text-[var(--color-accent)]">
                  {tier.price}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How it works */}
      <section className="mx-auto max-w-5xl px-6 py-20">
        <h2 className="mb-12 text-center text-3xl font-bold">ご利用の流れ</h2>
        <div className="grid gap-8 md:grid-cols-4">
          {steps.map((step) => (
            <div key={step.num} className="text-center">
              <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-[var(--color-primary)] text-2xl font-bold text-white">
                {step.num}
              </div>
              <h3 className="mb-2 text-lg font-bold">{step.title}</h3>
              <p className="text-[var(--color-text-light)]">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="bg-[var(--color-primary)] py-20 text-center text-white">
        <div className="mx-auto max-w-3xl px-6">
          <h2 className="mb-4 text-3xl font-bold">
            あなたの経験を、もう一度活かしませんか？
          </h2>
          <p className="mb-8 text-lg text-white/80">
            退職後のスキルと信頼を、ビジネスの現場で必要としている方がいます。
            <br />
            案件ごとの報酬制。ご自身のペースで。
          </p>
          <Link
            href="/register"
            className="inline-flex items-center justify-center rounded-lg bg-[var(--color-accent)] px-10 py-4 text-xl font-bold text-white transition hover:bg-[var(--color-accent-light)]"
          >
            先輩として登録する
          </Link>
        </div>
      </section>
    </>
  );
}
