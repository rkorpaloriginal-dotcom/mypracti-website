import { render, screen } from '@testing-library/react'
import Navbar from '@/components/Navbar'

describe('Navbar', () => {
  it('renders the brand name', () => {
    render(<Navbar />)
    expect(screen.getByText('MyPracti')).toBeInTheDocument()
  })

  it('renders nav links with correct hrefs', () => {
    render(<Navbar />)
    const servicesLinks = screen.getAllByRole('link', { name: 'Services' })
    expect(servicesLinks[0]).toHaveAttribute('href', '#services')

    const howLinks = screen.getAllByRole('link', { name: 'How It Works' })
    expect(howLinks[0]).toHaveAttribute('href', '#how-it-works')

    const contactLinks = screen.getAllByRole('link', { name: 'Contact' })
    expect(contactLinks[0]).toHaveAttribute('href', '#contact')
  })

  it('renders book a free call CTA linking to #contact', () => {
    render(<Navbar />)
    const cta = screen.getByRole('link', { name: 'Book a Free Call' })
    expect(cta).toBeInTheDocument()
    expect(cta).toHaveAttribute('href', '#contact')
  })

  it('renders mobile menu toggle button', () => {
    render(<Navbar />)
    expect(screen.getByRole('button', { name: /Toggle menu/i })).toBeInTheDocument()
  })
})
