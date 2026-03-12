import Link from "next/link";

export default function AboutPage() {
  return (
    <div className="mx-auto max-w-3xl px-6 py-16">
      <h1 className="mb-8 text-3xl font-bold">会社概要</h1>

      <div className="space-y-8">
        <section className="rounded-xl border border-[var(--color-border)] bg-white p-8">
          <h2 className="mb-4 text-xl font-bold">運営会社</h2>
          <table className="w-full text-left">
            <tbody className="divide-y divide-[var(--color-border)]">
              {[
                ["会社名", "Mement Hong Kong Limited"],
                ["法人登記番号", "CR No. 2792342"],
                ["設立", "2019年1月29日"],
                ["所在地", "Central, Hong Kong SAR"],
                ["代表", "Choi Byung Chul (Brian)"],
                ["事業内容", "日本国内ビジネス実務代行サービスの企画・運営"],
                ["グループ", "Mement Co., Ltd.（韓国本社）"],
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

        <section className="rounded-xl border border-[var(--color-border)] bg-white p-8">
          <h2 className="mb-4 text-xl font-bold">先輩.workについて</h2>
          <div className="space-y-4 text-[var(--color-text-light)] leading-relaxed">
            <p>
              先輩.work（センパイ・ドット・ワーク）は、日本国内でのビジネス実務を、
              経験豊富なシニア人材に依頼できるマッチングプラットフォームです。
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
