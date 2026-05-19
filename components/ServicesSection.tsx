'use client'
import { useRef } from 'react'
import { useScrollReveal } from '@/hooks/useScrollReveal'

const services = [
  {
    num: '01',
    title: 'Website Design',
    body: 'Modern, fast, mobile-first websites tailored to your practice.',
    badge: null,
  },
  {
    num: '02',
    title: 'AI Solutions',
    body: 'Chatbots, automated booking, and smart tools that save your team time.',
    badge: null,
  },
  {
    num: '03',
    title: 'Practice Dashboard',
    body: 'All-in-one management platform — launching soon.',
    badge: 'Coming Soon',
  },
]

export default function ServicesSection() {
  const sectionRef = useRef<HTMLElement>(null)
  useScrollReveal(sectionRef)

  return (
    <section
      ref={sectionRef}
      id="services"
      data-reveal
      className="py-24 px-6 relative overflow-hidden"
      style={{ backgroundColor: '#0a0a0f' }}
    >
      <div className="max-w-5xl mx-auto">
        <div className="gold-rule mb-16" />

        <p
          className="font-dm-serif select-none pointer-events-none absolute"
          style={{
            fontSize: '160px',
            color: 'rgba(212,175,55,0.06)',
            lineHeight: 1,
            top: '0',
            left: '0',
          }}
          aria-hidden="true"
        >
          02
        </p>

        <div className="text-center mb-14">
          <p
            className="font-inter font-semibold uppercase mb-4"
            style={{ fontSize: '10px', letterSpacing: '4px', color: '#d4af37' }}
          >
            WHAT WE DO
          </p>
          <h2 className="font-dm-serif text-white" style={{ fontSize: 'clamp(32px,5vw,52px)' }}>
            Built for dental practices
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {services.map((s, i) => (
            <div
              key={s.title}
              className="card-stagger rounded-2xl p-8 transition-[border-color,box-shadow] duration-[250ms] hover:shadow-[0_0_32px_rgba(212,175,55,0.06)]"
              style={{
                backgroundColor: '#0d0d14',
                border: '1px solid rgba(212,175,55,0.12)',
                transitionDelay: `${i * 100}ms`,
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = 'rgba(212,175,55,0.35)'
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = 'rgba(212,175,55,0.12)'
              }}
            >
              <span
                className="font-dm-serif block mb-4 text-[14px]"
                style={{ color: '#d4af37' }}
              >
                {s.num}
              </span>
              <h3 className="font-dm-serif text-white text-[22px] mb-3 flex items-center gap-2 flex-wrap">
                {s.title}
                {s.badge && (
                  <span
                    className="font-inter text-[10px] font-bold px-2 py-0.5 rounded-full"
                    style={{ backgroundColor: '#d4af37', color: '#0a0a0f' }}
                  >
                    {s.badge}
                  </span>
                )}
              </h3>
              <p className="font-inter text-[14px]" style={{ color: '#94a3b8' }}>
                {s.body}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
