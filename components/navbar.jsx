import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import cm from '../assets/images/cm2.jpg'

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
      <header className="sticky top-0 bg-base-100 backdrop-blur shadow z-40">
        <div className="flex justify-between gap-12 lg:gap-20 max-w-7xl mx-auto px-4 py-3">
          <div  aria-current="page" className="flex gap-2 items-center  hover:bg-base-200 rounded">

            <div aria-current="page" aria-label="Homepage" className="flex-0 curvy btn btn-ghost px-2" data-svelte-h="svelte-pw6yxt">
             <div  className="font-title inline-flex text-2xl md:text-3xl"><span className="normal-case">Charterd</span> <span  className="uppercase text-primary">Media</span>
              </div>
              {/* <Image alt='' src={cm} className=" aspect-auto  w-full border-2 md:border-4 border-base-content/20" width="150" height="50">

              </Image> */}
            </div>

          </div>
          <div className="flex-1 hidden md:flex items-center justify-start gap-4 lg:gap-12 text-sm">

            <a className="link link-hover text-base-content-secondary font-medium" >How it works</a>
            <a className="link link-hover text-base-content-secondary font-medium" >Reviews</a>

          </div>
          <div className="space-x-4 hidden md:block">
            {/* <a className="btn btn-sm btn-neutral" href="/app/dashboard">Login</a>
            <a className="btn btn-gradient btn-sm" href="/app/new">Make site</a> */}
            <select value={etheme} onChange={handleChange}
              className="select select-sm select-primary w-full max-w-xs mx-1">
              <option disabled selected>Choose Theme?</option>
              {options.map((option) => (
                <>
                  <option value={option.value}>{option.label}</option>
                </>
              ))}
            </select>
          </div>
          <div className="md:hidden">
            {/* <a className="btn btn-gradient btn-sm" href="/app/new">Make site</a> */}
            <select value={etheme} onChange={handleChange}
              className="select select-sm select-primary w-full max-w-xs mx-1">
              <option disabled selected>Choose Theme?</option>
              {options.map((option) => (
                <>
                  <option value={option.value}>{option.label}</option>
                </>
              ))}
            </select>
          </div>
        </div>
      </header>

    </>
  )
}

export default Navbar