import React, { Fragment } from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import Service from '../components/home/Service'
import WhyUs from '../components/home/WhyUs'
import Banner from '../components/home/Banner'
import FAQ from '../components/home/FAQ'

export default function Home() {
  return (
    <Fragment>
      <Navbar isHome />
      <div>
        <Service />
        <WhyUs />
        <Banner />
        <FAQ />
      </div>
      <Footer />
    </Fragment>
  )
}
