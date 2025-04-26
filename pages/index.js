import Head from 'next/head'
import {BsFillMoonStarsFill} from 'react-icons/bs'
import {AiFillTwitterCircle, AiFillLinkedin, AiFillGithub, AiFillInstagram} from 'react-icons/ai';
import {FaReact, FaJava, FaAws} from 'react-icons/fa';
import {DiNodejs} from 'react-icons/di';
import {TbBrandNextjs} from 'react-icons/tb';
import {SiJavascript, SiTailwindcss} from 'react-icons/si';
import { SiDjango } from "react-icons/si";
import { SiPostgresql } from 'react-icons/si'
import { FaPython } from "react-icons/fa";
import {BsFillSunFill} from 'react-icons/bs';
import { SiFlask } from "react-icons/si";
import {FaSass} from 'react-icons/fa';
import {FaHtml5} from 'react-icons/fa';
import {SiVite} from 'react-icons/si';
import Image from 'next/image'; 
import profile from '../assets/profile.png';
import avatar from '../assets/profile.svg';
import { useState } from 'react';


export default function Home() {
  const [darkMode, setDarkMode] = useState(false);
  function toggleDarkMode() {
    setDarkMode(!darkMode);
  }



  return (
    <div className={darkMode ? 'dark': ""}>
      <Head>
        <title>Godwin Shibu</title>
        <meta name="description" content="web dev 💻" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className='bg-white px-10 dark:bg-gray-900 transition-all duration-300 ease-in-out'>
        <section className='min-h-screen'>
          <nav className='py-10 mb-12 flex justify-between'>
          <Image className='flex items-center rounded-md'
              src={avatar}
              width={70}
              height={70}
              />
            <ul className='flex items-center'>
              <li className={`${darkMode ? 'bg-gradient-to-t from-purple-900 to-purple-500' : 'bg-gray-200'} text-white font-bold py-2 px-4 rounded-md transition duration-500 ease-in-out delay-150 hover:bg-gray-300 hover:-translate-y-1 hover:scale-105 cursor-pointer relative`}
              onClick={toggleDarkMode}>
                <BsFillMoonStarsFill style={{ color: 'black', display: darkMode ? 'none' : 'inline-block' }} />
                <BsFillSunFill style={{ color: 'white', display: darkMode ? 'inline-block' : 'none' }} />
              </li>
              <li className='transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-105 duration-300'>
                <a className='bg-gradient-to-t from-purple-900 to-purple-500 text-white px-4 py-2 rounded-md ml-8 font-poppins hover:bg-gradient-to-b' target="_blank" rel="noopener noreferrer" href="https://drive.google.com/file/d/1mxqlTUlFFb98n54UmSZfzw2-XdpDFoxv/view?usp=sharing">Resume</a>
              </li>
            </ul>
          </nav>
          <div className='text-center px-13 py-10 lg:px-9'>
            <h2 className='text-5xl font-worksans font-semibold py-2 shadow-inner rounded-3xl shadow-gray-300 text-purple-900 md:text-6xl dark:text-purple-400 dark:shadow-black'>Godwin Shibu</h2>
            <h3 className='text-l py-3 font-poppins text-gray-600 md:text-2xl dark:text-white' >analyst & web dev</h3>
            <p className='text-sm py-5 text-justify font-poppins font-medium text-gray-700 md:text-lg max-w-xl mx-auto dark:text-white'>web dev. analyst. 3D model designer. working with computers since a kid. love the challenge of creating new stuff. always eager to learn new tech.
            </p>
            <div className='text-5xl flex justify-center flex-wrap gap-6 px-5 py-5 text-purple-900 shadow-xl rounded-3xl transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 hover: duration-300 md:gap-20 hover:shadow-purple-400 dark:text-purple-400 dark:shadow-black hover:dark:shadow-purple-500'>
              <a className='hover:text-blue-700 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 hover: duration-200' href="https://www.linkedin.com/in/godwinshibu/"><AiFillLinkedin/></a>
              <a className='hover:text-black transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 hover: duration-200 dark:hover:text-white' href="https://github.com/godwin8030"><AiFillGithub/></a>
              <a className='hover:text-pink-500 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 hover: duration-200' href="https://www.instagram.com/ig.gsv/"><AiFillInstagram/></a>
              <a className='hover:text-blue-400 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 hover: duration-200' href="https://twitter.com/godwin_shibu"><AiFillTwitterCircle/></a>
            </div>
            <div className='rounded-full mt-20 max-w-xs shadow-2xl transition ease-in-out delay-150 ring-2 ring-offset-2 hover:ring-offset-4 ring-purple-400 hover:bg-purple-500 hover:shadow-purple-700 hover:-translate-y-1 hover:scale-110 hover:duration-300 md:max-w-sm mx-auto dark:hover:ring-2 dark:hover:ring-white'>
            <Image 
              src={profile}
            />
            </div>
          </div>
        </section>
        <section>
            <h3 className='text-3xl pt-20 pb-6 font-poppins font-bold text-gray-700 text-center dark:text-white'>Skills</h3>
            <div className='text-6xl flex justify-center flex-wrap gap-10 p-4 shadow-2xl rounded-3xl text-purple-900 hover:shadow-purple-400 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-105 duration-300 dark:text-purple-400 dark:shadow-black hover:dark:shadow-purple-500'>
                <div className='transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 hover: duration-200 text-yellow-500'><SiJavascript/><span className='text-sm text-center flex justify-center'>Javascript</span></div>
                <div className='transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 hover: duration-200 text-blue-500'><FaPython/><span className='text-sm text-center flex justify-center'>Python</span></div>
                <div className='transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 hover: duration-200 text-pink-500 dark:text-pink-400'><SiPostgresql /><span className='text-sm text-center flex justify-center'>PostgreSQL</span></div>
                <div className='transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 hover: duration-200 text-blue-500 dark:text-blue-400'><FaReact/><span className='text-sm text-center flex justify-center'>React</span></div>
                <div className='transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 hover: duration-200 text-red-400 dark:text-red-400'><SiDjango/><span className='text-sm text-center flex justify-center'>Django</span></div>
                <div className='transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 hover: duration-200 text-green-500'><DiNodejs/><span className='text-sm text-center flex justify-center'>Nodejs</span></div>
                <div className='transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 hover: duration-200 text-gray-400 dark:hover:text-white'><SiFlask/><span className='text-sm text-center flex justify-center'>Flask</span></div>
                <div className='transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 hover: duration-200 text-blue-500'><SiTailwindcss/><span className='text-sm text-center flex justify-center'>Tailwind</span></div>
                <div className='transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 hover: duration-200 text-red-500'><FaJava/><span className='text-sm text-center flex justify-center'>Java</span></div>
                <div className='transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 hover: duration-200 text-yellow-500'><FaAws/><span className='text-sm text-center flex justify-center'>AWS</span></div>
            </div>
            <section>
              <div className='text-white dark:text-black'>
                .
              </div>
            </section>
        </section>
      </main>
    </div>
  )
}
