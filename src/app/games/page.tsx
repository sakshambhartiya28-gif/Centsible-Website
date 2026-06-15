import Link from 'next/link';
import { ArrowRight, Gamepad2 } from 'lucide-react';

const games = [
  {
    id: 'scam-spotter',
    emoji: '🎯',
    gradient: 'from-red-600 to-orange-500',
    title: 'Scam Spotter',
    tag: 'Security',
    tagColor: 'bg-red-100 text-red-700',
    difficulty: 'All Levels',
    players: 'Solo',
    description: 'Put your detective skills to the test. In Scam Spotter, you are presented with real-looking emails, text messages, phone calls, and websites — and you have to decide: real or scam?',
    skills: ['Phishing identification', 'Critical thinking', 'Fraud awareness', 'Decision making'],
    comingSoon: false,
  },
  {
    id: 'investor-island',
    emoji: '🏝️',
    gradient: 'from-blue-600 to-cyan-500',
    title: 'Investor Island',
    tag: 'Investing',
    tagColor: 'bg-blue-100 text-blue-700',
    difficulty: 'Intermediate',
    players: 'Solo / Multiplayer',
    description: 'You arrive on Investor Island with $1,000 in virtual cash. Build businesses, buy stocks, manage risk, and grow your island economy. Can you become the wealthiest investor on the island?',
    skills: ['Portfolio diversification', 'Risk management', 'Market analysis', 'Long-term thinking'],
    comingSoon: false,
  },
  {
    id: 'budget-boss',
    emoji: '💼',
    gradient: 'from-purple-600 to-pink-500',
    title: 'Budget Boss',
    tag: 'Budgeting',
    tagColor: 'bg-purple-100 text-purple-700',
    difficulty: 'Beginner',
    players: 'Solo',
    description: 'You just got your first paycheck. Rent, groceries, utilities, and fun — can you manage it all? Budget Boss challenges you to balance a monthly budget while handling surprise expenses.',
    skills: ['Budget creation', 'Expense tracking', 'Needs vs wants', 'Emergency planning'],
    comingSoon: true,
  },
  {
    id: 'stock-simulator',
    emoji: '📈',
    gradient: 'from-green-600 to-teal-500',
    title: 'Stock Market Simulator',
    tag: 'Investing',
    tagColor: 'bg-green-100 text-green-700',
    difficulty: 'Intermediate',
    players: 'Solo / Multiplayer',
    description: 'Trade virtual stocks in a simulated market that mirrors real market behavior. Watch the news, analyze trends, buy low, sell high — and learn what actually drives prices.',
    skills: ['Stock analysis', 'Market timing', 'Reading charts', 'Portfolio building'],
    comingSoon: true,
  },
  {
    id: 'credit-quest',
    emoji: '⭐',
    gradient: 'from-amber-500 to-yellow-400',
    title: 'Credit Score Quest',
    tag: 'Credit',
    tagColor: 'bg-amber-100 text-amber-700',
    difficulty: 'Beginner',
    players: 'Solo',
    description: 'Embark on a quest to build the perfect 850 credit score. Make smart decisions about credit cards, loans, and payments as you navigate life events that impact your score.',
    skills: ['Credit fundamentals', 'Payment history', 'Debt management', 'Financial decision-making'],
    comingSoon: true,
  },
];

export default function GamesPage() {
  return (
    <div>
      {/* Header */}
      <section className="bg-[#0a1628] text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="text-[#f5a623] font-semibold text-sm uppercase tracking-widest">Interactive Learning</span>
          <h1 className="text-4xl md:text-5xl font-bold mt-3 mb-5">Games & Simulations</h1>
          <p className="text-gray-300 text-lg max-w-2xl mx-auto">
            Financial concepts stick when you live them. Our games put you in real financial situations where every decision has consequences — and rewards.
          </p>
        </div>
      </section>

      {/* Games Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 space-y-8">
        {games.map((game) => (
          <div key={game.id} id={game.id} className="scroll-mt-20 bg-white border border-gray-100 rounded-3xl overflow-hidden shadow-sm hover:shadow-lg transition-shadow">
            <div className="flex flex-col lg:flex-row">
              {/* Visual Panel */}
              <div className={`bg-gradient-to-br ${game.gradient} lg:w-72 p-10 flex items-center justify-center`}>
                <div className="text-8xl">{game.emoji}</div>
              </div>

              {/* Content */}
              <div className="flex-1 p-8">
                <div className="flex flex-wrap items-center gap-3 mb-3">
                  <span className={`text-xs font-semibold px-3 py-1 rounded-full ${game.tagColor}`}>{game.tag}</span>
                  <span className="text-xs text-gray-500 bg-gray-100 px-3 py-1 rounded-full">{game.difficulty}</span>
                  <span className="text-xs text-gray-500 bg-gray-100 px-3 py-1 rounded-full">{game.players}</span>
                  {game.comingSoon && (
                    <span className="text-xs font-semibold bg-[#f5a623]/20 text-[#f5a623] px-3 py-1 rounded-full border border-[#f5a623]/30">
                      Coming Soon
                    </span>
                  )}
                </div>

                <h2 className="text-2xl font-bold text-[#0a1628] mb-3">{game.title}</h2>
                <p className="text-gray-600 leading-relaxed mb-6">{game.description}</p>

                <div className="mb-6">
                  <p className="text-sm font-semibold text-gray-500 mb-3 uppercase tracking-wide">Skills You&apos;ll Build</p>
                  <div className="flex flex-wrap gap-2">
                    {game.skills.map((skill) => (
                      <span key={skill} className="text-sm bg-gray-50 border border-gray-200 text-gray-700 px-3 py-1 rounded-full">
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>

                {game.comingSoon ? (
                  <button disabled className="inline-flex items-center gap-2 bg-gray-200 text-gray-400 font-semibold py-3 px-7 rounded-full cursor-not-allowed">
                    <Gamepad2 className="w-4 h-4" /> Coming Soon
                  </button>
                ) : (
                  <Link href="#" className="inline-flex items-center gap-2 bg-[#0a1628] text-white font-semibold py-3 px-7 rounded-full hover:bg-[#1a2d4f] transition-colors">
                    <Gamepad2 className="w-4 h-4" /> Play Now
                  </Link>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* CTA */}
      <section className="bg-gray-50 py-16">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <h2 className="text-2xl font-bold text-[#0a1628] mb-4">Want games in your classroom?</h2>
          <p className="text-gray-600 mb-6">We offer free teacher resources and classroom game modes. Get in touch to learn more.</p>
          <Link href="/contact" className="inline-flex items-center gap-2 bg-[#0a1628] text-white font-semibold px-8 py-3 rounded-full hover:bg-[#1a2d4f] transition-colors">
            Contact Us <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>
    </div>
  );
}
