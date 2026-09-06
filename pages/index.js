import Head from 'next/head'
import { useEffect, useState } from 'react'
import ParticleBackground from '../components/ParticleBackground'
import Header from '../components/layout/Header'
import Hero from '../components/layout/Hero'
import MetricsTape from '../components/content/MetricsTape'
import ExperienceSection from '../components/content/ExperienceSection'
import ProjectsSection from '../components/content/ProjectsSection'
import SkillsSection from '../components/content/SkillsSection'
import EducationSection from '../components/content/EducationSection'

export default function Home() {
  const [darkMode, setDarkMode] = useState(true)

  useEffect(() => {
    const savedTheme = window.localStorage.getItem('theme')
    setDarkMode(savedTheme !== 'light')
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
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
      </Head>

      <main className="bp-grid relative min-h-screen text-ink transition-colors duration-300 selection:bg-amber selection:text-paperwhite dark:text-paper">
        <ParticleBackground dark={darkMode} />
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 z-[5]"
          style={{ backgroundImage: 'linear-gradient(to bottom, transparent 0, transparent 55vh, var(--page-bg) 95vh)' }}
        />

        <div className="relative z-10">
          <Header darkMode={darkMode} onToggleTheme={() => setDarkMode(!darkMode)} />
          
          <Hero location="Noida, India" />
          
          <MetricsTape />
          
          <div className="mx-auto max-w-6xl px-6 sm:px-8 lg:px-10">
            <ExperienceSection />
            <ProjectsSection />
            <SkillsSection />
            <EducationSection />
          </div>
        </div>
      </main>
    </div>
  )
}
