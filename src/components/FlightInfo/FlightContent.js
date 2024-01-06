import React from 'react';
import { useSelector } from 'react-redux';
import toUpCase from '../../utils/toUpCase';
import Spinner from '../../UI/Spinner/Spinner';
import sliceTime from '../../utils/sliceTime';
import sliceDate from '../../utils/sliceDate';
import timeConverter from '../../utils/timeConverter';
import ErrorMessage from '../../UI/ErrorMessage/ErrorMessage';
import styles from './FlightContent.module.scss';

export default function FlightContent() {
  const flightData = useSelector((state) => state.flightInfo.flight);
  const flightStatus = useSelector(
    (state) => state.flightInfo.flightLoadingStatus
  );

  return (
    <div>
      <div className={styles.flightContent}>
        <h2 className={styles['flight-header']}>
          Information about your flight:
        </h2>

        {flightStatus === 'loading' ? (
          <Spinner />
        ) : flightData.error ? (
          <ErrorMessage>No information,try again!</ErrorMessage>
        ) : !Object.values(flightData).every(
            (value) => value === undefined || value === ''
          ) ? (
          <div className={styles['flight-block']}>
            <div className={styles.upline}></div>

            <div className={styles.flightBlocks}>
              <div className={styles['block']}>
                <p className={styles['info-label']}>
                  {flightData.response.dep_iata}
                </p>
                <div className={styles['info-city']}>
                  {flightData.response.dep_city} <br />
                  <span>{flightData.response.dep_name}</span>
                </div>
                <div className={styles['info-time']}>
                  <p>Time/date of departure:</p>
                  <span className={styles.time}>
                    {sliceTime(flightData.response.dep_time)}
                  </span>
                  <br />
                  <span className={styles.date}>
                    {sliceDate(flightData.response.dep_time)}
                  </span>
                </div>
                <div className={styles['info-termin']}>
                  Terminal :
                  <span>{flightData.response.dep_terminal || '-'}</span> / Gate
                  :<span>{flightData.response.dep_gate || '-'}</span>
                </div>
              </div>
              <div className={styles['sblock']}>
                <p className={styles['info-label']}>
                  {timeConverter(flightData.response.duration)}
                </p>
                <div className={styles.status}>
                  Status : {toUpCase(flightData.response.status)}
                </div>
              </div>
              <div className={styles['block']}>
                <p className={styles['info-label']}>
                  {flightData.response.arr_iata}
                </p>
                <div className={styles['info-city']}>
                  {flightData.response.arr_city} <br />
                  <span> {flightData.response.arr_name}</span>
                </div>
                <div className={styles['info-time']}>
                  <p>Time/date of arrival:</p>
                  <span className={styles.time}>
                    {sliceTime(flightData.response.arr_time)}
                  </span>
                  <br />
                  <span className={styles.date}>
                    {sliceDate(flightData.response.arr_time)}
                  </span>
                </div>
                <div className={styles['info-termin']}>
                  Terminal :{' '}
                  <span>{flightData.response.arr_terminal || '-'}</span> / Gate
                  :<span>{flightData.response.arr_gate || '-'}</span>
                </div>
              </div>
            </div>

            <div className={styles.downline}></div>
          </div>
        ) : (
          'Here will be information!'
        )}
      </div>
    </div>
  );
}
