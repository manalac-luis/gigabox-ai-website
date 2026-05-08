'use client';

import Link from 'next/link';
import { useEffect } from 'react';

const apps = [
  {
    name: 'Gigabox EHR',
    tagline: 'AI-native electronic health records.',
    description:
      'A complete patient portal, scheduling, telehealth, lab orders, prescriptions, and AI-generated visit summaries — running in production on web and iOS.',
    status: 'Live',
    href: '/apps/ehr',
  },
];

const quotes = [
  {
    quote: 'We have entered the Singularity.',
    quote2: '2026 is the year of the Singularity.',
    name: 'Elon Musk',
    title: 'CEO, Tesla & xAI',
    source: 'X, January 2026',
  },
  {
    quote: 'We are now confident we know how to build AGI as we have traditionally understood it.',
    name: 'Sam Altman',
    title: 'CEO, OpenAI',
    source: 'Blog, January 2025',
  },
  {
    quote: 'AI systems will be better than almost all humans at almost everything. And then eventually better than all humans at everything, even robotics.',
    name: 'Dario Amodei',
    title: 'CEO, Anthropic',
    source: 'WSJ Davos, January 2025',
  },
  {
    quote: 'AI is one of the most profound technologies we are working on, as important or more than fire and electricity.',
    name: 'Sundar Pichai',
    title: 'CEO, Google',
    source: 'MIT Sloan, 2022',
  },
  {
    quote: 'Every single software engineer at NVIDIA uses Cursor. It has improved our productivity tremendously.',
    name: 'Jensen Huang',
    title: 'CEO, NVIDIA',
    source: 'GTC 2025',
  },
  {
    quote: 'Our long term vision is to build general intelligence, open source it responsibly, and make it widely available so everyone can benefit.',
    name: 'Mark Zuckerberg',
    title: 'CEO, Meta',
    source: 'January 2024',
  },
];

const papers = [
  { slug: 'persistent-memory-architecture', title: 'Persistent Memory Architecture', date: '2025-01-15', abstract: 'A framework for long-term memory in conversational AI agents.' },
  { slug: 'proactive-engagement-systems', title: 'Proactive Engagement Systems', date: '2025-01-10', abstract: 'Designing AI systems that initiate meaningful interactions.' },
  { slug: 'multimodal-character-generation', title: 'Multi-Modal Character Generation', date: '2025-01-05', abstract: 'Creating consistent AI personalities across text, voice, and visual modalities.' },
  { slug: 'addressing-loneliness-epidemic', title: 'Addressing the Loneliness Epidemic', date: '2024-12-20', abstract: 'How AI companions can help combat social isolation.' },
];

export default function Home() {
  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://js.hsforms.net/forms/v2.js';
    document.body.appendChild(script);

    script.addEventListener('load', () => {
      // @ts-expect-error HubSpot types not available
      if (window.hbspt) {
        // @ts-expect-error HubSpot types not available
        window.hbspt.forms.create({
          region: "na1",
          portalId: "49061441",
          formId: "0d521ccb-8401-4d88-8c66-21ccb0c9d7ad",
          target: '#hubspot-form-container',
        });
      }
    });

    return () => {
      if (script.parentNode) {
        script.parentNode.removeChild(script);
      }
    };
  }, []);

  return (
    <main>
      {/* Navigation - Light for hero */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-sm border-b border-black/5">
        <nav className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex h-16 items-center justify-between">
            <Link href="/" className="text-lg font-semibold tracking-tight text-black">
              GIGABOX AI Research
            </Link>
            <div className="hidden md:flex items-center gap-8">
              {[
                { label: 'Apps', href: '/apps' },
                { label: 'Research', href: '#research' },
                { label: 'Contact', href: '#contact' },
              ].map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  className="text-sm text-black/60 hover:text-black transition-colors"
                >
                  {item.label}
                </a>
              ))}
            </div>
          </div>
        </nav>
      </header>

      {/* Hero Section - White with Gradient Text */}
      <section className="min-h-screen flex items-center pt-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="mx-auto max-w-7xl w-full py-24">
          <div className="max-w-5xl">
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight mb-6 leading-[1.1]">
              <span className="text-black">Designed by Humans.</span><br />
              <span className="bg-gradient-to-r from-[#3b82f6] to-[#8b5cf6] bg-clip-text text-transparent">
                100% Built and Operated by AI.
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-[#4a4a4a] mb-10 max-w-2xl leading-relaxed">
              We&apos;re proving that AI can build and run production software.<br />
              Our products are the proof.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link
                href="/apps"
                className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-[#3b82f6] to-[#8b5cf6] text-white font-semibold rounded-lg hover:opacity-90 transition-opacity"
              >
                See Our Apps
              </Link>
              <a
                href="#research"
                className="inline-flex items-center px-8 py-4 border-2 border-[#3b82f6] text-[#3b82f6] font-semibold rounded-lg hover:bg-[#3b82f6] hover:text-white transition-all"
              >
                Our Research
              </a>
            </div>
          </div>

          {/* Hero image */}
          <div className="mt-20 relative h-64 md:h-96 rounded-2xl overflow-hidden">
            <img
              src="/hero.jpg"
              alt="AI agents connecting with humans"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </section>

      {/* === DARK SECTIONS START === */}

      {/* Apps Section - Dark */}
      <section id="apps" className="py-24 bg-[#0a0a0a] scroll-mt-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              <span className="bg-gradient-to-r from-[#3b82f6] to-[#8b5cf6] bg-clip-text text-transparent">Our Apps</span>
            </h2>
            <p className="text-xl md:text-2xl text-white/60">
              Production software, built and operated by AI.
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {apps.map((app) => (
              <Link
                key={app.name}
                href={app.href}
                className="block bg-[#111111] p-8 rounded-xl border border-white/10 hover:border-white/30 transition-colors"
              >
                <div className="flex items-center justify-between mb-3">
                  <span className="text-2xl font-semibold text-white">{app.name}</span>
                  <span className="inline-flex items-center gap-2 text-xs text-white/60">
                    <span className="w-2 h-2 rounded-full bg-green-500"></span>
                    {app.status}
                  </span>
                </div>
                <p className="text-base font-medium bg-gradient-to-r from-[#3b82f6] to-[#8b5cf6] bg-clip-text text-transparent mb-4">
                  {app.tagline}
                </p>
                <p className="text-white/60 leading-relaxed mb-6">
                  {app.description}
                </p>
                <span className="inline-flex items-center text-white/80 font-medium">
                  Learn more
                  <svg className="w-4 h-4 ml-1" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
                  </svg>
                </span>
              </Link>
            ))}

            <div className="bg-[#111111] p-8 rounded-xl border border-dashed border-white/10 flex items-center justify-center text-center">
              <div>
                <p className="text-white/60 mb-1">More verticals in development.</p>
                <p className="text-sm text-white/40">Same methodology, different domains.</p>
              </div>
            </div>
          </div>

          <div className="mt-12 text-center">
            <Link
              href="/apps"
              className="inline-flex items-center px-8 py-4 bg-white text-[#0a0a0a] font-semibold rounded-lg hover:bg-white/90 transition-colors"
            >
              View all apps
              <svg className="w-4 h-4 ml-2" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
              </svg>
            </Link>
          </div>
        </div>
      </section>

      {/* Quotes Section - Dark */}
      <section className="py-24 bg-[#0a0a0a]">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              What They&apos;re Saying
            </h2>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {quotes.map((q) => (
              <div key={q.name} className="bg-[#111111] p-6 rounded-xl border border-white/10">
                <p className="text-white/80 italic mb-1 leading-relaxed">
                  &ldquo;{q.quote}&rdquo;
                </p>
                {q.quote2 && (
                  <p className="text-white/80 italic mb-4 leading-relaxed">
                    &ldquo;{q.quote2}&rdquo;
                  </p>
                )}
                {!q.quote2 && <div className="mb-4" />}
                <div>
                  <div className="font-semibold text-white">{q.name}</div>
                  <div className="text-sm text-white/50">{q.title}</div>
                  <div className="text-sm text-white/40">{q.source}</div>
                </div>
              </div>
            ))}
          </div>

          <p className="mt-12 text-center text-xl text-white/60">
            We believe them.<br />
            <span className="font-semibold bg-gradient-to-r from-[#3b82f6] to-[#8b5cf6] bg-clip-text text-transparent">We&apos;re building accordingly.</span>
          </p>
        </div>
      </section>

      {/* Research Section - Slightly lighter */}
      <section id="research" className="py-24 bg-[#111111] scroll-mt-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex items-end justify-between mb-12">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-2">
                Research
              </h2>
              <p className="text-xl text-white/60">
                We publish what we learn.
              </p>
            </div>
            <Link
              href="/research"
              className="hidden sm:inline-flex items-center text-white hover:text-white/80 font-medium"
            >
              View All Research
              <svg className="w-4 h-4 ml-1" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
              </svg>
            </Link>
          </div>

          <div className="grid gap-6 md:grid-cols-2">
            {papers.map((paper) => (
              <Link
                key={paper.slug}
                href={`/research/${paper.slug}`}
                className="block bg-[#0a0a0a] p-6 rounded-xl border border-white/10 hover:border-white/20 transition-colors"
              >
                <h3 className="text-xl font-semibold text-white mb-2">{paper.title}</h3>
                <p className="text-white/60 text-sm mb-3">{paper.abstract}</p>
                <span className="text-white/40 text-sm">{paper.date}</span>
              </Link>
            ))}
          </div>

          <Link
            href="/research"
            className="sm:hidden mt-8 inline-flex items-center text-white hover:text-white/80 font-medium"
          >
            View All Research
            <svg className="w-4 h-4 ml-1" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
            </svg>
          </Link>
        </div>
      </section>

      {/* Contact Section - Slightly lighter */}
      <section id="contact" className="py-24 bg-[#111111] scroll-mt-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-semibold text-center text-white mb-4">
            Get in Touch
          </h2>
          <p className="text-center text-white/60 mb-2 max-w-2xl mx-auto">
            Building something with AI?<br />Let&apos;s talk.
          </p>
          <p className="text-center mb-8">
            <a href="mailto:info@gigabox.ai" className="text-white hover:text-white/80 transition-colors">info@gigabox.ai</a>
          </p>
          <div className="max-w-2xl mx-auto bg-[#0a0a0a] p-8 rounded-lg border border-white/10">
            <div id="hubspot-form-container"></div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#0a0a0a] border-t border-white/10 py-12">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <div className="text-sm text-white/50">
              &copy; 2026 Gigabox. All rights reserved.
            </div>
            <div className="flex items-center gap-6">
              <Link href="/apps" className="text-sm text-white/50 hover:text-white transition-colors">
                Apps
              </Link>
              <Link href="/privacy" className="text-sm text-white/50 hover:text-white transition-colors">
                Privacy
              </Link>
              <Link href="/terms" className="text-sm text-white/50 hover:text-white transition-colors">
                Terms
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </main>
  );
}
