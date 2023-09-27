import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import pointy from '../../assets/images/pointy.png'
import { useState, useEffect } from 'react'
import ReactTypingEffect from 'react-typing-effect'
import TextTransition, { presets } from "react-text-transition";

const Hero = () => {
    // const [index, setIndex] = useState(0);
    // const TEXTS = [
    //   "Web Development",
    //   "Seo",
    //   "Online marketing",
    // ];
    // useEffect(() => {
    //   const intervalId = setInterval(() =>
    //     setIndex(index => index + 1),
    //     2000 // every 3 seconds
    //   );
    //   return () => clearTimeout(intervalId);
    // }, []);


    return (
        <>

            {/* <div className='main'>
      <div className="overlay"></div>
      <video className='vid' src="https://res.cloudinary.com/the-social-charts/video/upload/v1692619781/-klI7zU73jD75DOy_vbnjls.mp4" autoPlay loop muted />
      <div className="content">
        <h1 className='text-3xl font-["Poppins"] text-white drop-shadow-2xl lg:text-7xl font-extrabold px-5'>
          One Stop Solution!
          <TextTransition className='mt-3' springConfig={presets.gentle}>
            {TEXTS[index % TEXTS.length]}
          </TextTransition>
        </h1>
        <div className='pt-10'>
          <p className='text-3xl lg:text-5xl text-white  border-b-2 drop-shadow font-extrabold px-5'>✨Unlock your digital Potentional</p>
        </div>
      </div>
    </div> */}

            {/* <section className="bg-blue-200/10">
                <div className="grid max-w-screen-xl px-6 md:px-20 pt-10 pb-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12 lg:pt-28">
                    <div className="mr-auto place-self-center lg:col-span-7">
                        <h1
                            className="max-w-2xl mb-4 text-4xl font-extrabold leading-none tracking-tight md:text-5xl xl:text-6xl dark:text-white">
                            Building digital <br />products &amp; brands.
                        </h1>

                        <p className="max-w-2xl mb-6 font-light text-gray-500 lg:mb-8 md:text-lg lg:text-xl dark:text-gray-400">This
                            free and open-source landing page template was built using the utility classes from
                            <a target="_blank" className="hover:underline">Tailwind CSS</a> and based on the
                            components from the <a href="#/" className="hover:underline" target="_blank">Flowbite Library</a> and the
                            <a href="https://flowbite.com/blocks/" target="_blank" className="hover:underline" rel="noreferrer">Blocks System</a>.
                        </p>

                        <div className="space-y-4 sm:flex sm:space-y-0 sm:space-x-4">

                            <a href="https://github.com/themesberg/landwind" target="_blank"
                                className="inline-flex items-center justify-center w-full px-5 py-3 text-sm font-medium text-center text-gray-900 border border-gray-200 rounded-lg sm:w-auto hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 dark:text-white dark:border-gray-700 dark:hover:bg-gray-700 dark:focus:ring-gray-800" rel="noreferrer">
                                <svg className="w-4 h-4 mr-2 text-gray-500 dark:text-gray-400" xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 496 512">
                                    <path
                                        d="M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3.3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5.3-6.2 2.3zm44.2-1.7c-2.9.7-4.9 2.6-4.6 4.9.3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3.7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3.3 2.9 2.3 3.9 1.6 1 3.6.7 4.3-.7.7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3.7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3.7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z">
                                    </path>
                                </svg> View on GitHub
                            </a>

                            <a href="https://www.figma.com/community/file/1125744163617429490" target="_blank"
                                className="inline-flex items-center justify-center w-full px-5 py-3 mb-2 mr-2 text-sm font-medium text-gray-900 bg-blue-600/60 border border-gray-200 rounded-lg sm:w-auto focus:outline-none hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-200" rel="noreferrer">

                                <svg className="w-4 h-4 mr-2" id="Layer_1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 300"
                                    width="1667" height="2500">

                                    <title>Figma.logo</title>
                                    <desc>Created using Figma</desc>
                                    <path id="path0_fill" className="st0"
                                        d="M50 300c27.6 0 50-22.4 50-50v-50H50c-27.6 0-50 22.4-50 50s22.4 50 50 50z"></path>
                                    <path id="path1_fill" className="st1"
                                        d="M0 150c0-27.6 22.4-50 50-50h50v100H50c-27.6 0-50-22.4-50-50z"></path>
                                    <path id="path1_fill_1_" className="st2"
                                        d="M0 50C0 22.4 22.4 0 50 0h50v100H50C22.4 100 0 77.6 0 50z"></path>
                                    <path id="path2_fill" className="st3" d="M100 0h50c27.6 0 50 22.4 50 50s-22.4 50-50 50h-50V0z">
                                    </path>
                                    <path id="path3_fill" className="st4"
                                        d="M200 150c0 27.6-22.4 50-50 50s-50-22.4-50-50 22.4-50 50-50 50 22.4 50 50z"></path>
                                </svg>
                                Get Figma file
                            </a>

                        </div>
                    </div>

                    <div className="mt-5 lg:mt-0 lg:col-span-5 flex">
                        <Image src={pointy} height={600} weight={600} alt='hero image' />
                    </div>

                </div>
            </section> */}


            <section className="max-w-7xl mx-auto bg-blue-100/30 flex flex-col lg:flex-row items-center justify-center gap-16 lg:gap-20 lg:items-start px-8 py-8 lg:py-10"><div className="flex flex-col gap-10 lg:gap-14 items-center justify-center text-center lg:text-left lg:items-start">

                {/* <div className="flex flex-col justify-center items-center md:items-start gap-1">
                    <div className="rating"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5 text-yellow-500"><path fillRule="evenodd" d="M10.868 2.884c-.321-.772-1.415-.772-1.736 0l-1.83 4.401-4.753.381c-.833.067-1.171 1.107-.536 1.651l3.62 3.102-1.106 4.637c-.194.813.691 1.456 1.405 1.02L10 15.591l4.069 2.485c.713.436 1.598-.207 1.404-1.02l-1.106-4.637 3.62-3.102c.635-.544.297-1.584-.536-1.65l-4.752-.382-1.831-4.401z" clipRule="evenodd"></path></svg><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5 text-yellow-500"><path fillRule="evenodd" d="M10.868 2.884c-.321-.772-1.415-.772-1.736 0l-1.83 4.401-4.753.381c-.833.067-1.171 1.107-.536 1.651l3.62 3.102-1.106 4.637c-.194.813.691 1.456 1.405 1.02L10 15.591l4.069 2.485c.713.436 1.598-.207 1.404-1.02l-1.106-4.637 3.62-3.102c.635-.544.297-1.584-.536-1.65l-4.752-.382-1.831-4.401z" clipRule="evenodd"></path></svg><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5 text-yellow-500"><path fillRule="evenodd" d="M10.868 2.884c-.321-.772-1.415-.772-1.736 0l-1.83 4.401-4.753.381c-.833.067-1.171 1.107-.536 1.651l3.62 3.102-1.106 4.637c-.194.813.691 1.456 1.405 1.02L10 15.591l4.069 2.485c.713.436 1.598-.207 1.404-1.02l-1.106-4.637 3.62-3.102c.635-.544.297-1.584-.536-1.65l-4.752-.382-1.831-4.401z" clipRule="evenodd"></path></svg><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5 text-yellow-500"><path fillRule="evenodd" d="M10.868 2.884c-.321-.772-1.415-.772-1.736 0l-1.83 4.401-4.753.381c-.833.067-1.171 1.107-.536 1.651l3.62 3.102-1.106 4.637c-.194.813.691 1.456 1.405 1.02L10 15.591l4.069 2.485c.713.436 1.598-.207 1.404-1.02l-1.106-4.637 3.62-3.102c.635-.544.297-1.584-.536-1.65l-4.752-.382-1.831-4.401z" clipRule="evenodd"></path></svg><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5 text-yellow-500"><path fillRule="evenodd" d="M10.868 2.884c-.321-.772-1.415-.772-1.736 0l-1.83 4.401-4.753.381c-.833.067-1.171 1.107-.536 1.651l3.62 3.102-1.106 4.637c-.194.813.691 1.456 1.405 1.02L10 15.591l4.069 2.485c.713.436 1.598-.207 1.404-1.02l-1.106-4.637 3.62-3.102c.635-.544.297-1.584-.536-1.65l-4.752-.382-1.831-4.401z" clipRule="evenodd"></path></svg></div><div className="text-base text-base-content/80">
                    <span className="font-semibold text-base-content">315</span> makers ship faster</div>
                </div> */}

                <h1 className="font-extrabold mt-16 text-4xl lg:text-6xl tracking-tight md:-mb-4 flex flex-col gap-3 items-center lg:items-start">
                    <span className="relative">Convert your visitors</span>


                    <span className=" relative ">
                        <span className="mr-4 md:mr-5">into,</span>
                        <span className=" relative whitespace-nowrap">
                            <span className="absolute bg-primary -left-2 -top-1 -bottom-1 -right-2 md:-left-3 md:-top-0 md:-bottom-0 md:-right-3 -rotate-1">
                            </span>
                            <span className="relative text-primary-content">Customers</span>
                        </span>
                    </span>
                </h1>
                <p className="text-lg opacity-90 leading-relaxed" >
                We&apos;re your brand&apos;s digital architects. We blend marketing, web mastery, SEO wizardry, and social media savvy to make you a standout success.
                </p>
                <div className="space-y-4"><button className="btn btn-primary group btn-wide plausible-event-name=Checkout"><svg className="w-5 h-5 fill-primary-content group-hover:scale-110 group-hover:-rotate-3 transition-transform duration-200 ease-in-out" viewBox="0 0 375 509" xmlns="http://www.w3.org/2000/svg"><path d="M249.685 14.125C249.685 11.5046 248.913 8.94218 247.465 6.75675C246.017 4.57133 243.957 2.85951 241.542 1.83453C239.126 0.809546 236.463 0.516683 233.882 0.992419C231.301 1.46815 228.917 2.69147 227.028 4.50999L179.466 50.1812C108.664 118.158 48.8369 196.677 2.11373 282.944C0.964078 284.975 0.367442 287.272 0.38324 289.605C0.399039 291.938 1.02672 294.226 2.20377 296.241C3.38082 298.257 5.06616 299.929 7.09195 301.092C9.11775 302.255 11.4133 302.867 13.75 302.869H129.042V494.875C129.039 497.466 129.791 500.001 131.205 502.173C132.62 504.345 134.637 506.059 137.01 507.106C139.383 508.153 142.01 508.489 144.571 508.072C147.131 507.655 149.516 506.503 151.432 504.757L172.698 485.394C247.19 417.643 310.406 338.487 359.975 250.894L373.136 227.658C374.292 225.626 374.894 223.327 374.882 220.99C374.87 218.653 374.243 216.361 373.065 214.341C371.887 212.322 370.199 210.646 368.17 209.482C366.141 208.318 363.841 207.706 361.5 207.707H249.685V14.125Z"></path></svg>Get In Touch</button><p className="text-sm  flex justify-center items-center gap-2 md:text-sm"><svg className="w-5 h-5 fill-secondary animate-pulse" viewBox="0 0 161 154" fill="none" xmlns="http://www.w3.org/2000/svg"><g clipPath="url(#clip0_8_2399)"><path d="M13.9653 26.3929C13.3454 26.4007 12.7254 26.3891 12.1055 26.3781C10.9378 26.3371 9.76879 26.3561 8.60306 26.4349C4.24676 26.7979 2.47252 28.6135 2.27301 32.9093C1.97374 39.3929 1.71523 45.9857 1.46519 52.3619L1.1867 59.4195C1.16791 59.8841 1.17111 60.3506 1.19508 60.8093C1.5086 66.7514 3.74024 69.1992 9.72176 70.1639C10.2316 70.2455 10.7491 70.3031 11.2692 70.3581C13.0383 70.5522 14.7127 70.7392 16.2382 71.9142C16.2777 72.7101 16.3245 73.5092 16.3679 74.3083C16.4787 76.2165 16.594 78.1907 16.6115 80.1286C16.6931 89.1674 16.7656 98.2062 16.8291 107.245C16.9042 117.237 16.9858 127.229 17.0739 137.221C17.0748 140.34 17.2411 143.457 17.5721 146.559C18.0754 150.852 19.3133 152.078 23.5912 152.525L25.146 152.69C29.2657 153.198 33.4084 153.499 37.5585 153.589C41.9111 153.609 46.2512 153.619 50.5788 153.62C61.9284 153.62 73.155 153.55 84.092 153.41C89.9673 153.335 95.9359 153.127 101.708 152.925C105.951 152.777 110.339 152.623 114.654 152.525C118.836 152.428 123.092 152.404 127.209 152.38C130.275 152.362 133.446 152.344 136.565 152.296C140.119 152.242 142.072 150.598 142.703 147.119C142.868 146.065 142.953 145 142.954 143.934C142.969 143.427 142.982 142.921 143.015 142.416C143.274 138.382 143.541 134.348 143.817 130.316C144.41 121.479 145.023 112.341 145.517 103.346C145.675 100.462 145.978 97.5183 146.271 94.6752C147.139 86.244 148.036 77.5339 145.415 68.7281C145.632 68.6809 145.841 68.6336 146.042 68.5884C146.744 68.4156 147.456 68.2855 148.174 68.2001C149.057 68.1166 149.968 68.0707 150.848 68.0286C152.152 67.9639 153.501 67.8992 154.825 67.7051C158.372 67.1875 160.401 64.9635 160.693 61.2785C160.74 60.4115 160.722 59.5422 160.639 58.6779L160.629 58.5291C160.051 50.3348 159.463 42.1416 158.874 33.8521L158.372 26.8148C158.361 26.6623 158.298 26.5183 158.193 26.4068C158.089 26.2954 157.949 26.2233 157.798 26.2028C157.404 26.1497 157.025 26.0913 156.657 26.0337C155.871 25.912 155.129 25.7975 154.369 25.7509C151.924 25.6016 149.478 25.4588 147.032 25.3225C142.701 25.0747 138.222 24.8192 133.824 24.5118C133.078 24.4103 132.351 24.2007 131.666 23.8894C131.51 23.8286 131.352 23.7672 131.194 23.7071C131.392 23.2748 131.587 22.8627 131.777 22.4661C132.341 21.3419 132.83 20.1817 133.24 18.9932C133.855 17.1872 134.099 15.2759 133.958 13.3737C133.816 11.4715 133.292 9.61755 132.418 7.92206C131.488 6.22992 130.227 4.742 128.709 3.54746C127.192 2.35292 125.448 1.47617 123.584 0.969338C120.508 0.0439655 117.257 -0.145334 114.094 0.416744C105.064 2.00139 96.9276 6.12259 89.2191 13.0176C88.2474 13.8873 87.2758 14.7957 86.2549 15.7572C85.931 16.0633 85.5942 16.3783 85.2463 16.7032C85.0053 16.3149 84.7767 15.9475 84.5564 15.5936C83.8562 14.4638 83.2512 13.4886 82.6079 12.5232C80.6044 9.44497 77.8584 6.91879 74.6228 5.17648C65.7671 0.465246 56.2985 0.0518385 46.4808 3.94713C43.6793 5.10813 41.2785 7.0614 39.5731 9.56688C35.9624 14.6256 36.1081 18.8347 40.0615 23.6404C40.6022 24.2666 41.1769 24.8624 41.7832 25.4255C41.9724 25.6099 42.1791 25.8137 42.4078 26.035L37.0124 26.1035C28.8563 26.2057 21.4108 26.3036 13.9653 26.3929ZM27.2699 78.0781C27.1857 76.5834 27.051 75.1016 26.9091 73.5403C26.8625 73.0324 26.816 72.516 26.7698 71.9912C26.9453 71.9589 27.1138 71.9265 27.2764 71.8948C27.8156 71.768 28.3657 71.6936 28.9192 71.6703C42.4641 71.6515 56.0103 71.6515 70.0489 71.6528H78.1409C78.1376 75.3741 78.1046 79.0539 78.0729 82.6192C77.9964 91.2594 77.9239 99.4194 78.2432 107.673C78.5626 115.945 79.2622 124.015 80.0026 132.56C80.3025 136.023 80.6121 139.599 80.892 143.165C80.5474 143.265 80.2196 143.368 79.9054 143.467C79.1566 143.75 78.3715 143.924 77.5734 143.984C62.42 144.096 47.4888 144.144 29.7327 144.178H29.7249C29.1714 144.153 28.6218 144.074 28.0841 143.94C27.8801 143.896 27.667 143.852 27.4416 143.81C27.4086 143.469 27.3735 143.133 27.3385 142.8C27.2166 141.822 27.1487 140.838 27.1351 139.852C27.1917 130.616 27.2565 121.38 27.3295 112.144C27.3951 103.234 27.4571 94.3245 27.5154 85.4145C27.5297 82.9278 27.4 80.4295 27.2705 78.0781H27.2699ZM66.5289 35.6309C67.713 35.6212 68.8984 35.5831 70.0806 35.5449C72.3653 35.4725 74.7213 35.3968 76.9801 35.5449C77.7237 40.2083 78.0586 53.6179 77.5838 60.0975C74.2886 60.9096 70.81 60.8552 67.4403 60.7983C65.6408 60.7705 63.7784 60.7394 61.9452 60.8391C56.9515 61.1089 51.8535 61.1465 46.9233 61.1834L42.9532 61.2169C38.3294 61.2602 33.5475 61.3056 28.8661 61.0915C27.5919 61.0332 26.2912 61.0117 25.0338 60.9916C20.9833 60.9269 16.7993 60.8579 12.4618 59.5541L11.3768 36.0255C13.7352 35.7968 16.112 35.8364 18.4615 36.1433C19.6534 36.2559 20.886 36.3732 22.1019 36.4062C25.6594 36.502 29.3512 36.5523 33.3887 36.5588C36.9645 36.5633 40.811 36.5531 44.6821 36.4334C46.5775 36.3745 48.4988 36.26 50.3559 36.15C51.9708 36.0536 53.6407 35.9556 55.2789 35.8909C59.0691 35.7479 62.8533 35.6613 66.5289 35.6315V35.6309ZM50.6169 25.2539L46.5095 19.5205C46.8333 15.9849 48.548 13.9338 52.0512 12.8856C57.2333 11.3326 62.0133 11.3053 66.6533 12.7962C71.9171 14.4882 75.2771 18.0373 77.7684 24.5933L50.6169 25.2539ZM90.3637 23.7886C96.2908 16.8719 104.393 12.1696 113.343 10.4519C116.571 9.78863 120.24 9.57186 123.072 12.9443C123.694 19.2603 123.692 19.4647 121.892 23.5289C121.708 23.5599 121.52 23.5938 121.329 23.6293C120.645 23.7755 119.95 23.8646 119.251 23.8954C110.16 24.0248 100.595 24.1242 90.8139 24.1902C90.7161 24.1163 90.6235 24.0361 90.5367 23.9497C90.4803 23.896 90.422 23.8416 90.3637 23.7892V23.7886ZM87.3438 107.324C87.5692 99.0609 87.5174 90.9682 87.463 82.3998C87.4397 78.8721 87.4176 75.321 87.415 71.7369C94.0223 70.9456 133.713 69.1293 140.326 69.3066C140.197 69.9155 140.063 70.5237 139.929 71.13C139.514 73.0026 139.087 74.9379 138.839 76.8772C137.936 83.9948 137.235 89.9736 136.742 96.0211C136.172 103.036 135.727 110.175 135.297 117.08C135.171 119.109 135.043 121.139 134.914 123.169C134.731 126.049 134.557 128.93 134.392 131.811C134.198 135.111 134.004 138.407 133.789 141.703C133.73 142.066 133.616 142.418 133.448 142.746C133.398 142.864 133.346 142.983 133.295 143.109H85.4814C85.6758 139.563 85.8882 136.042 86.0994 132.539C86.5988 124.263 87.1151 115.705 87.3438 107.325V107.324ZM149.252 32.2648C149.299 32.3329 149.33 32.4108 149.343 32.4926C149.165 40.0276 148.979 47.5629 148.786 55.3179L148.738 57.2726C148.391 57.3412 148.051 57.4128 147.715 57.484C146.745 57.7143 145.759 57.8765 144.766 57.9693C125.98 59.2433 107.1 59.9189 88.638 59.9752C87.6975 54.7748 87.4105 41.4195 88.1198 35.5488C91.9676 34.6914 96.0227 34.602 99.954 34.5134C101.02 34.4901 102.086 34.4669 103.149 34.4281C105.584 34.3421 108.067 34.3276 110.469 34.314C113.07 34.2992 115.76 34.2837 118.406 34.1763C123.742 33.9608 128.973 33.5647 134.308 33.1409C137.82 32.864 141.33 32.5249 144.723 32.1969C146.094 32.0649 147.445 31.9357 148.777 31.8089C148.861 31.8872 148.933 31.9532 148.998 32.0108C149.089 32.0883 149.174 32.1725 149.252 32.2629V32.2648Z"></path></g></svg>
                    <span>
                        <span className="text-secondary mx-1">Get 1 year </span>of Web-Hosting for free (9 left)</span></p></div><div className="flex flex-col md:flex-row justify-center align-center gap-3"><div className="-space-x-5 avatar-group justy-start">
                        </div>

                    {/* <div className="flex flex-col justify-center items-center md:items-start gap-1">
                    <div className="rating"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5 text-yellow-500"><path fillRule="evenodd" d="M10.868 2.884c-.321-.772-1.415-.772-1.736 0l-1.83 4.401-4.753.381c-.833.067-1.171 1.107-.536 1.651l3.62 3.102-1.106 4.637c-.194.813.691 1.456 1.405 1.02L10 15.591l4.069 2.485c.713.436 1.598-.207 1.404-1.02l-1.106-4.637 3.62-3.102c.635-.544.297-1.584-.536-1.65l-4.752-.382-1.831-4.401z" clipRule="evenodd"></path></svg><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5 text-yellow-500"><path fillRule="evenodd" d="M10.868 2.884c-.321-.772-1.415-.772-1.736 0l-1.83 4.401-4.753.381c-.833.067-1.171 1.107-.536 1.651l3.62 3.102-1.106 4.637c-.194.813.691 1.456 1.405 1.02L10 15.591l4.069 2.485c.713.436 1.598-.207 1.404-1.02l-1.106-4.637 3.62-3.102c.635-.544.297-1.584-.536-1.65l-4.752-.382-1.831-4.401z" clipRule="evenodd"></path></svg><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5 text-yellow-500"><path fillRule="evenodd" d="M10.868 2.884c-.321-.772-1.415-.772-1.736 0l-1.83 4.401-4.753.381c-.833.067-1.171 1.107-.536 1.651l3.62 3.102-1.106 4.637c-.194.813.691 1.456 1.405 1.02L10 15.591l4.069 2.485c.713.436 1.598-.207 1.404-1.02l-1.106-4.637 3.62-3.102c.635-.544.297-1.584-.536-1.65l-4.752-.382-1.831-4.401z" clipRule="evenodd"></path></svg><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5 text-yellow-500"><path fillRule="evenodd" d="M10.868 2.884c-.321-.772-1.415-.772-1.736 0l-1.83 4.401-4.753.381c-.833.067-1.171 1.107-.536 1.651l3.62 3.102-1.106 4.637c-.194.813.691 1.456 1.405 1.02L10 15.591l4.069 2.485c.713.436 1.598-.207 1.404-1.02l-1.106-4.637 3.62-3.102c.635-.544.297-1.584-.536-1.65l-4.752-.382-1.831-4.401z" clipRule="evenodd"></path></svg><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5 text-yellow-500"><path fillRule="evenodd" d="M10.868 2.884c-.321-.772-1.415-.772-1.736 0l-1.83 4.401-4.753.381c-.833.067-1.171 1.107-.536 1.651l3.62 3.102-1.106 4.637c-.194.813.691 1.456 1.405 1.02L10 15.591l4.069 2.485c.713.436 1.598-.207 1.404-1.02l-1.106-4.637 3.62-3.102c.635-.544.297-1.584-.536-1.65l-4.752-.382-1.831-4.401z" clipRule="evenodd"></path></svg></div><div className="text-base text-base-content/80">
                    <span className="font-semibold text-base-content">315</span> makers ship faster</div>
                </div> */}
                </div>
            </div>
                <div className="max-md:-m-4 lg:w-full">
                    <Image src={pointy} height={500} width={500} alt='hero image' />
                </div>
            </section>
        </>
    )
}


export default Hero