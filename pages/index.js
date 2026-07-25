import Head from 'next/head'
import Image from 'next/image'
import { useEffect, useState } from 'react'
import {
  AiFillGithub,
  AiFillInstagram,
  AiFillLinkedin,
  AiFillTwitterCircle
} from 'react-icons/ai'
import { BsFillMoonStarsFill, BsFillSunFill } from 'react-icons/bs'
import profile from '../assets/profile.png'
import avatar from '../assets/profile.svg'

const strengths = [
  {
    name: 'Business Analysis',
    blurb: 'Translating business needs into clear requirements, workflows, and practical action plans.'
  },
  {
    name: 'Project Management',
    blurb: 'Coordinating delivery with structure, stakeholder alignment, and steady execution.'
  },
  {
    name: 'AI Chatbot Enablement',
    blurb: 'Supporting chatbot setup, content flow, QA, and optimisation across digital channels.'
  },
  {
    name: 'Channel Operations',
    blurb: 'Helping teams improve customer experience on Meta, WhatsApp, Instagram, and similar platforms.'
  }
]

const focusAreas = [
  {
    title: 'Business process support',
    blurb: 'Improving operations through clearer workflows, documentation, and better coordination between teams.'
  },
  {
    title: 'AI and automation projects',
    blurb: 'Working on chatbot and digital engagement initiatives that make customer interaction more efficient and scalable.'
  },
  {
    title: 'Cross-channel delivery',
    blurb: 'Bridging business goals and delivery across messaging platforms, customer journeys, and stakeholder needs.'
  }
]

export default function Home() {
  const [darkMode, setDarkMode] = useState(false)

  useEffect(() => {
    const savedTheme = window.localStorage.getItem('theme')
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches

    if (savedTheme === 'dark' || (!savedTheme && prefersDark)) {
      setDarkMode(true)
    }
  }, [])

  useEffect(() => {
    document.documentElement.classList.toggle('dark', darkMode)
    document.documentElement.style.colorScheme = darkMode ? 'dark' : 'light'
    window.localStorage.setItem('theme', darkMode ? 'dark' : 'light')
  }, [darkMode])

  function toggleDarkMode() {
    setDarkMode(!darkMode)
  }

  return (
    <div className={darkMode ? 'dark' : ''}>
      <Head>
        <title>Godwin Shibu | Business Analyst & Project Manager</title>
        <meta name="description" content="Godwin Shibu is a business analyst and project manager focused on AI chatbot enablement and digital channel operations." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="min-h-screen bg-[radial-gradient(circle_at_top_left,_rgba(167,139,250,0.16),_transparent_35%),linear-gradient(135deg,_#f8f7ff_0%,_#f8fafc_45%,_#eef2ff_100%)] text-slate-800 transition-colors duration-300 dark:bg-slate-950 dark:text-slate-100">
        <section id="home" className="mx-auto flex min-h-screen max-w-7xl flex-col px-6 py-6 sm:px-8 lg:px-10">
          <nav className="mb-12 flex items-center justify-between">
            <a href="#home" className="flex items-center gap-3 rounded-full border border-slate-200 bg-white/70 px-3 py-2 shadow-sm backdrop-blur dark:border-slate-700 dark:bg-slate-900/70">
              <Image src={avatar} alt="Godwin avatar" width={48} height={48} className="rounded-full" />
              <span className="text-sm font-semibold tracking-[0.2em] text-slate-700 uppercase dark:text-slate-200">Godwin</span>
            </a>

            <div className="flex items-center gap-3">
              <button
                onClick={toggleDarkMode}
                className="rounded-full border border-slate-200 bg-white/70 p-3 shadow-sm transition hover:-translate-y-0.5 hover:shadow-md dark:border-slate-700 dark:bg-slate-900/70"
                aria-label="Toggle dark mode"
              >
                {darkMode ? <BsFillSunFill className="text-yellow-400" /> : <BsFillMoonStarsFill className="text-slate-700" />}
              </button>
              <a
                href="https://drive.google.com/file/d/1mxqlTUlFFb98n54UmSZfzw2-XdpDFoxv/view?usp=sharing"
                target="_blank"
                rel="noreferrer"
                className="rounded-full bg-gradient-to-r from-violet-600 to-fuchsia-600 px-4 py-2 text-sm font-semibold text-white shadow-lg shadow-violet-200 transition hover:-translate-y-0.5 hover:shadow-violet-300 dark:shadow-violet-950"
              >
                Resume
              </a>
            </div>
          </nav>

          <div className="grid items-center gap-10 lg:grid-cols-[1.1fr_0.9fr]">
            <div className="space-y-6">
              <span className="inline-flex rounded-full border border-violet-200 bg-violet-50 px-3 py-1 text-sm font-medium text-violet-700 dark:border-violet-900 dark:bg-violet-950/60 dark:text-violet-300">
                Business Analyst • Project Manager • AI Chatbot Operations
              </span>

              <div className="space-y-4">
                <h1 className="text-4xl font-semibold leading-tight sm:text-5xl lg:text-6xl">
                  Hi, I’m <span className="text-violet-600 dark:text-violet-400">Godwin Shibu</span>.
                </h1>
                <h2 className="text-xl font-medium text-slate-600 dark:text-slate-300 sm:text-2xl">
                  I help teams turn business needs into clear delivery plans, better customer experiences, and practical AI-powered solutions.
                </h2>
                <p className="max-w-2xl text-base leading-8 text-slate-600 dark:text-slate-300 sm:text-lg">
                  I work primarily in business analysis, project coordination, and AI chatbot enablement across digital channels such as Meta, WhatsApp, and Instagram. My focus is on bringing structure to complex work, improving workflows, and supporting customer-facing operations with clarity and consistency.
                </p>
              </div>

              <div className="flex flex-wrap gap-3">
                <a href="#projects" className="rounded-full bg-slate-900 px-5 py-3 text-sm font-semibold text-white transition hover:-translate-y-0.5 hover:bg-slate-700 dark:bg-violet-600 dark:hover:bg-violet-500">
                  See my work
                </a>
                <a href="#contact" className="rounded-full border border-slate-300 px-5 py-3 text-sm font-semibold text-slate-700 transition hover:-translate-y-0.5 hover:border-violet-400 hover:text-violet-600 dark:border-slate-700 dark:text-slate-200">
                  Let’s talk
                </a>
              </div>

              <div className="flex flex-wrap gap-4 text-3xl text-slate-700 dark:text-slate-200">
                <a className="transition hover:-translate-y-0.5 hover:text-blue-600" href="https://www.linkedin.com/in/godwinshibu/" target="_blank" rel="noreferrer"><AiFillLinkedin /></a>
                <a className="transition hover:-translate-y-0.5 hover:text-slate-900 dark:hover:text-white" href="https://github.com/godwin8030" target="_blank" rel="noreferrer"><AiFillGithub /></a>
                <a className="transition hover:-translate-y-0.5 hover:text-pink-500" href="https://www.instagram.com/ig.gsv/" target="_blank" rel="noreferrer"><AiFillInstagram /></a>
                <a className="transition hover:-translate-y-0.5 hover:text-sky-500" href="https://twitter.com/godwin_shibu" target="_blank" rel="noreferrer"><AiFillTwitterCircle /></a>
              </div>
            </div>

            <div className="mx-auto w-full max-w-md">
              <div className="rounded-[2rem] border border-white/70 bg-white/70 p-3 shadow-2xl shadow-violet-200 backdrop-blur dark:border-slate-800 dark:bg-slate-900/70 dark:shadow-black/30">
                <Image src={profile} alt="Godwin Shibu portrait" className="rounded-[1.5rem] object-cover" priority />
              </div>
            </div>
          </div>
        </section>

        <section id="about" className="mx-auto max-w-7xl px-6 pb-20 sm:px-8 lg:px-10">
          <div className="grid gap-6 lg:grid-cols-[0.85fr_1.15fr]">
            <div className="rounded-[2rem] border border-slate-200 bg-white/80 p-8 shadow-sm backdrop-blur dark:border-slate-800 dark:bg-slate-900/70">
              <p className="text-sm font-semibold uppercase tracking-[0.25em] text-violet-600 dark:text-violet-400">About</p>
              <h3 className="mt-3 text-2xl font-semibold">Focused on bringing clarity, structure, and measurable progress to complex work.</h3>
              <p className="mt-4 text-base leading-8 text-slate-600 dark:text-slate-300">
                My background blends business analysis, project coordination, and hands-on work with AI-powered customer engagement solutions. I enjoy connecting business goals with execution, improving communication across teams, and helping digital channels run more effectively.
              </p>
            </div>

            <div className="grid gap-4 sm:grid-cols-3">
              {[
                ['5+', 'years learning and building'],
                ['20+', 'projects shaped by curiosity'],
                ['100%', 'attention to detail']
              ].map(([value, label]) => (
                <div key={label} className="rounded-[1.5rem] border border-slate-200 bg-white/80 p-6 shadow-sm dark:border-slate-800 dark:bg-slate-900/70">
                  <p className="text-3xl font-semibold text-violet-600 dark:text-violet-400">{value}</p>
                  <p className="mt-2 text-sm text-slate-600 dark:text-slate-300">{label}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="skills" className="mx-auto max-w-7xl px-6 pb-20 sm:px-8 lg:px-10">
          <div className="mb-8 flex flex-col gap-2 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.25em] text-violet-600 dark:text-violet-400">Core strengths</p>
              <h3 className="text-2xl font-semibold">The kinds of work I bring structure and momentum to.</h3>
            </div>
          </div>

          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {strengths.map(({ name, blurb }) => (
              <div key={name} className="rounded-[1.5rem] border border-slate-200 bg-white/80 p-5 shadow-sm transition hover:-translate-y-1 hover:shadow-md dark:border-slate-800 dark:bg-slate-900/70">
                <div className="mb-4 h-10 w-10 rounded-full bg-gradient-to-br from-violet-500 to-fuchsia-500" />
                <p className="font-semibold">{name}</p>
                <p className="mt-2 text-sm leading-7 text-slate-600 dark:text-slate-300">{blurb}</p>
              </div>
            ))}
          </div>
        </section>

        <section id="projects" className="mx-auto max-w-7xl px-6 pb-20 sm:px-8 lg:px-10">
          <div className="mb-8 flex flex-col gap-2 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.25em] text-violet-600 dark:text-violet-400">Focus areas</p>
              <h3 className="text-2xl font-semibold">Some of the work I enjoy supporting most.</h3>
            </div>
          </div>

          <div className="grid gap-6 lg:grid-cols-3">
            {focusAreas.map((project) => (
              <div key={project.title} className="rounded-[1.75rem] border border-slate-200 bg-white/80 p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-lg dark:border-slate-800 dark:bg-slate-900/70">
                <div className="mb-4 h-10 w-10 rounded-full bg-gradient-to-br from-violet-500 to-fuchsia-500" />
                <h4 className="text-xl font-semibold">{project.title}</h4>
                <p className="mt-3 text-sm leading-7 text-slate-600 dark:text-slate-300">{project.blurb}</p>
              </div>
            ))}
          </div>
        </section>

        <section id="contact" className="mx-auto max-w-7xl px-6 pb-20 sm:px-8 lg:px-10">
          <div className="rounded-[2rem] border border-violet-200 bg-gradient-to-r from-violet-600 to-fuchsia-600 p-8 text-white shadow-xl shadow-violet-200 dark:border-violet-900 dark:shadow-violet-950">
            <p className="text-sm font-semibold uppercase tracking-[0.25em] text-violet-100">Contact</p>
            <h3 className="mt-3 text-2xl font-semibold sm:text-3xl">Let’s build something meaningful together.</h3>
            <p className="mt-4 max-w-2xl text-base leading-8 text-violet-50">
              I’m open to project, operations, and AI enablement opportunities where I can contribute with business insight, strong coordination, and thoughtful delivery across customer-facing channels.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <a href="mailto:godwinshibum@gmail.com" className="rounded-full bg-white px-5 py-3 text-sm font-semibold text-violet-700 transition hover:-translate-y-0.5">
                Email me
              </a>
              <a href="https://www.linkedin.com/in/godwinshibu/" target="_blank" rel="noreferrer" className="rounded-full border border-white/60 px-5 py-3 text-sm font-semibold text-white transition hover:-translate-y-0.5">
                Connect on LinkedIn
              </a>
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}
