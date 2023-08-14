import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { FaTelegram } from 'react-icons/fa';

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
      label: "corporate",
      value: "corporate",
    },
    {
      label: "garden",
      value: "garden",
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
      label: "Cyberpunk",
      value: "cyberpunk",
    },
    {
      label: "halloween",
      value: "halloween",
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
      <div className="navbar bg-base-100">

        <div aria-current="page" aria-label="Homepage" className="flex-0 btn btn-ghost px-2" data-svelte-h="svelte-pw6yxt"><svg width="32" height="32" viewBox="0 0 415 415" xmlns="http://www.w3.org/2000/svg"><rect x="82.5" y="290" width="250" height="125" rx="62.5" fill="#1AD1A5"></rect><circle cx="207.5" cy="135" r="130" fill="black" fillOpacity=".3"></circle><circle cx="207.5" cy="135" r="125" fill="white"></circle><circle cx="207.5" cy="135" r="56" fill="#FF9903"></circle></svg> <div className="font-title inline-flex text-lg md:text-2xl"><span className="lowercase">brand</span> <span className="uppercase text-[#1AD1A5]">Kraft</span></div>
        </div>
        <div className="flex-1">
          <Link href="/">
            <div className="btn btn-ghost normal-case text-lg lg:text-lg font-semibold tracking-wide">
              <span className='mx-1'>
                {/* Crypto */}
                {/* <Image src={power} height={25} width={25} alt="" /> */}
              </span>
              {/* {isMobile ? "/" : "Suprr.link/"} */}

              {/* <span className='text-primary pl-1 tracking-wide text-xl'> K Crypto 🔺</span> */}
              <span className='hidden md:block mx-[2px] text-primary saturate-150 font-medium tracking-wide'>
                {/* <TextTransition springConfig={presets.gentle}>
                  {"/" + TEXTS[index % TEXTS.length]}
                </TextTransition> */}
              </span>

            </div>
          </Link>
        </div>
        <div className="navbar-end">
          <select  value={etheme} onChange={handleChange}
            className="select select-sm select-primary w-full max-w-xs mx-1">
            <option disabled selected>Choose Theme?</option>
            {options.map((option) => (
              <>
                <option value={option.value}>{option.label}</option>
              </>
            ))}

          </select>

          {/* <div className="btn font-normal text-base btn-primary btn-sm normal-case mx-1">
            <span className={`px-1 inline-block text-blue-500  `}><FaTelegram /></span>
            Join Now</div> */}
          {/* <Link href="/register">
            <button className="btn font-normal text-base btn-primary btn-sm normal-case">Sign up</button>
          </Link> */}
        </div>
      </div>
    </>
  )
}

export default Navbar