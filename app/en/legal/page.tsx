export default function LegalPage() {
  return (
    <div className="mx-auto max-w-3xl px-6 py-16">
      <h1 className="mb-8 text-3xl font-bold">Legal Notice</h1>
      <p className="mb-6 text-sm text-[var(--color-text-light)]">
        Disclosure pursuant to Japan&apos;s Act on Specified Commercial Transactions (特定商取引法)
      </p>

      <div className="rounded-xl border border-[var(--color-border)] bg-white">
        <table className="w-full text-left">
          <tbody className="divide-y divide-[var(--color-border)]">
            {[
              ["Operator", "Mement Hong Kong Limited"],
              ["Representative", "Brian Choi (Byung Chul)"],
              ["Location", "Central, Hong Kong SAR"],
              [
                "Contact",
                <>
                  Email: info@senpai.work
                  <br />
                  Inquiries accepted via email
                </>,
              ],
              ["Service Name", "Senpai.work"],
              [
                "Service Description",
                "A matching platform for on-the-ground business operations in Japan. We connect overseas companies with experienced Japanese senior professionals for document handling, site inspections, negotiations, and more.",
              ],
              [
                "Compensation",
                <>
                  Varies by task tier:
                  <br />
                  T1 (Document Support): ¥5,000–¥8,000
                  <br />
                  T2 (On-Site Agent): ¥8,000–¥25,000
                  <br />
                  T3 (Negotiation): ¥25,000–¥80,000
                  <br />
                  T4 (Director): Monthly retainer (negotiable)
                  <br />
                  Amounts are indicative and vary by assignment.
                </>,
              ],
              [
                "Payment Method",
                "Via Wise (international transfer) from our Hong Kong entity to the contractor's Japanese bank account. Payment is made within 5 business days after task completion confirmation.",
              ],
              [
                "Additional Costs",
                "Transportation, accommodation, and other out-of-pocket expenses, if applicable, are communicated in advance and reimbursed separately.",
              ],
              [
                "Contract Type",
                "Independent contractor agreement (業務委託). Registered senpai operate as sole proprietors, not employees.",
              ],
              [
                "Cancellation",
                <>
                  Client cancellation: Free before work begins. Actual costs apply after work starts.
                  <br />
                  Senpai cancellation: Please notify at least 48 hours before the scheduled start.
                </>,
              ],
              [
                "Governing Law",
                "Disputes arising from the use of this Service shall be governed by the laws of Japan, with the Tokyo District Court as the court of first instance.",
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
