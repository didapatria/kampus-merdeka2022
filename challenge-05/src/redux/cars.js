const initialState = {
  cars: []
}

export const carsReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'CARS':
      return {
        ...state,
        cars: action.payload,
      }
    default:
      return state
  }
}