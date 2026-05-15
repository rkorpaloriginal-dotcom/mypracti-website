import { render, screen } from '@testing-library/react'
import { describe, it, expect } from 'vitest'
import ServicesSection from '@/components/ServicesSection'

describe('ServicesSection', () => {
  it('renders the section heading', () => {
    render(<ServicesSection />)
    expect(screen.getByText('Built for dental practices')).toBeInTheDocument()
  })

  it('renders all three service cards', () => {
    render(<ServicesSection />)
    expect(screen.getByText('Website Design')).toBeInTheDocument()
    expect(screen.getByText('AI Solutions')).toBeInTheDocument()
    expect(screen.getByText('Practice Dashboard')).toBeInTheDocument()
  })

  it('renders Coming Soon badge on the dashboard card', () => {
    render(<ServicesSection />)
    expect(screen.getByText('Coming Soon')).toBeInTheDocument()
  })
})
