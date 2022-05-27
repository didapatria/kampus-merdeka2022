import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'

import { FiChevronRight, FiPlus } from 'react-icons/fi'

import { fetchCars } from '../../actions/car'
import CardDashboardCar from './CardDashboardCar'

export default function ContentDashboardCar() {
  const dispatch = useDispatch()

  const dataCar = useSelector((state) => state.carsReducer.cars)
  console.log(dataCar);

  useEffect(() => {
    dispatch(fetchCars())
  }, [])
  
  return (
    <div className='mt-16 flex-1 bg-gray-100 p-8 overflow-y-scroll'>
      <div className='flex space-x-2 items-center text-xs'>
        <div className='font-bold'>Cars</div>
        <FiChevronRight />
        <div>List Car</div>
      </div>
      <div className='my-6'>
        <div className='flex justify-between'>
          <h1 className='text-2xl font-bold'>List Car</h1>
          <Link
            to='/dashboard/car/add'
            className='flex items-center space-x-2 bg-primary font-bold text-white rounded-sm px-3 py-2'
          >
            <FiPlus className='w-5 h-5' />
            <div>Add New Car</div>
          </Link>
        </div>
      </div>
      <div className='flex space-x-4'>
        <div className='bg-primary-3 border border-primary font-bold text-primary rounded-sm px-3 py-2'>All</div>
        <div className='bg-white border border-primary-3 font-bold text-primary-3 rounded-sm px-3 py-2'>Small</div>
        <div className='bg-white border border-primary-3 font-bold text-primary-3 rounded-sm px-3 py-2'>Medium</div>
        <div className='bg-white border border-primary-3 font-bold text-primary-3 rounded-sm px-3 py-2'>Large</div>
      </div>
      <div className='mt-6'>
        <CardDashboardCar data={dataCar} />
      </div>
    </div>
  )
}
