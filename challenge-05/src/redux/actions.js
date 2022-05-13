import axios from 'axios'

export const fetchCars = () => {
  return async (dispatch) => {
    try {
      const res = await axios.get('https://rent-cars-api.herokuapp.com/admin/car')
      dispatch({
        type: 'CARS',
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
        type: 'CAR',
        payload: res.data,
      })
    } catch (error) {
      console.error(error)
    }
  }
}