import { useCallback, useEffect, useState } from 'react'
import Particles from 'react-particles'
import { loadFull } from 'tsparticles'

/**
 * Slow-drifting node/link network, rendered fixed behind all page content.
 * Colors pull from the site's ink / line / amber / teal palette so it reads
 * as an ambient extension of the blueprint design rather than decoration
 * bolted on top of it.
 */
export default function ParticleBackground({ dark }) {
  const [reducedMotion, setReducedMotion] = useState(false)

  useEffect(() => {
    const mq = window.matchMedia('(prefers-reduced-motion: reduce)')
    setReducedMotion(mq.matches)
    const handler = (e) => setReducedMotion(e.matches)
    mq.addEventListener ? mq.addEventListener('change', handler) : mq.addListener(handler)
    return () => {
      mq.removeEventListener ? mq.removeEventListener('change', handler) : mq.removeListener(handler)
    }
  }, [])

  const particlesInit = useCallback(async (engine) => {
    await loadFull(engine)
  }, [])

  const dotColor = dark ? '#AEB7C2' : '#4A5568'
  const linkColor = dark ? '#3E7C6B' : '#AEB7C2'

  return (
    <Particles
      id="tsparticles-bg"
      init={particlesInit}
      className="pointer-events-auto fixed inset-0 z-0"
      options={{
        fullScreen: { enable: false },
        detectRetina: true,
        fpsLimit: 60,
        background: { color: { value: 'transparent' } },
        particles: {
          number: { value: 46, density: { enable: true, area: 900 } },
          color: { value: [dotColor, '#D98A2B', '#3E7C6B'] },
          shape: { type: 'circle' },
          opacity: { value: 0.45 },
          size: { value: { min: 1, max: 2.6 } },
          links: {
            enable: true,
            distance: 130,
            color: linkColor,
            opacity: 0.3,
            width: 1,
          },
          move: {
            enable: !reducedMotion,
            speed: 0.5,
            direction: 'none',
            random: true,
            straight: false,
            outModes: { default: 'out' },
          },
        },
        interactivity: {
          events: {
            onHover: { enable: !reducedMotion, mode: 'grab' },
            resize: true,
          },
          modes: {
            grab: { distance: 150, links: { opacity: 0.55 } },
          },
        },
        responsive: [
          {
            maxWidth: 640,
            options: {
              particles: {
                number: { value: 22 },
                links: { distance: 110 },
              },
            },
          },
        ],
      }}
    />
  )
}