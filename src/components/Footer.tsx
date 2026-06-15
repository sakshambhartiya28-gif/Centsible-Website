import Link from 'next/link';
import { TrendingUp, Mail, Phone, MapPin, Share2 } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-[#0a1628] text-gray-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand */}
          <div>
            <Link href="/" className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 bg-[#f5a623] rounded-full flex items-center justify-center">
                <TrendingUp className="w-5 h-5 text-[#0a1628]" />
              </div>
              <span className="text-white font-bold text-xl">
                Cent<span className="text-[#f5a623]">sible</span>
              </span>
            </Link>
            <p className="text-sm text-gray-400 leading-relaxed mb-5">
              Empowering the next generation with the financial knowledge they need to thrive.
            </p>
            <div className="flex gap-4">
              {['Instagram', 'X (Twitter)', 'LinkedIn'].map((s) => (
                <a key={s} href="#" aria-label={s} className="hover:text-[#f5a623] transition-colors">
                  <Share2 className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              {[['Home', '/'], ['Courses', '/courses'], ['Games', '/games'], ['Resources', '/resources'], ['About', '/about'], ['Contact', '/contact']].map(([label, href]) => (
                <li key={href}>
                  <Link href={href} className="hover:text-[#f5a623] transition-colors">{label}</Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Courses */}
          <div>
            <h4 className="text-white font-semibold mb-4">Courses</h4>
            <ul className="space-y-2 text-sm">
              <li><Link href="/courses#foundation" className="hover:text-[#f5a623] transition-colors">Foundation</Link></li>
              <li><Link href="/courses#growth" className="hover:text-[#f5a623] transition-colors">Growth</Link></li>
              <li><Link href="/courses#security" className="hover:text-[#f5a623] transition-colors">Security</Link></li>
              <li><Link href="/games" className="hover:text-[#f5a623] transition-colors">Games & Simulations</Link></li>
              <li><Link href="/resources" className="hover:text-[#f5a623] transition-colors">Resource Library</Link></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-white font-semibold mb-4">Contact Us</h4>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start gap-3">
                <Mail className="w-4 h-4 mt-0.5 text-[#f5a623] shrink-0" />
                <span>hello@centsible.org</span>
              </li>
              <li className="flex items-start gap-3">
                <Phone className="w-4 h-4 mt-0.5 text-[#f5a623] shrink-0" />
                <span>+1 (555) 000-0000</span>
              </li>
              <li className="flex items-start gap-3">
                <MapPin className="w-4 h-4 mt-0.5 text-[#f5a623] shrink-0" />
                <span>New York, NY</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-10 pt-6 flex flex-col md:flex-row justify-between items-center gap-3 text-sm text-gray-500">
          <p>© {new Date().getFullYear()} Centsible. All rights reserved.</p>
          <div className="flex gap-6">
            <Link href="#" className="hover:text-gray-300">Privacy Policy</Link>
            <Link href="#" className="hover:text-gray-300">Terms of Use</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
