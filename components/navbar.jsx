import Image from 'next/image'
import Link from 'next/link'
import React, { useEffect, useState } from 'react'
import sheet from '../assets/images/sign.png'

const Navbar = ({ etheme, handleChange }) => {
  // const [nav, setnav] = useState("bg-opacity-0")

  // const listenScrollEvent = () => {
  //     window.scrollY > 300
  //       ? setnav("hidden")
  //       : setnav("bg-opacity-0")
  //   }
  // useEffect(() => {
  //   window.addEventListener("scroll", listenScrollEvent)
  // })


  return (
    <>
      {/* <header className="sticky top-0 bg-base-100/80 backdrop-blur shadow z-40"> */}
      <header className={` top-0 backdrop-blur-none cursor-pointer -mt-3 z-40 `}>
        <div className="flex justify-between gap-12 lg:gap-20 max-w-7xl mx-auto px-4  lg:py-1">
          <Link href="/">
            <a aria-current="page" className="flex gap-2 items-center rounded">
              <div aria-current="page" aria-label="Homepage" className="flex-0  px-2" data-svelte-h="svelte-pw6yxt">
                <Image alt='' src={sheet} className=" aspect-square w-full sm:w-[26rem] border-2 md:border-4 border-base-content/20" width="80" height="80">
                </Image>
                {/* <svg width="32" height="32" viewBox="0 0 415 415" xmlns="http://www.w3.org/2000/svg"><rect x="82.5" y="290" width="250" height="125" rx="62.5" fill="#1AD1A5"></rect><circle cx="207.5" cy="135" r="130" fill="black" fillOpacity=".3"></circle><circle cx="207.5" cy="135" r="125" fill="white"></circle><circle cx="207.5" cy="135" r="56" fill="#FF9903"></circle></svg>  */}
                {/* <div className="font-title inline-flex font-normal text-base-100 text-lg md:text-3xl"><span className="lowercase">apperture</span> <span className="lowercase text-base-100"></span>
              </div> */}
              </div>

              {/* <strong className="font-semibold tracking-tight text-base md:text-lg">MakeLanding</strong> */}
            </a>
          </Link>
          <div className="flex-1 hidden md:flex items-center cursor-pointer  justify-end gap-3 lg:gap-12 text-base">
            {/* <a className="link text-base-content-secondary text-lg" >Examples</a> */}
            {/*    <a className="link text-base-content-secondary text-lg" >Pricing</a> */}
            <a className=" hover:opacity-25 cursor-pointer text-base-100 text-lg" >
              Business areas
            </a>
            <a className=" hover:opacity-25 cursor-pointer text-base-100 text-lg" >Gear cage</a>
            <a className=" hover:opacity-25 cursor-pointer text-base-100 text-lg" >contact</a>
            {/* <select value={etheme} onChange={handleChange}
            className="select select-sm select-primary w-full max-w-xs mx-1">
            <option disabled selected>Choose Theme?</option>
            {options.map((option) => (
              <>
                <option value={option.value}>{option.label}</option>
              </>
            ))}
          </select> */}
          </div>

          <div className="=">
            {/* <a className="btn mt-6 text-black font-normal bg-white rounded-2xl tracking-wider btn-sm">Contact</a> */}
          </div>
        </div>
      </header>
    </>
  )
}

export default Navbar