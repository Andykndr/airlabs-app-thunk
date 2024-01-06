import { BrowserRouter, Route, Routes } from 'react-router-dom';
import AppFooter from '../AppFooter/AppFooter';
import AppHeader from '../AppHeader/AppHeader';
import NearbyAirports from '../NearbyAirports/NearbyAirports';
import FlightInfo from '../FlightInfo/FlightInfo';
import FlightSchedules from '../FlightSchedules/FlightSchedules';
import RealTimeFlight from '../RealTimeFlight/RealTimeFlight';
import AirlabsMain from '../../pages/AirlabsMain';
import AirlabsError from '../../pages/AirlabsError';
import './App.scss';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <AppHeader />
        <Routes>
          <Route exact path="/airlabs-app" element={<AirlabsMain />} />
          <Route exact path="/" element={<AirlabsMain />} />
          <Route exact path="*" element={<AirlabsError />} />
          <Route exact path="/flight-info" element={<FlightInfo />} />
          <Route exact path="/nearby" element={<NearbyAirports />} />
          <Route exact path="/schedules" element={<FlightSchedules />} />
          <Route
            exact
            path="/real-time-flight/:id"
            element={<RealTimeFlight />}
          />
        </Routes>
        <AppFooter />
      </BrowserRouter>
    </div>
  );
}

export default App;
