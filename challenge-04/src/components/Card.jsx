import React from 'react'
import { FiUsers, FiSettings, FiCalendar } from 'react-icons/fi'
import { Link } from 'react-router-dom'

export default function Card(props) {
  const data = props.data
  return (
    <div className='max-w-7xl mx-auto mt-9'>
      <div className='mx-8'>
        <div className='flex flex-wrap'>
          {data.map((car, id) => (
            <div className='md:w-1/3'>
              <div className='p-6 m-6 rounded-lg shadow-md bg-white'>
                <div className='pb-4'>
                  <img src={car.image} alt='' />    
                </div>
                <div>
                  <p className='mb-3'>{car.name}/{car.category}</p>
                  <h5 className='font-bold mb-3'>Rp. {car.price.toLocaleString('en-US')} / hari</h5>
                  <p className='mb-3'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                  <p className='mb-3 flex gap-2'><FiUsers/>4 orang</p>
                  <p className='mb-3 flex gap-2'><FiSettings/>Manual</p>
                  <p className='mb-3 flex gap-2'><FiCalendar/>Tahun 2020</p>

                  <Link
                    type='submit'
                    className='w-full text-center bg-lime-500 rounded-sm font-medium text-white hover:bg-white hover:text-lime-500 hover:shadow-lg hover:shadow-lime-500/50 px-3 py-2'
                    to={`details/${car.id}`}
                  >
                    Pilih Mobil
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}