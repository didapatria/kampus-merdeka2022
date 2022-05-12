import { combineReducers } from 'redux'
import auth from './auth'
import message from './message'
import { carsReducer } from './cars'
import { carReducer }from './car'
import { ordersReducer }from './order'

export default combineReducers({
  auth,
  message,
  carsReducer,
  carReducer,
  ordersReducer,
})
