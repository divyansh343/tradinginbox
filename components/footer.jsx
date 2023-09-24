import Image from 'next/image'
import React from 'react'
import sheet from '../assets/images/bcraft.png'


// import { HiTrendingUp } from 'react-icons/hi'
// import logoImg from '../../assets/images/power.png'
const Footer = () => {
  return (
    <>

      <div data-theme="halloween" className="max-w-7xl mx-auto px-8 py-24">
        <div className=" flex lg:items-start md:flex-row md:flex-nowrap flex-wrap flex-col">
          
          <div className="w-64 flex-shrink-0 md:mx-0 mx-auto text-center md:text-left">
            <p aria-current="page" className="flex gap-2 justify-center md:justify-start items-center" href="/#">
              <Image alt='brandcraft logo' className='' src={sheet} height={60} width={60} />
              <strong className="font-bold text-base md:text-lg">BRANDCRAFT</strong></p>
            <p className="mt-3 text-sm lg:text-base text-base-content/80"> Fueling Your Online Success</p>
            <p className="mt-3 link link-hover text-sm lg:text-base text-base-content/80"> +91 6263965062</p>
            <p href="mailto:marc@shipfa.st" target="_blank" rel="noreferrer" className=" link link-hover mt-3 text-sm lg:text-base text-base-content/80"> contact@brandcraft.com</p>
            <p className="mt-3 text-sm lg:text-base text-base-content/60">Copyright © 2023 - All rights reserved</p>
          </div>

          <div className="flex-grow flex flex-wrap md:pl-24 -mb-10 md:mt-0 mt-10 text-center">
            <div className="lg:w-1/3 md:w-1/2 w-full px-4">
              <div className="footer-title font-semibold text-base-content tracking-widest text-sm lg:text-base md:text-left mb-3">Services</div>

              <div className="flex flex-col justify-center items-center md:items-start gap-2 mb-10 text-sm lg:text-base">
                <p className="link link-hover" href="/index#pricing">Brand magnet</p>
                <a className="link link-hover" href="/license">Website development </a><a className="link link-hover" href="/docs">Seo</a>
                <a href="mailto:marc@shipfa.st" target="_blank" className="link link-hover" rel="noreferrer">Digital Marketing</a>
                <a href="https://affiliates.reflio.com/invite/shipfast" target="_blank" className="link link-hover" rel="noreferrer">Affiliates — Earn 35%</a></div>
            </div>

            <div className="lg:w-1/3 md:w-1/2 w-full px-4">
              <div className="footer-title font-semibold text-base-content tracking-widest text-sm lg:text-base md:text-left mb-3">LEGAL</div>

              <div className="flex flex-col justify-center items-center md:items-start gap-2 mb-10 text-sm lg:text-base"><a className="link link-hover" href="/tos">Terms of services</a><a className="link link-hover" href="/privacy-policy">Privacy policy</a></div>
            </div>

            <div className="lg:w-1/3 md:w-1/2 w-full px-4 space-y-4">
              <p className="font-medium text-sm lg:text-base">We build together and support makers on Discord!</p>
              <button className="btn text-white bg-[#7289da] hover:bg-[#596dac] active:bg-[#596dac text-sm]lg: btn-base" title="Join Discord community"><svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 " fill="currentColor" viewBox="0 0 16 16">
                <path d="M13.545 2.907a13.227 13.227 0 0 0-3.257-1.011.05.05 0 0 0-.052.025c-.141.25-.297.577-.406.833a12.19 12.19 0 0 0-3.658 0 8.258 8.258 0 0 0-.412-.833.051.051 0 0 0-.052-.025c-1.125.194-2.22.534-3.257 1.011a.041.041 0 0 0-.021.018C.356 6.024-.213 9.047.066 12.032c.001.014.01.028.021.037a13.276 13.276 0 0 0 3.995 2.02.05.05 0 0 0 .056-.019c.308-.42.582-.863.818-1.329a.05.05 0 0 0-.01-.059.051.051 0 0 0-.018-.011 8.875 8.875 0 0 1-1.248-.595.05.05 0 0 1-.02-.066.051.051 0 0 1 .015-.019c.084-.063.168-.129.248-.195a.05.05 0 0 1 .051-.007c2.619 1.196 5.454 1.196 8.041 0a.052.052 0 0 1 .053.007c.08.066.164.132.248.195a.051.051 0 0 1-.004.085 8.254 8.254 0 0 1-1.249.594.05.05 0 0 0-.03.03.052.052 0 0 0 .003.041c.24.465.515.909.817 1.329a.05.05 0 0 0 .056.019 13.235 13.235 0 0 0 4.001-2.02.049.049 0 0 0 .021-.037c.334-3.451-.559-6.449-2.366-9.106a.034.034 0 0 0-.02-.019Zm-8.198 7.307c-.789 0-1.438-.724-1.438-1.612 0-.889.637-1.613 1.438-1.613.807 0 1.45.73 1.438 1.613 0 .888-.637 1.612-1.438 1.612Zm5.316 0c-.788 0-1.438-.724-1.438-1.612 0-.889.637-1.613 1.438-1.613.807 0 1.451.73 1.438 1.613 0 .888-.631 1.612-1.438 1.612Z"></path></svg>Join us</button>
            </div>
          </div>
        </div>
      </div>


    </>
  )
}

export default Footer