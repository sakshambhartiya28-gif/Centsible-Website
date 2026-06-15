import Link from 'next/link';
import { BookOpen, FileText, Video, Download, ExternalLink, ArrowRight } from 'lucide-react';

const categories = [
  {
    icon: BookOpen,
    title: 'Guides & Articles',
    color: 'bg-blue-100 text-blue-700',
    resources: [
      { title: 'The Teen\'s Guide to Budgeting', type: 'Guide', desc: 'A step-by-step guide to building your first budget.', tag: 'Foundation' },
      { title: 'What Is a Credit Score?', type: 'Article', desc: 'Everything you need to know about how credit scores work.', tag: 'Foundation' },
      { title: 'Investing 101 for Beginners', type: 'Guide', desc: 'A beginner-friendly introduction to the world of investing.', tag: 'Growth' },
      { title: 'How to Spot a Financial Scam', type: 'Article', desc: 'Red flags to watch for and how to protect yourself.', tag: 'Security' },
    ],
  },
  {
    icon: FileText,
    title: 'Worksheets & Templates',
    color: 'bg-amber-100 text-amber-700',
    resources: [
      { title: 'Monthly Budget Template', type: 'Template', desc: 'A printable and fillable budget worksheet.', tag: 'Foundation' },
      { title: 'Savings Goal Tracker', type: 'Worksheet', desc: 'Track your progress toward multiple savings goals.', tag: 'Foundation' },
      { title: 'Investment Portfolio Planner', type: 'Template', desc: 'Plan and track your investment portfolio.', tag: 'Growth' },
      { title: 'Scam Checklist', type: 'Checklist', desc: 'A checklist to verify if something is a scam before you act.', tag: 'Security' },
    ],
  },
  {
    icon: Video,
    title: 'Videos & Webinars',
    color: 'bg-purple-100 text-purple-700',
    resources: [
      { title: 'How the Stock Market Works', type: 'Video', desc: 'An animated explainer of how markets function.', tag: 'Growth' },
      { title: 'Real Scam Stories: Learn from Others', type: 'Webinar', desc: 'Hear from people who were targeted by scammers.', tag: 'Security' },
      { title: 'Tax Filing for the First Time', type: 'Video', desc: 'Walk through your first tax return, step by step.', tag: 'Foundation' },
      { title: 'Investing in Your 20s', type: 'Webinar', desc: 'Expert advice on building wealth early.', tag: 'Growth' },
    ],
  },
];

const externalLinks = [
  { name: 'Consumer Financial Protection Bureau', url: 'https://www.consumerfinance.gov', desc: 'Official US government resource for financial consumer protection.' },
  { name: 'Investor.gov', url: 'https://www.investor.gov', desc: 'SEC resource for learning about investing.' },
  { name: 'IRS Free File', url: 'https://www.irs.gov/filing/free-file-do-your-federal-taxes-for-free', desc: 'Free federal tax filing for eligible individuals.' },
  { name: 'AnnualCreditReport.com', url: 'https://www.annualcreditreport.com', desc: 'Get your free annual credit reports from all three bureaus.' },
];

const tagColors: Record<string, string> = {
  Foundation: 'bg-blue-100 text-blue-700',
  Growth: 'bg-amber-100 text-amber-700',
  Security: 'bg-emerald-100 text-emerald-700',
};

export default function ResourcesPage() {
  return (
    <div>
      {/* Header */}
      <section className="bg-[#0a1628] text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="text-[#f5a623] font-semibold text-sm uppercase tracking-widest">Resource Library</span>
          <h1 className="text-4xl md:text-5xl font-bold mt-3 mb-5">Free Resources</h1>
          <p className="text-gray-300 text-lg max-w-2xl mx-auto">
            Guides, worksheets, videos, and tools to support your financial education journey — all completely free.
          </p>
        </div>
      </section>

      {/* Resources */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 space-y-16">
        {categories.map((cat) => {
          const Icon = cat.icon;
          return (
            <section key={cat.title}>
              <div className="flex items-center gap-3 mb-8">
                <div className={`w-10 h-10 ${cat.color} rounded-xl flex items-center justify-center`}>
                  <Icon className="w-5 h-5" />
                </div>
                <h2 className="text-2xl font-bold text-[#0a1628]">{cat.title}</h2>
              </div>
              <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
                {cat.resources.map((r) => (
                  <div key={r.title} className="bg-white border border-gray-100 rounded-2xl p-6 hover:shadow-md transition-shadow flex flex-col">
                    <div className="flex items-center justify-between mb-3">
                      <span className={`text-xs font-semibold px-2.5 py-1 rounded-full ${tagColors[r.tag]}`}>{r.tag}</span>
                      <span className="text-xs text-gray-400 bg-gray-100 px-2 py-1 rounded-full">{r.type}</span>
                    </div>
                    <h3 className="font-semibold text-[#0a1628] mb-2 text-sm leading-snug">{r.title}</h3>
                    <p className="text-gray-500 text-xs leading-relaxed flex-1 mb-4">{r.desc}</p>
                    <button className="inline-flex items-center gap-1.5 text-[#0a1628] text-xs font-semibold hover:text-[#f5a623] transition-colors mt-auto">
                      <Download className="w-3.5 h-3.5" /> Download Free
                    </button>
                  </div>
                ))}
              </div>
            </section>
          );
        })}

        {/* External Links */}
        <section>
          <div className="flex items-center gap-3 mb-8">
            <div className="w-10 h-10 bg-gray-100 text-gray-700 rounded-xl flex items-center justify-center">
              <ExternalLink className="w-5 h-5" />
            </div>
            <h2 className="text-2xl font-bold text-[#0a1628]">Trusted External Resources</h2>
          </div>
          <div className="grid sm:grid-cols-2 gap-5">
            {externalLinks.map((link) => (
              <a
                key={link.name}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white border border-gray-100 rounded-2xl p-6 hover:shadow-md transition-shadow flex items-start gap-4 group"
              >
                <div className="w-10 h-10 bg-gray-50 border border-gray-200 rounded-xl flex items-center justify-center shrink-0">
                  <ExternalLink className="w-4 h-4 text-gray-500 group-hover:text-[#0a1628] transition-colors" />
                </div>
                <div>
                  <h3 className="font-semibold text-[#0a1628] mb-1 group-hover:text-[#f5a623] transition-colors">{link.name}</h3>
                  <p className="text-gray-500 text-sm">{link.desc}</p>
                </div>
              </a>
            ))}
          </div>
        </section>
      </div>

      {/* CTA */}
      <section className="bg-gray-50 py-16">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <h2 className="text-2xl font-bold text-[#0a1628] mb-4">Want course materials for your classroom?</h2>
          <p className="text-gray-600 mb-6">We offer teacher resource packs with lesson plans, slides, and assessments — all free.</p>
          <Link href="/contact" className="inline-flex items-center gap-2 bg-[#0a1628] text-white font-semibold px-8 py-3 rounded-full hover:bg-[#1a2d4f] transition-colors">
            Request Teacher Pack <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>
    </div>
  );
}
