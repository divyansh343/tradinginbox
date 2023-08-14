import React from 'react'
import VideoPlayer from "react-background-video-player";

const Shutter = () => {
  return (
    <section className="bg-base-100 p-6  md:py-20">
    <div className="max-w-6xl mx-auto flex flex-col md:flex-row gap-8 md:gap-16">

      <video autoPlay muted loop playsinline="" controls="" className="rounded-3xl aspect-auto w-full sm:w-[36rem] border-2 md:border-4 border-base-content/20" width="800" height="500">
        <source src="https://res.cloudinary.com/the-social-charts/video/upload/v1692013886/krypto/Rp77sa0rUGsJ84Xf_kqbl4u.mp4" type="video/mp4" />
      </video>

      <div className="space-y-6 md:space-y-8 max-w-lg"><h2 className="text-3xl md:text-5xl tracking-tight font-black leading-tight md:leading-tight">Stay Ahead with Cutting-Edge Market Insights</h2>
        {/* <p className="text-base-content-secondary">Our team of seasoned analysts keeps a vigilant eye on the ever-changing crypto landscape,</p>
        <p className="text-base-content-secondary"> Identifying emerging trends, market sentiment shifts, and potential opportunities before they become widely known. Through in-depth technical and fundamental analysis.</p> */}


      </div>
    </div>
  </section>
  )
}

export default Shutter