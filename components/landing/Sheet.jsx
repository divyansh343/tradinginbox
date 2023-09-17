import Image from 'next/image'
import React from 'react'
import sheet from '../../assets/images/boxx.jpg'
import { FaChartLine } from 'react-icons/fa'
import one from '../../assets/images/portfolio/1.jpg'
import two from '../../assets/images/portfolio/2.jpg'
import three from '../../assets/images/portfolio/3.jpg'
import four from '../../assets/images/portfolio/4.png'
import Link from 'next/link'

const Sheet = () => {
  return (
    <div>
      <section className="bg-base-100 mt-20 py-16 md:py-32">
        <div className="flex flex-col text-center my-10">
          <div className="mb-3">
            <h2 className="text-4xl lg:text-5xl font-semibold text-white">Arpit&apos;s projects
            </h2>
          </div>
          <div className="md:w-2/3 mx-auto leading-relaxed text-base text-white">
            <h3 className="text-[#c0c0c0] text-md">Here are few glimpse of previous videos
            </h3>
          </div>
        </div>
        <div className='grid lg:grid-cols-2 mx-6 mt-10 lg:mx-10 gap-10 '>

          <Link href="project_1" >
          <a  className="group  bg-black">
              <Image
                alt="Developer"
                src={one}
                className="absolute inset-0 h-full w-full object-cover opacity-75 transition-opacity group-hover:opacity-50"
              />

              <div className="sm:p-6 lg:p-8">


                <div className="">
                  <div
                    className="translate-y-8 -mt-28 transform opacity-0 transition-all group-hover:translate-y-0 group-hover:opacity-100"
                  >
                    <p className="text-md tracking-wide text-white">
                      Lorem ipsum dolor, sit amet consectetur adipisicing elit. Omnis
                      perferendis hic asperiores
                    </p>
                  </div>
                </div>
              </div>
            </a>
          </Link>

          <Link href="project_2" >
            <a  className="group  bg-black">
              <Image
                alt="Developer"
                src={two}
                className="absolute inset-0 h-full w-full object-cover opacity-75 transition-opacity group-hover:opacity-50"
              />

              <div className="sm:p-6 lg:p-8">


                <div className="">
                  <div
                    className="translate-y-8 -mt-28 transform opacity-0 transition-all group-hover:translate-y-0 group-hover:opacity-100"
                  >
                    <p className="text-md tracking-wide text-white">
                      Lorem ipsum dolor, sit amet consectetur adipisicing elit. Omnis
                      perferendis hic asperiores
                    </p>
                  </div>
                </div>
              </div>
            </a>
          </Link>

          <Link href="project_3" >
            <a  className="group  bg-black">
              <Image
                alt="Developer"
                src={four}
                className="absolute inset-0 h-full w-full object-cover opacity-75 transition-opacity group-hover:opacity-50"
              />

              <div className="sm:p-6 lg:p-8">
                <div className="">
                  <div
                    className="translate-y-8 -mt-28 transform opacity-0 transition-all group-hover:translate-y-0 group-hover:opacity-100"
                  >
                    <p className="text-md tracking-wide text-white">
                      Lorem ipsum dolor, sit amet consectetur adipisicing elit. Omnis
                      perferendis hic asperiores
                    </p>
                  </div>
                </div>
              </div>
            </a>
          </Link>

          <Link href="project_4" >
            <a  className="group  bg-black">
              <Image
                alt="Developer"
                src={three}
                className="absolute inset-0 h-full w-full object-cover opacity-75 transition-opacity group-hover:opacity-50"
              />

              <div className="sm:p-6 lg:p-8">


                <div className="">
                  <div
                    className="translate-y-8 -mt-28 transform opacity-0 transition-all group-hover:translate-y-0 group-hover:opacity-100"
                  >
                    <p className="text-md tracking-wide text-white">
                      Lorem ipsum dolor, sit amet consectetur adipisicing elit. Omnis
                      perferendis hic asperiores
                    </p>
                  </div>
                </div>
              </div>
            </a>
          </Link>

        </div>
        {/*  */}

        {/*  */}

      </section>
    </div>
  )
}

export default Sheet