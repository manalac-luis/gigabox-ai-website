import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export const metadata = {
  title: 'Gigabox EHR | AI-native electronic health records',
  description:
    'Gigabox EHR is a research and development demonstration of an AI-built electronic health records platform. Patient portal, scheduling, telehealth, lab orders, prescriptions, referrals, and AI-generated visit summaries.',
};

const features = [
  {
    title: 'Smart Encounter',
    description:
      'A five-step workflow — intake, AI-drafted SOAP notes, orders, billing, and complete — with AI-generated medical coding and claim drafts.',
  },
  {
    title: 'Scheduling',
    description:
      'Calendar view, real-time availability, booking with confirmation email, and an autonomous reminder agent that runs hourly.',
  },
  {
    title: 'Telehealth',
    description:
      'One-to-one WebRTC video sessions with in-app signaling. No third-party SDK, no per-minute charges.',
  },
  {
    title: 'Orders & Referrals',
    description:
      'Lab orders, imaging orders, prescriptions, and specialist referrals as first-class encounter entities — with AI-drafted referral letters and order suggestions.',
  },
  {
    title: 'Patient Portal',
    description:
      'Patients see their visit history, medications, allergies, upcoming appointments, and AI-generated plain-language visit summaries.',
  },
  {
    title: 'Mobile App',
    description:
      'Native iOS app on TestFlight with Sign in with Apple, push notifications, and offline-aware caching. Built with Expo and Clerk.',
  },
];

const stack = [
  { label: 'Backend', value: 'FastAPI · Python 3.12 · Cloud SQL (Postgres)' },
  { label: 'Web', value: 'React · Vite · TypeScript · Tailwind' },
  { label: 'Mobile', value: 'Expo · React Native · TypeScript' },
  { label: 'Auth', value: 'Clerk (Apple, Google, Email)' },
  { label: 'AI', value: 'DeepSeek via OpenRouter' },
  { label: 'Infra', value: 'GKE Autopilot · Cloud SQL · Vercel-style CI' },
];

export default function EHRLandingPage() {
  return (
    <main className="bg-background min-h-screen">
      <Header />

      {/* Hero */}
      <section className="pt-24 pb-16 border-b border-foreground/5">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-sm text-accent uppercase tracking-wider mb-4">
            Gigabox Apps · EHR
          </div>
          <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-6 leading-tight">
            AI-native electronic health records.
          </h1>
          <p className="text-xl text-foreground/70 max-w-3xl mb-8 leading-relaxed">
            Gigabox EHR is what an electronic health records platform looks like when
            humans design it and AI builds, ships, and operates everything else. Patient
            portal, scheduling, telehealth, lab orders, prescriptions, referrals, and
            AI-generated visit summaries — all in one app.
          </p>

          <div className="flex flex-wrap gap-4 mb-12">
            <Link
              href="https://ehr.gigabox.ai"
              className="inline-flex items-center px-6 py-3 bg-accent text-white font-semibold rounded-lg hover:bg-accent/90 transition-colors"
            >
              Open the web app
              <svg
                className="w-4 h-4 ml-2"
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
            </Link>
            <a
              href="mailto:info@gigabox.ai?subject=Gigabox%20EHR%20TestFlight%20access"
              className="inline-flex items-center px-6 py-3 border-2 border-accent text-accent font-semibold rounded-lg hover:bg-accent hover:text-white transition-all"
            >
              Request TestFlight access
            </a>
          </div>

          <div className="inline-flex items-start gap-3 p-4 bg-amber-50 border border-amber-200 rounded-lg max-w-3xl">
            <svg
              className="w-5 h-5 text-amber-600 flex-shrink-0 mt-0.5"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={2}
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M12 9v3.75m9-.75a9 9 0 11-18 0 9 9 0 0118 0zm-9 3.75h.008v.008H12v-.008z"
              />
            </svg>
            <div className="text-sm text-amber-900">
              <strong>Research and development product.</strong> Patient profiles shown in
              the app are fictional. Gigabox EHR is not yet certified for use with real
              protected health information and is not a substitute for clinical judgment.
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-16 border-b border-foreground/5">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            What&apos;s inside
          </h2>
          <p className="text-lg text-foreground/70 max-w-3xl mb-12">
            Six modules, all production-grade, all built end-to-end by AI.
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
            A modern stack, chosen by AI, deployed by AI, operated by AI.
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
              Electronic health records are a notoriously hard category. The incumbents
              are slow, expensive, ugly, and built on technology decades old. Every clinic
              we&apos;ve talked to has a story about wrestling their EHR.
            </p>
            <p>
              We wanted to know what an EHR would look like if a small team designed it
              from scratch and AI did the rest of the work. So we built one. The result
              is Gigabox EHR — a working demonstration with a patient portal, scheduling,
              telehealth, lab orders, prescriptions, referrals, AI-generated visit
              summaries, and a native iOS app, all developed and deployed without humans
              writing production code.
            </p>
            <p>
              Gigabox EHR is currently a research and development product. The patient
              profiles shown in the app are fictional. We are not yet processing real
              protected health information. When that changes, we will update our privacy
              policy and notify active users.
            </p>
          </div>
        </div>
      </section>

      {/* Legal links */}
      <section className="py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-semibold text-foreground mb-6">Legal & Support</h2>
          <div className="flex flex-wrap gap-6 text-sm">
            <Link
              href="/apps/ehr/privacy"
              className="text-accent hover:text-accent/80 underline underline-offset-4"
            >
              Privacy Policy
            </Link>
            <Link
              href="/apps/ehr/terms"
              className="text-accent hover:text-accent/80 underline underline-offset-4"
            >
              Terms of Service
            </Link>
            <Link
              href="/apps/ehr/support"
              className="text-accent hover:text-accent/80 underline underline-offset-4"
            >
              Support
            </Link>
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
