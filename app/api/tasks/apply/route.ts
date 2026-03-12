import { Client } from "@notionhq/client";
import { NextResponse } from "next/server";

const notion = new Client({ auth: process.env.NOTION_API_KEY });
const DIRECTORS_DB = process.env.NOTION_DIRECTORS_DB!;

export async function POST(request: Request) {
  try {
    const { taskId, name, phone } = await request.json();

    if (!taskId || !phone) {
      return NextResponse.json(
        { success: false, error: "missing_fields" },
        { status: 400 }
      );
    }

    // Check if phone is registered in Directors DB
    const search = await notion.databases.query({
      database_id: DIRECTORS_DB,
      filter: {
        property: "Phone",
        phone_number: { equals: phone },
      },
    });

    if (search.results.length === 0) {
      return NextResponse.json(
        { success: false, error: "not_registered" },
        { status: 403 }
      );
    }

    // Get registered name from Directors DB
    const director = search.results[0] as any;
    const registeredName =
      director.properties["Name"]?.title?.[0]?.plain_text || name;

    // Get current applicants on the task
    const page = await notion.pages.retrieve({ page_id: taskId }) as any;
    const current =
      page.properties["Applicants"]?.rich_text?.[0]?.plain_text || "";

    const timestamp = new Date().toISOString().split("T")[0];
    const newEntry = `${registeredName} (${phone}) - ${timestamp}`;
    const updated = current ? `${current}\n${newEntry}` : newEntry;

    await notion.pages.update({
      page_id: taskId,
      properties: {
        Applicants: {
          rich_text: [{ text: { content: updated } }],
        },
      },
    });

    return NextResponse.json({ success: true, name: registeredName });
  } catch (error) {
    console.error("Apply error:", error);
    return NextResponse.json(
      { success: false, error: "server_error" },
      { status: 500 }
    );
  }
}
