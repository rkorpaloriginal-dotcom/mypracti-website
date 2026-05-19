'use client'
import { useState, useRef } from 'react'
import { useScrollReveal } from '@/hooks/useScrollReveal'

export default function WaitlistSection() {
  const [email, setEmail] = useState('')
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle')
  const sectionRef = useRef<HTMLElement>(null)
  useScrollReveal(sectionRef)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setStatus('loading')
    try {
      const res = await fetch(
        `https://formspree.io/f/${process.env.NEXT_PUBLIC_FORMSPREE_WAITLIST_ID}`,
        {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ email }),
        },
      )
      if (res.ok) {
        setStatus('success')
        setEmail('')
      } else {
        setStatus('error')
      }
    } catch (err) {
      console.error('Waitlist form error:', err)
      setStatus('error')
    }
  }

  return (
    <section
      ref={sectionRef}
      id="waitlist"
      data-reveal
      className="py-24 px-6 relative overflow-hidden"
      style={{ backgroundColor: '#111118' }}
    >
      <div className="max-w-2xl mx-auto text-center relative">
        <div className="gold-rule mx-auto mb-12" />

        <p
          className="font-dm-serif select-none pointer-events-none absolute"
          style={{
            fontSize: '160px',
            color: 'rgba(212,175,55,0.06)',
            lineHeight: 1,
            top: '-40px',
            left: '-20px',
          }}
          aria-hidden="true"
        >
          01
        </p>

        <p
          className="font-inter font-semibold uppercase mb-4"
          style={{ fontSize: '10px', letterSpacing: '4px', color: '#d4af37' }}
        >
          MYPRACTI DASHBOARD
        </p>

        <h2
          className="font-dm-serif text-white mb-4"
          style={{ fontSize: 'clamp(32px,5vw,48px)' }}
        >
          Be first to access the platform
        </h2>

        <p
          className="font-inter mb-10"
          style={{ fontSize: '15px', color: '#94a3b8' }}
        >
          A complete practice management platform — launching soon.
        </p>

        {status === 'success' ? (
          <p className="font-inter font-semibold text-white">✓ You&apos;re on the list.</p>
        ) : (
          <form
            onSubmit={handleSubmit}
            className="flex flex-wrap justify-center gap-3 max-w-md mx-auto"
          >
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              aria-label="Email address"
              placeholder="your@practice.com"
              required
              className="flex-1 min-w-0 px-4 py-3 rounded-lg font-inter text-sm text-white outline-none focus:ring-2 focus:ring-gold"
              style={{ backgroundColor: '#0a0a0f', border: '1px solid rgba(212,175,55,0.3)' }}
            />
            <button
              type="submit"
              disabled={status === 'loading'}
              className="font-inter font-semibold text-[13px] px-6 py-3 rounded-lg transition-colors disabled:opacity-60"
              style={{ backgroundColor: '#d4af37', color: '#0a0a0f' }}
            >
              {status === 'loading' ? 'Sending…' : 'Notify Me'}
            </button>
            {status === 'error' && (
              <p className="w-full text-red-400 text-sm">
                Something went wrong. Please try again.
              </p>
            )}
          </form>
        )}
      </div>
    </section>
  )
}
