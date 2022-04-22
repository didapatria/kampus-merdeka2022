import React, { Fragment, useEffect } from 'react'
import Navbar from '../components/Navbar'
import Search from '../components/Search'
import Details from '../components/Details'
import Footer from '../components/Footer'
import { useParams } from 'react-router'
import { useDispatch, useSelector } from 'react-redux'
import { fetchCar } from '../redux/actions'

export default function Detail() {
  const {id}  = useParams()

  const dispatch = useDispatch()
  const detailCar = useSelector((state) => state.car)

  useEffect(() => {
    dispatch(fetchCar())
  }, [])

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
