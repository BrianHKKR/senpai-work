export default function LegalPage() {
  return (
    <div className="mx-auto max-w-3xl px-6 py-16">
      <h1 className="mb-8 text-3xl font-bold">特定商取引法に基づく表記</h1>

      <div className="rounded-xl border border-[var(--color-border)] bg-white">
        <table className="w-full text-left">
          <tbody className="divide-y divide-[var(--color-border)]">
            {[
              ["事業者名", "Mement Hong Kong Limited"],
              ["代表者", "Choi Byung Chul（崔炳哲）"],
              ["所在地", "Central, Hong Kong SAR"],
              [
                "連絡先",
                <>
                  メール: info@senpai.work
                  <br />
                  ※お問い合わせはメールにて承ります
                </>,
              ],
              ["サービス名", "先輩.work（センパイ・ドット・ワーク）"],
              [
                "サービス内容",
                "日本国内でのビジネス実務代行のマッチングサービス。海外企業と日本在住のシニア人材をマッチングし、書類手続き・現場視察・交渉代行等の業務を仲介します。",
              ],
              [
                "報酬について",
                <>
                  案件ごとに異なります。
                  <br />
                  T1（書類サポート）: ¥5,000〜¥8,000
                  <br />
                  T2（現場代行）: ¥8,000〜¥25,000
                  <br />
                  T3（交渉・面談）: ¥25,000〜¥80,000
                  <br />
                  T4（ディレクター）: 月額制・要相談
                  <br />
                  ※上記は目安であり、案件の内容により変動します
                </>,
              ],
              [
                "報酬のお支払い方法",
                "Wise（国際送金サービス）を通じて、香港法人から日本の銀行口座へお振込みいたします。業務完了確認後、原則5営業日以内にお支払いいたします。",
              ],
              [
                "報酬以外に発生する費用",
                "交通費・宿泊費等の実費が発生する場合は、事前にご案内の上、報酬とは別にお支払いいたします。",
              ],
              [
                "契約形態",
                "業務委託契約（雇用契約ではありません）。登録された先輩は個人事業主として業務を遂行していただきます。",
              ],
              [
                "キャンセルについて",
                <>
                  依頼者（クライアント）によるキャンセル: 業務開始前は無料。業務開始後は実費をお支払い。
                  <br />
                  先輩（受託者）によるキャンセル: 業務開始48時間前までに連絡をお願いいたします。
                </>,
              ],
              [
                "準拠法・管轄",
                "本サービスの利用に関する紛争は、香港特別行政区の法律を準拠法とし、香港国際仲裁センター（HKIAC）の仲裁規則に基づき解決するものとします。",
              ],
            ].map(([label, value], i) => (
              <tr key={i}>
                <th className="w-48 px-6 py-4 align-top text-sm font-bold text-[var(--color-text-light)] bg-[var(--color-bg-warm)]">
                  {label}
                </th>
                <td className="px-6 py-4 text-sm leading-relaxed">{value}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
