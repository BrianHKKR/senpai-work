export default function PrivacyPage() {
  return (
    <div className="mx-auto max-w-3xl px-6 py-16">
      <h1 className="mb-2 text-3xl font-bold">Privacy Policy</h1>
      <p className="mb-8 text-sm text-[var(--color-text-light)]">Last updated: March 12, 2026</p>

      <div className="prose max-w-none space-y-8 text-[var(--color-text)] leading-relaxed">
        <p>
          Mement Hong Kong Limited (&ldquo;we&rdquo;, &ldquo;us&rdquo;, &ldquo;our&rdquo;) operates Senpai.work (&ldquo;the Service&rdquo;).
          We are committed to protecting the personal information of our users in accordance with
          Japan&apos;s Act on the Protection of Personal Information (APPI) and
          Hong Kong&apos;s Personal Data (Privacy) Ordinance (PDPO).
        </p>

        <section>
          <h2 className="mb-3 text-xl font-bold">1. Information We Collect</h2>
          <ul className="list-disc space-y-1 pl-6">
            <li>Full name and name reading (katakana)</li>
            <li>Birth year</li>
            <li>Address (prefecture, city)</li>
            <li>Phone number</li>
            <li>LINE ID</li>
            <li>Career information (previous company, position, years worked)</li>
            <li>Qualifications</li>
            <li>Bank account details (bank name, branch, account type, number, holder name)</li>
            <li>Task application history</li>
          </ul>
        </section>

        <section>
          <h2 className="mb-3 text-xl font-bold">2. How We Use Your Information</h2>
          <ul className="list-disc space-y-1 pl-6">
            <li>Registration review and identity verification</li>
            <li>Task matching and communication about assignments</li>
            <li>Payment of contractor fees via Wise international transfer</li>
            <li>Service-related communications and updates</li>
            <li>Service improvement and statistical analysis (in anonymized form)</li>
          </ul>
        </section>

        <section>
          <h2 className="mb-3 text-xl font-bold">3. Third-Party Disclosure</h2>
          <p>We do not share your personal information with third parties except:</p>
          <ul className="list-disc space-y-1 pl-6">
            <li>With your consent</li>
            <li>When required by law</li>
            <li>To Wise Technology Ltd. for payment processing (bank account details only)</li>
            <li>To task clients (name and contact only, after successful task matching)</li>
          </ul>
        </section>

        <section>
          <h2 className="mb-3 text-xl font-bold">4. International Data Transfer</h2>
          <p>
            As a Hong Kong-based company, your personal information is transferred to and stored in Hong Kong,
            which is governed by the Personal Data (Privacy) Ordinance (PDPO).
            We also use Notion (US-based) for data storage, which maintains appropriate security standards.
          </p>
        </section>

        <section>
          <h2 className="mb-3 text-xl font-bold">5. Security Measures</h2>
          <ul className="list-disc space-y-1 pl-6">
            <li>SSL/TLS encryption for all communications</li>
            <li>Access control and permission management</li>
            <li>Use of cloud services with verified security standards</li>
          </ul>
        </section>

        <section>
          <h2 className="mb-3 text-xl font-bold">6. Your Rights</h2>
          <p>
            You may request access to, correction of, or deletion of your personal information
            at any time. Upon verification of your identity, we will respond within a reasonable timeframe.
            Please contact us using the information below.
          </p>
        </section>

        <section>
          <h2 className="mb-3 text-xl font-bold">7. Cookies</h2>
          <p>
            We may use cookies to improve service usability.
            You can disable cookies through your browser settings if preferred.
          </p>
        </section>

        <section>
          <h2 className="mb-3 text-xl font-bold">8. Changes to This Policy</h2>
          <p>
            We may update this policy as needed due to legal or service changes.
            Updated policies take effect upon publication on this page.
          </p>
        </section>

        <section>
          <h2 className="mb-3 text-xl font-bold">9. Contact</h2>
          <div className="mt-3 rounded-lg bg-[var(--color-bg-warm)] p-6">
            <p className="font-bold">Mement Hong Kong Limited</p>
            <p className="text-sm text-[var(--color-text-light)]">
              Senpai.work Privacy Officer
              <br />
              Location: Central, Hong Kong SAR
              <br />
              Email: privacy@senpai.work
            </p>
          </div>
        </section>
      </div>
    </div>
  );
}
