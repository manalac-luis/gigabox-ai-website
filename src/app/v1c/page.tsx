'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useEffect } from 'react';

const agents = [
  {
    name: 'Luna',
    role: 'Global Concierge',
    quote: '"She found a Michelin spot 1.5 blocks away. She knew I was with H."',
  },
  {
    name: 'Sofia',
    role: 'Language Teacher',
    quote: '"She remembers my mistakes better than any teacher."',
  },
  {
    name: 'Alex',
    role: 'Life Coach',
    quote: '"Available at 3am. Actually wants me to get better."',
  },
];

const platformItems = [
  { title: 'Code', detail: '100% AI.' },
  { title: 'Review', detail: 'Human + AI.' },
  { title: 'Deploy', detail: '100% AI.' },
  { title: 'Monitor', detail: '100% AI.' },
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

const team = [
  { name: 'Luis', photo: '/team2/Luis.jpg', title: 'Architecture & Systems', linkedin: 'https://www.linkedin.com/in/luis-manalac-300843106/' },
  { name: 'Eric', photo: '/team2/Eric.jpg', title: 'AI & Engineering', linkedin: '#' },
  { name: 'Victor', photo: '/team2/Victor.jpg', title: 'Data & Infrastructure', linkedin: '#' },
  { name: 'Nikki', photo: '/team2/Nikki.jpg', title: 'Partnerships', linkedin: 'https://www.linkedin.com/in/nikkibreedveld/' },
  { name: 'Hannah', photo: '/team2/Hannah.jpg', title: 'Design & UX', linkedin: 'https://www.linkedin.com/in/hannahhallbrown/' },
];

const papers = [
  { slug: 'persistent-memory-architecture', title: 'Persistent Memory Architecture', date: '2025-01-15', abstract: 'A framework for long-term memory in conversational AI agents.' },
  { slug: 'proactive-engagement-systems', title: 'Proactive Engagement Systems', date: '2025-01-10', abstract: 'Designing AI systems that initiate meaningful interactions.' },
  { slug: 'multimodal-character-generation', title: 'Multi-Modal Character Generation', date: '2025-01-05', abstract: 'Creating consistent AI personalities across text, voice, and visual modalities.' },
  { slug: 'addressing-loneliness-epidemic', title: 'Addressing the Loneliness Epidemic', date: '2024-12-20', abstract: 'How AI companions can help combat social isolation.' },
];

function LinkedInIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" fill="currentColor" {...props}>
      <path d="M4.98 3.5a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5ZM4.5 9h3v12h-3V9Zm7 0h2.86v1.64h.04c.4-.76 1.38-1.56 2.84-1.56 3.04 0 3.6 2 3.6 4.6V21h-3v-5.4c0-1.28-.02-2.92-1.78-2.92-1.78 0-2.06 1.39-2.06 2.83V21h-3V9Z"/>
    </svg>
  );
}

export default function V1cGradientText() {
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
    <main className="bg-white">
      {/* Navigation */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-sm border-b border-black/5">
        <nav className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex h-16 items-center justify-between">
            <Link href="/" className="text-lg font-semibold tracking-tight text-black">
              GIGABOX
            </Link>
            <div className="hidden md:flex items-center gap-8">
              {['Aura', 'Platform', 'Research', 'Team', 'Contact'].map((item) => (
                <a
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  className="text-sm text-black/60 hover:text-black transition-colors"
                >
                  {item}
                </a>
              ))}
            </div>
          </div>
        </nav>
      </header>

      {/* Hero Section - Gradient Text */}
      <section className="min-h-screen flex items-center pt-16 px-4 sm:px-6 lg:px-8">
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
              <a
                href="#aura"
                className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-[#3b82f6] to-[#8b5cf6] text-white font-semibold rounded-lg hover:opacity-90 transition-opacity"
              >
                Meet Aura
              </a>
              <a
                href="#research"
                className="inline-flex items-center px-8 py-4 border-2 border-black/20 text-black font-semibold rounded-lg hover:bg-black/5 transition-colors"
              >
                Our Research
              </a>
            </div>
          </div>

          {/* Hero image below */}
          <div className="mt-20 relative h-64 md:h-96 rounded-2xl overflow-hidden">
            <img
              src="/hero.jpg"
              alt="AI agents connecting with humans"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </section>

      {/* Aura Section */}
      <section id="aura" className="py-24 bg-[#fafafa] scroll-mt-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              <span className="bg-gradient-to-r from-[#3b82f6] to-[#8b5cf6] bg-clip-text text-transparent">Aura</span>
            </h2>
            <p className="text-xl md:text-2xl text-black/60">
              AI companions for life.
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-3">
            {agents.map((agent) => (
              <div key={agent.name} className="bg-white p-8 rounded-xl border border-black/10 shadow-sm">
                <div className="mb-4">
                  <span className="text-2xl font-semibold bg-gradient-to-r from-[#3b82f6] to-[#8b5cf6] bg-clip-text text-transparent">{agent.name}</span>
                  <span className="text-black/40 mx-2">—</span>
                  <span className="text-black/60">{agent.role}</span>
                </div>
                <p className="text-black/70 italic leading-relaxed">
                  {agent.quote}
                </p>
              </div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <a
              href="#"
              className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-[#3b82f6] to-[#8b5cf6] text-white font-semibold rounded-lg hover:opacity-90 transition-opacity"
            >
              <svg className="w-5 h-5 mr-2" viewBox="0 0 24 24" fill="currentColor">
                <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/>
              </svg>
              Download on App Store
            </a>
          </div>
        </div>
      </section>

      {/* Platform Section */}
      <section id="platform" className="py-24 bg-white scroll-mt-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-black mb-4">
              The Gigabox OneUI Platform
            </h2>
            <p className="text-xl md:text-2xl text-black/60 mb-2">
              This is how we build.
            </p>
            <p className="text-lg text-black/50">
              Humans design.<br />AI builds everything else.
            </p>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4 max-w-4xl mx-auto">
            {platformItems.map((item) => (
              <div key={item.title} className="bg-[#fafafa] p-6 rounded-xl border border-black/10 text-center hover:border-[#8b5cf6]/30 transition-colors">
                <h3 className="text-xl font-semibold text-black mb-1">{item.title}</h3>
                <p className="text-black/60">{item.detail}</p>
              </div>
            ))}
          </div>

          <p className="mt-12 text-center text-lg text-black/60">
            <span className="font-semibold bg-gradient-to-r from-[#3b82f6] to-[#8b5cf6] bg-clip-text text-transparent">Aura was built this way.</span>
          </p>
        </div>
      </section>

      {/* Quotes Section */}
      <section className="py-24 bg-[#fafafa]">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-black mb-4">
              What They&apos;re Saying
            </h2>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {quotes.map((q) => (
              <div key={q.name} className="bg-white p-6 rounded-xl border border-black/10 shadow-sm">
                <p className="text-black/80 italic mb-1 leading-relaxed">
                  &ldquo;{q.quote}&rdquo;
                </p>
                {q.quote2 && (
                  <p className="text-black/80 italic mb-4 leading-relaxed">
                    &ldquo;{q.quote2}&rdquo;
                  </p>
                )}
                {!q.quote2 && <div className="mb-4" />}
                <div>
                  <div className="font-semibold text-black">{q.name}</div>
                  <div className="text-sm text-black/50">{q.title}</div>
                  <div className="text-sm text-black/40">{q.source}</div>
                </div>
              </div>
            ))}
          </div>

          <p className="mt-12 text-center text-xl text-black/60">
            We believe them.<br />
            <span className="font-semibold bg-gradient-to-r from-[#3b82f6] to-[#8b5cf6] bg-clip-text text-transparent">We&apos;re building accordingly.</span>
          </p>
        </div>
      </section>

      {/* Research Section */}
      <section id="research" className="py-24 bg-white scroll-mt-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex items-end justify-between mb-12">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold text-black mb-2">
                Research
              </h2>
              <p className="text-xl text-black/60">
                We publish what we learn.
              </p>
            </div>
            <Link
              href="/research"
              className="hidden sm:inline-flex items-center bg-gradient-to-r from-[#3b82f6] to-[#8b5cf6] bg-clip-text text-transparent hover:opacity-80 font-medium"
            >
              View All Research
              <svg className="w-4 h-4 ml-1 text-[#8b5cf6]" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
              </svg>
            </Link>
          </div>

          <div className="grid gap-6 md:grid-cols-2">
            {papers.map((paper) => (
              <Link
                key={paper.slug}
                href={`/research/${paper.slug}`}
                className="block bg-[#fafafa] p-6 rounded-xl border border-black/10 hover:border-[#8b5cf6]/30 hover:shadow-sm transition-all"
              >
                <h3 className="text-xl font-semibold text-black mb-2">{paper.title}</h3>
                <p className="text-black/60 text-sm mb-3">{paper.abstract}</p>
                <span className="text-black/40 text-sm">{paper.date}</span>
              </Link>
            ))}
          </div>

          <Link
            href="/research"
            className="sm:hidden mt-8 inline-flex items-center bg-gradient-to-r from-[#3b82f6] to-[#8b5cf6] bg-clip-text text-transparent hover:opacity-80 font-medium"
          >
            View All Research
            <svg className="w-4 h-4 ml-1 text-[#8b5cf6]" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
            </svg>
          </Link>
        </div>
      </section>

      {/* Team Section */}
      <section id="team" className="py-24 bg-[#fafafa] scroll-mt-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-center text-3xl md:text-4xl font-semibold tracking-tight text-black">
            Our Team
          </h2>
          <p className="mt-3 text-center text-black/60 text-lg">The humans who design.</p>

          <div className="mt-14 grid items-stretch gap-10 sm:grid-cols-2 lg:grid-cols-5">
            {team.map((m) => (
              <div key={m.name} className="flex h-full flex-col items-center text-center">
                <div className="relative mx-auto h-24 w-24 md:h-28 md:w-28">
                  <Image
                    src={m.photo}
                    alt={`${m.name} headshot`}
                    fill
                    sizes="112px"
                    className="rounded-full object-cover ring-1 ring-black/10 shadow-sm"
                  />
                </div>
                <div className="mt-4 font-semibold text-lg text-black">{m.name}</div>
                <div className="mt-2 text-sm text-black/60 leading-relaxed">
                  {m.title}
                </div>
                <Link
                  href={m.linkedin}
                  target="_blank"
                  rel="noreferrer"
                  className="mt-auto pt-4 inline-flex items-center justify-center w-9 h-9 rounded bg-gradient-to-r from-[#3b82f6] to-[#8b5cf6] text-white hover:opacity-90 transition-opacity"
                  aria-label={`LinkedIn profile for ${m.name}`}
                >
                  <LinkedInIcon className="w-4 h-4" />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-24 bg-white scroll-mt-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-semibold text-center text-black mb-4">
            Get in Touch
          </h2>
          <p className="text-center text-black/60 mb-2 max-w-2xl mx-auto">
            Building something with AI?<br />Let&apos;s talk.
          </p>
          <p className="text-center mb-8">
            <a href="mailto:info@gigabox.ai" className="bg-gradient-to-r from-[#3b82f6] to-[#8b5cf6] bg-clip-text text-transparent hover:opacity-80 transition-opacity">info@gigabox.ai</a>
          </p>
          <div className="max-w-2xl mx-auto bg-[#fafafa] p-8 rounded-lg border border-black/10">
            <div id="hubspot-form-container"></div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black text-white py-12">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <div className="text-sm text-white/70">
              &copy; 2026 Gigabox. All rights reserved.
            </div>
            <div className="flex items-center gap-6">
              <Link href="/privacy" className="text-sm text-white/70 hover:text-white transition-colors">
                Privacy
              </Link>
              <Link href="/terms" className="text-sm text-white/70 hover:text-white transition-colors">
                Terms
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </main>
  );
}
