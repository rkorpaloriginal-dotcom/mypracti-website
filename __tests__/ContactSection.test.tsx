import { render, screen } from '@testing-library/react'
import { describe, it, expect } from 'vitest'
import ContactSection from '@/components/ContactSection'

describe('ContactSection', () => {
  it('renders the section heading', () => {
    render(<ContactSection />)
    expect(screen.getByText(/Ready to grow your practice/i)).toBeInTheDocument()
  })

  it('renders all form fields', () => {
    render(<ContactSection />)
    expect(screen.getByPlaceholderText('Practice name')).toBeInTheDocument()
    expect(screen.getByPlaceholderText('Your email')).toBeInTheDocument()
    expect(screen.getByPlaceholderText(/Tell us about your practice/i)).toBeInTheDocument()
  })

  it('renders the submit button', () => {
    render(<ContactSection />)
    expect(screen.getByRole('button', { name: /Send Message/i })).toBeInTheDocument()
  })
})
