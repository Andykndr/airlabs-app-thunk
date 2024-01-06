const initialState = {
  flightCoords: [],
  realTimeLoadingStatus: 'idle',
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'REAL_TIME_FETCHING':
      return {
        ...state,
        realTimeLoadingStatus: 'loading',
      };
    case 'REAL_TIME_FETCHED':
      return {
        ...state,
        flightCoords: action.payload,
        realTimeLoadingStatus: 'idle',
      };

    case 'REAL_TIME_FETCHING_ERROR':
      return {
        ...state,
        realTimeLoadingStatus: 'error',
      };
    default:
      return state;
  }
};

export default reducer;
