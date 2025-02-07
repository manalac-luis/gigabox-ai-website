'use client';

import Link from 'next/link';

export default function Navbar() {
  return (
    <nav className="bg-white fixed w-full z-50 top-0 border-b">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link href="/" className="text-2xl font-bold text-blue-600">
              gigabox.ai
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
} 