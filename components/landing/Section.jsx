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
    <div className='mb-10'>
      <section className=" p-6  md:py-20">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row gap-8 md:gap-16">

          <video autoPlay muted loop playsinline="" controls="" className="rounded-3xl aspect-auto w-full sm:w-[40rem] border-2 md:border-4 border-base-content/20" width="800" height="500">
            <source src="https://res.cloudinary.com/the-social-charts/video/upload/v1692363900/SnapSave.io-From_Zero_to_Hero__Dominate_Your_Niche_with_Ainfluencer_s_Influencer_Marketing_in_2023_online-video-cutter.com_otsvak.mp4" type="video/mp4" />
          </video>

          <div className="space-y-6 md:space-y-8 max-w-lg"><h2 className="text-3xl md:text-5xl tracking-tight font-black leading-tight md:leading-tight">Connecting Brands with Audiences: </h2>
            <p className="text-base-content-secondary">How Influencers Make it Genuine & Quick</p>
            <p className="text-base-content-secondary"> Storytelling: Influencers can tell your brand&apos;s story in a personal, relatable way, creating a deeper connection with their followers.</p>

          </div>
        </div>
      </section>
    </div>
  )
}

export default Section




