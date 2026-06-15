'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Menu, X, BarChart2 } from 'lucide-react';
import { useProgress } from '@/context/ProgressContext';

const navLinks = [
  { label: 'Home', href: '/' },
  { label: 'Courses', href: '/courses' },
  { label: 'Games', href: '/games' },
  { label: 'Resources', href: '/resources' },
  { label: 'Blog', href: '/blog' },
  { label: 'About', href: '/about' },
  { label: 'Contact', href: '/contact' },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const { totalCompleted } = useProgress();

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-[#0a1628]/95 backdrop-blur-md shadow-lg border-b border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2.5">
            <Image src="/centsible-logo.svg" alt="Centsible" width={38} height={38} className="rounded-full" />
            <span className="text-white font-bold text-xl tracking-tight hidden sm:block">Centsible</span>
          </Link>

          {/* Desktop Links */}
          <div className="hidden md:flex items-center gap-7">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-gray-300 hover:text-white text-sm font-medium transition-colors duration-200 relative group"
              >
                {link.label}
                <span className="absolute -bottom-0.5 left-0 w-0 h-0.5 bg-[#f5a623] group-hover:w-full transition-all duration-200" />
              </Link>
            ))}
          </div>

          {/* CTA + Dashboard */}
          <div className="hidden md:flex items-center gap-4">
            <Link
              href="/dashboard"
              className="flex items-center gap-1.5 text-gray-300 hover:text-white text-sm font-medium transition-colors"
            >
              <BarChart2 className="w-4 h-4" />
              My Progress
              {totalCompleted > 0 && (
                <span className="bg-[#f5a623] text-[#0a1628] text-xs font-bold px-1.5 py-0.5 rounded-full leading-none">
                  {totalCompleted}
                </span>
              )}
            </Link>
            <Link
              href="/courses"
              className="bg-[#f5a623] text-[#0a1628] font-bold text-sm px-5 py-2 rounded-full hover:bg-[#fbbf47] transition-colors duration-200 shadow-md shadow-[#f5a623]/20"
            >
              Get Started
            </Link>
          </div>

          {/* Mobile Toggle */}
          <button className="md:hidden text-white p-1" onClick={() => setMenuOpen(!menuOpen)}>
            {menuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden bg-[#0a1628] border-t border-white/10 px-5 py-5 space-y-3">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              className="block text-gray-300 hover:text-[#f5a623] font-medium py-1.5 text-sm border-b border-white/5 last:border-0"
            >
              {link.label}
            </Link>
          ))}
          <Link
            href="/dashboard"
            onClick={() => setMenuOpen(false)}
            className="flex items-center gap-2 text-gray-300 hover:text-[#f5a623] font-medium py-1.5 text-sm"
          >
            <BarChart2 className="w-4 h-4" /> My Progress {totalCompleted > 0 && `(${totalCompleted})`}
          </Link>
          <Link
            href="/courses"
            onClick={() => setMenuOpen(false)}
            className="block bg-[#f5a623] text-[#0a1628] font-bold text-center px-5 py-2.5 rounded-full mt-3 text-sm"
          >
            Get Started
          </Link>
        </div>
      )}
    </nav>
  );
}
