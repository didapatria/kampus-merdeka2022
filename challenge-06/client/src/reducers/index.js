import { combineReducers } from 'redux'
import auth from './auth'
import message from './message'
import { carsReducer } from './cars'
import { carReducer }from './car'

export default combineReducers({
  auth,
  message,
  carsReducer,
  carReducer,
})
