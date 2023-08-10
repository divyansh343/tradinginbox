import Image from 'next/image'
import React from 'react'
// import { HiTrendingUp } from 'react-icons/hi'
// import logoImg from '../../assets/images/power.png'
const Footer = () => {
    return (
        <>
            <div data-theme="forest">
                <footer className="footer p-10 bg-base-100 border-t-2 text-base-content">

                    <div>
                        {/* <Image src={logoImg} height={50} width={50} alt="" /> */}
                        <p className='text-lg'>Suprr.Link</p>
                        <p className='text-md'>Shareable profile link for social media users.</p>
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
                                    <div className="stat-title text-secondary">Worldwide</div>
                                    <div className="stat-value">19,000<span className='inline-block text-md   mr-1'>
                                        {/* <HiTrendingUp /> */}
                                    </span></div>
                                    <div className="stat-desc text-secondary">Users Joined So Far</div>
                                </div>
                            </div>
                        </div>
                    </div>


                </footer>
                <div className='mx-5 lg-mx-20 pb-20'>
                    <p className="pt-6 text-sm  font-thin text-primary-focus lg:mt-4 lg:ml-4 font-pj">
                        Trading is risky & most day traders lose money. This site & the products & services we offer informational & educational purposes only. All content is to be considered hypothetical, selected after the fact, in order to demonstrate our product and should not be construed as financial advice. Decisions to buy, sell, hold or trade in securities, commodities and other investments involve risk and are best made based on the advice of qualified financial professionals. Past performance does not guarantee future results.
                    </p>

                    <p className="pt-6 text-sm text-primary-focus lg:mt-0 lg:ml-4 font-pj">
                        Hypothetical or Simulated performance results have certain limitations, unlike an actual performance record, simulated results do not represent actual trading. Also, since the trades have not been executed, the results may have under-or-over compensated for the impact, if any, of certain market factors, such as lack of liquidity. Simulated trading programs in general are also subject to the fact that they are designed with the benefit of hindsight. No representation is being made that any account will or is likely to achieve profit or losses similar to those shown.
                    </p>

                    <p className="pt-6 text-sm text-primary-focus lg:mt-0 lg:ml-4 font-pj">
                        Testimonials appearing on this website may not be representative of other clients or customers and is not a guarantee of future performance or success.
                    </p>

                    <p className="pt-6 text-sm text-primary-focus lg:mt-0 lg:ml-4 font-pj">
                        As a provider of technical analysis tools for charting platforms, we do not have access to the personal trading accounts or brokerage statements of our customers. As a result, we have no reason to believe our customers perform better or worse than traders as a whole based on any content or tool we provide.
                    </p>

                    <p className="pt-6 text-sm text-primary-focus lg:mt-0 lg:ml-4 font-pj">
                    As a provider of technical analysis tools for charting platforms, we do not have access to the personal trading accounts or brokerage statements of our customers. As a result, we have no reason to believe our customers perform better or worse than traders as a whole based on any content or tool we provide.
                    </p>
                  
                </div>
            </div>

        </>
    )
}

export default Footer