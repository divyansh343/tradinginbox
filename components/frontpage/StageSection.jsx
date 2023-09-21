import React from 'react'
import pr1 from '../../assets/images/pr1.png'
import pr2 from '../../assets/images/pr2.png'
import pr3 from '../../assets/images/pr3.png'
import Image from 'next/image'

const StageSection = () => {
    return (
        <section className="py-24  px-10 md:px-36 lg:px-20 grid justify-center">
            <div className="container">
                <div className="text-center max-w-xl mx-auto">
                    {/* <h6 className="font-normal uppercase mb-2">How it <span className="font-semibold">Work</span></h6> */}
                    <h2 className="text-3xl font-semibold mb-3">How do we work ?</h2>
                    {/* <p className="text-base font-normal text-gray-500">Sed ut perspiciatis unde omnis iste natus error
                        voluptatem accusantium doloremque rem aperiam.</p> */}
                </div>

                <div className="mt-20">
                    <div className="grid lg:grid-cols-3 grid-cols-1 gap-10">
                        <div>
                            <div className="relative">
                                <div className="text-center cursor-pointer">
                                    <span className="inline-flex rounded-3xl relative z-0 bg-blue-500/10 dark:bg-blue-100/5 h-24 w-24 items-center justify-center" >
                                        <Image className=' ' src={pr1} height={60} width={60} alt='branding' />
                                    </span>
                                    <h5 className="text-xl font-semibold mb-3 mt-5">1. Crafting</h5>
                                    <p className="text-base font-normal text-gray-700">Crafting tailored
                                    <span className='  bg-blue-500/10 mx-1'>brand identity of your business </span> by appealing website & social media content.</p>

                                    <div className="hidden lg:block">
                                        {/* <img src="assets/images/arrow-top.png" class="absolute -right-16 top-2/4 w-28"> */}
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div>
                            <div className="relative">
                                <div className="text-center cursor-pointer">
                                    <span className="inline-flex rounded-3xl relative z-0 bg-emerald-500/10 dark:bg-emerald-100/5 h-24 w-24 items-center justify-center" >
                                        <Image className=' ' src={pr2} height={60} width={60} alt='branding' />
                                    </span>
                                    <h5 className="text-xl font-semibold mb-3 mt-5">2. Branding</h5>
                                    <p className="text-gray-700 dark:text-gray-400">In branding, we <span className='   bg-emerald-500/10 mx-1'> target potential customers through organic ads </span> in social platforms YT, Google, Instagram, FB.</p>

                                    <div className="hidden lg:block">
                                        {/* <img src="assets/images/arrow-bottom.png" class="absolute -right-20 top-2/4 w-28"> */}
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div>
                            <div className="text-center cursor-pointer">
                                <span className="inline-flex rounded-3xl  relative z-0 bg-amber-500/10 dark:bg-amber-100/5 h-24 w-24 items-center justify-center" >
                                    <Image className=' ' src={pr3} height={50} width={50} alt='branding' />
                                </span>
                                <h5 className="text-xl font-semibold mb-3 mt-5">3. Expanding</h5>
                                <p className="text-gray-700 dark:text-gray-400">
                                    We Expand, Our campaign by reaching organic traffic &<span className='   bg-amber-500/10 mx-1'>
                                    Creating a mature brand worthy name
                                        </span>  in online space.  
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default StageSection