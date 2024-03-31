import Image from 'next/image'
import React from 'react'
import wall from '../../assets/images/wall.png'

const Cards = () => {
  return (
    <div>
      <a href="/post/framer"><div className="relative group w-full rounded-md border overflow-clip">
        <Image class="w-full h-full object-cover object-top rounded-md cursor-pointer shadow-sm transition duration-300 hover:scale-105" src={wall} alt="Framer Landing Page Design" loading="lazy" />

      </div></a></div>
  )
}

export default Cards