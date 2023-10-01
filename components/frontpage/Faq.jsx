import React, { useState } from 'react'
import FaqListItem from './FaqListItem'
import Image from 'next/image'
import pointy from '../../assets/images/faq.png'


const Faq = () => {
  const faqdata = [
    {
      id: 1,
      que: " What is significance of branding, and why is it important?",
      ans: " It involves defining and maintaining consistency in various design elements, such as fonts, colors, and alignment, to create a strong and memorable brand identity.",
    },
    {
      id: 2,
      que: "How can a professionally designed website benefit my business?",
      ans: "A professionally designed website not only enhances your online presence but also builds credibility, improves user experience, and can lead to higher conversion rates. It's a vital tool for attracting and retaining customers.",
    },
    {
      id: 3,
      que: "Can you assist with website maintenance and updates?",
      ans: "Yes, we offer ongoing maintenance and support services to ensure your website remains secure, up-to-date, and optimized for peak performance.",
    },
    {
      id: 4,
      que: "Do you offer custom web design services?",
      ans: "Absolutely! We provide custom web design services that align with your brand identity, goals, and target audience. Our designs are unique, user-friendly, and optimized for mobile devices.",
    },
  
    {
      id: 5,
      que: "How do you approach SEO to improve rankings?",
      ans: "Our SEO process involves thorough keyword research, on-page optimization, content creation, strategic link building, and continuous monitoring. We follow industry best practices to elevate your website's rankings.",
    },
    {
      id: 6,
      que: "Are you up-to-date with design and tech trends?",
      ans: " Absolutely, staying current with design and technology trends is integral to our agency's approach. We recognize that the digital landscape is ever-evolving, with new design & aesthetics. ",
    },
  
    {
      id: 7,
      que: " How can I get in touch with you?",
      ans: " Simply reach out to us through our contact page or by giving us a call. We'll schedule a consultation to discuss your specific needs and create a tailored social media strategy for your business.",
    },
  ]
  return (
    <div className='px-5 lg:px-10 py-10 bg-blue-100/10 '> 
      <div className="py-24 px-5 max-w-7xl mx-auto flex flex-col md:flex-row gap-12 md:gap-16">
        <div className="flex flex-col text-left basis-1/2">
          <p className="inline-block font-semibold text-gradient-warm mb-4">FAQ</p>
          <p className="sm:text-4xl text-3xl font-extrabold text-base-content">Frequently Asked Questions</p>
          <Image src={pointy} className='w-44 mt-5' alt="11" height={400} width={400} />
        </div>

        <ul className="basis-1/2">
          {
            faqdata.map(item => (
              <>
                <FaqListItem key={item.id} que={item.que} ans={item.ans} />
              </>
            ))
          }
        </ul>
      </div>
    </div>


  )
}

export default Faq