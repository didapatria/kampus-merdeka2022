import React, { Fragment } from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import Service from '../components/home/Service'
import Search from '../components/Search'
import WhyUs from '../components/home/WhyUs'

export default function Home() {
  return (
    <Fragment>
      <Navbar isHome />
      <div>
        <div className='-mt-12'>
          <Search />
        </div>
        <Service />
        <WhyUs />
      </div>
      <Footer />
    </Fragment>
  )
}
