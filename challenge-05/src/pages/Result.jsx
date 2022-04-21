import React, { Fragment, useEffect, useState } from 'react'
import Navbar from '../components/Navbar'
import Search from '../components/Search'
import Card from '../components/Card'
import Footer from '../components/Footer'

export default function Result() {
  const [cars, setCars] = useState([])

  const getCarData =  async() => {
    try {
      const dataCar = await fetch('https://rent-cars-api.herokuapp.com/customer/car')
      setCars(await dataCar.json())
    } catch (error) {
      console.log(error)
    }
  }

  const filterCar = cars.filter(
    (data) => data.status === true
  )

  useEffect(() => {
    getCarData()
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
