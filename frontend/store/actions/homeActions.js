import { FETCH_HOUSES, CREATE_HOUSES } from '../constants/homeConstants'

export const fetchHomes = () = async (dispatch) => {
  // logic to fetch homes
  
  dispatch({
    type: FETCH_HOUSES,
    payload: 1
  })
}