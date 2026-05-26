import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export const metadata = {
  title: 'Atrium | Property management software, built for Philippine developers',
  description:
    'AI-native property management for the Philippine market. Tenant directory, maintenance AI, payment tracking, communications hub, and property analytics on a single platform.',
};

const audiences = {
  developers: [
    'Ayala Land',
    'Megaworld',
    'SMDC',
    'DMCI Homes',
    'Robinsons Land',
    'Federal Land',
  ],
  operators: [
    'Condo associations',
    'HOA boards',
    'Independent property managers',
    'Building administrators',
    'Leasing offices',
    'Co-living operators',
  ],
};

const features = [
  {
    title: 'Tenant Directory',
    description:
      'Centralized tenant records with unit assignments, lease terms, contact details, and interaction history. Search, filter, and export across your entire portfolio.',
  },
  {
    title: 'Maintenance AI',
    description:
      'Tenants submit requests in natural language. AI classifies urgency, routes to the right team, and tracks resolution. 85% first-pass classification accuracy.',
  },
  {
    title: 'Payment Tracking',
    description:
      'Track dues, association fees, and utility charges per unit. Automatic reconciliation with BPI, BDO, GCash, and Maya. Flag anomalies within 24 hours.',
  },
  {
    title: 'Communications Hub',
    description:
      'Announcements, maintenance updates, and tenant notices from one dashboard. Draft in English or Tagalog with AI assistance. Delivery via email and in-app.',
  },
  {
    title: 'Property Analytics',
    description:
      'Occupancy rates, collection efficiency, maintenance response times, and expense trends. Monthly reports generated automatically for board review.',
  },
  {
    title: 'Mobile-First',
    description:
      'Responsive web app that works on any device. Tenants check balances and submit requests from their phone. Property managers approve on the go.',
  },
];

const steps = [
  {
    step: '1',
    title: 'Onboard your property',
    description:
      'Import your tenant roster, unit map, and fee schedule. Atrium structures the data and creates your property dashboard in under a day.',
  },
  {
    step: '2',
    title: 'Daily operations',
    description:
      'Maintenance requests flow in, get classified, and route to staff. Payments reconcile automatically. Communications go out on schedule.',
  },
  {
    step: '3',
    title: 'Monthly insights',
    description:
      'Automated reports on collection rates, maintenance backlogs, occupancy changes, and expense trends. Ready for your board meeting without manual prep.',
  },
];

const aiFeatures = [
  {
    title: 'Maintenance classification',
    metric: '85% first-pass accuracy',
    description:
      'Reads tenant requests in English or Tagalog, classifies by category and urgency, routes to the correct team. Learns from corrections over time.',
  },
  {
    title: 'Payment anomaly detection',
    metric: 'Flags within 24 hours',
    description:
      'Monitors payment patterns per unit. Flags missed payments, unusual amounts, and duplicate entries before they become problems.',
  },
  {
    title: 'Communication drafting',
    metric: 'English + Tagalog',
    description:
      'Generates announcement drafts, maintenance updates, and tenant notices. Edit before sending or approve as-is. Tone-appropriate for formal or casual contexts.',
  },
  {
    title: 'Report generation',
    metric: 'Monthly, automated',
    description:
      'Compiles occupancy, collection, maintenance, and expense data into board-ready reports. PDF export with charts and trend analysis.',
  },
];

const localMarket = [
  { label: 'Privacy', value: 'DPA (Data Privacy Act of 2012) compliant' },
  { label: 'Tax records', value: 'BIR-compatible reporting' },
  { label: 'Payment channels', value: 'BPI \u00b7 BDO \u00b7 GCash \u00b7 Maya' },
  { label: 'Data residency', value: 'Cloud SQL in Asia (Singapore)' },
  { label: 'Languages', value: 'English \u00b7 Tagalog' },
  { label: 'Currency', value: 'PHP (\u20b1)' },
];

const pricing = [
  {
    tier: 'Single Property',
    price: '\u20b110\u201325K/mo',
    units: 'Up to 200 units',
    features: ['Tenant directory', 'Maintenance tracking', 'Payment reconciliation', 'Monthly reports'],
  },
  {
    tier: 'Small Portfolio',
    price: '\u20b175\u2013150K/mo',
    units: 'Up to 1,000 units',
    features: ['Everything in Single', 'Multi-property dashboard', 'AI classification', 'Custom fee schedules'],
  },
  {
    tier: 'Mid Portfolio',
    price: '\u20b1250\u2013750K/mo',
    units: 'Up to 5,000 units',
    features: ['Everything in Small', 'Dedicated support', 'API access', 'Advanced analytics'],
  },
  {
    tier: 'Enterprise',
    price: 'Custom',
    units: '5,000+ units',
    features: ['Everything in Mid', 'On-premise option', 'SLA guarantees', 'Custom integrations'],
  },
];

export default function AtriumLandingPage() {
  return (
    <main className="bg-background min-h-screen">
      <Header />

      {/* Hero */}
      <section className="pt-24 pb-16 border-b border-foreground/5">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-3 mb-4">
            <span className="text-sm text-accent uppercase tracking-wider">
              Gigabox Apps &middot; Atrium
            </span>
            <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-semibold uppercase tracking-wider bg-amber-100 text-amber-800 border border-amber-200">
              Coming Soon
            </span>
          </div>
          <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-6 leading-tight max-w-4xl">
            Property management software, built for Philippine developers.
          </h1>
          <p className="text-xl text-foreground/70 max-w-3xl mb-8 leading-relaxed">
            Tenant directory, maintenance AI, payment tracking, communications
            hub, and property analytics &mdash; on a single platform designed
            for the way Philippine buildings actually operate.
          </p>

          <div className="flex flex-wrap gap-4 mb-4">
            <Link
              href="/apps/atrium/request"
              className="inline-flex items-center justify-center min-w-[220px] px-6 py-3 bg-accent text-white font-semibold rounded-lg hover:bg-accent/90 transition-colors"
            >
              Request a demo
            </Link>
            <a
              href="mailto:info@gigabox.ai?subject=Atrium%20inquiry"
              className="inline-flex items-center justify-center min-w-[220px] px-6 py-3 border-2 border-accent text-accent font-semibold rounded-lg hover:bg-accent hover:text-white transition-all"
            >
              Contact us
            </a>
          </div>
        </div>
      </section>

      {/* Who It's For */}
      <section className="py-16 border-b border-foreground/5">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Who it&apos;s for
          </h2>
          <p className="text-lg text-foreground/70 max-w-3xl mb-12">
            Whether you manage a single tower or a national portfolio, Atrium
            adapts to your scale.
          </p>

          <div className="grid gap-8 md:grid-cols-2 max-w-4xl">
            <div className="p-6 bg-white border border-foreground/10 rounded-lg">
              <h3 className="text-lg font-semibold text-foreground mb-4">
                Major developers
              </h3>
              <p className="text-sm text-foreground/70 mb-4">
                Portfolio-wide visibility across dozens of properties. Standardize
                operations, consolidate reporting, and give each building its own
                dashboard.
              </p>
              <ul className="space-y-1.5">
                {audiences.developers.map((name) => (
                  <li key={name} className="text-sm text-foreground/60">
                    {name}
                  </li>
                ))}
              </ul>
            </div>
            <div className="p-6 bg-white border border-foreground/10 rounded-lg">
              <h3 className="text-lg font-semibold text-foreground mb-4">
                Single-property operators
              </h3>
              <p className="text-sm text-foreground/70 mb-4">
                One building, one dashboard. Replace the spreadsheets, group
                chats, and bulletin boards with a system that tracks everything
                in one place.
              </p>
              <ul className="space-y-1.5">
                {audiences.operators.map((name) => (
                  <li key={name} className="text-sm text-foreground/60">
                    {name}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Core Features */}
      <section className="py-16 border-b border-foreground/5">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            What you get
          </h2>
          <p className="text-lg text-foreground/70 max-w-3xl mb-12">
            Six modules that cover the daily work of running a building &mdash;
            from tenant onboarding to board reporting.
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

      {/* How It Works */}
      <section className="py-16 border-b border-foreground/5">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            How it works
          </h2>
          <p className="text-lg text-foreground/70 max-w-3xl mb-12">
            Get running in days, not months. Atrium handles the structure &mdash;
            you bring the property data.
          </p>

          <div className="grid gap-6 md:grid-cols-3 max-w-5xl">
            {steps.map((s) => (
              <div
                key={s.step}
                className="p-6 bg-white border border-foreground/10 rounded-lg"
              >
                <span className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-accent/10 text-accent text-sm font-bold mb-4">
                  {s.step}
                </span>
                <h3 className="text-lg font-semibold text-foreground mb-2">
                  {s.title}
                </h3>
                <p className="text-sm text-foreground/70 leading-relaxed">
                  {s.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* AI That Actually Helps */}
      <section className="py-16 border-b border-foreground/5">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            AI that actually helps
          </h2>
          <p className="text-lg text-foreground/70 max-w-3xl mb-12">
            Four AI features with measurable outcomes. No chatbot gimmicks,
            no vague &ldquo;powered by AI&rdquo; labels.
          </p>

          <div className="grid gap-6 md:grid-cols-2">
            {aiFeatures.map((ai) => (
              <div
                key={ai.title}
                className="p-6 bg-white border border-foreground/10 rounded-lg"
              >
                <div className="flex items-baseline justify-between mb-2">
                  <h3 className="text-lg font-semibold text-foreground">
                    {ai.title}
                  </h3>
                  <span className="text-sm font-mono text-accent shrink-0 ml-4">
                    {ai.metric}
                  </span>
                </div>
                <p className="text-sm text-foreground/70 leading-relaxed">
                  {ai.description}
                </p>
              </div>
            ))}
          </div>

          <p className="mt-8 text-sm text-foreground/50 max-w-3xl">
            Atrium does not make legal decisions, calculate taxes, or replace
            professional advice. AI assists with classification, drafting, and
            pattern detection &mdash; humans review and approve.
          </p>
        </div>
      </section>

      {/* Built for the Philippine Market */}
      <section className="py-16 border-b border-foreground/5">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Built for the Philippine market
          </h2>
          <p className="text-lg text-foreground/70 max-w-3xl mb-12">
            Not a US product with a Philippine skin. Atrium is designed from
            the ground up for local regulations, payment channels, and
            operating practices.
          </p>

          <div className="grid gap-4 md:grid-cols-2 max-w-4xl">
            {localMarket.map((item) => (
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

      {/* Pricing */}
      <section className="py-16 border-b border-foreground/5">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Pricing
          </h2>
          <p className="text-lg text-foreground/70 max-w-3xl mb-12">
            Scales with your portfolio. Setup fees waived for design partners
            joining the pilot program.
          </p>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {pricing.map((plan) => (
              <div
                key={plan.tier}
                className="flex flex-col p-6 bg-white border border-foreground/10 rounded-lg"
              >
                <h3 className="text-lg font-semibold text-foreground mb-1">
                  {plan.tier}
                </h3>
                <p className="text-2xl font-bold text-foreground mb-1">
                  {plan.price}
                </p>
                <p className="text-sm text-foreground/50 mb-4">{plan.units}</p>
                <ul className="space-y-2 flex-1">
                  {plan.features.map((f) => (
                    <li key={f} className="text-sm text-foreground/70">
                      {f}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About */}
      <section className="py-16 border-b border-foreground/5">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
            How we build
          </h2>
          <div className="space-y-4 text-foreground/80 leading-relaxed">
            <p>
              Gigabox builds AI-native software for specific industries. We
              write the technology &mdash; the platform, the AI models, the
              infrastructure. Our partners bring the domain expertise and the
              customer relationships.
            </p>
            <p>
              For Atrium, that means partnering with people who run buildings
              for a living. Property managers, building administrators, and
              developer operations teams who know what actually needs to work
              on day one. We handle the software; they tell us what to build.
            </p>
            <p>
              The model is co-founder equity, not consulting fees. One-third
              equity to the domain partner, zero cost until the product
              generates revenue. If you manage properties and want to shape
              the tool you&apos;ll use every day, this is how we work.
            </p>
          </div>
        </div>
      </section>

      {/* Contact */}
      <section className="py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap gap-6 text-sm">
            <Link
              href="/apps/atrium/request"
              className="text-accent hover:text-accent/80 underline underline-offset-4"
            >
              Request a demo
            </Link>
            <a
              href="mailto:info@gigabox.ai?subject=Atrium%20inquiry"
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
