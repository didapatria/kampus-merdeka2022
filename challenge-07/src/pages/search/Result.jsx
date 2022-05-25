import React, { Fragment, useEffect } from 'react'

import { useDispatch, useSelector } from 'react-redux'

import Navbar from '../../components/Navbar'
import Search from '../../components/Search'
import Card from '../../components/Card'
import Footer from '../../components/Footer'

import { fetchCars } from '../../actions/car'

import { Navigate } from 'react-router-dom'

export default function Result() {
  const dispatch = useDispatch()
  const dataCar = useSelector((state) => state.carsReducer.cars)
  const { isLoggedIn } = useSelector(state => state.auth)

  const filterCar = dataCar.filter(
    (data) => data.image && data.name && data.price !== null && data.category !== ''
  )

  useEffect(() => {
    dispatch(fetchCars())
  }, [])


  if (!isLoggedIn) {
    return <Navigate to='/unauthorize' />
  }

  return (
    <Fragment>
      <Navbar />
      <div className='-mt-12'>
        <Search isResult isSearch />
      </div>
      <Card data={filterCar} />
      <Footer />
    </Fragment>
  )
}
