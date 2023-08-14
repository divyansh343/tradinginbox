import Image from 'next/image'
import React from 'react'
// import { HiTrendingUp } from 'react-icons/hi'
// import logoImg from '../../assets/images/power.png'
const Footer = () => {
    return (
        <>
            <div  className='bg-base-300' >
                <footer className="footer p-10 bg-base-200 border-t-2 text-base-content">

                    <div>
                        {/* <Image src={logoImg} height={50} width={50} alt="" /> */}
                        <p className='text-2xl font-bold'>Crypto k🔺</p>
                        <p className='text-md'>Top Notch Crypto Analysis & Signals.</p>
                        <p className='text-md'>@2023</p>
                    </div>
                    <div>
                        <span className="footer-title">Services</span>
                        <a className="link link-hover">Branding</a>
                        <a className="link link-hover">Design</a>
                        <a className="link link-hover">Marketing</a>
                        <a className="link link-hover">Advertisement</a>
                    </div>
                    <div>
                        <span className="footer-title">Company</span>
                        <a className="link link-hover">About us</a>
                        <a className="link link-hover">Contact</a>
                        <a className="link link-hover">Jobs</a>
                        <a className="link link-hover">Press kit</a>
                    </div>
                    <div>
                        <div className='grid place-items-center  '>
                            <div className="stats shadow bg-white text-secondary drop-shadow-lg">
                                <div className="stat">
                                    <div className="stat-title text-secondary">🪙BTC target</div>
                                    <div className="stat-value">$32,000<span className='inline-block text-md   mr-1'>
                                        {/* <HiTrendingUp /> */}
                                    </span></div>
                                    <div className="stat-desc text-secondary">ETH, LTC, DOGE...</div>
                                </div>
                            </div>
                        </div>
                    </div>


                </footer>
             
                <div className='grid justify-end bg-base-200'>
                    <a href="https://suprr.link/divyansh" target="_blank" rel="noreferrer" className="link link-hover text-xs p-5">🥑Designed by - Divyansh</a>
                </div>
            </div>
        </>
    )
}

export default Footer