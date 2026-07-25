import Head from 'next/head'
import Image from 'next/image'
import { useState } from 'react'
import {
  AiFillGithub,
  AiFillInstagram,
  AiFillLinkedin,
  AiFillTwitterCircle
} from 'react-icons/ai'
import { BsFillMoonStarsFill, BsFillSunFill } from 'react-icons/bs'
import { FaAws, FaJava, FaPython, FaReact } from 'react-icons/fa'
import { DiNodejs } from 'react-icons/di'
import { SiDjango, SiFlask, SiJavascript, SiPostgresql, SiTailwindcss, SiVite } from 'react-icons/si'
import { TbBrandNextjs } from 'react-icons/tb'
import profile from '../assets/profile.png'
import avatar from '../assets/profile.svg'

const skills = [
  { name: 'JavaScript', icon: SiJavascript, color: 'text-yellow-500' },
  { name: 'React', icon: FaReact, color: 'text-sky-500' },
  { name: 'Next.js', icon: TbBrandNextjs, color: 'text-slate-900 dark:text-white' },
  { name: 'Node.js', icon: DiNodejs, color: 'text-green-500' },
  { name: 'Python', icon: FaPython, color: 'text-blue-500' },
  { name: 'Django', icon: SiDjango, color: 'text-emerald-600' },
  { name: 'Flask', icon: SiFlask, color: 'text-slate-600 dark:text-slate-300' },
  { name: 'PostgreSQL', icon: SiPostgresql, color: 'text-pink-500' },
  { name: 'Tailwind CSS', icon: SiTailwindcss, color: 'text-cyan-500' },
  { name: 'AWS', icon: FaAws, color: 'text-orange-500' },
  { name: 'Java', icon: FaJava, color: 'text-red-500' },
  { name: 'Vite', icon: SiVite, color: 'text-purple-500' }
]

const projects = [
  {
    title: 'Productive dashboards',
    blurb: 'Built modern analytics experiences with React and data visualisation patterns for faster decision-making.'
  },
  {
    title: 'Web applications',
    blurb: 'Delivered polished frontends and scalable APIs for business tools, portfolio products, and automation workflows.'
  },
  {
    title: 'Data-driven solutions',
    blurb: 'Worked with Python, Django, and database systems to turn raw information into reliable applications.'
  }
]

export default function Home() {
  const [darkMode, setDarkMode] = useState(false)

  function toggleDarkMode() {
    setDarkMode(!darkMode)
  }

  return (
    <div className={darkMode ? 'dark' : ''}>
      <Head>
        <title>Godwin Shibu | Software Developer & Analyst</title>
        <meta name="description" content="Godwin Shibu is a software developer and analyst focused on building practical web products and data-driven experiences." />
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
                Available for freelance and full-time opportunities
              </span>

              <div className="space-y-4">
                <h1 className="text-4xl font-semibold leading-tight sm:text-5xl lg:text-6xl">
                  Hi, I’m <span className="text-violet-600 dark:text-violet-400">Godwin Shibu</span>.
                </h1>
                <h2 className="text-xl font-medium text-slate-600 dark:text-slate-300 sm:text-2xl">
                  Software developer and analyst focused on creating practical web apps, thoughtful interfaces, and dependable digital experiences.
                </h2>
                <p className="max-w-2xl text-base leading-8 text-slate-600 dark:text-slate-300 sm:text-lg">
                  I’m a developer who enjoys turning ideas into clean products with a strong mix of frontend craft, backend logic, and analytical thinking. Whether I’m building a web app, dashboard, or workflow tool, I care about usability, performance, and clarity.
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
              <h3 className="mt-3 text-2xl font-semibold">Focused on building useful products with a calm, modern approach.</h3>
              <p className="mt-4 text-base leading-8 text-slate-600 dark:text-slate-300">
                My background blends development, analysis, and product-minded problem solving. I enjoy creating experiences that are intuitive, responsive, and practical, while continuously learning new tools and improving how software serves people.
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
              <p className="text-sm font-semibold uppercase tracking-[0.25em] text-violet-600 dark:text-violet-400">Skills</p>
              <h3 className="text-2xl font-semibold">Core tools I use to build.</h3>
            </div>
            <p className="text-sm text-slate-600 dark:text-slate-300">Frontend, backend, databases, and product thinking.</p>
          </div>

          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {skills.map(({ name, icon: Icon, color }) => (
              <div key={name} className="rounded-[1.5rem] border border-slate-200 bg-white/80 p-5 shadow-sm transition hover:-translate-y-1 hover:shadow-md dark:border-slate-800 dark:bg-slate-900/70">
                <Icon className={`text-3xl ${color}`} />
                <p className="mt-3 font-semibold">{name}</p>
              </div>
            ))}
          </div>
        </section>

        <section id="projects" className="mx-auto max-w-7xl px-6 pb-20 sm:px-8 lg:px-10">
          <div className="mb-8 flex flex-col gap-2 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.25em] text-violet-600 dark:text-violet-400">Selected work</p>
              <h3 className="text-2xl font-semibold">Recent project themes I enjoy building.</h3>
            </div>
          </div>

          <div className="grid gap-6 lg:grid-cols-3">
            {projects.map((project) => (
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
              I’m open to collaborations, freelance opportunities, and full-time roles where I can contribute with clean code, thoughtful design, and analytical problem-solving.
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
