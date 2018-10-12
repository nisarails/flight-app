import { all } from 'redux-saga/effects';
import { flightSaga } from './flight.saga';

export default function* rootSaga() {
  yield all([
    ...flightSaga,
  ]);
}