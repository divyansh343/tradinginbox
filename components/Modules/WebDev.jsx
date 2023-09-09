import React from 'react'
import { FaCheck } from 'react-icons/fa';
import { FaMobileScreen } from 'react-icons/fa';
import { MdOutlineLaptopMac, MdOutlineLaptopWindows } from 'react-icons/md';
import { GoBrowser } from 'react-icons/go';
import { HiOutlineDeviceMobile } from 'react-icons/hi';

const WebDev = () => {
  return (
    <div>
      <div className='py-20 px-5 lg:px-10 lg:h-screen'>
        <p className=" text-4xl lg:text-5xl font-bold mb-5">
          Web Development Service
          {/* <span className='text-primary' className="relative z-0 after:bg-green-500/50 after:-z-10 after:absolute md:after:h-6 after:h-4 after:w-full after:bottom-0 after:end-0">showcase</span> your saas */}
        </p>
        <p className="text-2xl font-semibold mb-5">
          For Small Business, Industries, Online businesses
          {/* <span className='text-primary' className="relative z-0 after:bg-green-500/50 after:-z-10 after:absolute md:after:h-6 after:h-4 after:w-full after:bottom-0 after:end-0">showcase</span> your saas */}
        </p>
        <div className='lg:w-[800px] mt-20'>
          <p className="text-lg  mb-5">
            Welcome, to our web development services, where innovation, creativity, and functionality converge to craft digital experiences that leave a lasting impact. In today&apos;s digital landscape, a compelling online presence is not just an option; it&apos;s a necessity.

          </p>
          <p className="text-lg  mb-5">
            We are here to be your partner in turning your vision into a functional, user-friendly, and visually stunning website.
          </p>
        </div>
      </div>

      <div className="bg-base-200 bg-transparent shadow-xl border-primary border-2 rounded-2xl p-12 mx-5 lg:mx-10">

        <div className="grid lg:grid-cols-3 grid-cols-1 items-center">
          <div className="lg:col-span-2">
            <h4 className="text-lg font-semibold mb-10">Responsive design Principle</h4>

            <div className="flex flex-wrap gap-10">
              <div className="text-center">
              <span className='text-2xl'><MdOutlineLaptopWindows />
                  </span>
                <h6>Windows</h6>
              </div>

              <div className="text-center">
              <span className='text-2xl'><MdOutlineLaptopMac />
                  </span>
                <h6>Mac</h6>
              </div>

              <div className="text-center">
              <span className='text-2xl'><GoBrowser />
                  </span>
                <h6>Browser</h6>
              </div>

              <div className="text-center">

              <span className='text-2xl'><HiOutlineDeviceMobile />
                  </span>
                <h6>Mobile</h6>
              </div>
            </div>
          </div>

          <div>
            <div className="inline-flex mt-14">
              <a href="#" className="py-2 px-4 rounded border border-primary bg-primary text-white hover:shadow-lg hover:shadow-primary/50 focus:outline focus:outline-primary/50 transition-all duration-500"> Get Propmt for Free <i className="fa-solid fa-arrow-right ms-2"></i></a>
            </div>
            <div className="mt-2">
              <p className="inline-flex text-xs">Looking for other platforms? <a href="#" className="hover:text-primary"> Click Here</a></p>
            </div>
          </div>
        </div>

      </div>

      <div className="xl:py-24 py-16 px-5 lg:mx-28 ">
        <div className="container aos-init aos-animate" data-aos="fade-up" data-aos-duration="600">

          <div className="text-center">
            <h1 className="text-2xl font-medium">Technologies we work with</h1>
          </div>

          <div className="py-16">
            <div className="grid xl:grid-cols-4 sm:grid-cols-2 grid-cols-1 gap-5">
              <div className="order-1">
                <div className="flex flex-col gap-5">
                  <p className="flex items-center gap-3 text-base font-semibold"> <span className='text-primary'><FaCheck />
                  </span> React js</p>
                  <p className="flex items-center gap-3 text-base font-semibold"> <span className='text-primary'><FaCheck />
                  </span> Next js</p>
                  <p className="flex items-center gap-3 text-base font-semibold"> <span className='text-primary'><FaCheck />
                  </span> Wordpress</p>
                  <p className="flex items-center gap-3 text-base font-semibold"> <span className='text-primary'><FaCheck />
                  </span> Webflow</p>
                </div>
              </div>

              <div className="order-3 xl:order-2">
                <div className="flex flex-col gap-5">
                  <p className="flex items-center gap-3 text-base font-semibold"> <span className='text-primary'><FaCheck />
                  </span> Tailwind </p>
                  <p className="flex items-center gap-3 text-base font-semibold"> <span className='text-primary'><FaCheck />
                  </span> Bootstrap</p>
                  <p className="flex items-center gap-3 text-base font-semibold"> <span className='text-primary'><FaCheck />
                  </span> Figma</p>
                  <p className="flex items-center gap-3 text-base font-semibold"> <span className='text-primary'><FaCheck />
                  </span>Ui UX</p>
                </div>
              </div>

              <div className="order-4 xl:order-3">
                <div className="flex flex-col gap-5">
                  <p className="flex items-center gap-3 text-base font-semibold"> <span className='text-primary'><FaCheck />
                  </span>Node JS</p>
                  <p className="flex items-center gap-3 text-base font-semibold"> <span className='text-primary'><FaCheck />
                  </span> MongoDB</p>
                  <p className="flex items-center gap-3 text-base font-semibold"> <span className='text-primary'><FaCheck />
                  </span> Frontend</p>
                  <p className="flex items-center gap-3 text-base font-semibold"> <span className='text-primary'><FaCheck />
                  </span> Backend</p>
                </div>
              </div>

              <div className="order-2 xl:order-4">
                <div className="flex flex-col gap-5">
                  <p className="flex items-center gap-3 text-base font-semibold"> <span className='text-primary'><FaCheck />
                  </span> SQL</p>
                  <p className="flex items-center gap-3 text-base font-semibold"> <span className='text-primary'><FaCheck />
                  </span> HTML</p>
                  <p className="flex items-center gap-3 text-base font-semibold"> <span className='text-primary'><FaCheck />
                  </span> CSS</p>
                  <p className="flex items-center gap-3 text-base font-semibold"> <span className='text-primary'><FaCheck />
                  </span> Javascript</p>
                </div>
              </div>
            </div>
          </div>

          {/* <button className="flex items-center justify-center mx-auto">
                    <a href="#" className="bg-primary text-white rounded-lg text-sm font-semibold flex-none hover:shadow-lg  hover:shadow-primary/30 focus:shadow-none focus:outline focus:outline-primary/40 px-6 py-3">Sign Up Now <i className="fa-solid fa-arrow-right ms-2"></i> </a>
                </button> */}

        </div>
      </div>
    </div>
  )
}

export default WebDev