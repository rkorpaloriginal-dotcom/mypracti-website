import { render } from '@testing-library/react'
import { vi, describe, it, expect } from 'vitest'

vi.mock('three', () => ({
  WebGLRenderer: vi.fn().mockImplementation(() => ({
    setPixelRatio: vi.fn(),
    setSize: vi.fn(),
    render: vi.fn(),
    dispose: vi.fn(),
  })),
  Scene: vi.fn().mockImplementation(() => ({ add: vi.fn() })),
  PerspectiveCamera: vi.fn().mockImplementation(() => ({
    position: { x: 0, y: 0, z: 5 },
    aspect: 1,
    updateProjectionMatrix: vi.fn(),
  })),
  BufferGeometry: vi.fn().mockImplementation(() => ({
    setAttribute: vi.fn(),
    attributes: {
      position: { array: new Float32Array(6000), needsUpdate: false },
    },
    dispose: vi.fn(),
  })),
  BufferAttribute: vi.fn().mockImplementation(() => ({})),
  PointsMaterial: vi.fn().mockImplementation(() => ({ dispose: vi.fn() })),
  Points: vi.fn().mockImplementation(() => ({})),
}))

import ThreeCanvas from '@/components/ThreeCanvas'

describe('ThreeCanvas', () => {
  it('renders a canvas element', () => {
    const { container } = render(<ThreeCanvas />)
    expect(container.querySelector('canvas')).toBeInTheDocument()
  })
})
