import '@testing-library/jest-dom'

global.requestAnimationFrame = (cb: FrameRequestCallback) =>
  setTimeout(cb, 0) as unknown as number
global.cancelAnimationFrame = (id: number) => clearTimeout(id)
