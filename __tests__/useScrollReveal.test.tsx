import { render, screen, act } from '@testing-library/react'
import { useRef } from 'react'
import { describe, it, expect, vi, afterEach } from 'vitest'
import { useScrollReveal } from '@/hooks/useScrollReveal'

function TestComponent({ delay }: { delay?: number }) {
  const ref = useRef<HTMLDivElement>(null)
  useScrollReveal(ref, { delay })
  return <div ref={ref} data-testid="target" data-reveal />
}

describe('useScrollReveal', () => {
  afterEach(() => {
    vi.useRealTimers()
  })

  it('sets data-visible="true" when element enters viewport', () => {
    render(<TestComponent />)
    expect(screen.getByTestId('target')).toHaveAttribute('data-visible', 'true')
  })

  it('respects delay option before setting data-visible', () => {
    vi.useFakeTimers()
    render(<TestComponent delay={200} />)
    // Not yet visible — delay hasn't elapsed
    expect(screen.getByTestId('target')).not.toHaveAttribute('data-visible', 'true')
    // Advance past the delay
    act(() => { vi.advanceTimersByTime(200) })
    expect(screen.getByTestId('target')).toHaveAttribute('data-visible', 'true')
  })
})
