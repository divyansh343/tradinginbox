import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Link from 'next/link'

export default function Home() {
  return (
    <div className="p-20">
      <div>
        <p className='text-lime-600 text-4xl'>Welcome to, Edvora</p>
      </div>
      
                                

<div className="py-16 my-3 bg-gradient-to-br from-green-600 to-lime-300 md:bg-gradient-to-r">
    <div className="container m-auto px-6 text-center md:px-12 lg:px-20">
        <h2 className="mb-8 text-4xl text-white font-bold md:text-4xl">Explore All products</h2>
        <Link href="/products">
        <a  title="Create account" className="w-max py-3 px-12 text-center rounded-xl transition bg-white shadow-md hover:bg-purple-100 active:bg-purple-200 focus:bg-purple-100">
            <span className="text-purple-600 font-semibold">
                Products
            </span>
        </a>
        </Link>
    </div>
</div>
<div className="py-16 my-3 bg-gradient-to-br from-lime-400 to-green-600 md:bg-gradient-to-r">
    <div className="container m-auto px-2 text-center md:px-4 lg:px-4">
        <h2 className="mb-8 text-4xl text-white font-bold md:text-4xl">Users registerd.</h2>
        <Link href="/users">
        <a href="#" title="Create account" className="w-max py-3 px-12 text-center rounded-xl transition bg-white shadow-md hover:bg-purple-lime-900 active:bg-purple-200 focus:bg-purple-100">
            <span className="text-purple-600 font-semibold">
                Users
            </span>
        </a>
        </Link>
    </div>
</div>
<div className="py-16 my-3 bg-gradient-to-br from-green-600 to-lime-300 md:bg-gradient-to-r">
    <div className="container m-auto px-6 text-center md:px-12 lg:px-20">
        <h2 className="mb-8 text-4xl text-white font-bold md:text-4xl">Number of orders so far.</h2>
        <Link href="/orders">
        <a  title="Create account" className="w-max py-3 px-12 text-center rounded-xl transition bg-white shadow-md hover:bg-purple-100 active:bg-purple-200 focus:bg-purple-100">
            <span className="text-purple-600 font-semibold">
                Orders
            </span>
        </a>
        </Link>
    </div>
</div>
              
    </div>
  )
}
