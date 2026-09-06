/**
 * EducationSection component - education history
 */

import Reveal from './Reveal'
import { EDUCATION } from '../../data/portfolio'

export default function EducationSection() {
  return (
    <section id="education" className="py-20">
      <div className="mb-11 flex items-baseline gap-4 border-b border-ink pb-4 dark:border-white/15">
        <span className="font-mono text-[13px] text-amber">04</span>
        <h2 className="font-serif text-[clamp(24px,3.2vw,32px)] font-bold">Education</h2>
      </div>
      <Reveal>
        <div className="grid grid-cols-[repeat(auto-fit,minmax(260px,1fr))] gap-6">
          {EDUCATION.map((edu, i) => (
            <div key={i} className="border border-ink bg-paperwhite p-5 transition-all duration-300 hover:-translate-y-1.5 hover:border-amber hover:shadow-[0_16px_40px_-16px_rgba(217,138,43,0.4)] dark:border-white/15 dark:bg-darkbg-2 dark:hover:shadow-[0_16px_40px_-16px_rgba(217,138,43,0.25)]">
              <div className="font-mono text-xs text-teal">{edu.when}</div>
              <h4 className="mt-2 text-base font-semibold">{edu.title}</h4>
              <p className="mt-1 text-[13.5px] text-ink-soft dark:text-line">{edu.place}</p>
            </div>
          ))}
        </div>
      </Reveal>
    </section>
  )
}
