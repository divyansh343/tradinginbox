import React from 'react'
import { Parallax, Background } from 'react-parallax';
import sheet from '../assets/images/wide3.jpeg'
const Para = () => {
  return (
    <div>
      <Parallax
        bgImage
        bgImageAlt="the dog"
        strength={300}
      >
        {/* Blur transition from min to max */}
      </Parallax>
    </div>
  )
}

export default Para