/**
 * ExperienceSection component - work history timeline
 */

import Reveal from './Reveal'
import BoldText from './BoldText'
import { ROLES } from '../../data/portfolio'

export default function ExperienceSection() {
  return (
    <section id="work" className="py-20">
      <div className="mb-11 flex items-baseline gap-4 border-b border-ink pb-4 dark:border-white/15">
        <span className="font-mono text-[13px] text-amber">01</span>
        <h2 className="font-serif text-[clamp(24px,3.2vw,32px)] font-bold">Experience</h2>
      </div>
      {ROLES.map((role, i) => (
        <Reveal key={i}>
          <div className={`sm:grid sm:grid-cols-[160px_1px_1fr] sm:gap-x-7 ${i > 0 ? 'mt-8 border-t border-line-soft pt-8 dark:border-white/10 sm:mt-0 sm:border-t-0 sm:pt-0' : ''}`}>
            <div className="flex items-center gap-2 font-mono text-[11.5px] text-ink-soft dark:text-line sm:block sm:pt-1 sm:text-[12.5px]">
              <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-amber sm:hidden" />
              <span>{role.when} · {role.place}</span>
            </div>
            <div className="relative hidden sm:block bg-line dark:bg-white/15">
              <div className="absolute -left-[3.5px] top-1.5 h-2 w-2 rounded-full border-2 border-amber bg-paper dark:bg-darkbg" />
            </div>
            <div className="pb-0 pt-3 sm:pb-12 sm:pt-0">
              <h3 className="text-[18px] font-semibold sm:text-[19px]">{role.title}</h3>
              <span className="mt-0.5 block font-mono text-[12.5px] text-teal">{role.company}</span>
              <ul className="mt-3.5 space-y-2.5">
                {role.bullets.map((b, j) => (
                  <li key={j} className="relative pl-5 text-[14px] text-ink-soft before:absolute before:left-0 before:text-amber before:content-['—'] dark:text-line sm:text-[14.5px]">
                    <BoldText text={b} />
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </Reveal>
      ))}
    </section>
  )
}
