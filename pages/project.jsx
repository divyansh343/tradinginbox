import React from 'react'

const project = () => {
  return (
    <div className='grid justify-center'>
      <iframe className='w-[390px] h-[210px] lg:w-[900px] lg:h-[450px]' src="https://www.youtube.com/embed/FgpuIxsqARQ?si=F1DFusC5dXX-i69h" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
      <div className="mb-3">
        <h2 className="text-3xl lg:text-5xl mt-10 font-semibold text-white">
          Upcoming project
        </h2>
      </div>
    </div>
  )
}


export default project