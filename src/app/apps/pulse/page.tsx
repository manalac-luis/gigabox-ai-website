import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export const metadata = {
  title: 'Pulse | Your business operating system on a dedicated subdomain',
  description:
    'Unified sales pipeline, contact management, and AI intelligence in one state model. Agent-first REST API, magic link auth, dedicated Postgres — on your own subdomain.',
};

const features = [
  {
    title: 'Sales Pipeline',
    description:
      'Visual deal tracking across configurable stages. Create, move, close, and analyze deals with a REST API designed for both human dashboards and autonomous agents.',
  },
  {
    title: 'Contact Management',
    description:
      'Unified contact records with company associations, tags, and interaction history. Import, deduplicate, and enrich contacts through the API or agent commands.',
  },
  {
    title: 'AI Intelligence',
    description:
      'DeepSeek V4 Flash via Sovereign analyzes pipeline health, scores leads, surfaces at-risk deals, and generates next-step recommendations — all through the API.',
  },
  {
    title: 'Agent-First API',
    description:
      'Every feature is a REST endpoint with Bearer token auth. OpenClaw and Hermes agents can read pipeline state, create contacts, and trigger actions autonomously.',
  },
  {
    title: 'Magic Link Auth',
    description:
      'No passwords to manage. Users authenticate via email magic links powered by viv-auth. Each link is single-use, time-limited, and tied to a verified email address.',
  },
  {
    title: 'Subdomain Isolation',
    description:
      'Each instance runs on its own subdomain with a dedicated Postgres database, systemd process isolation, and per-instance memory limits. Your data never mixes.',
  },
];

const stack = [
  { label: 'Runtime', value: 'Python 3.12 \u00b7 FastAPI \u00b7 uvicorn' },
  { label: 'Inference', value: 'DeepSeek V4 Flash via Sovereign' },
  { label: 'Auth', value: 'viv-auth magic link (email-based)' },
  { label: 'Database', value: 'Per-instance Postgres on Cloud SQL' },
  { label: 'Proxy', value: 'nginx \u00b7 wildcard SSL \u00b7 WebSocket' },
  { label: 'Isolation', value: 'systemd \u00b7 512MB MemoryMax' },
];

export default function PulseLandingPage() {
  return (
    <main className="bg-background min-h-screen">
      <Header />

      {/* Hero */}
      <section className="pt-24 pb-16 border-b border-foreground/5">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-3 mb-4">
            <span className="text-sm text-accent uppercase tracking-wider">
              Gigabox Apps &middot; Pulse
            </span>
            <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-semibold uppercase tracking-wider bg-green-100 text-green-800 border border-green-200">
              Live
            </span>
          </div>
          <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-6 leading-tight max-w-4xl">
            Your business operating system on a dedicated subdomain.
          </h1>
          <p className="text-xl text-foreground/70 max-w-3xl mb-8 leading-relaxed">
            Unified sales pipeline, contact management, and AI intelligence in
            one state model. Agent-first REST API, magic link auth, dedicated
            Postgres &mdash; everything an autonomous ops layer needs to run
            your business.
          </p>

          <div className="flex flex-wrap gap-4 mb-4">
            <Link
              href="/apps/pulse/request"
              className="inline-flex items-center justify-center min-w-[220px] px-6 py-3 bg-accent text-white font-semibold rounded-lg hover:bg-accent/90 transition-colors"
            >
              Request an instance
            </Link>
            <a
              href="mailto:info@gigabox.ai?subject=Pulse%20access%20request"
              className="inline-flex items-center justify-center min-w-[220px] px-6 py-3 border-2 border-accent text-accent font-semibold rounded-lg hover:bg-accent hover:text-white transition-all"
            >
              Contact us
            </a>
          </div>

          <div className="text-sm text-foreground/50 mb-12">
            <span className="font-mono">pulse.gigabox.ai</span>
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
            A CRM that&apos;s also an API surface for autonomous agents. Every
            feature works through the dashboard and through the REST API.
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
            Each instance is a FastAPI process with its own Postgres database,
            managed by systemd and fronted by nginx with wildcard SSL.
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
            Why Pulse isn&apos;t a CRM
          </h2>
          <div className="space-y-4 text-foreground/80 leading-relaxed">
            <p>
              CRMs are built for humans who click buttons. Pulse is built for
              AI agents that call APIs. The data model is the same &mdash;
              contacts, deals, pipeline stages &mdash; but the access pattern
              is inverted. The primary consumer is an autonomous agent
              (OpenClaw or Hermes) that reads state, makes decisions, and
              writes back. Humans review and steer.
            </p>
            <p>
              This means every feature ships as an API endpoint first. The
              dashboard is a view layer, not the source of truth. Magic link
              auth eliminates password management for the humans who do log
              in. Per-instance Postgres means your data is never shared with
              another tenant, and your agent can query it directly.
            </p>
            <p>
              Pulse is the customer-facing OS that the ops layer drives. It
              unifies sales pipeline, contact management, and AI intelligence
              into one state model. The ops agents &mdash; OpenClaw for chat
              commands, Hermes for background automation &mdash; operate Pulse
              autonomously. The human provides strategic direction. The
              system executes.
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
