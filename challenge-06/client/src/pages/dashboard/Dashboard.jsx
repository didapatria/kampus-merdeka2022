import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Navigate } from 'react-router-dom'

import DataTable from 'react-data-table-component';
import { columnsOrder } from '../../data/listOrder';
import { columnsCar } from '../../data/listCar';
import { fetchCars } from '../../actions/car';
import { fetchOrders } from '../../actions/order';

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
      <div className='flex drop-shadow py-4 px-8 bg-white'>
        <div className='w-56 ba-navbar-left'>
          <div className='bg-gray-200 h-8 w-24'></div>
        </div>
        <div className='flex-1 flex justify-between'>
          <div>
            burger
          </div>
          <div className='flex space-x-4'>
            <div>
              search
            </div>
            <div>
              login
            </div>
          </div>
        </div>
      </div>
      <div className='flex'>
        <div className='w-56 ba-sidebar bg-white'>
            <ul>
              <li className='p-4'>
                <span>icon</span>
                <span>Menu-1</span>
              </li>
              <li className='p-4'>
                <span>icon</span>
                <span>Menu-2</span>
              </li>
            </ul>
        </div>
        <div className='flex-1 bg-gray-100 min-h-screen p-8'>
          <div>
            Breadcrumb
          </div>
          <div className='my-8'>
            <h1 className='text-3xl font-bold'>Page Title</h1>
          </div>
          <div>
            <h2>List Order</h2>
            <DataTable
              columns={columnsOrder}
              data={filterOrder}
              pagination
            />

            <h2 className='mt-8'>List Car</h2>
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
