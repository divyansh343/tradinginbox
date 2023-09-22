import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import pointy from '../../assets/images/pointy.png'
import { useState, useEffect } from 'react'
import ReactTypingEffect from 'react-typing-effect'
import TextTransition, { presets } from "react-text-transition";

const Hero = () => {
  // const [index, setIndex] = useState(0);
  // const TEXTS = [
  //   "Web Development",
  //   "Seo",
  //   "Online marketing",
  // ];
  // useEffect(() => {
  //   const intervalId = setInterval(() =>
  //     setIndex(index => index + 1),
  //     2000 // every 3 seconds
  //   );
  //   return () => clearTimeout(intervalId);
  // }, []);


  return (
    <>

{/* <div className='main'>
      <div className="overlay"></div>
      <video className='vid' src="https://res.cloudinary.com/the-social-charts/video/upload/v1692619781/-klI7zU73jD75DOy_vbnjls.mp4" autoPlay loop muted />
      <div className="content">
        <h1 className='text-3xl font-["Poppins"] text-white drop-shadow-2xl lg:text-7xl font-extrabold px-5'>
          One Stop Solution!
          <TextTransition className='mt-3' springConfig={presets.gentle}>
            {TEXTS[index % TEXTS.length]}
          </TextTransition>
        </h1>
        <div className='pt-10'>
          <p className='text-3xl lg:text-5xl text-white  border-b-2 drop-shadow font-extrabold px-5'>✨Unlock your digital Potentional</p>
        </div>
      </div>
    </div> */}

<section className="bg-blue-200/10">
    <div className="grid max-w-screen-xl px-6 md:px-20 pt-10 pb-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12 lg:pt-28">
        <div className="mr-auto place-self-center lg:col-span-7">
            <h1
                className="max-w-2xl mb-4 text-4xl font-extrabold leading-none tracking-tight md:text-5xl xl:text-6xl dark:text-white">
                Building digital <br />products &amp; brands.
            </h1>

            <p className="max-w-2xl mb-6 font-light text-gray-500 lg:mb-8 md:text-lg lg:text-xl dark:text-gray-400">This
                free and open-source landing page template was built using the utility classes from
                <a target="_blank" className="hover:underline">Tailwind CSS</a> and based on the
                components from the <a href="#/" className="hover:underline" target="_blank">Flowbite Library</a> and the
                <a href="https://flowbite.com/blocks/" target="_blank" className="hover:underline" rel="noreferrer">Blocks System</a>.
            </p>

            <div className="space-y-4 sm:flex sm:space-y-0 sm:space-x-4">

                <a href="https://github.com/themesberg/landwind" target="_blank"
                    className="inline-flex items-center justify-center w-full px-5 py-3 text-sm font-medium text-center text-gray-900 border border-gray-200 rounded-lg sm:w-auto hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 dark:text-white dark:border-gray-700 dark:hover:bg-gray-700 dark:focus:ring-gray-800" rel="noreferrer">
                    <svg className="w-4 h-4 mr-2 text-gray-500 dark:text-gray-400" xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 496 512">
                        <path
                            d="M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3.3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5.3-6.2 2.3zm44.2-1.7c-2.9.7-4.9 2.6-4.6 4.9.3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3.7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3.3 2.9 2.3 3.9 1.6 1 3.6.7 4.3-.7.7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3.7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3.7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z">
                        </path>
                    </svg> View on GitHub
                </a>

                <a href="https://www.figma.com/community/file/1125744163617429490" target="_blank"
                    className="inline-flex items-center justify-center w-full px-5 py-3 mb-2 mr-2 text-sm font-medium text-gray-900 bg-blue-600/60 border border-gray-200 rounded-lg sm:w-auto focus:outline-none hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-200" rel="noreferrer">

                    <svg className="w-4 h-4 mr-2" id="Layer_1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 300"
                        width="1667" height="2500">
                        
                        <title>Figma.logo</title>
                        <desc>Created using Figma</desc>
                        <path id="path0_fill" className="st0"
                            d="M50 300c27.6 0 50-22.4 50-50v-50H50c-27.6 0-50 22.4-50 50s22.4 50 50 50z"></path>
                        <path id="path1_fill" className="st1"
                            d="M0 150c0-27.6 22.4-50 50-50h50v100H50c-27.6 0-50-22.4-50-50z"></path>
                        <path id="path1_fill_1_" className="st2"
                            d="M0 50C0 22.4 22.4 0 50 0h50v100H50C22.4 100 0 77.6 0 50z"></path>
                        <path id="path2_fill" className="st3" d="M100 0h50c27.6 0 50 22.4 50 50s-22.4 50-50 50h-50V0z">
                        </path>
                        <path id="path3_fill" className="st4"
                            d="M200 150c0 27.6-22.4 50-50 50s-50-22.4-50-50 22.4-50 50-50 50 22.4 50 50z"></path>
                    </svg>
                    Get Figma file
                </a>

            </div>
        </div>

        <div className="mt-5 lg:mt-0 lg:col-span-5 flex">
          <Image src={pointy} height={600} weight={600} alt='hero image' />
            {/* <img src="https://demo.themesberg.com/landwind/images/hero.png" alt="hero image"> */}
        </div>

    </div>
</section>
     
    </>
  )
}


export default Hero