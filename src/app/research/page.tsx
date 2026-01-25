import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ResearchCard from '@/components/ResearchCard';
import { getAllPapers } from '@/lib/markdown';

export const metadata = {
  title: 'Research | Gigabox Research',
  description: 'Our published research on AI agents, persistent memory, proactive engagement, and conversational AI systems.',
};

export default function ResearchPage() {
  const papers = getAllPapers();

  return (
    <main className="bg-background min-h-screen">
      <Header />
      <div className="pt-24 pb-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Research
          </h1>
          <p className="text-lg text-foreground/70 max-w-3xl mb-12">
            Our team publishes research on AI agents, memory systems, proactive engagement, and the application of conversational AI to real-world challenges.
          </p>

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
        </div>
      </div>
      <Footer />
    </main>
  );
}
