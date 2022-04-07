import React, { Fragment, useEffect, useState } from 'react'
import Navbar from '../components/Navbar'
import Search from '../components/Search'
import Details from '../components/Details'
import Footer from '../components/Footer'
import { useParams } from 'react-router'

export default function Detail() {
  const {id}  = useParams()

  const [details, setDetails] = useState([])

  const getDetailCar =  async() => {
    try {
      const detailCar = await fetch(`https://rent-cars-api.herokuapp.com/customer/car/${id}`)
      setDetails(await detailCar.json())
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    getDetailCar()
  }, [])

  return (
    <Fragment>
      <Navbar />
      <div className='-mt-12'>
        <Search isSearch isDetail />
      </div>
      <Details data={details} />
      <Footer />
    </Fragment>
  )
}
