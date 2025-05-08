import React from 'react'
import { Typewriter } from 'react-simple-typewriter'

const Promotional = () => {
  return (
    <div className='h-[40px] flex justify-center items-center bg-[#1F4529] text-white'>
      <Typewriter
            words={['Free Shipping on Orders more than £50', 'explore ready fav brands']}
            loop={5}
            cursor
            cursorStyle='_'
            typeSpeed={70}
            deleteSpeed={50}
            delaySpeed={1000}
            />
    </div>
  )
}

export default Promotional
