import React from 'react'
import { FiCheck } from 'react-icons/fi'

export default function Service() {
  return (
    <div id='our-services' className='py-10'>
      <div className='container mx-auto'>
        <div className='flex items-center'>
          <div className='w-1/2 flex items-center justify-center'>
            <img src='./img/img_service.png' alt='service'/>
          </div>
          <div className='w-1/2'>
            <div className='w-2/3'>
              <h2 className='font-bold text-2xl mb-4'>Best Car Rental for any kind of trip in (Lokasimu)!</h2>
              <p className='mb-4'>Sewa mobil di (Lokasimu) bersama Binar Car Rental jaminan harga lebih murah dibandingkan yang lain, kondisi
                mobil baru, serta kualitas pelayanan terbaik untuk perjalanan wisata, bisnis, wedding, meeting, dll.</p>
              <ul className='space-y-3'>
                <li className='flex items-center'>
                  <FiCheck className='mr-1 bg-primary-3 rounded-full p-1 w-5 h-5 stroke-primary' />
                  <span>
                    Sewa Mobil Dengan Supir di Bali 12 Jam
                  </span>
                </li>
                <li className='flex items-center'>
                  <FiCheck className='mr-1 bg-primary-3 rounded-full p-1 w-5 h-5 stroke-primary' />
                  <span>
                    Sewa Mobil Lepas Kunci di Bali 24 Jam
                  </span>
                </li>
                <li className='flex items-center'>
                  <FiCheck className='mr-1 bg-primary-3 rounded-full p-1 w-5 h-5 stroke-primary' />
                  <span>
                    Sewa Mobil Jangka Panjang Bulanan
                  </span>
                </li>
                <li className='flex items-center'>
                  <FiCheck className='mr-1 bg-primary-3 rounded-full p-1 w-5 h-5 stroke-primary' />
                  <span>
                    Gratis Antar - Jemput Mobil di Bandara
                  </span>
                </li>
                <li className='flex items-center'>
                  <FiCheck className='mr-1 bg-primary-3 rounded-full p-1 w-5 h-5 stroke-primary' />
                  <span>
                    Layanan Airport Transfer / Drop In Out
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
