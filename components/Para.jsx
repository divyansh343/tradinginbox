import React from 'react'
import { Parallax, Background } from 'react-parallax';
import sheet from '../assets/images/wide3.jpeg'
const Para = () => {
  return (
    <div>
      <Parallax
        blur={{ min: -15, max: 15 }}
        bgImage={sheet}
        bgImageAlt="the dog"
        strength={300}
      >
        {/* Blur transition from min to max */}
        <div style={{ height: '200px' }} />
      </Parallax>
    </div>
  )
}

export default Para