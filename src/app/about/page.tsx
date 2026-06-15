import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight, Heart, Target, Eye, Globe } from 'lucide-react';

const founders = [
  {
    name: 'Saksham Bhartiya',
    role: 'Co-Founder',
    bio: 'Passionate about making financial literacy accessible to every young person, Saksham co-founded Centsible to bridge the gap between school curriculum and real-world money skills.',
    initials: 'SB',
  },
  {
    name: 'Vedika Ganeriwal',
    role: 'Co-Founder',
    bio: 'Vedika brings a deep commitment to financial education equity, driving Centsible\'s mission to ensure no student enters adulthood without the tools to manage their financial future.',
    initials: 'VG',
  },
];

const team = [
  {
    name: 'Shambhavi Pendke',
    role: 'Service Head',
    bio: 'Shambhavi oversees service delivery and partnerships, ensuring Centsible\'s programs reach students across schools and community organisations.',
    initials: 'SP',
  },
  {
    name: 'Kashisha Goel',
    role: 'Editor',
    bio: 'Kashisha leads content quality and editorial standards, making sure every lesson is accurate, engaging, and age-appropriate for our learners.',
    initials: 'KG',
  },
  {
    name: 'Aaryan Berera',
    role: 'Australia Head',
    bio: 'Aaryan leads Centsible\'s expansion across Australia, building local partnerships and adapting our curriculum for Australian students.',
    initials: 'AB',
  },
];

const values = [
  { icon: Heart, title: 'Accessibility', desc: 'Financial education should be free and available to every student, regardless of background or income.' },
  { icon: Target, title: 'Impact', desc: 'We measure success not by metrics alone, but by the real-world decisions our students make with confidence.' },
  { icon: Eye, title: 'Transparency', desc: 'We are open about our methods, our funding, and our outcomes. Trust is earned through honesty.' },
  { icon: Globe, title: 'Global Reach', desc: 'From New York to Australia, we are building a worldwide movement of financially literate young people.' },
];

const milestones = [
  { year: '2021', event: 'Centsible founded with a mission to democratise financial education for the next generation.' },
  { year: '2022', event: 'Foundation course launched, reaching 1,000 students in its first year.' },
  { year: '2023', event: 'Growth and Security tracks added. First interactive games released.' },
  { year: '2024', event: 'Partnerships with 50+ schools. 5,000+ students reached across multiple countries.' },
  { year: '2025', event: 'Expanded to 5 games and launched in Australia. 10,000+ students reached worldwide.' },
];

function Avatar({ initials, size = 'lg' }: { initials: string; size?: 'lg' | 'md' }) {
  const dim = size === 'lg' ? 'w-24 h-24 text-2xl' : 'w-16 h-16 text-lg';
  return (
    <div className={`${dim} rounded-full bg-gradient-to-br from-[#0a1628] to-[#1a2d4f] flex items-center justify-center font-bold text-[#f5a623] mx-auto border-2 border-[#f5a623]/30`}>
      {initials}
    </div>
  );
}

export default function AboutPage() {
  return (
    <div>
      {/* Hero */}
      <section className="relative bg-[#0a1628] text-white py-24 overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-0 right-0 w-96 h-96 bg-[#f5a623] rounded-full blur-3xl opacity-5" />
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-blue-500 rounded-full blur-3xl opacity-5" />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <div className="flex items-center gap-3 mb-6">
              <Image src="/centsible-logo.svg" alt="Centsible" width={52} height={52} className="rounded-full" />
              <span className="text-[#f5a623] font-semibold text-sm uppercase tracking-widest">Our Story</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-6">
              Built by students,<br />
              <span className="text-[#f5a623]">for students.</span>
            </h1>
            <p className="text-gray-300 text-lg leading-relaxed max-w-2xl">
              Centsible started with a simple observation: the education system teaches calculus but not how to file a tax return. We set out to change that — with free, engaging, and expert-designed financial education for the next generation.
            </p>
          </div>
        </div>
      </section>

      {/* Mission & Values */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            <div>
              <span className="text-[#f5a623] font-semibold text-sm uppercase tracking-widest">Our Mission</span>
              <h2 className="text-3xl md:text-4xl font-bold text-[#0a1628] mt-3 mb-6 leading-tight">
                Financial literacy is a right, not a privilege.
              </h2>
              <p className="text-gray-600 text-lg leading-relaxed mb-5">
                Most schools don't teach personal finance. Millions of young people enter adulthood without knowing how to budget, invest, or protect themselves from financial fraud — not because they aren't capable, but because no one taught them.
              </p>
              <p className="text-gray-600 text-lg leading-relaxed mb-8">
                Centsible exists to close that gap. Through three expert-designed course tracks, interactive games, and a free resource library, we give every student the tools they need to take control of their financial future.
              </p>
              <Link
                href="/courses"
                className="inline-flex items-center gap-2 bg-[#0a1628] text-white font-semibold px-7 py-3 rounded-full hover:bg-[#1a2d4f] transition-colors"
              >
                Explore Our Courses <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
            <div className="grid grid-cols-2 gap-4">
              {values.map(({ icon: Icon, title, desc }) => (
                <div key={title} className="bg-gray-50 rounded-2xl p-6 border border-gray-100 hover:shadow-md transition-shadow">
                  <div className="w-10 h-10 bg-[#0a1628] rounded-xl flex items-center justify-center mb-4">
                    <Icon className="w-5 h-5 text-[#f5a623]" />
                  </div>
                  <h3 className="font-bold text-[#0a1628] mb-2 text-sm">{title}</h3>
                  <p className="text-gray-500 text-xs leading-relaxed">{desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Founders */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <span className="text-[#f5a623] font-semibold text-sm uppercase tracking-widest">Leadership</span>
            <h2 className="text-3xl md:text-4xl font-bold text-[#0a1628] mt-3">Meet Our Founders</h2>
          </div>
          <div className="grid sm:grid-cols-2 gap-8 max-w-3xl mx-auto">
            {founders.map((f) => (
              <div key={f.name} className="bg-white rounded-3xl p-8 text-center shadow-sm border border-gray-100 hover:shadow-lg transition-shadow">
                <Avatar initials={f.initials} size="lg" />
                <h3 className="font-bold text-[#0a1628] text-xl mt-5 mb-1">{f.name}</h3>
                <p className="text-[#f5a623] text-sm font-semibold mb-4">{f.role}</p>
                <p className="text-gray-500 text-sm leading-relaxed">{f.bio}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <span className="text-[#f5a623] font-semibold text-sm uppercase tracking-widest">The Team</span>
            <h2 className="text-3xl md:text-4xl font-bold text-[#0a1628] mt-3">Meet Our Team</h2>
            <p className="text-gray-500 mt-3 max-w-xl mx-auto">The people working every day to make financial education accessible and engaging for students worldwide.</p>
          </div>
          <div className="grid sm:grid-cols-3 gap-8 max-w-4xl mx-auto">
            {team.map((member) => (
              <div key={member.name} className="bg-gray-50 rounded-3xl p-7 text-center border border-gray-100 hover:shadow-md transition-shadow">
                <Avatar initials={member.initials} size="md" />
                <h3 className="font-bold text-[#0a1628] text-lg mt-4 mb-1">{member.name}</h3>
                <p className="text-[#f5a623] text-xs font-semibold uppercase tracking-widest mb-3">{member.role}</p>
                <p className="text-gray-500 text-sm leading-relaxed">{member.bio}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-20 bg-[#0a1628]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <span className="text-[#f5a623] font-semibold text-sm uppercase tracking-widest">Journey</span>
            <h2 className="text-3xl md:text-4xl font-bold text-white mt-3">Our Milestones</h2>
          </div>
          <div className="relative pl-8 border-l-2 border-white/10 space-y-10">
            {milestones.map((m) => (
              <div key={m.year} className="relative">
                <div className="absolute -left-[41px] w-5 h-5 rounded-full bg-[#f5a623] border-4 border-[#0a1628]" />
                <div className="bg-white/5 border border-white/10 rounded-2xl p-6 hover:bg-white/10 transition-colors">
                  <span className="text-[#f5a623] font-bold text-sm">{m.year}</span>
                  <p className="text-gray-300 mt-1.5 leading-relaxed">{m.event}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <Image src="/centsible-logo.svg" alt="Centsible" width={64} height={64} className="mx-auto mb-6 rounded-full" />
          <h2 className="text-3xl md:text-4xl font-bold text-[#0a1628] mb-4">Want to partner with us?</h2>
          <p className="text-gray-500 text-lg mb-8 max-w-xl mx-auto">
            We collaborate with schools, nonprofits, and community organisations to bring Centsible into classrooms everywhere.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact" className="inline-flex items-center justify-center gap-2 bg-[#0a1628] text-white font-bold px-8 py-4 rounded-full hover:bg-[#1a2d4f] transition-colors">
              Get in Touch <ArrowRight className="w-5 h-5" />
            </Link>
            <Link href="/courses" className="inline-flex items-center justify-center gap-2 border border-gray-200 text-gray-700 font-semibold px-8 py-4 rounded-full hover:bg-gray-50 transition-colors">
              Explore Courses
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
