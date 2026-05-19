'use client'
import { useState, useRef } from 'react'
import { useScrollReveal } from '@/hooks/useScrollReveal'

interface FormState {
  practice: string
  email: string
  message: string
}

export default function ContactSection() {
  const [form, setForm] = useState<FormState>({ practice: '', email: '', message: '' })
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle')
  const sectionRef = useRef<HTMLElement>(null)
  useScrollReveal(sectionRef)

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setStatus('loading')
    try {
      const res = await fetch(
        `https://formspree.io/f/${process.env.NEXT_PUBLIC_FORMSPREE_CONTACT_ID}`,
        {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(form),
        },
      )
      if (res.ok) {
        setStatus('success')
        setForm({ practice: '', email: '', message: '' })
      } else {
        setStatus('error')
      }
    } catch (err) {
      console.error('Contact form error:', err)
      setStatus('error')
    }
  }

  return (
    <section
      ref={sectionRef}
      id="contact"
      data-reveal
      className="py-24 px-6"
      style={{ backgroundColor: '#0a0a0f' }}
    >
      <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-16 items-center">
        {/* Left — quote + heading */}
        <div>
          <p
            className="font-dm-serif italic mb-8"
            style={{ fontSize: 'clamp(24px,3vw,36px)', color: '#d4af37' }}
          >
            &ldquo;Your website is your first impression.&rdquo;
          </p>
          <p
            className="font-inter font-semibold uppercase mb-4"
            style={{ fontSize: '10px', letterSpacing: '4px', color: '#d4af37' }}
          >
            GET STARTED
          </p>
          <h2
            className="font-dm-serif text-white mb-4"
            style={{ fontSize: 'clamp(28px,4vw,48px)' }}
          >
            Ready to grow your practice?
          </h2>
          <p className="font-inter text-[15px]" style={{ color: '#94a3b8' }}>
            Book a free 30-minute call and we&apos;ll show you what&apos;s possible.
          </p>
        </div>

        {/* Right — white card with form */}
        <div
          className="rounded-2xl p-8"
          style={{
            backgroundColor: '#ffffff',
            boxShadow: '0 8px 40px rgba(212,175,55,0.08)',
          }}
        >
          {status === 'success' ? (
            <p className="text-center font-semibold text-slate-700">
              Message sent! We&apos;ll be in touch within 24 hours.
            </p>
          ) : (
            <form onSubmit={handleSubmit} className="flex flex-col gap-4">
              <input
                name="practice"
                value={form.practice}
                onChange={handleChange}
                placeholder="Practice name"
                required
                aria-label="Practice name"
                className="w-full px-4 py-3 rounded-lg border border-slate-200 text-sm text-slate-800 focus:outline-none focus:ring-2 focus:ring-[#d4af37]"
              />
              <input
                name="email"
                type="email"
                value={form.email}
                onChange={handleChange}
                placeholder="Your email"
                required
                aria-label="Your email"
                className="w-full px-4 py-3 rounded-lg border border-slate-200 text-sm text-slate-800 focus:outline-none focus:ring-2 focus:ring-[#d4af37]"
              />
              <textarea
                name="message"
                value={form.message}
                onChange={handleChange}
                placeholder="Tell us about your practice..."
                rows={4}
                required
                aria-label="Message"
                className="w-full px-4 py-3 rounded-lg border border-slate-200 text-sm text-slate-800 focus:outline-none focus:ring-2 focus:ring-[#d4af37] resize-none"
              />
              <button
                type="submit"
                disabled={status === 'loading'}
                className="w-full font-inter font-semibold py-3 rounded-lg transition-colors disabled:opacity-60"
                style={{ backgroundColor: '#d4af37', color: '#0a0a0f' }}
              >
                {status === 'loading' ? 'Sending…' : 'Send Message'}
              </button>
              {status === 'error' && (
                <p className="text-red-500 text-sm text-center">
                  Something went wrong. Please try again.
                </p>
              )}
            </form>
          )}
        </div>
      </div>
    </section>
  )
}
