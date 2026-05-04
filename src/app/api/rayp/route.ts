import { NextRequest, NextResponse } from "next/server";
import { z } from "zod";

const requestSchema = z.object({
  message: z.string().max(500),
  history: z.array(
    z.object({
      role: z.enum(["user", "assistant"]),
      content: z.string(),
    })
  ),
});

const N8N_WEBHOOK_URL = process.env.N8N_WEBHOOK_URL || "";

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const parsed = requestSchema.safeParse(body);

    if (!parsed.success) {
      return NextResponse.json(
        { error: "Invalid request", details: parsed.error.flatten() },
        { status: 400 }
      );
    }

    const { message, history } = parsed.data;

    if (!N8N_WEBHOOK_URL) {
      console.log("[Rayp] N8N_WEBHOOK_URL not configured");
      return NextResponse.json({
        response: "Rayp is not fully configured yet. Please set up the n8n webhook!",
      });
    }

    console.log("[Rayp] Calling webhook:", N8N_WEBHOOK_URL);
    console.log("[Rayp] History length:", history.length);

    // Format history for n8n/AI context
    // Convert to OpenAI-style messages format
    const formattedHistory = history.map(msg => ({
      role: msg.role,
      content: msg.content,
    }));

    // Call n8n webhook with full conversation context
    const response = await fetch(N8N_WEBHOOK_URL, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        message,
        history: formattedHistory,
        timestamp: new Date().toISOString(),
      }),
    });

    console.log("[Rayp] Webhook response status:", response.status);

    if (!response.ok) {
      const errorText = await response.text();
      console.error("[Rayp] Webhook error:", response.status, errorText);
      throw new Error(`n8n webhook failed: ${response.status}`);
    }

    const data = await response.json();
    console.log("[Rayp] Webhook response data:", JSON.stringify(data, null, 2));
    
    // Try different possible response formats
    const aiResponse = data.response || data.output || data.message || data.text || data.content;
    
    if (!aiResponse) {
      console.error("[Rayp] No response field found in:", data);
      return NextResponse.json({
        response: "I received a response but couldn't understand it. Check the n8n workflow output format.",
      });
    }
    
    return NextResponse.json({
      response: aiResponse,
    });
  } catch (error) {
    console.error("[Rayp API Error]:", error);
    return NextResponse.json(
      { error: "Failed to get response from AI", details: String(error) },
      { status: 500 }
    );
  }
}
