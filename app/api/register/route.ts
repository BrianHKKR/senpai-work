import { Client } from "@notionhq/client";
import { NextResponse } from "next/server";

const notion = new Client({ auth: process.env.NOTION_API_KEY });
const DIRECTORS_DB = process.env.NOTION_DIRECTORS_DB!;

export async function POST(request: Request) {
  try {
    const data = await request.json();

    await notion.pages.create({
      parent: { database_id: DIRECTORS_DB },
      properties: {
        Name: { title: [{ text: { content: data.name || "" } }] },
        "Name Kana": {
          rich_text: [{ text: { content: data.nameKana || "" } }],
        },
        "Birth Year": {
          number: data.birthYear ? parseInt(data.birthYear) : null,
        },
        Prefecture: { select: { name: data.prefecture || "Other" } },
        City: { rich_text: [{ text: { content: data.city || "" } }] },
        Phone: { phone_number: data.phone || null },
        "LINE ID": {
          rich_text: [{ text: { content: data.lineId || "" } }],
        },
        "Previous Company": {
          rich_text: [{ text: { content: data.previousCompany || "" } }],
        },
        Position: {
          rich_text: [{ text: { content: data.previousPosition || "" } }],
        },
        "Years Worked": {
          rich_text: [{ text: { content: data.yearsWorked || "" } }],
        },
        Qualifications: {
          rich_text: [{ text: { content: data.qualifications || "" } }],
        },
        "Available Tiers": {
          multi_select: (data.availableTiers || []).map((t: string) => ({
            name: t,
          })),
        },
        "Available Days": {
          multi_select: (data.availableDays || []).map((d: string) => ({
            name: d,
          })),
        },
        Motivation: {
          rich_text: [{ text: { content: data.motivation || "" } }],
        },
        "Bank Name": {
          rich_text: [{ text: { content: data.bankName || "" } }],
        },
        "Branch Name": {
          rich_text: [{ text: { content: data.branchName || "" } }],
        },
        "Account Type": {
          select: { name: data.accountType || "普通" },
        },
        "Account Number": {
          rich_text: [{ text: { content: data.accountNumber || "" } }],
        },
        "Account Holder": {
          rich_text: [{ text: { content: data.accountHolder || "" } }],
        },
        Status: { select: { name: "Applied" } },
        "Trust Level": { select: { name: "New" } },
      },
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Notion API error:", error);
    return NextResponse.json(
      { success: false, error: "Registration failed" },
      { status: 500 }
    );
  }
}
