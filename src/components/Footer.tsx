import Link from 'next/link';
import Image from 'next/image';
import { Mail } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-[#0a1628] text-gray-400 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="lg:col-span-1">
            <Link href="/" className="flex items-center gap-3 mb-5">
              <Image src="/centsible-logo.svg" alt="Centsible" width={44} height={44} className="rounded-full" />
              <span className="text-white font-bold text-xl tracking-tight">Centsible</span>
            </Link>
            <p className="text-sm text-gray-500 leading-relaxed mb-6">
              Empowering the next generation with the financial knowledge they need to build a secure future.
            </p>
            <div className="flex gap-3">
              {['Instagram', 'X', 'LinkedIn'].map((s) => (
                <a
                  key={s}
                  href="#"
                  aria-label={s}
                  className="w-8 h-8 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center text-xs font-bold text-gray-400 hover:bg-[#f5a623]/10 hover:text-[#f5a623] hover:border-[#f5a623]/30 transition-all"
                >
                  {s[0]}
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-semibold mb-5 text-sm uppercase tracking-widest">Navigate</h4>
            <ul className="space-y-3 text-sm">
              {[['Home', '/'], ['Courses', '/courses'], ['Games', '/games'], ['Resources', '/resources'], ['Blog', '/blog'], ['About', '/about'], ['Contact', '/contact'], ['My Progress', '/dashboard']].map(([label, href]) => (
                <li key={href}>
                  <Link href={href} className="hover:text-white transition-colors">{label}</Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Courses */}
          <div>
            <h4 className="text-white font-semibold mb-5 text-sm uppercase tracking-widest">Courses</h4>
            <ul className="space-y-3 text-sm">
              <li><Link href="/courses#foundation" className="hover:text-white transition-colors">Foundation Track</Link></li>
              <li><Link href="/courses#growth" className="hover:text-white transition-colors">Growth Track</Link></li>
              <li><Link href="/courses#security" className="hover:text-white transition-colors">Security Track</Link></li>
              <li><Link href="/games" className="hover:text-white transition-colors">Games & Simulations</Link></li>
              <li><Link href="/resources" className="hover:text-white transition-colors">Resource Library</Link></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-white font-semibold mb-5 text-sm uppercase tracking-widest">Contact</h4>
            <ul className="space-y-4 text-sm">
              <li className="flex items-start gap-3">
                <Mail className="w-4 h-4 mt-0.5 text-[#f5a623] shrink-0" />
                <span>hello@centsible.org</span>
              </li>
            </ul>
            <div className="mt-6">
              <Link href="/blog" className="text-sm text-gray-400 hover:text-white transition-colors">Blog & Insights →</Link>
            </div>
          </div>
        </div>

        <div className="border-t border-white/5 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-gray-600">
          <div className="flex items-center gap-3">
            <Image src="/centsible-logo.svg" alt="Centsible" width={22} height={22} className="rounded-full opacity-60" />
            <p>© {new Date().getFullYear()} Centsible. All rights reserved.</p>
          </div>
          <div className="flex gap-6">
            <Link href="#" className="hover:text-gray-400 transition-colors">Privacy Policy</Link>
            <Link href="#" className="hover:text-gray-400 transition-colors">Terms of Use</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
