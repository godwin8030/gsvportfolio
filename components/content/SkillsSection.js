/**
 * SkillsSection component - skills and toolkit grid
 */

import Reveal from './Reveal'
import Tag from './Tag'
import { LEGEND } from '../../data/portfolio'

export default function SkillsSection() {
  return (
    <section id="skills" className="py-20">
      <div className="mb-11 flex items-baseline gap-4 border-b border-ink pb-4 dark:border-white/15">
        <span className="font-mono text-[13px] text-amber">03</span>
        <h2 className="font-serif text-[clamp(24px,3.2vw,32px)] font-bold">Skills &amp; toolkit</h2>
      </div>
      <Reveal>
        <div className="grid grid-cols-[repeat(auto-fit,minmax(220px,1fr))] gap-px border border-ink bg-ink dark:border-white/15">
          {LEGEND.map((cell, i) => (
            <div key={i} className="bg-paper p-5 dark:bg-darkbg">
              <Tag>{cell.tag}</Tag>
              <div className="flex flex-wrap gap-2">
                {cell.items.map((item, j) => (
                  <span
                    key={j}
                    className={`border px-2.5 py-1.5 font-mono text-xs transition-all duration-200 hover:-translate-y-0.5 ${
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
