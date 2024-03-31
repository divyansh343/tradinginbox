import Image from 'next/image'
import React from 'react'
import wall from '../assets/images/couple.png'
import img2 from '../assets/images/2.jpg'
import img3 from '../assets/images/3.jpg'

const Client = () => {
  return (
    <div className='py-10'>
      <div className="flex flex-col text-center w-full my-8">
        <div className="mb-3">
          <h2 className="text-4xl lg:text-5xl font-semibold text-primary">Past Clients
          </h2>
        </div>
        <div className="md:w-2/3 mx-auto leading-relaxed text-base text-primary">
          <h3 className="text-primary text-md">Trusted by your favourite companies
          </h3>
        </div>
      </div>
      <div className=" grid py-10 justify-center ">
        <div className="flex flex-wrap mx-4">
          <div className="w-full px-4">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-24 md:gap-10 justify-center">
              <Image
                className=" w-full h-full object-cover object-top rounded-md cursor-pointer shadow-sm transition duration-300 hover:scale-105"
                width="500" height="700"
                src={wall}
                href="#"
                Alt="Brand Image"
              />
              <Image
                className=" w-full h-full object-cover object-top rounded-md cursor-pointer shadow-sm transition duration-300 hover:scale-105"
                width="500" height="700"
                src={wall}
                href="#"
                Alt="Brand Image"
              />
              <Image
                className=" w-full h-full object-cover object-top rounded-md cursor-pointer shadow-sm transition duration-300 hover:scale-105"
                width="500" height="700"
                src={wall}
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