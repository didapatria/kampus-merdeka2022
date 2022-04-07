import React from 'react'
import { FiUsers, FiSettings, FiCalendar } from 'react-icons/fi'
import { Link } from 'react-router-dom'

export default function Details(props) {
  const data = props.data
  return (
    <div className='max-w-7xl mx-auto mt-9'>
      <div className='mx-8'>
        <div className='flex flex-wrap gap-x-8'>
          <div className='md:w-3/5'>
            <div className='p-6 rounded-lg shadow-md bg-white'>
              <h5 className="font-bold">Tentang Paket</h5>
              <p>Include</p>

              <ul className="text-muted">
                  <li>Apa saja yang termasuk dalam paket misal durasi max 12 jam</li>
                  <li>Sudah termasuk bensin selama 12 jam</li>
                  <li>Sudah termasuk Tiket Wisata</li>
                  <li>Sudah termasuk pajak</li>
              </ul>

              <p>Exlude</p>
              <ul className="text-muted">
                  <li>Tidak termasuk biaya makan sopir Rp 75.000/hari</li>
                  <li>Jika overtime lebih dari 12 jam akan ada tambahan biaya Rp 20.000/jam</li>
                  <li>Tidak termasuk akomodasi penginapan</li>
              </ul>
            </div>
          </div>
          <div className='md:w-2/5'>
            <div className='p-6 rounded-lg shadow-md bg-white'>
              <div className='pb-4'>
                <img src={data.image} alt='' />    
              </div>
              <div>
                <h5 className='font-bold mb-3'>{data.name}/{data.category}</h5>
                <div className='flex flex-wrap mb-12'>
                  <p className='flex gap-2'><FiUsers/>4 orang</p>
                  <p className='flex gap-2'><FiSettings/>Manual</p>
                  <p className='flex gap-2'><FiCalendar/>Tahun 2020</p>
                </div>

                <div className='flex flex-wrap mb-6'>
                  <p>Total</p>
                  <p className='font-bold'>Rp. {data.price.toLocaleString('en-US')}</p>
                </div>


                <Link
                  type='submit'
                  className='w-full text-center bg-lime-500 rounded-sm font-medium text-white hover:bg-white hover:text-lime-500 hover:shadow-lg hover:shadow-lime-500/50 px-3 py-2'
                  to={`payment/${data.id}`}
                >
                  Lanjutkan Pembayaran
                </Link>
              </div>
                
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
