'use client';

import { useState } from 'react';
import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

type FormState = 'idle' | 'submitting' | 'success' | 'error';

export default function MaicRequestPage() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [state, setState] = useState<FormState>('idle');
  const [errorMsg, setErrorMsg] = useState('');

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setState('submitting');
    setErrorMsg('');

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name, email, product: 'maic' }),
      });

      if (!res.ok) {
        const data = await res.json().catch(() => ({}));
        throw new Error(data.error || 'Something went wrong. Please try again.');
      }

      setState('success');
    } catch (err) {
      setState('error');
      setErrorMsg(err instanceof Error ? err.message : 'Something went wrong.');
    }
  }

  return (
    <main className="bg-background min-h-screen">
      <Header />

      <div className="pt-24 pb-16">
        <div className="mx-auto max-w-2xl px-4 sm:px-6 lg:px-8">
          {/* Breadcrumb */}
          <div className="text-sm text-foreground/50 mb-8">
            <Link href="/apps" className="hover:text-accent transition-colors">
              Gigabox Apps
            </Link>
            <span className="mx-2">&middot;</span>
            <Link href="/apps/maic" className="hover:text-accent transition-colors">
              OpenMAIC
            </Link>
            <span className="mx-2">&middot;</span>
            <span className="text-foreground/70">Request</span>
          </div>

          <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Request an OpenMAIC instance
          </h1>
          <p className="text-foreground/70 mb-8">
            Tell us your name and email. We&apos;ll provision a dedicated OpenMAIC
            instance on your own subdomain and send you an access code.
          </p>

          {state === 'success' ? (
            <div className="p-6 bg-green-50 border border-green-200 rounded-lg">
              <h2 className="text-lg font-semibold text-green-800 mb-2">
                Request received
              </h2>
              <p className="text-green-700">
                We&apos;ll set up your instance and email you within 1 business
                day. Check your inbox at <strong>{email}</strong>.
              </p>
              <Link
                href="/apps/maic"
                className="inline-block mt-4 text-sm text-accent hover:text-accent/80 underline underline-offset-4"
              >
                Back to OpenMAIC
              </Link>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium text-foreground mb-1.5"
                >
                  Name
                </label>
                <input
                  id="name"
                  type="text"
                  required
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  disabled={state === 'submitting'}
                  placeholder="Your name"
                  className="w-full px-4 py-2.5 border border-foreground/20 rounded-lg bg-white text-foreground placeholder:text-foreground/40 focus:outline-none focus:ring-2 focus:ring-accent/40 focus:border-accent disabled:opacity-50"
                />
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-foreground mb-1.5"
                >
                  Email
                </label>
                <input
                  id="email"
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  disabled={state === 'submitting'}
                  placeholder="you@company.com"
                  className="w-full px-4 py-2.5 border border-foreground/20 rounded-lg bg-white text-foreground placeholder:text-foreground/40 focus:outline-none focus:ring-2 focus:ring-accent/40 focus:border-accent disabled:opacity-50"
                />
              </div>

              {state === 'error' && (
                <div className="p-4 bg-red-50 border border-red-200 rounded-lg text-sm text-red-700">
                  {errorMsg}
                </div>
              )}

              <button
                type="submit"
                disabled={state === 'submitting'}
                className="w-full px-6 py-3 bg-accent text-white font-semibold rounded-lg hover:bg-accent/90 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {state === 'submitting' ? 'Submitting...' : 'Request instance'}
              </button>

              <p className="text-xs text-foreground/50 text-center">
                By submitting, you agree to our{' '}
                <Link href="/terms" className="underline underline-offset-2 hover:text-accent">
                  Terms
                </Link>{' '}
                and{' '}
                <Link href="/privacy" className="underline underline-offset-2 hover:text-accent">
                  Privacy Policy
                </Link>
                .
              </p>
            </form>
          )}
        </div>
      </div>

      <Footer />
    </main>
  );
}
