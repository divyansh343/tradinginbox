import React from 'react'

const Cta = () => {
  return (
    <div>
      <section className="bg-base-100 text-primary lg:py-[100px]">
        <div className="py-14 ">
          <div className="text-center aos-init aos-animate" data-aos="zoom-in" data-aos-duration="1000">
            <h2 className="text-3xl md:text-5xl font-semibold tracking-wide text-center ">Your story, our lens.</h2>
            {/* <h2 className="text-3xl md:text-5xl font-semibold tracking-wide mt-2  text-center  ">or videography?</h2> */}
            <div className="md:w-2/3 mx-auto leading-relaxed  mt-5 text-primary">
              <p className="text-primary lg:text-md">Unlock the power of storytelling with our filmmaking expertise.
              </p>
            </div>
            <a className="btn bg-white rounded-2xl text-base normal-case mt-6 tracking-wider font-bold text-black btn-md" href="https://linktr.ee/arpitbajpai" target='_blank'rel='noreferrer' >Get in touch</a>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Cta