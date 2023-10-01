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
      <div className='grid justify-center px-3 gap-3 mt-20 mb-5'>

        <div className='grid justify-center'>
          <a href='https://arpitsite.netlify.app/' target='_blank' rel='noreferrer'>
            <HoverVideoPlayer
              className=" aspect-auto w-full sm:w-[36rem] border-2  border-base-content/20" width="1000" height="700"
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
          </a>

          {/* <video autoPlay muted loop playsinline="" controls="" className=" aspect-auto w-full sm:w-[36rem] border-2  border-base-content/20" width="1000" height="700">
            <source src="https://res.cloudinary.com/the-social-charts/video/upload/v1696127204/Scroll_Capture_2023-10-01_at_7.48.10_AM_online-video-cutter.com_uq4uqg.mp4" type="video/mp4" />
          </video> */}
        </div>
      </div>
      <div className='grid justify-center px-3 gap-4 lg:mt-10 md:grid-cols-2'>
        <div className='grid justify-center'>
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
          </a>
        </div>
        <div className='grid justify-center'>
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
          </a>
        </div>
      </div>

    </div>
  )
}

export default Client