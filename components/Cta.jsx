import React from 'react'

const Cta = () => {
  return (
    <div>
      <section className="bg-black text-white lg:py-[100px]">
        <div className="py-14 ">
          <div className="text-center aos-init aos-animate" data-aos="zoom-in" data-aos-duration="1000">


            <h2 className="text-3xl md:text-[40px] font-semibold tracking-wide text-center ">Need help with photography</h2>
            <h2 className="text-3xl md:text-[40px] font-semibold tracking-wide mt-2  text-center  ">or videography?</h2>
            <div className="md:w-2/3 mx-auto leading-relaxed text-[24px] mt-5 text-white">
              <p className="text-[#c0c0c0] text-md">We&apos;re here for you!
              </p>
            </div>
            <a className="btn bg-white rounded-2xl text-base normal-case mt-6 tracking-wider font-bold text-black btn-md" href="/app/new">Get in touch</a>

          </div>
        </div>
      </section>
    </div>
  )
}

export default Cta