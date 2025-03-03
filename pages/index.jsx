import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Link from 'next/link'
import Pricing from '../components/landing/Pricing'
import Hero from '../components/landing/Hero'
import Digits from '../components/landing/Digits'
import Section from '../components/landing/Section'
import Testimonials from '../components/landing/Testimonials'
import Sheet from '../components/landing/Sheet'
import StageSection from '../components/frontpage/StageSection'
import Faq from '../components/frontpage/Faq'
import Strip from '../components/frontpage/Strip'

export default function Home() {
  return (
    <div className=''>
      <Section />
      <StageSection />
      <Faq />
      {/* <Strip /> */}
      {/* <Hero/>
      <Section/>
      <Sheet />
      <Digits/>
      <Pricing />
      <Testimonials /> */}
    </div>
  )
}
