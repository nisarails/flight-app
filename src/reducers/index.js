import {combineReducers} from 'redux';
import flightReducer from './flight.reducer';

export default combineReducers({
  flightInfo: flightReducer,
});