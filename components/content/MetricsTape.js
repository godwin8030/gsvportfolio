/**
 * MetricsTape component - scrolling metrics banner
 */

import { METRICS } from '../../data/portfolio'

export default function MetricsTape() {
  return (
    <div className="mt-10 overflow-hidden whitespace-nowrap border-y border-ink bg-ink py-3 dark:border-white/15 dark:bg-black/40 sm:mt-16 sm:py-4">
      <div className="animate-tape inline-flex">
        {[...METRICS, ...METRICS].map((m, i) => (
          <span key={i} className="inline-flex items-center gap-2 px-5 font-mono text-[11px] text-paper after:ml-5 after:text-[8px] after:text-teal after:content-['◆'] sm:px-7 sm:text-[13px] sm:after:ml-7 sm:after:text-[9px]">
            <b className="stat-glow text-[14px] font-bold text-amber sm:text-[16px]" style={{ animationDelay: `${(i % METRICS.length) * 0.2}s` }}>{m.value}</b> {m.label}
          </span>
        ))}
      </div>
    </div>
  )
}
