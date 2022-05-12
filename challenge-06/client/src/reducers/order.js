import {
  ORDER,
} from '../actions/types'

const initialState = {
  order: []
}

export const ordersReducer = (state = initialState, action) => {
  switch (action.type) {
    case ORDER:
      return {
        ...state,
        order: action.payload,
      }
    default:
      return state
  }
}