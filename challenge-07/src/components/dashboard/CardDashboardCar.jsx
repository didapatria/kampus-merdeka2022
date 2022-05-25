import React from 'react'
import { FiKey, FiClock, FiTrash, FiEdit } from 'react-icons/fi'
import { Link } from 'react-router-dom'

import Moment from 'react-moment'

export default function CardDashboardCar(props) {
  const data = props.data

  const currencyFormatter = (value) => {
    const formattedAmount = Math.trunc(value)
      .toString()
      .replace(/(\d)(?=(\d{3})+(?:\.\d+)?$)/g, '$1,')
    return formattedAmount
  }
  return (
    <div className='flex flex-wrap'>
      {data.map((car, id) => (
        <div className='w-1/3'>
          <div className='m-4 p-6 rounded-lg shadow-md bg-white'>
            <div className='pb-4 min-h-[270px] flex justify-center items-center'>
              <img src={car.image} alt='' />    
            </div>
            <div>
              <p className='mb-3'>{car.name}/{car.category}</p>
              <h5 className='font-bold mb-3'>Rp. {currencyFormatter(car.price)} / hari</h5>
              <p className='mb-3 flex items-center space-x-2 font-light text-gray-500'>
                <FiKey />
                <div>
                <Moment format="D MMM YYYY" date={car.start_rent_at} /> - <Moment format="D MMM YYYY" date={car.finish_rent_at} />
                </div>
              </p>
              <p className='mb-3 flex items-center space-x-2 font-light text-gray-500'>
                <FiClock />
                <div>
                  Updated at{' '}
                  <Moment format="D MMM YYYY, hh.mm" date={car.updatedAt} />
                </div>
              </p>

              <div className='flex space-x-4'>
                <div className='flex w-1/2 items-center justify-center space-x-2 bg-white border border-red-500 rounded-sm font-medium text-red-500 hover:bg-red-500 hover:text-white hover:shadow-lg hover:shadow-red-500/50 px-3 py-2'>
                  <FiTrash />
                  <div>Delete</div>
                </div>
                <Link
                  to={`${car.id}`}
                  className='flex w-1/2 items-center justify-center space-x-2 bg-green-500 rounded-sm font-medium text-white hover:bg-white hover:text-green-500 hover:shadow-lg hover:shadow-green-500/50 px-3 py-2'
                >
                  <FiEdit />
                  <div>Edit</div>
                </Link>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}