import Link from 'next/link';
import {
  BookOpen, Gamepad2, Shield, TrendingUp, Users, Star,
  ArrowRight, CheckCircle, ChevronRight, Award, Globe
} from 'lucide-react';

const stats = [
  { value: '10,000+', label: 'Students Reached' },
  { value: '3', label: 'Course Tracks' },
  { value: '5', label: 'Interactive Games' },
  { value: '100%', label: 'Free to Access' },
];

const courses = [
  {
    id: 'foundation',
    icon: BookOpen,
    color: 'bg-blue-100 text-blue-700',
    badge: 'Ages 13–18',
    badgeColor: 'bg-blue-100 text-blue-700',
    title: 'Foundation',
    description: 'Master the fundamentals of personal finance — budgeting, saving, banking, credit, and taxes. The perfect starting point for every young learner.',
    topics: ['Budgeting & Saving', 'Banking Basics', 'Credit & Debt', 'Intro to Taxes', 'Smart Spending'],
    href: '/courses#foundation',
  },
  {
    id: 'growth',
    icon: TrendingUp,
    color: 'bg-amber-100 text-amber-700',
    badge: 'Intermediate',
    badgeColor: 'bg-amber-100 text-amber-700',
    title: 'Growth',
    description: 'Level up with investing, mutual funds, private equity, insurance, and compound growth strategies that build long-term wealth.',
    topics: ['Stock Market Basics', 'Mutual Funds & ETFs', 'Private Equity', 'Insurance Planning', 'Compound Interest'],
    href: '/courses#growth',
  },
  {
    id: 'security',
    icon: Shield,
    color: 'bg-emerald-100 text-emerald-700',
    badge: 'Advanced',
    badgeColor: 'bg-emerald-100 text-emerald-700',
    title: 'Security',
    description: 'Protect your financial future. Learn to identify scams, prevent identity theft, and navigate the digital financial landscape safely.',
    topics: ['Scam Identification', 'Identity Theft Protection', 'Safe Online Banking', 'Fraud Prevention', 'Cybersecurity Basics'],
    href: '/courses#security',
  },
];

const games = [
  { title: 'Scam Spotter', description: 'Can you tell the real deal from a scam? Test your instincts.', emoji: '🎯', color: 'from-red-500 to-orange-500', href: '/games#scam-spotter' },
  { title: 'Investor Island', description: 'Build your portfolio on a virtual island economy.', emoji: '🏝️', color: 'from-blue-500 to-cyan-500', href: '/games#investor-island' },
  { title: 'Budget Boss', description: 'Manage a monthly budget and reach your savings goals.', emoji: '💼', color: 'from-purple-500 to-pink-500', href: '/games#budget-boss' },
  { title: 'Stock Market Simulator', description: 'Trade virtual stocks and learn what moves prices.', emoji: '📈', color: 'from-green-500 to-teal-500', href: '/games#stock-simulator' },
  { title: 'Credit Score Quest', description: 'Build the perfect credit score through smart decisions.', emoji: '⭐', color: 'from-amber-500 to-yellow-500', href: '/games#credit-quest' },
];

const testimonials = [
  { name: 'Priya S.', role: 'High School Student', quote: 'Centsible made budgeting actually fun. I opened my first savings account after the Foundation course!', rating: 5 },
  { name: 'Marcus T.', role: 'Parent', quote: 'My son went from knowing nothing about money to explaining compound interest to me at dinner. Incredible.', rating: 5 },
  { name: 'Ms. Johnson', role: 'High School Teacher', quote: 'I use Centsible in my classroom every week. The games keep students engaged and the content is top-quality.', rating: 5 },
];

const whyUs = [
  { icon: Award, title: 'Curriculum-Aligned', desc: 'Content designed by financial educators aligned with national standards.' },
  { icon: Gamepad2, title: 'Learn by Doing', desc: 'Interactive games and simulations make abstract concepts tangible.' },
  { icon: Globe, title: 'Accessible to All', desc: 'Completely free. No barriers to financial education for any student.' },
  { icon: Users, title: 'Community-Driven', desc: 'Built with input from students, teachers, and financial professionals.' },
];

export default function Home() {
  return (
    <div>
      {/* Hero */}
      <section className="relative bg-[#0a1628] text-white overflow-hidden">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-20 left-10 w-72 h-72 bg-[#f5a623] rounded-full blur-3xl opacity-10" />
          <div className="absolute bottom-10 right-10 w-96 h-96 bg-blue-500 rounded-full blur-3xl opacity-10" />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-36">
          <div className="max-w-3xl">
            <span className="inline-block bg-[#f5a623]/20 text-[#f5a623] text-sm font-semibold px-4 py-1.5 rounded-full mb-6 border border-[#f5a623]/30">
              Financial Literacy for the Next Generation
            </span>
            <h1 className="text-4xl md:text-6xl font-bold leading-tight mb-6">
              Your Money.{' '}
              <span className="text-[#f5a623]">Your Future.</span>{' '}
              Your Rules.
            </h1>
            <p className="text-lg md:text-xl text-gray-300 leading-relaxed mb-10 max-w-2xl">
              Centsible teaches teens and young adults everything they need to know about money — from saving your first dollar to building long-term wealth — through engaging courses and interactive games.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/courses" className="inline-flex items-center justify-center gap-2 bg-[#f5a623] text-[#0a1628] font-bold px-8 py-4 rounded-full hover:bg-[#fbbf47] transition-colors text-lg">
                Explore Courses <ArrowRight className="w-5 h-5" />
              </Link>
              <Link href="/games" className="inline-flex items-center justify-center gap-2 border border-white/30 text-white font-semibold px-8 py-4 rounded-full hover:bg-white/10 transition-colors text-lg">
                Play Games <Gamepad2 className="w-5 h-5" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="bg-[#1a2d4f] text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat) => (
              <div key={stat.label} className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-[#f5a623]">{stat.value}</div>
                <div className="text-sm text-gray-300 mt-1">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Mission */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div>
              <span className="text-[#f5a623] font-semibold text-sm uppercase tracking-widest">Our Mission</span>
              <h2 className="text-3xl md:text-4xl font-bold text-[#0a1628] mt-3 mb-6 leading-tight">
                Financial literacy shouldn&apos;t be a privilege
              </h2>
              <p className="text-gray-600 text-lg leading-relaxed mb-6">
                Most schools don&apos;t teach personal finance. That means millions of young people enter adulthood without knowing how to budget, invest, or protect themselves from financial fraud.
              </p>
              <p className="text-gray-600 text-lg leading-relaxed mb-8">
                Centsible exists to close that gap — with free, engaging, and expert-designed courses and games that give every student the tools to build a secure financial future.
              </p>
              <Link href="/about" className="inline-flex items-center gap-2 text-[#0a1628] font-semibold hover:text-[#f5a623] transition-colors">
                Learn more about us <ChevronRight className="w-5 h-5" />
              </Link>
            </div>
            <div className="grid grid-cols-2 gap-4">
              {whyUs.map(({ icon: Icon, title, desc }) => (
                <div key={title} className="bg-gray-50 rounded-2xl p-6 hover:shadow-md transition-shadow">
                  <div className="w-10 h-10 bg-[#0a1628] rounded-xl flex items-center justify-center mb-4">
                    <Icon className="w-5 h-5 text-[#f5a623]" />
                  </div>
                  <h3 className="font-semibold text-[#0a1628] mb-2">{title}</h3>
                  <p className="text-gray-500 text-sm leading-relaxed">{desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Courses */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <span className="text-[#f5a623] font-semibold text-sm uppercase tracking-widest">Course Tracks</span>
            <h2 className="text-3xl md:text-4xl font-bold text-[#0a1628] mt-3 mb-4">Three tracks. One goal.</h2>
            <p className="text-gray-500 text-lg max-w-xl mx-auto">
              Whether you&apos;re just starting out or ready to master advanced strategies, there&apos;s a track for you.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {courses.map((course) => {
              const Icon = course.icon;
              return (
                <div key={course.id} className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-xl transition-shadow border border-gray-100 flex flex-col">
                  <div className="flex items-start justify-between mb-6">
                    <div className={`w-12 h-12 ${course.color} rounded-xl flex items-center justify-center`}>
                      <Icon className="w-6 h-6" />
                    </div>
                    <span className={`text-xs font-semibold px-3 py-1 rounded-full ${course.badgeColor}`}>{course.badge}</span>
                  </div>
                  <h3 className="text-xl font-bold text-[#0a1628] mb-3">{course.title}</h3>
                  <p className="text-gray-500 text-sm leading-relaxed mb-6">{course.description}</p>
                  <ul className="space-y-2 mb-8 flex-1">
                    {course.topics.map((topic) => (
                      <li key={topic} className="flex items-center gap-2 text-sm text-gray-600">
                        <CheckCircle className="w-4 h-4 text-green-500 shrink-0" />
                        {topic}
                      </li>
                    ))}
                  </ul>
                  <Link href={course.href} className="mt-auto inline-flex items-center justify-center gap-2 bg-[#0a1628] text-white font-semibold py-3 px-6 rounded-full hover:bg-[#1a2d4f] transition-colors">
                    Start Learning <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Games */}
      <section className="py-20 bg-[#0a1628]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <span className="text-[#f5a623] font-semibold text-sm uppercase tracking-widest">Interactive Games</span>
            <h2 className="text-3xl md:text-4xl font-bold text-white mt-3 mb-4">Learning that feels like play</h2>
            <p className="text-gray-400 text-lg max-w-xl mx-auto">
              Five games that turn complex financial concepts into hands-on experiences you won&apos;t forget.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {games.map((game) => (
              <Link key={game.title} href={game.href} className="group relative bg-[#1a2d4f] rounded-2xl p-6 hover:scale-[1.02] transition-transform overflow-hidden block">
                <div className={`absolute inset-0 bg-gradient-to-br ${game.color} opacity-0 group-hover:opacity-10 transition-opacity`} />
                <div className="text-4xl mb-4">{game.emoji}</div>
                <h3 className="text-white font-bold text-lg mb-2">{game.title}</h3>
                <p className="text-gray-400 text-sm leading-relaxed mb-4">{game.description}</p>
                <span className="inline-flex items-center gap-1 text-[#f5a623] text-sm font-semibold">
                  Play Now <ChevronRight className="w-4 h-4" />
                </span>
              </Link>
            ))}
          </div>
          <div className="text-center mt-10">
            <Link href="/games" className="inline-flex items-center gap-2 border border-white/30 text-white font-semibold px-8 py-3 rounded-full hover:bg-white/10 transition-colors">
              View All Games <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <span className="text-[#f5a623] font-semibold text-sm uppercase tracking-widest">Testimonials</span>
            <h2 className="text-3xl md:text-4xl font-bold text-[#0a1628] mt-3">What our community says</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((t) => (
              <div key={t.name} className="bg-gray-50 rounded-2xl p-8 border border-gray-100">
                <div className="flex gap-1 mb-5">
                  {Array.from({ length: t.rating }).map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-[#f5a623] fill-[#f5a623]" />
                  ))}
                </div>
                <p className="text-gray-700 leading-relaxed mb-6 italic">&ldquo;{t.quote}&rdquo;</p>
                <div>
                  <div className="font-semibold text-[#0a1628]">{t.name}</div>
                  <div className="text-sm text-gray-500">{t.role}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="py-20 bg-[#f5a623]">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-[#0a1628] mb-4">Stay in the loop</h2>
          <p className="text-[#0a1628]/80 text-lg mb-8">
            Get the latest financial tips, new course updates, and game releases delivered to your inbox.
          </p>
          <form className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-5 py-3 rounded-full text-[#0a1628] placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#0a1628]"
            />
            <button type="submit" className="bg-[#0a1628] text-white font-semibold px-7 py-3 rounded-full hover:bg-[#1a2d4f] transition-colors whitespace-nowrap">
              Subscribe
            </button>
          </form>
        </div>
      </section>
    </div>
  );
}
