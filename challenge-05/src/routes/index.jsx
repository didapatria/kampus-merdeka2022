import React from 'react'
import {BrowserRouter, Routes, Route,} from 'react-router-dom'
import Home from '../pages/Home'
import Result from '../pages/Result'
import Detail from '../pages/Detail'
import NotFound from '../pages/NotFound'

export default function RouterPages() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='/search' element={<Result />}></Route>
        <Route path='/search/details/:id' element={<Detail />}></Route>
        <Route path='*' element={<NotFound />}/>
      </Routes>
    </BrowserRouter>
  )
}
