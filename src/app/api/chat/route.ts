import { NextResponse } from "next/server";
import Groq from "groq-sdk";

const groq = new Groq({
    apiKey: process.env.GROQ_API_KEY,
});

const SYSTEM_PROMPT = `
You are the AI assistant for "Dukaan Saathi", a WhatsApp-based AI shop management tool using voice for Indian shopkeepers.
Your functionality is to help users maintain inventory, sales, and khata (ledger) directly on WhatsApp.

RULES:
1. You must ONLY answer questions related to Dukaan Saathi features, benefits, and how it works.
2. If the user asks about ANYTHING else (like generic math, coding, life advice, or other products), politely refuse and say you can only discuss Dukaan Saathi.
3. CRITICAL: If the user asks about PRICING, DISCOUNTS, or COST, you must NOT give a number. Instead, you MUST say exactly:
   "Please contact team@dukaansaathi.com or call +918217358826, +919849887985 for the best rates."
4. Be helpful, professional, and classy. Use English or Hinglish if the user prefers.
5. Keep answers concise.
6. Do NOT provide English translations in brackets. If replying in Hinglish, just use Hinglish.
`;

export async function POST(req: Request) {
    try {
        const body = await req.json();
        const { messages } = body;

        if (!messages || !Array.isArray(messages)) {
            return NextResponse.json({ error: "Invalid messages format" }, { status: 400 });
        }

        const completion = await groq.chat.completions.create({
            messages: [
                { role: "system", content: SYSTEM_PROMPT },
                ...messages
            ],
            model: "llama-3.3-70b-versatile",
            temperature: 0.7,
            max_tokens: 1024,
        });

        const reply = completion.choices[0]?.message?.content || "Sorry, I am unable to connect to the server right now.";

        return NextResponse.json({ reply });
    } catch (error) {
        console.error("Groq API Error:", error);
        return NextResponse.json({ error: "Internal Server Error" }, { status: 500 });
    }
}
