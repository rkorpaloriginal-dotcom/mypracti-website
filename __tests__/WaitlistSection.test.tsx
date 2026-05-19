import { render, screen, fireEvent, waitFor } from '@testing-library/react'
import { describe, it, expect, vi } from 'vitest'
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

  it('shows success message after successful form submission', async () => {
    global.fetch = vi.fn().mockResolvedValue({ ok: true })
    render(<WaitlistSection />)
    fireEvent.change(screen.getByPlaceholderText('your@practice.com'), {
      target: { value: 'test@practice.com' },
    })
    fireEvent.click(screen.getByRole('button', { name: /Notify Me/i }))
    await waitFor(() => {
      expect(screen.getByText(/You're on the list/i)).toBeInTheDocument()
    })
  })

  it('shows error message after failed form submission', async () => {
    global.fetch = vi.fn().mockResolvedValue({ ok: false })
    render(<WaitlistSection />)
    fireEvent.change(screen.getByPlaceholderText('your@practice.com'), {
      target: { value: 'test@practice.com' },
    })
    fireEvent.click(screen.getByRole('button', { name: /Notify Me/i }))
    await waitFor(() => {
      expect(screen.getByText(/Something went wrong/i)).toBeInTheDocument()
    })
  })
})
