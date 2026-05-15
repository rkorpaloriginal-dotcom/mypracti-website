import '@testing-library/jest-dom'
import { vi } from 'vitest'

global.requestAnimationFrame = (cb: FrameRequestCallback) =>
  setTimeout(cb, 0) as unknown as number
global.cancelAnimationFrame = (id: number) => clearTimeout(id)

// Immediately fires callback with isIntersecting: true so useScrollReveal
// sets data-visible in tests without needing real viewport intersection.
class MockIO {
  private callback: IntersectionObserverCallback
  constructor(callback: IntersectionObserverCallback) {
    this.callback = callback
  }
  observe(el: Element) {
    this.callback(
      [{ isIntersecting: true, target: el } as IntersectionObserverEntry],
      this as unknown as IntersectionObserver,
    )
  }
  disconnect = vi.fn()
  unobserve = vi.fn()
}

global.IntersectionObserver = MockIO as unknown as typeof IntersectionObserver
