/**
 * EducationSection component - education history
 */

import Reveal from './Reveal'
import { EDUCATION } from '../../data/portfolio'

export default function EducationSection() {
  return (
    <section id="education" className="py-12 sm:py-16 lg:py-20">
      <div className="mb-8 flex items-baseline gap-3 border-b border-ink pb-3 dark:border-white/15 sm:mb-11 sm:gap-4 sm:pb-4">
        <span className="font-mono text-[11px] text-amber sm:text-[13px]">04</span>
        <h2 className="font-serif text-[clamp(22px,3.2vw,32px)] font-bold">Education</h2>
      </div>
      <Reveal>
        <div className="grid grid-cols-[repeat(auto-fit,minmax(220px,1fr))] gap-4 sm:grid-cols-[repeat(auto-fit,minmax(260px,1fr))] sm:gap-6">
          {EDUCATION.map((edu, i) => (
            <div key={i} className="border border-ink bg-paperwhite p-4 transition-all duration-300 hover:-translate-y-1.5 hover:border-amber hover:shadow-[0_16px_40px_-16px_rgba(217,138,43,0.4)] dark:border-white/15 dark:bg-darkbg-2 dark:hover:shadow-[0_16px_40px_-16px_rgba(217,138,43,0.25)] sm:p-5">
              <div className="font-mono text-[11px] text-teal sm:text-xs">{edu.when}</div>
              <h4 className="mt-2 text-[16px] font-semibold sm:text-base">{edu.title}</h4>
              <p className="mt-1 text-[13px] text-ink-soft dark:text-line sm:text-[13.5px]">{edu.place}</p>
            </div>
          ))}
        </div>
      </Reveal>
    </section>
  )
}
