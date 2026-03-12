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
  { value: "T1", label: "T1: 書類サポート（¥5,000〜¥8,000）" },
  { value: "T2", label: "T2: 現場代行（¥8,000〜¥25,000）" },
  { value: "T3", label: "T3: 交渉・面談（¥25,000〜¥80,000）" },
  { value: "T4", label: "T4: ディレクター（月額制）" },
];

const dayOptions = ["月曜", "火曜", "水曜", "木曜", "金曜", "土曜", "日曜"];

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
        setError("登録に失敗しました。もう一度お試しください。");
      }
    } catch {
      setError("通信エラーが発生しました。もう一度お試しください。");
    } finally {
      setIsSubmitting(false);
    }
  };

  if (submitted) {
    return (
      <div className="mx-auto max-w-2xl px-6 py-24 text-center">
        <div className="mb-6 text-6xl">✓</div>
        <h1 className="mb-4 text-3xl font-bold">ご登録ありがとうございます</h1>
        <p className="mb-2 text-lg text-[var(--color-text-light)]">
          内容を確認の上、3営業日以内にLINEまたはお電話にてご連絡いたします。
        </p>
        <p className="text-[var(--color-text-light)]">
          ビデオ面談（10〜15分）のご案内をお送りします。
        </p>
      </div>
    );
  }

  return (
    <div className="mx-auto max-w-2xl px-6 py-16">
      <h1 className="mb-2 text-3xl font-bold">先輩として登録</h1>
      <p className="mb-8 text-[var(--color-text-light)]">
        あなたの経験とスキルを、必要としている方に届けます。
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
          <h2 className="text-xl font-bold">基本情報</h2>

          <div className="grid gap-4 sm:grid-cols-2">
            <div>
              <label className="mb-1 block text-sm font-bold">
                お名前 <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                value={form.name}
                onChange={(e) => updateField("name", e.target.value)}
                placeholder="山田 太郎"
                className="w-full rounded-lg border border-[var(--color-border)] px-4 py-3 text-lg"
              />
            </div>
            <div>
              <label className="mb-1 block text-sm font-bold">
                フリガナ <span className="text-red-500">*</span>
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
              生年 <span className="text-red-500">*</span>
            </label>
            <select
              value={form.birthYear}
              onChange={(e) => updateField("birthYear", e.target.value)}
              className="w-full rounded-lg border border-[var(--color-border)] px-4 py-3 text-lg"
            >
              <option value="">選択してください</option>
              {Array.from({ length: 40 }, (_, i) => 1950 + i).map((year) => (
                <option key={year} value={year}>
                  {year}年
                </option>
              ))}
            </select>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            <div>
              <label className="mb-1 block text-sm font-bold">
                都道府県 <span className="text-red-500">*</span>
              </label>
              <select
                value={form.prefecture}
                onChange={(e) => updateField("prefecture", e.target.value)}
                className="w-full rounded-lg border border-[var(--color-border)] px-4 py-3 text-lg"
              >
                <option value="">選択してください</option>
                {prefectures.map((p) => (
                  <option key={p} value={p}>
                    {p}
                  </option>
                ))}
              </select>
            </div>
            <div>
              <label className="mb-1 block text-sm font-bold">
                市区町村 <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                value={form.city}
                onChange={(e) => updateField("city", e.target.value)}
                placeholder="名古屋市中区"
                className="w-full rounded-lg border border-[var(--color-border)] px-4 py-3 text-lg"
              />
            </div>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            <div>
              <label className="mb-1 block text-sm font-bold">
                電話番号 <span className="text-red-500">*</span>
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
            次へ
          </button>
        </div>
      )}

      {/* Step 2: Career & Skills */}
      {step === 2 && (
        <div className="space-y-6">
          <h2 className="text-xl font-bold">経歴・スキル</h2>

          <div>
            <label className="mb-1 block text-sm font-bold">
              代表的なご勤務先
            </label>
            <input
              type="text"
              value={form.previousCompany}
              onChange={(e) => updateField("previousCompany", e.target.value)}
              placeholder="株式会社○○"
              className="w-full rounded-lg border border-[var(--color-border)] px-4 py-3 text-lg"
            />
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            <div>
              <label className="mb-1 block text-sm font-bold">役職</label>
              <input
                type="text"
                value={form.previousPosition}
                onChange={(e) =>
                  updateField("previousPosition", e.target.value)
                }
                placeholder="部長、課長など"
                className="w-full rounded-lg border border-[var(--color-border)] px-4 py-3 text-lg"
              />
            </div>
            <div>
              <label className="mb-1 block text-sm font-bold">勤続年数</label>
              <input
                type="text"
                value={form.yearsWorked}
                onChange={(e) => updateField("yearsWorked", e.target.value)}
                placeholder="25年"
                className="w-full rounded-lg border border-[var(--color-border)] px-4 py-3 text-lg"
              />
            </div>
          </div>

          <div>
            <label className="mb-1 block text-sm font-bold">
              保有資格（あれば）
            </label>
            <input
              type="text"
              value={form.qualifications}
              onChange={(e) => updateField("qualifications", e.target.value)}
              placeholder="宅建士、行政書士、簿記など"
              className="w-full rounded-lg border border-[var(--color-border)] px-4 py-3 text-lg"
            />
          </div>

          <div>
            <label className="mb-2 block text-sm font-bold">
              希望する業務
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
              対応可能な曜日
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
              応募の動機（自由記述）
            </label>
            <textarea
              value={form.motivation}
              onChange={(e) => updateField("motivation", e.target.value)}
              placeholder="ご登録いただく理由や、活かしたい経験などをお聞かせください"
              rows={4}
              className="w-full rounded-lg border border-[var(--color-border)] px-4 py-3 text-lg"
            />
          </div>

          <div className="flex gap-4">
            <button
              onClick={() => setStep(1)}
              className="flex-1 rounded-lg border border-[var(--color-border)] py-4 text-lg font-bold transition hover:bg-gray-50"
            >
              戻る
            </button>
            <button
              onClick={() => setStep(3)}
              className="flex-1 rounded-lg bg-[var(--color-primary)] py-4 text-lg font-bold text-white transition hover:bg-[var(--color-primary-light)]"
            >
              次へ
            </button>
          </div>
        </div>
      )}

      {/* Step 3: Bank info */}
      {step === 3 && (
        <div className="space-y-6">
          <h2 className="text-xl font-bold">お振込先情報</h2>
          <p className="text-sm text-[var(--color-text-light)]">
            報酬はWise（国際送金サービス）を通じて、ご指定の日本の銀行口座にお振込みいたします。
          </p>

          <div className="grid gap-4 sm:grid-cols-2">
            <div>
              <label className="mb-1 block text-sm font-bold">
                銀行名 <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                value={form.bankName}
                onChange={(e) => updateField("bankName", e.target.value)}
                placeholder="三菱UFJ銀行"
                className="w-full rounded-lg border border-[var(--color-border)] px-4 py-3 text-lg"
              />
            </div>
            <div>
              <label className="mb-1 block text-sm font-bold">
                支店名 <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                value={form.branchName}
                onChange={(e) => updateField("branchName", e.target.value)}
                placeholder="名古屋支店"
                className="w-full rounded-lg border border-[var(--color-border)] px-4 py-3 text-lg"
              />
            </div>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            <div>
              <label className="mb-1 block text-sm font-bold">口座種別</label>
              <select
                value={form.accountType}
                onChange={(e) => updateField("accountType", e.target.value)}
                className="w-full rounded-lg border border-[var(--color-border)] px-4 py-3 text-lg"
              >
                <option value="普通">普通</option>
                <option value="当座">当座</option>
              </select>
            </div>
            <div>
              <label className="mb-1 block text-sm font-bold">
                口座番号 <span className="text-red-500">*</span>
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
              口座名義（カナ） <span className="text-red-500">*</span>
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
            <h3 className="mb-2 font-bold">本人確認について</h3>
            <p className="text-sm text-[var(--color-text-light)]">
              ご登録後、運転免許証またはマイナンバーカードによる本人確認と、
              短時間のビデオ面談（LINE/Zoom、10〜15分）をお願いしております。
              詳細はご連絡時にご案内いたします。
            </p>
          </div>

          <div className="flex gap-4">
            <button
              onClick={() => setStep(2)}
              className="flex-1 rounded-lg border border-[var(--color-border)] py-4 text-lg font-bold transition hover:bg-gray-50"
            >
              戻る
            </button>
            {error && (
              <p className="text-red-500 text-sm">{error}</p>
            )}
            <button
              onClick={handleSubmit}
              disabled={isSubmitting}
              className="flex-1 rounded-lg bg-[var(--color-accent)] py-4 text-lg font-bold text-white transition hover:bg-[var(--color-accent-light)] disabled:opacity-50"
            >
              {isSubmitting ? "送信中..." : "登録を申請する"}
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
