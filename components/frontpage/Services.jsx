import { FaTelegram } from "react-icons/fa";
import arr from '../../assets/images/portraits/seven.jpeg'

import React from 'react'
import Link from "next/link";
import Image from "next/image";

const Services = () => {
  return (
    <div id="service" className="bg-base-100  overflow-hidden">
      <div className="py-24 px-4 max-w-7xl grid justify-center mx-auto">
        <div className="flex flex-col text-center w-full my-10">
          <div className="mb-4">
            <h2 className=" text-3xl md:text-4xl font-bold text-base-content">
              Our Services
            </h2>
          </div>
          <p className="mx-auto font-medium text-gradient-cold mb-4">Your growth, Our Commitment: Explore Our Services</p>
          {/* <div className="md:w-2/3 mx-auto leading-relaxed text-base text-base-content-secondary">begins with strategic selection.
            <h3 className="">Launch your project today!
            </h3>
          </div> */}
        </div>
        <div className="container md:px-3 lg:px-10">

          <div className="grid gap-4  md:grid-cols-2">

            <Link href="/web_development">
              <div data-aos="fade-up" data-aos-duration="1000" className="aos-init aos-animate">
                <div className="group rounded-3xl cursor-pointer border-primary bg-primary/10 p-6 shadow-[-20px_30px_70px_rgba(219,222,225,0.4)] transition duration-500  hover:bg-primary/20 ">
                  <div className="flex h-14 w-14 items-center justify-center rounded-full bg-primary shadow-[0px_15px_30px_rgba(180,118,229,0.4)] transition group-hover:bg-black">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path opacity="0.5" d="M10.1658 20C10.5862 20 10.9617 19.7371 11.1054 19.342L15.8374 6.34204C16.0749 5.68981 15.5919 5 14.8978 5H13.8341C13.4137 5 13.0382 5.26292 12.8945 5.65796L8.16245 18.658C7.92504 19.3102 8.40804 20 9.10214 20H10.1658Z" fill="white"></path>
                      <path d="M17.9889 17.0964C18.3794 17.4871 19.0127 17.4873 19.4034 17.0966L23.2929 13.2071C23.6834 12.8166 23.6834 12.1834 23.2929 11.7929L19.4036 7.90359C19.0129 7.51287 18.3793 7.5131 17.9889 7.90409L17.2814 8.61254C16.8913 9.00328 16.8916 9.63632 17.2823 10.0266L19.0501 11.7927C19.441 12.1832 19.441 12.8168 19.0502 13.2074L17.2822 14.9746C16.8916 15.365 16.8914 15.9981 17.2818 16.3888L17.9889 17.0964ZM4.94994 13.2073C4.55904 12.8167 4.55896 12.1832 4.94977 11.7925L6.71781 10.0253C7.10839 9.63494 7.10858 9.00184 6.71823 8.61121L6.01111 7.90359C5.62062 7.51283 4.98726 7.51272 4.59664 7.90334L0.707106 11.7929C0.316582 12.1834 0.316582 12.8166 0.707107 13.2071L4.59639 17.0964C4.98711 17.4871 5.62066 17.4869 6.01111 17.0959L6.71856 16.3874C7.10874 15.9967 7.10837 15.3637 6.71773 14.9734L4.94994 13.2073Z" fill="white"></path>
                    </svg>
                  </div>
                  <a href="services-detail.html" className="mt-8 mb-6 inline-block text-lg font-bold   ">Website Development & Managemet</a>

                  <p className="mb-10 text-md md:text-base  transition line-clamp-3 ">
                    Our team of designers transforms your ideas into visually captivating designs that resonate with your brand.
                  </p>

                  <div>
                    <ul className="space-y-3 grid text-base-content-secondary">

                      <li className="flex items-center gap-x-3"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5 inline text-primary shrink-0"><path fillRule="evenodd" d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z" clipRule="evenodd"></path></svg>Responsive Design</li>

                      <li className="flex items-center gap-x-3"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5 inline text-primary shrink-0"><path fillRule="evenodd" d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z" clipRule="evenodd"></path></svg>Fast Loading Speed</li>

                      <li className="flex items-center gap-x-3"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5 inline text-primary shrink-0"><path fillRule="evenodd" d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z" clipRule="evenodd"></path></svg>
                        <span className="">SEO-Friendly
                        </span>
                      </li>

                      <li className="flex items-center gap-x-3"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5 inline text-primary shrink-0"><path fillRule="evenodd" d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z" clipRule="evenodd"></path></svg>
                        <span className="">UI,UX Friendly
                        </span>
                      </li>

                      <li className="flex items-center gap-x-3"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5 inline text-primary shrink-0"><path fillRule="evenodd" d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z" clipRule="evenodd"></path></svg>
                        <span className="">
                          <span data-for="stripe" data-tip="stripe" className="text-base-content font-medium underline decoration-purple-400 decoration-dashed underline-offset-2 hover:decoration-solid duration-200 cursor-help" currentitem="false">Social Media Integration</span>
                        </span>
                      </li>

                      <li className="flex items-center gap-x-3"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5 inline text-primary shrink-0"><path fillRule="evenodd" d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z" clipRule="evenodd"></path></svg>
                        Scalability
                      </li>

                    </ul>
                  </div>

                  <a href="services-detail.html" className="flex h-11 w-11 mt-6 items-center justify-center rounded-full bg-[#F3F4F6] transition group-hover:bg-black rtl:rotate-180 dark:bg-gray-dark">
                    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" className=" transition group-hover:text-white ">
                      <path d="M9.41083 14.4109L10.5892 15.5892L16.1783 10.0001L10.5892 4.41089L9.41083 5.58922L12.9883 9.16672H5V10.8334H12.9883L9.41083 14.4109Z" fill="currentColor"></path>
                    </svg>
                  </a>
                </div>
              </div>
            </Link>

            <Link href="/brand_magnet">
              <div data-aos="fade-up" data-aos-duration="1000" className="aos-init aos-animate">
                <div className="group  rounded-3xl cursor-pointer border-primary bg-primary/10 p-6 shadow-[-20px_30px_70px_rgba(219,222,225,0.4)] transition duration-500  hover:bg-primary/20 ">
                  <div className="grid grid-flow-col gap-0">

                    <div className="flex h-14 w-14 items-center justify-center rounded-full bg-primary shadow-[0px_15px_30px_rgba(180,118,229,0.4)] text-white transition group-hover:bg-black">
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path opacity="0.5" d="M14.2371 18.7087L18.7103 14.2366L21.4893 17.0156V21.4888H17.0172L14.2371 18.7087ZM5.2917 9.76334L2.3092 6.7819C2.21118 6.68399 2.13342 6.56771 2.08036 6.43973C2.02731 6.31174 2 6.17455 2 6.03601C2 5.89746 2.02731 5.76027 2.08036 5.63229C2.13342 5.5043 2.21118 5.38803 2.3092 5.29012L5.2917 2.30867C5.4894 2.11103 5.75751 2 6.03706 2C6.31662 2 6.58472 2.11103 6.78242 2.30867L9.76598 5.29012L5.2917 9.76334Z" fill="white"></path>
                        <path d="M5.29177 12.7459L7.21895 14.6742L8.71179 13.1813L6.78249 11.2552L8.27321 9.76449L10.2015 11.6917L11.6922 10.201L9.76605 8.27271L11.2568 6.78199L13.1818 8.71128L14.6736 7.2195L12.7454 5.29232L15.7279 2.31087C15.9256 2.11323 16.1937 2.0022 16.4732 2.0022C16.7528 2.0022 17.0209 2.11323 17.2186 2.31087L21.6908 6.78304C21.8884 6.98074 21.9994 7.24885 21.9994 7.5284C21.9994 7.80795 21.8884 8.07606 21.6908 8.27376L8.27321 21.6913C8.07551 21.889 7.8074 22 7.52785 22C7.2483 22 6.98019 21.889 6.78249 21.6913L2.31032 17.2192C2.11268 17.0215 2.00165 16.7533 2.00165 16.4738C2.00165 16.1942 2.11268 15.9261 2.31032 15.7284L5.29177 12.7459Z" fill="white"></path>
                      </svg>
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path opacity="0.5" d="M6.21053 20H3.05263C2.77346 20 2.50572 19.8891 2.30831 19.6917C2.1109 19.4943 2 19.2265 2 18.9474V10.5263C2 10.2471 2.1109 9.97941 2.30831 9.782C2.50572 9.58459 2.77346 9.47369 3.05263 9.47369H6.21053C6.4897 9.47369 6.75744 9.58459 6.95485 9.782C7.15226 9.97941 7.26316 10.2471 7.26316 10.5263V18.9474C7.26316 19.2265 7.15226 19.4943 6.95485 19.6917C6.75744 19.8891 6.4897 20 6.21053 20ZM20.9474 20H17.7895C17.5103 20 17.2426 19.8891 17.0452 19.6917C16.8477 19.4943 16.7368 19.2265 16.7368 18.9474V7.36843C16.7368 7.08925 16.8477 6.82151 17.0452 6.6241C17.2426 6.4267 17.5103 6.3158 17.7895 6.3158H20.9474C21.2265 6.3158 21.4943 6.4267 21.6917 6.6241C21.8891 6.82151 22 7.08925 22 7.36843V18.9474C22 19.2265 21.8891 19.4943 21.6917 19.6917C21.4943 19.8891 21.2265 20 20.9474 20Z" fill="white"></path>
                        <path d="M13.5789 20H10.421C10.1419 20 9.87412 19.8891 9.67672 19.6917C9.47931 19.4943 9.36841 19.2265 9.36841 18.9474V1.05263C9.36841 0.773456 9.47931 0.505715 9.67672 0.308309C9.87412 0.110902 10.1419 0 10.421 0H13.5789C13.8581 0 14.1259 0.110902 14.3233 0.308309C14.5207 0.505715 14.6316 0.773456 14.6316 1.05263V18.9474C14.6316 19.2265 14.5207 19.4943 14.3233 19.6917C14.1259 19.8891 13.8581 20 13.5789 20Z" fill="white"></path>
                      </svg>
                    </div>

                  </div>

                  <a href="services-detail.html" className="mt-8 mb-6 inline-block text-lg font-bold   ">Brand Magnet 360*  </a>

                  <p className="mb-10 text-md md:text-base  transition line-clamp-3 ">
                    Your Complete Digital Brand Evolution. Supercharge Your Brand: Website, SEO, Ads, Social Media, and Brand Identity – All-in-One!
                  </p>
                  <div>
                    <ul className="space-y-3 grid text-base-content-secondary">

                      <li className="flex items-center gap-x-3"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5 inline text-primary shrink-0"><path fillRule="evenodd" d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z" clipRule="evenodd"></path></svg>Brand Awareness Campaigns</li>

                      <li className="flex items-center gap-x-3"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5 inline text-primary shrink-0"><path fillRule="evenodd" d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z" clipRule="evenodd"></path></svg>Social Media Branding</li>

                      <li className="flex items-center gap-x-3"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5 inline text-primary shrink-0"><path fillRule="evenodd" d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z" clipRule="evenodd"></path></svg>
                        <span className="">Website Design
                        </span>
                      </li>

                      <li className="flex items-center gap-x-3"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5 inline text-primary shrink-0"><path fillRule="evenodd" d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z" clipRule="evenodd"></path></svg>
                        <span className="">Brand Strategy
                        </span>
                      </li>

                      <li className="flex items-center gap-x-3"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5 inline text-primary shrink-0"><path fillRule="evenodd" d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z" clipRule="evenodd"></path></svg>
                        <span className="">
                          <span data-for="stripe" data-tip="stripe" className="text-base-content font-medium underline decoration-purple-400 decoration-dashed underline-offset-2 hover:decoration-solid duration-200 cursor-help" currentitem="false">Market Research</span>
                        </span>
                      </li>

                      <li className="flex items-center gap-x-3"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5 inline text-primary shrink-0"><path fillRule="evenodd" d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z" clipRule="evenodd"></path></svg>
                        Logo Design
                      </li>

                    </ul>
                  </div>

                  <a href="services-detail.html" className="flex h-11 w-11 mt-6 items-center justify-center rounded-full bg-[#F3F4F6] transition group-hover:bg-black rtl:rotate-180 dark:bg-gray-dark">
                    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" className=" transition group-hover:text-white ">
                      <path d="M9.41083 14.4109L10.5892 15.5892L16.1783 10.0001L10.5892 4.41089L9.41083 5.58922L12.9883 9.16672H5V10.8334H12.9883L9.41083 14.4109Z" fill="currentColor"></path>
                    </svg>
                  </a>
                </div>
              </div>
            </Link>

            <Link href="/seo">
              <div data-aos="fade-up" data-aos-duration="1000" className="aos-init aos-animate">
                <div className="group rounded-3xl cursor-pointer border-primary bg-primary/10 p-6 shadow-[-20px_30px_70px_rgba(219,222,225,0.4)] transition duration-500  hover:bg-primary/20 dark:border-primary/10 dark:bg-transparent dark:bg-gradient-to-b dark:from-white/[0.04] dark:to-transparent dark:!shadow-none dark:hover:bg-secondary">
                  <div className="flex h-14 w-14 items-center justify-center rounded-full bg-primary shadow-[0px_15px_30px_rgba(180,118,229,0.4)] transition group-hover:bg-black">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path opacity="0.5" d="M14.2371 18.7087L18.7103 14.2366L21.4893 17.0156V21.4888H17.0172L14.2371 18.7087ZM5.2917 9.76334L2.3092 6.7819C2.21118 6.68399 2.13342 6.56771 2.08036 6.43973C2.02731 6.31174 2 6.17455 2 6.03601C2 5.89746 2.02731 5.76027 2.08036 5.63229C2.13342 5.5043 2.21118 5.38803 2.3092 5.29012L5.2917 2.30867C5.4894 2.11103 5.75751 2 6.03706 2C6.31662 2 6.58472 2.11103 6.78242 2.30867L9.76598 5.29012L5.2917 9.76334Z" fill="white"></path>
                      <path d="M5.29177 12.7459L7.21895 14.6742L8.71179 13.1813L6.78249 11.2552L8.27321 9.76449L10.2015 11.6917L11.6922 10.201L9.76605 8.27271L11.2568 6.78199L13.1818 8.71128L14.6736 7.2195L12.7454 5.29232L15.7279 2.31087C15.9256 2.11323 16.1937 2.0022 16.4732 2.0022C16.7528 2.0022 17.0209 2.11323 17.2186 2.31087L21.6908 6.78304C21.8884 6.98074 21.9994 7.24885 21.9994 7.5284C21.9994 7.80795 21.8884 8.07606 21.6908 8.27376L8.27321 21.6913C8.07551 21.889 7.8074 22 7.52785 22C7.2483 22 6.98019 21.889 6.78249 21.6913L2.31032 17.2192C2.11268 17.0215 2.00165 16.7533 2.00165 16.4738C2.00165 16.1942 2.11268 15.9261 2.31032 15.7284L5.29177 12.7459Z" fill="white"></path>
                    </svg>
                  </div>
                  <a href="services-detail.html" className="mt-8 mb-6 inline-block text-lg font-bold   ">SEO</a>
                  <p className="mb-10 text-md md:text-base  transition line-clamp-3 ">
                    SEO services designed to drive your website to the top of search engine results and deliver results.
                  </p>
                  <div>
                    <ul className="space-y-3 grid text-base-content-secondary">

                      <li className="flex items-center gap-x-3"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5 inline text-primary shrink-0"><path fillRule="evenodd" d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z" clipRule="evenodd"></path></svg>Keyword Research</li>

                      <li className="flex items-center gap-x-3"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5 inline text-primary shrink-0"><path fillRule="evenodd" d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z" clipRule="evenodd"></path></svg>On-Page Optimization</li>

                      <li className="flex items-center gap-x-3"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5 inline text-primary shrink-0"><path fillRule="evenodd" d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z" clipRule="evenodd"></path></svg>
                        <span className="">Quality Content Creation
                        </span>
                      </li>

                      <li className="flex items-center gap-x-3"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5 inline text-primary shrink-0"><path fillRule="evenodd" d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z" clipRule="evenodd"></path></svg>
                        <span className="">Backlink Building
                        </span>
                      </li>
                      <li className="flex items-center gap-x-3"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5 inline text-primary shrink-0"><path fillRule="evenodd" d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z" clipRule="evenodd"></path></svg>
                        Technical SEO
                      </li>
                      <li className="flex items-center gap-x-3"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5 inline text-primary shrink-0"><path fillRule="evenodd" d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z" clipRule="evenodd"></path></svg>
                        <span className="">
                          <span data-for="stripe" data-tip="stripe" className="text-base-content font-medium underline decoration-purple-400 decoration-dashed underline-offset-2 hover:decoration-solid duration-200 cursor-help" currentitem="false">Regular SEO Audits</span>
                        </span>
                      </li>



                    </ul>
                  </div>
                  <a href="services-detail.html" className="flex h-11 w-11 mt-6 items-center justify-center rounded-full bg-[#F3F4F6] transition group-hover:bg-black rtl:rotate-180 dark:bg-gray-dark">
                    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" className=" transition group-hover:text-white ">
                      <path d="M9.41083 14.4109L10.5892 15.5892L16.1783 10.0001L10.5892 4.41089L9.41083 5.58922L12.9883 9.16672H5V10.8334H12.9883L9.41083 14.4109Z" fill="currentColor"></path>
                    </svg>
                  </a>
                </div>
              </div>
            </Link>

            <Link href="/digital_marketing">
              <div data-aos="fade-up" data-aos-duration="1000" className="aos-init aos-animate">
                <div className="group rounded-3xl cursor-pointer border-primary bg-primary/10 p-6 shadow-[-20px_30px_70px_rgba(219,222,225,0.4)] transition duration-500  hover:bg-primary/20 dark:border-primary/10 dark:bg-transparent dark:bg-gradient-to-b dark:from-white/[0.04] dark:to-transparent dark:!shadow-none dark:hover:bg-secondary">
                  <div className="flex h-14 w-14 items-center justify-center rounded-full bg-primary shadow-[0px_15px_30px_rgba(180,118,229,0.4)] transition group-hover:bg-black">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path opacity="0.5" d="M6.21053 20H3.05263C2.77346 20 2.50572 19.8891 2.30831 19.6917C2.1109 19.4943 2 19.2265 2 18.9474V10.5263C2 10.2471 2.1109 9.97941 2.30831 9.782C2.50572 9.58459 2.77346 9.47369 3.05263 9.47369H6.21053C6.4897 9.47369 6.75744 9.58459 6.95485 9.782C7.15226 9.97941 7.26316 10.2471 7.26316 10.5263V18.9474C7.26316 19.2265 7.15226 19.4943 6.95485 19.6917C6.75744 19.8891 6.4897 20 6.21053 20ZM20.9474 20H17.7895C17.5103 20 17.2426 19.8891 17.0452 19.6917C16.8477 19.4943 16.7368 19.2265 16.7368 18.9474V7.36843C16.7368 7.08925 16.8477 6.82151 17.0452 6.6241C17.2426 6.4267 17.5103 6.3158 17.7895 6.3158H20.9474C21.2265 6.3158 21.4943 6.4267 21.6917 6.6241C21.8891 6.82151 22 7.08925 22 7.36843V18.9474C22 19.2265 21.8891 19.4943 21.6917 19.6917C21.4943 19.8891 21.2265 20 20.9474 20Z" fill="white"></path>
                      <path d="M13.5789 20H10.421C10.1419 20 9.87412 19.8891 9.67672 19.6917C9.47931 19.4943 9.36841 19.2265 9.36841 18.9474V1.05263C9.36841 0.773456 9.47931 0.505715 9.67672 0.308309C9.87412 0.110902 10.1419 0 10.421 0H13.5789C13.8581 0 14.1259 0.110902 14.3233 0.308309C14.5207 0.505715 14.6316 0.773456 14.6316 1.05263V18.9474C14.6316 19.2265 14.5207 19.4943 14.3233 19.6917C14.1259 19.8891 13.8581 20 13.5789 20Z" fill="white"></path>
                    </svg>
                  </div>
                  <a href="services-detail.html" className="mt-8 mb-6 inline-block text-lg font-bold  ">Digital Marketing</a>
                  <p className="mb-10 text-md md:text-base  transition line-clamp-3 ">
                    Effectively reaching and engaging your target audience is our commitment, and we&apos;re here to be your trusted ally.
                  </p>
                  <div>
                    <ul className="space-y-3 grid text-base-content-secondary">

                      <li className="flex items-center gap-x-3"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5 inline text-primary shrink-0"><path fillRule="evenodd" d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z" clipRule="evenodd"></path></svg>Strategic Campaign Planning</li>

                      <li className="flex items-center gap-x-3"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5 inline text-primary shrink-0"><path fillRule="evenodd" d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z" clipRule="evenodd"></path></svg>Targeted Advertising</li>

                      <li className="flex items-center gap-x-3"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5 inline text-primary shrink-0"><path fillRule="evenodd" d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z" clipRule="evenodd"></path></svg>
                        <span className="">Multi-Platform Presence
                        </span>
                      </li>

                      <li className="flex items-center gap-x-3"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5 inline text-primary shrink-0"><path fillRule="evenodd" d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z" clipRule="evenodd"></path></svg>
                        <span className="">Keyword Research
                        </span>
                      </li>

                      <li className="flex items-center gap-x-3"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5 inline text-primary shrink-0"><path fillRule="evenodd" d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z" clipRule="evenodd"></path></svg>
                        <span className="">
                          <span data-for="stripe" data-tip="stripe" className="text-base-content font-medium underline decoration-purple-400 decoration-dashed underline-offset-2 hover:decoration-solid duration-200 cursor-help" currentitem="false">Budget Management</span>
                        </span>
                      </li>

                      <li className="flex items-center gap-x-3"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5 inline text-primary shrink-0"><path fillRule="evenodd" d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z" clipRule="evenodd"></path></svg>
                        Ad Copywriting
                      </li>

                    </ul>
                  </div>
                  <a href="services-detail.html" className="flex h-11 w-11 mt-6 items-center justify-center rounded-full bg-[#F3F4F6] transition group-hover:bg-black rtl:rotate-180 dark:bg-gray-dark">
                    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" className=" transition group-hover:text-white ">
                      <path d="M9.41083 14.4109L10.5892 15.5892L16.1783 10.0001L10.5892 4.41089L9.41083 5.58922L12.9883 9.16672H5V10.8334H12.9883L9.41083 14.4109Z" fill="currentColor"></path>
                    </svg>
                  </a>
                </div>
              </div>
            </Link>

          </div>
        </div>
      </div>
      <div className="space-y-4 mx-auto px-8 max-w-md mb-24"><svg xmlns="http://www.w3.org/2000/svg" className="w-8 fill-accent" viewBox="0 0 35 30" fill="none"><path d="M22.3838 27.6777C23.5264 28.9961 25.3721 29.6992 27.4814 29.6992C31.6123 29.6992 34.249 26.9746 34.249 22.7559C34.249 18.625 31.5244 15.6367 27.6572 15.6367C26.8662 15.6367 25.9873 15.8125 25.1084 16.0762C24.5811 9.48438 27.833 4.03516 32.2275 2.36523L31.7881 0.871094C24.2295 3.77148 19.4834 11.1543 19.4834 19.8555C19.4834 22.668 20.5381 25.7441 22.3838 27.6777ZM0.499023 19.8555C0.499023 24.6895 3.22363 29.6992 8.49707 29.6992C12.54 29.6992 15.1768 26.9746 15.1768 22.7559C15.1768 18.625 12.4521 15.6367 8.67285 15.6367C7.88184 15.6367 7.00293 15.8125 6.12402 16.0762C5.59668 9.48438 8.84863 4.03516 13.2432 2.36523L12.7158 0.871094C5.24512 3.77148 0.499023 11.1543 0.499023 19.8555Z"></path></svg><p className="leading-relaxed">I managed to Grow my online business faster with brandcraft support they have managed everything like bread & butter. That is incredible!</p><div className="flex items-center gap-2">

        <Image alt="Ronny testimonial for ShipFast" loading="lazy" width="48" height="48" decoding="async" data-nimg="1" class="w-10 h-10 rounded-full object-cover" src={arr} />

        <p>Adithya Goyal, <span className="font-bold">Synergy ent.</span></p></div></div>
    </div>

  )
}

export default Services