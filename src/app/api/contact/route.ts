import { NextRequest, NextResponse } from 'next/server';

export async function POST(req: NextRequest) {
  let body: { name?: string; email?: string; product?: string };

  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ error: 'Invalid JSON' }, { status: 400 });
  }

  const { name, email, product } = body;

  if (!name || !email) {
    return NextResponse.json(
      { error: 'Name and email are required.' },
      { status: 400 },
    );
  }

  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) {
    console.error('RESEND_API_KEY not set');
    return NextResponse.json(
      { error: 'Server configuration error.' },
      { status: 500 },
    );
  }

  const subject = product
    ? `[${product}] Instance request from ${name}`
    : `Contact request from ${name}`;

  const html = `
    <h2>New instance request</h2>
    <table style="border-collapse:collapse;">
      <tr><td style="padding:4px 12px 4px 0;font-weight:bold;">Name</td><td>${escapeHtml(name)}</td></tr>
      <tr><td style="padding:4px 12px 4px 0;font-weight:bold;">Email</td><td>${escapeHtml(email)}</td></tr>
      <tr><td style="padding:4px 12px 4px 0;font-weight:bold;">Product</td><td>${escapeHtml(product || 'N/A')}</td></tr>
      <tr><td style="padding:4px 12px 4px 0;font-weight:bold;">Time</td><td>${new Date().toISOString()}</td></tr>
    </table>
  `;

  try {
    const res = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${apiKey}`,
      },
      body: JSON.stringify({
        from: 'Gigabox <noreply@send.gigabox.ai>',
        to: ['info@gigabox.ai'],
        subject,
        html,
      }),
    });

    if (!res.ok) {
      const err = await res.text();
      console.error('Resend API error:', res.status, err);
      return NextResponse.json(
        { error: 'Failed to send request. Please email info@gigabox.ai directly.' },
        { status: 502 },
      );
    }

    return NextResponse.json({ success: true });
  } catch (err) {
    console.error('Resend fetch error:', err);
    return NextResponse.json(
      { error: 'Failed to send request. Please email info@gigabox.ai directly.' },
      { status: 502 },
    );
  }
}

function escapeHtml(str: string): string {
  return str
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;');
}
