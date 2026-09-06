/**
 * MetricsTape component - scrolling metrics banner
 */

import { METRICS } from '../../data/portfolio'

export default function MetricsTape() {
  return (
    <div className="mt-16 overflow-hidden whitespace-nowrap border-y border-ink bg-ink py-4 dark:border-white/15 dark:bg-black/40">
      <div className="animate-tape inline-flex">
        {[...METRICS, ...METRICS].map((m, i) => (
          <span key={i} className="inline-flex items-center gap-2.5 px-7 font-mono text-[13px] text-paper after:ml-7 after:text-[9px] after:text-teal after:content-['◆']">
            <b className="stat-glow text-[16px] font-bold text-amber sm:text-[17px]" style={{ animationDelay: `${(i % METRICS.length) * 0.2}s` }}>{m.value}</b> {m.label}
          </span>
        ))}
      </div>
    </div>
  )
}
