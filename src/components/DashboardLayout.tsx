'use client';

import { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

interface NavItem {
  name: string;
  href: string;
  icon: string;
}

const navigation: NavItem[] = [
  { name: 'Home', href: '/ops', icon: '🏠' },
  { name: 'IAC', href: '/ops/iac', icon: '☁️' },
  { name: 'Kubernetes', href: '/ops/kubernetes', icon: '🚀' },
  { name: 'SecDevOps', href: '/ops/secdevops', icon: '��' },
  { name: 'FinOps', href: '/ops/finops', icon: '💰' },
  { name: 'SOC 2', href: '/ops/soc2', icon: '✓' },
  { name: 'PromptOps', href: '/ops/promptops', icon: '🤖' },
];

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const pathname = usePathname();

  return (
    <div className="flex h-screen">
      {/* Sidebar for desktop */}
      <div
        className={`fixed top-0 left-0 z-50 w-64 h-full bg-white transform transition-transform duration-300 ease-in-out lg:translate-x-0 lg:static ${
          sidebarOpen ? 'translate-x-0' : '-translate-x-full'
        }`}
      >
        <div className="flex flex-col h-full">
          <div className="bg-blue-600 h-12 px-4 flex items-center">
            <Link href="/" className="text-xl font-bold text-white">
              gigabox.ai
            </Link>
          </div>
          <nav className="flex-1 overflow-y-auto p-4">
            <ul className="space-y-2">
              {navigation.map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className={`flex items-center px-4 py-2 rounded-lg hover:bg-gray-100 ${
                      pathname === item.href ? 'bg-gray-100' : ''
                    }`}
                    onClick={() => setSidebarOpen(false)} // Close sidebar on mobile when clicking a link
                  >
                    <span className="mr-3">{item.icon}</span>
                    <span>{item.name}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </div>

      {/* Main content area */}
      <div className="flex-1 flex flex-col">
        {/* Top blue bar with hamburger menu */}
        <div className="h-12 bg-blue-600 flex items-center justify-between px-4">
          <button
            onClick={() => setSidebarOpen(!sidebarOpen)}
            className="text-white lg:hidden"
            aria-label="Toggle menu"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
          {/* Show title on mobile only */}
          <div className="lg:hidden text-white font-bold">
            gigabox.ai
          </div>
          <div className="w-6 lg:hidden" /> {/* Spacer for centering title */}
        </div>
        
        {/* Page content */}
        <main className="flex-1 overflow-y-auto bg-gray-50">
          {children}
        </main>
      </div>

      {/* Mobile sidebar overlay */}
      {sidebarOpen && (
        <div
          className="fixed inset-0 bg-gray-600 bg-opacity-75 z-40 lg:hidden"
          onClick={() => setSidebarOpen(false)}
        />
      )}
    </div>
  );
} 