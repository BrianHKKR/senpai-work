import { Client } from "@notionhq/client";
import { NextResponse } from "next/server";

const notion = new Client({ auth: process.env.NOTION_API_KEY });
const DIRECTORS_DB = process.env.NOTION_DIRECTORS_DB!;

export async function POST(request: Request) {
  try {
    const data = await request.json();

    // 都道府県マッピング（Notion selectに合わせる）
    const prefectureMap: Record<string, string> = {
      東京都: "東京都",
      愛知県: "愛知県",
      大阪府: "大阪府",
      神奈川県: "神奈川県",
      千葉県: "千葉県",
      埼玉県: "埼玉県",
      北海道: "北海道",
      福岡県: "福岡県",
      京都府: "京都府",
      兵庫県: "兵庫県",
      静岡県: "静岡県",
      広島県: "広島県",
    };
    const prefecture = prefectureMap[data.prefecture] || "その他";

    // ティアマッピング
    const tierMap: Record<string, string> = {
      T1: "T1:書類",
      T2: "T2:現場",
      T3: "T3:交渉",
      T4: "T4:ディレクター",
    };

    // 曜日マッピング
    const dayMap: Record<string, string> = {
      月曜: "月",
      火曜: "火",
      水曜: "水",
      木曜: "木",
      金曜: "金",
      土曜: "土",
      日曜: "日",
    };

    await notion.pages.create({
      parent: { database_id: DIRECTORS_DB },
      properties: {
        名前: { title: [{ text: { content: data.name || "" } }] },
        フリガナ: {
          rich_text: [{ text: { content: data.nameKana || "" } }],
        },
        生年: { number: data.birthYear ? parseInt(data.birthYear) : null },
        都道府県: { select: { name: prefecture } },
        市区町村: {
          rich_text: [{ text: { content: data.city || "" } }],
        },
        電話番号: { phone_number: data.phone || null },
        "LINE ID": {
          rich_text: [{ text: { content: data.lineId || "" } }],
        },
        前職: {
          rich_text: [{ text: { content: data.previousCompany || "" } }],
        },
        役職: {
          rich_text: [{ text: { content: data.previousPosition || "" } }],
        },
        勤続年数: {
          rich_text: [{ text: { content: data.yearsWorked || "" } }],
        },
        保有資格: {
          rich_text: [{ text: { content: data.qualifications || "" } }],
        },
        希望業務: {
          multi_select: (data.availableTiers || [])
            .map((t: string) => tierMap[t])
            .filter(Boolean)
            .map((name: string) => ({ name })),
        },
        対応曜日: {
          multi_select: (data.availableDays || [])
            .map((d: string) => dayMap[d])
            .filter(Boolean)
            .map((name: string) => ({ name })),
        },
        動機: {
          rich_text: [{ text: { content: data.motivation || "" } }],
        },
        銀行名: {
          rich_text: [{ text: { content: data.bankName || "" } }],
        },
        支店名: {
          rich_text: [{ text: { content: data.branchName || "" } }],
        },
        口座種別: {
          select: { name: data.accountType || "普通" },
        },
        口座番号: {
          rich_text: [{ text: { content: data.accountNumber || "" } }],
        },
        口座名義: {
          rich_text: [{ text: { content: data.accountHolder || "" } }],
        },
        ステータス: { select: { name: "申請中" } },
        信頼等級: { select: { name: "新規" } },
      },
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Notion API error:", error);
    return NextResponse.json(
      { success: false, error: "登録に失敗しました" },
      { status: 500 }
    );
  }
}
