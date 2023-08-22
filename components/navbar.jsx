import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

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
      {/* <header className="sticky top-0 bg-base-100/80 backdrop-blur shadow z-40"> */}
      <header className="sticky top-0 bg-base-100 backdrop-blur -pb-1 shadow z-40">
        <div className="flex justify-between gap-12 lg:gap-20 max-w-7xl mx-auto px-4 py-3">
          <a aria-current="page" className="flex gap-2 items-center hover:bg-base-200 rounded">

            <div aria-current="page" aria-label="Homepage" className="flex-0 btn btn-ghost px-2" data-svelte-h="svelte-pw6yxt">
              {/* <svg width="32" height="32" viewBox="0 0 415 415" xmlns="http://www.w3.org/2000/svg"><rect x="82.5" y="290" width="250" height="125" rx="62.5" fill="#1AD1A5"></rect><circle cx="207.5" cy="135" r="130" fill="black" fillOpacity=".3"></circle><circle cx="207.5" cy="135" r="125" fill="white"></circle><circle cx="207.5" cy="135" r="56" fill="#FF9903"></circle></svg>  */}
              <div className="font-title inline-flex text-lg md:text-3xl"><span className="lowercase">Brand</span> <span className="lowercase text-secondary">Kraft</span>
              </div>
            </div>

            {/* <strong className="font-semibold tracking-tight text-base md:text-lg">MakeLanding</strong> */}
          </a>
          <div className="flex-1 hidden md:flex items-center justify-start gap-3 lg:gap-12 text-sm">
            {/* <a className="link link-hover text-base-content-secondary font-medium" >Examples</a> */}
       {/*    <a className="link link-hover text-base-content-secondary font-medium" >Pricing</a> */}
            <a className="link link-hover text-lg-content-secondary font-medium" >Web Development</a>
            <a className="link link-hover text-lg-content-secondary font-medium" >SEO Solutions</a>
            <a className="link link-hover text-lg-content-secondary font-medium" >Ads Solutions</a>
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
          <div className="space-x-4 hidden md:block">
            <a className="btn btn-sm btn-neutral" href="/app/dashboard">Login</a>
            <a className="btn btn-gradient text-white font-normal btn-sm" href="/app/new">Make site</a>
          </div>
          <div className="md:hidden">
            <a className="btn btn-gradient text-white font-normal btn-sm" href="/app/new">Make site</a>
          </div>
        </div>
      </header>
    </>
  )
}

export default Navbar