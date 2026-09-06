/**
 * SkillsSection component - skills and toolkit grid
 */

import Reveal from './Reveal'
import Tag from './Tag'
import { LEGEND } from '../../data/portfolio'

export default function SkillsSection() {
  return (
    <section id="skills" className="py-12 sm:py-16 lg:py-20">
      <div className="mb-8 flex items-baseline gap-3 border-b border-ink pb-3 dark:border-white/15 sm:mb-11 sm:gap-4 sm:pb-4">
        <span className="font-mono text-[11px] text-amber sm:text-[13px]">03</span>
        <h2 className="font-serif text-[clamp(22px,3.2vw,32px)] font-bold">Skills &amp; toolkit</h2>
      </div>
      <Reveal>
        <div className="grid grid-cols-[repeat(auto-fit,minmax(200px,1fr))] gap-px border border-ink bg-ink dark:border-white/15 sm:grid-cols-[repeat(auto-fit,minmax(220px,1fr))]">
          {LEGEND.map((cell, i) => (
            <div key={i} className="bg-paper p-4 dark:bg-darkbg sm:p-5">
              <Tag>{cell.tag}</Tag>
              <div className="mt-3 flex flex-wrap gap-1.5 sm:gap-2">
                {cell.items.map((item, j) => (
                  <span
                    key={j}
                    className={`border px-2 py-1 font-mono text-[10px] transition-all duration-200 hover:-translate-y-0.5 sm:px-2.5 sm:py-1.5 sm:text-xs ${
                      item.filled
                        ? 'border-ink bg-ink text-paper hover:border-amber hover:bg-amber hover:text-paperwhite dark:border-paper dark:bg-paper dark:text-ink dark:hover:border-amber dark:hover:bg-amber dark:hover:text-paperwhite'
                        : 'border-ink-soft text-ink hover:border-amber hover:text-amber dark:border-line dark:text-paper'
                    }`}
                  >
                    {item.label}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </Reveal>
    </section>
  )
}
