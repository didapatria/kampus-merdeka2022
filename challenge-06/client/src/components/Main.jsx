import React from 'react'
import { Link } from 'react-router-dom'

export default function Main(props) {
  return (
    <main className='mt-10 mx-auto container px-4 sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 lg:px-8 xl:mt-28'>
      <div className='text-left'>
        <h1 className='text-4xl font-bold sm:text-3xl md:text-4xl md:max-w-md xl:max-w-xl'>
          <span className='block xl:inline'>Sewa & Rental Mobil Terbaik di kawasan (Lokasimu)</span>
        </h1>
        <p className='mt-3 text-base text-gray-500 sm:mt-5 sm:text-xs md:mt-5 md:text-sm md:max-w-xs xl:max-w-md'>
          Selamat datang di Binar Car Rental. Kami menyediakan mobil kualitas terbaik dengan harga terjangkau. Selalu siap melayani kebutuhanmu untuk sewa mobil selama 24 jam.
        </p>
        {!props.isSearch && (
          <Link to='/search' className='rounded-sm px-5 py-3 text-center font-medium bg-green-500 text-white mt-8' type="submit">Mulai Sewa Mobil</Link>
        )}
      </div>
    </main>
  )
}
