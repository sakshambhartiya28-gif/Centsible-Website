import Link from 'next/link';
import { ArrowRight, Heart, Target, Eye } from 'lucide-react';

const team = [
  { name: 'Placeholder Name', role: 'Founder & CEO', bio: 'Passionate about closing the financial literacy gap for young people across the country.' },
  { name: 'Placeholder Name', role: 'Head of Curriculum', bio: 'Financial educator with 10+ years designing engaging learning experiences for teens.' },
  { name: 'Placeholder Name', role: 'Lead Game Designer', bio: 'Bringing complex financial concepts to life through immersive games and simulations.' },
  { name: 'Placeholder Name', role: 'Community Director', bio: 'Building partnerships with schools and nonprofits to expand our reach.' },
];

const values = [
  { icon: Heart, title: 'Accessibility', desc: 'Financial education should be available to every student, regardless of background or income.' },
  { icon: Target, title: 'Impact', desc: 'We measure success not by metrics, but by students who make better financial decisions.' },
  { icon: Eye, title: 'Transparency', desc: 'We are open about our methods, funding, and outcomes. Trust is earned through honesty.' },
];

const milestones = [
  { year: '2021', event: 'Centsible founded with a mission to democratize financial education.' },
  { year: '2022', event: 'Foundation course launched, reaching 1,000 students in the first year.' },
  { year: '2023', event: 'Growth and Security tracks added. First interactive game released.' },
  { year: '2024', event: 'Partnerships with 50+ schools. 5,000+ students reached.' },
  { year: '2025', event: 'Expanded to 5 games. Reached 10,000+ students nationwide.' },
];

export default function AboutPage() {
  return (
    <div>
      {/* Header */}
      <section className="bg-[#0a1628] text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="text-[#f5a623] font-semibold text-sm uppercase tracking-widest">Our Story</span>
          <h1 className="text-4xl md:text-5xl font-bold mt-3 mb-5">About Centsible</h1>
          <p className="text-gray-300 text-lg max-w-2xl mx-auto">
            We started with one question: why doesn&apos;t school teach us about money? We built Centsible to answer it.
          </p>
        </div>
      </section>

      {/* Mission / Vision */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div>
              <span className="text-[#f5a623] font-semibold text-sm uppercase tracking-widest">Who We Are</span>
              <h2 className="text-3xl md:text-4xl font-bold text-[#0a1628] mt-3 mb-6">Built by educators. Driven by purpose.</h2>
              <p className="text-gray-600 text-lg leading-relaxed mb-5">
                Centsible is a nonprofit financial literacy platform dedicated to equipping teens and young adults with the money skills they need to thrive. We combine expert-designed curriculum with interactive games to make financial education engaging, accessible, and free.
              </p>
              <p className="text-gray-600 text-lg leading-relaxed">
                We partner with schools, community organizations, and teachers to bring Centsible into classrooms and after-school programs across the country.
              </p>
            </div>
            <div className="space-y-6">
              {values.map(({ icon: Icon, title, desc }) => (
                <div key={title} className="flex gap-5 p-6 bg-gray-50 rounded-2xl">
                  <div className="w-12 h-12 bg-[#0a1628] rounded-xl flex items-center justify-center shrink-0">
                    <Icon className="w-6 h-6 text-[#f5a623]" />
                  </div>
                  <div>
                    <h3 className="font-bold text-[#0a1628] mb-1">{title}</h3>
                    <p className="text-gray-500 text-sm leading-relaxed">{desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <span className="text-[#f5a623] font-semibold text-sm uppercase tracking-widest">Journey</span>
            <h2 className="text-3xl md:text-4xl font-bold text-[#0a1628] mt-3">Our Milestones</h2>
          </div>
          <div className="relative">
            <div className="absolute left-6 top-0 bottom-0 w-0.5 bg-gray-200" />
            <div className="space-y-8">
              {milestones.map((m) => (
                <div key={m.year} className="flex gap-8 items-start">
                  <div className="w-12 h-12 bg-[#0a1628] rounded-full flex items-center justify-center shrink-0 relative z-10">
                    <span className="text-[#f5a623] font-bold text-xs">{m.year.slice(2)}</span>
                  </div>
                  <div className="bg-white border border-gray-100 rounded-2xl p-5 flex-1 shadow-sm">
                    <span className="text-[#f5a623] font-bold text-sm">{m.year}</span>
                    <p className="text-gray-700 mt-1">{m.event}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <span className="text-[#f5a623] font-semibold text-sm uppercase tracking-widest">The Team</span>
            <h2 className="text-3xl md:text-4xl font-bold text-[#0a1628] mt-3">The people behind Centsible</h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member) => (
              <div key={member.name + member.role} className="text-center">
                <div className="w-24 h-24 bg-gray-200 rounded-full mx-auto mb-4 flex items-center justify-center">
                  <span className="text-4xl">👤</span>
                </div>
                <h3 className="font-bold text-[#0a1628] mb-1">{member.name}</h3>
                <p className="text-[#f5a623] text-sm font-semibold mb-3">{member.role}</p>
                <p className="text-gray-500 text-sm leading-relaxed">{member.bio}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-[#0a1628] py-16">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">Want to partner with us?</h2>
          <p className="text-gray-300 mb-8">We work with schools, nonprofits, and community organizations. Reach out to learn more.</p>
          <Link href="/contact" className="inline-flex items-center gap-2 bg-[#f5a623] text-[#0a1628] font-bold px-8 py-4 rounded-full hover:bg-[#fbbf47] transition-colors">
            Get in Touch <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </section>
    </div>
  );
}
