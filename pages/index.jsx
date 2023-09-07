import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Link from 'next/link'
import Pricing from '../components/landing/Pricing'
import Digits from '../components/landing/Digits'
import Section from '../components/landing/Section'
import Testimonials from '../components/landing/Testimonials'
import Sheet from '../components/landing/Sheet'
import StageSection from '../components/frontpage/StageSection'
import Faq from '../components/frontpage/Faq'
import Strip from '../components/frontpage/Strip'
import Shutter from '../components/frontpage/Shutter'
import Services from '../components/frontpage/Services'
import Stars from '../components/frontpage/Stars'
// import BoxSection from '../components/frontpage/BoxSection'
import Wide from '../components/Wide'
import wide2 from '../assets/images/wide2.jpeg'
import wide3 from '../assets/images/wide3.jpeg'
import Cta from '../components/Cta'
import Client from '../components/Client'
import Hero from '../components/landing/Hero'
import Para from '../components/Para'

export default function Home() {
  return (
    <div className=''>
      <Hero />
      <Sheet />
      {/* <Wide />
      <Shutter /> */}
      {/* wide 2 */}
      <div className='grid justify-center'>
        <div></div>
        <Image alt='' src={wide2} className=" aspect-auto w-full border-2 md:border-4 border-base-content" width="1300" height="550">
        </Image>
      </div>
      {/* wide 2 */}
      <Client />
      {/* wide 3 */}
      <div className='grid justify-center'>
        <div></div>
        <Image alt='' src={wide3} className=" aspect-auto w-full border-2 md:border-4 border-base-content" width="1300" height="550">
        </Image>
      </div>
      {/* wide 3 */}
      <Para/>
      <Cta />
    </div>
  )
}
