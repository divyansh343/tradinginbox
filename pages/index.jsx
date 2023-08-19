import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Link from 'next/link'
import Pricing from '../components/landing/Pricing'
import Hero from '../components/landing/Hero'
import Digits from '../components/landing/Digits'
import Section from '../components/landing/Section'
import Testimonials from '../components/landing/Testimonials'
import Sheet from '../components/landing/Sheet'
import StageSection from '../components/frontpage/StageSection'
import Faq from '../components/frontpage/Faq'
import Strip from '../components/frontpage/Strip'
import Shutter from '../components/frontpage/Shutter'
import Services from '../components/frontpage/Services'
import Stars from '../components/frontpage/Stars'
import BoxSection from '../components/frontpage/BoxSection'
import { BsFillSunFill, BsMoonFill } from 'react-icons/bs'
import { useState } from 'react'

export default function Home() {
  const [etheme, settheme] = useState("lofi")
  return (
    <div  data-theme={etheme}  className=''>
      <div className=" h-full w-full min-h-screen flex items-center flex-col p-8 xl:p-28 lg:p-28 text-primary section">

        <div className="container w-full lg:w-[55%] xl:w-[55%] h-full"><h3 className="text-[11px] text-dark-200 flex items-center Menlo">

          <span className="uppercase transition duration-300 hover:text-dark-100">05:04:34 pm</span>

          <div className="h-[2px] w-[2px] bg-dark-200 mx-2 rounded-full">
          </div>

          <a href="https://en.wikipedia.org/wiki/Kochi" target="_blank" rel="noopener noreferrer" className="transition-all duration-300 cursor-pointer grayscale hover:grayscale-0 hover:text-dark-100">Chhindwara, MP</a>

          <div className="h-[2px] w-[2px] bg-dark-200 mx-2 rounded-full">
          </div>

          <a className="flex items-center transition-all duration-300 cursor-pointer grayscale hover:grayscale-0 hover:text-dark-100" target="_blank" rel="noopener noreferrer">

            {/* <Image src="https://upload.wikimedia.org/wikipedia/commons/thumb/1/19/Spotify_logo_without_text.svg/2048px-Spotify_logo_without_text.svg.png" alt="Spotify Logo" height="12" width="12" class="mr-2" /> */}

            On Spotify</a>
          <label className="swap swap-rotate p-2 mx-2">

              {/* <!-- this hidden checkbox controls the state --> */}
              <input onChange={etheme === "lofi" ? () => settheme("forest") : () => settheme("lofi")} type="checkbox" />
              <span className='swap-on text-2xl text-primary'>
                <BsFillSunFill />
              </span>

              {/* <!-- moon icon --> */}
              <span className='swap-off text-xl text-primary'>
                <BsMoonFill />
              </span>
            </label>
            </h3>

          <div className="mt-6">

            <h1 className="text-[25px] font-[600] text-dark-100 Magnat-Head">Divyansh Pal</h1>

            <p className="text-[15px] mt-[8px] font-[300] tracking-[0.25px] leading-[28px]">Full Stack developer, Designer</p><svg aria-hidden="true" width="80" height="16" viewBox="0 0 432 38" fill="none" className="my-4">

              <path d="M402.74 37.59c-12.547 0-27.973-16.277-28.629-16.965-7.043-8.191-14.168-15.477-24.648-15.477-11.488 0-24.984 15.258-25.125 15.41l-1.168 1.273c-7.441 8.102-14.469 15.758-26.984 15.758-12.547 0-27.973-16.277-28.629-16.965-7.043-8.191-14.168-15.477-24.648-15.477-11.488 0-24.984 15.258-25.125 15.41l-1.101 1.16c-8.497 8.868-15.203 15.872-27.047 15.872-12.551 0-27.98-16.277-28.629-16.965-7.047-8.192-14.176-15.477-24.648-15.477-11.488 0-24.984 15.257-25.125 15.41l-1.18 1.285c-7.434 8.097-14.465 15.742-26.977 15.742-12.551 0-27.98-16.277-28.63-16.965C47.402 12.427 40.273 5.142 29.8 5.142A28.001 28.001 0 004.988 20.099a2.37 2.37 0 01-3.203.988A2.37 2.37 0 01.8 17.884C6.503 7.107 17.612.404 29.796.404c12.473 0 20.754 8.422 28.168 17.043 3.977 4.23 16.391 15.395 25.11 15.395 10.433 0 16.19-6.27 23.483-14.207l1.145-1.246C108.268 16.74 122.733.405 136.35.405c12.473 0 20.754 8.422 28.168 17.043 3.976 4.23 16.391 15.395 25.109 15.395 9.82 0 15.316-5.73 23.629-14.406l1.039-1.086c.535-.617 15-16.95 28.613-16.95 12.48 0 20.762 8.423 28.168 17.044 3.977 4.223 16.391 15.39 25.109 15.39 10.438 0 16.203-6.273 23.5-14.222l1.137-1.235c.566-.648 15.031-16.983 28.641-16.983 12.48 0 20.762 8.421 28.168 17.043 3.976 4.222 16.391 15.39 25.109 15.39 10.004 0 19.32-5.39 24.324-14.066a2.362 2.362 0 013.238-.87 2.372 2.372 0 01.871 3.234c-5.852 10.164-16.746 16.465-28.434 16.465l.001-.001z" fill="#e2e2e2"></path></svg>

            <p className="text-[15px] my-[8px] font-[300] tracking-[0.25px] leading-[32px]">
              {/* <a href="https://www.producthunt.com/stories/announcing-the-golden-kitty-awards-2021-winners#:~:text=%F0%9F%8F%86%20Savio%20Martin-,(WINNER),-Best%20Community%20Member" target="_blank" rel="noopener noreferrer" className="mx-[1px] font-medium text-dark-100 hover:border-dark-100 transition-all duration-500 border-b border-light-400 pb-[3px]">Maker of The Year 2021</a> */}

              Hello, I&apos;m Divyansh, a Full stack developer with a knack for turning ideas into digital reality. I&apos;ve honed my skills through internships, freelancing, and serious projects. 
            </p>

            <h1 className="text-[18px] my-6 font-[400] tracking-[0.25px] leading-[32px] text-dark-100">Tech Stack</h1>

            <p className="text-[15px] mt-[20px]  font-[300] tracking-[0.25px] leading-[32px]">
              React, Next, Node, Express, MongoDb,
            </p>
            <p className="text-[15px] mb-[30px] lowercase font-[300] tracking-[0.25px] leading-[32px]">
             Tailwind, bootstrap, Figma.
            </p>

            <div className="flex items-center mt-4 mb-10"><a className="text-[13px] transition-all text-dark-200 border-b border-light-400 duration-300 cursor-pointer hover:text-dark-100 hover:border-dark-300 flex items-center grayscale hover:grayscale-0" href="http://twitter.com/divyansPal" target="_blank" rel="noopener noreferrer">

              {/* <Image src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/4f/Twitter-logo.svg/1200px-Twitter-logo.svg.png" alt="Spotify Logo" height="12" width="12" class="mr-2 mb-[1px]" /> */}

              Twitter</a>

              <div className="h-[2px] w-[2px] bg-dark-200 mx-2 rounded-full">
              </div>

              {/* <a className="text-[13px] transition-all text-dark-200 border-b border-light-400 duration-300 cursor-pointer hover:text-dark-100 hover:border-dark-300 flex items-center grayscale hover:grayscale-0" href="http://instagram.com/saviomartin7" target="_blank" rel="noopener noreferrer">

        

                Instagram</a> */}

              <div className="h-[2px] w-[2px] bg-dark-200 mx-2 rounded-full">
              </div>

              <a className="text-[13px] transition-all text-dark-200 border-b border-light-400 duration-300 cursor-pointer hover:text-dark-100 hover:border-dark-300 flex items-center grayscale hover:grayscale-0" href="http://github.com/divyansh343" target="_blank" rel="noopener noreferrer">

                {/* <Image src="https://upload.wikimedia.org/wikipedia/commons/9/91/Octicons-mark-github.svg" alt="Spotify Logo" height="12" width="12" class="mr-2 mb-[1px]"> */}

                Github</a>
            </div>

            <h1 className="text-[18px] my-6 font-[400] tracking-[0.25px] leading-[32px] text-dark-100">Works</h1>

            <p className="text-[15px] mb-4 font-[300] tracking-[0.25px] leading-[32px]">Always curious about new ideas to create highly satisfying user interfaces, passionate on minimalism, and asthetic vibes.</p>

            <p className="text-[15px] my-[8px] font-[300] tracking-[0.25px] leading-[32px]">Here are the popular products Ive created with React, Next.JS, TypeScript, and Tailwind.</p>

            <svg aria-hidden="true" width="80" height="16" viewBox="0 0 432 38" fill="none" className="my-4">
              <path d="M402.74 37.59c-12.547 0-27.973-16.277-28.629-16.965-7.043-8.191-14.168-15.477-24.648-15.477-11.488 0-24.984 15.258-25.125 15.41l-1.168 1.273c-7.441 8.102-14.469 15.758-26.984 15.758-12.547 0-27.973-16.277-28.629-16.965-7.043-8.191-14.168-15.477-24.648-15.477-11.488 0-24.984 15.258-25.125 15.41l-1.101 1.16c-8.497 8.868-15.203 15.872-27.047 15.872-12.551 0-27.98-16.277-28.629-16.965-7.047-8.192-14.176-15.477-24.648-15.477-11.488 0-24.984 15.257-25.125 15.41l-1.18 1.285c-7.434 8.097-14.465 15.742-26.977 15.742-12.551 0-27.98-16.277-28.63-16.965C47.402 12.427 40.273 5.142 29.8 5.142A28.001 28.001 0 004.988 20.099a2.37 2.37 0 01-3.203.988A2.37 2.37 0 01.8 17.884C6.503 7.107 17.612.404 29.796.404c12.473 0 20.754 8.422 28.168 17.043 3.977 4.23 16.391 15.395 25.11 15.395 10.433 0 16.19-6.27 23.483-14.207l1.145-1.246C108.268 16.74 122.733.405 136.35.405c12.473 0 20.754 8.422 28.168 17.043 3.976 4.23 16.391 15.395 25.109 15.395 9.82 0 15.316-5.73 23.629-14.406l1.039-1.086c.535-.617 15-16.95 28.613-16.95 12.48 0 20.762 8.423 28.168 17.044 3.977 4.223 16.391 15.39 25.109 15.39 10.438 0 16.203-6.273 23.5-14.222l1.137-1.235c.566-.648 15.031-16.983 28.641-16.983 12.48 0 20.762 8.421 28.168 17.043 3.976 4.222 16.391 15.39 25.109 15.39 10.004 0 19.32-5.39 24.324-14.066a2.362 2.362 0 013.238-.87 2.372 2.372 0 01.871 3.234c-5.852 10.164-16.746 16.465-28.434 16.465l.001-.001z" fill="#e2e2e2"></path></svg><a className="relative flex items-center my-6 cursor-pointer lg:my-0 xl:my-0 group" href="https://iframe.so/" target="_blank" rel="noopener noreferrer">

              <div className="flex items-center">
                <h1 className="font-[500] mr-2 text-dark-100">Suprr.link -</h1>
                <p className="hidden lg:block xl:block text-[15px] my-[8px] font-[300] tracking-[0.25px] leading-[32px]">Create Suprr Profile link.</p>
              </div>

              <div className="flex-1 mx-3 border-t-2 border-dotted">
              </div>

              <h3 className="Menlo text-[14px] font-[300] text-dark-200">2022</h3></a><a className="relative flex items-center my-6 cursor-pointer lg:my-0 xl:my-0 group" href="https://moodly.site/" target="_blank" rel="noopener noreferrer">

              <div className="flex items-center">
                <h1 className="font-[500] mr-2 underline text-dark-100">Charterd media -</h1>
                <p className="hidden lg:block xl:block text-[15px] my-[8px] font-[300] tracking-[0.25px] leading-[32px]">Better sense of focus through ambient</p>
              </div>

              <div className="flex-1 mx-3 border-t-2 border-dotted">
              </div>

              <h3 className="Menlo text-[14px] font-[300] text-dark-200">2020</h3></a><a className="relative flex items-center my-6 cursor-pointer lg:my-0 xl:my-0 group" href="https://slickr.vercel.app/app" target="_blank" rel="noopener noreferrer">

              <div className="flex items-center">
                <h1 className="font-[500] mr-2 text-dark-100">Slickr</h1>
                <p className="hidden lg:block xl:block text-[15px] my-[8px] font-[300] tracking-[0.25px] leading-[32px]">Visual tool for creating beautiful blog cover images</p>
              </div>

              <div className="flex-1 mx-3 border-t-2 border-dotted">
              </div>

              <h3 className="Menlo text-[14px] font-[300] text-dark-200">2021</h3></a><a className="relative flex items-center my-6 cursor-pointer lg:my-0 xl:my-0 group" href="https://codehouse.vercel.app/" target="_blank" rel="noopener noreferrer">

              <div className="flex items-center">

                <h1 className="font-[500] mr-2 text-dark-100">Codehouse</h1>
                <p className="hidden lg:block xl:block text-[15px] my-[8px] font-[300] tracking-[0.25px] leading-[32px]">Open source collection of developer cheatsheets</p>
              </div>

              <div className="flex-1 mx-3 border-t-2 border-dotted">
              </div>

              <h3 className="Menlo text-[14px] font-[300] text-dark-200">2021</h3></a>
          </div>

          <div className="mt-12 text-[13px] text-dark-200 xl:flex lg:flex items-center Menlo justify-between">

            <div className="flex items-center"><a className="transition-all duration-300 border-b cursor-pointer border-light-400 hover:text-dark-100 hover:border-dark-300" href="/writings">/writings</a>

              <div className="h-[2px] w-[2px] bg-dark-200 mx-2 rounded-full">
              </div>

              <a className="transition-all duration-300 border-b cursor-pointer border-light-400 hover:text-dark-100 hover:border-dark-300" href="/photos">/photos</a>

              <div className="h-[2px] w-[2px] bg-dark-200 mx-2 rounded-full">
              </div>

              <a className="transition-all duration-300 border-b cursor-pointer border-light-400 hover:text-dark-100 hover:border-dark-300" href="/achievements">/achievements</a>
            </div>

            <div className="flex items-center mt-6 lg:mt-0 xl:mt-0"><a className="flex items-center transition-all duration-300 border-b cursor-pointer text-dark-100 border-light-400 hover:border-dark-300 grayscale hover:grayscale-0" href="http://twitter.com/saviomartin7" target="_blank" rel="noopener noreferrer">

              {/* <Image src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/4f/Twitter-logo.svg/1200px-Twitter-logo.svg.png" alt="Spotify Logo" height="13" width="13" class="mr-2"> */}

              Twitter</a>

              <div className="h-[2px] w-[2px] bg-dark-200 mx-2 rounded-full">
              </div>

              <a className="flex items-center transition-all duration-300 border-b cursor-pointer text-dark-100 border-light-400 hover:border-dark-300 grayscale hover:grayscale-0" href="http://instagram.com/saviomartin7" target="_blank" rel="noopener noreferrer">

                {/* <Image src="https://cdn-icons-png.flaticon.com/512/733/733558.png" alt="Spotify Logo" height="13" width="13" class="mr-2"> */}

                Instagram</a>

              <div className="h-[2px] w-[2px] bg-dark-200 mx-2 rounded-full">
              </div>

              <a className="flex items-center transition-all duration-300 border-b cursor-pointer text-dark-100 border-light-400 hover:border-dark-300 grayscale hover:grayscale-0" href="http://github.com/saviomartin" target="_blank" rel="noopener noreferrer">
                {/* 
    
    <Image src="https://upload.wikimedia.org/wikipedia/commons/9/91/Octicons-mark-github.svg" alt="Spotify Logo" height="13" width="13" class="mr-2"> */}
                Github</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
