import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { getPaper, getAllPaperSlugs } from '@/lib/markdown';
import Link from 'next/link';
import { notFound } from 'next/navigation';

export async function generateStaticParams() {
  const slugs = getAllPaperSlugs();
  return slugs.map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  try {
    const paper = await getPaper(slug);
    return {
      title: `${paper.title} | Gigabox Research`,
      description: paper.abstract,
    };
  } catch {
    return {
      title: 'Paper Not Found | Gigabox Research',
    };
  }
}

export default async function PaperPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  let paper;

  try {
    paper = await getPaper(slug);
  } catch {
    notFound();
  }

  return (
    <main className="bg-background min-h-screen">
      <Header />
      <article className="pt-24 pb-16">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <Link
            href="/research"
            className="inline-flex items-center text-sm text-accent hover:underline mb-8"
          >
            <svg className="w-4 h-4 mr-1" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
            </svg>
            Back to Research
          </Link>

          <div className="text-sm text-foreground/50 uppercase tracking-wider mb-4">
            {paper.date}
          </div>

          <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
            {paper.title}
          </h1>

          <div className="bg-white border border-foreground/10 rounded-lg p-6 mb-8">
            <h2 className="text-sm font-semibold text-foreground/50 uppercase tracking-wider mb-2">
              Abstract
            </h2>
            <p className="text-foreground/80">
              {paper.abstract}
            </p>
          </div>

          <div
            className="prose prose-lg max-w-none prose-headings:text-foreground prose-p:text-foreground/80 prose-li:text-foreground/80 prose-strong:text-foreground"
            dangerouslySetInnerHTML={{ __html: paper.contentHtml || '' }}
          />
        </div>
      </article>
      <Footer />
    </main>
  );
}
