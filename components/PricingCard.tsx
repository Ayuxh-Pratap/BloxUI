import React from 'react'

const PricingCard = () => {
  return (
    <div className="w-90 sm:w-96 rounded-[8px] bg-[#F5F4FF] p-6 flex flex-col lg:justify-between">
          <div>
            <h3 className="font-medium text-[#4328EB] text-[18px] lg:text-xl">
              Free Trial
            </h3>
            <p className="pt-[12px] text-[#36485C] lg:text-[18px]">
              Perfect for testing the waters
            </p>

            <h2 className="pt-4 text-2xl text-black font-medium lg:text-[32px]">
              Rs.0<span className="text-[#5F7896]">/mo</span>
            </h2>

            <ul className="flex flex-col gap-y-2 pt-4 text-[#5F7896]">
              <li className="flex items-center gap-x-2">
                Unlimited Components
              </li>
              <li className="flex items-center gap-x-2">
                Free React/Next SourceCode
              </li>
              <li className="flex items-center gap-x-2">
                Access to Variants 
              </li>
            </ul>
          </div>
          <button className="mt-[16px] rounded-[4px] bg-white py-[14px] text-[#4328EB] font-medium">
            Browse Components
          </button>
        </div>
  )
}

export default PricingCard