import React from 'react'
import Mercedes from '../images/Mercedes Car EQC 300kW Edition - 900x598.png'

export default function Hero() {
  return (
    <div className='lg:absolute lg:inset-y-0 lg:right-0'>
      <div className='absolute inset-x-0 bottom-0 h-60 w-full bg-blue-900 rounded-tl-[3.75rem]' />
      <img
        className='h-full w-full -scale-x-100 lg:mt-14'
        src={Mercedes}
        alt=''
      />
    </div>
  )
}
