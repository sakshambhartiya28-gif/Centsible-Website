import { Mail, Phone, MapPin, Clock, Send } from 'lucide-react';

const contactInfo = [
  { icon: Mail, label: 'Email', value: 'hello@centsible.org' },
  { icon: Phone, label: 'Phone', value: '+1 (555) 000-0000' },
  { icon: MapPin, label: 'Location', value: 'New York, NY' },
  { icon: Clock, label: 'Response Time', value: 'Within 24 hours' },
];

const reasons = [
  'General Inquiry',
  'School / Classroom Partnership',
  'Nonprofit / Community Partnership',
  'Media & Press',
  'Volunteer / Mentorship',
  'Feedback',
  'Other',
];

export default function ContactPage() {
  return (
    <div>
      {/* Header */}
      <section className="bg-[#0a1628] text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="text-[#f5a623] font-semibold text-sm uppercase tracking-widest">Get in Touch</span>
          <h1 className="text-4xl md:text-5xl font-bold mt-3 mb-5">Contact Us</h1>
          <p className="text-gray-300 text-lg max-w-xl mx-auto">
            Whether you&apos;re a teacher, parent, student, or organization — we&apos;d love to hear from you.
          </p>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid lg:grid-cols-3 gap-12">
          {/* Contact Info */}
          <div>
            <h2 className="text-xl font-bold text-[#0a1628] mb-8">Contact Information</h2>
            <div className="space-y-6">
              {contactInfo.map(({ icon: Icon, label, value }) => (
                <div key={label} className="flex gap-4 items-start">
                  <div className="w-10 h-10 bg-[#0a1628] rounded-xl flex items-center justify-center shrink-0">
                    <Icon className="w-5 h-5 text-[#f5a623]" />
                  </div>
                  <div>
                    <p className="text-xs text-gray-400 uppercase tracking-wide mb-0.5">{label}</p>
                    <p className="font-medium text-[#0a1628]">{value}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Partner CTA */}
            <div className="mt-12 bg-[#0a1628] rounded-2xl p-6 text-white">
              <h3 className="font-bold text-lg mb-2">Bring Centsible to Your School</h3>
              <p className="text-gray-300 text-sm leading-relaxed mb-4">
                We offer free curriculum partnerships, teacher training, and classroom resources. Reach out and let&apos;s talk.
              </p>
              <span className="text-[#f5a623] text-sm font-semibold">partnerships@centsible.org</span>
            </div>
          </div>

          {/* Form */}
          <div className="lg:col-span-2">
            <div className="bg-white border border-gray-100 rounded-3xl p-8 shadow-sm">
              <h2 className="text-xl font-bold text-[#0a1628] mb-8">Send us a message</h2>
              <form className="space-y-6">
                <div className="grid sm:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">First Name</label>
                    <input
                      type="text"
                      placeholder="Jane"
                      className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-[#0a1628] focus:border-transparent"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Last Name</label>
                    <input
                      type="text"
                      placeholder="Doe"
                      className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-[#0a1628] focus:border-transparent"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Email Address</label>
                  <input
                    type="email"
                    placeholder="jane@example.com"
                    className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-[#0a1628] focus:border-transparent"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">I am reaching out about...</label>
                  <select className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-[#0a1628] focus:border-transparent bg-white">
                    <option value="">Select a reason</option>
                    {reasons.map((r) => (
                      <option key={r} value={r}>{r}</option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Organization (optional)</label>
                  <input
                    type="text"
                    placeholder="Your school, company, or organization"
                    className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-[#0a1628] focus:border-transparent"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Message</label>
                  <textarea
                    rows={5}
                    placeholder="Tell us what's on your mind..."
                    className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-[#0a1628] focus:border-transparent resize-none"
                  />
                </div>

                <button
                  type="submit"
                  className="inline-flex items-center gap-2 bg-[#0a1628] text-white font-semibold px-8 py-3.5 rounded-full hover:bg-[#1a2d4f] transition-colors"
                >
                  <Send className="w-4 h-4" /> Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
