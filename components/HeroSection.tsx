import dynamic from 'next/dynamic'

const ThreeCanvas = dynamic(() => import('./ThreeCanvas'), { ssr: false })

const HEADLINE = ['We', 'build', 'websites', 'for']
const GOLD_TEXT = 'dental practices'

export default function HeroSection() {
  return (
    <section
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
      style={{ backgroundColor: '#0a0a0f' }}
    >
      <ThreeCanvas />

      <div className="relative z-10 text-center px-6 max-w-[700px] mx-auto">
        {/* Label */}
        <p
          className="font-inter font-semibold uppercase mb-8"
          style={{
            fontSize: '10px',
            letterSpacing: '4px',
            color: '#d4af37',
            animation: 'fadeInUp 300ms cubic-bezier(0.16,1,0.3,1) both',
          }}
        >
          DENTAL WEBSITES · AI SOLUTIONS
        </p>

        {/* Headline — word-by-word clip-path reveal */}
        <h1
          className="font-dm-serif text-white mb-6"
          style={{ fontSize: 'clamp(56px,8vw,96px)', lineHeight: 1.1 }}
        >
          {HEADLINE.map((word, i) => (
            <span key={i} className="inline-block">
              <span
                className="word-reveal"
                style={{ animationDelay: `${200 + i * 80}ms` }}
              >
                {word}
              </span>
              {' '}
            </span>
          ))}
          <br />
          <span
            className="word-reveal"
            style={{ color: '#d4af37', animationDelay: `${200 + HEADLINE.length * 80}ms` }}
          >
            {GOLD_TEXT}
          </span>
        </h1>

        {/* Subheading */}
        <p
          className="font-inter mx-auto mb-10"
          style={{
            fontSize: '17px',
            maxWidth: '480px',
            color: '#94a3b8',
            animation: 'fadeInUp 600ms cubic-bezier(0.16,1,0.3,1) 900ms both',
          }}
        >
          We design modern websites and build AI tools that help your practice grow.
        </p>

        {/* CTAs */}
        <div
          className="flex flex-wrap items-center justify-center gap-4"
          style={{ animation: 'fadeInUp 600ms cubic-bezier(0.16,1,0.3,1) 1100ms both' }}
        >
          <a
            href="#contact"
            className="font-inter font-semibold text-[14px] px-8 py-3 rounded-lg transition-colors"
            style={{ backgroundColor: '#d4af37', color: '#0a0a0f' }}
          >
            Book a Free Call
          </a>
          <a
            href="#services"
            className="font-inter font-semibold text-[14px] px-8 py-3 rounded-lg border transition-colors hover:bg-gold hover:text-surface-primary"
            style={{ borderColor: '#d4af37', color: '#d4af37' }}
          >
            See Our Services
          </a>
        </div>

        {/* Scroll indicator */}
        <div className="mt-16 flex justify-center">
          <div
            className="w-px h-6 bg-gold"
            style={{ animation: 'scrollPulse 2s ease-in-out infinite' }}
          />
        </div>
      </div>
    </section>
  )
}
