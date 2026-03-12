import Link from "next/link";

export default function AboutPage() {
  return (
    <div className="mx-auto max-w-3xl px-6 py-16">
      <h1 className="mb-8 text-3xl font-bold">会社概要</h1>

      <div className="space-y-8">
        {/* Mement HK */}
        <section className="rounded-xl border border-[var(--color-border)] bg-white p-8">
          <h2 className="mb-4 text-xl font-bold">運営会社</h2>
          <table className="w-full text-left">
            <tbody className="divide-y divide-[var(--color-border)]">
              {[
                ["会社名", "Mement Hong Kong Limited"],
                ["法人登記番号", "CR No. 2792342 / BR No. 70344480"],
                ["設立", "2019年1月29日"],
                ["所在地", "Central, Hong Kong SAR"],
                ["事業内容", "メディカルビューティー事業の運営、日本国内ビジネス実務代行サービスの企画・運営"],
              ].map(([label, value]) => (
                <tr key={label}>
                  <th className="w-40 py-3 align-top text-sm font-bold text-[var(--color-text-light)]">
                    {label}
                  </th>
                  <td className="py-3">{value}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </section>

        {/* Mement Group */}
        <section className="rounded-xl border border-[var(--color-border)] bg-white p-8">
          <h2 className="mb-4 text-xl font-bold">Mement グループについて</h2>
          <div className="space-y-4 text-[var(--color-text-light)] leading-relaxed">
            <p>
              Mementグループは、韓国本社（Mement Co., Ltd.）を中心に、
              アジア太平洋地域でメディカルビューティー事業を展開するビューティーテック企業です。
            </p>
            <p>
              2017年の創業以来、美容医療・エステティック分野で7年以上の実績があり、
              自社開発のITプラットフォームを活用したデジタルマーケティングと
              医療スタッフ管理システムにより、効率的なクリニック運営を実現しています。
            </p>
          </div>

          <div className="mt-6 grid gap-4 sm:grid-cols-2">
            <div className="rounded-lg bg-[var(--color-bg-warm)] p-5 text-center">
              <p className="text-3xl font-bold text-[var(--color-primary)]">41+</p>
              <p className="text-sm text-[var(--color-text-light)]">韓国国内クリニック（フランチャイズ）</p>
            </div>
            <div className="rounded-lg bg-[var(--color-bg-warm)] p-5 text-center">
              <p className="text-3xl font-bold text-[var(--color-primary)]">5</p>
              <p className="text-sm text-[var(--color-text-light)]">海外直営クリニック（香港・ベトナム）</p>
            </div>
          </div>

          <div className="mt-6">
            <h3 className="mb-3 text-sm font-bold text-[var(--color-text-light)]">グループブランド</h3>
            <div className="flex flex-wrap gap-3">
              {["MUSE CLINIC", "SHINE BEAM", "SKIN & BEAM", "COCONUT", "What's M"].map((brand) => (
                <span
                  key={brand}
                  className="rounded-full border border-[var(--color-border)] px-4 py-1.5 text-sm"
                >
                  {brand}
                </span>
              ))}
            </div>
          </div>
        </section>

        {/* Corporate Structure */}
        <section className="rounded-xl border border-[var(--color-border)] bg-white p-8">
          <h2 className="mb-4 text-xl font-bold">グループ構成</h2>
          <div className="space-y-3 text-sm">
            <div className="rounded-lg border border-[var(--color-border)] p-4">
              <p className="font-bold">Mement Co., Ltd.</p>
              <p className="text-[var(--color-text-light)]">韓国本社 — マーケティング、調達、国内フランチャイズ管理</p>
            </div>
            <div className="ml-6 border-l-2 border-[var(--color-border)] pl-4">
              <div className="rounded-lg border border-[var(--color-border)] p-4">
                <p className="font-bold">Mement Overseas Holdings, Limited</p>
                <p className="text-[var(--color-text-light)]">ケイマン諸島 — 海外投資持株会社</p>
              </div>
              <div className="mt-3 ml-6 grid gap-3 sm:grid-cols-2">
                <div className="rounded-lg border-2 border-[var(--color-primary)] p-4">
                  <p className="font-bold text-[var(--color-primary)]">Mement Hong Kong Limited</p>
                  <p className="text-[var(--color-text-light)]">香港 — 投資・事業運営</p>
                  <div className="mt-2 rounded border border-[var(--color-border)] p-3">
                    <p className="text-xs font-bold">Skin and Beam Hong Kong Limited</p>
                    <p className="text-xs text-[var(--color-text-light)]">香港クリニック運営</p>
                  </div>
                </div>
                <div className="rounded-lg border border-[var(--color-border)] p-4">
                  <p className="font-bold">Mement Inc.</p>
                  <p className="text-[var(--color-text-light)]">米国（デラウェア） — 米国投資持株</p>
                  <div className="mt-2 rounded border border-[var(--color-border)] p-3">
                    <p className="text-xs font-bold">Mement Operations LLC</p>
                    <p className="text-xs text-[var(--color-text-light)]">カリフォルニア事業運営</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Senpai.work */}
        <section className="rounded-xl border border-[var(--color-border)] bg-white p-8">
          <h2 className="mb-4 text-xl font-bold">先輩.workについて</h2>
          <div className="space-y-4 text-[var(--color-text-light)] leading-relaxed">
            <p>
              先輩.work（センパイ・ドット・ワーク）は、Mement Hong Kong Limitedが運営する、
              日本国内でのビジネス実務を経験豊富なシニア人材に依頼できるマッチングプラットフォームです。
            </p>
            <p>
              海外企業が日本で事業を展開する際、現地での書類手続き、工場視察、
              不動産交渉、M&A面談など、「現地に信頼できる人がいれば」という課題があります。
              先輩.workは、50代〜70代の社会経験豊富なシニアが、
              その知識と信用力を活かして「現地の手」となるサービスです。
            </p>
            <p>
              報酬はWise（国際送金サービス）を通じて、香港法人から日本の個人口座へ
              業務委託費としてお支払いいたします。
            </p>
          </div>
        </section>

        {/* Target */}
        <section className="rounded-xl border border-[var(--color-border)] bg-white p-8">
          <h2 className="mb-4 text-xl font-bold">サービス対象</h2>
          <div className="grid gap-4 sm:grid-cols-2">
            {[
              {
                title: "依頼者（クライアント）",
                desc: "日本国外に拠点を持ち、日本国内でのビジネス実務を必要とする法人・個人",
              },
              {
                title: "先輩（実行者）",
                desc: "日本在住の50代〜70代のシニア。豊富な社会経験と信用力を持つ方",
              },
            ].map((item) => (
              <div key={item.title} className="rounded-lg bg-[var(--color-bg-warm)] p-6">
                <h3 className="mb-2 font-bold">{item.title}</h3>
                <p className="text-sm text-[var(--color-text-light)]">{item.desc}</p>
              </div>
            ))}
          </div>
        </section>

        <div className="text-center">
          <Link
            href="/ja/register"
            className="inline-flex items-center justify-center rounded-lg bg-[var(--color-primary)] px-8 py-3 font-bold text-white transition hover:bg-[var(--color-primary-light)]"
          >
            先輩として登録する
          </Link>
        </div>
      </div>
    </div>
  );
}
