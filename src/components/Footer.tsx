import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-foreground text-background py-12">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="text-sm text-background/70">
            &copy; 2026 Gigabox Research. All rights reserved.
          </div>
          <div className="flex items-center gap-6">
            <Link
              href="/privacy"
              className="text-sm text-background/70 hover:text-background transition-colors"
            >
              Privacy
            </Link>
            <Link
              href="/terms"
              className="text-sm text-background/70 hover:text-background transition-colors"
            >
              Terms
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
