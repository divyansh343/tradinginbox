import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { useState, useEffect } from 'react'
import ReactTypingEffect from 'react-typing-effect'
import TextTransition, { presets } from "react-text-transition";

const Hero = () => {
  const [index, setIndex] = useState(0);
  const TEXTS = [
    "Capturing Moments",
    "Crafting Stories",
  ];
  useEffect(() => {
    const intervalId = setInterval(() =>
      setIndex(index => index + 1),
      2000 // every 3 seconds
    );
    return () => clearTimeout(intervalId);
  }, []);
  return (
    <div className='main -mt-20'>
      <div className="overlay"></div>
      <video className='vid' src="https://res.cloudinary.com/the-social-charts/video/upload/v1693121720/ss2_zjqdo7.mp4" autoPlay loop muted />
      <div className="content pb-10">
        <div className='py-3'>
          <p className='text-md text-[#c0c0c0] lg:text-md  drop-shadow-2xl px-5'>Filmmaker & Photographer</p>
        </div>
        <h1 className='text-3xl md:text-5xl tracking-wide drop-shadow-2xl font-semibold mb-4 px-5'>
          <TextTransition springConfig={presets.gentle}>
            {TEXTS[index % TEXTS.length]}
          </TextTransition>
        </h1>
        <div className='pb-5 '>
          <p className='text-md text-[#c0c0c0] lg:text-md  drop-shadow-2xl px-5'>Your Transforming Your Unique Vision into Reality Through Our Expert Lens</p>
        </div>
      </div>
    </div>
  )
}

export default Hero