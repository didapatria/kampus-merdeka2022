import axios from 'axios'

import {
  ORDER,
} from './types'

export const fetchOrders = () => {
  return async (dispatch) => {
    try {
      const res = await axios.get('https://rent-cars-api.herokuapp.com/admin/order')
      dispatch({
        type: ORDER,
        payload: res.data,
      })
    } catch (error) {
      console.error(error)
    }
  }
}