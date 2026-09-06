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
    <section id="projects" className="py-20">
      <div className="mb-11 flex items-baseline gap-4 border-b border-ink pb-4 dark:border-white/15">
        <span className="font-mono text-[13px] text-amber">02</span>
        <h2 className="font-serif text-[clamp(24px,3.2vw,32px)] font-bold">Selected projects</h2>
      </div>
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
        {PROJECTS.map((p, i) => (
          <Reveal key={i}>
            <div className="flex h-full flex-col border border-ink bg-paperwhite p-6 transition-all duration-300 hover:-translate-y-1.5 hover:border-amber hover:shadow-[0_16px_40px_-16px_rgba(217,138,43,0.4)] dark:border-white/15 dark:bg-darkbg-2 dark:hover:shadow-[0_16px_40px_-16px_rgba(217,138,43,0.25)]">
              <span className="font-mono text-[11px] uppercase tracking-[0.14em] text-teal">{p.client}</span>
              <h3 className="mt-2 text-[18px] font-semibold leading-snug">{p.org}</h3>
              <p className="mt-3 text-[14.5px] leading-relaxed text-ink-soft dark:text-line">
                <BoldText text={p.summary} />
              </p>
              <div className="mt-5 flex flex-wrap gap-2 border-t border-line-soft pt-4 dark:border-white/10">
                {p.stats.map((s, j) => {
                  const [lead, rest] = splitLeadingNumber(s)
                  return (
                    <span key={j} className="border border-ink-soft px-2.5 py-1.5 font-mono text-[11px] dark:border-line">
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
