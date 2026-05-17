import '@testing-library/jest-dom'
import { vi } from 'vitest'

global.requestAnimationFrame = (cb: FrameRequestCallback) =>
  setTimeout(cb, 0) as unknown as number
global.cancelAnimationFrame = (id: number) => clearTimeout(id)

const MockIO = vi.fn().mockImplementation(function (callback: IntersectionObserverCallback) {
  return {
    observe: (el: Element) => {
      callback(
        [{ isIntersecting: true, target: el } as IntersectionObserverEntry],
        {} as IntersectionObserver,
      )
    },
    disconnect: vi.fn(),
    unobserve: vi.fn(),
  }
})

global.IntersectionObserver = MockIO as unknown as typeof IntersectionObserver
