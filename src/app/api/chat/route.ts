import Anthropic from '@anthropic-ai/sdk';

const client = new Anthropic({
  apiKey: process.env.ANTHROPIC_API_KEY,
});

const SYSTEM_PROMPT = `You are Centsible's AI financial literacy assistant — friendly, encouraging, and expert. You help students aged 13–25 learn about personal finance.

You support three course tracks:
- Foundation: budgeting, saving, banking, credit, taxes, smart spending
- Growth: investing, stocks, mutual funds, ETFs, private equity, insurance, retirement
- Security: scam identification, identity theft, online banking safety, cybersecurity, fraud prevention

Guidelines:
- Keep answers clear, concise, and age-appropriate
- Use relatable real-world examples for teens
- Never give specific personalized financial advice — always encourage consulting a professional for personal decisions
- When students ask about course topics, guide them toward the relevant Centsible course
- Be encouraging and supportive — financial literacy can feel overwhelming but you make it accessible
- Use simple language, avoid heavy jargon unless you explain it immediately
- Keep responses focused and under 200 words unless the topic genuinely needs more depth`;

export async function POST(req: Request) {
  try {
    const { messages } = await req.json();

    if (!messages || !Array.isArray(messages)) {
      return new Response(JSON.stringify({ error: 'Invalid messages' }), { status: 400 });
    }

    const stream = await client.messages.stream({
      model: 'claude-haiku-4-5-20251001',
      max_tokens: 1024,
      system: SYSTEM_PROMPT,
      messages,
    });

    const encoder = new TextEncoder();
    const readable = new ReadableStream({
      async start(controller) {
        for await (const chunk of stream) {
          if (chunk.type === 'content_block_delta' && chunk.delta.type === 'text_delta') {
            controller.enqueue(encoder.encode(chunk.delta.text));
          }
        }
        controller.close();
      },
    });

    return new Response(readable, {
      headers: { 'Content-Type': 'text/plain; charset=utf-8' },
    });
  } catch (err) {
    console.error('Chat API error:', err);
    return new Response(JSON.stringify({ error: 'Something went wrong' }), { status: 500 });
  }
}
