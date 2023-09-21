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
        <div className="grid md:justify-center lg:grid-cols-2 gap-8 md:gap-16">

          <video autoPlay muted loop playsinline="" controls="" className="rounded-3xl aspect-auto w-full sm:w-[36rem] border-2 md:border-4 border-base-content/20" width="800" height="500">
            <source src="https://res.cloudinary.com/the-social-charts/video/upload/v1691993547/krypto/web.mp4" type="video/mp4" />
          </video>

          <div className="space-y-6 md:space-y-8 max-w-lg cursor-pointer"><h2 className="text-3xl md:text-5xl  font-black leading-tight md:leading-tight">Convert your vistors into <span className='border-b-2 text-primary'> Customers</span> </h2>
            <p className="text-base-content-secondary"> <span className='text-primary border-b border-1'>What you sell matters,</span> sure. But how you represent it, matters the most! The key is to find your audience&apos;s concerns and give them a solution.
</p>
            <p className="text-base-content-secondary">Elevate Your Business with Expert Web Development and Swift Execution</p>

          </div>
        </div>
      </section>
    </div>
  )
}

export default Section




