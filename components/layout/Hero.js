/**
 * Hero component - introduction section with profile image and key info
 */

import Image from 'next/image'
import { AiFillGithub, AiFillInstagram, AiFillLinkedin, AiFillTwitterCircle } from 'react-icons/ai'
import profile from '../../assets/headshot.png'
import { SOCIAL_LINKS } from '../../data/portfolio'

const iconMap = {
  linkedin: AiFillLinkedin,
  github: AiFillGithub,
  instagram: AiFillInstagram,
  twitter: AiFillTwitterCircle,
}

export default function Hero({ location }) {
  return (
    <section id="home" className="mx-auto max-w-6xl px-4 pb-4 pt-16 sm:px-8 lg:px-10">
      <div className="grid items-start gap-8 lg:grid-cols-[1.15fr_0.85fr]">
        <div>
          <div className="mb-4 flex items-center gap-2">
            <span className="inline-block h-px w-8 bg-amber" />
            <span className="font-mono text-[10px] uppercase tracking-[0.14em] text-ink-soft dark:text-line sm:text-[11px]">
              {location}
            </span>
          </div>

          <h1 className="max-w-2xl font-serif text-[clamp(28px,5.4vw,56px)] font-bold leading-[1.08] tracking-tight">
            I map how enterprises talk to <em className="text-gradient-sweep not-italic font-bold">millions</em> of customers, one conversation at a time.
          </h1>

          <div className="mt-4 flex flex-wrap items-center gap-x-3 gap-y-1.5 font-mono text-xs text-ink-soft dark:text-line sm:text-sm">
            <b className="font-semibold text-ink dark:text-paper">Godwin Shibu Varghese</b>
            <span className="text-line">/</span>
            <span>Business Analyst @ zeapl.ai</span>
            <span className="text-line">/</span>
            <span className="hidden sm:inline">Solutions &amp; Delivery, CX, CPaaS</span>
          </div>

          <p className="mt-4 max-w-xl text-[15px] leading-7 text-ink-soft dark:text-line sm:text-[16px]">
            I sit between engineering, data, and enterprise/government-scale clients to turn conversational-AI chaos into
            measurable outcomes — chatbots that respond faster, dashboards that surface the right number, and
            delivery plans that ship on time.
          </p>

          <div className="mt-6 flex flex-wrap gap-2 sm:gap-3">
            <a href="#work" className="font-mono text-[12px] tracking-wide border border-ink bg-ink px-4 py-2.5 text-paper transition-all duration-200 hover:-translate-y-0.5 hover:bg-amber hover:border-amber hover:shadow-[0_10px_30px_-8px_rgba(217,138,43,0.55)] dark:border-paper dark:bg-paper dark:text-ink dark:hover:bg-amber dark:hover:text-paperwhite dark:hover:border-amber sm:text-[13px]">
              View experience ↓
            </a>
            <a href="mailto:godwinshibu01@gmail.com" className="font-mono text-[12px] tracking-wide border border-ink px-4 py-2.5 transition-all duration-200 hover:-translate-y-0.5 hover:bg-ink hover:text-paper hover:shadow-[0_10px_30px_-8px_rgba(27,36,48,0.4)] dark:border-paper dark:hover:bg-paper dark:hover:text-ink sm:text-[13px]">
              Email me →
            </a>
          </div>

          <div className="mt-6 flex flex-wrap gap-3 text-xl text-ink-soft dark:text-line sm:text-2xl">
            {SOCIAL_LINKS.map((link) => {
              const Icon = iconMap[link.icon]
              return (
                <a
                  key={link.label}
                  className="transition hover:-translate-y-0.5 hover:text-amber"
                  href={link.href}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={link.label}
                >
                  <Icon />
                </a>
              )
            })}
          </div>
        </div>

        <div className="mx-auto w-full max-w-sm">
          <div className="border border-ink bg-paperwhite p-2 dark:border-white/15 dark:bg-darkbg-2">
            <Image src={profile} alt="Godwin Shibu portrait" className="w-full object-cover" priority />
          </div>
        </div>
      </div>
    </section>
  )
}
