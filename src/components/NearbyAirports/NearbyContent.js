import React from 'react';
import { useSelector } from 'react-redux';
import Spinner from '../../UI/Spinner/Spinner';
import ErrorMessage from '../../UI/ErrorMessage/ErrorMessage';
import styles from './NearbyContent.module.scss';

export default function NearbyContent() {
  const iataData = useSelector((state) => state.nearbyGeo.nearbyAirports);
  const LoadingStatus = useSelector(
    (state) => state.nearbyGeo.nearbyLoadingStatus
  );

  return (
    <div className={styles.nearbyContent}>
      <h2 className={styles['nearby-header']}>What's nearby?</h2>
      {LoadingStatus === 'loading' ? (
        <Spinner />
      ) : (
        <ul className={styles.list}>
          {iataData.length < 1 ? (
            LoadingStatus === 'error' ? (
              <ErrorMessage>
                Server error or geolocation blocked, try again!
              </ErrorMessage>
            ) : (
              <p>No airports...</p>
            )
          ) : iataData.length < 1 ? (
            <div className={styles.noAirports}>
              Sorry, we didn't find the airport
            </div>
          ) : (
            iataData.map(({ name, distance }, i) => {
              return (
                <li className={styles.iataItem} key={name}>
                  <span className={styles.itemNumber}>
                    {i + 1}. {name}
                  </span>
                  <br />
                  {distance && (
                    <span>Distance is - {Math.round(distance)} km</span>
                  )}
                </li>
              );
            })
          )}
        </ul>
      )}
    </div>
  );
}
