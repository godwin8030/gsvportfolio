/**
 * BoldText component - renders text with **bold** markdown-like syntax
 * Highlights leading numbers (percentages, currency) in amber
 */

function splitLeadingNumber(text) {
  const m = text.match(/^([+\-−]?\$?\d[\d,]*(?:\.\d+)?(?:%|\+|K|M|Cr)?)/)
  if (!m) return [null, text]
  return [m[1], text.slice(m[1].length)]
}

export default function BoldText({ text }) {
  const parts = text.split(/\*\*(.*?)\*\*/g)
  return (
    <>
      {parts.map((part, i) => {
        if (i % 2 === 0) return <span key={i}>{part}</span>
        const [lead, rest] = splitLeadingNumber(part)
        if (!lead) {
          return <b key={i} className="font-semibold text-ink dark:text-paper">{part}</b>
        }
        return (
          <b key={i} className="font-bold text-ink dark:text-paper">
            <span className="text-amber">{lead}</span>{rest}
          </b>
        )
      })}
    </>
  )
}
