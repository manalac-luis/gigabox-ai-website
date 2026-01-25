import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ResearchCard from '@/components/ResearchCard';
import ApplicationCard from '@/components/ApplicationCard';
import Team from '@/components/Team';
import ContactForm from '@/components/ContactForm';
import Link from 'next/link';
import { getAllPapers } from '@/lib/markdown';

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
              GIGABOX RESEARCH
            </h1>
            <p className="text-xl md:text-2xl text-foreground/70 mb-8 max-w-2xl">
              Building AI agents that democratize access to expert knowledge. We research and develop conversational AI systems that bring specialized human expertise to everyone.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link
                href="/research"
                className="inline-flex items-center px-6 py-3 bg-accent text-white font-medium rounded-lg hover:bg-accent/90 transition-colors"
              >
                View Research
              </Link>
              <a
                href="#contact"
                className="inline-flex items-center px-6 py-3 border border-foreground/20 text-foreground font-medium rounded-lg hover:bg-foreground/5 transition-colors"
              >
                Get in Touch
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

      {/* Mission / Challenge Section */}
      <section className="py-24 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <div className="text-sm text-accent uppercase tracking-wider mb-4">
              The Challenge
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
              Expert knowledge is scarce and expensive
            </h2>
            <p className="text-lg text-foreground/70 mb-6">
              The best tutors, therapists, coaches, and mentors are available only to the privileged few. Their expertise—accumulated over decades—remains locked behind geographic, economic, and temporal barriers.
            </p>
            <p className="text-lg text-foreground/70">
              We believe AI agents can change this. By capturing the patterns, approaches, and wisdom of human experts, we can create AI systems that provide meaningful, personalized guidance to anyone who needs it.
            </p>
          </div>
        </div>
      </section>

      {/* Research Preview Section */}
      <section className="py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex items-end justify-between mb-12">
            <div>
              <div className="text-sm text-accent uppercase tracking-wider mb-4">
                Research
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground">
                Our Latest Work
              </h2>
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

      {/* Applications Section */}
      <section className="py-24 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-sm text-accent uppercase tracking-wider mb-4">
            Applications
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-12">
            Where AI Agents Can Help
          </h2>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
            <ApplicationCard
              icon={
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M18 18.72a9.094 9.094 0 003.741-.479 3 3 0 00-4.682-2.72m.94 3.198l.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0112 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 016 18.719m12 0a5.971 5.971 0 00-.941-3.197m0 0A5.995 5.995 0 0012 12.75a5.995 5.995 0 00-5.058 2.772m0 0a3 3 0 00-4.681 2.72 8.986 8.986 0 003.74.477m.94-3.197a5.971 5.971 0 00-.94 3.197M15 6.75a3 3 0 11-6 0 3 3 0 016 0zm6 3a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0zm-13.5 0a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0z" />
                </svg>
              }
              title="Friend"
              description="AI friends that provide meaningful connection, combat loneliness, and support emotional wellbeing."
            />
            <ApplicationCard
              icon={
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M4.26 10.147a60.436 60.436 0 00-.491 6.347A48.627 48.627 0 0112 20.904a48.627 48.627 0 018.232-4.41 60.46 60.46 0 00-.491-6.347m-15.482 0a50.57 50.57 0 00-2.658-.813A59.905 59.905 0 0112 3.493a59.902 59.902 0 0110.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.697 50.697 0 0112 13.489a50.702 50.702 0 017.74-3.342M6.75 15a.75.75 0 100-1.5.75.75 0 000 1.5zm0 0v-3.675A55.378 55.378 0 0112 8.443m-7.007 11.55A5.981 5.981 0 006.75 15.75v-1.5" />
                </svg>
              }
              title="Tutor"
              description="Personalized learning companions that adapt to each student's pace, style, and knowledge gaps."
            />
            <ApplicationCard
              icon={
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
                </svg>
              }
              title="Coach"
              description="Health and wellness coaches that provide consistent support, accountability, and guidance."
            />
            <ApplicationCard
              icon={
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M20.25 14.15v4.25c0 1.094-.787 2.036-1.872 2.18-2.087.277-4.216.42-6.378.42s-4.291-.143-6.378-.42c-1.085-.144-1.872-1.086-1.872-2.18v-4.25m16.5 0a2.18 2.18 0 00.75-1.661V8.706c0-1.081-.768-2.015-1.837-2.175a48.114 48.114 0 00-3.413-.387m4.5 8.006c-.194.165-.42.295-.673.38A23.978 23.978 0 0112 15.75c-2.648 0-5.195-.429-7.577-1.22a2.016 2.016 0 01-.673-.38m0 0A2.18 2.18 0 013 12.489V8.706c0-1.081.768-2.015 1.837-2.175a48.111 48.111 0 013.413-.387m7.5 0V5.25A2.25 2.25 0 0013.5 3h-3a2.25 2.25 0 00-2.25 2.25v.894m7.5 0a48.667 48.667 0 00-7.5 0M12 12.75h.008v.008H12v-.008z" />
                </svg>
              }
              title="Mentor"
              description="Career and professional mentors offering guidance based on deep domain expertise."
            />
            <ApplicationCard
              icon={
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 18v-5.25m0 0a6.01 6.01 0 001.5-.189m-1.5.189a6.01 6.01 0 01-1.5-.189m3.75 7.478a12.06 12.06 0 01-4.5 0m3.75 2.383a14.406 14.406 0 01-3 0M14.25 18v-.192c0-.983.658-1.823 1.508-2.316a7.5 7.5 0 10-7.517 0c.85.493 1.509 1.333 1.509 2.316V18" />
                </svg>
              }
              title="Advisor"
              description="Expert advisors for complex decisions in finance, legal, and other specialized domains."
            />
          </div>
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
