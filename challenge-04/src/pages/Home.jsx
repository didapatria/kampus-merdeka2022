import React, { Fragment } from 'react'
import Navbar from '../components/Navbar'
import Search from '../components/Search'

export default function Home() {
  return (
    <Fragment>
      <Navbar />
      <div className='-mt-12'>
        <Search />
      </div>
    </Fragment>
  )
}
