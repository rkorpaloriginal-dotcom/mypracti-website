const steps = [
  {
    number: 1,
    title: 'We build your site',
    description: 'Custom design tailored to your practice and brand.',
  },
  {
    number: 2,
    title: 'We add AI tools',
    description: 'Chatbots, smart booking, and automation built in.',
  },
  {
    number: 3,
    title: 'Your practice grows',
    description: 'More patients, less admin, better experience.',
  },
]

export default function HowItWorksSection() {
  return (
    <section id="how-it-works" className="bg-white py-24 px-6">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <p className="text-brand-500 text-xs font-bold uppercase tracking-widest mb-3">
            The Process
          </p>
          <h2 className="text-3xl md:text-4xl font-extrabold text-brand-900 tracking-tight">
            How it works
          </h2>
        </div>
        <div className="relative flex flex-col md:flex-row gap-12 md:gap-0">
          <div className="hidden md:block absolute top-6 left-[16%] right-[16%] h-0.5 bg-gradient-to-r from-brand-200 via-brand-700 to-brand-200" />
          {steps.map((step) => (
            <div key={step.number} className="flex-1 text-center px-6">
              <div className="w-12 h-12 rounded-full bg-brand-700 text-white text-lg font-extrabold flex items-center justify-center mx-auto mb-5 relative z-10">
                {step.number}
              </div>
              <h3 className="font-bold text-brand-900 mb-2">{step.title}</h3>
              <p className="text-sm text-slate-500 leading-relaxed">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
