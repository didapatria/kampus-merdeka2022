import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Navigate } from 'react-router-dom'

import { FiChevronRight } from 'react-icons/fi'

import DataTable from 'react-data-table-component'
import { columnsOrder } from '../../data/listOrder'
import { columnsCar } from '../../data/listCar'
import { fetchCars } from '../../actions/car'
import { fetchOrders } from '../../actions/order'

export default function ContentDashboard() {
  const { isLoggedIn, user } = useSelector(state => state.auth)

  const dispatch = useDispatch()

  const dataOrder = useSelector((state) => state.ordersReducer.order)
  const filterOrder = dataOrder.filter(
    (data) => data.Car !== null
  )
  const dataCar = useSelector((state) => state.carsReducer.cars)

  useEffect(() => {
    dispatch(fetchOrders())
    dispatch(fetchCars())
  }, [])

  if (isLoggedIn) {
    if (!user.roles.includes('ROLE_ADMIN')) {
      return <Navigate to='/unauthorize' />
    }
  }
  else {
    return <Navigate to='/unauthorize' />
  }

  return (
    <div className='mt-16 flex-1 bg-gray-100 p-8 overflow-y-scroll'>
      <div className='flex space-x-2 items-center text-xs'>
        <div className='font-bold'>Dashboard</div>
        <FiChevronRight />
        <div>Dashboard</div>
      </div>
      <div className='my-6'>
        <h1 className='text-2xl font-bold'>Dashboard</h1>
      </div>
      <div>
        <div className='flex space-x-2 items-center mb-5'>
          <div className='bg-primary w-1 h-6' />
          <h2 className=' font-bold text-sm'>List Order</h2>
        </div>
        <div className='ba-datatable'>
          <DataTable
            columns={columnsOrder}
            data={filterOrder}
            pagination
          />
        </div>

        <div className='flex space-x-2 items-center mb-5 mt-11'>
          <div className='bg-primary w-1 h-6' />
          <h2 className='font-bold text-sm'>List Car</h2>
        </div>
        <div className='ba-datatable'>
          <DataTable
            columns={columnsCar}
            data={dataCar}
            pagination
          />
        </div>
      </div>
    </div>
  )
}
