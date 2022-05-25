import React from 'react'
import Accordion from './Accordion'

export default function FAQ() {
  return (
    <div id='faq' className='container mx-auto p-4 md:p-0 md:mt-24 mt-14 md:flex justify-between'>
      <div className='md:w-1/3'>
        <div className='font-bold text-2xl mb-3'>Frequently Asked Question</div>
        <div>Mengapa harus pilih Binar Car Rental?</div>
      </div>
      <div className='md:w-2/3'>
        <Accordion />
      </div>
    </div>
  )
}
