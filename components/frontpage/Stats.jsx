import React from 'react'
import arr from '../../assets/images/arr.png'
import Image from 'next/image'
import { BsArrowDownRight, BsArrowDownRightSquare } from 'react-icons/bs'


const Stats = () => {
  return (
    <div className='grid justify-center py-24 px-5 lg:px-72'>
      <p className="flex items-center my-4 text-xl gap-2">
        <span className='mx-3 text-primary' >
          <BsArrowDownRightSquare />
        </span>
        <span>
          On average, organic search accounts for 53% of all website traffic.
        </span>
      </p>
      <p className="flex items-center my-4 text-xl gap-2">
        <span className='mx-3 text-primary' >
          <BsArrowDownRightSquare />
        </span>
        <span>
          41% of clicks go to the top three paid ads in search engine results.
        </span>
      </p>

    </div>
  )
}

export default Stats