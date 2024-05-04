import React from 'react'
import howItWorks from '../../../utils/howItWorks';

function HowItWorks() {
  return (
    <div className="space-y-16 mt-40 bg-red-30 w-full h-screen flex flex-col items-center justify-center">
    <h2 className="text-5xl font-bold font-poppins text-center text-orange-500 ">
      How It Works
    </h2>
    <div className="px-16 flex flex-wrap justify-between gap-5 w-full">
        
      {howItWorks.map((reasons) => {
        return (
          <button
            key={reasons.keyword}
            className="relative group w-[23%] aspect-square outline-orange-500 bg-gradient-to-r from-orange-500 to-orange-600 rounded-xl overflow-hidden"
          >
            <div className="absolute size-full -right-32 -top-32 animate-ping flex items-center justify-center overflow-hidden">
              <div className="absolute size-[5rem] rounded-full border border-orange-500"></div>
              <div className="absolute size-[10rem] rounded-full border border-orange-500"></div>
              <div className="absolute size-[15rem] rounded-full border border-orange-500"></div>
              <div className="absolute size-[20rem] rounded-full border border-orange-500"></div>
            </div>
            <div className="absolute z-10 bottom-4 left-4 right-4 group-hover:hidden group-focus-within:hidden transiton-all font-poppins text-white font-medium text-left">
              {reasons.keyword}
            </div>
            <div className="hidden size-full group-hover:flex group-focus-within:flex items-center justify-center text-sm transition-all font-inter p-3 text-white font-medium">
              {reasons.text}
            </div>
          </button>
        );
      })}
    </div>
  </div>
  )
}

export default HowItWorks