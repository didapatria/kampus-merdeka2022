import React, { Fragment, useEffect, useState } from 'react'
import Navbar from '../components/Navbar'
import Search from '../components/Search'
import Card from '../components/Card'
import Footer from '../components/Footer'

export default function Result() {
  const [cars, setCars] = useState([])

  const getPostData =  async() => {
    try {
      const a = await fetch('https://rent-cars-api.herokuapp.com/customer/car')
      setCars(await a.json())
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    getPostData()
  }, [])

  return (
    <Fragment>
      <Navbar />
      <div className='-mt-12'>
        <Search />
      </div>
      <Card data={cars} />
      <Footer />
    </Fragment>
  )
}
