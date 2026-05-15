import { render } from '@testing-library/react'
import { vi, describe, it, expect } from 'vitest'

vi.mock('three', () => {
  const Vector3 = vi.fn().mockImplementation(() => ({
    x: 0, y: 0, z: 0,
    add: vi.fn().mockReturnThis(),
  }))
  return {
    WebGLRenderer: vi.fn().mockImplementation(() => ({
      setPixelRatio: vi.fn(),
      setSize: vi.fn(),
      render: vi.fn(),
      dispose: vi.fn(),
    })),
    Scene: vi.fn().mockImplementation(() => ({ add: vi.fn() })),
    PerspectiveCamera: vi.fn().mockImplementation(() => ({
      position: { z: 8 },
      aspect: 1,
      updateProjectionMatrix: vi.fn(),
    })),
    AmbientLight: vi.fn(),
    PointLight: vi.fn().mockImplementation(() => ({ position: { set: vi.fn() } })),
    SphereGeometry: vi.fn(),
    MeshStandardMaterial: vi.fn(),
    Mesh: vi.fn().mockImplementation(() => ({
      position: { set: vi.fn(), add: vi.fn(), x: 0, y: 0, z: 0 },
    })),
    Vector3,
  }
})

import ThreeCanvas from '@/components/ThreeCanvas'

describe('ThreeCanvas', () => {
  it('renders a canvas element', () => {
    const { container } = render(<ThreeCanvas />)
    expect(container.querySelector('canvas')).toBeInTheDocument()
  })
})
