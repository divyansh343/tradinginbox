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
      <video className='vid' src="https://res.cloudinary.com/the-social-charts/video/upload/v1692876860/Video_2023_08_24_16_40_19_qwsty8.mp4" autoPlay loop muted />
      <div className="content ">
        <h1 className='text-3xl lg:text-5xl font-extrabold mt-50 px-5'>
          Aperture Studios
        </h1>
        <div className='pt-50'>
          <p className='text-base lg:text-lg font-extrabold px-5'>Unleash the Power of Conversion with </p>
        </div>
      </div>
    </div>
  )
}

export default Hero