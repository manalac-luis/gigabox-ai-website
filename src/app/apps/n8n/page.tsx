import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export const metadata = {
  title: 'n8n | Managed workflow automation on your own subdomain',
  description:
    'Your own n8n instance on a dedicated subdomain with per-tenant Postgres, 400+ integrations, webhook triggers, and zero infrastructure to manage.',
};

const features = [
  {
    title: 'Visual Workflow Editor',
    description:
      'Build automations with a drag-and-drop canvas. Connect triggers, actions, and logic nodes without writing code — or drop into JavaScript when you need to.',
  },
  {
    title: '400+ Integrations',
    description:
      'Connect to Slack, Google Sheets, Postgres, HTTP webhooks, OpenAI, and hundreds more. Community nodes extend the catalog even further.',
  },
  {
    title: 'Webhook Triggers',
    description:
      'Expose webhook URLs on your subdomain to trigger workflows from any external system. Each instance gets its own HTTPS endpoint.',
  },
  {
    title: 'Per-Tenant Postgres',
    description:
      'Every instance gets a dedicated Postgres database on Cloud SQL. No shared tables, no data leakage, full isolation between tenants.',
  },
  {
    title: 'Subdomain Isolation',
    description:
      'Each instance runs on its own subdomain with wildcard SSL. Separate systemd process, separate port, separate data directory.',
  },
  {
    title: 'Auto-Restart & Limits',
    description:
      'systemd manages each instance with automatic restart on failure, 512MB memory cap, and graceful shutdown. No babysitting required.',
  },
];

const stack = [
  { label: 'Runtime', value: 'n8n 2.19.5 \u00b7 Node.js' },
  { label: 'Database', value: 'Per-instance Postgres on Cloud SQL' },
  { label: 'Auth', value: 'n8n built-in (email + password)' },
  { label: 'Proxy', value: 'nginx \u00b7 wildcard SSL \u00b7 WebSocket' },
  { label: 'Isolation', value: 'systemd \u00b7 512MB MemoryMax \u00b7 per-process' },
  { label: 'Infra', value: 'GCE \u00b7 acme.sh DNS-01 \u00b7 ZeroSSL' },
];

export default function N8nLandingPage() {
  return (
    <main className="bg-background min-h-screen">
      <Header />

      {/* Hero */}
      <section className="pt-24 pb-16 border-b border-foreground/5">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-3 mb-4">
            <span className="text-sm text-accent uppercase tracking-wider">
              Gigabox Apps &middot; n8n
            </span>
            <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-semibold uppercase tracking-wider bg-green-100 text-green-800 border border-green-200">
              Live
            </span>
          </div>
          <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-6 leading-tight">
            Workflow automation on your own subdomain.
          </h1>
          <p className="text-xl text-foreground/70 max-w-3xl mb-8 leading-relaxed">
            Get a managed n8n instance with a dedicated Postgres database, 400+
            integrations, webhook triggers, and zero infrastructure to manage.
            Just build workflows.
          </p>

          <div className="flex flex-wrap gap-4 mb-4">
            <Link
              href="/apps/n8n/request"
              className="inline-flex items-center justify-center min-w-[220px] px-6 py-3 bg-accent text-white font-semibold rounded-lg hover:bg-accent/90 transition-colors"
            >
              Request an instance
            </Link>
            <a
              href="mailto:info@gigabox.ai?subject=n8n%20access%20request"
              className="inline-flex items-center justify-center min-w-[220px] px-6 py-3 border-2 border-accent text-accent font-semibold rounded-lg hover:bg-accent hover:text-white transition-all"
            >
              Contact us
            </a>
          </div>

          <div className="text-sm text-foreground/50 mb-12">
            <span className="font-mono">n8n.gigabox.ai</span>
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
            A production n8n instance on your own subdomain — no Docker, no server management, just workflows.
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
            Each instance is an n8n process managed by systemd, fronted by nginx with wildcard SSL, and backed by its own Postgres database.
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
            Why managed n8n
          </h2>
          <div className="space-y-4 text-foreground/80 leading-relaxed">
            <p>
              Self-hosting n8n means maintaining Docker, Postgres, SSL certificates,
              backups, and updates. Most teams want the automations, not the infrastructure.
            </p>
            <p>
              With Gigabox n8n, you get a dedicated instance on your own subdomain in
              minutes. We handle the database, the proxy, the SSL, and the process
              management. You sign in and start building workflows.
            </p>
            <p>
              Each instance is fully isolated — its own Postgres database, its own systemd
              process with memory limits, its own data directory. The platform was built
              and deployed by AI, from the provisioning scripts to the fleet management CLI.
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
