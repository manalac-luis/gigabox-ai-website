import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export const metadata = {
  title: 'OpenClaw | Managed AI agents on your own subdomain',
  description:
    'OpenClaw gives you a dedicated AI assistant on your own subdomain — hosted, monitored, and backed up. Persistent memory, private chat interface, and spend controls included.',
};

const features = [
  {
    title: 'Dedicated Subdomain',
    description:
      'Each instance runs at its own URL — yourname.openclaw.gigabox.ai — with isolated storage, config, and conversation history.',
  },
  {
    title: 'Persistent Memory',
    description:
      'Your assistant remembers past conversations and builds context over time. Memory survives restarts and is backed up to cloud storage.',
  },
  {
    title: 'Clerk Authentication',
    description:
      'Sign in with your existing account. No passwords to manage — Clerk handles identity, and access is granted automatically.',
  },
  {
    title: 'Spend Controls',
    description:
      'Global and per-user daily spend caps prevent runaway costs. Every LLM call is metered and tracked in real time.',
  },
  {
    title: 'Private Chat Interface',
    description:
      'A clean web UI for chatting with your AI assistant. Conversations are stored in SQL and persist across sessions.',
  },
  {
    title: 'Multi-Tenant Isolation',
    description:
      'Each instance is a separate process with its own config, model selection, and data directory. No cross-tenant data leakage.',
  },
];

const stack = [
  { label: 'Runtime', value: 'OpenClaw 2026.5.5 · Node.js' },
  { label: 'Auth', value: 'Clerk (cross-subdomain session bridge)' },
  { label: 'Management', value: 'FastAPI · Python 3.12 · asyncpg' },
  { label: 'AI', value: 'DeepSeek V4 Flash via OpenRouter' },
  { label: 'Database', value: 'Cloud SQL (Postgres 16)' },
  { label: 'Infra', value: 'GCE · nginx · systemd · acme.sh wildcard SSL' },
];

export default function OpenClawLandingPage() {
  return (
    <main className="bg-background min-h-screen">
      <Header />

      {/* Hero */}
      <section className="pt-24 pb-16 border-b border-foreground/5">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-3 mb-4">
            <span className="text-sm text-accent uppercase tracking-wider">
              Gigabox Apps · OpenClaw
            </span>
            <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-semibold uppercase tracking-wider bg-green-100 text-green-800 border border-green-200">
              Live
            </span>
          </div>
          <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-6 leading-tight">
            Your own AI assistant, on your own subdomain.
          </h1>
          <p className="text-xl text-foreground/70 max-w-3xl mb-8 leading-relaxed">
            OpenClaw gives every user a dedicated AI agent — hosted, isolated, and
            persistent. Sign in once, start talking. Your assistant remembers
            everything and lives at a URL you can bookmark and come back to.
          </p>

          <div className="flex flex-wrap gap-4 mb-4">
            <a
              href="https://openclaw.gigabox.ai"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center min-w-[220px] px-6 py-3 bg-accent text-white font-semibold rounded-lg hover:bg-accent/90 transition-colors"
            >
              <svg
                className="w-5 h-5 mr-2"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={2}
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25"
                />
              </svg>
              Go to OpenClaw
            </a>
            <a
              href="mailto:info@gigabox.ai?subject=OpenClaw%20access%20request"
              className="inline-flex items-center justify-center min-w-[220px] px-6 py-3 border-2 border-accent text-accent font-semibold rounded-lg hover:bg-accent hover:text-white transition-all"
            >
              Request an instance
            </a>
          </div>

          <div className="text-sm text-foreground/50 mb-12">
            <span className="font-mono">openclaw.gigabox.ai</span>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-16 border-b border-foreground/5">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            What you get
          </h2>
          <p className="text-lg text-foreground/70 max-w-3xl mb-12">
            A managed AI assistant with isolation, persistence, and access controls — no infrastructure to manage.
          </p>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {features.map((feature) => (
              <div
                key={feature.title}
                className="p-6 bg-white border border-foreground/10 rounded-lg"
              >
                <h3 className="text-lg font-semibold text-foreground mb-2">
                  {feature.title}
                </h3>
                <p className="text-sm text-foreground/70 leading-relaxed">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stack */}
      <section className="py-16 border-b border-foreground/5">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            How it&apos;s built
          </h2>
          <p className="text-lg text-foreground/70 max-w-3xl mb-12">
            Each instance is a separate OpenClaw process behind nginx, with Clerk handling identity across subdomains.
          </p>

          <div className="grid gap-4 md:grid-cols-2 max-w-4xl">
            {stack.map((item) => (
              <div
                key={item.label}
                className="flex justify-between items-baseline p-4 bg-white border border-foreground/10 rounded-lg"
              >
                <span className="text-sm font-semibold text-foreground/60 uppercase tracking-wider">
                  {item.label}
                </span>
                <span className="text-sm text-foreground/80 text-right">{item.value}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About */}
      <section className="py-16 border-b border-foreground/5">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
            Why we built it
          </h2>
          <div className="space-y-4 text-foreground/80 leading-relaxed">
            <p>
              Most AI chat tools are shared infrastructure. Your conversations
              live on someone else&apos;s servers, mixed with everyone else&apos;s data,
              behind a generic URL. We wanted something different: a dedicated
              assistant that feels like yours.
            </p>
            <p>
              OpenClaw gives each user their own subdomain, their own process,
              their own persistent memory. The assistant builds context over time
              and never forgets. It runs on infrastructure we manage, with
              authentication handled by Clerk and spend tracked per-user.
            </p>
            <p>
              The entire platform — from the nginx routing to the auth bridge to the
              management API — was built and deployed by AI. Humans designed the
              architecture. AI wrote every line, configured every service, and
              operates the fleet.
            </p>
          </div>
        </div>
      </section>

      {/* Contact */}
      <section className="py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap gap-6 text-sm">
            <a
              href="mailto:info@gigabox.ai"
              className="text-accent hover:text-accent/80 underline underline-offset-4"
            >
              info@gigabox.ai
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
