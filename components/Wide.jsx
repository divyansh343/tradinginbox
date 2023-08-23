import Image from 'next/image'
import React from 'react'
import sheet from '../assets/images/wide.jpg'

const Wide = () => {
  return (
    <div className='grid justify-center'>
      <div className="overlay"></div>
      <Image alt='' src={sheet} className=" aspect-auto w-full border-2 md:border-4 border-base-content" width="1300" height="550">
      </Image>
      <div className="content ">
        <h1 className='text-3xl lg:text-5xl font-extrabold -mt-10 px-5'>
          Aperture Studios
        </h1>
        <div className='pt-50'>
          <p className='text-base lg:text-lg font-extrabold px-5'>Unleash the Power of Conversion with </p>
        </div>
      </div>
           
    </div>
  )
}

export default Wide