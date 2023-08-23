import Image from 'next/image'
import React from 'react'
import sheet from '../assets/images/boxx.jpg'

const Client = () => {
  return (
    <div className='py-10'>
      <div className="flex flex-col text-center w-full my-8">
        <div className="mb-3">
          <h2 className="text-4xl lg:text-5xl font-medium text-white">Past Clients
          </h2>
        </div>
        <div className="md:w-2/3 mx-auto leading-relaxed text-base text-white">
          <h3 className="text-[#c0c0c0] text-2xl">Trusted by your favourite companies
          </h3>
        </div>
      </div>
      <div className="container flex py-28 justify-center items-center">
        <div className="flex flex-wrap mx-4">
          <div className="w-full px-4">
            <div className="flex flex-wrap items-center gap-10 md:gap-56 justify-center">
              <Image
                className=" aspect-square w-full border-2 md:border-4 border-base-content/20"
                width="80" height="80"
                src={sheet}
                href="#"
                Alt="Brand Image"
              />
              <Image
                className=" aspect-square w-full border-2 md:border-4 border-base-content/20"
                width="80" height="80"
                src={sheet}
                href="#"
                Alt="Brand Image"
              />
              <Image
                className=" aspect-square w-full border-2 md:border-4 border-base-content/20"
                width="80" height="80"
                src={sheet}
                href="#"
                Alt="Brand Image"
              />
              <Image
                className=" aspect-square w-full border-2 md:border-4 border-base-content/20"
                width="80" height="80"
                src={sheet}
                href="#"
                Alt="Brand Image"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Client