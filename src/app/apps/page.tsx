import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export const metadata = {
  title: 'Gigabox Apps | Built and operated by AI',
  description:
    'Production applications built and operated by AI at Gigabox. Each app is a working proof point for our build philosophy.',
};

type AppCard = {
  slug: string | null;
  name: string;
  tagline: string;
  description: string;
  status: 'live' | 'beta' | 'coming-soon';
  href: string | null;
};

const apps: AppCard[] = [
  {
    slug: 'ehr',
    name: 'Gigabox EHR',
    tagline: 'AI-native electronic health records',
    description:
      'A patient portal, scheduling, telehealth, lab orders, prescriptions, referrals, and AI-generated visit summaries — built end-to-end by AI as a research and development demonstration.',
    status: 'beta',
    href: '/apps/ehr',
  },
  {
    slug: null,
    name: 'More to come',
    tagline: 'New verticals shipping soon',
    description:
      'Each app is a proof point for the Gigabox build philosophy: humans design, AI builds and operates everything else.',
    status: 'coming-soon',
    href: null,
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
  'coming-soon': {
    label: 'Coming soon',
    classes: 'bg-foreground/5 text-foreground/60 border-foreground/10',
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
              const card = (
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
                  {app.href && (
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
                  )}
                </div>
              );
              return app.href ? (
                <Link key={app.name} href={app.href} className="block">
                  {card}
                </Link>
              ) : (
                <div key={app.name}>{card}</div>
              );
            })}
          </div>
        </div>
      </div>
      <Footer />
    </main>
  );
}
