import Image from 'next/image'
import React from 'react'
import sheet from '../assets/images/sign.png'
import wp from '../assets/images/wp.png'
import insta from '../assets/images/insta.png'
import yt from '../assets/images/yt.png'
import lkdin from '../assets/images/lkdin.png'
import tree from '../assets/images/tree.png'
import bstart from '../assets/images/bstart.png'

const Footer = () => {
  return (
    <div className='max-w-7xl grid justify-center '>
      <div className='px-4 pb-5 bg-black'>
        <div className="mt-[70px]">

          {/* <div className="w-full bg-gray-200 h-[1px] mb-[52px]"></div> */}
          <div className=" grid gird-cols-1 gap-12 mb-10 md:grid-cols-2  xl:gap-[300px]">

            <div>
              <Image alt='' src={sheet} className="  hover:shadow-xl aspect-square w-full sm:w-[26rem] border-2 md:border-4 border-base-content/20 cursor-pointer" width="110" height="80">
              </Image>
              <h5 className="text-heading text-[#c0c0c0] mt-5 text-sm">Photographers & videographers capturing the world around us.</h5>
              {/* <p className="text-sm text-white mb-5">Indore, MP
              </p>
              <a href="tel:+918821934797" className="text-sm my-2 text-white underline cursor-pointer">+91-8821934797
              </a>
              <p className="text-sm cursor-pointer  text-white">contact@chareterdmedia.com
              </p> */}
            </div>
            <div className='grid grid-cols-2'>
              <div >
                <h5 className="text-heading-5 uppercase tracking-wider  font-bold text-[#c0c0c0] mb-5 text-sm">BUSINESS AREAS</h5>
                <ul>
                  <li className="mb-2 text-sm lg:text-sm "><a className="transition-all duration-200 text-white pl-[3px]" href="#">Product Photography</a></li>
                  <li className="mb-2 text-sm lg:text-sm "><a className="transition-all duration-200 text-white pl-[3px]" href="#">Art Photography</a></li>
                  <li className="mb-2 text-sm lg:text-sm "><a className="transition-all duration-200 text-white pl-[3px]" href="#">Drone Photography</a></li>
                  <li className="mb-2 text-sm lg:text-sm "><a className="transition-all duration-200 text-white pl-[3px]" href="#">Wildlife Photography</a></li>
                </ul>
              </div>

              <div>
                <h5 className="text-heading-5 uppercase tracking-wider  font-bold text-[#c0c0c0] mb-5 text-sm">Pages</h5>
                <ul>
                  <li className="mb-2 text-sm lg:text-sm "><a className="transition-all duration-200 text-white pl-[3px]" href="#">Our Blog</a></li>
                  <li className="mb-2 text-sm lg:text-sm "><a className="transition-all duration-200 text-white pl-[3px]" href="#">Plans &amp; Pricing</a></li>
                  <li className="mb-2 text-sm lg:text-sm "><a className="transition-all duration-200 text-white pl-[3px]" href="#">Knowledge Base</a></li>
                  <li className="mb-2 text-sm lg:text-sm "><a className="transition-all duration-200 text-white pl-[3px]" href="#">Cookie Policy</a></li>
                  {/* <li className="mb-2 text-sm lg:text-sm "><a className="transition-all duration-200 text-white pl-[3px]" href="#">Office Center</a></li>
                <li className="mb-2 text-sm lg:text-sm "><a className="transition-all duration-200 text-white pl-[3px]" href="#">News &amp; Events</a></li> */}
                </ul>
              </div>

            </div>

          </div>
          <div className="w-full bg-black h-[1px] "></div>
          <div className='bg-[#ffffff]  md:px-[36px] opacity-10 h-[3px] mb-8 rounded'>
          </div>
          <div className="text-gray-400 flex items-center justify-between">
            <a className="text-sm cursor-pointer hover:shadow-2xl hover:border-b">
              Powered by -<span className=''> Brandstart</span>
            </a>
            <div className='flex gap-4'>
              <a target='_blank' rel='noreferrer' href="https://wa.me/916262812849">
                <Image alt='' src={wp} className="  hover:shadow-xl aspect-square w-full sm:w-[26rem] border-2 md:border-4 border-base-content/20 cursor-pointer" width="20" height="20"></Image>
              </a>
              <a target='_blank' rel='noreferrer' href="https://www.youtube.com/@thatsarpit">
                <Image alt='' src={yt} className="  hover:shadow-xl aspect-square w-full sm:w-[26rem] border-2 md:border-4 border-base-content/20 cursor-pointer" width="20" height="20"></Image>
              </a>
              <a target='_blank' rel='noreferrer' href="https://linktr.ee/arpitbajpai">
                <Image alt='' src={tree} className="  hover:shadow-xl aspect-square w-full sm:w-[26rem] border-2 md:border-4 border-base-content/20 cursor-pointer" width="20" height="20"></Image>
              </a>
              <a target='_blank' rel='noreferrer' href="https://www.linkedin.com/in/arpit-bajpai-430907226">
                <Image alt='' src={lkdin} className="  hover:shadow-xl aspect-square w-full sm:w-[26rem] border-2 md:border-4 border-base-content/20 cursor-pointer" width="20" height="20"></Image>
              </a>
              <a target='_blank' rel='noreferrer' href="https://www.instagram.com/thatsarpit/">
                <Image alt='' src={insta} className="  hover:shadow-xl aspect-square w-full sm:w-[26rem] border-2 md:border-4 border-base-content/20 cursor-pointer" width="20" height="20"></Image>
              </a>
            </div>
          </div>
        </div>
        {/* <div className='bg-[#ffffff] opacity-10 mx-[36px] h-1 mb-8 mt-4 rounded'>
        </div> */}
      </div>
    </div>
  )
}

export default Footer