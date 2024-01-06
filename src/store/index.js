import { createStore, applyMiddleware, combineReducers, compose } from 'redux';
import { thunk } from 'redux-thunk';
import flightInfo from '../reducers/flightInfo';
import nearbyGeo from '../reducers/nearbyGeo';
import flightSchedules from '../reducers/flightSchedules';
import realTimeFlight from '../reducers/realTimeFlight';

const store = createStore(
  combineReducers({ flightInfo, nearbyGeo, flightSchedules, realTimeFlight }),
  compose(
    applyMiddleware(thunk),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  )
);

export default store;
