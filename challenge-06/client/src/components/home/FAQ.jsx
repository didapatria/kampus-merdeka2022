import React from 'react'

export default function FAQ() {
  return (
    <div className='container mx-auto p-4 md:p-0 md:mt-24 mt-14 md:flex justify-between'>
      <div className='md:w-1/4'>
        <div className='font-bold text-2xl mb-3'>Frequently Asked Question</div>
        <div>Mengapa harus pilih Binar Car Rental?</div>
      </div>
      <div className='md:w-1/2'>
        <div className='border rounded px-6 py-5 mb-4'>Apa saja syarat yang dibutuhkan?</div>
        <div className='border rounded px-6 py-5 mb-4'>Berapa hari minimal sewa mobil lepas kunci?</div>
        <div className='border rounded px-6 py-5 mb-4'>Berapa hari sebelumnya sabaiknya booking sewa mobil?</div>
        <div className='border rounded px-6 py-5 mb-4'>Apakah Ada biaya antar-jemput?</div>
        <div className='border rounded px-6 py-5 mb-4'>Bagaimana jika terjadi kecelakaan</div>
      </div>
    </div>
  )
}
