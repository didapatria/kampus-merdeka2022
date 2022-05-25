import React, { Fragment, useEffect } from 'react'
import Navbar from '../../components/Navbar'
import Search from '../../components/Search'
import Details from '../../components/Details'
import Footer from '../../components/Footer'
import { useParams } from 'react-router'
import { useDispatch, useSelector } from 'react-redux'
import { fetchCar } from '../../actions/car'

export default function Detail() {
  const {id}  = useParams()

  const dispatch = useDispatch()
  const detailCar = useSelector((state) => state.carReducer)

  useEffect(() => {
    dispatch(fetchCar(id))
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
