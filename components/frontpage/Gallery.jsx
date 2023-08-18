import Image from 'next/image'
import React from 'react'
import sheet from '../../assets/images/portraits/four.jpeg'

const Gallery = () => {
  return (
    <div className='px-5 lg:px-16'>
      <div className="text-center mb-20 space-y-4 md:space-y-6"><h2 className="text-4xl md:text-5xl  font-black leading-tight md:leading-tight">Real Stories, Real Brands, Real Impact</h2>
      {/* <p className="text-base-content-secondary">Unlock advanced features with the lifetime deal!</p> */}
      </div>
      <div className="projects grid grid-cols-2 gap-x-2 gap-y-1.5 md:grid-cols-4">
        <div className="project space-y-2" data-filter="branding">
          <a  className="flex">
            {/* <img class="h-full w-full object-cover" src="assets/images/portfolio-2/portfolio1.jpg" alt=""> */}
            <Image alt='' src={sheet} className="rounded-3xl aspect-square w-full sm:w-[26rem] border-2 md:border-4 border-base-content/20" width="500" height="500">

            </Image>
          </a>
          <a  className="flex">
            {/* <img class="h-full w-full object-cover" src="assets/images/portfolio-2/portfolio6.jpg" alt=""> */}
            <Image alt='' src={sheet} className="rounded-3xl aspect-square w-full sm:w-[26rem] border-2 md:border-4 border-base-content/20" width="500" height="500">

            </Image>
          </a>
        </div>
        <div className="project space-y-2" data-filter="designing">
          <a  className="flex">
            {/* <img class="h-full w-full object-cover" src="assets/images/portfolio-2/portfolio2.jpg" alt=""> */}
            <Image alt='' src={sheet} className="rounded-3xl aspect-square w-full sm:w-[26rem] border-2 md:border-4 border-base-content/20" width="500" height="500">

            </Image>
          </a>
          <a  className="flex">
            {/* <img class="h-full w-full object-cover" src="assets/images/portfolio-2/portfolio7.jpg" alt=""> */}
            <Image alt='' src={sheet} className="rounded-3xl aspect-square w-full sm:w-[26rem] border-2 md:border-4 border-base-content/20" width="500" height="500">

            </Image>
          </a>
        </div>
        <div className="project space-y-2" data-filter="photography">
          <a  className="flex">
            {/* <img class="h-full w-full object-cover" src="assets/images/portfolio-2/portfolio3.jpg" alt=""> */}
            <Image alt='' src={sheet} className="rounded-3xl aspect-square w-full sm:w-[26rem] border-2 md:border-4 border-base-content/20" width="500" height="500">

            </Image>
          </a>
          <a  className="flex">
            {/* <img class="h-full w-full object-cover" src="assets/images/portfolio-2/portfolio8.jpg" alt=""> */}
            <Image alt='' src={sheet} className="rounded-3xl aspect-square w-full sm:w-[26rem] border-2 md:border-4 border-base-content/20" width="500" height="500">

            </Image>
          </a>
        </div>
        <div className="project space-y-2" data-filter="development">
          <a  className="flex">
            {/* <img class="h-full w-full object-cover" src="assets/images/portfolio-2/portfolio4.jpg" alt=""> */}
            <Image alt='' src={sheet} className="rounded-3xl aspect-square w-full sm:w-[26rem] border-2 md:border-4 border-base-content/20" width="500" height="500">

            </Image>
          </a>
          <a  className="flex">
            {/* <img class="h-full w-full object-cover" src="assets/images/portfolio-2/portfolio9.jpg" alt=""> */}
            <Image alt='' src={sheet} className="rounded-3xl aspect-square w-full sm:w-[26rem] border-2 md:border-4 border-base-content/20" width="500" height="500">

            </Image>
          </a>
        </div>
      
       
       
       
      </div>
    </div>
  )
}

export default Gallery