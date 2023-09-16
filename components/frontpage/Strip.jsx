import React from 'react'

const Strip = () => {
  return (
    // <div className="flex sm:flex-wrap justify-center flex-grow h-32 px-4 bg-[#a01ed1]">
    //   <div className='pt-10'>
    //    <h2 className='font-extrabold text-lg  sm:text-3xl cursor-pointer text-white hover:drop-shadow-lg'>
    //     Fuel My Brand&apos;s Journey 
    //     </h2>
    //   </div>
    //   <div className='pt-10'>
    //    <h2 className='font-extrabold text-lg  sm:text-3xl cursor-pointer text-white hover:drop-shadow-lg'>
    //     <span className='text-secondary mr-5'>
    //     </span>
    //      +91 6263965062</h2>
    //   </div>
    // </div>
    <>
      <div className="text-center bg-primary text-white py-5">
        <p className="md:text-lg opacity-90 mb-2">Need Assistance! 👋🏻 Say Hello</p>
        <h2 className="font-bold text-4xl md:text-4xl
     hover:underline  cursor-pointer  md:mb-2">
          626-396-5062
        </h2>
        <h2 className="text-xl 
      hover:underline tracking-wide  cursor-pointer ">
          contact@brandcraft.com
        </h2>
      </div>
    </>
  )
}

export default Strip