'use client'
import { useState, useEffect } from 'react'

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10)
    onScroll()
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled || mobileOpen ? 'bg-white/95 backdrop-blur-md shadow-sm' : 'bg-transparent'
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        <span className="text-brand-700 font-bold text-lg tracking-tight">MyPracti</span>

        {/* Desktop links */}
        <div className="hidden md:flex items-center gap-8 text-sm text-slate-600">
          <a href="#services" className="hover:text-brand-700 transition-colors">Services</a>
          <a href="#how-it-works" className="hover:text-brand-700 transition-colors">How It Works</a>
          <a href="#contact" className="hover:text-brand-700 transition-colors">Contact</a>
        </div>

        <div className="flex items-center gap-3">
          <a
            href="#contact"
            className="bg-brand-700 text-white text-sm font-semibold px-4 py-2 rounded-lg hover:bg-brand-600 transition-colors"
          >
            Get in touch
          </a>
          {/* Hamburger */}
          <button
            type="button"
            aria-label="Toggle menu"
            aria-expanded={mobileOpen}
            className="md:hidden flex flex-col gap-1.5 p-1"
            onClick={() => setMobileOpen((o) => !o)}
          >
            <span className="block w-5 h-0.5 bg-brand-700" />
            <span className="block w-5 h-0.5 bg-brand-700" />
            <span className="block w-5 h-0.5 bg-brand-700" />
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="md:hidden bg-white/95 backdrop-blur-md border-t border-slate-100 px-6 py-4 flex flex-col gap-4 text-sm text-slate-600">
          <a href="#services" onClick={() => setMobileOpen(false)} className="hover:text-brand-700 transition-colors">Services</a>
          <a href="#how-it-works" onClick={() => setMobileOpen(false)} className="hover:text-brand-700 transition-colors">How It Works</a>
          <a href="#contact" onClick={() => setMobileOpen(false)} className="hover:text-brand-700 transition-colors">Contact</a>
        </div>
      )}
    </nav>
  )
}
