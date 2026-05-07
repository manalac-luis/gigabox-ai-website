import Header from '@/components/Header';
import Footer from '@/components/Footer';

export const metadata = {
  title: 'Hermes | Autonomous AI agents with persistent memory',
  description:
    'Hermes is a managed platform for autonomous AI agents that learn, remember, and improve over time. Each instance gets its own subdomain, personality, memory, and skills.',
};

const features = [
  {
    title: 'Persistent Memory',
    description:
      'Hermes agents remember everything across sessions. Memories are stored on disk and backed up to cloud storage automatically.',
  },
  {
    title: 'Learned Skills',
    description:
      'Agents discover and save reusable skills over time. Each skill is a self-contained capability the agent can invoke in future conversations.',
  },
  {
    title: 'Self-Improvement',
    description:
      'The agent reflects on its own performance, updates its personality file (SOUL.md), and adapts its behavior based on experience.',
  },
  {
    title: 'Web Interface',
    description:
      'A clean chat UI with server-sent events for real-time streaming. No polling, no page reloads — just a smooth conversation.',
  },
  {
    title: 'Per-Instance Isolation',
    description:
      'Each agent runs as its own systemd service with a separate data directory, port, and config. No shared state between tenants.',
  },
  {
    title: 'Clerk Authentication',
    description:
      'Sign in with your existing account. Cross-subdomain auth bridge handles session handoff from the dashboard to your agent.',
  },
];

const stack = [
  { label: 'Agent', value: 'Hermes Agent v0.12.0 · Python' },
  { label: 'Web UI', value: 'Hermes WebUI · Python + vanilla JS · SSE streaming' },
  { label: 'Auth', value: 'Clerk (cross-subdomain session bridge)' },
  { label: 'Management', value: 'FastAPI · Python 3.12 · asyncpg' },
  { label: 'AI', value: 'DeepSeek V4 Flash via OpenRouter' },
  { label: 'Infra', value: 'GCE · nginx · systemd · acme.sh wildcard SSL' },
];

export default function HermesLandingPage() {
  return (
    <main className="bg-background min-h-screen">
      <Header />

      {/* Hero */}
      <section className="pt-24 pb-16 border-b border-foreground/5">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-3 mb-4">
            <span className="text-sm text-accent uppercase tracking-wider">
              Gigabox Apps · Hermes
            </span>
            <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-semibold uppercase tracking-wider bg-green-100 text-green-800 border border-green-200">
              Live
            </span>
          </div>
          <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-6 leading-tight">
            AI agents that learn and remember.
          </h1>
          <p className="text-xl text-foreground/70 max-w-3xl mb-8 leading-relaxed">
            Hermes gives you an autonomous AI agent with persistent memory, learned
            skills, and a self-improving personality. Each agent runs in isolation
            on its own subdomain and gets better the more you use it.
          </p>

          <div className="flex flex-wrap gap-4 mb-4">
            <a
              href="https://hermes.gigabox.ai"
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
              Go to Hermes
            </a>
            <a
              href="mailto:info@gigabox.ai?subject=Hermes%20access%20request"
              className="inline-flex items-center justify-center min-w-[220px] px-6 py-3 border-2 border-accent text-accent font-semibold rounded-lg hover:bg-accent hover:text-white transition-all"
            >
              Request an instance
            </a>
          </div>

          <div className="text-sm text-foreground/50 mb-12">
            <span className="font-mono">hermes.gigabox.ai</span>
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
            An autonomous agent that improves with use — with memory, skills, and identity that persist.
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
            Each agent is a Hermes process with its own data directory, managed by systemd and fronted by nginx.
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
              Most AI assistants are stateless. You start every conversation from
              scratch, re-explaining context, re-teaching preferences. The agent
              never gets better because it never remembers.
            </p>
            <p>
              Hermes is different. Each agent maintains persistent memory — facts
              it has learned, skills it has developed, and a personality that
              evolves based on interaction. The more you use it, the more useful
              it becomes. It writes its own notes, saves reusable skills, and
              reflects on what worked and what didn&apos;t.
            </p>
            <p>
              The platform — from the provisioning scripts to the auth bridge to
              the fleet management CLI — was built and deployed by AI. Humans
              designed the architecture. AI wrote every line and operates the
              infrastructure.
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
