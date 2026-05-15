'use client'
import { useState } from 'react'

interface FormState {
  practice: string
  email: string
  message: string
}

export default function ContactSection() {
  const [form, setForm] = useState<FormState>({ practice: '', email: '', message: '' })
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle')

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
    } catch {
      setStatus('error')
    }
  }

  return (
    <section id="contact" className="bg-gradient-to-br from-[#eef2ff] to-[#f5f3ff] py-24 px-6">
      <div className="max-w-lg mx-auto text-center">
        <p className="text-brand-500 text-xs font-bold uppercase tracking-widest mb-3">
          Get Started
        </p>
        <h2 className="text-3xl md:text-4xl font-extrabold text-brand-900 tracking-tight mb-4">
          Ready to grow your practice?
        </h2>
        <p className="text-slate-500 mb-10">
          Book a free 30-minute call and we&apos;ll show you what&apos;s possible.
        </p>
        {status === 'success' ? (
          <div className="bg-white rounded-2xl p-10 shadow-lg shadow-brand-700/10 text-brand-700 font-semibold">
            Message sent! We&apos;ll be in touch within 24 hours.
          </div>
        ) : (
          <form
            onSubmit={handleSubmit}
            className="bg-white rounded-2xl p-8 shadow-lg shadow-brand-700/10 flex flex-col gap-4 text-left"
          >
            <input
              name="practice"
              value={form.practice}
              onChange={handleChange}
              placeholder="Practice name"
              required
              className="w-full px-4 py-3 rounded-lg border border-slate-200 text-sm focus:outline-none focus:ring-2 focus:ring-brand-400"
            />
            <input
              name="email"
              type="email"
              value={form.email}
              onChange={handleChange}
              placeholder="Your email"
              required
              className="w-full px-4 py-3 rounded-lg border border-slate-200 text-sm focus:outline-none focus:ring-2 focus:ring-brand-400"
            />
            <textarea
              name="message"
              value={form.message}
              onChange={handleChange}
              placeholder="Tell us about your practice..."
              rows={4}
              required
              className="w-full px-4 py-3 rounded-lg border border-slate-200 text-sm focus:outline-none focus:ring-2 focus:ring-brand-400 resize-none"
            />
            <button
              type="submit"
              disabled={status === 'loading'}
              className="w-full bg-brand-700 text-white font-bold py-3 rounded-lg hover:bg-brand-600 transition-colors disabled:opacity-60"
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
    </section>
  )
}
