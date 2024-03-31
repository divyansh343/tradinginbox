import Image from 'next/image'
import React from 'react'
import fourImg from '../../assets/images/portraits/four.jpeg'
import sixImg from '../../assets/images/portraits/six.jpeg'
import { BsFillRecordFill } from 'react-icons/bs'

import sec1 from '../../assets/images/sec1.png'
import sec3 from '../../assets/images/sec3.png'
import sec4 from '../../assets/images/sec4.jpeg'


const Section = () => {
  return (
    <div>
      <section className="bg-base-100 p-6  md:py-20">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row gap-8 md:gap-16">

          <video autoPlay muted loop playsinline="" controls="" className="rounded-3xl aspect-auto w-full sm:w-[36rem] border-2 md:border-4 border-base-content/20" width="800" height="500">
            <source src="https://storyblok-cdn.photoroom.com/f/191576/x/d472d22cd6/magic-retouch.mp4" type="video/mp4" />
          </video>

          <div className="space-y-6 md:space-y-8 max-w-lg"><h2 className="text-3xl md:text-5xl tracking-tight font-black leading-tight md:leading-tight">Fast-Track execution</h2>
            <p className="text-base-content-secondary">Crafting Success in 7 Days: Web Development and Strategy Execution Rolled into One.</p>
            <p className="text-base-content-secondary">Elevate Your Business with Expert Web Development and Swift Execution</p>

          </div>
        </div>
      </section>
    </div>
  )
}

export default Section




