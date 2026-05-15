import { useEffect, RefObject } from 'react'

interface ScrollRevealOptions {
  threshold?: number
  rootMargin?: string
  delay?: number
}

export function useScrollReveal(
  ref: RefObject<HTMLElement | null>,
  options: ScrollRevealOptions = {},
) {
  const { threshold = 0.1, rootMargin = '0px 0px -60px 0px', delay = 0 } = options

  useEffect(() => {
    const el = ref.current
    if (!el) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          const show = () => el.setAttribute('data-visible', 'true')
          if (delay > 0) {
            setTimeout(show, delay)
          } else {
            show()
          }
          observer.disconnect()
        }
      },
      { threshold, rootMargin },
    )

    observer.observe(el)
    return () => observer.disconnect()
  }, [ref, threshold, rootMargin, delay])
}
