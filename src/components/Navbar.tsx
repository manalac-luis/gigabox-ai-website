'use client';

import Link from 'next/link';
import Image from 'next/image';

export default function Navbar() {
  return (
    <nav className="bg-white fixed w-full z-50 top-0 border-b border-neutral-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link href="/" className="flex items-center gap-2 hover:opacity-80">
              <Image
                src="/launchops-rocket-dark.svg"   // ← dark variant for white bg
                alt="LaunchOps rocket"
                width={24}
                height={24}
                priority
              />
              <span className="text-2xl font-bold text-black">gigabox.ai</span>
            </Link>
          </div>

          <div className="hidden md:flex items-center gap-6 text-sm text-neutral-800">
            <Link href="/#contact" className="hover:text-black">Contact</Link>
            <Link
              href="/launchops"
              className="inline-flex rounded-lg bg-black text-white px-4 py-2 font-medium hover:bg-neutral-900 focus:outline-none focus:ring-2 focus:ring-black focus:ring-offset-2"
            >
              LaunchOps
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}

