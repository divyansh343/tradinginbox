import Image from 'next/image'
import React,{ useState } from 'react'
import myImg from '../../assets/images/portraits/myimg.jpg'

const Label = () => {
  const [show, setShow] = useState(0)
  return (
    <>

      {/* <div className="hidden md:flex fixed left-4 bottom-4 md:left-8 bg-gradient-to-r from-primary  to-secondary text-white justify-center items-center z-50 rounded-2xl shadow-xl p-1.5 md:px-4 md:py-1"><a className="flex items-center justify-start gap-2 md:gap-3 cursor-pointer select-none group md:justify-center md:flex-1" href="https://www.producthunt.com/posts/workbookpdf/" target="_blank" rel="noreferrer">
      
        <div className=" leading-tight md:leading-normal">

          <p className="font-medium"> <span className='animate-pulse'>👋🏻 </span>
            <button data-tally-open="wA2MYD" data-tally-width="400" data-tally-emoji-text="👋" data-tally-emoji-animation="wave" className="underline underline-offset-2 decoration-2 pl-1 group-hover:decoration-4 duration-200">Say Hello</button>
          </p>

          <p className="text-sm opacity-90">Woud love to Hear 🫶</p>
        </div></a></div> */}

      {/* For Mobile */}
      {show === 0 ? <> <div className="fixed inset-x-0 bottom-0 p-4 md:mx-44 lg:mx-80">
        <div
          className="relative flex items-center justify-between gap-4 rounded-3xl bg-gradient-to-r from-primary  to-secondary px-4 py-1 text-white shadow-lg"
        >
          <p className="text-sm md:text-base font-medium">
            <a href="#" className="inline-block mx-2 ">👋🏻Say Hello</a>
          <button data-tally-open="wA2MYD" data-tally-width="400" data-tally-emoji-text="👋" data-tally-emoji-animation="wave" className="underline underline-offset-2 decoration-2 pl-1 group-hover:decoration-4 duration-200">Get free consultation →</button>
          </p>

          <button
            aria-label="Close"
            className="shrink-0 rounded-lg bg-black/10 p-1 transition hover:bg-black/20"
            onClick={()=>setShow(1)}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                clipRule="evenodd"
              />
            </svg>
          </button>
        </div>
      </div></> : null}
     
    </>
  )
}

export default Label