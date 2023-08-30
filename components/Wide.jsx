import Image from 'next/image'
import React from 'react'
import sheet from '../assets/images/wide.jpg'

const Wide = () => {
  return (
    <div className='grid justify-center'>
      <div ></div>
      <Image alt='' src={sheet} className=" aspect-auto w-full border-2 md:border-4 border-base-content" width="1300" height="550">
      </Image>
    </div>
  )
}

export default Wide