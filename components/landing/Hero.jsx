import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import ReactTypingEffect from 'react-typing-effect'

import heroImg from '../../assets/images/hero.png'
import oneImg from '../../assets/images/portraits/one.jpeg'
import twoImg from '../../assets/images/portraits/two.jpeg'
import fourImg from '../../assets/images/portraits/four.jpeg'
import fiveImg from '../../assets/images/portraits/five.jpeg'
import sixImg from '../../assets/images/portraits/six.jpeg'
import sevenImg from '../../assets/images/portraits/seven.jpeg'
import eightImg from '../../assets/images/portraits/eight.jpeg'
import nineImg from '../../assets/images/portraits/nine.jpeg'
import { useState } from 'react'
import { FiZap } from 'react-icons/fi';
import { FaTelegram } from 'react-icons/fa'

const Hero = () => {
  return (
    <section className="pt-12 lg:pt-24 ">
      <div className="px-5 lg:px-12 mx-auto max-w-7xl">
        <div className="w-full mx-auto text-center md:w-11/12 xl:w-9/12 md:text-center">
          <h1 className="mb-4 text-4xl font-extrabold  leading-none tracking-wide  text-primary md:text-6xl md:tracking-tight">
            <span className='tracking-wide'>Crafting </span> <span className="block w-full py-2 text-transparent bg-clip-text bg-gradient-to-r from-green-400 curvy to-purple-500 lg:inline">Your Brand&apos;s Story</span>
          </h1>
          <p className="px-0 mb-4  text-lg text-primary md:text-xl lg:px-24">
          with Authentic Creators. Join us to Redefine What&apos;s Possible.
          </p>
          <div className="mb-4 space-x-0 md:space-x-2 md:mb-8">
            {/* <a href="#_" className="inline-flex items-center justify-center w-full px-6 py-3 mb-2 text-lg text-white bg-primary rounded-2xl sm:w-auto sm:mb-0">
              Get Started
              <svg className="w-4 h-4 ml-1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor"><path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd"></path></svg>
            </a>
            <a href="#_" className="inline-flex items-center justify-center w-full px-6 py-3 mb-2 text-lg bg-gray-100 rounded-2xl sm:w-auto sm:mb-0">
              Learn More
              <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"></path></svg>
            </a> */}
          </div>
        </div>
        <div className="w-full mx-auto mt-20 text-center md:w-7/12">
          <div className="relative z-0 w-full mt-8">
            <div className="relative overflow-hidden shadow-2xl">
              <div className="flex items-center flex-none px-4 bg-primary rounded-b-none h-3 rounded-xl">
                <div className="flex space-x-1.5">
                  <div className="w-1 h-1 border-2 border-white rounded-full"></div>
                  <div className="w-1 h-1 border-2 border-white rounded-full"></div>
                  <div className="w-1 h-1 border-2 border-white rounded-full"></div>
                </div>
              </div>
              <video autoPlay muted loop playsinline="" controls="" className="rounded-b-3xl aspect-auto w-full sm:w-[50rem]  border-2 md:border-4 border-base-content/20" width="800" height="500">
                <source src="https://res.cloudinary.com/the-social-charts/video/upload/v1692363900/SnapSave.io-From_Zero_to_Hero__Dominate_Your_Niche_with_Ainfluencer_s_Influencer_Marketing_in_2023_online-video-cutter.com_otsvak.mp4" type="video/mp4" />
              </video>
              {/* <img src="https://cdn.devdojo.com/images/march2021/green-dashboard.jpg"> */}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero