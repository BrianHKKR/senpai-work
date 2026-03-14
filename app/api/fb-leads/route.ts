import { Client } from "@notionhq/client";
import { NextRequest, NextResponse } from "next/server";

const notion = new Client({ auth: process.env.NOTION_API_KEY });
const DIRECTORS_DB = process.env.NOTION_DIRECTORS_DB!;
const FB_VERIFY_TOKEN = process.env.FB_WEBHOOK_VERIFY_TOKEN || "senpai_fb_leads_2026";
const FB_PAGE_ACCESS_TOKEN = process.env.FB_PAGE_ACCESS_TOKEN!;

// GET: Facebook webhook verification
export async function GET(request: NextRequest) {
  const searchParams = request.nextUrl.searchParams;
  const mode = searchParams.get("hub.mode");
  const token = searchParams.get("hub.verify_token");
  const challenge = searchParams.get("hub.challenge");

  if (mode === "subscribe" && token === FB_VERIFY_TOKEN) {
    console.log("[FB Webhook] Verification successful");
    return new NextResponse(challenge, { status: 200 });
  }

  return NextResponse.json({ error: "Forbidden" }, { status: 403 });
}

// POST: Receive lead events from Facebook
export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    console.log("[FB Webhook] Received:", JSON.stringify(body));

    if (body.object !== "page") {
      return NextResponse.json({ error: "Not a page event" }, { status: 400 });
    }

    for (const entry of body.entry || []) {
      for (const change of entry.changes || []) {
        if (change.field === "leadgen") {
          const leadgenId = change.value.leadgen_id;
          console.log("[FB Webhook] New lead:", leadgenId);
          await processLead(leadgenId);
        }
      }
    }

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("[FB Webhook] Error:", error);
    return NextResponse.json({ error: "Internal error" }, { status: 500 });
  }
}

async function processLead(leadgenId: string) {
  // Fetch lead data from Facebook Graph API
  const url = `https://graph.facebook.com/v21.0/${leadgenId}?access_token=${FB_PAGE_ACCESS_TOKEN}`;
  const res = await fetch(url);

  if (!res.ok) {
    const errText = await res.text();
    console.error("[FB Lead] Failed to fetch lead:", errText);
    return;
  }

  const lead = await res.json();
  console.log("[FB Lead] Data:", JSON.stringify(lead));

  // Parse field_data array into a map
  const fields: Record<string, string> = {};
  for (const field of lead.field_data || []) {
    fields[field.name] = field.values?.[0] || "";
  }

  const name = fields.full_name || fields.name || "";
  const email = fields.email || "";
  const phone = normalizePhone(fields.phone_number || fields.phone || "");

  console.log("[FB Lead] Parsed:", { name, email, phone });

  // Create entry in Notion Directors DB
  await notion.pages.create({
    parent: { database_id: DIRECTORS_DB },
    properties: {
      Name: { title: [{ text: { content: name } }] },
      Phone: { phone_number: phone || null },
      Motivation: {
        rich_text: [
          {
            text: {
              content: `[FB Lead] Email: ${email} | Lead ID: ${lead.id || leadgenId}`,
            },
          },
        ],
      },
      Status: { select: { name: "Applied" } },
      "Trust Level": { select: { name: "New" } },
    },
  });

  console.log("[FB Lead] Added to Notion:", name);
}

function normalizePhone(raw: string): string {
  let phone = raw.replace(/[^0-9+]/g, "");
  if (!phone) return "";

  // Japanese number normalization
  if (phone.startsWith("0") && phone.length >= 10) {
    phone = "+81" + phone.slice(1);
  } else if (phone.startsWith("81") && !phone.startsWith("+")) {
    phone = "+" + phone;
  }

  return phone;
}
