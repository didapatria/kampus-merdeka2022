import React, { Fragment } from 'react'
import Navbar from '../components/Navbar'
import Search from '../components/Search'
import Footer from '../components/Footer'

export default function Home() {
  return (
    <Fragment>
      <Navbar />
      <div className='-mt-12'>
        <Search />
      </div>
      <Footer />
    </Fragment>
  )
}
