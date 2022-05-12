import React, { Fragment } from "react"

import { useSelector } from 'react-redux'

import Navbar from '../../components/Navbar'
import Search from '../../components/Search'
import Footer from '../../components/Footer'

import { Navigate } from 'react-router-dom'

export default function SearchPage() {
  const { isLoggedIn } = useSelector(state => state.auth)

  if (!isLoggedIn) {
    return <Navigate to='/unauthorize' />
  }

  return (
    <Fragment>
      <Navbar isSearch />
      <div className='-mt-12'>
        <Search />
      </div>
      <Footer />
    </Fragment>
  )
}
