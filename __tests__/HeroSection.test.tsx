import { render, screen } from '@testing-library/react'
import { vi, describe, it, expect } from 'vitest'

vi.mock('next/dynamic', () => ({
  default: (_fn: unknown) => {
    const Component = () => <canvas data-testid="three-canvas" />
    Component.displayName = 'DynamicThreeCanvas'
    return Component
  },
}))

import HeroSection from '@/components/HeroSection'

describe('HeroSection', () => {
  it('renders the coming soon badge', () => {
    render(<HeroSection />)
    expect(screen.getByText(/Dashboard — Coming Soon/i)).toBeInTheDocument()
  })

  it('renders the main heading', () => {
    render(<HeroSection />)
    expect(screen.getByText(/We build websites for/i)).toBeInTheDocument()
    expect(screen.getByText(/dental practices/i)).toBeInTheDocument()
  })

  it('renders both CTA buttons with correct hrefs', () => {
    render(<HeroSection />)
    expect(screen.getByRole('link', { name: 'Book a Free Call' })).toHaveAttribute('href', '#contact')
    expect(screen.getByRole('link', { name: 'See Our Services' })).toHaveAttribute('href', '#services')
  })
})
