import React from 'react'
import VideoPlayer from "react-background-video-player";
import { BsArrowDownRightSquare } from 'react-icons/bs';

const Shutter = () => {
  return (
    <div className='grid justify-center'>
      <div className='grid bg-blue-100/10 justify-center pt-24 px-5 lg:px-72'>
        <p className="flex items-center my-4 text-xl gap-2">
          <span className='mx-3 text-primary' >
            <BsArrowDownRightSquare />
          </span>
          <span>
            77% of B2B marketers say branding is critical to growth.
          </span>
        </p>
        <p className="flex items-center my-4 text-xl gap-2">
          <span className='mx-3 text-primary' >
            <BsArrowDownRightSquare />
          </span>
          <span>
            A well-designed website with strong branding can see an increase in conversion rates by up to 33%.
          </span>
        </p>
      </div>
      <section className="bg-blue-100/10 mt-28 md:py-28">
        <div className='grid justify-center px-3'>
          <video autoPlay muted loop playsinline="" controls="" className="rounded-3xl aspect-auto w-full sm:w-[52rem] border-2  border-base-content/20" width="1000" height="600">
            <source src="https://res.cloudinary.com/the-social-charts/video/upload/v1696059432/vid_t4a8rr.mp4" type="video/mp4" />
          </video>
          <div className="grid justify-center mt-6 space-y-4 text-center ">
            {/* <p className="text-base md:text-lg tracking-tight font-black md:text-start">Contact our team</p> */}
            <h2 className="text-2xl grid justify-center md:text-3xl tracking-tight font-black md:text-start leading-tight md:leading-tight">What Are You Waiting For?</h2>
            <h2 className="text-4xl md:text-5xl tracking-tight font-black text-primary md:text-start leading-tight md:leading-tight">Let’s Make Some Magic
              <span className='text-black mx-2'>Together</span></h2>
            {/* <h2 className="text-4xl tracking-tight font-black md:text-start leading-tight md:leading-tight"></h2> */}

            {/* <p className="text-base-content-secondary"> Identifying emerging trends, market sentiment shifts, and potential opportunities before they become widely known. Through in-depth technical and fundamental analysis.</p> */}
            <div className='grid justify-center'>
              <button data-tally-open="wA2MYD" data-tally-width="400" data-tally-emoji-text="👋" data-tally-emoji-animation="wave" className="btn bg-blue-600 hover:bg-primary normal-case text-white font-normal text-base btn-base lg:btn-lg">Get  <span className='border-b-2'>Free 1 : 1 </span>Consultation<svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg></button>          </div>
          </div>
        </div>
        {/* <div className="grid md:justify-center lg:grid-cols-2 gap-20 lg:px-10 ">

          <video autoPlay muted loop playsinline="" controls="" className="rounded-3xl aspect-auto w-full sm:w-[36rem] border-2  border-base-content/20" width="1000" height="600">
            <source src="https://res.cloudinary.com/the-social-charts/video/upload/v1696059432/vid_t4a8rr.mp4" type="video/mp4" />
          </video>

          <div className="grid justify-start space-y-2 lg:space-y-0  max-w-lg">
         
            <h2 className="text-2xl md:text-3xl tracking-tight font-black md:text-start leading-tight md:leading-tight">What Are You Waiting For?</h2>
            <h2 className="text-4xl md:text-5xl tracking-tight font-black text-primary md:text-start leading-tight md:leading-tight">Let’s Make Some Magic
              <span className='text-black mx-2'>Together</span></h2>
        

           
            <div className='grid justify-start'>
              <button data-tally-open="wA2MYD" data-tally-width="400" data-tally-emoji-text="👋" data-tally-emoji-animation="wave" className="btn bg-blue-600 hover:bg-primary normal-case text-white font-normal text-base btn-base lg:btn-base">Get  <span className='border-b-2'>Free 1 : 1 </span>Consultation<svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg></button>          </div>
          </div>
        </div> */}
      </section>

    </div>
  )
}

export default Shutter