const initialState = {
  flight: {},
  flightLoadingStatus: 'idle',
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'FLIGHT_FETCHING':
      return {
        ...state,
        flightLoadingStatus: 'loading',
      };
    case 'FLIGHT_FETCHED':
      return {
        ...state,
        flight: action.payload,
        flightLoadingStatus: 'idle',
      };
    case 'FLIGHT_FETCHING_ERROR':
      return {
        ...state,
        flightLoadingStatus: 'error',
      };
    default:
      return state;
  }
};

export default reducer;
