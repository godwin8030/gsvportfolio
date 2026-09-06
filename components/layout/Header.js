/**
 * Header component - site navigation with logo, links, and theme toggle
 */

import Image from 'next/image'
import { BsFillMoonStarsFill, BsFillSunFill } from 'react-icons/bs'
import avatar from '../../assets/profile.svg'
import { NAVIGATION_LINKS } from '../../data/portfolio'

export default function Header({ darkMode, onToggleTheme }) {
  return (
    <header className="sticky top-0 z-50 border-b border-line bg-paper/90 backdrop-blur-sm dark:border-white/10 dark:bg-darkbg/90">
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3 sm:px-8 sm:py-4 lg:px-10">
        <a href="#home" className="flex items-center gap-2 font-mono text-sm font-semibold sm:gap-2.5">
          <Image src={avatar} alt="Godwin avatar" width={26} height={26} className="h-6 w-6 rounded-full sm:h-7 sm:w-7" />
          <span className="text-xs sm:text-sm">GSV<span className="hidden sm:inline"> / PORTFOLIO</span></span>
        </a>

        <div className="hidden gap-6 sm:flex lg:gap-7">
          {NAVIGATION_LINKS.map((label) => (
            <a
              key={label}
              href={`#${label === 'Experience' ? 'work' : label.toLowerCase()}`}
              className="border-b border-transparent pb-0.5 font-mono text-[11px] text-ink-soft transition-colors hover:border-amber hover:text-ink dark:text-line dark:hover:text-paper sm:text-xs lg:text-[13px]"
            >
              {label}
            </a>
          ))}
        </div>

        <div className="flex items-center gap-2 sm:gap-3">
          <button
            onClick={onToggleTheme}
            className="rounded-full border border-line p-1.5 transition hover:-translate-y-0.5 hover:border-amber dark:border-white/20 sm:p-2.5"
            aria-label="Toggle dark mode"
          >
            {darkMode ? <BsFillSunFill className="h-4 w-4 text-amber sm:h-5 sm:w-5" /> : <BsFillMoonStarsFill className="h-4 w-4 text-ink-soft sm:h-5 sm:w-5" />}
          </button>
          <a
            href="https://rxresu.me/godwinshibu01/resume"
            target="_blank"
            rel="noreferrer"
            className="hidden font-mono text-[11px] tracking-wide border border-ink bg-ink px-3 py-1.5 text-paper transition-colors hover:bg-amber hover:border-amber dark:border-paper dark:bg-paper dark:text-ink dark:hover:bg-amber dark:hover:text-paperwhite dark:hover:border-amber sm:inline-block sm:px-4 sm:py-2.5 sm:text-[13px]"
          >
            Resume
          </a>
        </div>
      </nav>
    </header>
  )
}
