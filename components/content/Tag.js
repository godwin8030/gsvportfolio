/**
 * Tag component - displays section labels with // prefix
 */

export default function Tag({ children }) {
  return (
    <div className="mb-2.5 font-mono text-[11px] uppercase tracking-[0.14em] text-ink-soft before:mr-1 before:text-amber before:content-['//']">
      {children}
    </div>
  )
}
