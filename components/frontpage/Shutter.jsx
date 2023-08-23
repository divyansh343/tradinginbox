import Image from 'next/image';
import React from 'react'
import sheet from '../../assets/images/wide.jpg'
const Shutter = () => {
  return (
    <section className="bg-base-100 grid justify-center  ">
      <div className=" mx-auto flex flex-col md:flex-row gap-8 md:gap-16">

        <div className="grid justify-center lg:justify-start text-white space-y-6 py-16 px-10  max-w-lg">
          <p className="text-[#c0c0c0] text-base">THE GEAR CAGE
          </p>
          <h2 className="text-3xl md:text-4xl tracking-wide text-start lg:text-center md:text-start ">The tools that we use.</h2>
          <p className="text-white tracking-wider text-sm leading-5">The say that no place is boring if youve had a good nights sleep and have a pocket full of unexposed film. While we dont shoot (a lot) of film these days — these are the tools that we actually use everyday to capture the amazing things around us.,</p>

          <div className='grid  justify-center lg:justify-start'>
            <a className="btn bg-white rounded-2xl hover:b-2  text-base normal-case tracking-wider font-normal text-black btn-md" href="/app/new">Check it out</a>
          </div>


        </div>
        <Image alt='' src={sheet} className="  w-full  border-2 md:border-4 border-base-content" width="600" height="400">
        </Image>


      </div>
    </section>
  )
}

export default Shutter