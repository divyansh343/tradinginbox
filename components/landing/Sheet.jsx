import Image from 'next/image'
import React from 'react'
import sheet from '../../assets/images/boxx.jpg'
import { FaChartLine } from 'react-icons/fa'

const Sheet = () => {
  return (
    <div>
      <section className="bg-base-100 p-10 py-16 md:py-32">
        <div className="flex flex-col text-center w-full my-10">
          <div className="mb-3">
            <h2 className="text-4xl lg:text-[40px] font-medium text-white">What we do
            </h2>
          </div>
          <div className="md:w-2/3 mx-auto leading-relaxed text-base text-white">
            <h3 className="text-[#c0c0c0] text-3xl">The areas that were specialized in.
            </h3>
          </div>
        </div>
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row gap-8 md:gap-16">

          <Image alt='' src={sheet} className=" aspect-square w-full sm:w-[26rem] border-2 md:border-4 border-base-content/20" width="500" height="500">
          </Image>
          <div className="space-y-6 md:space-y-8 max-w-lg">
            <Image alt='' src={sheet} className=" aspect-square w-full sm:w-[26rem] border-2 md:border-4 border-base-content/20" width="500" height="500">
            </Image>
            {/* <h2 className="text-3xl md:text-5xl tracking-tight font-black leading-tight md:leading-tight">
            We have an Outstanding Monthly ROI. 📈</h2><p className="text-white">We had a fantastic month, with only four SL hits out of 43.
              Profit of 1585%</p>
              <p className="text-white">We follow Risk Management Strategies for Secure Trading</p>
            <a className="btn btn-block btn-primary md:btn-wide"href='/sheet.pdf'download>🔽Download Sheet</a> */}
          </div>
        </div>
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row gap-8 md:gap-16">
          <Image alt='' src={sheet} className=" aspect-square w-full sm:w-[26rem] border-2 md:border-4 border-base-content/20" width="500" height="500">
          </Image>
          <div className="space-y-6 md:space-y-8 max-w-lg">
            <Image alt='' src={sheet} className=" aspect-square w-full sm:w-[26rem] border-2 md:border-4 border-base-content/20" width="500" height="500">
            </Image>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Sheet