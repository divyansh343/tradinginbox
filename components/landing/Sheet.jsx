import Image from 'next/image'
import React from 'react'
import sheet from '../../assets/images/boxx.jpg'
import { FaChartLine } from 'react-icons/fa'
import one from '../../assets/images/portfolio/1.png'
import two from '../../assets/images/portfolio/2.png'
import three from '../../assets/images/portfolio/3.png'
import four from '../../assets/images/portfolio/4.png'
import Link from 'next/link'

const Sheet = () => {
  return (
    <div>
      <section className="bg-base-100 mt-20 py-16 md:py-32">
        <div className="flex flex-col text-center w-full my-10">
          <div className="mb-3">
            <h2 className="text-4xl lg:text-5xl font-semibold text-white">Arpit&apos;s projects
            </h2>
          </div>
          <div className="md:w-2/3 mx-auto leading-relaxed text-base text-white">
            <h3 className="text-[#c0c0c0] text-md">Here are few glimpse of previous videos
            </h3>
          </div>
        </div>
        <div className="max-w-3xl mx-auto flex flex-col md:flex-row gap-8 md:gap-16">
          <Link href="/project1">
            <Image alt='' src={one} className=" w-full sm:w-[26rem] border-2 md:border-4 border-base-content/20" width="360" height="450">
            </Image>
          </Link>
          <div className="space-y-6 md:space-y-8 max-w-lg">
            <Image alt='' src={two} className=" w-full sm:w-[26rem] border-2 md:border-4 border-base-content/20" width="360" height="450">
            </Image>
          </div>
        </div>
        <div className="max-w-3xl mx-auto flex flex-col md:flex-row gap-8 md:gap-16">
          <Image alt='' src={three} className=" w-full sm:w-[26rem] border-2 md:border-4 border-base-content/20" width="360" height="450">
          </Image>
          <div className="space-y-6 md:space-y-8 max-w-lg">
            <Image alt='' src={four} className=" w-full sm:w-[26rem] border-2 md:border-4 border-base-content/20" width="360" height="450">
            </Image>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Sheet