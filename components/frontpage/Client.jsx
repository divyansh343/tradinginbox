import Image from 'next/image';
import React from 'react'
import HoverVideoPlayer from 'react-hover-video-player';
import arpit from '../../assets/images/arpit.png'
import charterd from '../../assets/images/charterd.png'
import kcrypto from '../../assets/images/kcrypto.png'
import Link from 'next/link';

const Client = () => {
  return (
    <div className='lg:mb-28'>
      <div className="mb-4 grid justify-center my-20">
        <h2 className=" text-3xl md:text-5xl font-bold text-base-content">
          Our Latest Works
        </h2>
      </div>
      <p className="mx-auto font-medium text-center text-gradient-cold mb-4">Unlocking Success Stories: A Glimpse into Our <span className='border-b link link-hover border-primary'>Branding  and Marketing </span>Mastery</p>
      <div className='grid justify-center px-3 gap-3 mt-20 mb-5'>

        <div className='grid justify-center hover:border-b border-primary/40 '>
          <a href='https://arpitsite.netlify.app/' target='_blank' rel='noreferrer'>
            <HoverVideoPlayer
              className=" aspect-auto w-full sm:w-[36rem] lg:w-[45rem] border-2  border-base-content/20" width="1000" height="700"
              videoSrc="https://res.cloudinary.com/the-social-charts/video/upload/v1696129126/Scroll_Capture_2023-10-01_at_8.20.34_AM_online-video-cutter.com_1_c0zg3b.mp4"
              pausedOverlay={
                <Image
                  src={arpit}
                  alt="arpit's portfolio"
                  style={{
                    // Make the image expand to cover the video's dimensions
                    width: '100%',
                    height: '90%',
                    objectFit: 'cover',
                  }}
                />
              }
              loadingOverlay={
                <div className="loading-overlay">
                  <div className="loading-spinner" />
                </div>
              }
            />
            <p className="mx-auto font-normal text-center text-lg text-gradient-cold mt-2">Arpit&apos;s portfolio-<span className=' ml-2 border-primary font-bold'>Filmaker & Photographer </span></p>
          </a>

          {/* <video autoPlay muted loop playsinline="" controls="" className=" aspect-auto w-full sm:w-[36rem] border-2  border-base-content/20" width="1000" height="700">
            <source src="https://res.cloudinary.com/the-social-charts/video/upload/v1696127204/Scroll_Capture_2023-10-01_at_7.48.10_AM_online-video-cutter.com_uq4uqg.mp4" type="video/mp4" />
          </video> */}
        </div>
      </div>
      <div className=" grid justify-center mt-5 lg:mt-14">

        <div className="grid gap-4  lg:grid-cols-2">
          {/* <div className='grid justify-center px-3 gap-4 lg:mt-10 md:grid-cols-2'> */}
          <div className='px-3 hover:border-b border-primary/40 '>
            <a href='https://kcrypto.info/' target='_blank' rel='noreferrer'>
              <HoverVideoPlayer
                className=" aspect-auto w-full sm:w-[36rem] border-2  border-base-content/20" width="1000" height="700"
                videoSrc="https://res.cloudinary.com/the-social-charts/video/upload/v1696127203/Scroll_Capture_2023-10-01_at_7.49.32_AM_online-video-cutter.com_rhsezj.mp4"
                pausedOverlay={
                  <Image
                    src={kcrypto}
                    alt=""
                    style={{
                      // Make the image expand to cover the video's dimensions
                      width: '100%',
                      height: '90%',
                      objectFit: 'cover',
                    }}
                  />
                }
                loadingOverlay={
                  <div className="loading-overlay">
                    <div className="loading-spinner" />
                  </div>
                }
              />
              <p className="mx-auto font-bold text-center  text-lg text-gradient-cold mt-2">KCrypto -<span className=' ml-2 border-primary font-normal'>Crypto trader&apos;s page</span></p>
            </a>
          </div>
          <div className='px-3 hover:border-b border-primary/40 '>
            <a href='https://charterdmedia.com/' target='_blank' rel='noreferrer'>
              <HoverVideoPlayer
                className=" aspect-auto w-full sm:w-[36rem] border-2  border-base-content/20" width="1000" height="700"
                videoSrc="https://res.cloudinary.com/the-social-charts/video/upload/v1696132647/Scroll_Capture_2023-10-01_at_9.01.10_AM_l8qujp.webm"
                pausedOverlay={
                  <Image
                    src={charterd}
                    alt="charterd media"
                    style={{
                      // Make the image expand to cover the video's dimensions
                      width: '100%',
                      height: '90%',
                      objectFit: 'cover',
                    }}
                  />
                }
                loadingOverlay={
                  <div className="loading-overlay">
                    <div className="loading-spinner" />
                  </div>
                }
              />
              <p className="mx-auto font-bold text-center text-lg text-gradient-cold mt-2">Charterd media -<span className=' ml-2 border-primary font-normal'>Influencer Marketing agency </span></p>
            </a>
          </div>

          {/* </div> */}
        </div>
      </div>

    </div>
  )
}

export default Client