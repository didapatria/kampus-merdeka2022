import React from 'react'
import { FiFacebook, FiInstagram, FiTwitter, FiMail, FiTwitch } from 'react-icons/fi'

export default function Footer() {
  return (
    <footer className='max-w-7xl mx-auto'>
      <div className='px-5 py-24 mx-2 flex flex-grow flex-wrap gap-y-10'>
        <ul className='lg:w-1/4 md:w-1/2 w-full px-4'>
          <li className='pb-4'>Jalan Suroyo No. 161 Mayangan Kota Probolonggo 672000</li>
          <li className='pb-4'>binarcarrental@gmail.com</li>
          <li className='pb-4'>081-233-334-808</li>
        </ul>

        <ul className='lg:w-1/4 md:w-1/2 w-full px-4'>
          <li className='pb-4'><a href='#our-services' className=''>Our services</a></li>
          <li className='pb-4'><a href='#why-us' className=''>Why Us</a></li>
          <li className='pb-4'><a href='#testimonial' className=''>Testimonial</a></li>
          <li className='pb-4'><a href='#faq' className=''>FAQ</a></li>
        </ul>
        
        <ul className='lg:w-1/4 md:w-1/2 w-full px-4'>
          <li className='pb-4'>Connect with us</li>
          <div className='flex'>
            <FiFacebook className='bg-blue-900 text-white text-3xl p-1 mr-2 rounded-full' />
            <FiInstagram className='bg-blue-900 text-white text-3xl p-1 mx-2 rounded-full' />
            <FiTwitter className='bg-blue-900 text-white text-3xl p-1 mx-2 rounded-full' />
            <FiMail className='bg-blue-900 text-white text-3xl p-1 mx-2 rounded-full' />
            <FiTwitch className='bg-blue-900 text-white text-3xl p-1 ml-2 rounded-full' />
          </div>
        </ul>

        <div className='lg:w-1/4 md:w-1/2 w-full px-4'>
          <p className='pb-4'>Copyright Binar 2022</p>
          <div className='h-8 w-24 bg-blue-900' />
        </div>
      </div>
    </footer>
  )
}
