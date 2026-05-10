import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const systems = [
  {
    name: 'Pulse',
    description:
      'Customer operating system — pipeline, comms, AI intelligence in one state model.',
    status: 'Live' as const,
    href: '/apps/pulse',
  },
  {
    name: 'Praxis',
    description:
      'Multi-tenant clinical practice management — encounters, orders, scheduling, telehealth.',
    status: 'Beta' as const,
    href: '/apps/ehr',
  },
  {
    name: 'Sovereign',
    description:
      'Self-hosted GPU inference with transparent cloud fallback — one API for all AI calls.',
    status: 'Live' as const,
    href: '/apps/sovereign',
  },
  {
    name: 'OpenClaw',
    description:
      'Managed AI agents on dedicated subdomains — persistent memory, chat UI, spend controls.',
    status: 'Live' as const,
    href: '/apps/openclaw',
  },
  {
    name: 'Hermes',
    description:
      'Autonomous agents that learn — persistent memory, self-improving skills, web interface.',
    status: 'Live' as const,
    href: '/apps/hermes',
  },
  {
    name: 'n8n',
    description:
      'Managed workflow automation — per-tenant Postgres, 400+ integrations, zero infra.',
    status: 'Live' as const,
    href: '/apps/n8n',
  },
  {
    name: 'ComfyUI',
    description:
      'AI image and video generation — node-based workflows, cloud inference via fal.ai.',
    status: 'Live' as const,
    href: '/apps/comfyui',
  },
  {
    name: 'OpenMAIC',
    description:
      'Interactive AI classrooms — multi-agent lectures, simulations, quizzes from any topic.',
    status: 'Live' as const,
    href: '/apps/maic',
  },
];

const layers = [
  {
    label: 'App',
    components: 'Pulse, Praxis, MAIC, n8n, ComfyUI',
    note: 'User-facing systems with APIs',
  },
  {
    label: 'Ops',
    components: 'OpenClaw, Hermes',
    note: 'Autonomous agents that operate the apps',
  },
  {
    label: 'Substrate',
    components: 'Claude Code + human direction',
    note: 'Builds everything above',
  },
];

const facts = [
  { label: 'Production systems', value: '8' },
  { label: 'Inference', value: 'DeepSeek V4 Flash via Sovereign' },
  { label: 'Infrastructure cost', value: '~$250/month' },
  { label: 'All code written by', value: 'Claude Code' },
];

export default function Home() {
  return (
    <main className="bg-background min-h-screen">
      <Header />

      {/* Hero */}
      <section className="pt-24 pb-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-24">
          <div className="max-w-4xl">
            <h1 className="text-5xl md:text-7xl font-bold tracking-tight text-foreground mb-6 leading-[1.1]">
              Building Systems for an AI-First World
            </h1>
            <p className="text-lg text-foreground/70 max-w-3xl mb-10 leading-relaxed">
              Most software assumes humans operate and AI assists. We build for
              the inverse &mdash; AI agents handle routine work autonomously,
              humans provide strategic direction. One state model per domain,
              agent-first APIs, autonomous orchestration across the customer
              lifecycle.
            </p>
            <div className="flex flex-wrap items-center gap-4">
              <Link
                href="/apps"
                className="inline-flex items-center px-6 py-3 bg-accent text-white font-semibold rounded-lg hover:bg-accent/90 transition-colors"
              >
                See what&apos;s running
              </Link>
              <a
                href="mailto:info@gigabox.ai"
                className="text-sm text-foreground/60 hover:text-foreground transition-colors"
              >
                info@gigabox.ai
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Running Systems */}
      <section className="py-16 border-t border-foreground/5">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-12">
            Running systems
          </h2>

          <div className="grid gap-6 md:grid-cols-2">
            {systems.map((system) => (
              <Link key={system.name} href={system.href} className="block">
                <div className="h-full p-6 bg-white border border-foreground/10 rounded-lg hover:border-accent/40 transition-colors">
                  <div className="flex items-center justify-between mb-3">
                    <h3 className="text-xl font-semibold text-foreground">
                      {system.name}
                    </h3>
                    <span
                      className={`text-xs px-2 py-1 rounded border ${
                        system.status === 'Live'
                          ? 'bg-green-100 text-green-800 border-green-200'
                          : 'bg-blue-100 text-blue-800 border-blue-200'
                      }`}
                    >
                      {system.status}
                    </span>
                  </div>
                  <p className="text-sm text-foreground/70 leading-relaxed">
                    {system.description}
                  </p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Architecture */}
      <section className="py-16 border-t border-foreground/5">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Architecture
          </h2>
          <p className="text-lg text-foreground/70 max-w-3xl mb-12">
            Three layers. Apps serve users. Ops agents run the apps. The
            substrate builds everything.
          </p>

          <div className="max-w-3xl space-y-4">
            {layers.map((layer) => (
              <div
                key={layer.label}
                className="flex items-baseline justify-between p-4 bg-white border border-foreground/10 rounded-lg"
              >
                <div>
                  <span className="text-sm font-semibold text-foreground/60 uppercase tracking-wider">
                    {layer.label}
                  </span>
                  <span className="mx-3 text-foreground/20">&mdash;</span>
                  <span className="text-sm text-foreground/50">
                    {layer.note}
                  </span>
                </div>
                <span className="text-sm text-foreground/80 text-right ml-4 shrink-0">
                  {layer.components}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Infrastructure */}
      <section className="py-16 border-t border-foreground/5">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-12">
            Infrastructure
          </h2>

          <div className="grid gap-4 md:grid-cols-2 max-w-4xl">
            {facts.map((fact) => (
              <div
                key={fact.label}
                className="flex justify-between items-baseline p-4 bg-white border border-foreground/10 rounded-lg"
              >
                <span className="text-sm font-semibold text-foreground/60 uppercase tracking-wider">
                  {fact.label}
                </span>
                <span className="text-sm font-mono text-foreground/80 text-right">
                  {fact.value}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact */}
      <section className="py-16 border-t border-foreground/5">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <a
            href="mailto:info@gigabox.ai"
            className="text-sm text-accent hover:text-accent/80 underline underline-offset-4"
          >
            info@gigabox.ai
          </a>
        </div>
      </section>

      <Footer />
    </main>
  );
}
