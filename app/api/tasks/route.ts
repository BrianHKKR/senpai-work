import { Client } from "@notionhq/client";
import { NextResponse } from "next/server";

const notion = new Client({ auth: process.env.NOTION_API_KEY });
const TASKS_DB = process.env.NOTION_TASKS_DB!;

export async function GET() {
  try {
    const response = await notion.databases.query({
      database_id: TASKS_DB,
      sorts: [{ property: "Created", direction: "descending" }],
    });

    const tasks = response.results.map((page: any) => {
      const props = page.properties;
      const tier = props["Tier"]?.select?.name || "";
      const tierShort = tier.split(":")[0] || tier;
      const status = props["Status"]?.select?.name || "Open";
      const reward = props["Reward"]?.number;

      return {
        id: page.id,
        tier: tierShort,
        title: props["Task Name"]?.title?.[0]?.plain_text || "",
        location: props["Prefecture"]?.select?.name || "",
        date: props["Deadline"]?.date?.start || "",
        reward: reward ? `¥${reward.toLocaleString()}` : "",
        description: props["Details"]?.rich_text?.[0]?.plain_text || "",
        status: status.toLowerCase().replace(" ", "_") as string,
        assignee: props["Assignee"]?.rich_text?.[0]?.plain_text || "",
      };
    });

    return NextResponse.json(tasks);
  } catch (error) {
    console.error("Notion API error:", error);
    return NextResponse.json([], { status: 500 });
  }
}
