'use client'
import { useState, useEffect, useRef } from 'react'

const NAV_ITEMS = [
  { label: 'Services', href: '#services' },
  { label: 'How It Works', href: '#how-it-works' },
  { label: 'Contact', href: '#contact' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const closeButtonRef = useRef<HTMLButtonElement>(null)
  const hamburgerRef = useRef<HTMLButtonElement>(null)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60)
    onScroll()
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <>
      <nav
        className="fixed top-0 left-0 right-0 z-50 border-b transition-shadow duration-300"
        style={{
          backgroundColor: '#0a0a0f',
          borderBottomColor: 'rgba(212,175,55,0.15)',
          boxShadow: scrolled ? '0 1px 0 rgba(212,175,55,0.1)' : 'none',
        }}
      >
        <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
          <span className="font-dm-serif text-white" style={{ fontSize: '18px' }}>
            MyPracti
          </span>

          {/* Desktop links */}
          <div className="hidden md:flex items-center gap-8">
            {NAV_ITEMS.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="font-inter text-[13px] hover:text-white transition-colors duration-200"
                style={{ color: '#94a3b8' }}
              >
                {item.label}
              </a>
            ))}
          </div>

          <div className="flex items-center gap-3">
            {/* CTA */}
            <a
              href="#contact"
              className="hidden md:block font-inter font-semibold text-[13px] rounded-[6px] px-[18px] py-[6px] border transition-all duration-200 hover:bg-gold hover:text-surface-primary"
              style={{ borderColor: '#d4af37', color: '#d4af37' }}
            >
              Book a Free Call
            </a>

            {/* Hamburger */}
            <button
              ref={hamburgerRef}
              type="button"
              aria-label="Toggle menu"
              aria-expanded={mobileOpen}
              className="md:hidden flex flex-col gap-1.5 p-1"
              onClick={() => {
                setMobileOpen(true)
                setTimeout(() => closeButtonRef.current?.focus(), 0)
              }}
            >
              <span className="block w-5 h-0.5" style={{ backgroundColor: '#d4af37' }} />
              <span className="block w-5 h-0.5" style={{ backgroundColor: '#d4af37' }} />
              <span className="block w-5 h-0.5" style={{ backgroundColor: '#d4af37' }} />
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile overlay */}
      {mobileOpen && (
        <div
          className="fixed inset-0 z-[60] flex flex-col items-center justify-center"
          style={{ backgroundColor: '#0a0a0f' }}
        >
          <button
            ref={closeButtonRef}
            type="button"
            className="absolute top-5 right-6 text-white text-2xl"
            onClick={() => {
              setMobileOpen(false)
              hamburgerRef.current?.focus()
            }}
            aria-label="Close menu"
          >
            ✕
          </button>
          {NAV_ITEMS.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="font-inter text-white text-2xl py-4"
              onClick={() => setMobileOpen(false)}
            >
              {item.label}
            </a>
          ))}
        </div>
      )}
    </>
  )
}
