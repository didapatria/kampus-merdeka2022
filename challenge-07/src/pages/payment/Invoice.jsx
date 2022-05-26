import React, { Fragment } from 'react'

import { useSelector } from 'react-redux'

import Navbar from '../../components/Navbar'
import Invoice from '../../components/payment/Invoice'
import Footer from '../../components/Footer'

import { Navigate } from 'react-router-dom'

export default function InvoicePage() {
  const { isLoggedIn } = useSelector(state => state.auth)

  if (!isLoggedIn) {
    return <Navigate to='/unauthorize' />
  }

  return (
    <Fragment>
      <Navbar isInvoice />
      <Invoice />
      <Footer />
    </Fragment>
  )
}
