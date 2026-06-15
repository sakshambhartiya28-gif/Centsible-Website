'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Menu, X, TrendingUp } from 'lucide-react';

const navLinks = [
  { label: 'Home', href: '/' },
  { label: 'Courses', href: '/courses' },
  { label: 'Games', href: '/games' },
  { label: 'Resources', href: '/resources' },
  { label: 'About', href: '/about' },
  { label: 'Contact', href: '/contact' },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-[#0a1628] shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2">
            <div className="w-8 h-8 bg-[#f5a623] rounded-full flex items-center justify-center">
              <TrendingUp className="w-5 h-5 text-[#0a1628]" />
            </div>
            <span className="text-white font-bold text-xl tracking-tight">
              Cent<span className="text-[#f5a623]">sible</span>
            </span>
          </Link>

          {/* Desktop Links */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-gray-300 hover:text-[#f5a623] text-sm font-medium transition-colors duration-200"
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* CTA Button */}
          <div className="hidden md:block">
            <Link
              href="/courses"
              className="bg-[#f5a623] text-[#0a1628] font-semibold text-sm px-5 py-2 rounded-full hover:bg-[#fbbf47] transition-colors duration-200"
            >
              Get Started
            </Link>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            className="md:hidden text-white"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            {menuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden bg-[#0a1628] border-t border-gray-700 px-4 py-4 space-y-3">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              className="block text-gray-300 hover:text-[#f5a623] font-medium py-1"
            >
              {link.label}
            </Link>
          ))}
          <Link
            href="/courses"
            onClick={() => setMenuOpen(false)}
            className="block bg-[#f5a623] text-[#0a1628] font-semibold text-center px-5 py-2 rounded-full mt-2"
          >
            Get Started
          </Link>
        </div>
      )}
    </nav>
  );
}
