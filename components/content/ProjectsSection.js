/**
 * ProjectsSection component - selected project cards
 */

import Reveal from './Reveal'
import BoldText from './BoldText'
import { PROJECTS } from '../../data/portfolio'

function splitLeadingNumber(text) {
  const m = text.match(/^([+\-−]?\$?\d[\d,]*(?:\.\d+)?(?:%|\+|K|M|Cr)?)/)
  if (!m) return [null, text]
  return [m[1], text.slice(m[1].length)]
}

export default function ProjectsSection() {
  return (
    <section id="projects" className="py-12 sm:py-16 lg:py-20">
      <div className="mb-8 flex items-baseline gap-3 border-b border-ink pb-3 dark:border-white/15 sm:mb-11 sm:gap-4 sm:pb-4">
        <span className="font-mono text-[11px] text-amber sm:text-[13px]">02</span>
        <h2 className="font-serif text-[clamp(22px,3.2vw,32px)] font-bold">Selected projects</h2>
      </div>
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
        {PROJECTS.map((p, i) => (
          <Reveal key={i}>
            <div className="flex h-full flex-col border border-ink bg-paperwhite p-4 transition-all duration-300 hover:-translate-y-1.5 hover:border-amber hover:shadow-[0_16px_40px_-16px_rgba(217,138,43,0.4)] dark:border-white/15 dark:bg-darkbg-2 dark:hover:shadow-[0_16px_40px_-16px_rgba(217,138,43,0.25)] sm:p-6">
              <span className="font-mono text-[10px] uppercase tracking-[0.14em] text-teal sm:text-[11px]">{p.client}</span>
              <h3 className="mt-2 text-[17px] font-semibold leading-snug sm:text-[18px]">{p.org}</h3>
              <p className="mt-2.5 text-[14px] leading-relaxed text-ink-soft dark:text-line sm:text-[14.5px]">
                <BoldText text={p.summary} />
              </p>
              <div className="mt-4 flex flex-wrap gap-1.5 border-t border-line-soft pt-3.5 dark:border-white/10 sm:gap-2 sm:pt-4">
                {p.stats.map((s, j) => {
                  const [lead, rest] = splitLeadingNumber(s)
                  return (
                    <span key={j} className="border border-ink-soft px-2 py-1 font-mono text-[10px] dark:border-line sm:px-2.5 sm:py-1.5 sm:text-[11px]">
                      {lead ? (
                        <>
                          <span className="font-bold text-amber">{lead}</span>
                          {rest}
                        </>
                      ) : (
                        s
                      )}
                    </span>
                  )
                })}
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  )
}
