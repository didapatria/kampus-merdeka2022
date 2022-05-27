import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'

import { FiChevronRight, FiPlus } from 'react-icons/fi'

import { fetchCars } from '../../actions/car'
import CardDashboardCar from './CardDashboardCar'

export default function ContentDashboardCar(props) {
  const dispatch = useDispatch()

  const dataCar = useSelector((state) => state.carsReducer.cars)
  console.log(dataCar);

  const filterCar = dataCar.filter(
    (data) => data.image && data.name && data.price !== null && data.category !== ''
  )

  const filterCarSmall = dataCar.filter(
    (data) => data.image && data.name && data.price !== null && data.category !== '' && data.category === 'small' || data.category === 'Small'
  )

  const filterCarMedium = dataCar.filter(
    (data) => data.image && data.name && data.price !== null && data.category !== '' && data.category === 'medium' || data.category === 'Medium'
  )

  const filterCarLarge = dataCar.filter(
    (data) => data.image && data.name && data.price !== null && data.category !== '' && data.category === 'large' || data.category === 'Large'
  )

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
        <Link to='/dashboard/car' className={`${props.isAll ? 'bg-primary-3 border-primary text-primary' : 'bg-white border-primary-3 text-primary-3'} border font-bold rounded-sm px-3 py-2`}>All</Link>
        <Link to='/dashboard/car/small' className={`${props.isSmall ? 'bg-primary-3 border-primary text-primary' : 'bg-white border-primary-3 text-primary-3'} border font-bold rounded-sm px-3 py-2`}>Small</Link>
        <Link to='/dashboard/car/medium' className={`${props.isMedium ? 'bg-primary-3 border-primary text-primary' : 'bg-white border-primary-3 text-primary-3'} border font-bold rounded-sm px-3 py-2`}>Medium</Link>
        <Link to='/dashboard/car/large' className={`${props.isLarge ? 'bg-primary-3 border-primary text-primary' : 'bg-white border-primary-3 text-primary-3'} border font-bold rounded-sm px-3 py-2`}>Large</Link>
      </div>
      <div className='mt-6'>
        <CardDashboardCar data={props.isAll ? filterCar : props.isSmall ? filterCarSmall : props.isMedium ? filterCarMedium : props.isLarge ? filterCarLarge : null} />
      </div>
    </div>
  )
}
