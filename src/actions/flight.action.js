import { FETCH_FLIGHT } from '../types.js';

export function loadFlights(filter) {
  return {
    type: FETCH_FLIGHT,
    filter
  }
}
