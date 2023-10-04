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
    <div className='bg-blue-50/10'>
     
      <div className='py-20   px-5 grid justify-center lg:px-20 '>
        <p className=" grid justify-center font-bold text-center text-4xl lg:text-6xl text-primary ">
          Get your customized Website
          {/* <span className='text-primary' className="relative z-0 after:bg-green-500/50 after:-z-10 after:absolute md:after:h-6 after:h-4 after:w-full after:bottom-0 after:end-0">showcase</span> your saas */}
        </p>
        <p className=" grid justify-center font-bold tracking-tight text-4xl lg:text-5xl text my-8">
         → That Converts.
        </p>

        <div className='grid justify-center pt-8 md:my-0'>
          <button className='btn-md lg:btn-lg btn bg-blue-600 hover:bg-primary normal-case text-lg lg:text-2xl font-normal text-white'>Let&apos;s Begin ✨</button>
        </div>
        <p className=" grid justify-center text-blue-600 mt-10 text-xl lg:text-3xl text ">
          and @ 1 year Hosting for free
        </p>
        <div className='lg:w-[700px] mt-5 grid justify-center'>
          {/* <p className="text-lg  mb-5">
            Welcome, to our web development services, where innovation, creativity, and functionality converge to craft digital experiences that leave a lasting impact. In today&apos;s digital landscape, a compelling online presence is not just an option; it&apos;s a necessity.

          </p> */}
          <p className="text-lg  text-center mb-5">
            → We are here to be your partner in turning your vision into a functional, user-friendly, and visually stunning website.
          </p>
        </div>
      </div>
      <div className='grid justify-center px-2'>
        <video autoPlay muted loop playsinline="" controls="" className="rounded-3xl aspect-auto w-full sm:w-[52rem] border-2  border-base-content/20" width="1000" height="600">
          <source src="https://res.cloudinary.com/the-social-charts/video/upload/v1696059432/vid_t4a8rr.mp4" type="video/mp4" />
        </video>
       
      </div>
      <div className='py-3 px-5  lg:px-20 grid justify-center'>
        {/* <p className="text-3xl mb-14 grid justify-center">
        Elevate Your Web Presence: Web Development Service Pack!        </p> */}
        <div className="flex flex-col text-center w-full my-6">
          <p className="mx-auto font-medium text-gradient-cold mb-2 ">Elevate Your Web Presence✨</p>
          <div className="mb-8">
            <h2 className="sm:text-4xl text-3xl font-bold text-base-content">
              Web Development Pack Includes!
            </h2>
          </div>
          {/* <div className="md:w-2/3 mx-auto leading-relaxed text-base text-base-content-secondary">begins with strategic selection.
            <h3 className="">Launch your project today!
            </h3>
          </div> */}
        </div>

        <div className='lg:w-[700px] mt-2'>
          {/* <p className="text-base text-gray-600  mb-5">
            Web development is the process of creating and maintaining websites. It plays a crucial role because:

          </p> */}
          <p className=' text-lg text-gray-900 mx-2'>1. Custom Web Design:</p>
          <p className="text-base text-gray-600 ml-7  mb-5">
            Tailor-made websites that align with a client&apos;s brand and business objectives.


          </p>
          <p className=' text-lg text-gray-900 mx-2'>2. Responsive Design: </p>
          <p className="text-base text-gray-600 ml-7  mb-5">
            Ensuring the website is mobile-friendly and looks great on all devices.

          </p>
          <p className=' text-lg text-gray-900 mx-2'>3.  Content Management Systems (CMS):</p>
          <p className="text-base text-gray-600 ml-7  mb-5">
            Offering CMS platforms like WordPress, Joomla, or Drupal for easy content updates.          </p>

          <p className=' text-lg text-gray-900 mx-2'>4. E-commerce Solutions: </p>
          <p className="text-base text-gray-600 ml-7  mb-5">
            Developing robust online stores with features like cart, checkout, and payment gateway integration.          </p>

          <p className=' text-lg text-gray-900 mx-2'>5. SEO-Ready Development:  </p>
          <p className="text-base text-gray-600 ml-7  mb-5">
            Implementing on-page SEO best practices to make the site more search engine friendly.
          </p>

          <p className=' text-lg text-gray-900 mx-2'>6. UI/UX Design: </p>
          <p className="text-base text-gray-600 ml-7  mb-5">
            Creating intuitive and engaging user interfaces that offer a seamless user experience.

          </p>

          <p className=' text-lg text-gray-900 mx-2'>7. Web Analytics Setup: </p>
          <p className="text-base text-gray-600 ml-7  mb-5">
            Installing and configuring Google Analytics or other analytics tools to track website performance.
          </p>

          <p className=' text-lg text-gray-900 mx-2'>8. Social Media Integration: </p>
          <p className="text-base text-gray-600 ml-7  mb-5">
            Embedding social media feeds and share buttons to enhance online presence and user engagement.          </p>

          <p className=' text-lg text-gray-900 mx-2'>9.  Web Security: </p>
          <p className="text-base text-gray-600 ml-7  mb-5">
            SSL certificates, secure coding practices, and other security features to protect against hacking and data breaches.       </p>

          <p className=' text-lg text-gray-900 mx-2'>10. Fast Load Times:  </p>
          <p className="text-base text-gray-600 ml-7  mb-5">
            Optimizing for speed to ensure the website loads quickly, improving both user experience and SEO.   </p>

          <p className=' text-lg text-gray-900 mx-2'>11.  Content Writing Services:</p>
          <p className="text-base text-gray-600 ml-7  mb-5">
            Providing keyword-rich, high-quality content that is both SEO-friendly and engages the audience.    </p>

          <p className=' text-lg text-gray-900 mx-2'>12.         Multimedia Elements:</p>
          <p className="text-base text-gray-600 ml-7  mb-5">
            Adding video, interactive maps, and other multimedia elements to make the website more engaging.</p>

          <p className=' text-lg text-gray-900 mx-2'>13.    API Integrations*: </p>
          <p className="text-base text-gray-600 ml-7  mb-5">
            Linking third-party services like CRMs, payment gateways, or email marketing tools via API.

          </p>

          <p className=' text-lg text-gray-900 mx-2'>14.  Progressive Web Apps (PWA): </p>
          <p className="text-base text-gray-600 ml-7  mb-5">
            Offering PWA development for a more app-like experience on the web.


          </p>

          <p className=' text-lg text-gray-900 mx-2'>15.          Ongoing Support and Maintenance: </p>
          <p className="text-base text-gray-600 ml-7  mb-5">
            Regular updates, performance reviews, and 24/7 customer support to keep the website running smoothly.
          </p>


        </div>
      </div>

      <div className="xl:py-24 py-16 px-5 lg:mx-28 ">
        <div className="container aos-init aos-animate" data-aos="fade-up" data-aos-duration="600">

          <div className="text-center grid justify-center">
            <h1 className="text-3xl font-medium">Technologies we work with</h1>
          </div>

          <div className="py-16 pl-10 grid jus">
            <div className="grid xl:grid-cols-4 sm:grid-cols-2 grid-cols-1 gap-5">
              <div className="order-1">
                <div className="flex flex-col gap-5">
                  <p className="flex items-center gap-3 text-base text-gray-800 "> <span className='text-primary'><FaCheck />
                  </span> React js</p>
                  <p className="flex items-center gap-3 text-base text-gray-800 "> <span className='text-primary'><FaCheck />
                  </span> Next js</p>
                  <p className="flex items-center gap-3 text-base text-gray-800 "> <span className='text-primary'><FaCheck />
                  </span> Wordpress</p>
                  <p className="flex items-center gap-3 text-base text-gray-800 "> <span className='text-primary'><FaCheck />
                  </span> Webflow</p>
                </div>
              </div>

              <div className="order-3 xl:order-2">
                <div className="flex flex-col gap-5">
                  <p className="flex items-center gap-3 text-base text-gray-800 "> <span className='text-primary'><FaCheck />
                  </span> Tailwind </p>
                  <p className="flex items-center gap-3 text-base text-gray-800 "> <span className='text-primary'><FaCheck />
                  </span> Bootstrap</p>
                  <p className="flex items-center gap-3 text-base text-gray-800 "> <span className='text-primary'><FaCheck />
                  </span> Figma</p>
                  <p className="flex items-center gap-3 text-base text-gray-800 "> <span className='text-primary'><FaCheck />
                  </span>Ui UX</p>
                </div>
              </div>

              <div className="order-4 xl:order-3">
                <div className="flex flex-col gap-5">
                  <p className="flex items-center gap-3 text-base text-gray-800 "> <span className='text-primary'><FaCheck />
                  </span>Node JS</p>
                  <p className="flex items-center gap-3 text-base text-gray-800 "> <span className='text-primary'><FaCheck />
                  </span> MongoDB</p>
                  <p className="flex items-center gap-3 text-base text-gray-800 "> <span className='text-primary'><FaCheck />
                  </span> Frontend</p>
                  <p className="flex items-center gap-3 text-base text-gray-800 "> <span className='text-primary'><FaCheck />
                  </span> Backend</p>
                </div>
              </div>

              <div className="order-2 xl:order-4">
                <div className="flex flex-col gap-5">
                  <p className="flex items-center gap-3 text-base text-gray-800 "> <span className='text-primary'><FaCheck />
                  </span> SQL</p>
                  <p className="flex items-center gap-3 text-base text-gray-800 "> <span className='text-primary'><FaCheck />
                  </span> HTML</p>
                  <p className="flex items-center gap-3 text-base text-gray-800 "> <span className='text-primary'><FaCheck />
                  </span> CSS</p>
                  <p className="flex items-center gap-3 text-base text-gray-800 "> <span className='text-primary'><FaCheck />
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

      {/* <div data-theme="" className="bg-base-200  shadow-xl border-primary border-2 rounded-2xl p-12 mx-5 lg:mx-20">

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
              <a href="#" className="py-4 px-6 rounded border border-primary bg-primary text-white hover:shadow-lg hover:shadow-primary/50 focus:outline focus:outline-primary/50 transition-all duration-500"> Get Propmt for Free</a>
            </div>
            <div className="mt-2">
              <p className="inline-flex text-xs">Looking for other platforms? <a href="#" className="hover:text-primary"> Click Here</a></p>
            </div>
          </div>
        </div>

      </div> */}

      <div className='grid justify-center py-30'>
        <button className='btn-md lg:btn-lg cursor-pointer btn bg-blue-600 hover:bg-primary normal-case text-lg lg:text-2xl font-normal text-white'>Let&apos;s Build Your Dream Website! ✨




        </button>
      </div>

      <section className="py-20 mt-10 px-5 lg:px-20">
        <div className="container">
          <div className="text-center">
            <h1 className="text-3xl font-medium">Our Web Development Services</h1>
            <p className="font-medium text-slate-500 mt-2 mb-4">We are helping businesses to develop their web applications</p>
          </div>

          <div className="grid lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-6 pt-14">
            <div className="group aos-init aos-animate" data-aos="fade-up" data-aos-duration="600">
              <div className="p-6 rounded-md shadow group-hover:shadow-lg transition-all duration-500">
                <div className="w-12 h-12 bg-red-500/10 flex items-center justify-center rounded-tr-xl rounded-bl-xl group-hover:rounded-tr-none group-hover:rounded-bl-none group-hover:rounded-tl-xl group-hover:rounded-br-xl transition-all duration-500">
                  <Image alt="" src={design} height="30" width="30" />
                </div>
                <h4 className="text-lg mt-6">Custom Web Design</h4>
                <p className="text-base text-gray-600 leading-7 mt-2">Our creative team specializes in crafting custom web designs that align perfectly with your brand and audience.</p>
              </div>
            </div>

            <div className="group aos-init aos-animate" data-aos="fade-up" data-aos-duration="900">
              <div className="p-6 rounded-md shadow group-hover:shadow-lg transition-all duration-500">
                <div className="w-12 h-12 bg-red-500/10 flex items-center justify-center rounded-tr-xl rounded-bl-xl group-hover:rounded-tr-none group-hover:rounded-bl-none group-hover:rounded-tl-xl group-hover:rounded-br-xl transition-all duration-500">
                  <Image alt="" src={recent} height="30" width="30" />

                </div>
                <h4 className="text-lg mt-6">Front-End Development</h4>
                <p className="text-base text-gray-600 leading-7 mt-2">We bring designs to life with cutting-edge front-end development technologies, ensuring a seamless user experience.</p>
              </div>
            </div>

            <div className="group aos-init aos-animate" data-aos="fade-up" data-aos-duration="1200">
              <div className="p-6 rounded-md shadow group-hover:shadow-lg transition-all duration-500">
                <div className="w-12 h-12 bg-red-500/10 flex items-center justify-center rounded-tr-xl rounded-bl-xl group-hover:rounded-tr-none group-hover:rounded-bl-none group-hover:rounded-tl-xl group-hover:rounded-br-xl transition-all duration-500">
                  <Image alt="" src={console} height="30" width="30" />
                </div>
                <h4 className="text-lg mt-6">Back-End Development</h4>
                <p className="text-base text-gray-600 leading-7 mt-2">Our experienced developers build the engine that powers your website, ensuring it runs efficiently and securely.</p>
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
                <p className="text-base text-gray-600 leading-7 mt-2">From small online stores to large-scale e-commerce platforms, we tailor solutions that drive sales and conversions.</p>
              </div>
            </div>

            <div className="group aos-init aos-animate" data-aos="fade-up" data-aos-duration="900">
              <div className="p-6 rounded-md shadow group-hover:shadow-lg transition-all duration-500">
                <div className="w-12 h-12 bg-red-500/10 flex items-center justify-center rounded-tr-xl rounded-bl-xl group-hover:rounded-tr-none group-hover:rounded-bl-none group-hover:rounded-tl-xl group-hover:rounded-br-xl transition-all duration-500">
                  <Image alt="" src={sqr} height="30" width="30" />

                </div>
                <h4 className="text-lg mt-6">CMS</h4>
                <p className="text-base text-gray-600 leading-7 mt-2">We implement user-friendly CMS platforms like WordPress and Drupal, giving you overalll control over website.</p>
              </div>
            </div>

            <div className="group aos-init aos-animate" data-aos="fade-up" data-aos-duration="1200">
              <div className="p-6 rounded-md shadow group-hover:shadow-lg transition-all duration-500">
                <div className="w-12 h-12 bg-red-500/10 flex items-center justify-center rounded-tr-xl rounded-bl-xl group-hover:rounded-tr-none group-hover:rounded-bl-none group-hover:rounded-tl-xl group-hover:rounded-br-xl transition-all duration-500">
                  <Image alt="" src={figma} height="30" width="30" />

                </div>
                <h4 className="text-lg mt-6">Responsive Web Design</h4>
                <p className="text-base text-gray-600 leading-7 mt-2">Your website will look and function flawlessly on all devices, from desktops to smartphones.</p>
              </div>
            </div>
          </div>

        </div>
      </section>


    </div>
  )
}

export default WebDev