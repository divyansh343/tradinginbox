import React, { useState } from 'react'
import FaqListItem from './FaqListItem'


const Faq = () => {
  const faqdata = [
    {
      id: "1",
      que: "What do I get exactly",
      ans: "You get a workbook online with 10 exercises to practice your language skills 📚 Each exercise contains 10 questions with answers. Exercises are custom-made for you based on your language level & your favorite topics 😍",
    },
    {
      id: "1",
      que: "What do I get exactly",
      ans: "You get a workbook online with 10 exercises to practice your language skills 📚 Each exercise contains 10 questions with answers. Exercises are custom-made for you based on your language level & your favorite topics 😍",
    },
  ]
  return (
    <div className='px-5 lg:px-10 lg:h-screen bg-base-200'> 
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