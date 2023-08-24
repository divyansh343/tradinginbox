import Image from 'next/image'
import React from 'react'
import sheet from '../assets/images/sign.png'
import wp from '../assets/images/wp.png'
import insta from '../assets/images/insta.png'
import yt from '../assets/images/yt.png'

const Footer = () => {
  return (
    <>
      <div  className='p-6 bg-black'>
        <div className="px-[2px] md:px-[36px] xl:px-0 mt-[70px]">

          {/* <div className="w-full bg-gray-200 h-[1px] mb-[52px]"></div> */}
          <div className=" grid gird-cols-1 gap-8 mb-[48px] md:grid-cols-2 lg:grid-cols-4 xl:gap-[98px]">
            <div>
            <Image alt='' src={sheet} className="  hover:shadow-xl aspect-square w-full sm:w-[26rem] border-2 md:border-4 border-base-content/20" width="110" height="80">
              </Image>
              <h5 className="text-heading text-[#c0c0c0] mt-5 text-sm">Photographers & videographers capturing the world around us.</h5>
              <p className="text-sm text-white mb-5">Indore, MP
              </p>
              <a href="tel:+918821934797" className="text-sm my-2 text-white underline cursor-pointer">+91-8821934797
              </a>
              <p className="text-sm cursor-pointer  text-white">contact@chareterdmedia.com
              </p>
            </div>
            <div className='invisible'>
              <h5 className="text-heading-5  font-bold text-white mb-5 text-sm">Our Services</h5>
              <ul className=''>
                <li className="mb-2 text-sm lg:text-sm "><a className="transition-all duration-200 text-white pl-[3px]" href="#">Brand Collabration</a></li>
                <li className="mb-2 text-sm lg:text-sm "><a className="transition-all duration-200 text-white pl-[3px]" href="#">Influencer Marketing</a></li>
                <li className="mb-2 text-sm lg:text-sm "><a className="transition-all duration-200 text-white pl-[3px]" href="#">Regional Influencer Marketing</a></li>
                <li className="mb-2 text-sm lg:text-sm "><a className="transition-all duration-200 text-white pl-[3px]" href="#">Celebrity Marketing</a></li>
                <li className="mb-2 text-sm lg:text-sm "><a className="transition-all duration-200 text-white pl-[3px]" href="#">Niche Marketing</a></li>
              </ul>
            </div>
            {/* <div>
              <h5 className="text-heading-5  font-bold text-white mb-5 text-sm">Discover</h5>
              <ul>
                <li className="mb-2 text-sm lg:text-sm "><a className="transition-all duration-200 text-white pl-[3px]" href="#">Our Blog</a></li>
                <li className="mb-2 text-sm lg:text-sm "><a className="transition-all duration-200 text-white pl-[3px]" href="#">Plans &amp; Pricing</a></li>
                <li className="mb-2 text-sm lg:text-sm "><a className="transition-all duration-200 text-white pl-[3px]" href="#">Knowledge Base</a></li>
                <li className="mb-2 text-sm lg:text-sm "><a className="transition-all duration-200 text-white pl-[3px]" href="#">Cookie Policy</a></li>
                <li className="mb-2 text-sm lg:text-sm "><a className="transition-all duration-200 text-white pl-[3px]" href="#">Office Center</a></li>
                <li className="mb-2 text-sm lg:text-sm "><a className="transition-all duration-200 text-white pl-[3px]" href="#">News &amp; Events</a></li>
              </ul>
            </div> */}
            <div >
              <h5 className="text-heading-5  font-bold text-white mb-5 text-sm">By Cities</h5>
              <ul>
                <li className="mb-2 text-sm lg:text-sm "><a className="transition-all duration-200 text-white pl-[3px]" href="#">Influencer Agency In Delhi</a></li>
                <li className="mb-2 text-sm lg:text-sm "><a className="transition-all duration-200 text-white pl-[3px]" href="#">Influencer Agency In Mumbai</a></li>
                <li className="mb-2 text-sm lg:text-sm "><a className="transition-all duration-200 text-white pl-[3px]" href="#">Influencer Agency In Lucknow</a></li>
                <li className="mb-2 text-sm lg:text-sm "><a className="transition-all duration-200 text-white pl-[3px]" href="#">Influencer Agency In Indore</a></li>
              </ul>
            </div>
            <div>
              <h5 className="text-heading-5  font-bold text-white mb-5 text-sm">Useful links</h5>
              <ul>
                <li className="mb-2 text-sm lg:text-sm "><a className="transition-all duration-200 text-white pl-[3px]" href="#">Collabrations</a></li>
                <li className="mb-2 text-sm lg:text-sm "><a className="transition-all duration-200 text-white pl-[3px]" href="#">Influencers</a></li>
                <li className="mb-2 text-sm lg:text-sm "><a className="transition-all duration-200 text-white pl-[3px]" href="#">Events</a></li>
                {/* <li className="mb-2 text-sm lg:text-sm "><a className="transition-all duration-200 text-white pl-[3px]" href="#">Reviews</a></li>
                <li className="mb-2 text-sm lg:text-sm "><a className="transition-all duration-200 text-white pl-[3px]" href="#">Stories</a></li> */}
              </ul>
            </div>
          </div>
          <div className="w-full bg-black h-[1px] mb-[20px]"></div>
          <div className="text-gray-400 flex items-center justify-between">
            <p className="text-sm ">
            © Aperture Photography, Inc. All rights reserved. Licensing.
            </p>
            <div className='flex gap-4'>
            <Image alt='' src={wp} className="  hover:shadow-xl aspect-square w-full sm:w-[26rem] border-2 md:border-4 border-base-content/20" width="30" height="30"></Image>
              <Image alt='' src={yt} className="  hover:shadow-xl aspect-square w-full sm:w-[26rem] border-2 md:border-4 border-base-content/20" width="30" height="30"></Image>
              <Image alt='' src={insta} className="  hover:shadow-xl aspect-square w-full sm:w-[26rem] border-2 md:border-4 border-base-content/20" width="30" height="30"></Image>
            </div>
             
            {/* <a href='https://suprr.link/divyansh' target='_blank' rel='noreferrer' className=' text-sm shadow-lg underline cursor-pointer'>-Designed by<span className='text-primary ml-1 '>Divyansh</span></a> */}
          </div>
        </div>
      </div>
    </>
  )
}

export default Footer