import React from 'react'
import { FaCheck } from 'react-icons/fa';
import { FaMobileScreen } from 'react-icons/fa';
import { MdOutlineLaptopMac, MdOutlineLaptopWindows } from 'react-icons/md';
import { GoBrowser } from 'react-icons/go';
import { HiOutlineDeviceMobile } from 'react-icons/hi';
import design from '../../assets/images/services/design.png'
import recent from '../../assets/images/services/recent.png'
import console from '../../assets/images/services/console.png'
import figma from '../../assets/images/services/figma.png'
import sqr from '../../assets/images/services/sqr.png'
import box from '../../assets/images/services/box.png'
import Image from 'next/image';

const WebDev = () => {
  return (
    <div>
      <div className='py-20 px-5 grid justify-center lg:px-20 '>
        <p className=" text-4xl lg:text-5xl font-bold mb-5">
          Web Development Service
          {/* <span className='text-primary' className="relative z-0 after:bg-green-500/50 after:-z-10 after:absolute md:after:h-6 after:h-4 after:w-full after:bottom-0 after:end-0">showcase</span> your saas */}
        </p>
        <p className="text-2xl font-semibold mb-5">
          For Small Business, Industries, Online businesses
          {/* <span className='text-primary' className="relative z-0 after:bg-green-500/50 after:-z-10 after:absolute md:after:h-6 after:h-4 after:w-full after:bottom-0 after:end-0">showcase</span> your saas */}
        </p>
        <div className='lg:w-[800px] mt-10'>
          <p className="text-lg  mb-5">
            Welcome, to our web development services, where innovation, creativity, and functionality converge to craft digital experiences that leave a lasting impact. In today&apos;s digital landscape, a compelling online presence is not just an option; it&apos;s a necessity.

          </p>
          <p className="text-lg  mb-5">
            We are here to be your partner in turning your vision into a functional, user-friendly, and visually stunning website.
          </p>
        </div>
      </div>
      <div className='py-20 px-5  lg:px-20 grid justify-center'>
        <p className=" text-xl lg:text-2xl  mb-5 grid justify-center">
          Why Web Development Matters?
        </p>

        <div className='lg:w-[800px] mt-5'>
          <p className="text-base text-slate-600  mb-5">
            Web development is the process of creating and maintaining websites. It plays a crucial role because:

          </p>
          <p className=' text-lg text-slate-700 mx-2'>First Impressions Matter:</p>
          <p className="text-base text-slate-600 ml-2  mb-5">
            Your website is often the first interaction potential customers have with your brand.
          </p>
          <p className=' text-lg text-slate-700 mx-2'>User Experience (UX) is Key:</p>
          <p className="text-base text-slate-600 ml-2  mb-5">
            A well-designed and user-friendly website keeps visitors engaged and converts them into customers.
          </p>
          <p className=' text-lg text-slate-700 mx-2'> Competitive Advantage: </p>
          <p className="text-base text-slate-600 ml-2  mb-5">
            In a crowded online marketplace, a well-developed website sets you apart from the competition.
          </p>
          <p className=' text-lg text-slate-700 mx-2'> Scalability:</p>
          <p className="text-base text-slate-600 ml-2  mb-5">
            A robust website can grow with your business, accommodating new features and functionality.
          </p>
        </div>
      </div>

      <section className="py-20 px-5 lg:px-20">
        <div className="container">
          <div className="text-center">
            <h1 className="text-2xl font-medium">Our Web Development Services</h1>
            <p className="font-medium text-slate-500 mt-2 mb-4">We are helping businesses to develop their web applications</p>
          </div>

          <div className="grid lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-6 pt-14">
            <div className="group aos-init aos-animate" data-aos="fade-up" data-aos-duration="600">
              <div className="p-6 rounded-md shadow group-hover:shadow-lg transition-all duration-500">
                <div className="w-12 h-12 bg-red-500/10 flex items-center justify-center rounded-tr-xl rounded-bl-xl group-hover:rounded-tr-none group-hover:rounded-bl-none group-hover:rounded-tl-xl group-hover:rounded-br-xl transition-all duration-500">
                  <Image alt="" src={design} height="30" width="30" />
                </div>
                <h4 className="text-lg mt-6">Custom Web Design</h4>
                <p className="text-base text-slate-600 leading-7 mt-2">Our creative team specializes in crafting custom web designs that align perfectly with your brand and audience.</p>
              </div>
            </div>

            <div className="group aos-init aos-animate" data-aos="fade-up" data-aos-duration="900">
              <div className="p-6 rounded-md shadow group-hover:shadow-lg transition-all duration-500">
                <div className="w-12 h-12 bg-red-500/10 flex items-center justify-center rounded-tr-xl rounded-bl-xl group-hover:rounded-tr-none group-hover:rounded-bl-none group-hover:rounded-tl-xl group-hover:rounded-br-xl transition-all duration-500">
                  <Image alt="" src={recent} height="30" width="30" />

                </div>
                <h4 className="text-lg mt-6">Front-End Development</h4>
                <p className="text-base text-slate-600 leading-7 mt-2">We bring designs to life with cutting-edge front-end development technologies, ensuring a seamless user experience.</p>
              </div>
            </div>

            <div className="group aos-init aos-animate" data-aos="fade-up" data-aos-duration="1200">
              <div className="p-6 rounded-md shadow group-hover:shadow-lg transition-all duration-500">
                <div className="w-12 h-12 bg-red-500/10 flex items-center justify-center rounded-tr-xl rounded-bl-xl group-hover:rounded-tr-none group-hover:rounded-bl-none group-hover:rounded-tl-xl group-hover:rounded-br-xl transition-all duration-500">
                  <Image alt="" src={console} height="30" width="30" />
                </div>
                <h4 className="text-lg mt-6">Back-End Development</h4>
                <p className="text-base text-slate-600 leading-7 mt-2">Our experienced developers build the engine that powers your website, ensuring it runs efficiently and securely.</p>
              </div>
            </div>
          </div>
          <div className="grid lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-6 pt-14">
            <div className="group aos-init aos-animate" data-aos="fade-up" data-aos-duration="600">
              <div className="p-6 rounded-md shadow group-hover:shadow-lg transition-all duration-500">
                <div className="w-12 h-12 bg-red-500/10 flex items-center justify-center rounded-tr-xl rounded-bl-xl group-hover:rounded-tr-none group-hover:rounded-bl-none group-hover:rounded-tl-xl group-hover:rounded-br-xl transition-all duration-500">
                  <Image alt="" src={box} height="30" width="30" />

                </div>
                <h4 className="text-lg mt-6">E-Commerce Solutions</h4>
                <p className="text-base text-slate-600 leading-7 mt-2">From small online stores to large-scale e-commerce platforms, we tailor solutions that drive sales and conversions.</p>
              </div>
            </div>

            <div className="group aos-init aos-animate" data-aos="fade-up" data-aos-duration="900">
              <div className="p-6 rounded-md shadow group-hover:shadow-lg transition-all duration-500">
                <div className="w-12 h-12 bg-red-500/10 flex items-center justify-center rounded-tr-xl rounded-bl-xl group-hover:rounded-tr-none group-hover:rounded-bl-none group-hover:rounded-tl-xl group-hover:rounded-br-xl transition-all duration-500">
                  <Image alt="" src={sqr} height="30" width="30" />

                </div>
                <h4 className="text-lg mt-6">CMS</h4>
                <p className="text-base text-slate-600 leading-7 mt-2">We implement user-friendly CMS platforms like WordPress and Drupal, giving you overalll control over website.</p>
              </div>
            </div>

            <div className="group aos-init aos-animate" data-aos="fade-up" data-aos-duration="1200">
              <div className="p-6 rounded-md shadow group-hover:shadow-lg transition-all duration-500">
                <div className="w-12 h-12 bg-red-500/10 flex items-center justify-center rounded-tr-xl rounded-bl-xl group-hover:rounded-tr-none group-hover:rounded-bl-none group-hover:rounded-tl-xl group-hover:rounded-br-xl transition-all duration-500">
                  <Image alt="" src={figma} height="30" width="30" />

                </div>
                <h4 className="text-lg mt-6">Responsive Web Design</h4>
                <p className="text-base text-slate-600 leading-7 mt-2">Your website will look and function flawlessly on all devices, from desktops to smartphones.</p>
              </div>
            </div>
          </div>

        </div>
      </section>

      <div data-theme="" className="bg-base-200  shadow-xl border-primary border-2 rounded-2xl p-12 mx-5 lg:mx-20">

        <div className="grid lg:grid-cols-3 grid-cols-1 items-center">
          <div className="lg:col-span-2">
            <h4 className="text-2xl font-semibold mb-10">Responsive design Principle</h4>

            <div className="flex flex-wrap gap-10">
              <div className="text-center grid justify-center ">
                <span className='text-2xl'><MdOutlineLaptopWindows />
                </span>
                <h6>Windows</h6>
              </div>

              <div className="text-center grid justify-center">
                <span className='text-2xl'><MdOutlineLaptopMac />
                </span>
                <h6>Mac</h6>
              </div>

              <div className="text-center grid justify-center">
                <span className='text-2xl'><GoBrowser />
                </span>
                <h6>Browser</h6>
              </div>

              <div className="text-center grid justify-center">

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

          <div className="text-center grid justify-center">
            <h1 className="text-2xl font-medium">Technologies we work with</h1>
          </div>

          <div className="py-16">
            <div className="grid xl:grid-cols-4 sm:grid-cols-2 grid-cols-1 gap-5">
              <div className="order-1">
                <div className="flex flex-col gap-5">
                  <p className="flex items-center gap-3 text-base text-slate-600 font-semibold"> <span className='text-primary'><FaCheck />
                  </span> React js</p>
                  <p className="flex items-center gap-3 text-base text-slate-600 font-semibold"> <span className='text-primary'><FaCheck />
                  </span> Next js</p>
                  <p className="flex items-center gap-3 text-base text-slate-600 font-semibold"> <span className='text-primary'><FaCheck />
                  </span> Wordpress</p>
                  <p className="flex items-center gap-3 text-base text-slate-600 font-semibold"> <span className='text-primary'><FaCheck />
                  </span> Webflow</p>
                </div>
              </div>

              <div className="order-3 xl:order-2">
                <div className="flex flex-col gap-5">
                  <p className="flex items-center gap-3 text-base text-slate-600 font-semibold"> <span className='text-primary'><FaCheck />
                  </span> Tailwind </p>
                  <p className="flex items-center gap-3 text-base text-slate-600 font-semibold"> <span className='text-primary'><FaCheck />
                  </span> Bootstrap</p>
                  <p className="flex items-center gap-3 text-base text-slate-600 font-semibold"> <span className='text-primary'><FaCheck />
                  </span> Figma</p>
                  <p className="flex items-center gap-3 text-base text-slate-600 font-semibold"> <span className='text-primary'><FaCheck />
                  </span>Ui UX</p>
                </div>
              </div>

              <div className="order-4 xl:order-3">
                <div className="flex flex-col gap-5">
                  <p className="flex items-center gap-3 text-base text-slate-600 font-semibold"> <span className='text-primary'><FaCheck />
                  </span>Node JS</p>
                  <p className="flex items-center gap-3 text-base text-slate-600 font-semibold"> <span className='text-primary'><FaCheck />
                  </span> MongoDB</p>
                  <p className="flex items-center gap-3 text-base text-slate-600 font-semibold"> <span className='text-primary'><FaCheck />
                  </span> Frontend</p>
                  <p className="flex items-center gap-3 text-base text-slate-600 font-semibold"> <span className='text-primary'><FaCheck />
                  </span> Backend</p>
                </div>
              </div>

              <div className="order-2 xl:order-4">
                <div className="flex flex-col gap-5">
                  <p className="flex items-center gap-3 text-base text-slate-600 font-semibold"> <span className='text-primary'><FaCheck />
                  </span> SQL</p>
                  <p className="flex items-center gap-3 text-base text-slate-600 font-semibold"> <span className='text-primary'><FaCheck />
                  </span> HTML</p>
                  <p className="flex items-center gap-3 text-base text-slate-600 font-semibold"> <span className='text-primary'><FaCheck />
                  </span> CSS</p>
                  <p className="flex items-center gap-3 text-base text-slate-600 font-semibold"> <span className='text-primary'><FaCheck />
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