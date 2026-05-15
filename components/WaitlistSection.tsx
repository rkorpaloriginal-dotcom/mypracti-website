'use client'
import { useState } from 'react'

export default function WaitlistSection() {
  const [email, setEmail] = useState('')
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle')

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
    } catch {
      setStatus('error')
    }
  }

  return (
    <section className="bg-brand-700 py-16 px-6 text-center">
      <p className="text-brand-200 text-xs font-bold uppercase tracking-widest mb-3">
        MyPracti Dashboard
      </p>
      <h2 className="text-2xl md:text-3xl font-bold text-white mb-3">
        Be the first to access the dashboard
      </h2>
      <p className="text-brand-200 mb-8 text-sm">
        A complete practice management platform — launching soon.
      </p>
      {status === 'success' ? (
        <p className="text-white font-semibold">You&apos;re on the list! We&apos;ll be in touch.</p>
      ) : (
        <form
          onSubmit={handleSubmit}
          className="flex flex-wrap justify-center gap-3 max-w-md mx-auto"
        >
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="your@practice.com"
            required
            className="flex-1 min-w-0 px-4 py-2.5 rounded-lg text-sm text-slate-800 outline-none focus:ring-2 focus:ring-white"
          />
          <button
            type="submit"
            disabled={status === 'loading'}
            className="bg-white text-brand-700 font-bold px-6 py-2.5 rounded-lg text-sm hover:bg-brand-50 transition-colors disabled:opacity-60"
          >
            {status === 'loading' ? 'Sending…' : 'Notify Me'}
          </button>
          {status === 'error' && (
            <p className="w-full text-red-200 text-sm">Something went wrong. Please try again.</p>
          )}
        </form>
      )}
    </section>
  )
}
