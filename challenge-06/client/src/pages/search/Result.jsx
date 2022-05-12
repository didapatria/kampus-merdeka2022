import React, { Fragment, useEffect } from 'react'
import Navbar from '../../components/Navbar'
import Search from '../../components/Search'
import Card from '../../components/Card'
import Footer from '../../components/Footer'
import { useDispatch, useSelector } from 'react-redux'
import { fetchCars } from '../../actions/car'

export default function Result() {
  const dispatch = useDispatch()
  const dataCar = useSelector((state) => state.cars.cars)

  const filterCar = dataCar.filter((data) => data.status === true)

  useEffect(() => {
    dispatch(fetchCars())
  }, [])

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
