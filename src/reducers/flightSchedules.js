const initialState = {
  depSchedules: [],
  arrSchedules: [],
  schedulesLoadingStatus: 'idle',
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'SCHEDULES_FETCHING':
      return {
        ...state,
        schedulesLoadingStatus: 'loading',
      };
    case 'SCHEDULES_DEP_FETCHED':
      return {
        ...state,
        depSchedules: action.payload,
        schedulesLoadingStatus: 'idle',
      };
    case 'SCHEDULES_ARR_FETCHED':
      return {
        ...state,
        arrSchedules: action.payload,
        schedulesLoadingStatus: 'idle',
      };
    case 'SCHEDULES_FETCHING_ERROR':
      return {
        ...state,
        schedulesLoadingStatus: 'error',
      };
    default:
      return state;
  }
};

export default reducer;
