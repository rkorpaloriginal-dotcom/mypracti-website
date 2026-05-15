const services = [
  {
    icon: '🦷',
    title: 'Website Design',
    description: 'Modern, fast, mobile-first websites designed specifically for dental practices.',
    badge: null,
  },
  {
    icon: '🤖',
    title: 'AI Solutions',
    description: 'AI chatbots, automated booking, and intelligent tools that save your team time.',
    badge: null,
  },
  {
    icon: '📊',
    title: 'Practice Dashboard',
    description: 'All-in-one management platform for your practice. Launching soon.',
    badge: 'Coming Soon',
  },
]

export default function ServicesSection() {
  return (
    <section id="services" className="bg-[#fafafa] py-24 px-6">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-14">
          <p className="text-brand-500 text-xs font-bold uppercase tracking-widest mb-3">
            What We Do
          </p>
          <h2 className="text-3xl md:text-4xl font-extrabold text-brand-900 tracking-tight">
            Built for dental practices
          </h2>
        </div>
        <div className="grid md:grid-cols-3 gap-6">
          {services.map((s) => (
            <div
              key={s.title}
              className={`bg-white rounded-2xl border p-8 ${
                s.badge
                  ? 'border-brand-200 bg-gradient-to-br from-white to-brand-50'
                  : 'border-slate-200'
              }`}
            >
              <div className="text-4xl mb-4">{s.icon}</div>
              <h3
                className={`font-bold text-lg mb-2 flex items-center gap-2 ${
                  s.badge ? 'text-brand-700' : 'text-brand-900'
                }`}
              >
                {s.title}
                {s.badge && (
                  <span className="text-[10px] bg-brand-700 text-white px-2 py-0.5 rounded-full font-bold">
                    {s.badge}
                  </span>
                )}
              </h3>
              <p className="text-slate-500 text-sm leading-relaxed">{s.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
