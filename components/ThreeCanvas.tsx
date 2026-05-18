'use client'
import { useEffect, useRef } from 'react'
import * as THREE from 'three'

export default function ThreeCanvas() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    // jsdom guard — clientWidth is 0 in tests, skip WebGL init entirely
    if (!canvas || canvas.clientWidth === 0) return

    const renderer = new THREE.WebGLRenderer({ canvas, alpha: true, antialias: false })
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
    renderer.setSize(canvas.clientWidth, canvas.clientHeight)

    const scene = new THREE.Scene()
    const camera = new THREE.PerspectiveCamera(
      75,
      canvas.clientWidth / canvas.clientHeight,
      0.1,
      100,
    )
    camera.position.z = 5

    const COUNT = 2000
    const positions = new Float32Array(COUNT * 3)
    const velocities = new Float32Array(COUNT * 3)

    for (let i = 0; i < COUNT; i++) {
      positions[i * 3]     = (Math.random() - 0.5) * 24  // x: [-12, 12]
      positions[i * 3 + 1] = (Math.random() - 0.5) * 16  // y: [-8, 8]
      positions[i * 3 + 2] = (Math.random() - 0.5) * 10  // z: [-5, 5]
      velocities[i * 3]     = (Math.random() - 0.5) * 0.0006
      velocities[i * 3 + 1] = (Math.random() - 0.5) * 0.0006
    }

    const geometry = new THREE.BufferGeometry()
    geometry.setAttribute('position', new THREE.BufferAttribute(positions, 3))

    const material = new THREE.PointsMaterial({
      size: 0.03,
      color: 0xd4af37,
      transparent: true,
      opacity: 0.4,
      sizeAttenuation: true,
    })

    const points = new THREE.Points(geometry, material)
    scene.add(points)

    let mouseX = 0
    let mouseY = 0
    const onMouseMove = (e: MouseEvent) => {
      mouseX = (e.clientX / window.innerWidth - 0.5) * 0.3
      mouseY = -(e.clientY / window.innerHeight - 0.5) * 0.3
    }
    window.addEventListener('mousemove', onMouseMove)

    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    let animId = 0

    if (prefersReducedMotion) {
      renderer.render(scene, camera)
    } else {
      const pos = geometry.attributes.position.array as Float32Array
      const animate = () => {
        animId = requestAnimationFrame(animate)
        for (let i = 0; i < COUNT; i++) {
          pos[i * 3]     += velocities[i * 3]
          pos[i * 3 + 1] += velocities[i * 3 + 1]
          if (pos[i * 3] > 12)      pos[i * 3] = -12
          if (pos[i * 3] < -12)     pos[i * 3] = 12
          if (pos[i * 3 + 1] > 8)   pos[i * 3 + 1] = -8
          if (pos[i * 3 + 1] < -8)  pos[i * 3 + 1] = 8
        }
        geometry.attributes.position.needsUpdate = true
        camera.position.x += (mouseX - camera.position.x) * 0.05
        camera.position.y += (mouseY - camera.position.y) * 0.05
        renderer.render(scene, camera)
      }
      animate()
    }

    const onResize = () => {
      camera.aspect = canvas.clientWidth / canvas.clientHeight
      camera.updateProjectionMatrix()
      renderer.setSize(canvas.clientWidth, canvas.clientHeight)
    }
    window.addEventListener('resize', onResize)

    return () => {
      cancelAnimationFrame(animId)
      window.removeEventListener('resize', onResize)
      window.removeEventListener('mousemove', onMouseMove)
      geometry.dispose()
      material.dispose()
      renderer.dispose()
    }
  }, [])

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full"
      style={{ pointerEvents: 'none' }}
    />
  )
}
