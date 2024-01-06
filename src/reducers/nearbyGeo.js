const initialState = {
  nearbyAirports: [],
  nearbyLoadingStatus: 'idle',
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'NEARBYGEO_FETCHING':
      return {
        ...state,
        nearbyLoadingStatus: 'loading',
      };
    case 'NEARBYGEO_FETCHED':
      return {
        ...state,
        nearbyAirports: action.payload,
        nearbyLoadingStatus: 'idle',
      };
    case 'NEARBYGEO_FETCHING_ERROR':
      return {
        ...state,
        nearbyLoadingStatus: 'error',
      };
    default:
      return state;
  }
};

export default reducer;
