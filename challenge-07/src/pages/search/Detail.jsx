import React, { Fragment, useEffect } from 'react'

import { useDispatch, useSelector } from 'react-redux'

import Navbar from '../../components/Navbar'
import Search from '../../components/Search'
import Details from '../../components/Details'
import Footer from '../../components/Footer'

import { useParams } from 'react-router'
import { fetchCar } from '../../actions/car'

import { Navigate } from 'react-router-dom'

export default function Detail() {
  const {id}  = useParams()

  const dispatch = useDispatch()
  const detailCar = useSelector((state) => state.carReducer)
  const { isLoggedIn } = useSelector(state => state.auth)

  useEffect(() => {
    dispatch(fetchCar(id))
  }, [])


  if (!isLoggedIn) {
    return <Navigate to='/unauthorize' />
  }

  return (
    <Fragment>
      <Navbar />
      <div className='-mt-12'>
        <Search isSearch isDetail />
      </div>
      <Details data={detailCar} />
      <Footer />
    </Fragment>
  )
}
