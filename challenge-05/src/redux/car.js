export const carReducer = (state = {}, action) => {
  switch (action.type) {
    case 'CAR':
      return {
        ...state,
        ...action.payload,
      }
    default:
      return state
  }
}