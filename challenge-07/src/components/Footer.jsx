import React from 'react'
import { FiFacebook, FiInstagram, FiTwitter, FiMail, FiTwitch } from 'react-icons/fi'

export default function Footer() {
  return (
    <footer className='container mx-auto p-4 md:p-0'>
      <div className='py-24 md:flex space-y-4 md:space-y-0'>
        <div className='md:w-1/3'>
          <ul className='space-y-4'>
            <li>Jalan Suroyo No. 161 Mayangan Kota Probolonggo 672000</li>
            <li>binarcarrental@gmail.com</li>
            <li>081-233-334-808</li>
          </ul>
        </div>

        <div className='flex-1 md:flex justify-between space-y-4 md:space-y-0'>
          <div>
            <ul className='space-y-4'>
              <li><a href='#our-services' className='hover:text-primary'>Our services</a></li>
              <li><a href='#why-us' className='hover:text-primary'>Why Us</a></li>
              <li><a href='#testimonial' className='hover:text-primary'>Testimonial</a></li>
              <li><a href='#faq' className='hover:text-primary'>FAQ</a></li>
            </ul>
          </div>
          <div>
            <ul>
              <li className='pb-4'>Connect with us</li>
              <li className='flex'>
                <FiFacebook className='bg-blue-900 text-white text-3xl p-1 mr-2 rounded-full' />
                <FiInstagram className='bg-blue-900 text-white text-3xl p-1 mx-2 rounded-full' />
                <FiTwitter className='bg-blue-900 text-white text-3xl p-1 mx-2 rounded-full' />
                <FiMail className='bg-blue-900 text-white text-3xl p-1 mx-2 rounded-full' />
                <FiTwitch className='bg-blue-900 text-white text-3xl p-1 ml-2 rounded-full' />
              </li>
            </ul>
          </div>
          <div>
            <p className='pb-4'>Copyright Binar 2022</p>
            <div className='h-8 w-24 bg-blue-900' />
          </div>
        </div>
      </div>
    </footer>
  )
}
