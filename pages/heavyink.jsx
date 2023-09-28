import React from 'react'

const heavyink = () => {
  return (
    <div className='grid justify-center'>
      <iframe className='w-[390px] h-[210px] lg:w-[900px] lg:h-[450px]' src="https://www.youtube.com/embed/Xs8vaPVdN7A?si=au4A7JvQ624Jrfiv" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
      <div className="mb-3">
        <h2 className="text-3xl lg:text-5xl mt-10 font-semibold text-white">
          Heavy Ink Commercial
        </h2>
      </div>
    </div>
  )
}

export default heavyink