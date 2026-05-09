import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export const metadata = {
  title: 'OpenMAIC | Turn any topic into an interactive AI classroom',
  description:
    'Upload a PDF or describe a topic. OpenMAIC generates a multi-agent classroom with AI teachers, animated slides, quizzes, 3D simulations, whiteboards, and mind maps — on your own subdomain.',
};

const features = [
  {
    title: 'One-Click Lesson Generation',
    description:
      'Describe a topic or upload a PDF. OpenMAIC generates a structured lesson with slides, narration scripts, teaching notes, and interactive elements — all in one pass.',
  },
  {
    title: 'Multi-Agent Classrooms',
    description:
      'AI teachers and classmates deliver content, ask questions, and discuss concepts together. Characters draw on whiteboards, highlight key areas, and guide learners through the material.',
  },
  {
    title: 'Deep Interactive Mode',
    description:
      '3D visualizations, process simulations, knowledge-based mini-games, conceptual mind maps, and in-browser coding — five types of hands-on exploration generated from your content.',
  },
  {
    title: 'Quizzes with AI Grading',
    description:
      'Auto-generated quizzes with multiple question types test comprehension after each section. The AI grades answers, explains mistakes, and adapts follow-up questions.',
  },
  {
    title: 'Whiteboard & Annotations',
    description:
      'Interactive whiteboards where AI agents draw diagrams, write formulas, and annotate in real time. Students can draw alongside the AI teacher during the lesson.',
  },
  {
    title: 'Export Anywhere',
    description:
      'Export generated classrooms to editable PowerPoint (.pptx) or interactive HTML pages. Share lessons with students who don\'t have access to the platform.',
  },
];

const workflow = [
  {
    step: '01',
    title: 'Describe or upload',
    description: 'Enter a topic like "quantum entanglement for undergrads" or upload a PDF, textbook chapter, or research paper.',
  },
  {
    step: '02',
    title: 'AI generates the classroom',
    description: 'OpenMAIC creates an outline, then generates each scene — slides, quizzes, simulations, whiteboard sequences, and agent dialogue.',
  },
  {
    step: '03',
    title: 'Enter the classroom',
    description: 'An AI teacher presents the lesson with animated slides and narration. Classmates ask questions. Interactive elements appear at key moments.',
  },
  {
    step: '04',
    title: 'Explore and interact',
    description: 'Pause to try a 3D simulation, solve a quiz, explore a mind map, run code in the browser, or draw on the whiteboard alongside the AI.',
  },
];

const stack = [
  { label: 'Runtime', value: 'Next.js 16 \u00b7 Node.js 22' },
  { label: 'AI Orchestration', value: 'LangGraph multi-agent pipeline' },
  { label: 'Inference', value: 'DeepSeek V4 Flash via Sovereign' },
  { label: 'Auth', value: 'Built-in access code (per-instance)' },
  { label: 'Storage', value: 'File-based JSON (classrooms + jobs)' },
  { label: 'Proxy', value: 'nginx \u00b7 wildcard SSL \u00b7 WebSocket' },
  { label: 'Isolation', value: 'systemd \u00b7 768MB MemoryMax' },
  { label: 'Infra', value: 'GCE \u00b7 acme.sh DNS-01 \u00b7 ZeroSSL' },
];

export default function MaicLandingPage() {
  return (
    <main className="bg-background min-h-screen">
      <Header />

      {/* Hero */}
      <section className="pt-24 pb-16 border-b border-foreground/5">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-3 mb-4">
            <span className="text-sm text-accent uppercase tracking-wider">
              Gigabox Apps &middot; OpenMAIC
            </span>
            <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-semibold uppercase tracking-wider bg-green-100 text-green-800 border border-green-200">
              Live
            </span>
          </div>
          <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-6 leading-tight max-w-4xl">
            Turn any topic into an interactive AI classroom.
          </h1>
          <p className="text-xl text-foreground/70 max-w-3xl mb-8 leading-relaxed">
            Upload a PDF or describe a subject. OpenMAIC generates a multi-agent
            classroom where AI teachers present animated slides, draw on
            whiteboards, run 3D simulations, quiz students, and guide discussions
            &mdash; all on your own subdomain with zero setup.
          </p>

          <div className="flex flex-wrap gap-4 mb-4">
            <Link
              href="/apps/maic/request"
              className="inline-flex items-center justify-center min-w-[220px] px-6 py-3 bg-accent text-white font-semibold rounded-lg hover:bg-accent/90 transition-colors"
            >
              Request an instance
            </Link>
            <a
              href="mailto:info@gigabox.ai?subject=OpenMAIC%20access%20request"
              className="inline-flex items-center justify-center min-w-[220px] px-6 py-3 border-2 border-accent text-accent font-semibold rounded-lg hover:bg-accent hover:text-white transition-all"
            >
              Contact us
            </a>
          </div>

          <div className="text-sm text-foreground/50 mb-12">
            <span className="font-mono">maic.gigabox.ai</span>
            <span className="mx-2">&middot;</span>
            <a
              href="https://github.com/THU-MAIC/OpenMAIC"
              target="_blank"
              rel="noopener noreferrer"
              className="text-accent hover:text-accent/80 underline underline-offset-4"
            >
              Open source (THU-MAIC)
            </a>
          </div>
        </div>
      </section>

      {/* How it works */}
      <section className="py-16 border-b border-foreground/5">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            How it works
          </h2>
          <p className="text-lg text-foreground/70 max-w-3xl mb-12">
            From a topic to a full interactive classroom in four steps.
          </p>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {workflow.map((item) => (
              <div key={item.step} className="relative">
                <div className="text-5xl font-bold text-accent/10 mb-2">
                  {item.step}
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-2">
                  {item.title}
                </h3>
                <p className="text-sm text-foreground/70 leading-relaxed">
                  {item.description}
                </p>
              </div>
            ))}
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
            Every classroom is a rich, multi-modal learning experience &mdash;
            not a slideshow with a chatbot bolted on.
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
            Each instance is a Next.js standalone process with LangGraph agent
            orchestration, managed by systemd and fronted by nginx with wildcard SSL.
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
            Why we host it
          </h2>
          <div className="space-y-4 text-foreground/80 leading-relaxed">
            <p>
              OpenMAIC is open source from Tsinghua University&apos;s MAIC lab.
              It turns any topic into a genuine classroom experience &mdash; not
              a chatbot conversation, but a structured lesson with AI teachers
              who present slides, draw on whiteboards, run simulations, and quiz
              students. The multi-agent orchestration makes it one of the most
              ambitious open-source education tools we&apos;ve seen.
            </p>
            <p>
              The problem is that running it requires Node.js 22, pnpm, API key
              management, SSL configuration, and build maintenance. Most
              educators and teams want the classrooms, not the DevOps. We
              package it as a managed service: one subdomain, one access code,
              inference routed through Sovereign so there are no external API
              keys to manage.
            </p>
            <p>
              Each instance is fully isolated &mdash; its own systemd process
              with memory limits, its own data directory, its own access code.
              The platform was built and deployed by AI, from the provisioning
              scripts to the fleet management CLI to the wildcard SSL
              automation.
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
