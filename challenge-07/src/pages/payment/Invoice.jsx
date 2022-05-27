import React, { Fragment, useEffect } from 'react'

import { useDispatch, useSelector } from 'react-redux'

import Navbar from '../../components/Navbar'
import Invoice from '../../components/payment/Invoice'
import Footer from '../../components/Footer'

import { useParams } from 'react-router'
import { fetchCar } from '../../actions/car'

import { Navigate } from 'react-router-dom'

export default function InvoicePage() {
  const {id}  = useParams()

  const dispatch = useDispatch()
  const invoiceCar = useSelector((state) => state.carReducer)
  const { isLoggedIn } = useSelector(state => state.auth)

  useEffect(() => {
    dispatch(fetchCar(id))
  }, [])

  if (!isLoggedIn) {
    return <Navigate to='/unauthorize' />
  }

  return (
    <Fragment>
      <Navbar isInvoice />
      <Invoice data={invoiceCar} />
      <Footer />
    </Fragment>
  )
}
