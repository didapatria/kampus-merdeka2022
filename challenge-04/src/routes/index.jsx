import React from 'react'
import {BrowserRouter, Routes, Route,} from 'react-router-dom'
import Home from '../pages/Home'

export default function RouterPages() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />}></Route>
      </Routes>
    </BrowserRouter>
  )
}
