'use client'
import { useState, useEffect } from 'react'

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-white/90 backdrop-blur-md shadow-sm' : 'bg-transparent'
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        <span className="text-brand-700 font-bold text-lg tracking-tight">MyPracti</span>
        <div className="hidden md:flex items-center gap-8 text-sm text-slate-600">
          <a href="#services" className="hover:text-brand-700 transition-colors">Services</a>
          <a href="#how-it-works" className="hover:text-brand-700 transition-colors">How It Works</a>
          <a href="#contact" className="hover:text-brand-700 transition-colors">Contact</a>
        </div>
        <a
          href="#contact"
          className="bg-brand-700 text-white text-sm font-semibold px-4 py-2 rounded-lg hover:bg-brand-600 transition-colors"
        >
          Get in touch
        </a>
      </div>
    </nav>
  )
}
