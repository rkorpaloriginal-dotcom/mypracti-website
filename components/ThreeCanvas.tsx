'use client'
import { useEffect, useRef } from 'react'
import * as THREE from 'three'

interface Orb {
  mesh: THREE.Mesh
  velocity: THREE.Vector3
  phase: number
  speed: number
}

export default function ThreeCanvas() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    // In test environments (jsdom) clientWidth/clientHeight are 0 — skip WebGL init
    const w = canvas.clientWidth || canvas.offsetWidth || 0
    const h = canvas.clientHeight || canvas.offsetHeight || 0
    if (w === 0 || h === 0) return

    const renderer = new THREE.WebGLRenderer({ canvas, alpha: true, antialias: true })
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
    renderer.setSize(canvas.clientWidth, canvas.clientHeight)

    const scene = new THREE.Scene()
    const camera = new THREE.PerspectiveCamera(
      60,
      canvas.clientWidth / canvas.clientHeight,
      0.1,
      100,
    )
    camera.position.z = 8

    const ambient = new THREE.AmbientLight(0xffffff, 0.6)
    scene.add(ambient)
    const point = new THREE.PointLight(0x6366f1, 2, 20)
    point.position.set(5, 5, 5)
    scene.add(point)

    const colours = [0x6366f1, 0x818cf8, 0xa78bfa, 0x4338ca, 0xc7d2fe]
    const orbs: Orb[] = []

    for (let i = 0; i < 8; i++) {
      const size = 0.3 + Math.random() * 0.9
      const geo = new THREE.SphereGeometry(size, 32, 32)
      const mat = new THREE.MeshStandardMaterial({
        color: colours[i % colours.length],
        transparent: true,
        opacity: 0.25 + Math.random() * 0.2,
        roughness: 0.1,
        metalness: 0.3,
      })
      const mesh = new THREE.Mesh(geo, mat)
      mesh.position.set(
        (Math.random() - 0.5) * 12,
        (Math.random() - 0.5) * 8,
        (Math.random() - 0.5) * 6,
      )
      scene.add(mesh)
      orbs.push({
        mesh,
        velocity: new THREE.Vector3(
          (Math.random() - 0.5) * 0.002,
          (Math.random() - 0.5) * 0.002,
          0,
        ),
        phase: Math.random() * Math.PI * 2,
        speed: 0.3 + Math.random() * 0.5,
      })
    }

    let animId: number
    let time = 0

    const animate = () => {
      animId = requestAnimationFrame(animate)
      time += 0.01
      orbs.forEach((orb) => {
        orb.mesh.position.add(orb.velocity)
        orb.mesh.position.y += Math.sin(time * orb.speed + orb.phase) * 0.002
        if (orb.mesh.position.x > 7) orb.mesh.position.x = -7
        if (orb.mesh.position.x < -7) orb.mesh.position.x = 7
        if (orb.mesh.position.y > 5) orb.mesh.position.y = -5
        if (orb.mesh.position.y < -5) orb.mesh.position.y = 5
      })
      renderer.render(scene, camera)
    }
    const onResize = () => {
      const w = canvas.clientWidth
      const h = canvas.clientHeight
      camera.aspect = w / h
      camera.updateProjectionMatrix()
      renderer.setSize(w, h)
    }
    window.addEventListener('resize', onResize)

    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (prefersReducedMotion) {
      renderer.render(scene, camera)
      return () => {
        window.removeEventListener('resize', onResize)
        renderer.dispose()
      }
    }
    animate()

    return () => {
      cancelAnimationFrame(animId)
      window.removeEventListener('resize', onResize)
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
