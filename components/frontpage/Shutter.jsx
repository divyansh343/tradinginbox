import React from 'react'
import VideoPlayer from "react-background-video-player";

const Shutter = () => {
  return (
    <section className="bg-blue-100/10 p-6  md:py-20">
      <div className="grid md:justify-center lg:grid-cols-2 gap-8 lg:px-10 md:gap-16">

        <video autoPlay muted loop playsinline="" controls="" className="rounded-3xl aspect-auto w-full sm:w-[38rem] border-2 md:border-4 border-base-content/20" width="900" height="600">
          <source src="https://res.cloudinary.com/the-social-charts/video/upload/v1692619763/g913wgIdETKmM6qz_ljjuiu.mp4" type="video/mp4" />
        </video>

        <div className="grid justify-start space-y-2 lg:space-y-0  max-w-lg">
          {/* <p className="text-base md:text-lg tracking-tight font-black md:text-start">Contact our team</p> */}
          <h2 className="text-2xl md:text-3xl tracking-tight font-black md:text-start leading-tight md:leading-tight">What Are You Waiting For?</h2>
          <h2 className="text-4xl md:text-5xl tracking-tight font-black text-primary md:text-start leading-tight md:leading-tight">Let’s Make Some Magic 
          <span className='text-black mx-2'>Together</span></h2>
          {/* <h2 className="text-4xl tracking-tight font-black md:text-start leading-tight md:leading-tight"></h2> */}

          {/* <p className="text-base-content-secondary"> Identifying emerging trends, market sentiment shifts, and potential opportunities before they become widely known. Through in-depth technical and fundamental analysis.</p> */}
          <div className='grid justify-start'>
            <button data-tally-open="wA2MYD" data-tally-width="400" data-tally-emoji-text="👋" data-tally-emoji-animation="wave" className="btn bg-blue-600 hover:bg-primary normal-case text-white font-normal text-base btn-base lg:btn-base">Get  <span className='border-b-2'>Free 1 : 1 </span>Consultation<svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg></button>          </div>
        </div>
      </div>
      <div className="space-y-4 mx-auto px-8 max-w-md mt-24">
        <svg xmlns="http://www.w3.org/2000/svg" className="w-8 fill-accent" viewBox="0 0 35 30" fill="none"><path d="M22.3838 27.6777C23.5264 28.9961 25.3721 29.6992 27.4814 29.6992C31.6123 29.6992 34.249 26.9746 34.249 22.7559C34.249 18.625 31.5244 15.6367 27.6572 15.6367C26.8662 15.6367 25.9873 15.8125 25.1084 16.0762C24.5811 9.48438 27.833 4.03516 32.2275 2.36523L31.7881 0.871094C24.2295 3.77148 19.4834 11.1543 19.4834 19.8555C19.4834 22.668 20.5381 25.7441 22.3838 27.6777ZM0.499023 19.8555C0.499023 24.6895 3.22363 29.6992 8.49707 29.6992C12.54 29.6992 15.1768 26.9746 15.1768 22.7559C15.1768 18.625 12.4521 15.6367 8.67285 15.6367C7.88184 15.6367 7.00293 15.8125 6.12402 16.0762C5.59668 9.48438 8.84863 4.03516 13.2432 2.36523L12.7158 0.871094C5.24512 3.77148 0.499023 11.1543 0.499023 19.8555Z"></path></svg>
        <p className="leading-relaxed">I managed to create version 2 of my product faster with ShipFast instead of the web builder I used. That is incredible!</p>
        <div className="flex items-center gap-2">
          {/* <img alt="Ronny testimonial for ShipFast" loading="lazy" width="48" height="48" decoding="async" data-nimg="1" class="w-10 h-10 rounded-full object-cover" style="color:transparent" srcset="/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fronny.1f8652fb.webp&amp;w=48&amp;q=75 1x, /_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fronny.1f8652fb.webp&amp;w=96&amp;q=75 2x" src="/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fronny.1f8652fb.webp&amp;w=96&amp;q=75"> */}
          <p>Ronny, <span className="font-bold">syner.dev</span></p>
        </div>
      </div>
    </section>
  )
}

export default Shutter