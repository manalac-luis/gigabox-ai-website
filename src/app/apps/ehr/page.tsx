import Image from 'next/image';
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

const screenshots = [
  {
    src: '/apps/ehr/screenshots/Login.png',
    alt: 'Gigabox EHR mobile — sign in screen',
    caption: 'Sign in',
    detail: 'Apple, Google, or email',
  },
  {
    src: '/apps/ehr/screenshots/Home.png',
    alt: 'Gigabox EHR mobile — patient home dashboard',
    caption: 'Home',
    detail: 'Next appointment, meds, visits',
  },
  {
    src: '/apps/ehr/screenshots/Appointments.png',
    alt: 'Gigabox EHR mobile — appointments list',
    caption: 'Appointments',
    detail: 'Upcoming and past visits',
  },
  {
    src: '/apps/ehr/screenshots/Records.png',
    alt: 'Gigabox EHR mobile — medical records',
    caption: 'Records',
    detail: 'Visit history and AI summaries',
  },
  {
    src: '/apps/ehr/screenshots/Patients.png',
    alt: 'Gigabox EHR mobile — patient picker',
    caption: 'Switch patient',
    detail: 'Multi-patient households',
  },
  {
    src: '/apps/ehr/screenshots/Settings.png',
    alt: 'Gigabox EHR mobile — settings screen',
    caption: 'Settings',
    detail: 'Profile and account',
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
          <p className="text-xl text-foreground/70 max-w-3xl mb-6 leading-relaxed">
            Gigabox EHR is what an electronic health records platform looks like when
            humans design it and AI builds, ships, and operates everything else. Patient
            portal, scheduling, telehealth, lab orders, prescriptions, referrals, and
            AI-generated visit summaries — all in one app.
          </p>

          <div className="text-sm font-semibold text-foreground/60 uppercase tracking-wider mb-4">
            Available on the web and iOS
          </div>

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
              Get the iOS app
              <svg
                className="w-4 h-4 ml-2"
                fill="currentColor"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path d="M17.05 20.28c-.98.95-2.05.8-3.08.35-1.09-.46-2.09-.48-3.24 0-1.44.62-2.2.44-3.06-.35C2.79 15.25 3.51 7.59 9.05 7.31c1.35.07 2.29.74 3.08.8 1.18-.24 2.31-.93 3.57-.84 1.51.12 2.65.72 3.4 1.8-3.12 1.87-2.38 5.98.48 7.13-.57 1.5-1.31 2.99-2.54 4.09zM12.03 7.25c-.15-2.23 1.66-4.07 3.74-4.25.29 2.58-2.34 4.5-3.74 4.25z" />
              </svg>
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

      {/* Get the app */}
      <section className="py-16 border-b border-foreground/5">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Get the app
          </h2>
          <p className="text-lg text-foreground/70 max-w-3xl mb-12">
            Gigabox EHR runs in any modern browser and as a native iOS app. Same
            account, same data — sign in once and switch devices seamlessly.
          </p>

          <div className="grid gap-6 md:grid-cols-2 max-w-5xl">
            {/* Web card */}
            <div className="p-8 bg-white border border-foreground/10 rounded-xl flex flex-col">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 rounded-lg bg-accent/10 flex items-center justify-center">
                  <svg
                    className="w-6 h-6 text-accent"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={2}
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M12 21a9.004 9.004 0 008.716-6.747M12 21a9.004 9.004 0 01-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 017.843 4.582M12 3a8.997 8.997 0 00-7.843 4.582m15.686 0A11.953 11.953 0 0112 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0121 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0112 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 013 12c0-1.605.42-3.113 1.157-4.418"
                    />
                  </svg>
                </div>
                <div>
                  <div className="text-sm font-semibold text-foreground/60 uppercase tracking-wider">
                    Web app
                  </div>
                  <div className="text-xl font-semibold text-foreground">
                    ehr.gigabox.ai
                  </div>
                </div>
              </div>
              <p className="text-sm text-foreground/70 leading-relaxed mb-6 flex-1">
                The full EHR — provider dashboard, scheduling, encounter workflow,
                telehealth, orders, referrals, and analytics. Works in any modern
                browser on desktop, tablet, or phone.
              </p>
              <Link
                href="https://ehr.gigabox.ai"
                className="inline-flex items-center justify-center px-5 py-2.5 bg-accent text-white text-sm font-semibold rounded-lg hover:bg-accent/90 transition-colors"
              >
                Open ehr.gigabox.ai
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
            </div>

            {/* iOS card */}
            <div className="p-8 bg-white border border-foreground/10 rounded-xl flex flex-col">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 rounded-lg bg-accent/10 flex items-center justify-center">
                  <svg
                    className="w-6 h-6 text-accent"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                  >
                    <path d="M17.05 20.28c-.98.95-2.05.8-3.08.35-1.09-.46-2.09-.48-3.24 0-1.44.62-2.2.44-3.06-.35C2.79 15.25 3.51 7.59 9.05 7.31c1.35.07 2.29.74 3.08.8 1.18-.24 2.31-.93 3.57-.84 1.51.12 2.65.72 3.4 1.8-3.12 1.87-2.38 5.98.48 7.13-.57 1.5-1.31 2.99-2.54 4.09zM12.03 7.25c-.15-2.23 1.66-4.07 3.74-4.25.29 2.58-2.34 4.5-3.74 4.25z" />
                  </svg>
                </div>
                <div>
                  <div className="text-sm font-semibold text-foreground/60 uppercase tracking-wider">
                    iOS app
                  </div>
                  <div className="text-xl font-semibold text-foreground">
                    TestFlight beta
                  </div>
                </div>
              </div>
              <p className="text-sm text-foreground/70 leading-relaxed mb-6 flex-1">
                Native iOS patient app with Sign in with Apple, push notifications,
                and offline-aware caching. Currently in closed beta on TestFlight —
                email us and we&apos;ll send an invite.
              </p>
              <a
                href="mailto:info@gigabox.ai?subject=Gigabox%20EHR%20TestFlight%20access"
                className="inline-flex items-center justify-center px-5 py-2.5 border-2 border-accent text-accent text-sm font-semibold rounded-lg hover:bg-accent hover:text-white transition-all"
              >
                Request TestFlight invite
              </a>
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

      {/* Screenshots */}
      <section className="py-16 border-b border-foreground/5 bg-foreground/[0.02]">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            See it in action
          </h2>
          <p className="text-lg text-foreground/70 max-w-3xl mb-12">
            A look at the native iOS patient app. (Preview build — screens and
            copy will evolve before the App Store launch.)
          </p>

          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {screenshots.map((shot) => (
              <figure key={shot.src} className="flex flex-col items-center">
                <div className="w-full max-w-[260px] rounded-[2rem] overflow-hidden border border-foreground/10 bg-white shadow-sm">
                  <Image
                    src={shot.src}
                    alt={shot.alt}
                    width={1179}
                    height={2556}
                    sizes="(max-width: 640px) 80vw, (max-width: 1024px) 40vw, 260px"
                    className="w-full h-auto"
                  />
                </div>
                <figcaption className="mt-4 text-center">
                  <div className="text-base font-semibold text-foreground">
                    {shot.caption}
                  </div>
                  <div className="text-sm text-foreground/60">{shot.detail}</div>
                </figcaption>
              </figure>
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
