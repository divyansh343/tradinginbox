import React, { useState } from 'react'
import FaqListItem from './FaqListItem'


const Faq = () => {
  const faqdata = [
    {
      id: "1",
      que: " How can influencer marketing benefit my business?",
      ans: "Influencer marketing can provide numerous benefits, including expanded brand reach, improved credibility, increased engagement, and a direct link to your target audience. It can also help you tap into new markets and enhance your brand's authenticity.",
    },
    {
      id: "2",
      que: "What makes your influencer marketing platform unique?",
      ans: "Our platform offers a curated network of authentic influencers, cutting-edge campaign management tools, and data-driven insights to optimize your campaigns. We focus on building meaningful partnerships that go beyond one-off collaborations, fostering long-term success.",
    },
    {
      id: "3",
      que: "Is influencer marketing suitable for small businesses?",
      ans: "Yes, influencer marketing can be tailored to fit businesses of all sizes. It's about finding the right influencers whose reach aligns with your brand's goals, regardless of your company's scale.",
    },
    {
      id: "4",
      que: "What type of support do you offer throughout the campaign?",
      ans: "Our team offers dedicated support throughout the campaign journey, from helping you identify the right influencers to providing guidance on content strategy, performance optimization, and analyzing results.",
    },
  ]
  return (
    <div className='px-5 lg:px-10 lg:h-screen '> 
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