import React from 'react'
import {BrowserRouter, Routes, Route,} from 'react-router-dom'
import { history } from '../helpers/history'
import Home from '../pages/Home'
import Register from '../pages/auth/Register'
import Login from '../pages/auth/Login'
import SearchPage from '../pages/search/Search'
import Result from '../pages/search/Result'
import Detail from '../pages/search/Detail'
import InvoicePage from '../pages/payment/Invoice'
import Dashboard from '../pages/dashboard/Dashboard'
import DashboardCar from '../pages/dashboard/DashboardCar'
import DashboardCarAdd from '../pages/dashboard/DashboardCarAdd'
import NotFound from '../pages/NotFound'
import Unauthorize from '../components/error/Unauthorize'

export default function RouterPages() {
  return (
    <BrowserRouter history={history}>
      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='/register' element={<Register />}></Route>
        <Route path='/login' element={<Login />}></Route>
        <Route path='/search' element={<SearchPage />}></Route>
        <Route path='/search/result' element={<Result />}></Route>
        <Route path='/search/result/details/:id' element={<Detail />}></Route>
        <Route path='/invoice/:id' element={<InvoicePage />}></Route>
        <Route path='/dashboard' element={<Dashboard />}></Route>
        <Route path='/dashboard/car' element={<DashboardCar />}></Route>
        <Route path='/dashboard/car/add' element={<DashboardCarAdd />}></Route>
        <Route path='/unauthorize' element={<Unauthorize />}></Route>
        <Route path='*' element={<NotFound />}/>
      </Routes>
    </BrowserRouter>
  )
}
