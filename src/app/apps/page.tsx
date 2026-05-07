import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export const metadata = {
  title: 'Gigabox Apps | Built and operated by AI',
  description:
    'Production applications built and operated by AI at Gigabox. Each app is a working proof point for our build philosophy.',
};

type AppCard = {
  slug: string;
  name: string;
  tagline: string;
  description: string;
  status: 'live' | 'beta';
  href: string;
};

const apps: AppCard[] = [
  {
    slug: 'ehr',
    name: 'Praxis',
    tagline: 'AI-native practice management & EHR',
    description:
      'Multi-tenant clinical practice management with patient portal, scheduling, telehealth, lab orders, prescriptions, referrals, and AI-generated visit summaries — built end-to-end by AI.',
    status: 'beta',
    href: '/apps/ehr',
  },
  {
    slug: 'openclaw',
    name: 'OpenClaw',
    tagline: 'Managed AI agents',
    description:
      'A dedicated AI assistant on your own subdomain — hosted, monitored, and backed up. Persistent memory, private chat interface, and spend controls included.',
    status: 'live',
    href: '/apps/openclaw',
  },
  {
    slug: 'hermes',
    name: 'Hermes',
    tagline: 'Autonomous AI agents with memory',
    description:
      'Self-improving AI agents with persistent memory, learned skills, and a web interface. Each instance runs in isolation with its own personality, knowledge, and conversation history.',
    status: 'live',
    href: '/apps/hermes',
  },
];

const statusBadge: Record<AppCard['status'], { label: string; classes: string }> = {
  live: {
    label: 'Live',
    classes: 'bg-green-100 text-green-800 border-green-200',
  },
  beta: {
    label: 'Beta · TestFlight',
    classes: 'bg-blue-100 text-blue-800 border-blue-200',
  },
};

export default function AppsPage() {
  return (
    <main className="bg-background min-h-screen">
      <Header />
      <div className="pt-24 pb-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-sm text-accent uppercase tracking-wider mb-4">Apps</div>
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Built and operated by AI.
          </h1>
          <p className="text-lg text-foreground/70 max-w-3xl mb-16">
            Each Gigabox app is a working proof point. Humans design the product. AI writes
            the code, runs the tests, ships the deploys, and operates the infrastructure.
          </p>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {apps.map((app) => {
              const badge = statusBadge[app.status];
              return (
                <Link key={app.slug} href={app.href} className="block">
                  <div className="h-full flex flex-col p-6 bg-white border border-foreground/10 rounded-lg hover:border-accent/40 transition-colors">
                    <div className="flex items-center justify-between mb-3">
                      <h3 className="text-xl font-semibold text-foreground">{app.name}</h3>
                      <span
                        className={`text-xs px-2 py-1 rounded border ${badge.classes}`}
                      >
                        {badge.label}
                      </span>
                    </div>
                    <p className="text-sm text-accent mb-3">{app.tagline}</p>
                    <p className="text-sm text-foreground/70 flex-1">{app.description}</p>
                    <div className="mt-4 text-sm font-medium text-accent inline-flex items-center">
                      Learn more
                      <svg
                        className="w-4 h-4 ml-1"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={2}
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M8.25 4.5l7.5 7.5-7.5 7.5"
                        />
                      </svg>
                    </div>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </div>
      <Footer />
    </main>
  );
}
