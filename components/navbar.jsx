import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import sheet from '../assets/images/bcraft.png'

const Navbar = ({ etheme, handleChange }) => {

  const options = [
    {
      label: "Light",
      value: "light",
    },
    {
      label: "Dark",
      value: "dark",
    },
    {
      label: "Cupcake",
      value: "cupcake",
    },
    {
      label: "bumblebee",
      value: "bumblebee",
    },
    {
      label: "emerald",
      value: "emerald",
    },
    {
      label: "corporate",
      value: "corporate",
    },
    {
      label: "retro",
      value: "retro",
    },
    {
      label: "valentine",
      value: "valentine",
    },
    {
      label: "garden",
      value: "garden",
    },
    {
      label: "pastel",
      value: "pastel",
    },
    {
      label: "aqua",
      value: "aqua",
    },

    {
      label: "fantasy",
      value: "fantasy",
    },
    {
      label: "cmyk",
      value: "cmyk",
    },
    {
      label: "acid",
      value: "acid",
    },
    {
      label: "Cyberpunk",
      value: "cyberpunk",
    },
    {
      label: "halloween",
      value: "halloween",
    },
    {
      label: "coffee",
      value: "coffee",
    },

    {
      label: "luxury",
      value: "luxury",
    },
    {
      label: "dracula",
      value: "dracula",
    },
    {
      label: "night",
      value: "night",
    },
    {
      label: "black",
      value: "black",
    },
    {
      label: "lemonade",
      value: "lemonade",
    },
    {
      label: "autumn",
      value: "autumn",
    },
    {
      label: "forest",
      value: "forest",
    },
    {
      label: "business",
      value: "business",
    },
    {
      label: "Winter",
      value: "winter",
    },
    {
      label: "Wireframe",
      value: "wireframe",
    },
    {
      label: "Lofi",
      value: "lofi",
    },
    {
      label: "Neon",
      value: "synthwave",
    },
  ];
  return (
    <>
      {/* <header className="sticky top-0 bg-base-[#fafaf7] backdrop-blur shadow z-40"> */}
      <header className="sticky top-0 bg-blue-100/40 backdrop-blur  z-40">
        <div className="flex justify-between gap-12 lg:gap-20 max-w-7xl mx-auto px-4 py-3 md:py-3">
          <Link href="/">
            <a aria-current="page" className="flex gap-2 items-center hover:bg-base-200 rounded">
              <div aria-current="page" aria-label="Homepage" className="flex-0 btn btn-ghost px-2" data-svelte-h="svelte-pw6yxt">
                {/* <svg width="32" height="32" viewBox="0 0 415 415" xmlns="http://www.w3.org/2000/svg"><rect x="82.5" y="290" width="250" height="125" rx="62.5" fill="#1AD1A5"></rect><circle cx="207.5" cy="135" r="130" fill="black" fillOpacity=".3"></circle><circle cx="207.5" cy="135" r="125" fill="white"></circle><circle cx="207.5" cy="135" r="56" fill="#FF9903"></circle></svg> */}
                <Image alt='brandstart logo' className='' src={sheet} height={35} width={35} />
                <div className="font-title inline-flex text-lg -ml-2 md:text-2xl"><span className="normal-case">Brand</span> <span className="normal-case text-primary">Start</span>
                </div>
              </div>
              {/* <strong className="font-semibold tracking-tight text-base md:text-lg">MakeLanding</strong> */}
            </a>
          </Link>
          <div className="flex-1 hidden lg:flex -ml-6 items-center justify-start lg:gap-8 text-sm">
            {/* <a className="link link-hover text--content-secondary font-medium " >Examples</a> */}
            {/*    <a className="link link-hover text--content-secondary font-medium " >Pricing</a> */}
            <Link href="/brand_magnet">
              <a className="link link-hover text-md text-base font-medium  cursor-pointer border-secondary" >✨Branding Magnet<span className="badge mx-1 badge-primary text-xs">New</span></a>
            </Link>
            <Link href="/web_development">
              <a className="link link-hover md:text-md text-base font-medium cursor-pointer" >Web Development</a>
            </Link>
            <Link href="/seo">
              <a className="link link-hover md:text-md text-base font-medium cursor-pointer" >SEO Solutions</a>
            </Link>
            <Link href="/digital_marketing">
              <a className="link link-hover md:text-md text-base font-medium cursor-pointer" >Ads Solutions</a>
            </Link>
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

          <div className=" mt-1 hidden lg:block">
            {/* <button data-tally-open="wA2MYD" data-tally-width="400" data-tally-emoji-text="👋" data-tally-emoji-animation="wave" className="btn bg-blue-600 hover:bg-primary normal-case text-white font-normal text-base tracking-base btn-md" href="tel:916263965062">Get  Free <span className='border-b-2 '> Consultation →</span></button> */}
            <button data-tally-open="wA2MYD" data-tally-width="400" data-tally-emoji-text="👋" data-tally-emoji-animation="wave" className="space-y-4"><button className="btn btn-primary group normal-case btn-wide text-base plausible-event-name=Checkout">Get Free Consultaion →</button></button>
          </div>
          <div className="lg:hidden ">
            <div className="dropdown dropdown-end">
              <label tabIndex={0} className="btn btn-ghost ">
                <div className="w-10 ">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h7" /></svg>
                </div>
              </label>
              {/* <img src="/images/stock/photo-1534528741775-53994a69daeb.jpg" /> */}
              <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                <li className='  '><Link href="/brand_magnet"><a className='text-lg'>Branding magent
                </a></Link></li>
                <li className=' '>
                  <Link href="/web_development">
                    <a className="justify-between text-lg">
                      Web devlopment

                    </a>
                  </Link>
                </li>
                <li className=' '><Link href="/seo"><a className='text-lg'>Seo Solutions</a></Link></li>
                <li className=' mb-1'><Link href="/digital_marketing"><a className='text-lg'>Digital marketing</a></Link></li>

                <li className='bg-gradient-to-r from-primary text-lg to-secondary text-white rounded-3xl'><button className='text-lg' data-tally-open="wA2MYD" data-tally-width="400" data-tally-emoji-text="👋" data-tally-emoji-animation="wave">Free consulation →</button></li>
              </ul>
            </div>
            {/* <Link href="/"> */}
            {/* <button data-tally-open="wA2MYD" data-tally-width="400" data-tally-emoji-text="👋" data-tally-emoji-animation="wave" className="btn normal-case text-white  bg-blue-600 hover:bg-primary font-normal btn-sm" ><span > 1 : 1 </span>Consultation</button> */}
            {/* </Link> */}
          </div>
        </div>
      </header>
    </>
  )
}

export default Navbar