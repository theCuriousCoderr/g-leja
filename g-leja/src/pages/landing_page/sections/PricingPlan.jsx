import { CheckCircle } from '@mui/icons-material';
import React from 'react'
import basicFeatures from '../../../utils/basicFeatures';
import premiumFeatures from '../../../utils/premiumFeatures';

function PricingPlan() {
  return (
    <div className="relative space-y-16 bg-red-30 w-full h-screen xs:max-md:h-auto xs:max-md:mt-20 flex flex-col items-center justify-center">
          {/* <div className="absolute size-full bg-yellow-400 z-20"></div> */}
          <h2 className="text-5xl xs:max-md:text-3xl font-bold font-poppins text-center text-orange-500 ">
            Pick Your Preferred Plan
          </h2>
          <div className="flex xs:max-md:flex-col gap-10 justify-center items-center">
            <div className="p-1 rounded-[1.25rem] bg-transparent hover:scale-105 hover:shadow-md hover:shadow-orange-500 transition-all xs:max-md:w-[90%]">
              <div className="p-5 bg-transparent border-2 border-orange-300  rounded-2xl space-y-6">
                <p className="text-xl font-semibold font-inter text-orange-500">
                  Basic
                </p>
                <div>
                  <p className="text-3xl font-black font-roboto">Free</p>
                  <p className="text-xs font-roboto">
                    Manage and track your finance movement
                  </p>
                </div>
                <p className="text-base font-semibold">
                  Free plan for all users
                </p>
                <div className="space-y-2">
                    
                  {basicFeatures.map((features) => {
                    return (
                      <div key={features} className="flex items-center gap-2">
                        <div className="size-3 text-orange-500 rounded-full flex items-center justify-center">
                          <CheckCircle sx={{ fontSize: 15 }} />
                        </div>
                        <p className="text-xs font-poppins">{features}</p>
                      </div>
                    );
                  })}
                </div>
                <div>
                  <button className="px-3 py-2 bg-orange-500 hover:bg-orange-700 text-white rounded-md text-xs font-light">
                    Sign Up for Free
                  </button>
                </div>
              </div>
            </div>

            <div className="relative p-1 rounded-[1.25rem] bg-transparent hover:scale-105 hover:shadow-md hover:shadow-orange-500 transition-all xs:max-md:w-[90%]">
              <div className="absolute -top-3 z-10 w-full flex items-center justify-center">
                <span className="px-2 py-1 text-xs h-7 bg-orange-500 text-white font-semibold rounded-md ">
                  Most Preferred
                </span>
              </div>
              <div className="p-5 bg-transparent border-2 border-orange-300  rounded-2xl space-y-6">
                <p className="text-xl font-semibold font-inter text-orange-500">
                  Premium
                </p>
                <div>
                  <p className="text-3xl font-black font-roboto">
                    NGN5,000<span className="text-sm font-normal">/month</span>
                  </p>
                  <p className="text-xs font-roboto">
                    Do more with G-Leja. Go Premium
                  </p>
                </div>
                <p className="text-base font-semibold">
                  All basic features plus:
                </p>
                <div className="space-y-2">
                    
                  {premiumFeatures.map((features) => {
                    return (
                      <div key={features} className="flex items-center gap-2">
                        <div className="size-3 text-orange-500 rounded-full flex items-center justify-center">
                          <CheckCircle sx={{ fontSize: 15 }} />
                        </div>
                        <p className="text-xs font-poppins">{features}</p>
                      </div>
                    );
                  })}
                </div>
                <div>
                  <button className="px-3 py-2 bg-orange-500 hover:bg-orange-700 text-white rounded-md text-xs font-light">
                    Go Premium
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
  )
}

export default PricingPlan