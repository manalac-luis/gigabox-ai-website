import Link from 'next/link';

export default function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-sm border-b border-foreground/5">
      <nav className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <Link href="/" className="text-lg font-semibold tracking-tight text-foreground">
            GIGABOX
          </Link>
          <div className="flex items-center gap-8">
            <Link
              href="/apps"
              className="text-sm text-foreground/60 hover:text-foreground transition-colors"
            >
              Apps
            </Link>
            <a
              href="mailto:info@gigabox.ai"
              className="text-sm text-foreground/60 hover:text-foreground transition-colors"
            >
              Contact
            </a>
          </div>
        </div>
      </nav>
    </header>
  );
}
