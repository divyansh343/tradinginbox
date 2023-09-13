import Image from 'next/image'
import React from 'react'
import myImg from '../../assets/images/portraits/myimg.jpg'

const Label = () => {
  return (
    <>
      {/* <a  className="fixed bottom-0 right-0 bg-base-200 py-2 px-4 z-50 cursor-pointer rounded-tl-xl border-t border-l border-base-content/20  border-dashed text-xs font-semibold hover:bg-base-200 duration-200 group" href="https://suprr.link/divyansh" target="_blank" rel="noreferrer"><div className="flex flex-row justify-center items-center text-center gap-1.5"><div>By <span className="link link-primary">Divyansh</span></div><div className="avatar -mt-1 -mb-1"><div className="relative w-7 rounded-full group-hover:rotate-12 group-hover:scale-110 duration-300">
          <Image
          
            alt='divyansh'
            height="250"
            src={myImg}
            width="250"
          >
          </Image>
        </div></div></div></a> */}

      <div className="fixed left-4 bottom-4 md:left-8 bg-gradient-to-r from-primary  to-secondary text-white flex justify-center items-center z-50 rounded-2xl shadow-xl p-1.5 md:px-4 md:py-2"><a className="flex items-center justify-start gap-2 md:gap-3 cursor-pointer select-none group md:justify-center md:flex-1" href="https://www.producthunt.com/posts/workbookpdf/" target="_blank" rel="noreferrer"> 
      {/* <Image
      className='rounded'
        alt='divyansh'
        height="25"
        src={myImg}
        width="25"
      >
      </Image> */}
      <div className="hidden md:block leading-tight md:leading-normal"><p className="font-medium">
       Get 
        <span className="underline underline-offset-2 decoration-2 pl-1 group-hover:decoration-4 duration-200">Free Consultation</span>
         </p>
        
        {/* <p className="text-sm opacity-90">Woud love to Hear 🫶</p> */}
        </div></a></div>
    </>
  )
}

export default Label