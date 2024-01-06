const API_KEY = 'c0068cd7-aa80-43ee-aa6d-00221b492a5d';

export const fetchFlight = (flightCode) => async (dispatch) => {
  try {
    dispatch(flightFetching());
    const response = await fetch(
      `https://airlabs.co/api/v9/flight?flight_iata=${flightCode}&api_key=${API_KEY}`
    );
    if (!response.ok) {
      throw new Error('Failed to fetch data');
    }
    const data = await response.json();
    dispatch(flightFetched(data));
  } catch (error) {
    dispatch(flightFetchingError());
  }
};

export const fetchNearbyGeo = (iataCode) => async (dispatch) => {
  try {
    dispatch(nearbyGeoFetching());
    const response = await fetch(
      `https://airlabs.co/api/v9/airports?iata_code=${iataCode}&api_key=${API_KEY}`
    );
    if (!response.ok) {
      throw new Error('Failed to fetch data');
    }
    const data = await response.json();
    dispatch(nearbyGeoFetched(data.response));
  } catch (error) {
    dispatch(nearbyGeoFetchingError());
  }
};
export const fetchNearbyViaGeo = () => async (dispatch) => {
  try {
    dispatch(nearbyGeoFetching());
    const position = await new Promise((resolve, reject) => {
      navigator.geolocation.getCurrentPosition(resolve, reject);
    });
    const lat = position.coords.latitude;
    const lng = position.coords.longitude;

    const response = await fetch(
      `https://airlabs.co/api/v9/nearby?lat=${lat}&lng=${lng}&distance=45&api_key=${API_KEY}`
    );
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }

    const data = await response.json();
    dispatch(nearbyGeoFetched(data.response.airports));
  } catch (error) {
    dispatch(nearbyGeoFetchingError());
  }
};

export const fetchSchedulesDep = (iataCode) => async (dispatch) => {
  try {
    dispatch(schedulesFetching());

    const response = await fetch(
      `https://airlabs.co/api/v9/schedules?dep_iata=${iataCode}&api_key=${API_KEY}`
    );
    if (!response.ok) {
      throw new Error('Failed to fetch data');
    }

    const data = await response.json();
    dispatch(
      schedulesDepFetched(data.error ? 'errorWithWrongCodeDep' : data.response)
    );
  } catch (error) {
    dispatch(schedulesFetchingError());
  }
};
export const fetchSchedulesArr = (iataCode) => async (dispatch) => {
  try {
    dispatch(schedulesFetching());

    const response = await fetch(
      `https://airlabs.co/api/v9/schedules?arr_iata=${iataCode}&api_key=${API_KEY}`
    );

    if (!response.ok) {
      throw new Error('Failed to fetch data');
    }
    const data = await response.json();
    dispatch(
      schedulesArrFetched(data.error ? 'errorWithWrongCodeArr' : data.response)
    );
  } catch (error) {
    dispatch(schedulesFetchingError());
  }
};
export const fetchRealTimeFlight = (iataCode) => async (dispatch) => {
  try {
    dispatch(realTimeFetching());

    const response = await fetch(
      `https://airlabs.co/api/v9/flights?flight_iata=${iataCode}&api_key=${API_KEY}`
    );
    if (!response.ok) {
      throw new Error('Failed to fetch data');
    }
    const data = await response.json();

    dispatch(
      realTimeFetched(data.error ? 'errorWithWrongCodeArr' : data.response)
    );
  } catch (error) {
    dispatch(realTimeFetchingError());
  }
};

export const flightFetching = () => {
  return {
    type: 'FLIGHT_FETCHING',
  };
};
export const flightFetched = (flight) => {
  return {
    type: 'FLIGHT_FETCHED',
    payload: flight,
  };
};
export const flightFetchingError = () => {
  return {
    type: 'FLIGHT_FETCHING_ERROR',
  };
};

export const nearbyGeoFetching = () => {
  return {
    type: 'NEARBYGEO_FETCHING',
  };
};
export const nearbyGeoFetched = (flight) => {
  return {
    type: 'NEARBYGEO_FETCHED',
    payload: flight,
  };
};
export const nearbyGeoFetchingError = () => {
  return {
    type: 'NEARBYGEO_FETCHING_ERROR',
  };
};

export const schedulesFetching = () => {
  return {
    type: 'SCHEDULES_FETCHING',
  };
};
export const schedulesDepFetched = (dep) => {
  return {
    type: 'SCHEDULES_DEP_FETCHED',
    payload: dep,
  };
};
export const schedulesArrFetched = (arr) => {
  return {
    type: 'SCHEDULES_ARR_FETCHED',
    payload: arr,
  };
};
export const schedulesFetchingError = () => {
  return {
    type: 'SCHEDULES_FETCHING_ERROR',
  };
};

export const realTimeFetching = () => {
  return {
    type: 'REAL_TIME_FETCHING',
  };
};
export const realTimeFetched = (flight) => {
  return {
    type: 'REAL_TIME_FETCHED',
    payload: flight,
  };
};
export const realTimeFetchingError = () => {
  return {
    type: 'REAL_TIME_FETCHING_ERROR',
  };
};
