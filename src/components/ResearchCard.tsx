import Link from 'next/link';

interface ResearchCardProps {
  slug: string;
  title: string;
  date: string;
  abstract: string;
}

export default function ResearchCard({ slug, title, date, abstract }: ResearchCardProps) {
  return (
    <Link
      href={`/research/${slug}`}
      className="block p-6 bg-white border border-foreground/10 rounded-lg hover:border-accent/30 hover:shadow-sm transition-all group"
    >
      <div className="text-xs text-foreground/50 uppercase tracking-wider mb-2">
        {date}
      </div>
      <h3 className="text-lg font-semibold text-foreground group-hover:text-accent transition-colors mb-3">
        {title}
      </h3>
      <p className="text-sm text-foreground/70 line-clamp-3">
        {abstract}
      </p>
    </Link>
  );
}
