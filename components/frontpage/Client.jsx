import React from 'react'

const Client = () => {
  return (
    <div className='lg:mb-28'>
      <div className="mb-4 grid justify-center my-20">
        <h2 className=" text-3xl md:text-5xl font-bold text-base-content">
          Our Latest Works
        </h2>
      </div>
      <div className='grid justify-center px-3 gap-3 mt-20 md:grid-cols-2'>
        <div className='grid justify-center'>
          <video autoPlay muted loop playsinline="" controls="" className="rounded-2xl aspect-auto w-full sm:w-[36rem] border-2  border-base-content/20" width="1000" height="700">
            <source src="https://res.cloudinary.com/the-social-charts/video/upload/v1696059432/vid_t4a8rr.mp4" type="video/mp4" />
          </video>
        </div>
        <div className='grid justify-center'>
          <video autoPlay muted loop playsinline="" controls="" className="rounded-2xl aspect-auto w-full sm:w-[36rem] border-2  border-base-content/20" width="1000" height="700">
            <source src="https://res.cloudinary.com/the-social-charts/video/upload/v1696059432/vid_t4a8rr.mp4" type="video/mp4" />
          </video>
        </div>
      </div>
    </div>
  )
}

export default Client