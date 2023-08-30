import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { useState, useEffect } from 'react'
import ReactTypingEffect from 'react-typing-effect'
import TextTransition, { presets } from "react-text-transition";

const Hero = () => {
  // const [index, setIndex] = useState(0);
  // const TEXTS = [
  //   "Web Development",
  //   "Seo Works",
  // ];
  // useEffect(() => {
  //   const intervalId = setInterval(() =>
  //     setIndex(index => index + 1),
  //     2000 // every 3 seconds
  //   );
  //   return () => clearTimeout(intervalId);
  // }, []);
  return (
    <div className='main'>
    <div className="overlay"></div>
    <video className='vid' src="https://res.cloudinary.com/the-social-charts/video/upload/v1693121720/ss2_zjqdo7.mp4" autoPlay loop muted />
    <div className="content ">
      <h1 className='text-3xl md:text-6xl tracking-wide drop-shadow-2xl font-semibold px-5'>
      Apperture Studios
      </h1>
      <div className='py-5'>
        <p className='text-md text-[#c0c0c0] lg:text-md  drop-shadow-2xl px-5'>Photographer & Filmmaker</p>
      </div>
    </div>
  </div>
  )
}

export default Hero