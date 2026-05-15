import { render, screen } from '@testing-library/react'
import Navbar from '@/components/Navbar'

describe('Navbar', () => {
  it('renders the brand name', () => {
    render(<Navbar />)
    expect(screen.getByText('MyPracti')).toBeInTheDocument()
  })

  it('renders nav links', () => {
    render(<Navbar />)
    expect(screen.getByText('Services')).toBeInTheDocument()
    expect(screen.getByText('How It Works')).toBeInTheDocument()
    expect(screen.getByText('Contact')).toBeInTheDocument()
  })

  it('renders get in touch CTA', () => {
    render(<Navbar />)
    expect(screen.getByText('Get in touch')).toBeInTheDocument()
  })
})
