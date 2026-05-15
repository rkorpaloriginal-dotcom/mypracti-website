import dynamic from 'next/dynamic'

const ThreeCanvas = dynamic(() => import('./ThreeCanvas'), { ssr: false })

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-[#f0f9ff] via-[#eef2ff] to-[#f5f3ff]">
      <ThreeCanvas />
      <div className="relative z-10 text-center px-6 max-w-3xl mx-auto">
        <div className="inline-flex items-center gap-2 bg-brand-700/10 border border-brand-200 text-brand-700 text-xs font-bold uppercase tracking-widest px-4 py-2 rounded-full mb-8">
          Dashboard — Coming Soon
        </div>
        <h1 className="text-5xl md:text-6xl font-extrabold text-brand-900 leading-tight tracking-tight mb-6">
          We build websites for{' '}
          <span className="text-brand-700">dental practices</span>
        </h1>
        <p className="text-lg text-slate-500 max-w-lg mx-auto leading-relaxed mb-10">
          We design modern dental websites and create AI solutions that help your practice grow.
        </p>
        <div className="flex flex-wrap items-center justify-center gap-4">
          <a
            href="#contact"
            className="bg-brand-700 text-white font-semibold px-8 py-3 rounded-lg hover:bg-brand-600 transition-colors shadow-lg shadow-brand-700/20"
          >
            Book a Free Call
          </a>
          <a
            href="#services"
            className="bg-white text-brand-700 font-semibold px-8 py-3 rounded-lg border-2 border-brand-200 hover:border-brand-400 transition-colors"
          >
            See Our Services
          </a>
        </div>
      </div>
    </section>
  )
}
