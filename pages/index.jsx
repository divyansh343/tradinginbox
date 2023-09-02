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
import Shutter from '../components/frontpage/Shutter'
import Services from '../components/frontpage/Services'
import Stars from '../components/frontpage/Stars'
import BoxSection from '../components/frontpage/BoxSection'
import Principles from '../components/frontpage/Principles'

export default function Home() {
  return (
    <div className=''>
      <Hero/>
      <Section />
      <Services/>
      <Principles />
      <BoxSection/>
      <StageSection />
      <Stars />
      <Shutter />
      <Faq/>
      <Strip />
      
    </div>
  )
}
