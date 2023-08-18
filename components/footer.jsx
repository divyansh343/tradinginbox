import Image from 'next/image'
import React from 'react'
// import { HiTrendingUp } from 'react-icons/hi'
// import logoImg from '../../assets/images/power.png'
const Footer = () => {
  return (
    <>
      <div data-theme="forest" className='p-6'>
        <div className="px-[12px] md:px-[36px] xl:px-0 mt-[70px]">
          
          {/* <div className="w-full bg-gray-200 h-[1px] mb-[52px]"></div> */}
          <div className=" grid gird-cols-1 gap-8 mb-[48px] md:grid-cols-2 lg:grid-cols-4 xl:gap-[98px]">
            <div>
              <h5 className="text-heading-5  font-bold text-secondary mb-5 text-[18px]">Contact</h5>
              <p className="text-text mb-5">4517 Washington Ave. Manchester, Kentucky 39495
              </p>
              <p className="text-text underline">(239) 555-0108
              </p>
              <p className="text-text underline">contact@agon.com
              </p>
            </div>
            <div>
              <h5 className="text-heading-5  font-bold text-secondary mb-5 text-[18px]">About Us</h5>
              <ul className=''>
                <li className="mb-2"><a className="transition-all duration-200 hover:text-secondary hover:pl-[3px]" href="#">Mission &amp; Vision</a></li>
                <li className="mb-2"><a className="transition-all duration-200 hover:text-secondary hover:pl-[3px]" href="#">Our Team</a></li>
                <li className="mb-2"><a className="transition-all duration-200 hover:text-secondary hover:pl-[3px]" href="#">Careers</a></li>
                <li className="mb-2"><a className="transition-all duration-200 hover:text-secondary hover:pl-[3px]" href="#">Press &amp; Media</a></li>
                <li className="mb-2"><a className="transition-all duration-200 hover:text-secondary hover:pl-[3px]" href="#">Advertising</a></li>
                <li className="mb-2"><a className="transition-all duration-200 hover:text-secondary hover:pl-[3px]" href="#">Testimonials</a></li>
              </ul>
            </div>
            {/* <div>
              <h5 className="text-heading-5  font-bold text-secondary mb-5 text-[18px]">Discover</h5>
              <ul>
                <li className="mb-2"><a className="transition-all duration-200 hover:text-secondary hover:pl-[3px]" href="#">Our Blog</a></li>
                <li className="mb-2"><a className="transition-all duration-200 hover:text-secondary hover:pl-[3px]" href="#">Plans &amp; Pricing</a></li>
                <li className="mb-2"><a className="transition-all duration-200 hover:text-secondary hover:pl-[3px]" href="#">Knowledge Base</a></li>
                <li className="mb-2"><a className="transition-all duration-200 hover:text-secondary hover:pl-[3px]" href="#">Cookie Policy</a></li>
                <li className="mb-2"><a className="transition-all duration-200 hover:text-secondary hover:pl-[3px]" href="#">Office Center</a></li>
                <li className="mb-2"><a className="transition-all duration-200 hover:text-secondary hover:pl-[3px]" href="#">News &amp; Events</a></li>
              </ul>
            </div> */}
            <div>
              <h5 className="text-heading-5  font-bold text-secondary mb-5 text-[18px]">Support</h5>
              <ul>
                <li className="mb-2"><a className="transition-all duration-200 hover:text-secondary hover:pl-[3px]" href="#">FAQs</a></li>
                <li className="mb-2"><a className="transition-all duration-200 hover:text-secondary hover:pl-[3px]" href="#">Editor Help</a></li>
                <li className="mb-2"><a className="transition-all duration-200 hover:text-secondary hover:pl-[3px]" href="#">Community</a></li>
                <li className="mb-2"><a className="transition-all duration-200 hover:text-secondary hover:pl-[3px]" href="#">Live Chatting</a></li>
                <li className="mb-2"><a className="transition-all duration-200 hover:text-secondary hover:pl-[3px]" href="#">Contact Us</a></li>
                <li className="mb-2"><a className="transition-all duration-200 hover:text-secondary hover:pl-[3px]" href="#">Support Center</a></li>
              </ul>
            </div>
            <div>
              <h5 className="text-heading-5  font-bold text-secondary mb-5 text-[18px]">Useful links</h5>
              <ul>
                <li className="mb-2"><a className="transition-all duration-200 hover:text-secondary hover:pl-[3px]" href="#">Request an offer</a></li>
                <li className="mb-2"><a className="transition-all duration-200 hover:text-secondary hover:pl-[3px]" href="#">How it works</a></li>
                <li className="mb-2"><a className="transition-all duration-200 hover:text-secondary hover:pl-[3px]" href="#">Pricing</a></li>
                <li className="mb-2"><a className="transition-all duration-200 hover:text-secondary hover:pl-[3px]" href="#">Reviews</a></li>
                <li className="mb-2"><a className="transition-all duration-200 hover:text-secondary hover:pl-[3px]" href="#">Stories</a></li>
              </ul>
            </div>
          </div>
          <div className="w-full bg-gray-200 h-[1px] mb-[46px]"></div>
          <div className="text-gray-400 lg:flex lg:items-center lg:justify-between">
            <div className="md:flex md:items-center md:gap-6">
              <p className="text-lead font-bold">©Agon Official 2022
              </p>
              <div className="flex items-center justify-between md:gap-6"><a className="text-text" href="#">Privacy policy</a><a className="text-text" href="#">Cookies</a><a className="text-text" href="#">Terms of service</a></div>
            </div>
            <div className="flex items-center justify-center gap-5 mt-5 lg:mt-0"><a className="w-8 h-8 transition-all duration-300 hover:opacity-70 hover:-translate-y-1" href="#">
              {/* <img class="h-full w-full object-cover" src="./assets/images/icons/icon-facebook-green.svg" alt="facebook icon"> */}
            </a><a className="w-8 h-8 transition-all duration-300 hover:opacity-70 hover:-translate-y-1" href="#">
                {/* <img class="h-full w-full object-cover" src="./assets/images/icons/icon-instagram-green.svg" alt="instagram icon"> */}
              </a><a className="w-8 h-8 transition-all duration-300 hover:opacity-70 hover:-translate-y-1" href="#">
                {/* <img class="h-full w-full object-cover" src="./assets/images/icons/icon-twitter-green.svg" alt="twitter icon"> */}
              </a><a className="w-8 h-8 transition-all duration-300 hover:opacity-70 hover:-translate-y-1" href="#">
                {/* <img class="h-full w-full object-cover" src="./assets/images/icons/icon-linkedin-green.svg" alt="linkedin icon"> */}
              </a></div>
          </div>
        </div>
      </div>

    </>
  )
}

export default Footer