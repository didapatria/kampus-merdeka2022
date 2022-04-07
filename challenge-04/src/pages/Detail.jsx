import React, { Fragment, useEffect, useState } from 'react'
import Navbar from '../components/Navbar'
import Search from '../components/Search'
import Details from '../components/Details'
import Footer from '../components/Footer'
import { useParams } from 'react-router'

export default function Detail() {
  const {id}  = useParams();

  const [details, setDetails] = useState([])

  const getDetail =  async() => {
    try {
      const a = await fetch(`https://rent-cars-api.herokuapp.com/customer/car/${id}`)
      setDetails(await a.json())
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    getDetail()
  }, [])

  return (
    <Fragment>
      <Navbar />
      <div className='-mt-12'>
        <Search />
      </div>
      <Details data={details} />
      <Footer />
    </Fragment>
  )
}
