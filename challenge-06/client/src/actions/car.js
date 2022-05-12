import axios from 'axios'

import {
  CARS,
  CAR,
} from './types'

export const fetchCars = () => {
  return async (dispatch) => {
    try {
      const res = await axios.get('https://rent-cars-api.herokuapp.com/admin/car')
      console.log(res, 'ini dari fetch api')
      dispatch({
        type: CARS,
        payload: res.data,
      })
    } catch (error) {
      console.error(error)
    }
  }
}

export const fetchCar = (id) => {
  return async (dispatch) => {
    try {
      const res = await axios.get(`https://rent-cars-api.herokuapp.com/admin/car/${id}`)
      dispatch({
        type: CAR,
        payload: res.data,
      })
    } catch (error) {
      console.error(error)
    }
  }
}