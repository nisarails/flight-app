import {
  FETCH_FLIGHT,
  FETCH_FLIGHT_SUCCEED,
} from '../types';

const initialState = {
  flights: [],
  loaded: true
}

export default function(state = initialState, action) {
  switch(action.type) {
    case FETCH_FLIGHT:
      return {
        ...state,
        loaded: false,
      }
    case FETCH_FLIGHT_SUCCEED:
      return {
        ...state,
        loaded: true,
        flights: action.flights
      }
    default:
      return state;
  }
}