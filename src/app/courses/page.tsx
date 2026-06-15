import Link from 'next/link';
import { BookOpen, TrendingUp, Shield, CheckCircle, ArrowRight, Clock, Users } from 'lucide-react';

const tracks = [
  {
    id: 'foundation',
    icon: BookOpen,
    gradient: 'from-blue-600 to-blue-400',
    bg: 'bg-blue-50',
    border: 'border-blue-200',
    iconBg: 'bg-blue-100 text-blue-700',
    badge: 'Ages 13–18 · Beginner',
    badgeColor: 'bg-blue-100 text-blue-700',
    title: 'Foundation',
    tagline: 'Your financial journey starts here.',
    description: 'The Foundation track covers everything a young person needs to understand money — from how banks work to how credit scores are built. Designed specifically for teens aged 13–18, this course uses real-world examples and interactive exercises.',
    modules: [
      { title: 'Understanding Money', desc: 'What money is, how it works, and its role in the economy.', duration: '30 min' },
      { title: 'Budgeting Basics', desc: 'How to create and stick to a personal budget.', duration: '45 min' },
      { title: 'Saving Strategies', desc: 'Emergency funds, saving goals, and the 50/30/20 rule.', duration: '40 min' },
      { title: 'Banking 101', desc: 'Checking accounts, savings accounts, and how to choose a bank.', duration: '35 min' },
      { title: 'Introduction to Credit', desc: 'What credit is, how credit scores work, and why they matter.', duration: '45 min' },
      { title: 'Debt & Borrowing', desc: 'Good debt vs bad debt, interest rates, and managing loans.', duration: '40 min' },
      { title: 'Taxes Made Simple', desc: 'What taxes are, how they work, and how to file a basic return.', duration: '50 min' },
      { title: 'Smart Spending', desc: 'Wants vs needs, avoiding impulse buying, and consumer rights.', duration: '35 min' },
    ],
  },
  {
    id: 'growth',
    icon: TrendingUp,
    gradient: 'from-amber-500 to-yellow-400',
    bg: 'bg-amber-50',
    border: 'border-amber-200',
    iconBg: 'bg-amber-100 text-amber-700',
    badge: 'Intermediate',
    badgeColor: 'bg-amber-100 text-amber-700',
    title: 'Growth',
    tagline: 'Build wealth. Think long-term.',
    description: 'The Growth track dives into the world of investing and wealth building. Learn how to make your money work for you through stocks, funds, and strategic financial planning.',
    modules: [
      { title: 'Introduction to Investing', desc: 'Why investing matters and the power of starting early.', duration: '40 min' },
      { title: 'Compound Interest', desc: 'The 8th wonder of the world — how it works and how to use it.', duration: '30 min' },
      { title: 'Stock Market Basics', desc: 'How the stock market works, what stocks are, and how to read them.', duration: '60 min' },
      { title: 'Mutual Funds & ETFs', desc: 'Diversification, index funds, and passive investing strategies.', duration: '50 min' },
      { title: 'Private Equity & Venture Capital', desc: 'How startups get funded and what PE firms do.', duration: '45 min' },
      { title: 'Bonds & Fixed Income', desc: 'Government and corporate bonds, yield, and risk.', duration: '40 min' },
      { title: 'Insurance Planning', desc: 'Types of insurance, why you need it, and how to choose coverage.', duration: '45 min' },
      { title: 'Retirement Planning', desc: '401(k), Roth IRA, and how to plan for retirement as a young person.', duration: '50 min' },
    ],
  },
  {
    id: 'security',
    icon: Shield,
    gradient: 'from-emerald-600 to-teal-400',
    bg: 'bg-emerald-50',
    border: 'border-emerald-200',
    iconBg: 'bg-emerald-100 text-emerald-700',
    badge: 'Advanced',
    badgeColor: 'bg-emerald-100 text-emerald-700',
    title: 'Security',
    tagline: 'Protect what you build.',
    description: 'The Security track equips you with the knowledge to protect your finances and identity in an increasingly digital world. Learn to spot scams, prevent fraud, and stay safe online.',
    modules: [
      { title: 'Financial Fraud Overview', desc: 'Types of financial fraud and how they target victims.', duration: '40 min' },
      { title: 'Scam Identification', desc: 'How to spot phishing, Ponzi schemes, and common scams.', duration: '50 min' },
      { title: 'Identity Theft Prevention', desc: 'Protecting your SSN, credit reports, and personal data.', duration: '45 min' },
      { title: 'Safe Online Banking', desc: 'Best practices for digital banking and payment security.', duration: '35 min' },
      { title: 'Cybersecurity for Finance', desc: 'Password hygiene, 2FA, and protecting financial accounts.', duration: '40 min' },
      { title: 'Consumer Rights & Protections', desc: 'FDIC, CFPB, and what to do if you are defrauded.', duration: '45 min' },
      { title: 'Crypto & Digital Assets', desc: 'Understanding cryptocurrency risks and common crypto scams.', duration: '50 min' },
      { title: 'Recovery After Fraud', desc: 'Steps to take if you become a victim of financial fraud.', duration: '40 min' },
    ],
  },
];

export default function CoursesPage() {
  return (
    <div>
      {/* Header */}
      <section className="bg-[#0a1628] text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="text-[#f5a623] font-semibold text-sm uppercase tracking-widest">Curriculum</span>
          <h1 className="text-4xl md:text-5xl font-bold mt-3 mb-5">Our Course Tracks</h1>
          <p className="text-gray-300 text-lg max-w-2xl mx-auto">
            Three carefully designed tracks that take you from financial basics to advanced wealth-building and protection strategies.
          </p>
        </div>
      </section>

      {/* Tracks */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 space-y-20">
        {tracks.map((track, idx) => {
          const Icon = track.icon;
          return (
            <section key={track.id} id={track.id} className="scroll-mt-20">
              {/* Track Header */}
              <div className={`rounded-3xl p-8 md:p-12 ${track.bg} border ${track.border} mb-8`}>
                <div className="flex flex-col md:flex-row md:items-center gap-6">
                  <div className={`w-16 h-16 ${track.iconBg} rounded-2xl flex items-center justify-center shrink-0`}>
                    <Icon className="w-8 h-8" />
                  </div>
                  <div className="flex-1">
                    <div className="flex flex-wrap items-center gap-3 mb-2">
                      <span className={`text-xs font-semibold px-3 py-1 rounded-full ${track.badgeColor}`}>{track.badge}</span>
                      <span className="flex items-center gap-1 text-sm text-gray-500"><Clock className="w-4 h-4" /> ~6 hours total</span>
                      <span className="flex items-center gap-1 text-sm text-gray-500"><Users className="w-4 h-4" /> Self-paced</span>
                    </div>
                    <h2 className="text-3xl font-bold text-[#0a1628]">{track.title}</h2>
                    <p className="text-lg text-gray-600 italic mt-1">{track.tagline}</p>
                  </div>
                </div>
                <p className="text-gray-600 mt-6 text-base leading-relaxed max-w-3xl">{track.description}</p>
              </div>

              {/* Modules */}
              <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
                {track.modules.map((mod, i) => (
                  <div key={mod.title} className="bg-white border border-gray-100 rounded-2xl p-5 hover:shadow-md transition-shadow">
                    <div className="flex items-center justify-between mb-3">
                      <span className="text-xs font-bold text-gray-400">MODULE {i + 1}</span>
                      <span className="text-xs text-gray-400 flex items-center gap-1"><Clock className="w-3 h-3" />{mod.duration}</span>
                    </div>
                    <h4 className="font-semibold text-[#0a1628] mb-2 text-sm">{mod.title}</h4>
                    <p className="text-xs text-gray-500 leading-relaxed">{mod.desc}</p>
                  </div>
                ))}
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="#" className="inline-flex items-center justify-center gap-2 bg-[#0a1628] text-white font-semibold py-3 px-8 rounded-full hover:bg-[#1a2d4f] transition-colors">
                  Start {track.title} Track <ArrowRight className="w-4 h-4" />
                </Link>
                <Link href="#" className="inline-flex items-center justify-center gap-2 border border-gray-300 text-gray-700 font-semibold py-3 px-8 rounded-full hover:bg-gray-50 transition-colors">
                  Download Workbook
                </Link>
              </div>

              {idx < tracks.length - 1 && (
                <div className="border-t border-gray-100 mt-20" />
              )}
            </section>
          );
        })}
      </div>

      {/* CTA */}
      <section className="bg-[#0a1628] py-16">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">Not sure where to start?</h2>
          <p className="text-gray-300 mb-8">Take our 2-minute quiz and we&apos;ll recommend the right track for you.</p>
          <Link href="#" className="inline-flex items-center gap-2 bg-[#f5a623] text-[#0a1628] font-bold px-8 py-4 rounded-full hover:bg-[#fbbf47] transition-colors">
            Take the Quiz <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </section>
    </div>
  );
}
