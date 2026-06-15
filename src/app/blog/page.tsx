import Link from 'next/link';
import { ArrowRight, Clock, Tag } from 'lucide-react';

const featured = {
  slug: 'why-teens-need-financial-literacy',
  category: 'Financial Education',
  categoryColor: 'bg-blue-100 text-blue-700',
  title: 'Why Every Teen Needs Financial Literacy Before They Graduate',
  excerpt: 'Most students leave high school knowing how to solve quadratic equations but not how to file a tax return. Here\'s why that gap is dangerous — and what we can do about it.',
  author: 'Saksham Bhartiya',
  role: 'Co-Founder, Centsible',
  date: 'June 10, 2025',
  readTime: '5 min read',
  emoji: '🎓',
  gradient: 'from-[#0a1628] to-[#1a2d4f]',
};

const posts = [
  {
    slug: 'compound-interest-explained',
    category: 'Investing',
    categoryColor: 'bg-amber-100 text-amber-700',
    title: 'Compound Interest: The One Concept That Could Change Your Financial Life',
    excerpt: 'Albert Einstein reportedly called it the eighth wonder of the world. Here\'s how compound interest works and why starting early is the single most powerful thing a young person can do.',
    author: 'Vedika Ganeriwal',
    date: 'May 28, 2025',
    readTime: '4 min read',
    emoji: '📈',
  },
  {
    slug: 'how-to-spot-a-financial-scam',
    category: 'Security',
    categoryColor: 'bg-emerald-100 text-emerald-700',
    title: '7 Red Flags That Signal a Financial Scam (And How to Protect Yourself)',
    excerpt: 'Financial scams are becoming more sophisticated and harder to detect. Learn the warning signs every young person should know before they manage real money.',
    author: 'Shambhavi Pendke',
    date: 'May 15, 2025',
    readTime: '6 min read',
    emoji: '🛡️',
  },
  {
    slug: 'opening-your-first-bank-account',
    category: 'Foundation',
    categoryColor: 'bg-blue-100 text-blue-700',
    title: 'Opening Your First Bank Account: A Step-by-Step Guide for Teens',
    excerpt: 'A checking account is the foundation of your financial life. Here\'s everything you need to know to open one, choose the right bank, and avoid common mistakes.',
    author: 'Kashisha Goel',
    date: 'May 2, 2025',
    readTime: '5 min read',
    emoji: '🏦',
  },
  {
    slug: 'credit-score-myths',
    category: 'Foundation',
    categoryColor: 'bg-blue-100 text-blue-700',
    title: '5 Credit Score Myths Young People Still Believe (Busted)',
    excerpt: 'From "checking your score hurts it" to "you need to carry a balance to build credit" — we debunk the most common credit misconceptions for first-time borrowers.',
    author: 'Aaryan Berera',
    date: 'April 18, 2025',
    readTime: '4 min read',
    emoji: '⭐',
  },
  {
    slug: 'investing-vs-saving',
    category: 'Investing',
    categoryColor: 'bg-amber-100 text-amber-700',
    title: 'Saving vs Investing: What\'s the Difference and Which Should You Do First?',
    excerpt: 'Both are essential — but they serve very different purposes. Learn when to save, when to invest, and how to balance both as a young adult just starting out.',
    author: 'Vedika Ganeriwal',
    date: 'April 5, 2025',
    readTime: '5 min read',
    emoji: '💰',
  },
  {
    slug: 'budgeting-for-teens',
    category: 'Foundation',
    categoryColor: 'bg-blue-100 text-blue-700',
    title: 'The 50/30/20 Rule: A Simple Budgeting Framework That Actually Works',
    excerpt: 'Budgeting doesn\'t have to be complicated. The 50/30/20 rule breaks your income into three buckets and gives you a framework for spending with intention.',
    author: 'Saksham Bhartiya',
    date: 'March 22, 2025',
    readTime: '3 min read',
    emoji: '📊',
  },
];

const categories = ['All', 'Foundation', 'Investing', 'Security'];

export default function BlogPage() {
  return (
    <div>
      {/* Header */}
      <section className="bg-[#0a1628] text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl">
            <span className="text-[#f5a623] font-semibold text-sm uppercase tracking-widest">Blog</span>
            <h1 className="text-4xl md:text-5xl font-bold mt-3 mb-5">Financial Insights</h1>
            <p className="text-gray-300 text-lg leading-relaxed">
              Practical guides, explainers, and insights to help you build financial confidence — written by the Centsible team.
            </p>
          </div>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
        {/* Featured Post */}
        <div className="mb-14">
          <div className={`bg-gradient-to-br ${featured.gradient} rounded-3xl p-10 md:p-14 text-white relative overflow-hidden`}>
            <div className="absolute top-6 right-8 text-8xl opacity-20">{featured.emoji}</div>
            <div className="relative max-w-2xl">
              <div className="flex items-center gap-3 mb-5">
                <span className="bg-[#f5a623]/20 text-[#f5a623] border border-[#f5a623]/30 text-xs font-semibold px-3 py-1 rounded-full">
                  Featured
                </span>
                <span className="bg-white/10 text-white text-xs font-semibold px-3 py-1 rounded-full">
                  {featured.category}
                </span>
              </div>
              <h2 className="text-2xl md:text-3xl font-bold leading-snug mb-4">{featured.title}</h2>
              <p className="text-gray-300 leading-relaxed mb-8">{featured.excerpt}</p>
              <div className="flex flex-col sm:flex-row sm:items-center gap-4">
                <div>
                  <p className="font-semibold text-sm">{featured.author}</p>
                  <p className="text-gray-400 text-xs">{featured.role}</p>
                </div>
                <div className="hidden sm:block w-px h-8 bg-white/20" />
                <div className="flex items-center gap-4 text-gray-400 text-xs">
                  <span>{featured.date}</span>
                  <span className="flex items-center gap-1"><Clock className="w-3 h-3" />{featured.readTime}</span>
                </div>
                <Link
                  href={`/blog/${featured.slug}`}
                  className="sm:ml-auto inline-flex items-center gap-2 bg-[#f5a623] text-[#0a1628] font-bold px-6 py-2.5 rounded-full hover:bg-[#fbbf47] transition-colors text-sm"
                >
                  Read Article <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Category Filter */}
        <div className="flex items-center gap-2 mb-10 flex-wrap">
          <Tag className="w-4 h-4 text-gray-400" />
          {categories.map((cat) => (
            <button
              key={cat}
              className={`text-sm font-medium px-4 py-1.5 rounded-full border transition-colors ${
                cat === 'All'
                  ? 'bg-[#0a1628] text-white border-[#0a1628]'
                  : 'bg-white text-gray-600 border-gray-200 hover:border-[#0a1628] hover:text-[#0a1628]'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Posts Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {posts.map((post) => (
            <Link
              key={post.slug}
              href={`/blog/${post.slug}`}
              className="group bg-white border border-gray-100 rounded-3xl overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-1 flex flex-col"
            >
              {/* Card top color bar */}
              <div className="h-2 bg-gradient-to-r from-[#0a1628] to-[#f5a623]" />

              <div className="p-7 flex flex-col flex-1">
                <div className="flex items-center justify-between mb-4">
                  <span className={`text-xs font-semibold px-3 py-1 rounded-full ${post.categoryColor}`}>
                    {post.category}
                  </span>
                  <span className="text-3xl">{post.emoji}</span>
                </div>

                <h3 className="font-bold text-[#0a1628] text-lg leading-snug mb-3 group-hover:text-[#f5a623] transition-colors">
                  {post.title}
                </h3>
                <p className="text-gray-500 text-sm leading-relaxed flex-1 mb-6">{post.excerpt}</p>

                <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                  <div>
                    <p className="text-sm font-semibold text-[#0a1628]">{post.author}</p>
                    <div className="flex items-center gap-2 text-xs text-gray-400 mt-0.5">
                      <span>{post.date}</span>
                      <span>·</span>
                      <span className="flex items-center gap-1"><Clock className="w-3 h-3" />{post.readTime}</span>
                    </div>
                  </div>
                  <span className="w-8 h-8 rounded-full bg-gray-50 border border-gray-200 flex items-center justify-center group-hover:bg-[#0a1628] group-hover:border-[#0a1628] transition-colors">
                    <ArrowRight className="w-4 h-4 text-gray-400 group-hover:text-white transition-colors" />
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* Load more placeholder */}
        <div className="text-center mt-14">
          <button className="border border-gray-200 text-gray-600 font-semibold px-8 py-3 rounded-full hover:bg-gray-50 transition-colors">
            Load More Articles
          </button>
        </div>
      </div>

      {/* Newsletter CTA */}
      <section className="bg-[#0a1628] py-16">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-3">Get articles in your inbox</h2>
          <p className="text-gray-400 mb-8">New posts every week on money, investing, and financial security.</p>
          <form className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
            <input
              type="email"
              placeholder="Your email address"
              className="flex-1 px-5 py-3 rounded-full text-[#0a1628] placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#f5a623] text-sm"
            />
            <button type="submit" className="bg-[#f5a623] text-[#0a1628] font-bold px-7 py-3 rounded-full hover:bg-[#fbbf47] transition-colors whitespace-nowrap text-sm">
              Subscribe
            </button>
          </form>
        </div>
      </section>
    </div>
  );
}
