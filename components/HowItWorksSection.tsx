'use client'
import { useRef } from 'react'
import { useScrollReveal } from '@/hooks/useScrollReveal'

const steps = [
  {
    number: '1',
    title: 'We build your site',
    body: 'Custom design tailored to your practice and brand.',
  },
  {
    number: '2',
    title: 'We add AI tools',
    body: 'Chatbots, smart booking, and automation built in.',
  },
  {
    number: '3',
    title: 'Your practice grows',
    body: 'More patients, less admin, better experience.',
  },
]

export default function HowItWorksSection() {
  const sectionRef = useRef<HTMLElement>(null)
  useScrollReveal(sectionRef)

  return (
    <section
      ref={sectionRef}
      id="how-it-works"
      data-reveal
      className="py-24 px-6"
      style={{ backgroundColor: '#111118' }}
    >
      <div className="max-w-4xl mx-auto">
        <div className="gold-rule mb-16" />

        <div className="text-center mb-16">
          <p
            className="font-inter font-semibold uppercase mb-4"
            style={{ fontSize: '10px', letterSpacing: '4px', color: '#d4af37' }}
          >
            THE PROCESS
          </p>
          <h2 className="font-dm-serif text-white" style={{ fontSize: 'clamp(32px,5vw,48px)' }}>
            How it works
          </h2>
        </div>

        <div className="relative flex flex-col md:flex-row gap-12 md:gap-0">
          {/* Desktop connector — dashed gold line between step circles */}
          <svg
            className="hidden md:block absolute"
            style={{ top: '22px', left: '16%', width: '68%', height: '2px' }}
            preserveAspectRatio="none"
            aria-hidden="true"
          >
            <line
              x1="0"
              y1="1"
              x2="100%"
              y2="1"
              stroke="rgba(212,175,55,0.3)"
              strokeWidth="1"
              strokeDasharray="4 4"
            />
          </svg>

          {steps.map((step, i) => (
            <div
              key={step.number}
              className="step-stagger flex-1 text-center px-6"
              style={{ transitionDelay: `${i * 200}ms` }}
            >
              <div
                className="font-dm-serif text-white w-11 h-11 rounded-full flex items-center justify-center mx-auto mb-5 relative z-10 text-[20px]"
                style={{
                  border: '1px solid rgba(212,175,55,0.4)',
                  backgroundColor: '#111118',
                }}
              >
                {step.number}
              </div>
              <h3 className="font-inter font-semibold text-white mb-2">{step.title}</h3>
              <p className="font-inter text-[14px]" style={{ color: '#94a3b8' }}>
                {step.body}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
