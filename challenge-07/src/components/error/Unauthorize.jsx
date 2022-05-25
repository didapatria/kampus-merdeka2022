import React from 'react'
import { Link } from 'react-router-dom'

export default function Unauthorize() {
  return (
    <div className='flex h-screen'>
      <div className='m-auto'>
        <div className='grid grid-cols-4 gap-5'>
          <div className='text-right'>
            <h1 className='text-6xl tracking-tight font-extrabold text-gray-900'>
              <span className='text-blue-900'>401</span>
            </h1>
          </div>
          <div className='col-span-3'>
            <h1 className='text-6xl tracking-tight font-extrabold text-gray-900'>
              <span className=''>Unauthorized!</span>
            </h1>
            <p className='mt-2 text-base text-gray-400 sm:text-lg sm:max-w-xl sm:mx-auto md:text-xl lg:mx-0'>
              You should Sign In with correct user
            </p>
            <Link
              type='submit'
              className='bg-blue-900 rounded-lg font-medium text-white hover:bg-white hover:text-blue-900 hover:shadow-lg hover:shadow-blue-900/50 px-3 py-2 mt-10 self-center'
              to='/'
            >
              Go back home
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
