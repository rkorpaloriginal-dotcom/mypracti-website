import { render, screen } from '@testing-library/react'
import { describe, it, expect } from 'vitest'
import WaitlistSection from '@/components/WaitlistSection'

describe('WaitlistSection', () => {
  it('renders the section headline', () => {
    render(<WaitlistSection />)
    expect(screen.getByText(/Be first to access the platform/i)).toBeInTheDocument()
  })

  it('renders the email input', () => {
    render(<WaitlistSection />)
    expect(screen.getByPlaceholderText('your@practice.com')).toBeInTheDocument()
  })

  it('renders the notify me button', () => {
    render(<WaitlistSection />)
    expect(screen.getByRole('button', { name: /Notify Me/i })).toBeInTheDocument()
  })
})
