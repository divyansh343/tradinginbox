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
    <div className='grid justify-center'>
      <section className=" p-6  md:py-20">
        <div className="grid md:justify-center lg:grid-cols-2 gap-8 md:gap-16">

          <video autoPlay muted loop playsinline="" controls="" className="rounded-3xl aspect-auto w-full sm:w-[36rem] border-2 border-base-content/20" width="800" height="500">
            <source src="https://res.cloudinary.com/the-social-charts/video/upload/v1696059432/kozi_dvohi6.mp4" type="video/mp4" />
          </video>

          <div className="space-y-6 md:space-y-8 max-w-lg cursor-pointer"><h2 className="text-3xl md:text-5xl  font-black leading-tight md:leading-tight">Unlock your digital <span className='border-b-2 text-primary'> Potential</span> </h2>
            <p className="text-base-content-secondary text-base lg:text-lg">
              {/* <span className='text-primary border-b border-1'>What you sell matters,</span>  */}
              A well-designed and targeted landing page can increase conversion rates by 10% to 30%
              <span className='text-gray-600 text-md mx-1'>(Source: Niel Patel)</span>

            </p>
            <p className="text-base-content-secondary text-base lg:text-lg">
              {/* <span className='text-primary border-b border-1'>What you sell matters,</span>  */}
              Social media advertising can increase website conversion rates by up to 9%.
              <span className='text-gray-600 text-md mx-1'>(Source: HubSpot)</span>
            </p>
            {/* <p className="text-base-content-secondary">Elevate Your Business with Expert Web Development and Swift Execution</p> */}

          </div>
        </div>
      </section>
    </div>
  )
}

export default Section




