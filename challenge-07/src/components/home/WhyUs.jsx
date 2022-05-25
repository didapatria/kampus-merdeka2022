import React from 'react'
import { FiAward, FiClock, FiTag, FiThumbsUp } from 'react-icons/fi'

export default function WhyUs() {
  return (
    <div id='why-us' className='md:mt-24 mt-14'>
      <div className='container mx-auto p-4 md:p-0'>
        <h2 className='font-bold text-2xl mb-4'>Why Us?</h2>
        <p className='mb-10'>Mengapa harus pilih Binar Car Rental?</p>
        <div className='md:flex md:space-x-6 space-y-4 md:space-y-0'>
          <div className='border rounded-lg p-6'>
            <div className='m-4'>
              <div className='bg-yellow-500 rounded-full w-8 h-8 mb-3 flex items-center justify-center'>
                <FiThumbsUp className='stroke-white' />
              </div>
              <h3 className='font-bold text-2xl mb-3'>Mobil Lengkap</h3>
              <p>Tersedia banyak pilihan mobil, kondisi masih baru, bersih dan terawat</p>
            </div>
          </div>
          <div className='border rounded-lg p-6'>
            <div className='m-4'>
              <div className='bg-red-500 rounded-full w-8 h-8 mb-3 flex items-center justify-center'>
                <FiTag className='stroke-white' />
              </div>
              <h3 className='font-bold text-2xl mb-3'>Harga Murah</h3>
              <p>Harga murah dan bersaing, bisa bandingkan harga kami dengan rental mobil lain</p>
            </div>
          </div>
          <div className='border rounded-lg p-6'>
            <div className='m-4'>
              <div className='bg-blue-500 rounded-full w-8 h-8 mb-3 flex items-center justify-center'>
                <FiClock className='stroke-white' />
              </div>
              <h3 className='font-bold text-2xl mb-3'>Layanan 24 Jam</h3>
              <p>Siap melayani kebutuhan Anda selama 24 jam nonstop. Kami juga tersedia di akhir
                minggu</p>
            </div>
          </div>
          <div className='border rounded-lg p-6'>
            <div className='m-4'>
              <div className='bg-green-500 rounded-full w-8 h-8 mb-3 flex items-center justify-center'>
                <FiAward className='stroke-white' />
              </div>
              <h3 className='font-bold text-2xl mb-3'>Sopir Profesional</h3>
              <p>Sopir yang profesional, berpengalaman, jujur, ramah dan selalu tepat waktu</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
