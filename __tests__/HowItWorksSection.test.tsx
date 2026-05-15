import { render, screen } from '@testing-library/react'
import { describe, it, expect } from 'vitest'
import HowItWorksSection from '@/components/HowItWorksSection'

describe('HowItWorksSection', () => {
  it('renders the section heading', () => {
    render(<HowItWorksSection />)
    expect(screen.getByText('How it works')).toBeInTheDocument()
  })

  it('renders all three steps', () => {
    render(<HowItWorksSection />)
    expect(screen.getByText('We build your site')).toBeInTheDocument()
    expect(screen.getByText('We add AI tools')).toBeInTheDocument()
    expect(screen.getByText('Your practice grows')).toBeInTheDocument()
  })

  it('renders step numbers', () => {
    render(<HowItWorksSection />)
    expect(screen.getByText('1')).toBeInTheDocument()
    expect(screen.getByText('2')).toBeInTheDocument()
    expect(screen.getByText('3')).toBeInTheDocument()
  })
})
