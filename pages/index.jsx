import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Link from 'next/link'
import TestComponent from '../components/amazon/TestComponent'


export default function Home() {
  return (
    <div className=''>
     <TestComponent />
    </div>
  )
}
