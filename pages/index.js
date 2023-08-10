import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Link from 'next/link'
import Pricing from '../components/landing/pricing'
import Hero from '../components/landing/Hero'
import Digits from '../components/landing/Digits'
import Section from '../components/landing/Section'
import Testimonials from '../components/landing/Testimonials'

export default function Home() {
  return (
    <div className=''>
      <Hero/>
      <Section/>
      <Digits/>
      <Pricing />
      <Testimonials />
    </div>
  )
}
