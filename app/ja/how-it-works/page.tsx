import Link from "next/link";

export default function HowItWorksPage() {
  return (
    <div className="mx-auto max-w-3xl px-6 py-16">
      <h1 className="mb-2 text-3xl font-bold">ご利用方法</h1>
      <p className="mb-12 text-[var(--color-text-light)]">
        先輩として登録される方、案件を依頼される方、それぞれのご利用の流れをご案内します。
      </p>

      {/* For Senpai */}
      <section className="mb-16">
        <h2 className="mb-8 text-2xl font-bold text-[var(--color-primary)]">
          先輩として働く方へ
        </h2>
        <div className="space-y-6">
          {[
            {
              step: "1",
              title: "登録フォームの入力",
              desc: "基本情報、ご経歴、対応可能な業務、お振込先をご入力ください。5分程度で完了します。",
            },
            {
              step: "2",
              title: "本人確認",
              desc: "運転免許証またはマイナンバーカードの写真をお送りいただき、本人確認を行います。",
            },
            {
              step: "3",
              title: "ビデオ面談（10〜15分）",
              desc: "LINEまたはZoomで短時間の面談を行います。業務内容のご説明と、ご希望をお伺いします。",
            },
            {
              step: "4",
              title: "案件のご紹介",
              desc: "お住まいの地域・ご経験に合った案件をご紹介します。お引き受けいただけるかはご判断ください。",
            },
            {
              step: "5",
              title: "業務実行・報告",
              desc: "案件に沿って業務を行い、結果を報告していただきます。報告はLINEやメールで簡単にお送りいただけます。",
            },
            {
              step: "6",
              title: "報酬のお受取り",
              desc: "完了確認後、Wise（国際送金サービス）を通じてご指定の銀行口座にお振込みいたします。通常3営業日以内。",
            },
          ].map((item) => (
            <div key={item.step} className="flex gap-4">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[var(--color-primary)] text-lg font-bold text-white">
                {item.step}
              </div>
              <div>
                <h3 className="text-lg font-bold">{item.title}</h3>
                <p className="text-[var(--color-text-light)] leading-relaxed">
                  {item.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* For Clients */}
      <section className="mb-16">
        <h2 className="mb-8 text-2xl font-bold text-[var(--color-primary)]">
          案件を依頼される方へ
        </h2>
        <div className="space-y-6">
          {[
            {
              step: "1",
              title: "案件の登録",
              desc: "業務内容、希望地域、日程、報酬額をご入力ください。",
            },
            {
              step: "2",
              title: "先輩のマッチング",
              desc: "地域とスキルに合った先輩をご紹介します。プロフィールをご確認の上、ご指名いただけます。",
            },
            {
              step: "3",
              title: "ブリーフィング",
              desc: "案件の詳細を先輩にお伝えします。必要に応じて資料をご共有ください。",
            },
            {
              step: "4",
              title: "業務実行",
              desc: "先輩が現地で業務を実行し、写真・レポートなどで結果をご報告します。",
            },
            {
              step: "5",
              title: "完了・お支払い",
              desc: "報告内容をご確認いただき、完了となります。報酬は当社から先輩にお支払いいたします。",
            },
          ].map((item) => (
            <div key={item.step} className="flex gap-4">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[var(--color-accent)] text-lg font-bold text-white">
                {item.step}
              </div>
              <div>
                <h3 className="text-lg font-bold">{item.title}</h3>
                <p className="text-[var(--color-text-light)] leading-relaxed">
                  {item.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* FAQ */}
      <section className="mb-16">
        <h2 className="mb-8 text-2xl font-bold">よくあるご質問</h2>
        <div className="space-y-4">
          {[
            {
              q: "報酬はどのように支払われますか？",
              a: "Wise（国際送金サービス）を通じて、ご指定の日本の銀行口座にお振込みいたします。Wiseの口座は不要です。通常の銀行口座で受け取れます。",
            },
            {
              q: "税金はどうなりますか？",
              a: "業務委託報酬として、ご自身で確定申告していただく形となります。年間の副収入が20万円以下の場合は申告不要です。",
            },
            {
              q: "どのくらいの頻度で案件がありますか？",
              a: "案件の頻度は時期により異なります。ご自身のペースで、お引き受けいただける案件のみご対応ください。",
            },
            {
              q: "雇用関係になりますか？",
              a: "いいえ。業務委託契約に基づく独立した契約関係です。雇用契約ではありません。",
            },
            {
              q: "特別な資格は必要ですか？",
              a: "T1〜T2の業務に特別な資格は不要です。宅建士や行政書士などの資格をお持ちの方は、より幅広い案件をご紹介できます。",
            },
          ].map((item) => (
            <div
              key={item.q}
              className="rounded-xl border border-[var(--color-border)] bg-white p-6"
            >
              <h3 className="mb-2 font-bold">{item.q}</h3>
              <p className="text-[var(--color-text-light)] leading-relaxed">
                {item.a}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <div className="rounded-xl bg-[var(--color-primary)] p-8 text-center text-white">
        <h2 className="mb-4 text-2xl font-bold">ご登録はこちらから</h2>
        <p className="mb-6 text-white/80">
          登録は無料です。まずはお気軽にご登録ください。
        </p>
        <Link
          href="/ja/register"
          className="inline-flex items-center justify-center rounded-lg bg-[var(--color-accent)] px-10 py-4 text-lg font-bold text-white transition hover:bg-[var(--color-accent-light)]"
        >
          先輩として登録する
        </Link>
      </div>
    </div>
  );
}
