import { NextResponse } from 'next/server';
import { z } from 'zod';

const contactSchema = z.object({
  firstName: z.string().trim().min(1, 'First name is required').max(80),
  lastName: z.string().trim().min(1, 'Last name is required').max(80),
  email: z.string().trim().email('Valid email address is required').max(160),
  phone: z.string().trim().max(40).optional().default(''),
  message: z.string().trim().min(5, 'Please enter a short message').max(2000),
  website: z.string().optional().default(''),
});

const rateMap = new Map<string, { count: number; resetAt: number }>();

export async function POST(req: Request) {
  try {
    const ip = req.headers.get('x-forwarded-for')?.split(',')[0]?.trim() || 'local';
    const now = Date.now();
    const bucket = rateMap.get(ip);
    if (bucket && bucket.resetAt > now) {
      if (bucket.count >= 8) {
        return NextResponse.json(
          { error: 'Too many requests. Please wait a minute and try again.' },
          { status: 429 }
        );
      }
      bucket.count += 1;
    } else {
      rateMap.set(ip, { count: 1, resetAt: now + 60_000 });
    }

    const body = await req.json();
    const parsed = contactSchema.safeParse(body);
    if (!parsed.success) {
      return NextResponse.json(
        { error: parsed.error.issues[0]?.message || 'Invalid form fields.' },
        { status: 400 }
      );
    }

    // Honeypot spam trap
    if (parsed.data.website.length > 0) {
      return NextResponse.json({
        ok: true,
        mode: 'demo',
        message:
          'Thank you. Your message is with our team, and a named banker will reply within one business day.',
      });
    }

    const webhook = process.env.CONTACT_WEBHOOK_URL;
    if (webhook) {
      const upstream = await fetch(webhook, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          firstName: parsed.data.firstName,
          lastName: parsed.data.lastName,
          email: parsed.data.email,
          phone: parsed.data.phone,
          message: parsed.data.message,
        }),
      });
      if (!upstream.ok) {
        return NextResponse.json(
          { error: 'Delivery adapter returned an error.' },
          { status: 502 }
        );
      }
      return NextResponse.json({
        ok: true,
        mode: 'webhook',
        message:
          'Thank you. Your message is with our team, and a named banker will reply within one business day.',
      });
    }

    return NextResponse.json({
      ok: true,
      mode: 'demo',
      message:
        'Demo mode: message validated locally. No external bank enquiry was transmitted.',
    });
  } catch {
    return NextResponse.json(
      { error: 'Unable to process request.' },
      { status: 400 }
    );
  }
}
