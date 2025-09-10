import React from 'react'

const Hero = () => {
  return (
    <div className='flex flex-col sm:flex-row border border-gray-400'>
      <div className='flex  items-center justify-center py-10 sm:py-0 w-full sm:w-1/2'>
      <div className='text-gray'>
        <div className='flex items-center gap-2'>
          <p className='w-8 md:w-11 h-[2px] bg-gray'>
          </p>
          <p className='font-medium md:text-base text-sm'>OUR BEST SELLERS</p>

        </div>
      </div>
      </div>
    </div>
  )
}

export default Hero