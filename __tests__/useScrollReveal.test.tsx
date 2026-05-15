import { render, screen } from '@testing-library/react'
import { useRef } from 'react'
import { describe, it, expect } from 'vitest'
import { useScrollReveal } from '@/hooks/useScrollReveal'

function TestComponent() {
  const ref = useRef<HTMLDivElement>(null)
  useScrollReveal(ref)
  return <div ref={ref} data-testid="target" data-reveal />
}

describe('useScrollReveal', () => {
  it('sets data-visible="true" when element enters viewport', () => {
    render(<TestComponent />)
    expect(screen.getByTestId('target')).toHaveAttribute('data-visible', 'true')
  })
})
