import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Navigate } from 'react-router-dom'

import { FiChevronRight, FiMenu, FiSearch } from 'react-icons/fi'

import Dropdowns from '../../components/dashboard/Dropdowns'

import DataTable from 'react-data-table-component'
import { columnsOrder } from '../../data/listOrder'
import { columnsCar } from '../../data/listCar'
import { fetchCars } from '../../actions/car'
import { fetchOrders } from '../../actions/order'

export default function Dashboard() {
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
    <div>
      <div className='flex drop-shadow py-4 px-8 bg-white items-center'>
        <div className='w-56 ba-navbar-left'>
          <div className='bg-gray-200 h-8 w-24'></div>
        </div>
        <div className='flex-1 flex justify-between'>
          <div className='self-center'>
            <FiMenu className='w-5 h-5' />
          </div>
          <div className='flex space-x-4'>
            <div className='flex'>
              <div className='relative'>
                <FiSearch className='absolute left-3 top-2 mt-1 stroke-neutral-400' />
                <input type='search' placeholder='Search' className='border pl-9 py-2 rounded' />
              </div>
              <button className='bg-white font-bold text-blue-900 hover:bg-blue-900 hover:text-white hover:shadow-lg hover:shadow-blue-900/50 border px-3 py-2 rounded border-blue-900'>Search</button>
            </div>
            <div class='flex items-center space-x-2'>
              <div class='h-9 w-9 object-cover rounded-full bg-primary-3' />
              <div className=''>
                <Dropdowns />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className='flex'>
        <div className='w-56 ba-sidebar bg-white'>
            <ul className='mt-5 font-bold text-sm'>
              <li className='px-6 py-3 text-neutral-400'>
                <span>DASHBOARD</span>
              </li>
              <li className='px-6 py-3 bg-primary-3'>
                <span>Dashboard</span>
              </li>
            </ul>
        </div>
        <div className='flex-1 bg-gray-100 min-h-screen p-8'>
          <div className='flex space-x-2 items-center text-xs'>
            <div className='font-bold'>Dashboard</div>
            <FiChevronRight />
            <div>Dashboard</div>
          </div>
          <div className='my-8'>
            <h1 className='text-2xl font-bold'>Dashboard</h1>
          </div>
          <div>
            <div className='flex space-x-2 items-center mb-5'>
              <div className='bg-primary w-1 h-6' />
              <h2 className=' font-bold text-sm'>List Order</h2>
            </div>
            <DataTable
              columns={columnsOrder}
              data={filterOrder}
              pagination
            />

            <div className='flex space-x-2 items-center mb-5 mt-11'>
              <div className='bg-primary w-1 h-6' />
              <h2 className='font-bold text-sm'>List Car</h2>
            </div>
            <DataTable
              columns={columnsCar}
              data={dataCar}
              pagination
            />
          </div>
        </div>
      </div>
    </div>
  )
}
