import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ResearchCard from '@/components/ResearchCard';
import Team from '@/components/Team';
import ContactForm from '@/components/ContactForm';
import Link from 'next/link';
import { getAllPapers } from '@/lib/markdown';

const agents = [
  {
    name: 'Luna',
    role: 'Global Concierge',
    quote: '"I help you navigate the world—finding the best restaurants, planning trips, and handling the details so you can focus on living."',
  },
  {
    name: 'Sofia',
    role: 'Language Teacher',
    quote: '"Learning a language should feel like conversation, not homework. I adapt to how you learn and keep you coming back."',
  },
  {
    name: 'Alex',
    role: 'Life Coach',
    quote: '"I\'m here to help you think through decisions, build better habits, and stay accountable to the life you want."',
  },
];

const platformItems = [
  { title: 'Code', description: 'AI writes production-ready code from specifications.' },
  { title: 'Review', description: 'AI reviews code for quality, security, and performance.' },
  { title: 'Deploy', description: 'AI manages deployments and infrastructure.' },
  { title: 'Monitor', description: 'AI monitors systems and responds to issues.' },
];

const quotes = [
  { name: 'Elon Musk', title: 'CEO, Tesla & SpaceX', quote: 'AI will be the most transformative technology in human history.' },
  { name: 'Sam Altman', title: 'CEO, OpenAI', quote: 'AI will be the most important technology humanity has ever created.' },
  { name: 'Dario Amodei', title: 'CEO, Anthropic', quote: 'We\'re building AI systems that could eventually do almost any cognitive task a human can do.' },
  { name: 'Sundar Pichai', title: 'CEO, Google', quote: 'AI is probably the most important thing humanity has ever worked on.' },
  { name: 'Jensen Huang', title: 'CEO, NVIDIA', quote: 'Software is eating the world, but AI is going to eat software.' },
  { name: 'Mark Zuckerberg', title: 'CEO, Meta', quote: 'AI agents are going to be the next major platform shift.' },
];

export default function Home() {
  const papers = getAllPapers().slice(0, 4);

  return (
    <main className="bg-background">
      <Header />

      {/* Hero Section */}
      <section className="pt-32 pb-24 px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="max-w-4xl">
            <h1 className="text-5xl md:text-7xl font-bold tracking-tight text-foreground mb-6">
              Designed by Humans.<br />
              100% Built and Operated by AI.
            </h1>
            <p className="text-xl md:text-2xl text-foreground/70 mb-8 max-w-2xl">
              We&apos;re proving that AI can build and run production software.<br />
              Our products are the proof.
            </p>
            <div className="flex flex-wrap gap-4">
              <a
                href="#aura"
                className="inline-flex items-center px-6 py-3 bg-accent text-white font-medium rounded-lg hover:bg-accent/90 transition-colors"
              >
                Meet Aura
              </a>
              <a
                href="#research"
                className="inline-flex items-center px-6 py-3 border border-foreground/20 text-foreground font-medium rounded-lg hover:bg-foreground/5 transition-colors"
              >
                Our Research
              </a>
            </div>
          </div>

          {/* Hero visual */}
          <div className="mt-16 relative h-64 md:h-96 rounded-2xl overflow-hidden">
            <img
              src="/hero.jpg"
              alt="AI agents connecting with humans - network visualization"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </section>

      {/* Aura Section */}
      <section id="aura" className="py-24 bg-white scroll-mt-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
              Aura
            </h2>
            <p className="text-xl md:text-2xl text-foreground/70">
              AI companions for life.
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-3">
            {agents.map((agent) => (
              <div key={agent.name} className="bg-background p-8 rounded-xl border border-foreground/10">
                <div className="mb-4">
                  <span className="text-2xl font-semibold text-foreground">{agent.name}</span>
                  <span className="text-foreground/50 mx-2">—</span>
                  <span className="text-foreground/70">{agent.role}</span>
                </div>
                <p className="text-foreground/70 italic leading-relaxed">
                  {agent.quote}
                </p>
              </div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <a
              href="#"
              className="inline-flex items-center px-6 py-3 bg-foreground text-background font-medium rounded-lg hover:bg-foreground/90 transition-colors"
            >
              <svg className="w-5 h-5 mr-2" viewBox="0 0 24 24" fill="currentColor">
                <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/>
              </svg>
              Coming Soon to App Store
            </a>
          </div>
        </div>
      </section>

      {/* OneUI Platform Section */}
      <section id="platform" className="py-24 scroll-mt-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
              The Gigabox OneUI Platform
            </h2>
            <p className="text-xl md:text-2xl text-foreground/70 mb-4">
              This is how we build.
            </p>
            <p className="text-lg text-foreground/60">
              Humans design. AI builds everything else.
            </p>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {platformItems.map((item) => (
              <div key={item.title} className="bg-white p-6 rounded-xl border border-foreground/10">
                <h3 className="text-xl font-semibold text-foreground mb-2">{item.title}</h3>
                <p className="text-foreground/70">{item.description}</p>
              </div>
            ))}
          </div>

          <p className="mt-12 text-center text-lg text-foreground/70">
            <span className="font-semibold text-foreground">Aura was built this way.</span>
          </p>
        </div>
      </section>

      {/* What They're Saying Section */}
      <section className="py-24 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
              What They&apos;re Saying
            </h2>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {quotes.map((quote) => (
              <div key={quote.name} className="bg-background p-6 rounded-xl border border-foreground/10">
                <p className="text-foreground/80 italic mb-4 leading-relaxed">
                  &ldquo;{quote.quote}&rdquo;
                </p>
                <div>
                  <div className="font-semibold text-foreground">{quote.name}</div>
                  <div className="text-sm text-foreground/60">{quote.title}</div>
                </div>
              </div>
            ))}
          </div>

          <p className="mt-12 text-center text-xl text-foreground/70">
            We believe them. We&apos;re building accordingly.
          </p>
        </div>
      </section>

      {/* Research Section */}
      <section id="research" className="py-24 scroll-mt-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex items-end justify-between mb-12">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-2">
                Research
              </h2>
              <p className="text-xl text-foreground/70">
                We publish what we learn.
              </p>
            </div>
            <Link
              href="/research"
              className="hidden sm:inline-flex items-center text-accent hover:underline font-medium"
            >
              View All Research
              <svg className="w-4 h-4 ml-1" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
              </svg>
            </Link>
          </div>

          <div className="grid gap-6 md:grid-cols-2">
            {papers.map((paper) => (
              <ResearchCard
                key={paper.slug}
                slug={paper.slug}
                title={paper.title}
                date={paper.date}
                abstract={paper.abstract}
              />
            ))}
          </div>

          <Link
            href="/research"
            className="sm:hidden mt-8 inline-flex items-center text-accent hover:underline font-medium"
          >
            View All Research
            <svg className="w-4 h-4 ml-1" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
            </svg>
          </Link>
        </div>
      </section>

      {/* Team Section */}
      <Team />

      {/* Contact Section */}
      <ContactForm />

      {/* Footer */}
      <Footer />
    </main>
  );
}
