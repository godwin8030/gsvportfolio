import Head from 'next/head'
import Image from 'next/image'
import { useEffect, useState, useRef } from 'react'
import {
  AiFillGithub,
  AiFillInstagram,
  AiFillLinkedin,
  AiFillTwitterCircle
} from 'react-icons/ai'
import { BsFillMoonStarsFill, BsFillSunFill } from 'react-icons/bs'
import profile from '../assets/profile.png'
import avatar from '../assets/profile.svg'
import ParticleBackground from '../components/ParticleBackground'

/* ---------------------------------------------------------------- */
/* Content                                                            */
/* ---------------------------------------------------------------- */

const METRICS = [
  { value: '40+', label: 'enterprise & govt clients served' },
  { value: '500,000+', label: 'chatbot interactions in 6 months' },
  { value: '40%', label: 'increase in customer engagement' },
  { value: '−30%', label: 'average chatbot response time' },
  { value: '+25%', label: 'user satisfaction lift' },
  { value: '$1M', label: 'revenue opportunity identified' },
  { value: '15+', label: 'chatbots shipped in one year' },
  { value: '+50%', label: 'delivery efficiency' },
  { value: '55%', label: 'more efficient than traditional chatbots' },
  { value: '+40%', label: 'citizen engagement across use cases' },
]

const ROLES = [
  {
    when: 'Sep 2025 — Present',
    place: 'Noida, India',
    title: 'Business Analyst',
    company: 'zeapl.ai',
    bullets: [
      'Driving solutions & delivery for CX and CPaaS engagements, translating client requirements into shippable product plans.',
    ],
  },
  {
    when: 'Jun 2024 — Sep 2025',
    place: 'Hybrid — Chennai / Chandigarh, India',
    title: 'Senior Business Analyst',
    company: 'Gupshup',
    bullets: [
      'Spearheaded AI chatbot development for **40+ enterprise and government clients**, lifting customer engagement by **40%** and driving **500,000+ interactions** within the first six months of deployment.',
      'Orchestrated cross-functional delivery across developers, data scientists, and stakeholders on flagship projects including the **National Consumer Helpline** and **Ayushman Bharat**, cutting average response times by **30%**.',
      'Analyzed user feedback from deployments on **NHAI** and **TATA Power**, feeding iterative improvements that raised satisfaction scores by **25%**.',
      'Built custom performance dashboards that improved account decision-making by **30%** and surfaced **$1M** in potential revenue opportunities.',
    ],
  },
  {
    when: 'Jul 2023 — Jun 2024',
    place: 'Chennai, India',
    title: 'Business Analyst',
    company: 'Gupshup',
    bullets: [
      'Built a delivery plan spanning **15+ chatbots** across **30 state and central government departments** in a single year, lifting delivery efficiency by **50%** and holding every deadline.',
      'Introduced a data-driven approach to engagement tracking, raising overall user satisfaction ratings by **25%**.',
      'Partnered with cross-functional teams to surface each department\u2019s pain points, resulting in tailored chatbot deployments across the board.',
    ],
  },
]

const PROJECTS = [
  {
    org: 'Tamil Nadu e-Governance Agency',
    client: 'Gupshup',
    summary:
      'Designed and shipped AI chatbot projects that outperformed traditional chatbots by **55%** in efficiency, lifting citizen satisfaction ratings by **30%** and cutting response time by **20%**.',
    stats: ['55% more efficient', '+30% citizen satisfaction', '−20% response time'],
  },
  {
    org: 'National Consumer Helpline · NHAI · CRIS · TATA',
    client: 'Gupshup',
    summary:
      'Led design and deployment of **15+ chatbots** with advanced AI capabilities for government agencies — cutting response times by **50%** and lifting citizen satisfaction by **35%**. Pinpointed process pain points and tailored solutions, cutting complaints by **20%** and lifting efficiency by **30%**. Shipped use cases for utility payments, grievances, and job portals, driving a **40%** increase in citizen engagement.',
    stats: ['15+ chatbots deployed', '−50% response time', '+35% citizen satisfaction', '+40% citizen engagement'],
  },
]

const LEGEND = [
  {
    tag: 'Core discipline',
    items: [
      { label: 'IT Business Analysis', filled: true },
      { label: 'Data Science', filled: true },
      { label: 'Business Intelligence' },
      { label: 'Delivery Management' },
    ],
  },
  {
    tag: 'Data & analytics',
    items: [
      { label: 'Power BI' }, { label: 'Python' }, { label: 'SQL (Postgres)' },
      { label: 'Pandas' }, { label: 'NumPy' }, { label: 'Excel' },
    ],
  },
  {
    tag: 'Engineering',
    items: [
      { label: 'JavaScript' }, { label: 'React' }, { label: 'Next.js' },
      { label: 'Node.js' }, { label: 'HTML / CSS' }, { label: 'Bash' },
      { label: 'Java' }, { label: 'AWS' }, { label: 'Solidity' },
    ],
  },
  {
    tag: 'Domain',
    items: [{ label: 'CPaaS' }, { label: 'Conversational AI' }, { label: 'CX Systems' }],
  },
  {
    tag: 'Working style',
    items: [
      { label: 'Team Coordination' }, { label: 'Task Management' },
      { label: 'Critical Thinking' }, { label: 'Problem Solving' },
    ],
  },
  {
    tag: 'Certifications',
    items: [
      { label: 'Fundamentals of Deep Learning' },
      { label: 'Blockchain & Ethereum Dev' },
      { label: 'React Framework' },
    ],
  },
  {
    tag: 'Languages',
    items: [{ label: 'English — Professional' }, { label: 'German — Elementary' }],
  },
]

const EDUCATION = [
  {
    when: 'Aug 2019 — Jul 2023',
    title: 'B.Tech, Computer Science & Engineering',
    place: 'Saintgits College of Engineering — APJ Abdul Kalam Technological University',
  },
]

/* ---------------------------------------------------------------- */
/* Small helpers                                                      */
/* ---------------------------------------------------------------- */

function Bold({ text }) {
  const parts = text.split(/\*\*(.*?)\*\*/g)
  return (
    <>
      {parts.map((part, i) =>
        i % 2 === 1 ? (
          <b key={i} className="font-semibold text-ink dark:text-paper">{part}</b>
        ) : (
          <span key={i}>{part}</span>
        )
      )}
    </>
  )
}

function Reveal({ children, className = '' }) {
  const ref = useRef(null)
  useEffect(() => {
    const node = ref.current
    if (!node) return
    const io = new IntersectionObserver(
      (entries) => entries.forEach((e) => e.isIntersecting && e.target.classList.add('in')),
      { threshold: 0.12 }
    )
    io.observe(node)
    return () => io.disconnect()
  }, [])
  return <div ref={ref} className={`reveal ${className}`}>{children}</div>
}

function Tag({ children }) {
  return (
    <div className="mb-2.5 font-mono text-[11px] uppercase tracking-[0.14em] text-ink-soft before:mr-1 before:text-amber before:content-['//']">
      {children}
    </div>
  )
}

/* ---------------------------------------------------------------- */
/* Page                                                                */
/* ---------------------------------------------------------------- */

export default function Home() {
  const [darkMode, setDarkMode] = useState(false)

  useEffect(() => {
    const savedTheme = window.localStorage.getItem('theme')
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches
    if (savedTheme === 'dark' || (!savedTheme && prefersDark)) setDarkMode(true)
  }, [])

  useEffect(() => {
    document.documentElement.classList.toggle('dark', darkMode)
    document.documentElement.style.colorScheme = darkMode ? 'dark' : 'light'
    window.localStorage.setItem('theme', darkMode ? 'dark' : 'light')
  }, [darkMode])

  return (
    <div className={darkMode ? 'dark' : ''}>
      <Head>
        <title>Godwin Shibu Varghese — Business Analyst, Conversational AI &amp; CX Systems</title>
        <meta name="description" content="Business Analyst specializing in conversational AI, CX, and CPaaS delivery for enterprise and government clients." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="bp-grid relative min-h-screen text-ink transition-colors duration-300 selection:bg-amber selection:text-paperwhite dark:text-paper">
        <ParticleBackground dark={darkMode} />

        <div className="relative z-10">

        {/* Header */}
        <header className="sticky top-0 z-50 border-b border-line bg-paper/90 backdrop-blur-sm dark:border-white/10 dark:bg-darkbg/90">
          <nav className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3 sm:px-8 sm:py-4 lg:px-10">
            <a href="#home" className="flex items-center gap-2 font-mono text-sm font-semibold sm:gap-2.5">
              <Image src={avatar} alt="Godwin avatar" width={26} height={26} className="rounded-full sm:h-7 sm:w-7" />
              <span>GSV<span className="hidden sm:inline"> / PORTFOLIO</span></span>
            </a>

            <div className="hidden gap-7 sm:flex">
              {['Experience', 'Projects', 'Skills', 'Education', 'Contact'].map((label) => (
                <a
                  key={label}
                  href={`#${label === 'Experience' ? 'work' : label.toLowerCase()}`}
                  className="border-b border-transparent pb-0.5 font-mono text-xs text-ink-soft transition-colors hover:border-amber hover:text-ink dark:text-line dark:hover:text-paper"
                >
                  {label}
                </a>
              ))}
            </div>

            <div className="flex items-center gap-2 sm:gap-3">
              <button
                onClick={() => setDarkMode(!darkMode)}
                className="rounded-full border border-line p-2 transition hover:-translate-y-0.5 hover:border-amber dark:border-white/20 sm:p-2.5"
                aria-label="Toggle dark mode"
              >
                {darkMode ? <BsFillSunFill className="text-amber" /> : <BsFillMoonStarsFill className="text-ink-soft" />}
              </button>
              <a
                href="https://drive.google.com/file/d/1mxqlTUlFFb98n54UmSZfzw2-XdpDFoxv/view?usp=sharing"
                target="_blank"
                rel="noreferrer"
                className="font-mono text-xs tracking-wide border border-ink bg-ink px-3 py-2 text-paper transition-colors hover:bg-amber hover:border-amber dark:border-paper dark:bg-paper dark:text-ink dark:hover:bg-amber dark:hover:text-paperwhite dark:hover:border-amber sm:px-4 sm:py-2.5 sm:text-[13px]"
              >
                Resume
              </a>
            </div>
          </nav>
        </header>

        {/* Hero */}
        <section id="home" className="mx-auto max-w-6xl px-6 pb-4 pt-20 sm:px-8 lg:px-10">
          <div className="grid items-start gap-12 lg:grid-cols-[1.15fr_0.85fr]">
            <div>
              <div className="mb-5 flex items-center gap-2.5">
                <span className="inline-block h-px w-10 bg-amber" />
                <span className="font-mono text-[11px] uppercase tracking-[0.14em] text-ink-soft dark:text-line">
                  Noida, India
                </span>
              </div>

              <h1 className="max-w-2xl font-serif text-[clamp(34px,5.4vw,56px)] font-bold leading-[1.08] tracking-tight">
                I map how enterprises talk to <em className="italic text-teal">millions</em> of customers, one conversation at a time.
              </h1>

              <div className="mt-5 flex flex-wrap items-center gap-x-4 gap-y-2 font-mono text-sm text-ink-soft dark:text-line">
                <b className="font-semibold text-ink dark:text-paper">Godwin Shibu Varghese</b>
                <span className="text-line">/</span>
                <span>Business Analyst @ zeapl.ai</span>
                <span className="text-line">/</span>
                <span>Solutions &amp; Delivery, CX, CPaaS</span>
              </div>

              <p className="mt-6 max-w-xl text-[16px] leading-7 text-ink-soft dark:text-line">
                I sit between engineering, data, and enterprise/government-scale clients to turn conversational-AI chaos into
                measurable outcomes — chatbots that respond faster, dashboards that surface the right number, and
                delivery plans that ship on time.
              </p>

              <div className="mt-8 flex flex-wrap gap-3">
                <a href="#work" className="font-mono text-[13px] tracking-wide border border-ink bg-ink px-5 py-3 text-paper transition-colors hover:bg-amber hover:border-amber dark:border-paper dark:bg-paper dark:text-ink dark:hover:bg-amber dark:hover:text-paperwhite dark:hover:border-amber">
                  View experience ↓
                </a>
                <a href="mailto:godwinshibu01@gmail.com" className="font-mono text-[13px] tracking-wide border border-ink px-5 py-3 transition-colors hover:bg-ink hover:text-paper dark:border-paper dark:hover:bg-paper dark:hover:text-ink">
                  Email me →
                </a>
              </div>

              <div className="mt-8 flex flex-wrap gap-4 text-2xl text-ink-soft dark:text-line">
                <a className="transition hover:-translate-y-0.5 hover:text-amber" href="https://www.linkedin.com/in/godwinshibu/" target="_blank" rel="noreferrer"><AiFillLinkedin /></a>
                <a className="transition hover:-translate-y-0.5 hover:text-amber" href="https://github.com/godwin8030" target="_blank" rel="noreferrer"><AiFillGithub /></a>
                <a className="transition hover:-translate-y-0.5 hover:text-amber" href="https://www.instagram.com/ig.gsv/" target="_blank" rel="noreferrer"><AiFillInstagram /></a>
                <a className="transition hover:-translate-y-0.5 hover:text-amber" href="https://twitter.com/godwin_shibu" target="_blank" rel="noreferrer"><AiFillTwitterCircle /></a>
              </div>
            </div>

            <div className="mx-auto w-full max-w-sm">
              <div className="border border-ink bg-paperwhite p-2 dark:border-white/15 dark:bg-darkbg-2">
                <Image src={profile} alt="Godwin Shibu portrait" className="w-full object-cover" priority />
              </div>
            </div>
          </div>
        </section>

        {/* Metrics tape */}
        <div className="mt-16 overflow-hidden whitespace-nowrap border-y border-ink bg-ink py-3.5 dark:border-white/15 dark:bg-black/40">
          <div className="animate-tape inline-flex">
            {[...METRICS, ...METRICS].map((m, i) => (
              <span key={i} className="inline-flex items-center gap-2.5 px-7 font-mono text-[13px] text-paper after:ml-7 after:text-[9px] after:text-teal after:content-['◆']">
                <b className="font-semibold text-amber">{m.value}</b> {m.label}
              </span>
            ))}
          </div>
        </div>

        <div className="mx-auto max-w-6xl px-6 sm:px-8 lg:px-10">

          {/* Experience */}
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
                          <Bold text={b} />
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </Reveal>
            ))}
          </section>

          {/* Projects */}
          <section id="projects" className="py-20">
            <div className="mb-11 flex items-baseline gap-4 border-b border-ink pb-4 dark:border-white/15">
              <span className="font-mono text-[13px] text-amber">02</span>
              <h2 className="font-serif text-[clamp(24px,3.2vw,32px)] font-bold">Selected projects</h2>
            </div>
            <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
              {PROJECTS.map((p, i) => (
                <Reveal key={i}>
                  <div className="flex h-full flex-col border border-ink bg-paperwhite p-6 dark:border-white/15 dark:bg-darkbg-2">
                    <span className="font-mono text-[11px] uppercase tracking-[0.14em] text-teal">{p.client}</span>
                    <h3 className="mt-2 text-[18px] font-semibold leading-snug">{p.org}</h3>
                    <p className="mt-3 text-[14.5px] leading-relaxed text-ink-soft dark:text-line">
                      <Bold text={p.summary} />
                    </p>
                    <div className="mt-5 flex flex-wrap gap-2 border-t border-line-soft pt-4 dark:border-white/10">
                      {p.stats.map((s, j) => (
                        <span key={j} className="border border-ink-soft px-2.5 py-1.5 font-mono text-[11px] dark:border-line">{s}</span>
                      ))}
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>
          </section>

          {/* Skills */}
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
                          className={`border px-2.5 py-1.5 font-mono text-xs ${
                            item.filled
                              ? 'border-ink bg-ink text-paper dark:border-paper dark:bg-paper dark:text-ink'
                              : 'border-ink-soft text-ink dark:border-line dark:text-paper'
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

          {/* Education */}
          <section id="education" className="py-20">
            <div className="mb-11 flex items-baseline gap-4 border-b border-ink pb-4 dark:border-white/15">
              <span className="font-mono text-[13px] text-amber">04</span>
              <h2 className="font-serif text-[clamp(24px,3.2vw,32px)] font-bold">Education</h2>
            </div>
            <Reveal>
              <div className="grid grid-cols-[repeat(auto-fit,minmax(260px,1fr))] gap-6">
                {EDUCATION.map((edu, i) => (
                  <div key={i} className="border border-ink bg-paperwhite p-5 dark:border-white/15 dark:bg-darkbg-2">
                    <div className="font-mono text-xs text-teal">{edu.when}</div>
                    <h4 className="mt-2 text-base font-semibold">{edu.title}</h4>
                    <p className="mt-1 text-[13.5px] text-ink-soft dark:text-line">{edu.place}</p>
                  </div>
                ))}
              </div>
            </Reveal>
          </section>
        </div>

        {/* Contact / footer */}
        <footer id="contact" className="border-t border-ink pb-10 pt-14 dark:border-white/15">
          <div className="mx-auto max-w-6xl px-6 sm:px-8 lg:px-10">
            <span className="font-mono text-[11px] uppercase tracking-[0.14em] text-ink-soft before:mr-1 before:text-amber before:content-['//'] dark:text-line">
              Get in touch
            </span>
            <h2 className="mt-3.5 font-serif text-[clamp(24px,3.2vw,32px)] font-bold">
              Let&apos;s talk about your next chatbot, dashboard, or delivery plan.
            </h2>
            <p className="mb-7 mt-4 max-w-lg text-[15px] leading-7 text-ink-soft dark:text-line">
              Based in Noida, working with teams across CX, CPaaS, and enterprise data — open to
              Business Analyst and Solutions &amp; Delivery conversations.
            </p>
            <div className="mt-2 grid grid-cols-[repeat(auto-fit,minmax(200px,1fr))] gap-5">
              <a href="mailto:godwinshibu01@gmail.com" className="border-t border-line-soft pt-2.5 font-mono text-[13px] hover:text-amber dark:border-white/15">
                godwinshibu01@gmail.com
              </a>
              <a href="tel:+917009485645" className="border-t border-line-soft pt-2.5 font-mono text-[13px] hover:text-amber dark:border-white/15">
                +91 70094 85645
              </a>
              <a href="https://www.linkedin.com/in/godwinshibu/" target="_blank" rel="noreferrer" className="border-t border-line-soft pt-2.5 font-mono text-[13px] hover:text-amber dark:border-white/15">
                linkedin.com/in/godwinshibu
              </a>
              <a href="https://github.com/godwin8030" target="_blank" rel="noreferrer" className="border-t border-line-soft pt-2.5 font-mono text-[13px] hover:text-amber dark:border-white/15">
                github.com/godwin8030
              </a>
              <div className="border-t border-line-soft pt-2.5 font-mono text-[13px] dark:border-white/15">
                Noida, India
              </div>
            </div>
            <div className="mt-12 flex flex-wrap justify-between gap-2.5 font-mono text-[11px] text-ink-soft dark:text-line">
              <span>© 2026 Godwin Shibu Varghese</span>
              <span>Built &amp; maintained with intent</span>
            </div>
          </div>
        </footer>
        </div>
      </main>
    </div>
  )
}