import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { useJsApiLoader } from '@react-google-maps/api';
import Map from '../GoogleMap/Map';
import Spinner from '../../UI/Spinner/Spinner';
import { fetchRealTimeFlight } from '../../actions';
import styles from './RealTime.module.scss';

export default function RealTimeFlight() {
  const { id } = useParams();
  const dispatch = useDispatch();
  const flightCoordsData = useSelector(
    (state) => state.realTimeFlight.flightCoords
  );
  let latitude = flightCoordsData.map(({ lat }) => lat)[0];

  const { isLoaded } = useJsApiLoader({
    id: 'carbon-compound-410010',
    googleMapsApiKey: 'AIzaSyCCD7QbQzVB59baCDDcOR__4xebQq3BkwA',
  });

  useEffect(() => {
    if (latitude) {
      const timer = setInterval(() => {
        dispatch(fetchRealTimeFlight(id));
      }, 10000);
      return () => clearInterval(timer);
    }
    // eslint-disable-next-line
  }, [latitude, dispatch, id]);
  return (
    <div className={styles.container}>
      {flightCoordsData.length < 1 ? (
        <h2 className={styles['flight-info-header']}>
          No info about - <span> {id} </span>
        </h2>
      ) : (
        <h2 className={styles['flight-info-header']}>
          Here is information about - <span>{id}</span>
        </h2>
      )}
      {isLoaded ? <Map /> : <Spinner />}
    </div>
  );
}
