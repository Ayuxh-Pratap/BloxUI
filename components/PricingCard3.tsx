import React from 'react'

const PricingCard3 = () => {
  return (
    <div className="w-90 sm:w-96 rounded-[8px] bg-[#4328EB] p-6 flex flex-col">
          <div>
            <h3 className="font-medium text-white text-[18px] lg:text-xl">
              Business
            </h3>
            <p className="pt-[12px] text-[#F4F8FA] lg:text-[18px]">
              Perfect for small businesses
            </p>

            <h2 className="pt-4 text-2xl font-medium text-white lg:text-[32px]">
              Rs.500<span className="text-[#F4F8FA]">/mo</span>
            </h2>

            <ul className="flex flex-col gap-y-2 pt-4 text-[#F4F8FA]">
              <li className="flex items-center gap-x-2">
                Custom Components
              </li>
              <li className="flex items-center gap-x-2">
                  Modern Web Solutions
              </li>
              <li className="flex items-center gap-x-2">
                Performance Optimization
              </li>
              <li className="flex items-center gap-x-2">
                SEO + Scaling
              </li>
            </ul>
          </div>
          <button className="mt-[16px] rounded-[4px] bg-white py-[14px] text-[#4328EB] font-medium">
            Starting Soon!
          </button>
        </div>
  )
}

export default PricingCard3