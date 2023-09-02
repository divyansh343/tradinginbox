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
      <header className="sticky top-0 bg-base-100 backdrop-blur -pb-1 shadow z-40">
        <div className="flex justify-between gap-12 lg:gap-20 max-w-7xl mx-auto px-4 py-2 md:py-3">
          <Link href="/">
            <a aria-current="page" className="flex gap-2 items-center hover:bg-base-200 rounded">
              <div aria-current="page" aria-label="Homepage" className="flex-0 btn btn-ghost px-2" data-svelte-h="svelte-pw6yxt">
                {/* <svg width="32" height="32" viewBox="0 0 415 415" xmlns="http://www.w3.org/2000/svg"><rect x="82.5" y="290" width="250" height="125" rx="62.5" fill="#1AD1A5"></rect><circle cx="207.5" cy="135" r="130" fill="black" fillOpacity=".3"></circle><circle cx="207.5" cy="135" r="125" fill="white"></circle><circle cx="207.5" cy="135" r="56" fill="#FF9903"></circle></svg> */}
                <div className="font-title inline-flex text-lg  md:text-2xl"><span className="lowercase">Brand</span> <span className="normal-case text-secondary">Craft</span>
                </div>
              </div>
              {/* <strong className="font-semibold tracking-tight text-base md:text-lg">MakeLanding</strong> */}
            </a>
          </Link>
          <div className="flex-1 hidden md:flex items-center justify-start gap-3 lg:gap-12 text-sm">
            {/* <a className="link link-hover text-base-content-secondary font-medium" >Examples</a> */}
            {/*    <a className="link link-hover text-base-content-secondary font-medium" >Pricing</a> */}
            <a className="link link-hover text-md  font-medium" >Web Development</a>
            <a className="link link-hover text-md  font-medium" >SEO Solutions</a>
            <a className="link link-hover text-md  font-medium" >Ads Solutions</a>
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
          <div className="space-x-4 mt-2 hidden md:block">
            {/* <a className="btn btn-sm btn-neutral" href="/app/dashboard">Login</a> */}
            <a className="btn bg-gradient-to-r from-primary  to-secondary normal-case text-white font-normal btn-sm" href="/app/new">Contact</a>
          </div>
          <div className="md:hidden mt-2">
            {/* <select value={etheme} onChange={handleChange}
            className="select select-sm select-primary w-full max-w-xs mx-1">
            <option disabled selected>Choose Theme?</option>
            {options.map((option) => (
              <>
                <option value={option.value}>{option.label}</option>
              </>
            ))}
          </select> */}
            <a className="btn bg-gradient-to-r from-primary  to-secondary normal-case text-white font-normal btn-sm" href="/app/new">Contact</a>
          </div>
        </div>
      </header>
    </>
  )
}

export default Navbar