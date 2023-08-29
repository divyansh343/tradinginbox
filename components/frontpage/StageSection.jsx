import React from 'react'

const StageSection = () => {
  return (
    <div div className='mx-5 lg:mx-10 bg-base-100 py-20'>
      <div className="flex flex-col md:flex-row items-center gap-4">
        <div className="flex-1 w-full card card-compact md:card-normal bg-base-100 text-left">
          <div className="card-body flex-row md:flex-col items-center md:items-start gap-4 md:gap-8">
            <span className="text-5xl md:text-6xl">🎯</span>
            <div>
              <div className="card-title pb-2">Set a goal</div>
              <div className="italic opacity-80">
                <div>I want to lose weight</div>
                <div>I want to read more books</div>
              </div>
            </div>
          </div>
        </div>
        <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="arrow-right" className="svg-inline--fa fa-arrow-right w-5 h-5 opacity-30 rotate-90 md:rotate-0" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path fill="currentColor" d="M438.6 278.6l-160 160C272.4 444.9 264.2 448 256 448s-16.38-3.125-22.62-9.375c-12.5-12.5-12.5-32.75 0-45.25L338.8 288H32C14.33 288 .0016 273.7 .0016 256S14.33 224 32 224h306.8l-105.4-105.4c-12.5-12.5-12.5-32.75 0-45.25s32.75-12.5 45.25 0l160 160C451.1 245.9 451.1 266.1 438.6 278.6z"></path></svg><div className="flex-1 w-full card card-compact md:card-normal bg-base-100 text-left"><div className="card-body flex-row md:flex-col items-center md:items-start gap-4 md:gap-8"><span className="text-5xl md:text-6xl -scale-x-1">🏃</span><div><div className="card-title pb-2">Try your best</div>
          <div className="italic opacity-80"><div>Read Atomic Habits</div>
            <div>Watch productivity videos</div>
          </div>
        </div>
        </div>
        </div>
        <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="arrow-right" className="svg-inline--fa fa-arrow-right w-5 h-5 opacity-30 rotate-90 md:rotate-0" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path fill="currentColor" d="M438.6 278.6l-160 160C272.4 444.9 264.2 448 256 448s-16.38-3.125-22.62-9.375c-12.5-12.5-12.5-32.75 0-45.25L338.8 288H32C14.33 288 .0016 273.7 .0016 256S14.33 224 32 224h306.8l-105.4-105.4c-12.5-12.5-12.5-32.75 0-45.25s32.75-12.5 45.25 0l160 160C451.1 245.9 451.1 266.1 438.6 278.6z"></path></svg><div className="flex-1 w-full card card-compact md:card-normal bg-base-100 text-left"><div className="card-body flex-row md:flex-col items-center md:items-start gap-4 md:gap-8"><span className="text-5xl md:text-6xl">🤦</span><div><div className="card-title pb-2">But life doesnt change...</div>
          <div className="italic opacity-80"><div>Im not motivated</div>
            <div>“I forget my new habits”</div>
          </div>
        </div>
        </div>
        </div>
      </div>

    </div>
  )
}

export default StageSection