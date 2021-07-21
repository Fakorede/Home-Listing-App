import { FETCH_HOUSES, CREATE_HOUSES } from '../constants/homeConstants'

const initialState = {
  homes: []
}

export default function(state=initialState, action) {
  switch(action.type) {
    case FETCH_HOUSES:
      return {
        ...state,
        homes: action.payload
      }
    case CREATE_HOUSES:
      
  }
  return state
}
