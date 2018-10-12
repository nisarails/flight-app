import { call, put, takeLatest } from 'redux-saga/effects';
import { FETCH_FLIGHT,
	FETCH_FLIGHT_SUCCEED,
	FETCH_FLIGHT_FAILED } from '../types';

import { searchFlights } from '../apis/flight';

function* fetchFlights (action) {
	const response = yield call(searchFlights, action);
  if(response.statusText === 'OK') {
    yield put({type: FETCH_FLIGHT_SUCCEED, flights: response.data});
  } else {
    yield put({type: FETCH_FLIGHT_FAILED, errors: response.errors});
  }
}

export const flightSaga = [
  takeLatest(FETCH_FLIGHT, fetchFlights),
 ]