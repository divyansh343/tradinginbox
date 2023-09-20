import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { useState, useEffect } from 'react'
import ReactTypingEffect from 'react-typing-effect'
import TextTransition, { presets } from "react-text-transition";

const Hero = () => {
  const [index, setIndex] = useState(0);
  const TEXTS = [
    "Web Development",
    "Seo",
    "Online marketing",
  ];
  useEffect(() => {
    const intervalId = setInterval(() =>
      setIndex(index => index + 1),
      2000 // every 3 seconds
    );
    return () => clearTimeout(intervalId);
  }, []);


  return (
    <>

<div className='main'>
      <div className="overlay "></div>
      <video className='vid' src="https://res.cloudinary.com/the-social-charts/video/upload/v1692619781/-klI7zU73jD75DOy_vbnjls.mp4" autoPlay loop muted />
      <div className="content">
        <h1 className='text-3xl font-["Poppins"] text-white drop-shadow-2xl lg:text-7xl font-extrabold px-5'>
          One Stop Solution!
          <TextTransition className='mt-3' springConfig={presets.gentle}>
            {TEXTS[index % TEXTS.length]}
          </TextTransition>
        </h1>
        <div className='pt-10'>
          <p className='text-3xl lg:text-5xl text-white  border-b-2 drop-shadow font-extrabold px-5'>Unlock your digital Potentional</p>
        </div>
      </div>
    </div>
     
    </>
  )
}


export default Hero