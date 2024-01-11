import React from 'react'
import cover from '../assets/images/cover.png'
import Image from 'next/image'
const Cover = () => {
  return (
    <div className='grid justify-center'>
      <Image height={500} width={1000} className="h-full " src={cover} alt="" />
    </div>
  )
}

export default Cover