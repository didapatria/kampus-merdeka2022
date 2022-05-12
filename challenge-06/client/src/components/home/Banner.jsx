import React from 'react'
import { Link } from 'react-router-dom'

export default function Banner() {
  return (
    <div className='md:mt-24 mt-14 text-center'>
      <div className='container mx-auto p-4 md:p-0'>
        <div className='bg-primary rounded-xl text-white'>
          <div className='py-16'>
            <h1 className='font-bold text-4xl mb-4'>Sewa Mobil di (Lokasimu) Sekarang</h1>
            <p className='mb-14 w-1/3 mx-auto'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
              tempor incididunt ut labore et dolore magna aliqua. </p>
            <Link to='/search' className='rounded-sm px-5 py-3 text-center font-medium bg-green-500 text-white mt-8' type='submit'>Mulai Sewa Mobil</Link>
          </div>
        </div>
      </div>
    </div>
  )
}
