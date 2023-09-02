import React, { useState } from 'react'
import FaqListItem from './FaqListItem'


const Faq = () => {
  const faqdata = [
    {
      id: "1",
      que: "How can a professionally designed website benefit my business?",
      ans: "A professionally designed website not only enhances your online presence but also builds credibility, improves user experience, and can lead to higher conversion rates. It's a vital tool for attracting and retaining customers.",
    },
    {
      id: "2",
      que: "Do you offer custom web design services?",
      ans: "Absolutely! We provide custom web design services that align with your brand identity, goals, and target audience. Our designs are unique, user-friendly, and optimized for mobile devices.",
    },
    {
      id: "3",
      que: "Can you assist with website maintenance and updates?",
      ans: "Yes, we offer ongoing maintenance and support services to ensure your website remains secure, up-to-date, and optimized for peak performance.",
    },
    {
      id: "4",
      que: "How do you approach SEO to improve search engine rankings?",
      ans: "Our SEO process involves thorough keyword research, on-page optimization, content creation, strategic link building, and continuous monitoring. We follow industry best practices to elevate your website's rankings.",
    },
  ]
  return (
    <div className='px-5 lg:px-10 py-10 bg-base-100 '> 
      <div className="py-24 px-5 max-w-7xl mx-auto flex flex-col md:flex-row gap-12 md:gap-16">
        <div className="flex flex-col text-left basis-1/2">
          <p className="inline-block font-semibold text-gradient-warm mb-4">FAQ</p>
          <p className="sm:text-4xl text-3xl font-extrabold text-base-content">Frequently Asked Questions</p>
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