/**
 * Reveal component - animates content when it enters viewport
 */

import { useEffect, useRef } from 'react'

export default function Reveal({ children, className = '' }) {
  const ref = useRef(null)
  
  useEffect(() => {
    const node = ref.current
    if (!node) return
    
    const io = new IntersectionObserver(
      (entries) => entries.forEach((e) => e.isIntersecting && e.target.classList.add('in')),
      { threshold: 0.12 }
    )
    io.observe(node)
    
    return () => io.disconnect()
  }, [])
  
  return <div ref={ref} className={`reveal ${className}`}>{children}</div>
}
