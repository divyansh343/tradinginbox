import React from 'react'
import VideoPlayer from "react-background-video-player";

const Shutter = () => {
  return (
    <section className="bg-base-100 p-6  md:py-20">
      <div className="grid md:justify-center lg:grid-cols-2 gap-8 lg:px-10 md:gap-16">

        <video autoPlay muted loop playsinline="" controls="" className="rounded-3xl aspect-auto w-full sm:w-[38rem] border-2 md:border-4 border-base-content/20" width="900" height="600">
          <source src="https://res.cloudinary.com/the-social-charts/video/upload/v1692619763/g913wgIdETKmM6qz_ljjuiu.mp4" type="video/mp4" />
        </video>

        <div className="grid justify-start space-y-2 lg:space-y-0  max-w-lg">
          {/* <p className="text-base md:text-lg tracking-tight font-black md:text-start">Contact our team</p> */}
          <h2 className="text-2xl md:text-3xl tracking-tight font-black md:text-start leading-tight md:leading-tight">What Are You Waiting For?</h2>
          <h2 className="text-4xl md:text-5xl tracking-tight font-black text-primary md:text-start leading-tight md:leading-tight">Let’s Make Some Magic</h2>
          <h2 className="text-4xl tracking-tight font-black md:text-start leading-tight md:leading-tight">Together</h2>

          {/* <p className="text-base-content-secondary"> Identifying emerging trends, market sentiment shifts, and potential opportunities before they become widely known. Through in-depth technical and fundamental analysis.</p> */}
          <div className='grid justify-start'>
            <button data-tally-open="wA2MYD" data-tally-width="400" data-tally-emoji-text="👋" data-tally-emoji-animation="wave" className="btn bg-blue-600 hover:bg-primary normal-case text-white font-normal text-base btn-base lg:btn-base">Get  <span className='border-b-2'>Free 1 : 1 </span>Consultation<svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg></button>          </div>

        
        </div>
      </div>
    </section>
  )
}

export default Shutter