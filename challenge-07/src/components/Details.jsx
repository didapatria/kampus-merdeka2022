import React from 'react'
import { FiUsers, FiSettings, FiCalendar } from 'react-icons/fi'
import { Link } from 'react-router-dom'

export default function Details(props) {
  const data = props.data

  const currencyFormatter = (value) => {
    const formattedAmount = Math.trunc(value)
      .toString()
      .replace(/(\d)(?=(\d{3})+(?:\.\d+)?$)/g, '$1,')
    return formattedAmount
  }

  return (
    <div className='container mx-auto p-4 md:p-0 mt-9'>
      <div className='md:mx-14'>
        <div className='flex flex-col-reverse md:flex-row gap-x-8'>
          <div className='md:w-3/5'>
            <div className='p-6 rounded-lg shadow-md bg-white mb-8'>
              <h5 className='font-bold mb-4'>Tentang Paket</h5>
              <p className='mb-2'>Include</p>

              <ul className='list-disc list-inside text-neutral-400 mb-4'>
                <li>Apa saja yang termasuk dalam paket misal durasi max 12 jam</li>
                <li>Sudah termasuk bensin selama 12 jam</li>
                <li>Sudah termasuk Tiket Wisata</li>
                <li>Sudah termasuk pajak</li>
              </ul>

              <p className='mb-2'>Exclude</p>
              <ul className='list-disc list-inside text-neutral-400 mb-4'>
                <li>Tidak termasuk biaya makan sopir Rp 75.000/hari</li>
                <li>Jika overtime lebih dari 12 jam akan ada tambahan biaya Rp 20.000/jam</li>
                <li>Tidak termasuk akomodasi penginapan</li>
              </ul>

              <h5 className='font-bold mb-4 mt-3'>Refund, Reschedule, Overtime</h5>

              <ul className='list-disc list-inside text-neutral-400 mb-4'>
                <li>Tidak termasuk biaya makan sopir Rp 75.000/hari</li>
                <li> Jika overtime lebih dari 12 jam akan ada tambahan biaya Rp 20.000/jam</li>
                <li> Tidak termasuk akomodasi penginapan</li>
                <li> Tidak termasuk biaya makan sopir Rp 75.000/hari</li>
                <li>Jika overtime lebih dari 12 jam akan ada tambahan biaya Rp 20.000/jam</li>
                <li> Tidak termasuk akomodasi penginapan</li>
                <li>Tidak termasuk biaya makan sopir Rp 75.000/hari</li>
                <li>Jika overtime lebih dari 12 jam akan ada tambahan biaya Rp 20.000/jam</li>
                <li> Tidak termasuk akomodasi penginapan</li>
              </ul>
            </div>

            <div className='flex justify-end'>
              <Link
                to = '/invoice'
                className='flex justify-end px-3 py-2 text-center font-medium bg-green-500 rounded-sm  text-white hover:bg-white hover:text-green-500 hover:shadow-lg hover:shadow-green-500/50'
              >
                Lanjutkan Pembayaran
              </Link>
            </div>
          </div>
          <div className='md:w-2/5 mb-8 md:mb-0'>
            <div className='p-6 rounded-lg shadow-md bg-white'>
              <div className='pb-4'>
                <img src={data.image} alt='' />    
              </div>
              <div>
                <h5 className='font-bold mb-3'>{data.name}/{data.category}</h5>
                <div className='flex flex-wrap gap-x-4 mb-12'>
                  <p className='flex items-center gap-x-2'><FiUsers/>4 orang</p>
                  <p className='flex items-center gap-x-2'><FiSettings/>Manual</p>
                  <p className='flex items-center gap-x-2'><FiCalendar/>Tahun 2020</p>
                </div>

                <div className='flex flex-wrap justify-between mb-6'>
                  <p>Total</p>
                  <p className='font-bold'>Rp. {currencyFormatter(data.price)}</p>
                </div>
              </div>

              <Link
                type='submit'
                className='w-full text-center bg-green-500 rounded-sm font-medium text-white hover:bg-white hover:text-green-500 hover:shadow-lg hover:shadow-green-500/50 px-3 py-2'
                to='/invoice'
              >
                Lanjutkan Pembayaran
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
