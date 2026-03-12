import { Client } from "@notionhq/client";
import { NextResponse } from "next/server";

const notion = new Client({ auth: process.env.NOTION_API_KEY });

export async function POST(request: Request) {
  try {
    const { taskId, name, phone } = await request.json();

    if (!taskId || !name) {
      return NextResponse.json(
        { success: false, error: "Missing required fields" },
        { status: 400 }
      );
    }

    // Get current applicants
    const page = await notion.pages.retrieve({ page_id: taskId }) as any;
    const current =
      page.properties["Applicants"]?.rich_text?.[0]?.plain_text || "";

    const timestamp = new Date().toISOString().split("T")[0];
    const newEntry = `${name}${phone ? ` (${phone})` : ""} - ${timestamp}`;
    const updated = current ? `${current}\n${newEntry}` : newEntry;

    await notion.pages.update({
      page_id: taskId,
      properties: {
        Applicants: {
          rich_text: [{ text: { content: updated } }],
        },
      },
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Apply error:", error);
    return NextResponse.json(
      { success: false, error: "Application failed" },
      { status: 500 }
    );
  }
}
