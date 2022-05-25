import React from 'react'
import { Link } from 'react-router-dom'

export default function Search(props) {
  return (
    <div className='relative container mx-auto p-4 md:p-0'>
      <div className='md:mx-14 rounded-lg shadow-md bg-white'>
        <div className={props.isSearch ? 'px-6 pt-6' : null}>
          <h5 className='font-bold mb-3'>{props.isSearch ? 'Pencarianmu' : null}</h5>
        </div>
        <div className='p-6 md:flex md:justify-between md:space-x-4'>
          <div className={props.isDetail ? 'md:w-1/4' : 'md:w-1/5'}>
            <label htmlFor='driver' className='block text-sm font-medium text-gray-700'>
              Tipe Driver
            </label>
            <select
              id='driver'
              name='driver'
              placeholder='Pilih Tipe Driver'
              disabled={props.isDetail}
              className={props.isDetail ? 'mt-1 block w-full py-2 px-3 border border-gray-300 bg-gray-200 rounded-md shadow-sm focus:outline-none focus:ring-green-500 focus:border-green-500 sm:text-sm' : 'mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-green-500 focus:border-green-500 sm:text-sm'}
            >
              <option hidden>Pilih Tipe Driver</option>
              <option>Dengan Sopir</option>
              <option>Tanpa Sopir (Lepas Kunci)</option>
            </select>
          </div>
          <div className={props.isDetail ? 'md:w-1/4' : 'md:w-1/5'}>
            <label htmlFor='date' className='block text-sm font-medium text-gray-700'>
              Tanggal
            </label>
            <input 
              type='date'
              name='date'
              id='date'
              placeholder='Pilih Tanggal'
              disabled={props.isDetail}
              className={props.isDetail ? 'mt-1 block w-full py-2 px-3 border border-gray-300 bg-gray-200 rounded-md shadow-sm focus:outline-none focus:ring-green-500 focus:border-green-500 sm:text-sm' : 'mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-green-500 focus:border-green-500 sm:text-sm'}
            />
          </div>
          <div className={props.isDetail ? 'md:w-1/4' : 'md:w-1/5'}>
            <label htmlFor='time' className='block text-sm font-medium text-gray-700'>
              Waktu Jemput/Ambil
            </label>
            <input
              type='time'
              name='time'
              id='time'
              placeholder='Pilih Waktu'
              disabled={props.isDetail}
              className={props.isDetail ? 'mt-1 block w-full py-2 px-3 border border-gray-300 bg-gray-200 rounded-md shadow-sm focus:outline-none focus:ring-green-500 focus:border-green-500 sm:text-sm' : 'mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-green-500 focus:border-green-500 sm:text-sm'}
            / >
          </div>
          <div className={props.isDetail ? 'md:w-1/4' : 'md:w-1/5'}>
            <label htmlFor='time' className='block text-sm font-medium text-gray-700'>
              Jumlah Penumpang (optional)
            </label>
            <input
              type='number'
              name='number'
              id='number'
              min='0'
              placeholder='Jumlah Penumpang'
              disabled={props.isDetail}
              className={props.isDetail ? 'mt-1 block w-full py-2 px-3 border border-gray-300 bg-gray-200 rounded-md shadow-sm focus:outline-none focus:ring-green-500 focus:border-green-500 sm:text-sm' : 'mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-green-500 focus:border-green-500 sm:text-sm'}
            />
          </div>
          {props.isDetail ? null : <div className=''>
            <label className='block text-white' disabled>
              Cari Mobil
            </label>
            <Link
              type='submit'
              className={`rounded-sm font-medium px-3 py-2
                ${props.isResult ?
                  'bg-white text-blue-900 hover:bg-blue-900 hover:text-white hover:shadow-lg hover:shadow-blue-900/50 border-2 border-blue-900'
                  :
                  'bg-green-500 text-white hover:bg-white hover:text-green-500 hover:shadow-lg hover:shadow-green-500/50'
                }
              `}
              to='/search/result'
            >
              {props.isResult ? 'Edit' : 'Cari Mobil'}
            </Link>
          </div>}
        </div>
      </div>
    </div>
  )
}
