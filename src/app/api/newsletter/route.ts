import { NextResponse } from 'next/server';
import { z } from 'zod';

const newsletterSchema = z.object({
  email: z.string().trim().email('Please enter a valid email address.').max(160),
});

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const parsed = newsletterSchema.safeParse(body);
    if (!parsed.success) {
      return NextResponse.json(
        { error: parsed.error.issues[0]?.message || 'Invalid email.' },
        { status: 400 }
      );
    }

    const webhook = process.env.NEWSLETTER_WEBHOOK_URL;
    if (webhook) {
      const upstream = await fetch(webhook, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email: parsed.data.email }),
      });
      if (!upstream.ok) {
        return NextResponse.json(
          { error: 'Unable to complete subscription right now.' },
          { status: 502 }
        );
      }
      return NextResponse.json({
        ok: true,
        mode: 'webhook',
        message: 'Thank you. Your subscription has been recorded.',
      });
    }

    return NextResponse.json({
      ok: true,
      mode: 'demo',
      message:
        'Demo mode: email validated locally. No mailing service is connected.',
    });
  } catch {
    return NextResponse.json(
      { error: 'Invalid request body.' },
      { status: 400 }
    );
  }
}
