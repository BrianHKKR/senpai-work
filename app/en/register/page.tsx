"use client";

import { useState } from "react";
import { trackRegistration } from "@/lib/tracking";

interface FormData {
  name: string;
  nameKana: string;
  birthYear: string;
  prefecture: string;
  city: string;
  phone: string;
  lineId: string;
  previousCompany: string;
  previousPosition: string;
  yearsWorked: string;
  qualifications: string;
  availableTiers: string[];
  availableDays: string[];
  motivation: string;
  bankName: string;
  branchName: string;
  accountType: string;
  accountNumber: string;
  accountHolder: string;
}

const prefectures = [
  "北海道", "青森県", "岩手県", "宮城県", "秋田県", "山形県", "福島県",
  "茨城県", "栃木県", "群馬県", "埼玉県", "千葉県", "東京都", "神奈川県",
  "新潟県", "富山県", "石川県", "福井県", "山梨県", "長野県", "岐阜県",
  "静岡県", "愛知県", "三重県", "滋賀県", "京都府", "大阪府", "兵庫県",
  "奈良県", "和歌山県", "鳥取県", "島根県", "岡山県", "広島県", "山口県",
  "徳島県", "香川県", "愛媛県", "高知県", "福岡県", "佐賀県", "長崎県",
  "熊本県", "大分県", "宮崎県", "鹿児島県", "沖縄県",
];

const tierOptions = [
  { value: "T1", label: "T1: Document Support (¥5,000~¥8,000)" },
  { value: "T2", label: "T2: On-Site Agent (¥8,000~¥25,000)" },
  { value: "T3", label: "T3: Negotiation (¥25,000~¥80,000)" },
  { value: "T4", label: "T4: Director (Monthly retainer)" },
];

const dayOptions = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];

export default function RegisterPage() {
  const [step, setStep] = useState(1);
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState<FormData>({
    name: "",
    nameKana: "",
    birthYear: "",
    prefecture: "",
    city: "",
    phone: "",
    lineId: "",
    previousCompany: "",
    previousPosition: "",
    yearsWorked: "",
    qualifications: "",
    availableTiers: [],
    availableDays: [],
    motivation: "",
    bankName: "",
    branchName: "",
    accountType: "普通",
    accountNumber: "",
    accountHolder: "",
  });

  const updateField = (field: keyof FormData, value: string) => {
    setForm((prev) => ({ ...prev, [field]: value }));
  };

  const toggleArrayField = (field: "availableTiers" | "availableDays", value: string) => {
    setForm((prev) => ({
      ...prev,
      [field]: prev[field].includes(value)
        ? prev[field].filter((v) => v !== value)
        : [...prev[field], value],
    }));
  };

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async () => {
    setIsSubmitting(true);
    setError("");
    try {
      const res = await fetch("/api/register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      if (res.ok) {
        trackRegistration(form.prefecture);
        setSubmitted(true);
      } else {
        setError("Registration failed. Please try again.");
      }
    } catch {
      setError("A network error occurred. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  if (submitted) {
    return (
      <div className="mx-auto max-w-2xl px-6 py-24 text-center">
        <div className="mb-6 text-6xl">✓</div>
        <h1 className="mb-4 text-3xl font-bold">Thank you for registering</h1>
        <p className="mb-2 text-lg text-[var(--color-text-light)]">
          We will review your information and contact you within 3 business days via LINE or phone.
        </p>
        <p className="text-[var(--color-text-light)]">
          You will receive an invitation for a short video interview (10-15 min).
        </p>
      </div>
    );
  }

  return (
    <div className="mx-auto max-w-2xl px-6 py-16">
      <h1 className="mb-2 text-3xl font-bold">Register as Senpai</h1>
      <p className="mb-8 text-[var(--color-text-light)]">
        Put your experience and skills to work for those who need them.
      </p>

      {/* Progress bar */}
      <div className="mb-10 flex gap-2">
        {[1, 2, 3].map((s) => (
          <div
            key={s}
            className={`h-2 flex-1 rounded-full transition ${
              s <= step ? "bg-[var(--color-primary)]" : "bg-[var(--color-border)]"
            }`}
          />
        ))}
      </div>

      {/* Step 1: Basic info */}
      {step === 1 && (
        <div className="space-y-6">
          <h2 className="text-xl font-bold">Basic Information</h2>

          <div className="grid gap-4 sm:grid-cols-2">
            <div>
              <label className="mb-1 block text-sm font-bold">
                Full Name <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                value={form.name}
                onChange={(e) => updateField("name", e.target.value)}
                placeholder="Taro Yamada"
                className="w-full rounded-lg border border-[var(--color-border)] px-4 py-3 text-lg"
              />
            </div>
            <div>
              <label className="mb-1 block text-sm font-bold">
                Name (Katakana) <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                value={form.nameKana}
                onChange={(e) => updateField("nameKana", e.target.value)}
                placeholder="ヤマダ タロウ"
                className="w-full rounded-lg border border-[var(--color-border)] px-4 py-3 text-lg"
              />
            </div>
          </div>

          <div>
            <label className="mb-1 block text-sm font-bold">
              Birth Year <span className="text-red-500">*</span>
            </label>
            <select
              value={form.birthYear}
              onChange={(e) => updateField("birthYear", e.target.value)}
              className="w-full rounded-lg border border-[var(--color-border)] px-4 py-3 text-lg"
            >
              <option value="">Please select</option>
              {Array.from({ length: 40 }, (_, i) => 1950 + i).map((year) => (
                <option key={year} value={year}>
                  {year}
                </option>
              ))}
            </select>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            <div>
              <label className="mb-1 block text-sm font-bold">
                Prefecture <span className="text-red-500">*</span>
              </label>
              <select
                value={form.prefecture}
                onChange={(e) => updateField("prefecture", e.target.value)}
                className="w-full rounded-lg border border-[var(--color-border)] px-4 py-3 text-lg"
              >
                <option value="">Please select</option>
                {prefectures.map((p) => (
                  <option key={p} value={p}>
                    {p}
                  </option>
                ))}
              </select>
            </div>
            <div>
              <label className="mb-1 block text-sm font-bold">
                City <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                value={form.city}
                onChange={(e) => updateField("city", e.target.value)}
                placeholder="Nagoya-shi, Naka-ku"
                className="w-full rounded-lg border border-[var(--color-border)] px-4 py-3 text-lg"
              />
            </div>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            <div>
              <label className="mb-1 block text-sm font-bold">
                Phone Number <span className="text-red-500">*</span>
              </label>
              <input
                type="tel"
                value={form.phone}
                onChange={(e) => updateField("phone", e.target.value)}
                placeholder="090-1234-5678"
                className="w-full rounded-lg border border-[var(--color-border)] px-4 py-3 text-lg"
              />
            </div>
            <div>
              <label className="mb-1 block text-sm font-bold">LINE ID</label>
              <input
                type="text"
                value={form.lineId}
                onChange={(e) => updateField("lineId", e.target.value)}
                placeholder="line_id"
                className="w-full rounded-lg border border-[var(--color-border)] px-4 py-3 text-lg"
              />
            </div>
          </div>

          <button
            onClick={() => setStep(2)}
            className="w-full rounded-lg bg-[var(--color-primary)] py-4 text-lg font-bold text-white transition hover:bg-[var(--color-primary-light)]"
          >
            Next
          </button>
        </div>
      )}

      {/* Step 2: Career & Skills */}
      {step === 2 && (
        <div className="space-y-6">
          <h2 className="text-xl font-bold">Career & Skills</h2>

          <div>
            <label className="mb-1 block text-sm font-bold">
              Notable Employer
            </label>
            <input
              type="text"
              value={form.previousCompany}
              onChange={(e) => updateField("previousCompany", e.target.value)}
              placeholder="Company name"
              className="w-full rounded-lg border border-[var(--color-border)] px-4 py-3 text-lg"
            />
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            <div>
              <label className="mb-1 block text-sm font-bold">Position</label>
              <input
                type="text"
                value={form.previousPosition}
                onChange={(e) =>
                  updateField("previousPosition", e.target.value)
                }
                placeholder="Director, Manager, etc."
                className="w-full rounded-lg border border-[var(--color-border)] px-4 py-3 text-lg"
              />
            </div>
            <div>
              <label className="mb-1 block text-sm font-bold">Years Worked</label>
              <input
                type="text"
                value={form.yearsWorked}
                onChange={(e) => updateField("yearsWorked", e.target.value)}
                placeholder="25 years"
                className="w-full rounded-lg border border-[var(--color-border)] px-4 py-3 text-lg"
              />
            </div>
          </div>

          <div>
            <label className="mb-1 block text-sm font-bold">
              Qualifications (if any)
            </label>
            <input
              type="text"
              value={form.qualifications}
              onChange={(e) => updateField("qualifications", e.target.value)}
              placeholder="Real estate license, bookkeeping, etc."
              className="w-full rounded-lg border border-[var(--color-border)] px-4 py-3 text-lg"
            />
          </div>

          <div>
            <label className="mb-2 block text-sm font-bold">
              Preferred Tasks
            </label>
            <div className="space-y-3">
              {tierOptions.map((tier) => (
                <label
                  key={tier.value}
                  className="flex cursor-pointer items-center gap-3 rounded-lg border border-[var(--color-border)] p-4 transition hover:border-[var(--color-primary)]"
                >
                  <input
                    type="checkbox"
                    checked={form.availableTiers.includes(tier.value)}
                    onChange={() => toggleArrayField("availableTiers", tier.value)}
                    className="h-5 w-5"
                  />
                  <span className="text-lg">{tier.label}</span>
                </label>
              ))}
            </div>
          </div>

          <div>
            <label className="mb-2 block text-sm font-bold">
              Available Days
            </label>
            <div className="flex flex-wrap gap-2">
              {dayOptions.map((day) => (
                <button
                  key={day}
                  type="button"
                  onClick={() => toggleArrayField("availableDays", day)}
                  className={`rounded-lg border px-4 py-2 text-lg transition ${
                    form.availableDays.includes(day)
                      ? "border-[var(--color-primary)] bg-[var(--color-primary)] text-white"
                      : "border-[var(--color-border)] hover:border-[var(--color-primary)]"
                  }`}
                >
                  {day}
                </button>
              ))}
            </div>
          </div>

          <div>
            <label className="mb-1 block text-sm font-bold">
              Motivation (optional)
            </label>
            <textarea
              value={form.motivation}
              onChange={(e) => updateField("motivation", e.target.value)}
              placeholder="Tell us why you'd like to register and what experience you'd like to put to use"
              rows={4}
              className="w-full rounded-lg border border-[var(--color-border)] px-4 py-3 text-lg"
            />
          </div>

          <div className="flex gap-4">
            <button
              onClick={() => setStep(1)}
              className="flex-1 rounded-lg border border-[var(--color-border)] py-4 text-lg font-bold transition hover:bg-gray-50"
            >
              Back
            </button>
            <button
              onClick={() => setStep(3)}
              className="flex-1 rounded-lg bg-[var(--color-primary)] py-4 text-lg font-bold text-white transition hover:bg-[var(--color-primary-light)]"
            >
              Next
            </button>
          </div>
        </div>
      )}

      {/* Step 3: Bank info */}
      {step === 3 && (
        <div className="space-y-6">
          <h2 className="text-xl font-bold">Bank Account Information</h2>
          <p className="text-sm text-[var(--color-text-light)]">
            Payment is sent via Wise (international transfer service) to your designated Japanese bank account.
          </p>

          <div className="grid gap-4 sm:grid-cols-2">
            <div>
              <label className="mb-1 block text-sm font-bold">
                Bank Name <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                value={form.bankName}
                onChange={(e) => updateField("bankName", e.target.value)}
                placeholder="MUFG Bank"
                className="w-full rounded-lg border border-[var(--color-border)] px-4 py-3 text-lg"
              />
            </div>
            <div>
              <label className="mb-1 block text-sm font-bold">
                Branch Name <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                value={form.branchName}
                onChange={(e) => updateField("branchName", e.target.value)}
                placeholder="Nagoya Branch"
                className="w-full rounded-lg border border-[var(--color-border)] px-4 py-3 text-lg"
              />
            </div>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            <div>
              <label className="mb-1 block text-sm font-bold">Account Type</label>
              <select
                value={form.accountType}
                onChange={(e) => updateField("accountType", e.target.value)}
                className="w-full rounded-lg border border-[var(--color-border)] px-4 py-3 text-lg"
              >
                <option value="普通">Regular (普通)</option>
                <option value="当座">Current (当座)</option>
              </select>
            </div>
            <div>
              <label className="mb-1 block text-sm font-bold">
                Account Number <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                value={form.accountNumber}
                onChange={(e) => updateField("accountNumber", e.target.value)}
                placeholder="1234567"
                className="w-full rounded-lg border border-[var(--color-border)] px-4 py-3 text-lg"
              />
            </div>
          </div>

          <div>
            <label className="mb-1 block text-sm font-bold">
              Account Holder (Katakana) <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              value={form.accountHolder}
              onChange={(e) => updateField("accountHolder", e.target.value)}
              placeholder="ヤマダ タロウ"
              className="w-full rounded-lg border border-[var(--color-border)] px-4 py-3 text-lg"
            />
          </div>

          <div className="rounded-lg bg-[var(--color-bg-warm)] p-6">
            <h3 className="mb-2 font-bold">About Identity Verification</h3>
            <p className="text-sm text-[var(--color-text-light)]">
              After registration, we will ask for identity verification via driver&apos;s license or My Number card,
              and a short video interview (LINE/Zoom, 10-15 min).
              Details will be provided when we contact you.
            </p>
          </div>

          <div className="flex gap-4">
            <button
              onClick={() => setStep(2)}
              className="flex-1 rounded-lg border border-[var(--color-border)] py-4 text-lg font-bold transition hover:bg-gray-50"
            >
              Back
            </button>
            {error && (
              <p className="text-red-500 text-sm">{error}</p>
            )}
            <button
              onClick={handleSubmit}
              disabled={isSubmitting}
              className="flex-1 rounded-lg bg-[var(--color-accent)] py-4 text-lg font-bold text-white transition hover:bg-[var(--color-accent-light)] disabled:opacity-50"
            >
              {isSubmitting ? "Submitting..." : "Submit Registration"}
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
