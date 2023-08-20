import Image from 'next/image'
import Link from 'next/link'
import React, { useEffect, useState } from 'react'
import cm from '../assets/images/cm2.jpg'
import { BsFillMoonFill, BsFillSunFill, BsMoonFill } from 'react-icons/bs';
import TextTransition, { presets } from "react-text-transition";

const Navbar = ({ etheme, handleChange, settheme }) => {
  const [index, setIndex] = useState(0);
  const TEXTS = [
    "CharterdMedia",
    "Influencer Marketing Agency",
  ];
  useEffect(() => {
    const intervalId = setInterval(() =>
      setIndex(index => index + 1),
      4000 // every 3 seconds
    );
    return () => clearTimeout(intervalId);
  }, []);
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
      <header className="sticky top-0 -mt-1 bg-base-100 backdrop-blur border-b-secondary  shadow z-40">
        <div className="flex justify-between gap-12 lg:gap-20 max-w-7xl mx-auto px-4 py-3">
          <div aria-current="page" className="flex gap-2 items-center  hover:bg-base-200 rounded">
            <Link href="/">
              <div aria-current="page" aria-label="Homepage" className="flex-0  btn btn-ghost px-2" data-svelte-h="svelte-pw6yxt">
                <div className="font-title inline-flex text-xl md:text-2xl ">
                  {/* <span className="normal-case">Charterd</span> <span className="normal-case  text-blue-500  ">Media</span> */}
                  <span className='normal-case text-lg'>
                    <TextTransition springConfig={presets.gentle}>
                      {TEXTS[index % TEXTS.length]}
                    </TextTransition>
                  </span>
                </div>
                {/* <Image alt='' src={cm} className=" aspect-auto  w-full border-2 md:border-4 border-base-content/20" width="150" height="50">

</Image> */}
              </div>
            </Link>

          </div>
          <div className="flex-1 hidden md:flex items-center justify-end gap-4 lg:gap-12 text-md">

            <a href='#service' className="link link-hover text-base-content-secondary font-medium" >Services</a>
            <a  href='#collab' className="link link-hover text-base-content-secondary font-medium" >Collabrations</a>
            <a href='#influencers' className="link link-hover text-base-content-secondary font-medium" >Influencers</a>
            <a  href='#contact' className="link link-hover text-base-content-secondary font-medium" >Contact</a>

          </div>
          <div className="space-x-4 hidden md:block">
            {/* <a className="btn btn-sm btn-neutral" href="/app/dashboard">Login</a>
            <a className="btn btn-gradient btn-sm" href="/app/new">Make site</a> */}
            {/* <select value={etheme} onChange={handleChange}
              className="select select-sm select-primary w-full max-w-xs mx-1">
              <option disabled selected>Choose Theme?</option>
              {options.map((option) => (
                <>
                  <option value={option.value}>{option.label}</option>
                </>
              ))}
            </select> */}
            <label className="swap swap-rotate p-3">

              {/* <!-- this hidden checkbox controls the state --> */}
              <input onChange={etheme === "lofi" ? () => settheme("forest") : () => settheme("lofi")} type="checkbox" />
              <span className='swap-on text-2xl text-primary'>
                <BsFillSunFill />
              </span>

              {/* <!-- moon icon --> */}
              <span className='swap-off text-xl text-primary'>
                <BsMoonFill />
              </span>
            </label>
          </div>
          <div className="md:hidden">
            {/* <a className="btn btn-gradient btn-sm" href="">Contact</a> */}
            {/* <select value={etheme} onChange={handleChange}
              className="select select-sm select-primary w-full max-w-xs mx-1">
              <option disabled selected>Choose Theme?</option>
              {options.map((option) => (
                <>
                  <option value={option.value}>{option.label}</option>
                </>
              ))}
            </select> */}
            <label className="swap swap-rotate p-2 mx-2">

              {/* <!-- this hidden checkbox controls the state --> */}
              <input onChange={etheme === "lofi" ? () => settheme("forest") : () => settheme("lofi")} type="checkbox" />
              <span className='swap-on text-2xl text-primary'>
                <BsFillSunFill />
              </span>

              {/* <!-- moon icon --> */}
              <span className='swap-off text-xl text-primary'>
                <BsMoonFill />
              </span>
            </label>
          </div>
        </div>
      </header>

    </>
  )
}

export default Navbar