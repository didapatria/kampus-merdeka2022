import React from 'react'
import {BrowserRouter, Routes, Route,} from 'react-router-dom'
import Home from '../pages/Home'
import Result from '../pages/Result'
import Detail from '../pages/Detail'
import NotFound from '../pages/NotFound'
import Register from '../pages/Register'
import Login from '../pages/Login'
import Dashboard from '../pages/Dashboard'

export default function RouterPages() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='/search' element={<Result />}></Route>
        <Route path='/search/details/:id' element={<Detail />}></Route>
        <Route path='/register' element={<Register />}></Route>
        <Route path='/login' element={<Login />}></Route>
        <Route path='/dashboard' element={<Dashboard />}></Route>
        <Route path='*' element={<NotFound />}/>
      </Routes>
    </BrowserRouter>
  )
}
