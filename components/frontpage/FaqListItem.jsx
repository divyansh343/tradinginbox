import React, { useState } from 'react'

const FaqListItem = ({ que, ans }) => {
  const [toggle, settoggle] = useState(1)
  return (
    <>
      <li>
        <button onClick={toggle === 0 ? () => settoggle(1) : () => settoggle(0)}
          className="relative flex gap-2 items-center w-full py-5 text-base font-semibold text-left border-t md:text-lg border-base-content/10" aria-expanded="false"><span className="flex-1 text-base-content ">{que}</span>
          <svg className="flex-shrink-0 w-4 h-4 ml-auto fill-current" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg"><rect y="7" width="16" height="2" rx="1" className="transform origin-center transition duration-200 ease-out false"></rect><rect y="7" width="16" height="2" rx="1" className="transform origin-center rotate-90 transition duration-200 ease-out false"></rect></svg></button>
        {
          toggle === 0 ?
            <>
              <div className="transition-all duration-300 ease-in-out opacity-80 overflow-hidden" >
                <div className="pb-5 leading-relaxed">{ans}
                </div>
              </div>
            </> : null
        }

      </li>

    </>
  )
}

export default FaqListItem