export default function PrivacyPage() {
  return (
    <div className="mx-auto max-w-3xl px-6 py-16">
      <h1 className="mb-2 text-3xl font-bold">プライバシーポリシー</h1>
      <p className="mb-8 text-sm text-[var(--color-text-light)]">最終更新日: 2026年3月12日</p>

      <div className="prose max-w-none space-y-8 text-[var(--color-text)] leading-relaxed">
        <p>
          Mement Hong Kong Limited（以下「当社」）は、先輩.work（以下「本サービス」）の運営にあたり、
          お客様の個人情報の保護を重要な責務と認識し、日本の個人情報保護法（APPI）および
          香港個人資料（私隱）條例（PDPO）に基づき、以下のとおりプライバシーポリシーを定めます。
        </p>

        <section>
          <h2 className="mb-3 text-xl font-bold">1. 収集する個人情報</h2>
          <p className="mb-2">本サービスでは、以下の個人情報を収集いたします。</p>
          <ul className="list-disc space-y-1 pl-6">
            <li>氏名、フリガナ</li>
            <li>生年</li>
            <li>住所（都道府県・市区町村）</li>
            <li>電話番号</li>
            <li>LINE ID</li>
            <li>職歴情報（前職の会社名、役職、勤続年数）</li>
            <li>保有資格</li>
            <li>銀行口座情報（銀行名、支店名、口座種別、口座番号、口座名義）</li>
            <li>案件への応募履歴</li>
          </ul>
        </section>

        <section>
          <h2 className="mb-3 text-xl font-bold">2. 利用目的</h2>
          <p className="mb-2">収集した個人情報は、以下の目的で利用いたします。</p>
          <ul className="list-disc space-y-1 pl-6">
            <li>先輩としてのご登録の審査および本人確認</li>
            <li>案件とのマッチングおよび業務依頼のご連絡</li>
            <li>業務委託報酬のお支払い（Wise経由の国際送金）</li>
            <li>サービスに関するご連絡・ご案内</li>
            <li>サービスの改善および統計的分析（個人を特定しない形で）</li>
          </ul>
        </section>

        <section>
          <h2 className="mb-3 text-xl font-bold">3. 第三者提供</h2>
          <p>
            当社は、以下の場合を除き、お客様の個人情報を第三者に提供いたしません。
          </p>
          <ul className="list-disc space-y-1 pl-6">
            <li>ご本人の同意がある場合</li>
            <li>法令に基づく場合</li>
            <li>業務委託先への提供（報酬送金のためWise Technology Ltd.への口座情報の提供）</li>
            <li>案件依頼者への提供（氏名・連絡先のみ、案件マッチング成立後）</li>
          </ul>
        </section>

        <section>
          <h2 className="mb-3 text-xl font-bold">4. 個人情報の国外移転</h2>
          <p>
            本サービスの運営者は香港法人であるため、お客様の個人情報は香港に移転されます。
            香港は個人資料（私隱）條例（PDPO）により個人情報の保護が図られています。
            また、データの保管にはNotion（米国）のクラウドサービスを利用しており、
            適切なセキュリティ対策が講じられたサービスのみを利用しております。
          </p>
        </section>

        <section>
          <h2 className="mb-3 text-xl font-bold">5. 安全管理措置</h2>
          <p>
            当社は、個人情報の漏えい、滅失又は毀損の防止のため、以下の措置を講じています。
          </p>
          <ul className="list-disc space-y-1 pl-6">
            <li>SSL/TLSによる通信の暗号化</li>
            <li>アクセス権限の適切な管理</li>
            <li>データ保管先サービスのセキュリティ基準の確認</li>
          </ul>
        </section>

        <section>
          <h2 className="mb-3 text-xl font-bold">6. 個人情報の開示・訂正・削除</h2>
          <p>
            ご本人から個人情報の開示、訂正、削除のご請求があった場合は、
            ご本人であることを確認の上、合理的な期間内に対応いたします。
            ご請求は下記の問い合わせ先までご連絡ください。
          </p>
        </section>

        <section>
          <h2 className="mb-3 text-xl font-bold">7. Cookie等について</h2>
          <p>
            本サービスでは、サービスの利便性向上のためCookieを使用する場合があります。
            Cookieの使用を望まない場合は、ブラウザの設定により無効にすることが可能です。
          </p>
        </section>

        <section>
          <h2 className="mb-3 text-xl font-bold">8. ポリシーの変更</h2>
          <p>
            本ポリシーの内容は、法令の変更やサービスの変更に伴い、
            予告なく改定する場合がございます。改定後のポリシーは、
            本ページに掲載した時点から効力を生じます。
          </p>
        </section>

        <section>
          <h2 className="mb-3 text-xl font-bold">9. お問い合わせ</h2>
          <p>個人情報の取扱いに関するお問い合わせは、以下までご連絡ください。</p>
          <div className="mt-3 rounded-lg bg-[var(--color-bg-warm)] p-6">
            <p className="font-bold">Mement Hong Kong Limited</p>
            <p className="text-sm text-[var(--color-text-light)]">
              先輩.work 個人情報管理責任者
              <br />
              所在地: Central, Hong Kong SAR
              <br />
              メール: privacy@senpai.work
            </p>
          </div>
        </section>
      </div>
    </div>
  );
}
