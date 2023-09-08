import Image from 'next/image'
import React from 'react'
import sheet from '../assets/images/rhymon.png'

const Client = () => {
  return (
    <div className='py-10'>
      <div className="flex flex-col text-center w-full my-8">
        <div className="mb-3">
          <h2 className="text-4xl lg:text-5xl font-semibold text-white">Past Clients
          </h2>
        </div>
        <div className="md:w-2/3 mx-auto leading-relaxed text-base text-white">
          <h3 className="text-[#c0c0c0] text-md">Trusted by your favourite companies
          </h3>
        </div>
      </div>
      <div className=" grid py-10 justify-center ">
        <div className="flex flex-wrap mx-4">
          <div className="w-full px-4">
            <div className="flex items-center gap-10 md:gap-10 justify-center">
              <Image
                className=" aspect-square w-full border-2 md:border-4 border-base-content/20"
                width="200" height="200"
                src={sheet}
                href="#"
                Alt="Brand Image"
              />
              <Image
                className=" aspect-square w-full border-2 md:border-4 border-base-content/20"
                width="200" height="200"
                src={sheet}
                href="#"
                Alt="Brand Image"
              />
              <Image
                className=" aspect-square w-full border-2 md:border-4 border-base-content/20"
                width="200" height="200"
                src={sheet}
                href="#"
                Alt="Brand Image"
              />
              <Image
                className=" aspect-square w-full border-2 md:border-4 border-base-content/20"
                width="200" height="200"
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