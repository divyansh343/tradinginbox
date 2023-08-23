import Image from 'next/image'
import React from 'react'
import myImg from '../../assets/images/portraits/myimg.jpg'

const Label = () => {
  return (
    <>
      <div className="fixed left-4 bottom-4 md:left-8 md:bottom-8 bg-gradient-to-r from-primary  to-secondary text-white flex justify-center items-center z-50 rounded-2xl shadow-xl p-1.5 md:px-4 md:py-2"><a className="flex items-center justify-start gap-2 md:gap-3 cursor-pointer select-none group md:justify-center md:flex-1" href="https://www.producthunt.com/posts/workbookpdf/" target="_blank" rel="noreferrer"> 
      {/* <Image
      className='rounded'
        alt='divyansh'
        height="25"
        src={myImg}
        width="25"
      >
      </Image> */}
      <div className="hidden md:block leading-tight md:leading-normal"><p className="font-medium">
        Were live on 
        <span className="underline underline-offset-2 decoration-2 pl-1 group-hover:decoration-4 duration-200">Product Hunt</span> now!</p>
        
        <p className="text-sm opacity-90">Woud love to Hear 🫶</p></div></a></div>
    </>
  )
}

export default Label